import { type User } from '../../models/user.model.js';
import { getUsersByName } from '../../services/userServices.js';
import { debounce } from '../utils/debounce.js';
import { renderUsers } from './renderUsers.js';

const executeSearch = debounce(async (searchTerm: string) => {
    const userFiltered = await getUsersByName(searchTerm);
    renderUsers(userFiltered);
}, 500);

export const search = async (): Promise<User[] | void> => {
    const input = document.querySelector('#input-networking') as HTMLInputElement | null;

    if (!input) return;

    input.addEventListener('input', function (this: HTMLInputElement) {
        this.value = this.value.replace(/^\s+/, '');
        executeSearch(input.value);
    });
};
