import { getUsers } from '../../services/userServices.js';
import { renderUsers } from '../components/renderUsers.js';
import { search } from '../components/search.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
    search();
};

showUsers();
