describe('Stubbing: Exercise 1.1 Solution - part 1', () => {
    it('Stubs login POST request to return defined stub name', () => {

        cy.intercept('POST', 'login',
            { user: { id: "t45AiwidW", uuid: "6383f84e-b511-44c5-a835-3ece1d781fa8", firstName: "Mauro", lastName: "Battello", username: "mauro.battello", email: "Norene39@yahoo.com", phoneNumber: "625-316-9882", avatar: "https://avatars.dicebear.com/api/human/t45AiwidW.svg", defaultPrivacyLevel: "public", balance: 168137 } })
            ///{ user:{id:"t45AiwidW",uuid:"6383f84e-b511-44c5-a835-3ece1d781fa8",firstName:"Edgar",lastName:"Johns",username:"Katharina_Bernier",password:"$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW",email:"Norene39@yahoo.com",phoneNumber:"625-316-9882",avatar:"https://avatars.dicebear.com/api/human/t45AiwidW.svg",defaultPrivacyLevel:"public",balance:129281,createdAt:"2019-08-27T23:47:05.637Z",modifiedAt:"2020-05-21T11:02:22.857Z"}})

            .as('login');

        cy.loginUser();

        cy.wait('@login').then((loginXhr) => {
            expect(loginXhr.response.body.user.username).to.eq('mauro.battello')
            expect(loginXhr.response.body.user.firstName).to.eq('Mauro')
            expect(loginXhr.response.body.user.lastName).to.eq('Battello')
            console.log(loginXhr)
            expect(loginXhr.response.statusCode).to.eq(200)
        });
    });

    afterEach(() => {
        cy.logoutUser();
    });
});

describe('XHR requests Exercise Solutions - Part 2', () => {
    beforeEach(() => {
        cy.loginUser()

        cy.intercept('bankAccounts').as('bankAccounts');
        cy.intercept('transactions/public').as('transactions');
        cy.intercept('notifications').as('notifications');

        cy.wait('@bankAccounts');
        cy.wait('@transactions');
        cy.wait('@notifications');
    });

    afterEach(() => {
        cy.logoutUser();
    });

    it.only('Excercise 1: stubbing: can modify transaction details of a random transaction', () => {
        cy.intercept('GET', 'transactions/183VHWyuQMS', { transaction: { receiverName: "Arely Kertzmann", senderName: "Kaylin Homenick", receiverAvatar: "https://avatars.dicebear.com/api/human/qywYp6hS0U.svg", senderAvatar: "https://avatars.dicebear.com/api/human/bDjUb4ir5O.svg", likes: [], comments: [], id: "183VHWyuQMS", uuid: "26360e56-0e4d-415c-9e62-8846b5bb0260", source: "lWfxENA5ZNy", amount: 20000, description: "Payment: bDjUb4ir5O to qywYp6hS0U", privacyLevel: "contacts", receiverId: "qywYp6hS0U", senderId: "bDjUb4ir5O", balanceAtCompletion: 5456, status: "pending" } })
            .as('randomTransaction');

        cy.visit('transaction/183VHWyuQMS');

        cy.wait('@randomTransaction').then((transaction) => {
            expect(transaction.response.body.transaction.amount).to.eq(20000)
            expect(transaction.response.statusCode).to.eq(200)
        });
    });
});
