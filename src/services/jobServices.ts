import { type Job } from '../models/job.model.js';

export const getJobs = async () => {
    try {
        const response = await fetch('/public/data/jobs.json');
        if (!response.ok) {
            throw new Error('No se cargo correctamente los jobs');
        }
        const data: Job[] = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
        return [];
    }
};

export const getJobsByTitle = async (searchTerm: string): Promise<Job[]> => {
    const formatedSearch = searchTerm.trim().toLowerCase();

    try {
        const jobs: Job[] = await getJobs();
        if (formatedSearch === '') return jobs;
        const filteredJobs = jobs.filter((job) => job.title.toLowerCase().trim().includes(formatedSearch));

        return filteredJobs;
    } catch (error) {
        console.log('Error:', error);
        return [];
    }
};
