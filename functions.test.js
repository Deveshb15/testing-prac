const functions = require('./functions');


// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Databae Initialized...")
// const closeDatabase = () => console.log("Databae Closed...")
const nameCheck = () => console.log('Checking Names...');

describe("Checking names", () => {
    beforeEach(() => nameCheck());

    test('Should be Devesh', ()=> {
        const user = 'Devesh';
        expect(user).toBe('Devesh');
    })

    test('Should be Simon', () => {
        const user = 'Simon';
        expect(user).toBe('Simon');
    })
})

test("Adds 2+2 to get 4", () => {
    expect(functions.add(2,2)).toBe(4);
})


test("Should Give Devesh Bhiman", () => {
    expect(functions.createUser()).toEqual({firstName : 'Devesh', lastName: 'Bhiman'});
})

// Promise
// test("Should give name Leanne Graham", () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual("Leanne Graham");
//         })
// })

// Async Await
test("Should give name Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();    
    expect(data.name).toEqual("Leanne Graham");
})