"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize PostHog in production to avoid tracking development activity
    const isProduction = process.env.NODE_ENV === "production";
    const hasPostHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (isProduction && hasPostHogKey) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
        defaults: "2025-05-24",
      });
    } else {
      console.log("PostHog disabled for local development");
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
