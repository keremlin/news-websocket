import { act,  screen  } from '@testing-library/react';
import UsersStatus from './userStatus';
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
describe('UserStatus :', () => {
  
  describe('render the component :', () => {
    test('render UserStatus', () => {
      act(() => {
        render(<UsersStatus></UsersStatus>, container);
      })
      const element=screen.getByText(/User Name/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('behavior',()=>{
    // you can check events like click here with enzyme and mount
  });
  describe ('async connection tests',()=>{

  });
});

