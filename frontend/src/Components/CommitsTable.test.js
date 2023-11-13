import React from 'react';
import { render, screen } from '@testing-library/react';
import CommitsTable from './CommitsTable';

describe('CommitsTable', () => {
  const mockCommits = [
    {
      commit: {
        author: { 
          name: 'Jane Doe', 
          email: 'jane@example.com', 
          date: '2023-01-01T12:00:00Z' },
        message: 'Added new feature'
      }
    },
    {
      commit: {
        author: { 
          name: 'John Smith', 
          email: 'john@example.com', 
          date: '2023-01-02T15:30:00Z' },
        message: 'Fixed bug'
      }
    },
    {
      commit: {
        author: { 
          name: 'Carlos Perez', 
          email: 'cperez@example.com', 
          date: '2021-02-02T15:30:00Z' },
        message: 'Update'
      }
    }
  ];

  test('renders CommitsTable component', () => {
    render(<CommitsTable commits={mockCommits} />);
    expect(screen.getByText('Autor')).toBeInTheDocument();
  });

  test('renders a list of commits', () => {
    render(<CommitsTable commits={mockCommits} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Added new feature')).toBeInTheDocument();
  });

});
