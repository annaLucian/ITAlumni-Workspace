import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/dom';
import { searchUser } from '../ts/components/searchUser.js';
import { mockUsers } from './mockUsers.js';

vi.mock('../services/userServices.js', () => {
    const internalMockUsers = [
        {
            userId: '101',
            name: 'Mock user 1',
            occupation: 'Desenvolupadora Frontend a TechNova',
            location: 'Barcelona, ES',
            avatarUrl: '/public/assets/images/mock/users/avatar-laia-puig.jpg',
            promotion: 'Promoció del 2021',
        },
    ];

    return {
        getUsers: vi.fn().mockResolvedValue(internalMockUsers),
        getUsersByName: vi.fn().mockImplementation(async (query: string) => {
            return internalMockUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
        }),
    };
});

describe('searchUser', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    it('should filter and display users in the DOM when typing in the search input', async () => {
        document.body.innerHTML = `<input id="input-networking" type="text"/> <div class="networking-cards__container"></div>`;

        searchUser();

        const input = document.getElementById('input-networking') as HTMLInputElement;

        input.value = 'Mock user 1';
        input.dispatchEvent(new Event('input', { bubbles: true }));

        vi.advanceTimersByTime(500);
        await vi.runAllTimersAsync();

        const nameUser = screen.getByText(mockUsers[0]!.name);
        expect(nameUser).toBeTruthy();
    });
});
