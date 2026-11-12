import { storageService } from '../utils/storageService.js';
import { type Job } from '../../models/job.model.js';
import { renderJobs } from './renderJobs.js';

export const loadFavoritesJobs = (jobs: Job[], type: string) => {
    const arrayFavoritesId = storageService.getElementsFavorites(type) || [];
    const favoritesJobs = jobs.filter((job) => arrayFavoritesId.includes(job.idJob));

    const countBagde = document.getElementById('fav-jobs-count-badge');

    if (countBagde) {
        countBagde.textContent = arrayFavoritesId.length.toString();
    }

    const containerFav = document.querySelector('.jobs-feed__list');
    if (containerFav) {
        containerFav.classList.toggle('container-result', favoritesJobs.length <= 0);

        if (favoritesJobs.length > 0) {
            renderJobs(favoritesJobs);
        } else {
            containerFav.innerHTML = `<div class="fav-user-no-result">
                <img src="/public/assets/icons/all/no-favorites.png"/>
                        <p>Encara no has afegit cap feina als teus favorits.</p>
                    </div>`;
        }
    }

    const btnsFavorites = document.querySelectorAll('.job-card__favorite') as NodeList | null;

    btnsFavorites?.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const btnIcon = button.querySelector('.job-card__favorite-icon');

        if (cardId) {
            const favoriteAllReady = storageService.getElementsFavorites(type).includes(cardId);
            btnIcon?.classList.toggle('job_btn-fav--active', favoriteAllReady);
        }

        button.onclick = () => {
            const currentId = button.closest('article')?.dataset.id;
            if (currentId) {
                storageService.saveElementFavorite(currentId, type);

                const isFavorite = storageService.getElementsFavorites(type).includes(currentId);
                btnIcon?.classList.toggle('job_btn-fav--active', isFavorite);

                loadFavoritesJobs(jobs, type);
            }
        };
    });
};
