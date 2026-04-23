import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "glacier.unlocked";

export function useUnlocked() {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setUnlocked(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const unlock = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setUnlocked(true);
  }, []);

  return { unlocked, unlock };
}
