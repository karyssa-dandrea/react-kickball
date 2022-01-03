import { render } from '@testing-library/react';
import Teams from '../../views/Teams/Teams';

test('should render list of teams', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
