import { getUsers } from './services/userServices.js';

import { renderUsers } from './components/renderUsers.js';

const showUsers = async () => {
    const users = await getUsers();
    console.log('!!showUsers', { users });
    renderUsers(users);
};

showUsers();
