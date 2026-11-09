import { getUsers } from '../../services/userServices.js';
import { renderUsers } from '../components/renderUsers.js';
import { searchUser } from '../components/searchUser.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
    searchUser();
};

showUsers();
