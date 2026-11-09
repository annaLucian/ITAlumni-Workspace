import { type User } from '../../models/user.model.js';
import { getUsersByName } from '../../services/userServices.js';
import { debounce } from '../utils/debunce.js';
import { renderUsers } from './renderUsers.js';

export const search = async (): Promise<User[] | void> => {
    const input = document.querySelector('#input-networking') as HTMLInputElement;

    input.addEventListener(
        'keyup',
        debounce(async () => {
            const userFiltered = await getUsersByName(input.value);
            renderUsers(userFiltered);
        }, 500)
    );
};
