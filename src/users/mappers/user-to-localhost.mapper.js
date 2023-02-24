import { User } from "../models/user";

/**
 * 
 * @param { User } user 
 */
export const userModelToLocalhostUser = ( userModel ) => {
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = userModel;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName, 
    };
}