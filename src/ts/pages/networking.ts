import { getUsers } from '../../services/userServices.js';
import { header } from '../components/header.js';
import { renderUsers } from '../components/renderUsers.js';
import { searchUser } from '../components/searchUser.js';
import { favoritesUsers } from '../components/favoritesUsers.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
    searchUser();
    favoritesUsers();
};
header('networking-header', '.dashboard-header__dropdown');
showUsers();
