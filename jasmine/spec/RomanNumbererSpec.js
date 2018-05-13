describe('Romanizer', function() {
  let romanize = new RomanNumberer();
  describe('.convert', function() {
    it('returns I when given 1', function() {
      expect(romanize.convert(1)).toEqual('I');
    });
    it('returns III when given 3', function() {
      expect(romanize.convert(3)).toEqual('III');
    });
    it('returns IV when given 4', function() {
      expect(romanize.convert(4)).toEqual('IV');
    });
    it('returns V when given 5', function() {
      expect(romanize.convert(5)).toEqual('V');
    });
    it('returns VIII when given 8', function() {
      expect(romanize.convert(8)).toEqual('VIII');
    });
    it('returns IX when given 9', function() {
      expect(romanize.convert(9)).toEqual('IX');
    });
    it('returns X when given 10', function() {
      expect(romanize.convert(10)).toEqual('X');
    });
  });
  describe('.categorize', function() {
    it('when given 3 it returns the string `first`', function() {
      expect(romanize.categorize(3)).toEqual('first');
    });
    it('when given 4 it returns the string `second`', function() {
      expect(romanize.categorize(4)).toEqual('second');
    });
    it('returns `third` when given 5', function() {
      expect(romanize.categorize(5)).toEqual('third');
    });
  });
});