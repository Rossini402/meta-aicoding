interface Case {
    id: number;
    title: string;
    category: string;
    level: number;
    author: string;
    description: string;
    link: string;
}

const cases: Case[] = [  
    // 工具
    {
      id: 0.1,
      title: 'AI 编程工具 Cursor',
      category: '工具',
      level: 1,
      author: '小林',
      description: '利用AI辅助编程工具Cursor提升开发效率',
      link: 'https://drwnsc5veu.feishu.cn/wiki/EYRiweI5ai1y8YkHrjEcXvL6noa'
    },
    {
      id: 0.2,
      title: '字节 Trae',
      category: '工具',
      level: 1,
      author: '小林',
      description: '字节跳动推出的AI编程工具',
      link: 'https://drwnsc5veu.feishu.cn/wiki/BxLfwf5Xfi6KkZkZjuictRAhnLe'
    },
    {
      id: 0.3,
      title: '阿里通义灵码',
      category: '工具',
      level: 1,
      author: '小林',
      description: '阿里通义灵码AI编程工具',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Jtv8wxpswiXQUDk8DZEcRQcOnEb'
    },
    {
      id: 0.4,
      title: '如何利用 Git 进行版本控制',
      category: '工具',
      level: 2,
      author: '予贝',
      description: 'Git版本控制系统的使用教程',
      link: 'https://drwnsc5veu.feishu.cn/wiki/FdwAwnFImiC7EIkaNq1c6lzvnWc'
    },
    {
      id: 0.5,
      title: 'Claude Code + Kimi K2',
      category: '工具',
      level: 1,
      author: '小林',
      description: 'Claude Code 如何快速接入 Kimi K2模型',
      link: 'https://drwnsc5veu.feishu.cn/wiki/D6tbwCTOjiZsIMkqn8nceiP8nih'
    },
    // 小程序
    {
      id: 1.1,
      title: 'AI 开发编程题库类小程序（4.3 万用户）',
      category: '小程序',
      level: 3,
      author: '小林',
      description: '使用AI开发教育题库类小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/UaMsw4uIMiK5VokIf7pcbO38nWt'
    },
    {
      id: 1.2,
      title: 'AI 开发寿命预估小程序（1.3 万用户）',
      category: '小程序',
      level: 2,
      author: '小林',
      description: '开发一个基于健康数据预估寿命的小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/JdPMw1MRKiEWDVkV1V9c3Lv6nbf'
    },
    {
      id: 1.3,
      title: 'AI 开发减肥记录小程序（2700 用户）',
      category: '小程序',
      level: 3,
      author: '小林',
      description: '使用AI开发一个健康减肥记录小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/TZKqwbOS8iuho5kisx6czrA0n1d'
    },
    {
      id: 1.4,
      title: 'AI 开发图片压缩小程序（1000 用户）',
      category: '小程序',
      level: 1,
      author: '小林',
      description: '开发一个高效的图片压缩小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/CpU7w0zwMixwRBksjtVclhMWnJh'
    },
    {
      id: 1.5,
      title: 'AI 开发图片加水印小程序（500 用户）',
      category: '小程序',
      level: 1,
      author: '小林',
      description: '开发一个为图片添加水印的小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/JFWYwTKF3iv8nLkJoUecUm5nnqf'
    },
    {
      id: 1.6,
      title: 'AI 开发饺子售卖小程序（2000 商单）',
      category: '小程序',
      level: 4,
      author: '伍六七',
      description: '开发饺子售卖小程序，价值2000元商业订单',
      link: 'https://drwnsc5veu.feishu.cn/wiki/X67cwYb20izi8pk6ZfycgJwUnpc'
    },
    {
      id: 1.7,
      title: 'AI 开发查八字小程序',
      category: '小程序',
      level: 3,
      author: '苍何',
      description: '开发一个八字查询小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/FNGYwt7wZis6EIkE6K9c7Ifxn0g'
    },
    {
      id: 1.8,
      title: 'AI 开发查性格测试小程序（3000 商单）',
      category: '小程序',
      level: 4,
      author: '大鹏',
      description: '开发性格测试小程序，价值3000元商业订单',
      link: 'https://drwnsc5veu.feishu.cn/wiki/QZUjwQczFibKdckX4M0cbbaTnUf'
    },
    {
      id: 1.9,
      title: 'AI 开发中药查询小程序',
      category: '小程序',
      level: 3,
      author: '南卷',
      description: '开发一个中药知识查询小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Z7V7w0wZwiNA3hkfIXxctpmFngd'
    },
    {
      id: 1.10,
      title: 'AI 开发一键获取公众号图片小程序',
      category: '小程序',
      level: 2,
      author: '动次动次',
      description: '开发自动获取微信公众号图片的小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/ZUtrwe4aPiHNMGkp8sLcKBtPn7g'
    },
    {
      id: 1.11,
      title: 'AI 开发小众旅游小程序',
      category: '小程序',
      level: 4,
      author: '狂热',
      description: '开发一个推荐小众旅游目的地的小程序',
      link: 'https://drwnsc5veu.feishu.cn/wiki/DYJKwPCQvirX6vkuIq6ciIZenJg'
    },
    // iOS
    {
      id: 2.1,
      title: '免费 iOS APP 陪伴日记',
      category: 'iOS',
      level: 5,
      author: '予贝',
      description: '开发一款免费的iOS陪伴日记应用',
      link: 'https://drwnsc5veu.feishu.cn/wiki/WLaVwWrCgizSLJkNwT4cHr2Wnxc'
    },
    {
      id: 2.2,
      title: '付费 iOS APP 图片处理',
      category: 'iOS',
      level: 3,
      author: '予贝',
      description: '开发一款付费的iOS图片处理应用',
      link: 'https://drwnsc5veu.feishu.cn/wiki/CnaFwgj9ticlhUk9Fnicnm00n1c'
    },
    {
      id: 2.3,
      title: '免费 iOS boring time',
      category: 'iOS',
      level: 2,
      author: '曹大',
      description: '开发一款解决无聊时光的免费iOS应用',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Vac7we6fliEZS6kVXHhcJy44nRh'
    },
    {
      id: 2.4,
      title: '付费 iOS 易转（榜单 24）',
      category: 'iOS',
      level: 2,
      author: '王登康',
      description: '通过用 AI编程，跑通了 iOS App 从开发到上架的完整闭环，登上了 App Store 分类付费榜 Top24。',
      link: 'https://drwnsc5veu.feishu.cn/wiki/TIN3wkqPTi5SIEkafA6c62mmnId'
    },
    // 安卓
    {
      id: 3.1,
      title: '电子产品管理工具',
      category: '安卓',
      level: 1,
      author: '予贝',
      description: '开发安卓平台的电子产品管理工具',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Y2ffwF8g4iI0ltkfDWJc3f8On4c'
    },
    {
      id: 3.2,
      title: '表情包生成器 APP',
      category: '安卓',
      level: 2,
      author: '鱼皮',
      description: ' 保姆级教程，用 AI 开发手机 APP',
      link: 'https://drwnsc5veu.feishu.cn/wiki/ErBEwqgbuiRAl8kjmgKccdwYnFc'
    },
    // 网站
    {
      id: 4.1,
      title: '图片加边框网页',
      category: '网站',
      level: 1,
      author: '小林',
      description: '开发一个为图片添加边框的网页应用',
      link: 'https://drwnsc5veu.feishu.cn/wiki/KLOLwOZHiiAUUsk8tkOc7EePnCc'
    },
    {
      id: 4.2,
      title: '贪吃蛇网页游戏',
      category: '网站',
      level: 1,
      author: '小林',
      description: '使用HTML、CSS和JavaScript开发贪吃蛇游戏',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Qxz0wFlMwi1QTHkW7KncIEbwn5e'
    },
    {
      id: 4.3,
      title: 'Chatbot 聊天网站',
      category: '网站',
      level: 5,
      author: '薇冷',
      description: '从零开始构建一个AI聊天机器人网站',
      link: 'https://drwnsc5veu.feishu.cn/wiki/A58rwS1Syi5W4dkAw8dcBCttnGe'
    },
    {
      id: 4.4,
      title: '坐标轴科幻风',
      category: '网站',
      level: 1,
      author: '小林',
      description: '创建具有科幻风格的坐标轴可视化网页',
      link: 'https://drwnsc5veu.feishu.cn/wiki/EfVPwfWpmiN3efkYcOacNKURnke'
    },
    {
      id: 4.5,
      title: 'AI 排版助手',
      category: '网站',
      level: 2,
      author: '小林',
      description: '使用AI优化网页排版和布局',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Z5zEwEQfeilpNYkIK5jcfL3XnXg'
    },
    {
      id: 4.6,
      title: '从 0 到 1 上线海外站点',
      category: '网站',
      level: 4,
      author: '唯唐',
      description: '完整指南：如何创建并上线一个面向海外用户的网站',
      link: 'https://drwnsc5veu.feishu.cn/wiki/EHdRwmx5gi6jwqk3WW4cuEwQnsg'
    },
    {
      id: 4.7,
      title: 'Gemini 开发植物大战僵尸',
      category: '网站',
      level: 1,
      author: '苍何',
      description: '使用Gemini AI开发植物大战僵尸游戏',
      link: 'https://drwnsc5veu.feishu.cn/wiki/WVLlwChvKiNTQGkOgEycCnytnSe'
    },
    {
      id: 4.8,
      title: '海外站 UI 优化（1000美金）',
      category: '网站',
      level: 3,
      author: '超级无敌小湾娘',
      description: '针对海外用户优化网站UI设计，价值1000美金的项目',
      link: 'https://drwnsc5veu.feishu.cn/wiki/NKhVwJNwdiGYMXk5ir7cR236ngQ'
    },
    // 插件
    {
      id: 5.1,
      title: '网页思维导图生成插件',
      category: '插件',
      level: 2,
      author: '熊猫Jay',
      description: '开发一个自动生成网页思维导图的浏览器插件',
      link: 'https://drwnsc5veu.feishu.cn/wiki/RtTowzLi2ijE5TkPoSMcm3UNnng'
    },
    {
      id: 5.2,
      title: '治愈系笑话生成器谷歌浏览器插件',
      category: '插件',
      level: 1,
      author: '李想',
      description: '开发一个生成治愈系笑话的谷歌浏览器插件',
      link: 'https://drwnsc5veu.feishu.cn/wiki/U0xMwhWExiKD8skuvQicmEdWnRg'
    },
    {
      id: 5.3,
      title: '批量生成公众号内容',
      category: '插件',
      level: 2,
      author: 'cloudrobot',
      description: '开发一个批量生成微信公众号内容的工具',
      link: 'https://drwnsc5veu.feishu.cn/wiki/QVdQwvfFZijKoiklUAjc6cgNnCe'
    },
    // 提示词
    {
      id: 6.1,
      title: 'Cursor 全局提示',
      category: '提示词',
      level: 1,
      author: '共创者',
      description: '如何在Cursor中设置和使用全局提示词',
      link: 'https://drwnsc5veu.feishu.cn/wiki/ZcnFw5esXiglS2kyswWcPMLPnrH'
    },
     // MCP
     {
      id: 7.1,
      title: '高德 MCP + Cursor 开发旅游助手',
      category: 'MCP',
      level: 1,
      author: '小林、亦辰',
      description: '结合高德MCP和Cursor开发旅游助手应用',
      link: 'https://drwnsc5veu.feishu.cn/wiki/YspwwR0k8id9TzkL4OIc6VkYnbf'
    },
    {
      id: 7.2,
      title: '设计 MCP + Trae 一键生成网页',
      category: 'MCP',
      level: 1,
      author: '小林',
      description: '结合设计MCP和Trae快速生成网页',
      link: 'https://drwnsc5veu.feishu.cn/wiki/IIdtwb5fkidqJSk0Xygcu1XJn9f'
    },
    {
      id: 7.3,
      title: 'Claude+高德 MCP 搞定苏州三日游',
      category: 'MCP',
      level: 4,
      author: '易安、成峰',
      description: '使用Claude和高德MCP规划一次完美的苏州三日游行程',
      link: 'https://drwnsc5veu.feishu.cn/wiki/DwlhwXJvLidiFqk8bfqc5rfKnGd'
    },
    {
      id: 7.4,
      title: 'Chatlog+MCP: 一键总结微信聊天记录',
      category: 'MCP',
      level: 2,
      author: '亦辰',
      description: '使用MCP快速分析和总结长篇微信聊天记录',
      link: 'https://drwnsc5veu.feishu.cn/wiki/XEqgwsJsUiRtkXk7WhVckXUZnnH'
    },
    {
      id: 7.5,
      title: 'flomo+MCP 快速实现知识管理',
      category: 'MCP',
      level: 1,
      author: '小林',
      description: '使用flomo和MCP构建个人知识管理系统',
      link: 'https://drwnsc5veu.feishu.cn/wiki/QRA9wa33JiNwrekYTXWchw8Wnmb'
    },
    {
      id: 7.6,
      title: '微信读书+MCP，一键生成精美读书卡片',
      category: 'MCP',
      level: 3,
      author: '小林、亦辰',
      description: '将微信读书笔记转换为精美的分享卡片',
      link: 'https://drwnsc5veu.feishu.cn/wiki/YgJXwL3Bti9ktHkaTAFcPB3LnQh'
    },
    {
      id: 7.7,
      title: '12306+MCP，实时监控票务信息',
      category: 'MCP',
      level: 2,
      author: '小林、亦辰',
      description: '使用MCP监控12306票务信息',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Ezwmwgx9WiDwkWkBnvxcp6yZnYf'
    },
    {
      id: 7.8,
      title: '高德 MCP + MiniMax MCP，在故宫听乾隆讲秘密',
      category: 'MCP',
      level: 4,
      author: '成峰',
      description: '结合高德和MiniMax MCP创建故宫语音导览体验',
      link: 'https://drwnsc5veu.feishu.cn/wiki/N7GzwlaBDiPcqik97xPcprt7nPh'
    },
    {
      id: 7.9,
      title: '纳米 AI 智能体 + MCP，3 分钟规划完爆款旅行',
      category: 'MCP',
      level: 3,
      author: '成峰',
      description: '使用纳米AI智能体和MCP快速规划旅行路线',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Keadw0JT0izPfTka0ycczJ0SnGe'
    },
    {
      id: 7.10,
      title: '飞常准! 飞机出行 MCP + 天气 MCP',
      category: 'MCP',
      level: 4,
      author: '亦辰',
      description: '结合飞行信息和天气MCP优化出行计划',
      link: 'https://drwnsc5veu.feishu.cn/wiki/LTHOwa7RbiYeTSkuMnYczTG8nux'
    },
    {
      id: 7.11,
      title: '支付宝 MCP，开启 AI 支付新纪元',
      category: 'MCP',
      level: 2,
      author: '苍何',
      description: '探索支付宝MCP的AI支付功能',
      link: 'https://drwnsc5veu.feishu.cn/wiki/PbK3w5NJHixFBMkXpsqc0bKbn6d'
    },
    {
      id: 7.12,
      title: '飞书 MCP 实现文档自动化',
      category: 'MCP',
      level: 3,
      author: '易安',
      description: '使用飞书MCP实现文档处理自动化',
      link: 'https://drwnsc5veu.feishu.cn/wiki/ZrstwsD2LiVSeDkWHTmcSLqan4d'
    },
    {
      id: 7.13,
      title: 'Qwen3+抖音 MCP 打造了个 24 小时待命的抖音小秘',
      category: 'MCP',
      level: 4,
      author: '云中江树',
      description: '结合Qwen3和抖音MCP创建全天候抖音助手',
      link: 'https://drwnsc5veu.feishu.cn/wiki/AOWPwg3PriuXUZkGqb9cHjvmnHb'
    },
    {
      id: 7.14,
      title: 'supabase + MCP 轻松操作数据',
      category: 'MCP',
      level: 2,
      author: '李想',
      description: '使用supabase和MCP简化数据库操作',
      link: 'https://drwnsc5veu.feishu.cn/wiki/ApfSw3NWZiRHSKkmWLacH1Pmn6d'
    },
    {
      id: 7.15,
      title: 'AI + MCP 实现 PPT 自由',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '利用AI和MCP自动生成专业PPT',
      link: 'https://drwnsc5veu.feishu.cn/wiki/M134wMNPqi5tBLkt4ejc7rT6nod'
    },
    {
      id: 7.16,
      title: 'Cursor + 百度网盘 MCP 构建私人网盘助手',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '结合Cursor和百度网盘MCP管理网盘文件',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Ypvrw4vKwi83pMk4E9OcVJpsn6r'
    },
    {
      id: 7.17,
      title: '人格小队 MCP，4 种陪聊性格',
      category: 'MCP',
      level: 1,
      author: '亦辰',
      description: '使用MCP创建多种性格的AI聊天伙伴',
      link: 'https://drwnsc5veu.feishu.cn/wiki/C3tcw1cJ9iobRqkXzY0coK4DnB8'
    },
    {
      id: 7.18,
      title: '微信支付 MCP，开启支付新纪元',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '解决在智能体开发过程中的支付问题',
      link: 'https://drwnsc5veu.feishu.cn/wiki/KBfpwJPyXi82fFkfWTEcZgbandc'
    },
    
    // Agent
    {
      id: 8.1,
      title: '手搓 Agent 一键批量制作 Labubu 手机壁纸',
      category: 'Agent',
      level: 2,
      author: '苍何',
      description: '使用自定义Agent批量生成Labubu风格壁纸',
      link: 'https://drwnsc5veu.feishu.cn/wiki/LU8Uw9NMriR5QikVaPbci69Qntb'
    },
    {
      id: 8.2,
      title: 'Agent 交易市场',
      category: 'Agent',
      level: 1,
      author: 'tab_engineer',
      description: '探索和使用各类专业Agent的交易平台',
      link: 'https://drwnsc5veu.feishu.cn/wiki/WuB1wHixqiBF8kkkglacB3IAnyd'
    },
    {
      id: 8.3,
      title: '调香 Agent',
      category: 'Agent',
      level: 1,
      author: 'Helen yee',
      description: '一句话调香',
      link: 'https://drwnsc5veu.feishu.cn/wiki/OyYjwlZqQimakMkQHY1c9WmSndc'
    },
    {
      id: 8.4,
      title: '降重 Agent 设计思维（10 万订单）',
      category: 'Agent',
      level: 1,
      author: '熊猫Jay',
      description: '设计一款AI降重产品，价值10万元订单',
      link: 'https://drwnsc5veu.feishu.cn/wiki/GGfjwwdqxi0kiPk0iXxcCZbtnXc'
    },
    // 主理人
    {
      id: 9.1,
      title: '小林从医学生到 AI 编程转型之路',
      category: '主理人',
      level: 1,
      author: '小林',
      description: '分享小林从医学生到 AI 编程转型之路',
      link: 'https://drwnsc5veu.feishu.cn/wiki/LquZwO1BNivYzVkZiTycVu6KnNf'
    },
    {
      id: 9.2,
      title: '问答篇',
      category: '主理人',
      level: 1,
      author: '小林',
      description: '近期遇到的共性问题',
      link: 'https://drwnsc5veu.feishu.cn/wiki/Hp9HwdqB1ifTbJkrhQ2coZZ2nrh'
    }
];

export {
    cases
}