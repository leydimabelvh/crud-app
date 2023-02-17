import usersStore from './store/users-store';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {
    document.querySelector('#title-app').innerHTML = 'CRUD App';

    element.innerHTML = 'Loading...';

    usersStore.loadNextPage();
}