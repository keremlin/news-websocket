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
      test('render StatusBar for server time', () => {
        act(() => {
          render(<StatusBar serverTime="10:10:10"></StatusBar>, container);
        })
        const element=screen.getByText(/10:10:10/i);
        expect(element).toBeInTheDocument();
      });
      test('render StatusBar for connection test', () => {
        act(() => {
          render(<StatusBar serverTime="10:10:10"></StatusBar>, container);
        })
        const element=screen.getByText(/Connected/i);
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

