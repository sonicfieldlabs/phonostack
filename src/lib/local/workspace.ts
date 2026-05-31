import "server-only";

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const PHONOSTACK_LOCAL_DIR = ".phonostack";
export const PHONOSTACK_WORKSPACE_VERSION = 1;

export interface LocalWorkspaceManifest {
  version: typeof PHONOSTACK_WORKSPACE_VERSION;
  name: string;
  libraryRoots: string[];
  createdAt: string;
  updatedAt: string;
}

export function getWorkspaceRoot(): string {
  return process.env.PHONOSTACK_WORKSPACE_ROOT || join(/*turbopackIgnore: true*/ process.cwd());
}

export function getPhonostackDir(): string {
  return join(/*turbopackIgnore: true*/ getWorkspaceRoot(), PHONOSTACK_LOCAL_DIR);
}

export function ensurePhonostackDir(): string {
  const dir = getPhonostackDir();
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function getWorkspaceManifestPath(): string {
  return join(/*turbopackIgnore: true*/ ensurePhonostackDir(), "workspace.json");
}

export function readWorkspaceManifest(): LocalWorkspaceManifest {
  const path = getWorkspaceManifestPath();
  if (existsSync(/*turbopackIgnore: true*/ path)) {
    try {
      return JSON.parse(readFileSync(/*turbopackIgnore: true*/ path, "utf8")) as LocalWorkspaceManifest;
    } catch {
      // Fall through to a fresh manifest if a development file is malformed.
    }
  }

  const now = new Date().toISOString();
  const manifest: LocalWorkspaceManifest = {
    version: PHONOSTACK_WORKSPACE_VERSION,
    name: "Phonostack Local Workspace",
    libraryRoots: [],
    createdAt: now,
    updatedAt: now,
  };
  writeWorkspaceManifest(manifest);
  return manifest;
}

export function writeWorkspaceManifest(manifest: LocalWorkspaceManifest): void {
  writeFileSync(
    /*turbopackIgnore: true*/ getWorkspaceManifestPath(),
    JSON.stringify({ ...manifest, updatedAt: new Date().toISOString() }, null, 2),
    "utf8"
  );
}
