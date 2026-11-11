import { loadFavorites } from '../components/loadFavorites.js';
import { type User } from '../../models/user.model.js';
import { getUsers } from '../../services/userServices.js';

const favPages = async () => {
    const users: User[] = await getUsers();
    loadFavorites(users, 'networking-favorite');
};

document.addEventListener('DOMContentLoaded', async () => {
    await favPages();
});
