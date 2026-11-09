import { type User } from '../../models/user.model.js';
import { renderUsers } from './renderUsers.js';

export const debunceSearch = (users: User[]): void => {
    const input = document.querySelector('#input-networking') as HTMLInputElement;

    input.addEventListener('keyup', () => {
        const formatedvalue = input.value.trim().toLowerCase();

        const userFiltered = users.filter((user) => user.name.toLocaleLowerCase().includes(formatedvalue));
        renderUsers(userFiltered);
    });
};
