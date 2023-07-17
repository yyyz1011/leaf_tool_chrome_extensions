interface ToolChildrenItem {
  key: string;
  title: string;
  desc?: string;
  to: string;
  desc?: string;
}
interface ToolItem {
  key: string;
  title: string;
  desc?: string;
  children: ToolChildrenItem[];
  desc?: string;
}

export const toolList: ToolItem[] = [
  {
    key: 'string-format',
    title: '字符串处理',
    desc: '字符串处理相关工具',
    children: [
      {
        key: 'naming_convertor',
        title: '命名风格转换',
        desc: '变量命名风格转换',
        to: 'naming-convertor'
      },
      {
        key: 'text_format',
        title: '文本格式化',
        desc: 'JSON、XML、SQL格式化',
        to: 'text-format'
      },
      {
        key: 'path_convertor',
        title: '路径转换',
        desc: '文件路径转换，包括对\\和/的转换、路径名提取、文件名提取',
        to: 'path-convertor'
      },
      {
        key: 'statistics',
        title: '统计',
        desc: '统计字符串内容，例如，标点符号数量、行数、字数等',
        to: 'statistics'
      }
    ]
  },
  {
    key: 'encrypt',
    title: '加密解密工具',
    desc: '进行加密解密操作、摘要生成、秘钥生成',
    children: [
      {
        key: 'key_generate',
        title: '秘钥生成',
        desc: '秘钥生成工具，包括对称秘钥生成，非对称秘钥生成',
        to: 'key-generate'
      },
      {
        key: 'encrypt_decrypt',
        title: '加密解密',
        desc: '进行对称加密解密，非对称加密和解密，支持自动生成秘钥进行加密',
        to: 'encrypt-decrypt'
      },
      {
        key: 'digest',
        title: '摘要加密',
        desc: '进行摘要加密，常见算法例如MD5、SHA-1、SHA-256等',
        to: 'digest'
      }
    ]
  },
  {
    key: 'generate',
    title: '数据生成工具和格式转换',
    desc: '常见数据的生成和对应格式转换，例如时间戳、UUID、密码',
    children: [
      {
        key: 'timestamp',
        title: '时间戳生成和转换',
        desc: '时间戳生成和格式转换',
        to: 'timestamp'
      },
      {
        key: 'uuid',
        title: 'UUID生成和格式转换',
        to: 'uuid'
      },
      {
        key: 'password',
        title: '密码生成',
        desc: '密码生成、支持字符选定',
        to: 'password'
      }
    ]
  },
  {
    key: 'encode-decode',
    title: '编码和解码操作',
    desc: '数据编码和解码操作',
    children: [
      {
        key: 'url',
        title: 'url编解码',
        desc: 'url请求特殊字符编码和解码',
        to: 'url'
      },
      {
        key: 'base64',
        title: 'base64编解码',
        desc: '以Base64为代表的一系列编解码，包括Base64、Base62、Base32',
        to: 'base64'
      },
      {
        key: 'base64-img',
        title: '图像base64编解码',
        to: 'base64-img'
      }
    ]
  }
];
