const game = require('./game.js');

const myMock = jest.fn();

console.log(forTest)
test('Testing X win Last row', () => {
  calculateWinner((',,,,,,X,X,X')).toBe('X');
});
