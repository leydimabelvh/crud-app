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

const onUserChanger = () => {
   throw new Error('Not implemented');
}

const reloadPage = () => {
   throw new Error('Not implemented');
}

export default {
   loadNextPage,
   loadPreviousPage,
   onUserChanger,
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