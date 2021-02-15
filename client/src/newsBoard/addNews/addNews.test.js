import { act,  screen  } from '@testing-library/react';
import AddNews from './addNews';
import { render, unmountComponentAtNode } from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';
let container = null;
configure({adapter: new Adapter()});
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('addNews :', () => {
  
  describe('render the component :', () => {
    describe('render the component :', () => {
      test('render addNews', () => {
        act(() => {
          render(<AddNews></AddNews>, container);
        })
        const element=screen.getByText(/news/i);
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe('behavior',()=>{
    test('on click butt',()=>{
      const mockCallBack=jest.fn();
      const button=shallow(<AddNews onClick={mockCallBack}></AddNews>);
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    describe('on press Enter',()=>{
      const mockCallBack=jest.fn();
      const button=shallow(<AddNews onPressEnter={mockCallBack}></AddNews>);
      button.find('input').simulate('keydown',{keyCode:13});
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    // you can check events like click here with enzyme and mount
  });
  describe ('async connection tests',()=>{

  });
});

