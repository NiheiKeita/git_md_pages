import fs from "node:fs/promises";

const tag = process.argv[2] || process.env.GITHUB_REF_NAME || "";
if (!tag) {
  console.error("Release tag is required.");
  process.exit(1);
}

if (!/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(tag)) {
  console.error(`Invalid release tag: ${tag}`);
  console.error("Use tags like v1.0.0 or v1.0.0-r1.");
  process.exit(1);
}

const packageJson = JSON.parse(await fs.readFile(new URL("../package.json", import.meta.url), "utf8"));
const expectedVersion = tag.slice(1);

if (packageJson.version !== expectedVersion) {
  console.error(`Tag version ${expectedVersion} does not match package.json version ${packageJson.version}.`);
  process.exit(1);
}

console.log(`Verified release tag ${tag} for package version ${packageJson.version}.`);
