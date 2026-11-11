import { type User } from '../../models/user.model.js';

export const renderUsers = (users: User[]): void => {
    const containerCards = document.querySelector('.networking-cards__container');
    if (!containerCards) return;

    containerCards.innerHTML = '';
    containerCards.classList.toggle('container-result-networking', users.length === 0);
    if (!users.length) {
        containerCards.innerHTML = `<h3 class="no-result-networking">  <img
                                        src="/public/assets/icons/networking/no-results.png"
                                        alt=""
                                        aria-hidden="true"
                                        class="result-networking__icon"
                                    />No s'han trobat usuaris</h3>`;
    }

    users.forEach((user) => {
        const article = document.createElement('article');
        article.className = 'networking-card';
        article.dataset.id = user.userId;
        article.innerHTML = `
                            <button  id="networking-btn__favorite" class="networking-card__favorite">
                                <svg class="networking-card__favorite-icon" width="100" height="100" viewBox="0 0 24 24" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                            <div class="networkin-car__bg"></div>
                            <div class="networking-card--header">
                                <div class="networking-card__media" role="img" aria-label="Imatge de perfil de ${user.name}"  style="background-image: url('${user.avatarUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat"></div>
                                <div class="networking-card__content">
                                    <h3 class="networking-card__title">${user.name}</h3>
                                    <p class="networking-card__meta">${user.promotion}</p>
                                    <p class="networking-card__description">${user.occupation}.</p>
                                    <p class="networking-card__location">${user.location}</p>
                                </div>
                            </div>

                            <a href="#l" class="networking-card__btn" aria-label="Enviar missatge a ${user.name}">Missatge</a>
                        `;

        containerCards.appendChild(article);
    });
};
