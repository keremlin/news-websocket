import { act,  screen  } from '@testing-library/react';
import AddNews from './addNews';
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
describe('addNews :', () => {
  
  describe('render the component :', () => {
    describe('render the component :', () => {
      test('render addNews', () => {
        act(() => {
          render(<AddNews></AddNews>, container);
        })
        const element=screen.getByText(/Add/i);
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe('behavior',()=>{
    // you can check events like click here with enzyme and mount
  });
  describe ('async connection tests',()=>{

  });
});

