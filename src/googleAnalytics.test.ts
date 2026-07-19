import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Google Analytics', () => {
  it('loads and configures the Armand Landing GA4 measurement ID', () => {
    const html = readFileSync('index.html', 'utf8');

    expect(html).toContain(
      'https://www.googletagmanager.com/gtag/js?id=G-57GP71L0Y0',
    );
    expect(html).toContain("gtag('config', 'G-57GP71L0Y0')");
  });
});
