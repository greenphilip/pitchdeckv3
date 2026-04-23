

## Add password gate to the deck

Port the same passcode protection used in the other Glacier site. The deck won't render until the user enters the passcode. Unlock persists for the browser session via `sessionStorage`.

### Files to add

1. **`src/hooks/use-unlocked.tsx`** — hook reading/writing `sessionStorage["glacier.unlocked"]`, exposing `{ unlocked, unlock }`. Listens to `storage` events so unlocking in one tab unlocks others.

2. **`src/components/PasswordGate.tsx`** — visual gate matching the other project exactly:
   - Dark Blue (#143560) background with two animated Mint/Blue radial blobs
   - Glacier wordmark (pulsing Mint dot + "Glacier")
   - Glass card with Lock icon, "Investor preview" headline, "Enter passcode to view the deck." subtitle
   - Password input + "Unlock deck" Mint button
   - Shake animation + "Incorrect passcode" message on wrong entry
   - Footer: "April 2026 · Bridge round"
   - Passcode: `GLACIER_2026` (same as other site)

### File to modify

3. **`src/pages/Index.tsx`** — wrap the existing `<Presentation />` render:
   ```tsx
   const { unlocked, unlock } = useUnlocked();
   if (!unlocked) return <PasswordGate onUnlock={unlock} />;
   return <Presentation />;
   ```

### Notes

- Pure client-side gate (same as the source project) — sufficient for an investor-preview soft lock, not real security.
- Re-uses existing `Input` from `@/components/ui/input`, `framer-motion`, and `lucide-react` — no new dependencies.
- Storage key `glacier.unlocked` matches the other site, so anyone already unlocked there in the same browser session won't see the gate again (harmless on different domains; only same-origin sessionStorage is shared).

