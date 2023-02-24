import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';

let modalContainer, modalForm;
let loadedUser = {};

/**
 * 
 * @param { String|Number } id 
 */
export const showModal = async( id ) => {
    modalContainer?.classList.remove( 'hide-modal' );
    loadedUser = {};

    if ( !id ) return;

    const user = await getUserById( id );
    setFormValues( user );
}

export const hideModal = () => {
    modalContainer?.classList.add( 'hide-modal' );

    modalForm?.reset();
}

/**
 * 
 * @param { User } user 
 */
const setFormValues = ( user ) => {
    modalForm.querySelector( '[name="firstName"]' ).value = user.firstName;
    modalForm.querySelector( '[name="lastName"]' ).value = user.lastName;
    modalForm.querySelector( '[name="balance"]' ).value = user.balance;
    modalForm.querySelector( '[name="isActive"]' ).checked = user.isActive;
    loadedUser = user;
}

/**
 * 
 * @param { HTMLDivElement } element 
 * @param { (userLike) => Promise<void> } callback 
 * @returns 
 */
export const renderModal = ( element, callback ) => {
    if ( modalContainer ) return;
    if ( !callback ) {
        throw 'Callback is necessary';
    }

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

    modalForm.addEventListener( 'submit', async(event) => {
        event.preventDefault();

        const formData = new FormData( modalForm );

        const userLike = { ...loadedUser };

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

        await callback( userLike )

        hideModal();
    } );
}