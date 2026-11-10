import { debounce } from '../utils/debounce.js';
import { getEventsByTitle } from '../../services/eventServices.js';
import { renderEvents } from './renderEvents.js';

const executeSearch = debounce(async (searchTerm: string) => {
    const filteredEvent = await getEventsByTitle(searchTerm);
    renderEvents(filteredEvent);
}, 500);

export const searchEvents = () => {
    const inputEvent = document.querySelector('#input-events') as HTMLInputElement | null;

    if (!inputEvent) return;

    inputEvent.addEventListener('input', function (this: HTMLInputElement) {
        this.value = this.value.replace(/^\s+/, '');
        executeSearch(inputEvent.value);
    });
};
