import { act,  screen  } from '@testing-library/react';
import StatusBar from './statusBar';
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
describe('StatusBar :', () => {
  
  describe('render the component :', () => {
    describe('render the component :', () => {
      test('render StatusBar', () => {
        act(() => {
          render(<StatusBar></StatusBar>, container);
        })
        const element=screen.getByText(/State/i);
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

