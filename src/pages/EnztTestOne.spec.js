import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
 
import Board from './board.js';
 
describe('board', () => {
  describe('Reducer', () => {
  });
 
  test('snapshot renders', () => {
    const component = renderer.create(<board />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
 
});
 
