<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { cases } from '@/config/cases';


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

const filters = [
  { id: 'all', name: '全部案例' },
  { id: '工具', name: '工具' },
  { id: '小程序', name: '小程序' },
  { id: 'iOS', name: 'iOS' },
  { id: '安卓', name: '安卓' },
  { id: '网站', name: '网站' },
  { id: '插件', name: '插件' },
  { id: '提示词', name: '提示词' },
  { id: 'MCP', name: 'MCP' },
  { id: 'Agent', name: 'Agent' },
  { id: '主理人', name: '主理人' },
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
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
  .case-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
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
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
  }
  
  .meta-category {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
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