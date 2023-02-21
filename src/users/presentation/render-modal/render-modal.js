import modalHTML from './render-modal.html?raw';
import './render-modal.css';

let modalContainer, modalForm;

export const showModal = () => {
    modalContainer?.classList.remove( 'hide-modal' );
}

export const hideModal = () => {
    modalContainer?.classList.add( 'hide-modal' );

    modalForm?.reset();
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

    modalForm  = document.querySelector( '.modal-form' );

    modalContainer.addEventListener( 'click', ( event ) => {
        const isModal = event.target.matches( '.modal-container' );

        if ( !isModal ) return;
        hideModal();
        
    } );

    modalForm.addEventListener( 'submit', (event) => {
        event.preventDefault();

        const formData = new FormData( modalForm );

        const userLike = {};

        for (const [key, value] of formData) {
            if ( key === 'balance' ) {
                userLike[key] = +value;
                continue
            }

            if ( key === 'isActive' ) {
                userLike[key] = ( value === 'on' ) ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        console.log(userLike);

        hideModal();
    } );

}