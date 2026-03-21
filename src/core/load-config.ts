import path from "node:path";
import { pathToFileURL } from "node:url";
import fs from "node:fs/promises";
import type { BuildConfig } from "./build-site.js";

const DEFAULT_CONFIG_FILES = [
  "git-md-pages.config.mjs",
  "git-md-pages.config.js",
];

type LoadConfigOptions = {
  rootDir?: string;
  configPath?: string;
};

export async function loadConfig(options: LoadConfigOptions = {}): Promise<BuildConfig> {
  const rootDir = path.resolve(options.rootDir || process.cwd());
  const explicitPath = options.configPath ? path.resolve(rootDir, options.configPath) : "";
  const configPath = explicitPath || (await findConfigFile(rootDir));

  if (!configPath) {
    return { rootDir };
  }

  const loaded = await import(pathToFileURL(configPath).href);
  const config = loaded.default || loaded.config || {};
  return {
    ...config,
    rootDir,
  };
}

async function findConfigFile(rootDir: string): Promise<string> {
  for (const candidate of DEFAULT_CONFIG_FILES) {
    const candidatePath = path.join(rootDir, candidate);
    try {
      await fs.access(candidatePath);
      return candidatePath;
    } catch {
      continue;
    }
  }
  return "";
}
