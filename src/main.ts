import { getUsers } from './services/userServices.js';
import { getJobs } from './services/jobServices.js';
import { getEvents } from './services/eventServices.js';
import { renderUsers } from './components/renderUsers.js';
import { renderJobs } from './components/renderJobs.js';
import { renderEvents } from './components/renderEvents.js';

const showUsers = async () => {
    const users = await getUsers();
    renderUsers(users);
};

const showJobs = async () => {
    const jobs = await getJobs();
    renderJobs(jobs);
};

const showEvents = async () => {
    const events = await getEvents();

    renderEvents(events);
};
showUsers();
showJobs();
showEvents();
