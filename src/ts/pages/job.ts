import { getJobs } from '../../services/jobServices.js';
import { renderJobs } from '../components/renderJobs.js';

const showJobs = async () => {
    const jobs = await getJobs();
    renderJobs(jobs);
};
showJobs();
