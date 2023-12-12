import { resolve } from 'node:path'
import {
  readFile, readdir, stat, writeFile,
} from 'node:fs/promises'
import { packagesDir } from './utils'
// 设置package.json 文件的exports 字段(处理npm包默认导出dts 文件信息)
const setPackagesExportsTypes = async () => {
  const list = await readdir(packagesDir, { encoding: 'utf-8' })
  const promises = list.map(async (item) => {
    const pkInfo = await stat(resolve(packagesDir, item, 'package.json')) // 获取package.json文件信息
    if (pkInfo.isFile()) {
      const pkJson = await readFile(resolve(packagesDir, item, 'package.json'), { encoding: 'utf-8' })
      const pk = JSON.parse(pkJson)
      const types = pk?.exports?.['.']?.types
      if (!types) {
        const exports = pk.exports || {}
        const exportsDefault = exports['.'] || {}
        pk.exports = {
          ...exports,
          '.': {
            ...exportsDefault,
            types: './dist/@types/index.d.ts',
          },
        }
        await writeFile(resolve(packagesDir, item, 'package.json'), JSON.stringify(pk, null, 2), { encoding: 'utf-8' })
      }
    }
  })
  await Promise.all(promises)
}

function main() {
  setPackagesExportsTypes()
}
main()
