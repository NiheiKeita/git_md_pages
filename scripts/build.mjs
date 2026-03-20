import { buildSite } from "../src/core/build-site.mjs";
import { loadConfig } from "../src/core/load-config.mjs";

const config = await loadConfig();

buildSite(config).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
