import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'political coop',
    subtitle: 'Кооперация',
    img: 'https://paleontol.ru/wp-content/uploads/2022/05/globalizatsiya-dostupnoj-informatsii.jpg',
    views: 4563,
    createdAt: '13.12.2023',
    userId: '1',
    type: ['POLITICS'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», ' +
                    'очень проста. Она выводит куда-либо фразу «Hello, world!»' +
                    ', или другую подобную, средствами некоего языка.',
            ],
        },
    ],
};
export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'sdfsdf ' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: { Authorization: 'sdfsdf ' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
