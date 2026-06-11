import { cp, mkdir, rm } from "node:fs/promises";

const outputDir = new URL("../dist/", import.meta.url);
const files = ["index.html", "css", "js", "assets", "data", "README.md"];

await rm(outputDir, { force: true, recursive: true });
await mkdir(outputDir, { recursive: true });

await Promise.all(
  files.map((file) =>
    cp(new URL(`../${file}`, import.meta.url), new URL(file, outputDir), {
      recursive: true,
    }),
  ),
);

console.log("Build concluido em dist/");
