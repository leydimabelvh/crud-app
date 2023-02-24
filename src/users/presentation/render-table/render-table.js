import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement( 'table' );
    const tableHeader = document.createElement( 'thead' );
    tableHeader.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement( 'tbody' );
    
    table.append( tableHeader, tableBody );

    return table;
}

/**
 * 
 * @param { MouseEvent } event  
 */
const tableSelectedListener = (event) => {
    const element = event.target.closest('.update-user');

    if ( !element ) return;

    const id = element.getAttribute( 'data-id' );
    showModal( id );
}

/**
 * 
 * @param { HTMLDivElement } element 
 */

export const renderTable = ( element ) => {

    const userList = usersStore.getUserList();

    if (!table) {
        table = createTable();
        element.append( table );

        table.addEventListener( 'click', (event) => tableSelectedListener (event) );
    }

    let tableHTML = '';
    userList.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#" class="update-user" data-id="${ user.id }">Update</a>
                    |
                    <a href="#" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `;
    } );

    table.querySelector( 'tbody' ).innerHTML = tableHTML;
}