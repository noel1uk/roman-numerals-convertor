describe('Romanizer', function() {
  let romanize = new RomanNumberer();
  describe('.convert', function() {
    it('returns I when given 1', function() {
      expect(romanize.convert(1)).toEqual('I')
    });
  });
});