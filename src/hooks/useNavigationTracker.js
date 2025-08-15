// hooks/useNavigationTracker.js
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function useNavigationTracker(onNavigate) {
  const pathname = usePathname();
  const prevPath = useRef(null);

  useEffect(() => {
    if (prevPath.current !== null && prevPath.current !== pathname) {
      onNavigate(prevPath.current, pathname);
    }
    prevPath.current = pathname;
  }, [pathname, onNavigate]);
}
