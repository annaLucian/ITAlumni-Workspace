import { type User } from '../models/user.model.js';

export const mockUsers: User[] = [
    {
        userId: '101',
        name: 'Mock user 1',
        occupation: 'Desenvolupadora Frontend a TechNova',
        location: 'Barcelona, ES',
        avatarUrl: '/public/assets/images/mock/users/avatar-laia-puig.jpg',
        promotion: 'Promoció del 2021',
    },
    {
        userId: '102',
        name: 'Mock user 2',
        occupation: 'Enginyer de Dades a CloudStream',
        location: 'Girona, ES',
        avatarUrl: '/public/assets/images/mock/users/avatar-marc-soler.jpg',
        promotion: 'Promoció del 2018',
    },
    {
        userId: '103',
        name: 'Mock user 3',
        occupation: 'Dissenyadora UX/UI a CreativeLab',
        location: 'Madrid, ES',
        avatarUrl: '/public/assets/images/mock/users/avatar-elena-navarro.jpg',
        promotion: 'Promoció del 2019',
    },
];
