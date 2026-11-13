import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/dom';
import { renderUsers } from '../ts/components/renderUsers.js';
import { mockUsers } from './mockUsers.js';

describe('renderUsers', () => {
    it('should display the user details in the DOM', () => {
        document.body.innerHTML = '<div class="networking-cards__container"></div>';

        renderUsers(mockUsers);

        const nameUser = screen.getByText(mockUsers[0]!.name);
        const ocupationUser = screen.getByText(/Desenvolupadora Frontend a TechNova/i);
        const locationUser = screen.getByText(mockUsers[0]!.location);
        const promotionUser = screen.getByText(mockUsers[0]!.promotion!);
        const imgUser = screen.getByRole('img', { name: /Mock user 1/i });

        expect(nameUser).toBeTruthy();
        expect(ocupationUser).toBeTruthy();
        expect(locationUser).toBeTruthy();
        expect(promotionUser).toBeTruthy();
        expect(imgUser).toBeTruthy();
    });
});
