import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {
    document.querySelector('#title-app').innerHTML = 'CRUD App';

    element.innerHTML = 'Loading...';
    
    await usersStore.loadNextPage();
    
    element.innerHTML = '';

    renderTable( element );
    renderButtons( element );
}