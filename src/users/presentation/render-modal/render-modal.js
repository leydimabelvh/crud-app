import modalHTML from './render-modal.html?raw';
import './render-modal.css';

let modalContainer;

export const showModal = () => {
    modalContainer?.classList.remove( 'hide-modal' );
}

export const hideModal = () => {
    modalContainer?.classList.add( 'hide-modal' );
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {
    if ( modalContainer ) return;

    modalContainer = document.createElement( 'div' );
    modalContainer.innerHTML = modalHTML;
    modalContainer.className = 'modal-container hide-modal';

    element.append( modalContainer );

    const modalForm  = document.querySelector( '.modal-form' );

    modalContainer.addEventListener( 'click', ( event ) => {
        const isModal = event.target.matches( '.modal-container' );

        if ( !isModal ) return;
        hideModal();
        
    } );

    modalForm.addEventListener( 'submit', (event) => {
        event.preventDefault();
    } );

}