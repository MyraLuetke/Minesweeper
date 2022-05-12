import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';


describe('App', () => {
  test('renders App component', () => {
    const { container } = render(<App />);

    expect(container.firstChild.firstChild.firstChild).toHaveClass('Minesweeper');
    //screen.debug();
  })
})
