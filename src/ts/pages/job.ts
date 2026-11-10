import { getJobs } from '../../services/jobServices.js';
import { renderJobs } from '../components/renderJobs.js';
import { searchJobs } from '../components/searchJobs.js';

const showJobs = async () => {
    const jobs = await getJobs();
    renderJobs(jobs);
    searchJobs();
};
showJobs();
