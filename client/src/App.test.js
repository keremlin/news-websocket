import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Realtime News Pannel/i);
  expect(linkElement).toBeInTheDocument();
});
describe('app', () => {
 /* it('connect websockets response', (done) => {
      expect.assertions(1);

      const ws = new WebSocket('ws://localhost:8080/stomp')
          .on('message', (msg) => {
              expect(JSON.parse(msg).id).toEqual(0);
              ws.close();
          })
          .on('close', () => done());
  });*/
});
