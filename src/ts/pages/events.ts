import { getEvents } from '../../services/eventServices.js';
import { renderEvents } from '../components/renderEvents.js';

const showEvents = async () => {
    const events = await getEvents();
    renderEvents(events);
};

showEvents();
