import usersStore from '../../store/users-store';
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
    // tableBody.innerHTML = `
    //     <tr>
    //         <td>${usersStore.getUserList().id}</td>
    //         <td>Mabe</td>
    //         <td>Mabe</td>
    //         <td>Mabe</td>
    //         <td>Mabe</td>
    //         <td>Mabe</td>
    //         <td>Mabe</td>
    //     </tr>
    // `;
    
    table.append( tableHeader, tableBody );

    return table;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderTable = ( element ) => {

    const userList = usersStore.getUserList();

    if (!table) {
        table = createTable();
        element.append( table );

        // TODO
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
                    <a href="#" data-id="${ user.id }">Update</a>
                    |
                    <a href="#" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `;
    } );



    table.querySelector( 'tbody' ).innerHTML = tableHTML;



}