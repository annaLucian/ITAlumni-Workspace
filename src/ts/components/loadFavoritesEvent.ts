import { type Event } from '../../models/event.model.js';
import { storageService } from '../utils/storageService.js';
import { renderEvents } from './renderEvents.js';

export const loadFavoritesEvents = (events: Event[], type: string) => {
    const arrayFavoritesIds = storageService.getElementsFavorites(type) || [];
    const favoritsEvents = events.filter((event) => arrayFavoritesIds.includes(event.idEvent));

    const badgeCount = document.getElementById('fav-events-count-badge');
    if (badgeCount) {
        badgeCount.textContent = arrayFavoritesIds.length.toString();
    }

    const containerFav = document.querySelector('.events-feed__list');
    if (containerFav) {
        containerFav.classList.toggle('container-event-result', favoritsEvents.length <= 0);

        if (favoritsEvents.length > 0) {
            renderEvents(favoritsEvents);
        } else {
            containerFav.innerHTML = `<div class="fav-user-no-result">
            <img src="/public/assets/icons/all/no-favorites.png"/>
                    <p>Encara no has afegit cap <strong>esdeveniments</strong> als teus favorits.</p>
                </div>`;
        }
    }

    const btnAllFavorites = (document.querySelectorAll('.event-card__btn-share') as NodeList) || null;
    btnAllFavorites.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const iconBtn = button.querySelector('.event-card__favorite-icon');

        if (cardId) {
            const allFavoritsId = storageService.getElementsFavorites(type).includes(cardId);
            iconBtn?.classList.toggle('event_btn-fav--active', allFavoritsId);
        }

        button.onclick = () => {
            const currentId = button.closest('article')?.dataset.id;

            if (currentId) {
                storageService.saveElementFavorite(currentId, type);

                const isFavorits = storageService.getElementsFavorites(type).includes(currentId);
                iconBtn?.classList.toggle('event_btn-fav--active', isFavorits);

                loadFavoritesEvents(events, type);
            }
        };
    });
};
