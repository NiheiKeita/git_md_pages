import { buildSite } from "../lib/core/build-site.js";
import { loadConfig } from "../lib/core/load-config.js";

const config = await loadConfig();

buildSite(config).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
