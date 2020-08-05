import * as fs from "fs";

export async function getFilesInDir(path: string) {
  const dir = await fs.promises.opendir(path);
  let files: string[] = [];

  for await (const dirent of dir) {
    files.push(dirent.name);
  }

  return files;
}
