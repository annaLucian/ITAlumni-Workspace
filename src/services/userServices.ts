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

export const getUsersByName = async (search: string): Promise<User[]> => {
    const formatedSearch = search.trim().toLowerCase();
    if (formatedSearch === '') return [];
    try {
        const users: User[] = await getUsers();

        const filteredUser = users.filter((user) => user.name.toLowerCase().trim().includes(formatedSearch));
        return filteredUser;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};
