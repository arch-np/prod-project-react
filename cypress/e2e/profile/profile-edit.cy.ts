let profileId: string;
describe('Пользователь на странице профиля ', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit('profile/' + data.id);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.InputFirstName').should(
            'have.value',
            'test',
        );
    });
    it('И профиль редактируется', () => {
        const name = 'newname';
        const lastName = 'lastname';
        cy.updateProfile(name, lastName);
        cy.getByTestId('ProfileCard.InputFirstName').should('have.value', name);
        cy.getByTestId('ProfileCard.InputLastName').should(
            'have.value',
            lastName,
        );
    });
});
