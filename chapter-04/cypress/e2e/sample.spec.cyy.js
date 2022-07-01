describe('Our Skipped Tests', () => {

    it('does not execute', () => {

        expect(true).to.equal(true);

    });

    it.skip('is skipped', () => {

        expect(true).to.equal(false);

    });

    it('Sono una stringa passata', () => {

        typeof(new String("sono una stringa"))==='string';

    });
    it('Sono una undefined', () => {

        typeof(pippo)==='undefined';

    });
    it.skip('Sono un booleano skippato', () => {

        typeof(new Boolean(true))===true;

    });

});