import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
    currentPage: 0,
    userList: [],
}

const loadNextPage = async() => {
   const userList = await loadUsersByPage( state.currentPage + 1 );
   if ( userList.length === 0 ) return;

   state.currentPage += 1;
   state.userList = userList;
}

const loadPreviousPage = async() => {
   const userList = await loadUsersByPage( state.currentPage - 1 );
   if ( state.currentPage === 1 ) return;
   if ( userList.length  === 0 ) return;

   state.currentPage -= 1;
   state.userList = userList;
}

/**
 * 
 * @param { User } userProcessed 
 */
const onUserChanged = ( userProcessed ) => {

   let wasFound = true;

   state.userList = state.userList.map( ( user ) => {
      if ( user.id  === userProcessed.id ) {
         wasFound = true;
         return userProcessed;
      }

      return user;      
   })

   if ( state.userList.length < 10 && !wasFound ) {
      state.userList.push( user );
   }
}

const reloadPage = async() => {
   const userList = await loadUsersByPage( state.currentPage );
   if ( userList.length === 0 ) {
      await loadPreviousPage();
      return;
   }
   state.userList = userList;
}

export default {
   loadNextPage,
   loadPreviousPage,
   onUserChanged,
   reloadPage,
   /**
    * 
    * @returns {User[]}
    */
   getUserList: () => [...state.userList],
   /**
    * 
    * @returns {Number}
    */
   getCurrentPage: () => state.currentPage,
}