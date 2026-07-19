# Official LINE Demo Design

## Goal

Extend the existing bottom-right digital business card experience so visitors can also open Armand's official LINE account.

## Confirmed interaction

- Keep the current floating share button and digital business card modal.
- Add a prominent LINE-green action directly below the existing vCard download action.
- Label the action clearly as a demo official LINE link.
- Open LINE in a new tab with safe external-link attributes.
- Keep the target URL in shared profile data so the production URL can be replaced in one place later.

## Component and data design

- Add an `officialLineUrl` field to the `Profile` type and `profileData`.
- Pass the existing `profile` object through `InteractiveShare`; no new global state is required.
- Render the LINE action as an anchor so it preserves native link behavior and supports keyboard navigation.
- Use a simple LINE-style chat icon treatment without adding a new dependency.

## Demo behavior and fallback

- The demo uses a placeholder LINE URL that demonstrates the finished interaction.
- The button copy makes the demo state explicit so visitors are not misled.
- Replacing `officialLineUrl` with the final `https://lin.ee/...` URL will activate the production destination without further component changes.

## Accessibility and responsive behavior

- Provide a descriptive accessible label.
- Preserve visible focus styles and a minimum mobile-friendly touch target.
- Open the external destination with `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the action full-width so the existing small-screen modal remains easy to use.

## Verification

- Add component tests first for the LINE label, destination, and safe external-link attributes.
- Run the component test, TypeScript check, and production build.
- Verify the modal and LINE action in a browser-sized mobile viewport.
- Deploy through the connected GitHub/Vercel production workflow and verify the live page.
