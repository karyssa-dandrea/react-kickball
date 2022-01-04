import Players from '../../views/Players/Players';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('should render list of players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Betty Grey');
  expect(container).toMatchSnapshot();
});
