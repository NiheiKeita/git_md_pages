#!/usr/bin/env node

import { buildSite } from "../src/core/build-site.mjs";
import { loadConfig } from "../src/core/load-config.mjs";

const args = process.argv.slice(2);
const command = args[0] || "build";
const configPath = readOption(args, "--config");

if (command !== "build") {
  console.error(`Unknown command: ${command}`);
  console.error("Usage: git-md-pages build [--config ./git-md-pages.config.mjs]");
  process.exit(1);
}

const config = await loadConfig({ configPath });

buildSite(config).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function readOption(argsList, name) {
  const index = argsList.indexOf(name);
  if (index === -1) {
    return "";
  }
  return argsList[index + 1] || "";
}
