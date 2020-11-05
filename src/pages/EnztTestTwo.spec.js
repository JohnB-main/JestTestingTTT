import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
 
import Board from './game.js';
 
describe('game', () => {
  describe('Reducer', () => {
  });
 
  test('snapshot renders', () => {
    const component = renderer.create(<game />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
 
});
 
