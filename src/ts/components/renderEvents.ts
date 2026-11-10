import { type Event } from '../../models/event.model.js';

export const renderEvents = (events: Event[]): void => {
    const containerEvents = document.querySelector('.events-feed__list');
    if (!containerEvents) return;

    containerEvents.innerHTML = '';

    containerEvents.classList.toggle('container-event-result', events.length === 0);

    if (!events.length) {
        containerEvents.innerHTML = `<h3 class="no-result-event">  <img
                                        src="/public/assets/icons/events/no-results-event.png"
                                        alt=""
                                        aria-hidden="true"
                                        class="no-result-event__icon"
                                    />No s'ha trobat cap feina!!</h3>`;
    }

    events.forEach((event) => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'event-card';

        const locationLower = event.location.toLocaleLowerCase().trim();
        const LocacionIcon = locationLower.includes('línia')
            ? `<img src="/public/assets/icons/events/icon-video.png" alt="" aria-hidden="true" class="event-card__location-icon">`
            : ` <img src="/public/assets/icons/events/icon-location.png" alt="" aria-hidden="true" class="event-card__location-icon">`;

        article.innerHTML = `
                                <div class="event-card__media">
                                    <img src=${event.imgEvent} alt="Banner de l'esdeveniment per a ${event.organizer}" class="event-card__img">
                                </div>
                                <div class="event-card__content">
                                    <span class="event-card__datetime">${event.datetime}</span>
                                    <h3 class="event-card__title">
                                        ${event.title}
                                    </h3>
                                    <p class="event-card__organizer">
                                        ${event.organizer}
                                        <span class="event-dots">•</span>
                                        <span class="event-card__location">
                                            ${LocacionIcon}
                                            ${event.location}
                                        </span>
                                    </p>
                                    <p class="event-card__attendees">${event.attendees}</p>

                                    <div class="event-card__actions">
                                        <a href="./event-detail.html" class="event-card__btn-view">Veure l'esdeveniment</a>
                                        <button type="button" class="event-card__btn-share" aria-label="Compartir show your Working">
                                            <img src="/public/assets/icons/events/icon-share.png" alt="" aria-hidden="true">
                                        </button>
                                    </div>
                                </div>`;

        li.appendChild(article);
        containerEvents.appendChild(li);
    });
};
