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
    console.log('funcion que consume el api:', search.length);
    const formatedSearch = search.trim().toLowerCase();

    try {
        const users: User[] = await getUsers();
        if (formatedSearch === '') return users;
        const filteredUser = users.filter((user) => user.name.toLowerCase().trim().includes(formatedSearch));
        return filteredUser;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};
