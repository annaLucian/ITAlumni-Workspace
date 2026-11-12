import { type Job } from '../../models/job.model.js';
import { getJobs } from '../../services/jobServices.js';
import { loadFavoritesJobs } from '../components/loadFavoritesJobs.js';

const favJobs = async () => {
    const jobs: Job[] = await getJobs();
    loadFavoritesJobs(jobs, 'jobs-favorites');
};

favJobs();
