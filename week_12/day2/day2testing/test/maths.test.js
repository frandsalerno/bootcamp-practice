const maths = require ('../lib/maths');

describe('Maths', () => {
    it('Should return 10', () => {
        const sum = maths.sum(5,5);

        expect(sum).toBe(10);
    });

    it('Should return 4', () => {
        const diff = maths.diff(8,4);
        
        expect(diff).toBe(4);
    })
});
