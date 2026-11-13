import { getEvents } from '../../services/eventServices.js';
import { header } from '../components/header.js';
import { renderEvents } from '../components/renderEvents.js';
import { searchEvents } from '../components/searchEvents.js';
import { favoritesEvents } from '../components/favoritesEvents.js';

const showEvents = async () => {
    const events = await getEvents();
    renderEvents(events);
    searchEvents();
    favoritesEvents();
};
header('events__profile-btn', '.dashboard-header__dropdown');
showEvents();
