<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import avatarMap from '@/avatarMap'

interface Contributor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  link?: string;
}

// 响应式状态
const showContent = ref(false)
const thanksCardsVisible = ref(false)
const promotersVisible = ref(false)
const caseProvidersVisible = ref(false)
const skillExpandersVisible = ref(false)

// 页面加载动画
onMounted(async () => {
  await nextTick()
  showContent.value = true
  
  // 分组显示动画
  setTimeout(() => thanksCardsVisible.value = true, 200)
  setTimeout(() => promotersVisible.value = true, 600)
  setTimeout(() => caseProvidersVisible.value = true, 1000)
  setTimeout(() => skillExpandersVisible.value = true, 1400)
})

// 处理卡片点击
const handleCardClick = (contributor: Contributor) => {
  if (contributor.link) {
    window.open(contributor.link, '_blank')
  }
}

// 第一组
const promoters: Contributor[] = [
  {
    id: 1,
    name: '曹大',
    title: 'caoz 小密圈',
    avatar: avatarMap[1],
    link: 'https://t.zsxq.com/ws5YF'
  },
  {
    id: 2,
    name: '小七姐',
    title: '亦师亦友小七姐',
    avatar: avatarMap[2],
    link: 'https://vxc3hj17dym.feishu.cn/wiki/RxnSw84QIiC63KkBrofc2altnuf'
  },
  {
    id: 3,
    name: '李继刚',
    title: '织梦师星球',
    avatar: avatarMap[3],
    link: 'https://t.zsxq.com/T5wce'
  },
  {
    id: 4,
    name: '云中江树',
    title: 'LangGPT 主理人',
    avatar: avatarMap[4],
    link: 'https://langgptai.feishu.cn/wiki/RXdbwRyASiShtDky381ciwFEnpe'
  },
  {
    id: 5,
    name: '公众号苍何',
    title: '新榜 AI 榜第 6',
    avatar: avatarMap[5],
    link: 'https://mp.weixin.qq.com/s/rbH7PXnCp8jlvyyPRbeCtw'
  },
  {
    id: 6,
    name: '唯庸',
    title: '🔮 Agent 101 智能体指北',
    avatar: avatarMap[6],
    link: 'https://agent101.org/'
  },
  {
    id: 7,
    name: '程序员鱼皮',
    title: '编程导航',
    avatar: avatarMap[7],
    link: 'https://www.codefather.cn/'
  },
  {
    id: 8,
    name: '一支烟花社区',
    title: '-玩转AI',
    avatar: avatarMap[8],
    link: 'https://mp.weixin.qq.com/s/search?query=一支烟花社'
  }
];

// 第二组
const caseProviders: Contributor[] = [
  {
    id: 9,
    name: '潘达AI创业说',
    title: '',
    avatar: avatarMap[9],
    link: 'https://mp.weixin.qq.com/s/search?query=潘达AI创业说'
  },
  {
    id: 10,
    name: '予贝AI编程',
    title: '',
    avatar: avatarMap[10],
    link: 'https://mp.weixin.qq.com/s/search?query=予贝AI编程'
  },
  {
    id: 11,
    name: '易安说AI',
    title: '',
    avatar: avatarMap[11],
    link: 'https://mp.weixin.qq.com/s/search?query=易安说AI'
  },
  {
    id: 12,
    name: '亦辰AI编程',
    title: '',
    avatar: avatarMap[12]   ,
    link: 'https://mp.weixin.qq.com/s/search?query=亦辰AI编程'
  },
  {
    id: 13,
    name: '伍六七AI编程',
    title: '',
    avatar: avatarMap[13],
    link: 'https://mp.weixin.qq.com/s/search?query=伍六七AI编程'
  },
  {
    id: 14,
    name: '狂热AI',
    title: '',
    avatar: avatarMap[14],
    link: 'https://mp.weixin.qq.com/s/search?query=狂热AI'
  },
  {
    id: 15,
    name: '湾湾AI视频',
    title: '',
    avatar: avatarMap[15],
    link: 'https://mp.weixin.qq.com/s/search?query=湾湾AI视频'
  },
  {
    id: 16,
    name: '泛函',
    title: '',
    avatar: avatarMap[16],
    link: 'https://mp.weixin.qq.com/s/search?query=泛函'
  }
];

// 第三组
const skillExpanders: Contributor[] = [
  {
    id: 17,
    name: '小光',
    title: '',
    avatar: avatarMap[17]
  },
  {
    id: 18,
    name: '大铭🥕',
    title: '',
    avatar: avatarMap[18]
  },
  {
    id: 19,
    name: '薇冷 Violet',
    title: '',
    avatar: avatarMap[19]
  },
  {
    id: 20,
    name: '动次动次',
    title: '',
    avatar: avatarMap[20]
  },
  {
    id: 21,
    name: '老虎',
    title: '',
    avatar: avatarMap[21]
  },
  {
    id: 22,
    name: '成峰',
    title: '',
    avatar: avatarMap[22]
  },
  {
    id: 23,
    name: '大鹏',
    title: '',
    avatar: avatarMap[23] 
  },
  {
    id: 24,
    name: '南卷',
    title: '',
    avatar: avatarMap[24]
  },
  {
    id: 25,
    name: '李想',
    title: '',
    avatar: avatarMap[25]
  },
  {
    id: 26,
    name: '熊猫Jay',
    title: '',
    avatar: avatarMap[26]
  },
  {
    id: 27,
    name: 'tab_engineer',
    title: '',
    avatar: avatarMap[27]
  },
  {
    id: 28,
    name: 'cloudrobot',
    title: '',
    avatar: avatarMap[28]
  },
  {
    id: 29,
    name: '王登康',
    title: '',
    avatar: avatarMap[29]
  }
];
</script>

<template>
  <main>
    <!-- 主要内容 -->
    <section class="contributors" :class="{ 'content-visible': showContent }">
      <div class="container">
        <div class="page-header" :class="{ 'header-visible': showContent }">
          <h1 class="section-title">
            <span class="title-char" style="animation-delay: 0.1s">贵</span>
            <span class="title-char" style="animation-delay: 0.2s">人</span>
          </h1>
          <p class="section-subtitle">感谢所有支持和帮助元 Coding 发展的朋友们</p>
          <div class="title-underline"></div>
        </div>

        <!-- 第一组 -->
        <div class="contributor-section" :class="{ 'section-visible': thanksCardsVisible }">
          <!-- 感谢卡片区域 -->
          <div class="thanks-cards-grid" :class="{ 'cards-visible': thanksCardsVisible }">
            <div class="thanks-card" :style="{ 'animation-delay': '0.1s' }">
              <div class="card-number">01</div>
              <h3 class="thanks-title">曹大</h3>
              <p class="thanks-content">「公众号:caoz 的梦呓」强力助推，给手册带来 5000+ 用户</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.2s' }">
              <div class="card-number">02</div>
              <h3 class="thanks-title">小七姐</h3>
              <p class="thanks-content">万人提示词社群的推荐，这个手册的临门一脚</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.3s' }">
              <div class="card-number">03</div>
              <h3 class="thanks-title">李继刚老师</h3>
              <p class="thanks-content">织梦师群聊的推荐，直接带来了 N 篇案例</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.4s' }">
              <div class="card-number">04</div>
              <h3 class="thanks-title">苍何</h3>
              <p class="thanks-content">私底下给我手册优化建议</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.5s' }">
              <div class="card-number">05</div>
              <h3 class="thanks-title">云中江树</h3>
              <p class="thanks-content">提示词的帮助，后续江树负责提示词板块</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.6s' }">
              <div class="card-number">06</div>
              <h3 class="thanks-title">唯庸</h3>
              <p class="thanks-content">我的好搭档，手册以案例形式展现是唯庸出的主意</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.7s' }">
              <div class="card-number">07</div>
              <h3 class="thanks-title">程序员鱼皮</h3>
              <p class="thanks-content">增加了手册的内容深度</p>
              <div class="card-shine"></div>
            </div>
            
            <div class="thanks-card" :style="{ 'animation-delay': '0.8s' }">
              <div class="card-number">08</div>
              <h3 class="thanks-title">一支烟花社区</h3>
              <p class="thanks-content">Brad 强、木大宝、samu、不辣的皮皮、小伟等对该手册提出的宝贵建议</p>
              <div class="card-shine"></div>
            </div>
          </div>
          <div class="contributor-grid" :class="{ 'grid-visible': promotersVisible }">
            <div 
              v-for="(contributor, index) in promoters" 
              :key="contributor.id" 
              class="contributor-card"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              @click="handleCardClick(contributor)"
            >
              <div class="avatar">
                <img 
                  :src="contributor.avatar" 
                  :alt="contributor.name" 
                  class="avatar-img"
                >
              </div>
              <h3 class="contributor-name">{{ contributor.name }}</h3>
              <a v-if="contributor.title && contributor.link" :href="contributor.link" target="_blank"
                rel="noopener noreferrer" class="contributor-title-link" @click.stop>
                {{ contributor.title }}
              </a>
              <p v-else-if="contributor.title" class="contributor-title">{{ contributor.title }}</p>
              
              <!-- 点击提示 -->
              <div class="click-hint" v-if="contributor.link">
                <span>点击访问</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二组 -->
        <div class="contributor-section" :class="{ 'section-visible': caseProvidersVisible }">
          <h2 class="section-heading staggered-text">
            <span v-for="(char, index) in '特别感谢唯庸、潘达、予贝、易安伙伴发起人对手册的流量推荐，排名不分先后，下述名字是公众号～'" 
                  :key="index" 
                  :style="{ 'animation-delay': `${index * 0.02}s` }">
              {{ char }}
            </span>
          </h2>
          <div class="contributor-grid" :class="{ 'grid-visible': caseProvidersVisible }">
            <div 
              v-for="(contributor, index) in caseProviders" 
              :key="contributor.id" 
              class="contributor-card"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              @click="handleCardClick(contributor)"
            >
              <div class="avatar">
                <img 
                  :src="contributor.avatar" 
                  :alt="contributor.name" 
                  class="avatar-img"
                >
              </div>
              <h3 class="contributor-name">{{ contributor.name }}</h3>
              <a v-if="contributor.title && contributor.link" :href="contributor.link" target="_blank"
                rel="noopener noreferrer" class="contributor-title-link" @click.stop>
                {{ contributor.title }}
              </a>
              <p v-else-if="contributor.title" class="contributor-title">{{ contributor.title }}</p>
              
              <!-- 点击提示 -->
              <div class="click-hint" v-if="contributor.link">
                <span>点击访问</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 第三组 -->
        <div class="contributor-section" :class="{ 'section-visible': skillExpandersVisible }">
          <h2 class="section-heading staggered-text">
            <span v-for="(char, index) in '特别感谢部分案例提供者，拓宽了元 Coding 的能力边界～'" 
                  :key="index" 
                  :style="{ 'animation-delay': `${index * 0.02}s` }">
              {{ char }}
            </span>
          </h2>
          <div class="contributor-grid" :class="{ 'grid-visible': skillExpandersVisible }">
            <div 
              v-for="(contributor, index) in skillExpanders" 
              :key="contributor.id" 
              class="contributor-card"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              @click="handleCardClick(contributor)"
            >
              <div class="avatar">
                <img 
                  :src="contributor.avatar" 
                  :alt="contributor.name" 
                  class="avatar-img"
                >
              </div>
              <h3 class="contributor-name">{{ contributor.name }}</h3>
              <a v-if="contributor.title && contributor.link" :href="contributor.link" target="_blank"
                rel="noopener noreferrer" class="contributor-title-link" @click.stop>
                {{ contributor.title }}
              </a>
              <p v-else-if="contributor.title" class="contributor-title">{{ contributor.title }}</p>
              
              <!-- 点击提示 -->
              <div class="click-hint" v-if="contributor.link">
                <span>点击访问</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>


/* ========== 页面切换动画 ========== */
.contributors {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contributors.content-visible {
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
  animation: underlineExpand 1s ease-out 0.5s forwards;
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 100px; }
}

/* ========== 分组动画 ========== */
.contributor-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contributor-section.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.thanks-cards-grid {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.thanks-cards-grid.cards-visible {
  opacity: 1;
  transform: scale(1);
}

.contributor-grid {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contributor-grid.grid-visible {
  opacity: 1;
  transform: translateY(0);
}

.contributor-grid.grid-visible .contributor-card {
  animation: cardSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes cardSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== 文字动画 ========== */
.staggered-text.section-visible span {
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
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contributors {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
  min-height: 100vh;
}

.contributor-section {
  margin-bottom: 4rem;
}

.section-heading {
  font-size: 1.2rem;
  color: #374151;
  margin-bottom: 2rem;
  /* text-align: center; */
  line-height: 1.6;
}

.contributor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.contributor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.8rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 200px;
  width: 100%;
  max-width: 180px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.contributor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contributor-card:hover::before {
  opacity: 1;
}

.contributor-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.2);
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.2rem;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.avatar::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981, #f59e0b);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.contributor-card:hover .avatar::before {
  opacity: 1;
}

.contributor-card:hover .avatar {
  transform: scale(1.08);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.3);
  border-color: rgba(255, 255, 255, 1);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1) saturate(1.1);
}

.contributor-card:hover .avatar-img {
  transform: scale(1.02);
  filter: brightness(1.05) saturate(1.2) contrast(1.05);
}

/* ========== 点击提示 ========== */
.click-hint {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.click-hint::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #3b82f6;
}

.contributor-card:hover .click-hint {
  opacity: 1;
  bottom: -50px;
}

.contributor-card:active {
  transform: scale(0.98);
}

.contributor-card:active .avatar {
  transform: scale(0.95);
}

.contributor-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.contributor-title {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.3;
  margin: 0;
}

.contributor-title-link {
  font-size: 0.85rem;
  color: #3b82f6;
  line-height: 1.3;
  margin: 0;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
}

.contributor-title-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* 感谢卡片样式 */
.thanks-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.thanks-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform-origin: center;
}

.thanks-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4, #10b981);
  opacity: 0.8;
}

.thanks-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.thanks-card:hover::after {
  left: 100%;
}

.thanks-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.2);
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #f8fafc 100%);
}
.thanks-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.thanks-card:hover .thanks-title {
  color: #3b82f6;
}

.thanks-content {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
  transition: color 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
}

.thanks-card:hover .thanks-content {
  color: #475569;
}

/* ========== 感谢卡片微交互 ========== */
.card-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.thanks-card:hover .card-number {
  opacity: 1;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

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

.thanks-card:hover .card-shine {
  transform: translateX(100%);
}

.thanks-cards-grid.cards-visible .thanks-card {
  animation: cardFadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes cardFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.thanks-card:active {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}
@media (max-width: 1024px) {
  .thanks-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .thanks-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .thanks-card {
    padding: 1.2rem 0.8rem;
    min-height: 130px;
  }
  
  .thanks-title {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
  
  .thanks-content {
    font-size: 0.75rem;
  }
  
}
  
  .contributor-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
  }
  
  .contributor-card {
    padding: 1.2rem;
    min-height: 180px;
    max-width: 160px;
  }
  
  .avatar {
    width: 70px;
    height: 70px;
  }
  
  .avatar-img {
    filter: brightness(1) saturate(1.1);
  }
  
  .contributor-name {
    font-size: 0.9rem;
  }
  
  .contributor-title,
  .contributor-title-link {
    font-size: 0.9rem;
  }
  
  .section-heading {
    font-size: 1.1rem;
    padding: 0 1rem;
  }


@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .thanks-cards-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 0 0.5rem;
  }
  
  .thanks-card {
    padding: 1rem 0.8rem;
    min-height: 120px;
  }
  
  .thanks-title {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }
  
  .thanks-content {
    font-size: 0.7rem;
  }
  
  .card-number {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.6rem;
    top: 0.8rem;
    left: 0.8rem;
  }
  
  .contributor-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .contributor-card {
    padding: 1rem;
    min-height: 160px;
    max-width: 140px;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
  }
  
  .avatar::before {
    animation: none;
  }
  
  .click-hint {
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
  }
  
  .section-heading {
    font-size: 1rem;
  }
  
  /* 禁用移动端的一些动画以提升性能 */
  .card-shine {
    display: none;
  }
}
</style> 