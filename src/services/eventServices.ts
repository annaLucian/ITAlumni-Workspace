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

export const getEventsByTitle = async (searchTerm: string): Promise<Event[]> => {
    const formatedSearch = searchTerm.trim().toLowerCase();

    try {
        const events = await getEvents();
        if (searchTerm === '') return events;

        const filteredEvent = events.filter((event) => {
            const formatedTitle = event.title.trim().toLowerCase();
            const formatedLocation = event.location.trim().toLowerCase();

            return formatedTitle.includes(formatedSearch) || formatedLocation.includes(formatedSearch);
        });

        return filteredEvent;
    } catch (error) {
        console.log('Error:', error);
        return [];
    }
};
