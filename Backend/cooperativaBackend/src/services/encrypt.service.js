import bycrypt from 'bcryptjs';

export const encrypt = async (password) => {
    const salt = await bycrypt.genSalt(10);
    return await bycrypt.hash(password, salt);
}

export const compare = async (password, receivedPassword) => {
    return await bycrypt.compare(password, receivedPassword);
}