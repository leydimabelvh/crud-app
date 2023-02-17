import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
   await loadUsersByPage( state.currentPage + 1 );
}

const loadPreviousPage = async() => {
   throw new Error('Not implemented');
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
   getUser: () => [...state.users],
   getCurrentPage: () => [...state.currentPage],
}