import {
  Tree,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  // 创建库
  await libraryGenerator(tree, { name: schema.name });

  const libraryRoot = readProjectConfiguration(tree, schema.name).root;

  generateFiles(
    tree, // 虚拟文件系统
    joinPathFragments(__dirname, './files/'), // 模板文件路径
    libraryRoot, // 文件的目标路径
    schema // 配置对象以替换模板文件中的变量
  );

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
