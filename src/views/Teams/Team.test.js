import { render, screen } from '@testing-library/react';
import Team from '../../views/Teams/Team';
import { MemoryRouter } from 'react-router-dom';

test('should render team details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Stumptown Lumberjacks');
  expect(container).toMatchSnapshot();
});
