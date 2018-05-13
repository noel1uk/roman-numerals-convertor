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
      default:
        answer += 'IV';
    }
    return answer;
  }
  categorize(number) {
    if ( number < 4) {
      return 'first';
    }
  }
}