import { loadFavoritesEvents } from '../components/loadFavoritesEvent.js';
import { type Event } from '../../models/event.model.js';
import { getEvents } from '../../services/eventServices.js';
import { header } from '../components/header.js';

const favEvents = async () => {
    const events: Event[] = await getEvents();
    loadFavoritesEvents(events, 'events-favorits');
};

header('fav-events__btn', '.dashboard-header__dropdown');
favEvents();
