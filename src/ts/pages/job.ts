import { getJobs } from '../../services/jobServices.js';
import { header } from '../components/header.js';
import { renderJobs } from '../components/renderJobs.js';
import { searchJobs } from '../components/searchJobs.js';
import { favoritesJobs } from '../components/favoritesJobs.js';

const showJobs = async () => {
    const jobs = await getJobs();
    renderJobs(jobs);
    searchJobs();
    favoritesJobs();
};
header('jobs-profile__btn', '.dashboard-header__dropdown');
showJobs();
