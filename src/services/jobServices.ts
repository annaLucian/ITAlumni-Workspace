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
