import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { profileData } from '../data';
import InteractiveShare from './InteractiveShare';

describe('InteractiveShare', () => {
  it('offers the official LINE demo as a safe external link', () => {
    render(
      <InteractiveShare
        profile={profileData}
        isOpen
        onClose={vi.fn()}
      />,
    );

    const lineLink = screen.getByRole('link', {
      name: /加入我的官方 LINE/,
    });

    expect(lineLink).toHaveAttribute(
      'href',
      'https://line.me/R/ti/p/@your-line-id',
    );
    expect(lineLink).toHaveAttribute('target', '_blank');
    expect(lineLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('Demo')).toBeInTheDocument();
  });
});
