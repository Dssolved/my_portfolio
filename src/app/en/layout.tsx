import type { Metadata } from "next";
import type { ReactNode } from "react";

import { portfolioContent } from "@/data";

// Override the root (Russian) title template for all /en pages so shared
// links and browser tabs read with the Latin name.
const { profile } = portfolioContent.en;

export const metadata: Metadata = {
  title: {
    template: `%s | ${profile.name}`,
    default: `${profile.name} | ${profile.role}`,
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return children;
}
