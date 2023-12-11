import { resolve } from 'node:path';
export const workplaceRoot = resolve(process.cwd(), '.');

// vue-tsc 产生的dts文件位置
export const dtsFileDir = resolve(workplaceRoot, 'dist/packages');
// 源码位置
export const packagesDir = resolve(workplaceRoot, 'packages');
