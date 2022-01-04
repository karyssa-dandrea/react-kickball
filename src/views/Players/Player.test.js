import Player from '../../views/Players/Player';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('should render correct player when clicked', async () => {
  const { container } = render(
    <MemoryRouter>
      <Player match={{ params: { id: 8 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Buster Rimes');
  expect(container).toMatchSnapshot();
});
