import { getUsers } from './services/userServices.js';
import { getJobs } from './services/jobServices.js';

import { renderUsers } from './components/renderUsers.js';
import { renderJobs } from './components/renderJobs.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
};

const showJobs = async () => {
    const jobs = await getJobs();
    renderJobs(jobs);
};
showUsers();
showJobs();
