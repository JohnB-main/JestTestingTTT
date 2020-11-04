const game = require('./game.js');

test('Testing X win first row', () => {
  calculateWinner((',,,,,,X,X,X')).toBe('X');
});
