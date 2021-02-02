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
test('render newsBoard',()=>{
  act(()=>{
    render(<NewsBoard news={['you join','You join','39']}></NewsBoard>,container);
  })
  expect(container.find('.test')).to.have.text('39');
});
