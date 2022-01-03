import { render, screen } from '@testing-library/react';
import Teams from '../../views/Teams/Teams';
import { MemoryRouter } from 'react-router-dom';

test('should render list of teams', async () => {
  const container = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers');
  expect(container).toMatchSnapshot();
});
