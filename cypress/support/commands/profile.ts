
export const updateProfile = (name:string, lastName:string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.InputFirstName').clear().type(name);
    cy.getByTestId('ProfileCard.InputLastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId:string) =>
    cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + profileId,
        headers: { Authorization: 'sdfsdf ' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 27,
            currency: 'USD',
            country: 'Belarus',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Hacker-1024.png',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name:string, lastName:string): Chainable<void>
            resetProfile(profileId:string): Chainable<void>
        }
    }
}
