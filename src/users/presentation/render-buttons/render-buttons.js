import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    let currentPage = usersStore.getCurrentPage();

    const nextButton = document.createElement( 'button' );
    nextButton.innerText = 'Next >';
    
    const previousButton = document.createElement( 'button' );
    previousButton.innerText = '< Previous';

    const currentPageLabel = document.createElement( 'span' );
    currentPageLabel.id = 'currentPage';
    currentPageLabel.innerText = currentPage;

    element.append( previousButton, currentPageLabel, nextButton );

    nextButton.addEventListener( 'click', () => {
        usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(); 
    } ); 

    previousButton.addEventListener( 'click', () => {
        usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable();
    })

}