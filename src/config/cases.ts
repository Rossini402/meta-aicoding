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
      id: 1,
      title: 'AI 编程工具 Cursor',
      category: '工具',
      level: 1,
      author: '小林、大铭',
      description: '利用AI辅助编程工具Cursor提升开发效率',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-J9mGdSlFto0vbjx0SHOcjPC3nGd'
    },
    {
      id: 2,
      title: '字节 Trae',
      category: '工具',
      level: 1,
      author: '小林',
      description: '字节跳动推出的AI编程工具',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-W1jXdHW4VoHHnDxWRa8cAtIYnr7'
    },
    {
      id: 3,
      title: '阿里通义灵码',
      category: '工具',
      level: 1,
      author: '小林',
      description: '阿里通义灵码AI编程工具',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-CFZZdWZgTobClyxs7RFcVTyGnlb'
    },
    {
      id: 4,
      title: '如何利用 Git 进行版本控制',
      category: '工具',
      level: 2,
      author: '予贝',
      description: 'Git版本控制系统的使用教程',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-ROQhdFXS1o4gkpxl9EachRCrn3d'
    },
    
    // Agent
    {
      id: 5,
      title: '手搓 Agent 一键批量制作 Labubu 手机壁纸',
      category: 'Agent',
      level: 2,
      author: '苍何',
      description: '使用自定义Agent批量生成Labubu风格壁纸',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-SrYEdtSEPodszwx7VGbcizILnvf'
    },
    {
      id: 6,
      title: 'Agent 交易市场',
      category: 'Agent',
      level: 1,
      author: 'tab_engineer',
      description: '探索和使用各类专业Agent的交易平台',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-U2rkdX7sbo740axD3bXcB4eenHh'
    },
    
    // 提示词
    {
      id: 7,
      title: 'Cursor 全局提示词',
      category: '提示词',
      level: 1,
      author: '大铭',
      description: '如何在Cursor中设置和使用全局提示词',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-TBjedmcWXo6038xMyQ7chcIunPM'
    },
    
    // MCP
    {
      id: 8,
      title: '高德 MCP + Cursor 开发旅游助手',
      category: 'MCP',
      level: 1,
      author: '小林、亦辰',
      description: '结合高德MCP和Cursor开发旅游助手应用',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-AMU5dSOxJom3B1xxMl3cq3NOnrc'
    },
    {
      id: 9,
      title: '设计 MCP + Trae 开发旅游助手',
      category: 'MCP',
      level: 2,
      author: '小林',
      description: '使用设计MCP和Trae库开发旅游助手',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Y87CdS0onoDqB5x4stcc4QZ1ncc'
    },
    {
      id: 10,
      title: 'Claude+高德 MCP 搞定苏州三日游',
      category: 'MCP',
      level: 4,
      author: '易安、成峰',
      description: '使用Claude和高德MCP规划一次完美的苏州三日游行程',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Dig6dR82WokamAxJWpScHWK5n25'
    },
    {
      id: 11,
      title: 'Chatlog+MCP: 一键总结微信聊天记录',
      category: 'MCP',
      level: 2,
      author: '小林',
      description: '使用MCP快速分析和总结长篇微信聊天记录',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-OPkFdOqK7oJoK5xwhEQc0BYhnmc'
    },
    {
      id: 12,
      title: 'flomo+MCP 快速实现知识管理',
      category: 'MCP',
      level: 1,
      author: '小林',
      description: '使用flomo和MCP构建个人知识管理系统',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-IijcdqOMjoFHONxu08OcCIXjnmg'
    },
    {
      id: 13,
      title: '微信读书+MCP，一键生成精美读书卡片',
      category: 'MCP',
      level: 3,
      author: '小林、亦辰',
      description: '将微信读书笔记转换为精美的分享卡片',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-UIF5dQZQXoucpzxNAN9cZuPqn3c'
    },
    {
      id: 14,
      title: '12306+MCP，实时监控票务信息',
      category: 'MCP',
      level: 2,
      author: '小林、亦辰',
      description: '使用MCP监控12306票务信息',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Y8qVdA9R8o0CgZxv22ZcJddnneb'
    },
    {
      id: 15,
      title: '高德 MCP + MiniMax MCP，在故宫听乾隆讲秘密',
      category: 'MCP',
      level: 4,
      author: '成峰',
      description: '结合高德和MiniMax MCP创建故宫语音导览体验',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-PTiLdLt3eovDScxKjFMcLWqSnJg'
    },
    {
      id: 16,
      title: '纳米 AI 智能体 + MCP，3 分钟规划完爆款旅行',
      category: 'MCP',
      level: 3,
      author: '成峰',
      description: '使用纳米AI智能体和MCP快速规划旅行路线',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Y6o4deLQnoFnn1xdmyFc6OkJncg'
    },
    {
      id: 17,
      title: '飞常准! 飞机出行 MCP + 天气 MCP',
      category: 'MCP',
      level: 4,
      author: '亦辰',
      description: '结合飞行信息和天气MCP优化出行计划',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Ux2WdxT72oZaXTxSjfNcS2BvnOb'
    },
    {
      id: 18,
      title: '支付宝 MCP，开启 AI 支付新纪元',
      category: 'MCP',
      level: 2,
      author: '苍何',
      description: '探索支付宝MCP的AI支付功能',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-CqhMd9wjdokJk8xxcBhc4MTDnLf'
    },
    {
      id: 19,
      title: '飞书 MCP 实现文档自动化',
      category: 'MCP',
      level: 3,
      author: '易安',
      description: '使用飞书MCP实现文档处理自动化',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-WC7QdopPvoGAgRx9naycLURen7c'
    },
    {
      id: 20,
      title: 'Qwen3+抖音 MCP 打造了个 24 小时待命的抖音小秘',
      category: 'MCP',
      level: 4,
      author: '云中江树',
      description: '结合Qwen3和抖音MCP创建全天候抖音助手',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-WEwydIERuoQRNrxqYb2c55pKn1c'
    },
    {
      id: 21,
      title: 'supabase + MCP 轻松操作数据',
      category: 'MCP',
      level: 2,
      author: '李想',
      description: '使用supabase和MCP简化数据库操作',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-ZRXcdWjado2FgKxqzvpcyefHnad'
    },
    {
      id: 22,
      title: 'AI + MCP 实现 PPT 自由',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '利用AI和MCP自动生成专业PPT',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Ip9jdYNJto3u6bxGHKicb9MMnQc'
    },
    {
      id: 23,
      title: 'Cursor + 百度网盘 MCP 构建私人网盘助手',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '结合Cursor和百度网盘MCP管理网盘文件',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-ScjFdOFf4omiAxxW5gTcqZT8ndc'
    },
    {
      id: 24,
      title: '人格小队 MCP，4 种陪聊性格',
      category: 'MCP',
      level: 1,
      author: '亦辰',
      description: '使用MCP创建多种性格的AI聊天伙伴',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-DFB6d4y0qolLQDxQwkmcCErwncd'
    },
    
    // 网站
    {
      id: 25,
      title: '图片加边框网页',
      category: '网站',
      level: 1,
      author: '小林',
      description: '开发一个为图片添加边框的网页应用',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-MaB0dYdGdohhSqxssAjctTdKnWb'
    },
    {
      id: 26,
      title: '贪吃蛇网页游戏',
      category: '网站',
      level: 1,
      author: '小林',
      description: '使用HTML、CSS和JavaScript开发贪吃蛇游戏',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-TfBcdwrmmoXC5VxTnICcPCGAncc'
    },
    {
      id: 27,
      title: '坐标轴科幻风',
      category: '网站',
      level: 1,
      author: '小林',
      description: '创建具有科幻风格的坐标轴可视化网页',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-YKOpd8yiHofrYzxmmPrcJlb8nWf'
    },
    {
      id: 28,
      title: 'Chatbot 聊天网站',
      category: '网站',
      level: 5,
      author: '薇冷',
      description: '从零开始构建一个AI聊天机器人网站',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-TF5xdUlTlo3KZax0gNMcB2j1nQb'
    },
    {
      id: 29,
      title: 'AI 排版助手',
      category: '网站',
      level: 2,
      author: '唯唐',
      description: '使用AI优化网页排版和布局',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-T9Ibd5om3olFfdxxcDNcDM56nEe'
    },
    {
      id: 30,
      title: '从 0 到 1 上线海外站点',
      category: '网站',
      level: 4,
      author: '唯唐',
      description: '完整指南：如何创建并上线一个面向海外用户的网站',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Z2FydQqydoQXFOx9aWecEobGnph'
    },
    {
      id: 31,
      title: 'Gemini 开发植物大战僵尸',
      category: '网站',
      level: 1,
      author: '苍何',
      description: '使用Gemini AI开发植物大战僵尸游戏',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-FLIOdhHFJoV13fxyLNFcmJiCnfc'
    },
    {
      id: 32,
      title: '海外站 UI 优化（1000美金）',
      category: '网站',
      level: 3,
      author: '超级无敌小湾娘',
      description: '针对海外用户优化网站UI设计，价值1000美金的项目',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-ID8wd2ctRoP53lxuYDUcHWBQned'
    },
    
    // 小程序
    {
      id: 33,
      title: 'AI 开发题库类小程序',
      category: '小程序',
      level: 3,
      author: '小林、小光',
      description: '使用AI开发教育题库类小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-DNp0ds2hno35DYxsn65c0L0Bn5b'
    },
    {
      id: 34,
      title: 'AI 开发寿命预估小程序',
      category: '小程序',
      level: 2,
      author: '小林',
      description: '开发一个基于健康数据预估寿命的小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-AJjxdaWv1ozzeox4znac6gvln0g'
    },
    {
      id: 35,
      title: 'AI 开发图片压缩小程序',
      category: '小程序',
      level: 1,
      author: '小林',
      description: '开发一个高效的图片压缩小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-BfTHdw2xaoon1cx9p05cb6cCn8b'
    },
    {
      id: 36,
      title: 'AI 开发减肥记录小程序',
      category: '小程序',
      level: 3,
      author: '小林',
      description: '使用AI开发一个健康减肥记录小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-W3bzdTpTqoJIAzxCyZIcfEBKn8g'
    },
    {
      id: 37,
      title: 'AI 开发图片加水印小程序',
      category: '小程序',
      level: 1,
      author: '小林',
      description: '开发一个为图片添加水印的小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-CW7hdAfIMoVCaixrbnmcln7Dnth'
    },
    {
      id: 38,
      title: 'AI 开发饺子售卖小程序（2000 商单）',
      category: '小程序',
      level: 4,
      author: '伍六七',
      description: '开发饺子售卖小程序，价值2000元商业订单',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-MoWUd9GorohpDixusaSciWVpnxQ'
    },
    {
      id: 39,
      title: 'AI 开发查八字小程序',
      category: '小程序',
      level: 3,
      author: '苍何',
      description: '开发一个传统八字查询小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-RFhvdw5SGoh7Q5xxRKgcMXOynRc'
    },
    {
      id: 40,
      title: 'AI 开发查性格测试小程序（3000 商单）',
      category: '小程序',
      level: 4,
      author: '大鹏',
      description: '开发性格测试小程序，价值3000元商业订单',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-WKlidwzOgovUuFxPBSkcXIHTntf'
    },
    {
      id: 41,
      title: 'AI 开发一键获取公众号图片小程序',
      category: '小程序',
      level: 2,
      author: '动次动次',
      description: '开发自动获取微信公众号图片的小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Nvu5dX0NOoEOTnxpBDXc1ZpvnOh'
    },
    {
      id: 42,
      title: 'AI 开发中药查询小程序',
      category: '小程序',
      level: 3,
      author: '南卷',
      description: '开发一个中药知识查询小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-FALZdYjkLoFFYOxZA8Zc8olansd'
    },
    {
      id: 43,
      title: 'AI 开发小众旅游小程序',
      category: '小程序',
      level: 4,
      author: '狂热AI',
      description: '开发一个推荐小众旅游目的地的小程序',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-URdWdOF3oomFMZxacClcLoQgn8b'
    },
    
    // iOS
    {
      id: 44,
      title: '免费 iOS APP 陪伴日记',
      category: 'iOS',
      level: 5,
      author: '予贝',
      description: '开发一款免费的iOS陪伴日记应用',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Qnfvd05OfoUmnexL4ENcSw58nde'
    },
    {
      id: 45,
      title: '付费 iOS APP 图片处理',
      category: 'iOS',
      level: 3,
      author: '予贝',
      description: '开发一款付费的iOS图片处理应用',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-SafWdlmaQoLDxcxIuUQc62RTnCg'
    },
    {
      id: 46,
      title: '免费 iOS boring time',
      category: 'iOS',
      level: 2,
      author: 'caoz',
      description: '开发一款解决无聊时光的免费iOS应用',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-CuGSdrniEoSsU6x3kvUcE2yVn5f'
    },
    
    // 安卓
    {
      id: 47,
      title: '电子产品管理工具',
      category: '安卓',
      level: 1,
      author: '予贝',
      description: '开发安卓平台的电子产品管理工具',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-RylFdZNbao59jix5bhUcE82nnDe'
    },
    
    // 插件
    {
      id: 48,
      title: '网页思维导图生成插件',
      category: '插件',
      level: 2,
      author: '熊猫Jay',
      description: '开发一个自动生成网页思维导图的浏览器插件',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-EyQqdCSIsob7C6xH2U4cPxUUnEc'
    },
    {
      id: 49,
      title: '治愈系笑话生成器谷歌浏览器插件',
      category: '插件',
      level: 1,
      author: '李想',
      description: '开发一个生成治愈系笑话的谷歌浏览器插件',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Lv3Idl23xoKk3axxNQdchhTUnKc'
    },
    {
      id: 50,
      title: '批量生成公众号内容',
      category: '插件',
      level: 2,
      author: 'cloudrobot',
      description: '开发一个批量生成微信公众号内容的工具',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-YUqsdt16EoZjnVxWMvqcUYcTnab'
    },
    
    // 产品
    {
      id: 51,
      title: 'AI 降重产品设计思维（10 万订单）',
      category: '产品',
      level: 2,
      author: '熊猫Jay',
      description: '设计一款AI降重产品，价值10万元订单',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-AShzdHhg1oihf3xwipsclnkNnZg'
    },
    {
      id: 52,
      title: '付费 iOS 易转（榜单 24）',
      category: 'iOS',
      level: 2,
      author: '王登康',
      description: '通过用 AI编程，跑通了 iOS App 从开发到上架的完整闭环，登上了 App Store 分类付费榜 Top24。',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-LbfbdOcN4owAnvx0z7EcSwBRnSf'
    },
    // 问答
    {
      id: 53,
      title: '这部分是我近期遇到的共性问题',
      category: '问答',
      level: 1,
      author: '小林',
      description: '解答用户在AI编程中常见的问题',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-Ssn3dztK2oXcOux4S4AcUf4gnug'
    }, {
      id: 54,
      title: '微信支付 MCP，开启支付新纪元',
      category: 'MCP',
      level: 1,
      author: '苍何',
      description: '解决在智能体开发过程中的支付问题',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-PPDNdIjwWoidC7x1xlPcwL1OnOb'
    },
    {
      id: 55,
      title: '表情包生成器 APP',
      category: '安卓',
      level: 2,
      author: '鱼皮',
      description: ' 保姆级教程，用 AI 开发手机 APP',
      link: 'https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg#share-YSpZdNxKnohAkcxP9yIcpfK1nUg'
    }
];

export {
    cases
}