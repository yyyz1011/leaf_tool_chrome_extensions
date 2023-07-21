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
/**
 * 获取路径信息
 * @param filePath
 * @returns FormatPathInfoResp
 */
export function formatPathInfo(filePath: string): FormatPathInfoResp {
  const normalizedPath = filePath.replace(/\\/g, '/');
  const pathParts = normalizedPath.split('/');
  const fileName = pathParts.pop() ?? '';
  const pathName = pathParts.join('/');
  return {
    path: normalizedPath,
    pathName,
    fileName
  };
}
