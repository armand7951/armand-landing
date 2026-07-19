# Official LINE Demo Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a clearly labeled official LINE demo action to the existing digital business card modal and deploy it to the production site.

**Architecture:** Keep the current modal state and component structure. Store the replaceable LINE destination on the shared `Profile` model, then render a native external anchor inside `InteractiveShare` so mobile, keyboard, and new-tab behavior work without new application state.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Vitest, Testing Library

---

### Task 1: Add the component test harness

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`

**Step 1: Install the test dependencies**

Run:

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

Expected: dependencies install with no audit vulnerabilities and `package-lock.json` is updated.

**Step 2: Add the test command**

Add to `package.json` scripts:

```json
"test": "vitest run"
```

**Step 3: Configure Vitest**

Create `vitest.config.ts`:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
```

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
```

**Step 4: Verify the empty test harness**

Run: `npm test -- --passWithNoTests`

Expected: PASS with no test files found.

**Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/test/setup.ts
git commit -m "test: add component test harness"
```

### Task 2: Define the official LINE interaction with a failing test

**Files:**
- Create: `src/components/InteractiveShare.test.tsx`

**Step 1: Write the failing test**

Create `src/components/InteractiveShare.test.tsx`:

```tsx
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
```

**Step 2: Run the test to verify RED**

Run: `npm test -- src/components/InteractiveShare.test.tsx`

Expected: FAIL because no link named `加入我的官方 LINE` exists.

**Step 3: Commit the failing specification**

```bash
git add src/components/InteractiveShare.test.tsx
git commit -m "test: specify official LINE demo action"
```

### Task 3: Implement the official LINE demo action

**Files:**
- Modify: `src/types.ts`
- Modify: `src/data.ts`
- Modify: `src/components/InteractiveShare.tsx`

**Step 1: Extend the profile model**

Add to `Profile` in `src/types.ts`:

```ts
officialLineUrl: string;
```

**Step 2: Add the replaceable demo URL**

Add to `profileData` in `src/data.ts`:

```ts
officialLineUrl: 'https://line.me/R/ti/p/@your-line-id',
```

**Step 3: Render the minimal LINE action**

Import `MessageCircle` from `lucide-react`, then render this anchor immediately below the vCard button:

```tsx
<a
  href={profile.officialLineUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="加入我的官方 LINE（Demo，另開新分頁）"
  className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05b84d] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2"
>
  <MessageCircle className="h-4 w-4" aria-hidden="true" />
  <span>加入我的官方 LINE</span>
  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] uppercase tracking-wider">
    Demo
  </span>
</a>
```

**Step 4: Run the focused test to verify GREEN**

Run: `npm test -- src/components/InteractiveShare.test.tsx`

Expected: 1 test passes.

**Step 5: Run all static and build checks**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all tests pass, TypeScript exits 0, and Vite produces `dist/`.

**Step 6: Commit**

```bash
git add src/types.ts src/data.ts src/components/InteractiveShare.tsx
git commit -m "feat: add official LINE demo action"
```

### Task 4: Browser verification

**Files:**
- No source changes expected

**Step 1: Start the local app**

Run: `npm run dev`

Expected: Vite serves the app on `http://localhost:3000`.

**Step 2: Verify the desktop interaction**

- Open the floating button.
- Confirm the digital card still opens.
- Confirm the LINE button appears below the vCard action.
- Confirm the LINE button destination and new-tab behavior.

**Step 3: Verify the mobile interaction**

- Use a viewport around 390 × 844.
- Confirm the modal remains scrollable and the LINE action stays full-width and tappable.
- Confirm the close button and existing card actions still work.

**Step 4: Capture evidence**

Save a screenshot outside the repository or in an ignored artifact directory.

### Task 5: Integrate and deploy

**Files:**
- No additional source files expected

**Step 1: Review the branch**

Run:

```bash
git status --short
git log --oneline main..HEAD
git diff --stat main...HEAD
```

Expected: only the test harness, tests, profile model/data, LINE UI, and plan documents are present.

**Step 2: Merge the feature into `main`**

Run from the primary worktree:

```bash
git merge --ff-only codex/official-line-demo
```

Expected: fast-forward merge succeeds.

**Step 3: Push and wait for Vercel**

Run:

```bash
git push origin main
```

Expected: Vercel creates a production deployment for the pushed commit and reaches `READY`.

**Step 4: Verify production**

- Request `https://armand-landing.vercel.app` and expect HTTP 200.
- Open the floating button and confirm the LINE Demo action appears.
- Confirm the live anchor uses the demo URL and safe external-link attributes.
