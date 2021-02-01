import { render, screen } from '@testing-library/react';
import NewsBoard from './newsBoard';

test('render newsBoard',()=>{
  render(<NewsBoard news={['you join','You join','39']}></NewsBoard>);
  const linkElement = screen.getByText(/39/i);
  expect(linkElement).toBeInTheDocument();
});
