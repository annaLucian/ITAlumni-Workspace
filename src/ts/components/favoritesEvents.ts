import { storageService } from '../utils/storageService.js';

export const favoritesEvents = () => {
    const allBtnsFavorites = document.querySelectorAll('.event-card__btn-share') as NodeList | null;

    allBtnsFavorites?.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const iconButton = button.querySelector('.event-card__favorite-icon');

        if (cardId) {
            const allFavoritesEvents = storageService.getElementsFavorites('events-favorits').includes(cardId);
            iconButton?.classList.toggle('event_btn-fav--active', allFavoritesEvents);
        }

        button.onclick = () => {
            const currentId = button.closest('article')?.dataset.id;

            if (currentId) {
                storageService.saveElementFavorite(currentId, 'events-favorits');

                const isFavorits = storageService.getElementsFavorites('events-favorits').includes(currentId);

                iconButton?.classList.toggle('event_btn-fav--active', isFavorits);
            }
        };
    });
};
