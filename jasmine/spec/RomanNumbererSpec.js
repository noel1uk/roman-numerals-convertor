describe('Romanizer', function() {
  let romanize = new RomanNumberer();
  describe('.convert', function() {
    it('returns I when given 1', function() {
      expect(romanize.convert(1)).toEqual('I')
    });
    it('returns III when given 3', function() {
      expect(romanize.convert(3)).toEqual('III')
    });
    it('returns IV when given 4', function() {
      expect(romanize.convert(4)).toEqual('IV')
    });
  });
  describe('.categorize', function() {
    it('when given 3 it returns the string `first`', function() {
      expect(romanize.categorize(3)).toEqual('first')
    });
  });
});