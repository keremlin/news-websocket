import { act,  screen  } from '@testing-library/react';
import NewsBoard from './newsBoard';
import { render, unmountComponentAtNode } from "react-dom";
let container = null;
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
describe('newsBoard :', () => {
  describe('render',()=>{
    test('render properly',()=>{
      act(()=>{
        render(<NewsBoard></NewsBoard>,container);
      });
      const element=screen.getByText('/News Board/i');
      expect(element).toBeInTheDocument();
    });
  });

  describe('behavior',()=>{
    // you can check events like click here with enzyme and mount
  });
  describe ('async connection tests',()=>{

  });
});

