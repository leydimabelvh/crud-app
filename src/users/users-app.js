import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
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
    await usersStore.loadPreviousPage();
    
    element.innerHTML = '';

    renderTable( element );
    renderButtons( element );
    renderAddButton( element );
    renderModal( element );

}