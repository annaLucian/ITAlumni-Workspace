import { storageService } from '../utils/storageService.js';
import { type User } from '../../models/user.model.js';
import { renderUsers } from './renderUsers.js';

export const loadFavoritesUsers = (users: User[], type: string) => {
    const arrayFavoritesId = storageService.getElementsFavorites(type) || [];
    const favoriteUsers = users.filter((user) => arrayFavoritesId.includes(user.userId));

    const countBadge = document.getElementById('fav-count-badge-1') as HTMLSpanElement;
    if (countBadge) {
        countBadge.innerText = arrayFavoritesId.length.toString();
    }
    const containerFav = document.querySelector('.networking-cards__container');

    if (containerFav) {
        containerFav.classList.toggle('container-result-networking', favoriteUsers.length <= 0);

        if (favoriteUsers.length > 0) {
            renderUsers(favoriteUsers);
        } else {
            containerFav.innerHTML = `<div class="fav-user-no-result">
            <img src="/public/assets/icons/all/no-favorites.png"/>
                    <p>Encara no has afegit cap usuari als teus favorits.</p>
                </div>`;
        }
    }

    const btnsFavorites = document.querySelectorAll('.networking-card__favorite') as NodeList | null;

    btnsFavorites?.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const btnIcon = button.querySelector('.networking-card__favorite-icon');

        if (cardId) {
            const favoriteAllReady = storageService.getElementsFavorites(type).includes(cardId);
            btnIcon?.classList.toggle('networking_btn-fav--active', favoriteAllReady);
        }

        button.onclick = () => {
            const currentId = button.closest('article')?.dataset.id;
            if (currentId) {
                storageService.saveElementFavorite(currentId, type);

                const isFavorite = storageService.getElementsFavorites(type).includes(currentId);
                btnIcon?.classList.toggle('networking_btn-fav--active', isFavorite);

                loadFavoritesUsers(users, type);
            }
        };
    });
};
