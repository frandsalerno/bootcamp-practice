const Person = require ('../lib/person');

describe('Person', () => {
    it('Should return an object with name equal to Fran and 37', () => {
        const fran = new Person('Fran', 37);

        fran.haveBirthday();

        expect(fran).toMatchObject({
            name: 'Fran',
            age: 38
        })
    })
})