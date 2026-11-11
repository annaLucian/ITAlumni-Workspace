import { storageService } from '../utils/storageService.js';

export const favoritesUsers = () => {
    const btnsFavorites = document.querySelectorAll('.networking-card__favorite') as NodeList | null;
    if (!btnsFavorites) return;

    btnsFavorites.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const btnIcon = button.querySelector('.networking-card__favorite-icon');

        if (cardId) {
            const isAlreadyFavorite = storageService.getElementsFavorites('networking-favorite').includes(cardId);
            btnIcon?.classList.toggle('networking_btn-fav--active', isAlreadyFavorite);
        }

        button.onclick = () => {
            const currentCardId = button.closest('article')?.dataset.id;
            if (currentCardId) {
                storageService.saveElementFavorite(currentCardId, 'networking-favorite');

                const isFavorite = storageService.getElementsFavorites('networking-favorite').includes(currentCardId);
                btnIcon?.classList.toggle('networking_btn-fav--active', isFavorite);
            }
        };
    });
};
