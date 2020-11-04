const game = require('./game.js');

test('Testing O win first row', () => {
  calculateWinner(('O,O,O,,,,,,')).toBe('O');
});
