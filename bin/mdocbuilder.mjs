#!/usr/bin/env node

import { buildSite } from "../lib/core/build-site.js";
import { loadConfig } from "../lib/core/load-config.js";

const args = process.argv.slice(2);
const command = args[0] || "build";
const configPath = readOption(args, "--config");

if (command !== "build") {
  console.error(`Unknown command: ${command}`);
  console.error("Usage: mdocbuilder build [--config ./mdocbuilder.config.mjs]");
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
