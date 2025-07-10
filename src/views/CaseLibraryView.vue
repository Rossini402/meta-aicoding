<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';

interface Case {
  id: number;
  title: string;
  category: string;
  level: number;
  author: string;
  description: string;
  link: string;
}

const activeFilter = ref('all');

// 动画状态
const showContent = ref(false);
const showHeader = ref(false);
const showFilters = ref(false);
const showBeginnerSection = ref(false);
const showAdvancedSection = ref(false);
const hoveredCard = ref<number | null>(null);

// 页面加载动画
onMounted(async () => {
  await nextTick();
  
  // 分步显示动画
  setTimeout(() => showContent.value = true, 100);
  setTimeout(() => showHeader.value = true, 300);
  setTimeout(() => showFilters.value = true, 600);
  setTimeout(() => showBeginnerSection.value = true, 900);
  setTimeout(() => showAdvancedSection.value = true, 1200);
});

// 卡片悬停处理
const handleCardHover = (cardId: number | null) => {
  hoveredCard.value = cardId;
};

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
  }
];

const filters = [
  { id: 'all', name: '全部案例' },
  { id: '工具', name: '工具应用' },
  { id: 'Agent', name: 'Agent 应用' },
  { id: '提示词', name: '提示词' },
  { id: 'MCP', name: 'MCP 应用' },
  { id: '网站', name: '网站开发' },
  { id: '小程序', name: '小程序开发' },
  { id: 'iOS', name: 'iOS 开发' },
  { id: '安卓', name: '安卓开发' },
  { id: '插件', name: '插件开发' },
  { id: '产品', name: '产品设计' },
  { id: '问答', name: '问答' }
];

const filteredCases = computed(() => {
  let result = [];
  if (activeFilter.value === 'all') {
    result = [...cases];
  } else {
    result = cases.filter(c => c.category === activeFilter.value);
  }
  
  // 按照 level 等级从小到大排序
  return result.sort((a, b) => a.level - b.level);
});

// 区分入门级别和进阶级别的案例
const categorizedCases = computed(() => {
  const filtered = filteredCases.value;
  return {
    beginner: filtered.filter(c => c.level === 1),
    advanced: filtered.filter(c => c.level > 1)
  };
});

const levelToStars = (level: number): string => {
  return '★'.repeat(level);
};
</script>

<template>
  <main>
    <section class="case-library" :class="{ 'content-visible': showContent }">
      <div class="container">
        <div class="page-header" :class="{ 'header-visible': showHeader }">
          <h1 class="section-title">
            <span class="title-char" style="animation-delay: 0.1s">案</span>
            <span class="title-char" style="animation-delay: 0.2s">例</span>
            <span class="title-char" style="animation-delay: 0.3s">库</span>
          </h1>
          <p class="section-subtitle">从入门到进阶的 AI 编程实战案例（持续更新中...）</p>
          <div class="title-underline"></div>
        </div>
      </div>
      
      <div class="filters-container" :class="{ 'filters-visible': showFilters }">
        <div class="container">
          <div class="filters">
            <button 
              v-for="(filter, index) in filters" 
              :key="filter.id"
              :class="['filter-btn', { active: activeFilter === filter.id }]"
              :style="{ 'animation-delay': `${index * 0.05}s` }"
              @click="activeFilter = filter.id"
              @mouseenter="($event.target as HTMLElement)?.classList.add('filter-hover')"
              @mouseleave="($event.target as HTMLElement)?.classList.remove('filter-hover')"
            >
              <span>{{ filter.name }}</span>
              <div class="filter-ripple"></div>
            </button>
          </div>
        </div>
      </div>

      <div class="container content-container">
        <!-- 入门级别案例 -->
        <div class="section-wrapper" :class="{ 'section-visible': showBeginnerSection }" v-if="categorizedCases.beginner.length > 0">
          <h2 class="category-title">
            <span class="category-icon">🌱</span>
            <span class="staggered-text">
              <span v-for="(char, index) in '入门级案例'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
            </span>
            <div class="category-count">{{ categorizedCases.beginner.length }}个</div>
          </h2>
          <div class="case-grid" :class="{ 'grid-visible': showBeginnerSection }">
            <a 
              v-for="(caseItem, index) in categorizedCases.beginner" 
              :key="caseItem.id"
              :href="caseItem.link"
              target="_blank"
              rel="noopener noreferrer"
              class="case-card"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              @mouseenter="handleCardHover(caseItem.id)"
              @mouseleave="handleCardHover(null)"
            >
              <div class="case-level">
                <span class="level-stars">{{ levelToStars(caseItem.level) }}</span>
                <span class="level-text">入门</span>
              </div>
              <div class="case-content">
                <h3 class="case-title">{{ caseItem.title }}</h3>
                <p class="case-meta">
                  <span class="meta-category">{{ caseItem.category }}</span>
                  <span class="meta-divider">|</span>
                  <span class="meta-author">{{ caseItem.author }}</span>
                </p>
                <p class="case-description">{{ caseItem.description }}</p>
              </div>
              <div class="case-link">
                <span>查看详情</span>
                <div class="link-arrow">→</div>
              </div>
              <div class="card-shine"></div>
            </a>
          </div>
        </div>

        <!-- 进阶级别案例 -->
        <div class="section-wrapper" :class="{ 'section-visible': showAdvancedSection }" v-if="categorizedCases.advanced.length > 0">
          <h2 class="category-title">
            <span class="category-icon">🚀</span>
            <span class="staggered-text">
              <span v-for="(char, index) in '进阶案例'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
            </span>
            <div class="category-count">{{ categorizedCases.advanced.length }}个</div>
          </h2>
          <div class="case-grid" :class="{ 'grid-visible': showAdvancedSection }">
            <a 
              v-for="(caseItem, index) in categorizedCases.advanced" 
              :key="caseItem.id"
              :href="caseItem.link"
              target="_blank"
              rel="noopener noreferrer"
              class="case-card advanced-card"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              @mouseenter="handleCardHover(caseItem.id)"
              @mouseleave="handleCardHover(null)"
            >
              <div class="case-level">
                <span class="level-stars">{{ levelToStars(caseItem.level) }}</span>
                <span class="level-text">进阶</span>
              </div>
              <div class="case-content">
                <h3 class="case-title">{{ caseItem.title }}</h3>
                <p class="case-meta">
                  <span class="meta-category">{{ caseItem.category }}</span>
                  <span class="meta-divider">|</span>
                  <span class="meta-author">{{ caseItem.author }}</span>
                </p>
                <p class="case-description">{{ caseItem.description }}</p>
              </div>
              <div class="case-link">
                <span>查看详情</span>
                <div class="link-arrow">→</div>
              </div>
              <div class="card-shine"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ========== 页面入场动画 ========== */
.case-library {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-library.content-visible {
  opacity: 1;
  transform: translateY(0);
}

.page-header {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-header.header-visible {
  opacity: 1;
  transform: translateY(0);
}

.title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(-30px) rotateX(90deg);
  animation: titleReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes titleReveal {
  0% {
    opacity: 0;
    transform: translateY(-30px) rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.title-underline {
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4, #10b981);
  margin: 1rem auto;
  border-radius: 2px;
  animation: underlineExpand 1s ease-out 0.8s forwards;
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 100px; }
}

/* ========== 筛选器动画 ========== */
.filters-container {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.filters-container.filters-visible {
  opacity: 1;
  transform: translateY(0);
}

.filters-container.filters-visible .filter-btn {
  animation: filterSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes filterSlideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== 区域动画 ========== */
.section-wrapper {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-wrapper.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.case-grid {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-grid.grid-visible {
  opacity: 1;
  transform: translateY(0);
}

.case-grid.grid-visible .case-card {
  animation: cardSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes cardSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ========== 文字动画 ========== */
.staggered-text.section-visible span {
  animation: textReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

.section-wrapper.section-visible .staggered-text span {
  animation: textReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes textReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
  text-align: center;
}

.section-subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.case-library {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.filters-container {
  background-color: #ffffff;
  padding: 1.2rem 0;
  position: sticky;
  top: 80px; /* 增加与顶部的距离 */
  z-index: 90; /* 确保它在顶部导航之下 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.content-container {
  padding-top: 1rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.filter-btn {
  background: none;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.filter-btn span {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.filter-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  pointer-events: none;
}

.filter-btn:hover .filter-ripple {
  width: 200px;
  height: 200px;
}

.filter-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.filter-btn:hover span {
  transform: scale(1.05);
}

.filter-btn.active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.filter-btn:active {
  transform: translateY(0);
  transition: transform 0.1s ease;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.case-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-top: 4px solid transparent;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-origin: center;
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4ade80, #06b6d4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-card.advanced-card::before {
  background: linear-gradient(90deg, #f59e0b, #ef4444);
}

.case-card:hover::before {
  opacity: 1;
}

.case-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.case-card:active {
  transform: translateY(-2px) scale(0.98);
  transition: transform 0.1s ease;
}

/* ========== 案例卡片内容样式 ========== */
.case-level {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.case-card:hover .case-level {
  background: linear-gradient(135deg, #e0f2fe, #bfdbfe);
  transform: scale(1.02);
}

.level-stars {
  font-weight: bold;
  color: #fbbf24;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.case-card:hover .level-stars {
  transform: scale(1.1);
}

.level-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.case-card:hover .level-text {
  background: rgba(255, 255, 255, 1);
  color: #3b82f6;
}

.case-content {
  flex: 1;
  margin-bottom: 1.5rem;
}

.case-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.case-card:hover .case-title {
  color: #3b82f6;
}

.case-meta {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-category {
  color: #3b82f6;
  font-weight: 500;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.case-card:hover .meta-category {
  background: rgba(59, 130, 246, 0.2);
  transform: scale(1.05);
}

.meta-divider {
  color: #e2e8f0;
  font-weight: bold;
}

.meta-author {
  color: #64748b;
  font-weight: 500;
  transition: color 0.3s ease;
}

.case-card:hover .meta-author {
  color: #374151;
}

.case-description {
  color: #64748b;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.case-card:hover .case-description {
  color: #475569;
}

.case-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3b82f6;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 0.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: -0.5rem -0.5rem -0.5rem -0.5rem;
  margin-top: auto;
}

.case-card:hover .case-link {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.link-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-card:hover .link-arrow {
  transform: translateX(5px);
}

/* ========== 卡片光泽效果 ========== */
.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: transform 0.6s ease;
  transform: translateX(-100%);
}

.case-card:hover .card-shine {
  transform: translateX(100%);
}

.category-title {
  font-size: 1.8rem;
  color: #1e293b;
  margin: 3rem 0 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: 1rem;
  border-left: 4px solid #3b82f6;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-title:hover::before {
  opacity: 1;
}

.category-title:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
}

.category-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.category-title:hover .category-icon {
  transform: scale(1.1) rotate(5deg);
}

.staggered-text {
  flex: 1;
  font-weight: 600;
}

.category-count {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.category-title:hover .category-count {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .case-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .filters-container {
    top: 60px;
  }
  
  .filters {
    gap: 0.6rem;
  }
  
  .filter-btn {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .category-title {
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem;
    padding: 0.8rem 1rem;
    gap: 0.8rem;
  }
  
  .category-icon {
    font-size: 1.2rem;
  }
  
  .case-card {
    padding: 1.5rem;
  }
  
  .case-title {
    font-size: 1.1rem;
  }
  
  .case-level {
    padding: 0.4rem 0.8rem;
  }
  
  .level-stars {
    font-size: 1rem;
  }
  
  .case-link {
    padding: 0.6rem 1rem;
    margin: -0.3rem -0.3rem -0.3rem -0.3rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .filters-container {
    padding: 0.75rem 0;
  }
  
  .filters {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
  
  .category-title {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
    padding: 0.6rem 0.8rem;
    gap: 0.6rem;
  }
  
  .category-icon {
    font-size: 1rem;
  }
  
  .category-count {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
  
  .case-card {
    padding: 1.2rem;
  }
  
  .case-title {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
  
  .case-level {
    padding: 0.3rem 0.6rem;
    margin-bottom: 1rem;
  }
  
  .level-stars {
    font-size: 0.9rem;
  }
  
  .level-text {
    font-size: 0.65rem;
    padding: 0.15rem 0.4rem;
  }
  
  .case-meta {
    margin-bottom: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
  
  .case-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .case-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .link-arrow {
    font-size: 1rem;
  }
  
  /* 移动端禁用一些动画以提升性能 */
  .card-shine {
    display: none;
  }
  
  .filter-ripple {
    display: none;
  }
  
  .case-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
}
</style> 