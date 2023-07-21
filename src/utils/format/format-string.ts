// 字符串处理

export function formatStringTest() {}

/**
 * 驼峰转下划线
 * @param str
 * @returns str
 */
export function formatToUnderline(str: string): string {
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `_${match.toLowerCase()}`;
  });
  if (temp.slice(0, 1) === '_') {
    // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}

/**
 * 下划线转驼峰
 * @param str
 * @returns str
 */
export function formatToHump(str: string): string {
  return str.replace(/([^_])(?:_+([^_]))/g, ($0, $1, $2) => {
    return $1 + $2.toUpperCase();
  });
}

/**
 * 变量转大写
 * @param str
 * @returns str
 */
export function formatToUpperCase(str: string): string {
  return str.toUpperCase();
}

/**
 * 变量转小写
 * @param str
 * @returns str
 */
export function formatToLowerCase(str: string): string {
  return str.toLowerCase();
}

export interface FormatPathInfoResp {
  path: string;
  pathName: string;
  fileName: string;
}
export function formatPathInfo(filePath: string): FormatPathInfoResp {
  // 将所有的 \ 替换为 /
  const normalizedPath = filePath.replace(/\\/g, '/');
  // 使用 / 将路径分割为各个部分
  const pathParts = normalizedPath.split('/');
  // 文件名是最后一部分
  const fileName = pathParts.pop() ?? '';
  // 路径名是除了最后一部分的其他部分
  const pathName = pathParts.join('/');
  return {
    path: normalizedPath,
    pathName,
    fileName
  };
}
