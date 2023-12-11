import {  resolve } from 'node:path';
// cp 复制整个文件夹，从一个地方到另一个地方
import { readdir, access, constants, cp, stat } from 'node:fs/promises';
import {
  workplaceRoot,
  dtsFileDir
} from './utils'
// 源码位置
const packagesDir = resolve(workplaceRoot, 'packages');

// 移动dts 文件到 源码的dist 文件夹下
const copyPackagesDist = async () => {
  // 判断产物是否存在
  await access(dtsFileDir, constants.COPYFILE_FICLONE_FORCE);
  const packageDirList = await readdir(dtsFileDir, { encoding: 'utf-8' });
  packageDirList.forEach(async (subFileName) => {
    const srcPath = resolve(dtsFileDir, subFileName, 'src')
    const pkInfo = await stat(srcPath);
    if (pkInfo.isDirectory()) {
      // 复制文件夹下面src 内容到源码文件夹下 dist@types 下面
      cp(srcPath, resolve(packagesDir, subFileName, 'dist/@types'), { recursive: true });
    }
  });
}

async function main() {
  copyPackagesDist();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});