import { User } from "../models/user";
import { userModelToLocalhostUser } from '../mappers/user-to-localhost.mapper';

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
    
    if ( user.id ) {
        throw ' not implemented';
        return;
    }

    const updatedUser = await createUSer( userToSave );

    return updatedUser;
}

/**
 * 
 * @param { Like<User> } userLike 
 */
const createUSer = async( userLike ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const response = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( userLike ),
        headers: {
            'Content-Type': 'application/json',
        }
    } );
    
    const newUser = response.json();
    console.log(newUser);
    return newUser;
}