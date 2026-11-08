import { getUsers } from '../../services/userServices.js';
import { renderUsers } from '../components/renderUsers.js';
import { debunceSearch } from '../utils/debunceSearch.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
};

showUsers();
