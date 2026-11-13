import { storageService } from '../utils/storageService.js';

export const favoritesJobs = () => {
    const btnsJobsAll = document.querySelectorAll('.job-card__favorite') as NodeList | null;
    if (!btnsJobsAll) return;

    btnsJobsAll.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        const cardId = button.closest('article')?.dataset.id;
        const btnIcon = button.querySelector('.job-card__favorite-icon');

        if (cardId) {
            const allReadyFavorits = storageService.getElementsFavorites('jobs-favorites').includes(cardId);
            btnIcon?.classList.toggle('job_btn-fav--active', allReadyFavorits);
        }

        button.onclick = () => {
            const currentCard = button.closest('article')?.dataset.id;

            if (currentCard) {
                storageService.saveElementFavorite(currentCard, 'jobs-favorites');

                const isFavorits = storageService.getElementsFavorites('jobs-favorites').includes(currentCard);
                btnIcon?.classList.toggle('job_btn-fav--active', isFavorits);
            }
        };
    });
};
