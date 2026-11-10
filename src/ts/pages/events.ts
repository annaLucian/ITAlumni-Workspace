import { getEvents } from '../../services/eventServices.js';
import { renderEvents } from '../components/renderEvents.js';
import { searchEvents } from '../components/searchEvents.js';

const showEvents = async () => {
    const events = await getEvents();
    renderEvents(events);
    searchEvents();
};

showEvents();
