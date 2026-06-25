import { useEffect, useState } from "react";

/**
 * SSR-safe media-query hook. Returns whether the query currently matches and
 * updates on change.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Fermo's tablet breakpoint: the layout switches at 810px. */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 809px)");
}
