/**
 * Termi Protocol - representative TypeScript example.
 * Illustrative only. Full app: https://termiprotocol.com
 */

export const SITE_URL = "https://termiprotocol.com";
export const DOWNLOAD_URL = "https://termiprotocol.com/download";
export const ROADMAP_URL = "https://termiprotocol.com/roadmap";

export type AgentCli =
  | "claude-code"
  | "codex"
  | "gemini-cli"
  | "grok-cli"
  | "ollama";

export type AgentMode = "agent" | "plan" | "debug" | "multitask" | "ask";

export interface AgentDemo {
  name: string;
  cli: AgentCli;
  mode: AgentMode;
}

export const sampleAgents: AgentDemo[] = [
  { name: "Builder", cli: "claude-code", mode: "agent" },
  { name: "Reviewer", cli: "codex", mode: "plan" },
  { name: "Researcher", cli: "gemini-cli", mode: "ask" },
];

/** The real product is a desktop app. Learn more / download below. */
export function openWebsite(): string {
  return SITE_URL;
}
