class RomanNumberer {
  constructor(number) {

  }
  convert(number) {
    let answer = '';
    let category = this.categorize(number);
    switch (category) {
      case 'first':
        for ( let i = 0; i < number; i++ ) {
          answer += 'I';
        }
      break;
      case 'second':
        answer += 'IV';
      break;
      case 'third':
        answer += 'V';
        for ( let i = 5; i < number; i++ ) {
          answer += 'I';
        }
      break;
      case 'fourth':
        answer += 'IX';
      break;
      default:
    }
    return answer;
  }

  categorize(number) {
    if ( number < 4) {
      return 'first';
    } else if ( number === 4 ) {
      return 'second';
    } else if ( number < 9 ) {
      return 'third';
    } else if ( number === 9 ) {
      return 'fourth';
    }
  }
}