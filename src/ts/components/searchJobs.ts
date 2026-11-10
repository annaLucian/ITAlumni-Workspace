import { debounce } from '../utils/debounce.js';
import { getJobsByTitle } from '../../services/jobServices.js';
import { renderJobs } from './renderJobs.js';
import type { Job } from '../../models/job.model.js';

const executeSearch = debounce(async (searchTerm: string) => {
    const filteredJobs = await getJobsByTitle(searchTerm);
    renderJobs(filteredJobs);
}, 500);

export const searchJobs = () => {
    const inputJob = document.querySelector('#input-jobs') as HTMLInputElement | null;

    if (!inputJob) return;

    inputJob.addEventListener('input', function (this: HTMLInputElement) {
        this.value = this.value.replace(/^\s+/, '');

        executeSearch(inputJob.value);
    });
};
