import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );
    
    if ( user.id ) {
        throw ' not implemented';
        return;
    }

    const updatedUser = await createUSer( user );

    return updatedUser;
}

/**
 * 
 * @param {Like<USer>} userLike 
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