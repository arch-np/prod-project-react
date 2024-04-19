let currentArticleId: string = '';
describe('Пользователь на странице статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.visit('articles/' + article.id);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('Видит содержание статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Видит список рекомендованных статей', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Оставляет коммент', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView().should('exist');
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
