import { User } from "../models/user";
import { userModelToLocalhostUser } from '../mappers/user-to-localhost.mapper';
import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param { Like<User> } userLike 
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName || !user.balance) {
        throw 'First and last names are required';
    }

    const userToSave = userModelToLocalhostUser( user );
    let userProcessed;
    
    if ( user.id ) {
        userProcessed = await updateUser( userToSave );
    } else {
        userProcessed = await createUser( userToSave );
    }

    return localhostUserToModel( userProcessed );
}

/**
 * 
 * @param { Like<User> } userLike 
 */
const createUser = async( userLike ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const response = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( userLike ),
        headers: {
            'Content-Type': 'application/json',
        }
    } );
    
    const newUser = await response.json();
    console.log({newUser});
    return newUser;
}

const updateUser = async( userLike ) => {
    const url = ` ${ import.meta.env.VITE_BASE_URL }/users/${ userLike.id } `;
    const response = await fetch( url, {
        method: 'PATCH',
        body: JSON.stringify( userLike ),
        headers: {
            'Content-Type': 'application/json',
        }
    } );

    const updatedUser = await response.json();

    return updatedUser;
}