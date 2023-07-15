interface ToolChildrenItem {
  key: string;
  title: string;
  to: string;
}
interface ToolItem {
  key: string;
  title: string;
  children: ToolChildrenItem[];
}

export const toolList: ToolItem[] = [
  {
    key: 'format',
    title: '命名格式转换',
    children: [
      {
        key: 'format_underline',
        title: '下划线转驼峰',
        to: 'tool-format-underline'
      },
      {
        key: 'format_hump',
        title: '驼峰转下划线',
        to: 'tool-format-hump'
      },
      {
        key: 'format_upper_case',
        title: '变量转大写',
        to: 'tool-format-upper-case'
      },
      {
        key: 'format_lower_case',
        title: '变量转小写',
        to: 'tool-format-lower-case'
      }
    ]
  },
  {
    key: 'encrypt',
    title: '加解密操作',
    children: [
      {
        key: 'md5',
        title: 'md5加密解密',
        to: ''
      }
    ]
  },
  {
    key: 'text-format',
    title: '文本格式化',
    children: [
      {
        key: 'json',
        title: 'json',
        to: ''
      }
    ]
  }
];
