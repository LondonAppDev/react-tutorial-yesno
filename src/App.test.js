import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

jest.mock('./Api');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should display a text input to fill question', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button to send question to the Internet Gods', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toBe(1);
});

it('should display Internet Gods answers in both text and picture format', () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');

  return Promise.resolve()
    .then(() => {
      wrapper.update();

      const answer = wrapper.find('.answer');
      expect(answer.find('h1').text()).toBe('no');
      expect(answer.find('img').prop('src')).toBe('https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif');
    });


});

it('should not display any answer by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.answer').length).toBe(0);
});
