import { type Job } from '../../models/job.model.js';

export const renderJobs = (jobs: Job[]): void => {
    const containerJob = document.querySelector('.jobs-feed__list');
    if (!containerJob) return;

    containerJob.innerHTML = '';

    containerJob.classList.toggle('container-result', jobs.length === 0);

    if (!jobs.length) {
        containerJob.innerHTML = `<h3 class="no-result">  <img
                                        src="/public/assets/icons/jobs/no-results-job.png"
                                        alt=""
                                        aria-hidden="true"
                                        class="no-result__icon"
                                    />No s'ha trobat cap feina!!</h3>`;
    }

    jobs.forEach((job) => {
        const article = document.createElement('article');
        article.className = 'job-card';
        article.dataset.id = job.idJob;

        const verifiedBadgeHtml = job.isVerified
            ? `<img src="/public/assets/icons/jobs/verification.png" alt="" aria-hidden="true" class="job-card__verified">`
            : '';
        const reviewingHtml = job.isReviewing
            ? `     <span class="job-card__checked">
                                        <img src="/public/assets/icons/jobs/icon-jobs-cheked.png" alt="" aria-hidden="true" class="job-card__checked-icon">
                                        Revisant candidatures
                                    </span>`
            : '';

        article.innerHTML = `
                            <button type="button" class="job-card__dismiss" aria-label="Omet la suggerència de feina">
                                <span aria-hidden="true">×</span>
                            </button>
                            <img src=${job.companyLogo} alt="Logotip de l'empresa ${job.company}" class="job-card__img">
                            <div class="job-card__content">
                                <div class="job-card__header">
                                    <h3 class="job-card__title">
                                        ${job.title}
                                        ${verifiedBadgeHtml}
                                    </h3>
                                    <p class="job-card__stack">${job.company}</p>
                                    <p class="job-card__location">${job.location}</p>
                                        ${reviewingHtml}
                                    <span class="job-card__date">${job.postedDate}</span>
                                </div>
                                <div class="jobs-container__cta">
                            
                                <button type="button" class="job-card__btn-connect" aria-label="Sol·licitar ${job.title} a ${job.company}">
                                    Sol·licita ara
                                </button>
                                <button  id="job-btn__favorite" class="job-card__favorite">
                                    <svg class="job-card__favorite-icon" width="100" height="100" viewBox="0 0 24 24" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                    </svg>
                            </button>
                                </div>
                            </div>
                    `;
        containerJob.appendChild(article);
    });
};
