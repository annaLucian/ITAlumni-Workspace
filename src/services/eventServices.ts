import { type Event } from '../models/event.model.js';

export const getEvents = async () => {
    try {
        const response = await fetch('/public/data/events.json');

        if (!response.ok) {
            throw new Error('Los datos no se pueden visualizar');
        }

        const data: Event[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
