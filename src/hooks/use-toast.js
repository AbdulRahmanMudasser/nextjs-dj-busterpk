"use client";
import { useCallback } from "react";

// Simple toast mock — you can replace this with shadcn/ui or other toast system
export function useToast() {
  const toast = useCallback(({ title, description }) => {
    if (typeof window !== "undefined") {
      // Basic browser fallback
      alert(`${title ? title + "\n" : ""}${description || ""}`);
    }
    console.log("Toast:", { title, description });
  }, []);

  return { toast };
}
