import { type User } from '../models/user.model.js';

export const renderUsers = (users: User[]): void => {
    const containerCards = document.querySelector('.networking-cards__container');

    if (!containerCards) return;

    containerCards.innerHTML = '';

    users.forEach((user) => {
        const article = document.createElement('article');
        article.className = 'networking-card';

        article.innerHTML = `
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

                            <a href="./chat.html" class="networking-card__btn" aria-label="Enviar missatge a ${user.name}">Missatge</a>
                        `;

        containerCards.appendChild(article);
    });
};
