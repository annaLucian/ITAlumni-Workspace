import { type User } from '../models/user.model.js';

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch('/public/data/users.json');
        if (!response.ok) {
            throw new Error('No se cargo los usuarios');
        }
        const data: User[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};
