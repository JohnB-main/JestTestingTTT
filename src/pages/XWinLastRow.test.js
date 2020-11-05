const game = require('./game.js');
import calculateWinner from "./game.js"

test('Testing X win first row', () => {
  new calculateWinner((',,,,,,X,X,X')).toBe('X');
});
