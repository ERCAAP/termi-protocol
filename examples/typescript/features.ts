/**
 * Termi Protocol - representative TypeScript example.
 * Public, illustrative feature catalog. Full app: https://termiprotocol.com
 */
import { SITE_URL } from "./config";

export interface Feature {
  title: string;
  summary: string;
  tags: string[];
}

export const features: Feature[] = [
  {
    title: "Live Agent Room",
    summary: "Terminal events become a real-time 3D workspace.",
    tags: ["threejs", "observability"],
  },
  {
    title: "Task Board",
    summary: "Assign work, track status, see blocked and done tasks.",
    tags: ["tasks", "multi-agent"],
  },
  {
    title: "Bring Your Own CLI",
    summary: "Claude Code, Codex, Gemini CLI, Grok, Aider, Ollama.",
    tags: ["cli", "byok"],
  },
  {
    title: "Checkpoints",
    summary: "Review and rewind when an agent edits the wrong file.",
    tags: ["safety", "history"],
  },
  {
    title: "Token and Cost Tracking",
    summary: "Follow token and cost signals next to the work itself.",
    tags: ["cost", "tokens"],
  },
  {
    title: "Cozy Mini-Game Layer",
    summary: "XP, leagues, pets and desk tools for long sessions.",
    tags: ["gamification"],
  },
];

export const modes = ["agent", "plan", "debug", "multitask", "ask"] as const;

export const tiers = [
  "Rookie",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Legend",
] as const;

/** Everything points home. */
export function learnMore(): string {
  return SITE_URL;
}
