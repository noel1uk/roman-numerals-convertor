describe('Romanizer', function() {
  let romanize = new RomanNumberer();
  describe('.convert', function() {
    it('returns I when given 1', function() {
      expect(romanize.convert(1)).toEqual('I')
    });
    it('returns III when given 3', function() {
      expect(romanize.convert(3)).toEqual('III')
    });
  });
});