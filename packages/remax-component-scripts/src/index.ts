import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import build from './build';

export function run() {
  yargs(hideBin(process.argv))
    .scriptName('remax-component-script')
    .command(
      'build',
      '构建组件',
      y => {
        return y
          .option('watch', {
            describe: '监听文件变化',
            alias: 'w',
            type: 'boolean',
            default: false,
          })
          .option('type', {
            type: 'string',
            alias: 't',
            default: 'esm',
            description: '编译类型',
          });
      },
      argv => {
        // 组件构建
        build(process.cwd(), argv);
      }
    ).argv;
}
