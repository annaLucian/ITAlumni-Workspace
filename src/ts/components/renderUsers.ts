import { type User } from '../../models/user.model.js';

export const renderUsers = (users: User[]): void => {
    const sectionContent = document.querySelector('.networking-cards');

    if (!sectionContent) return;

    if (!users.length) {
        sectionContent.innerHTML = `<h3 class="no-result">  <img
                                        src="/public/assets/icons/networking/no-results.png"
                                        alt=""
                                        aria-hidden="true"
                                        class="no-result__icon"
                                    />No hay resultados para la busqueda</h3>`;
    }

    sectionContent.innerHTML = '';
    const containerCards = document.createElement('div');
    containerCards.className = 'networking-cards__container';

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
        sectionContent.appendChild(containerCards);
    });
};
