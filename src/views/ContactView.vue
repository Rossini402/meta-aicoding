<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

// 动画状态
const showContent = ref(false);
const showHeader = ref(false);
const showContactCards = ref(false);
const hoveredCard = ref<string | null>(null);

// 页面加载动画
onMounted(async () => {
  await nextTick();
  
  // 分步显示动画
  setTimeout(() => showContent.value = true, 100);
  setTimeout(() => showHeader.value = true, 300);
  setTimeout(() => showContactCards.value = true, 600);
});

// 卡片悬停处理
const handleCardHover = (cardId: string | null) => {
  hoveredCard.value = cardId;
};
</script>

<template>
  <main>
    <section class="contact-section" :class="{ 'content-visible': showContent }">
      <div class="container">
        <div class="page-header" :class="{ 'header-visible': showHeader }">
          <h1 class="section-title">
            <span class="title-char" style="animation-delay: 0.1s">联</span>
            <span class="title-char" style="animation-delay: 0.2s">系</span>
            <span class="title-char" style="animation-delay: 0.3s">我</span>
            <span class="title-char" style="animation-delay: 0.4s">们</span>
          </h1>
          <p class="section-subtitle">加入我们的社区，一起探讨 AI 编程的无限可能</p>
          <div class="title-underline"></div>
        </div>
        
        <div class="contact-cards" :class="{ 'cards-visible': showContactCards }">
          <div class="contact-card contact-card-1" @mouseenter="handleCardHover('wechat')" @mouseleave="handleCardHover(null)">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"></path>
                <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                <path d="M17.5 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path>
              </svg>
            </div>
            <h2>
              <span class="staggered-text">
                <span v-for="(char, index) in '官方公众号'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
              </span>
            </h2>
            <p>关注「小林AI编程」公众号，获取最新 AI 编程教程和资讯</p>
            <div class="qrcode">
              <!-- 这里需要替换为实际的公众号二维码 -->
              <div class="qrcode-inner">
                <img src="../assets/img/gzh.jpg" alt="微信公众号二维码" />
              </div>
            </div>
            <div class="card-shine"></div>
          </div>
          
          <div class="contact-card contact-card-2" @mouseenter="handleCardHover('group')" @mouseleave="handleCardHover(null)">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h2>
              <span class="staggered-text">
                <span v-for="(char, index) in '社区交流群'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
              </span>
            </h2>
            <p>扫码加入元 Coding 社区交流群，与志同道合的开发者共同学习成长</p>
            <div class="qrcode">
              <img src="../assets/img/wechat_group.png" alt="元 Coding社区交流群" />
            </div>
            <div class="card-shine"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ========== 页面入场动画 ========== */
.contact-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
}

.contact-section.content-visible {
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

/* ========== 联系卡片动画 ========== */
.contact-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-cards.cards-visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  position: relative;
  overflow: hidden;
  border-top: 4px solid transparent;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: cardSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.contact-card-1 { animation-delay: 0.2s; }
.contact-card-2 { animation-delay: 0.4s; }

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card-1::before { 
  background: linear-gradient(90deg, #3b82f6, #06b6d4); 
}
.contact-card-2::before { 
  background: linear-gradient(90deg, #10b981, #f59e0b); 
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* ========== 图标动画 ========== */
.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: transform 0.6s ease;
  transform: translateX(-100%);
}

.contact-card:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.contact-card:hover .contact-icon::before {
  transform: translateX(100%);
}

.contact-icon svg {
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.contact-card:hover .contact-icon svg {
  transform: scale(1.1);
}

/* ========== 标题文字动画 ========== */
.contact-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e293b;
  font-weight: 600;
}

.staggered-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

.contact-card p {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.contact-card:hover p {
  color: #1e293b;
}

/* ========== 二维码样式 ========== */
.qrcode {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.qrcode-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qrcode img {
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
}

.contact-card:hover .qrcode {
  background-color: #e2e8f0;
  transform: scale(1.05);
}

.contact-card:hover .qrcode img {
  transform: scale(1.02);
}

/* ========== 光泽扫过效果 ========== */
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

.contact-card:hover .card-shine {
  transform: translateX(100%);
}

/* ========== 基础样式 ========== */
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ========== 响应式设计 ========== */
@media (max-width: 768px) {
  .contact-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-card {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem;
  }
  
  .contact-icon {
    width: 70px;
    height: 70px;
  }
  
  .qrcode {
    width: 180px;
    height: 180px;
  }
  
  .title-char {
    animation-duration: 0.6s;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .contact-section {
    padding: 2rem 0;
  }
  
  .contact-card {
    padding: 1rem;
    width: 100%;
    max-width: 300px;
  }
  
  .contact-icon {
    width: 60px;
    height: 60px;
  }
  
  .contact-card h2 {
    font-size: 1.3rem;
  }
  
  .qrcode {
    width: 160px;
    height: 160px;
  }
  
  /* 移动端禁用一些动画以提升性能 */
  .card-shine,
  .contact-icon::before {
    display: none;
  }
  
  .contact-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .contact-icon:hover {
    transform: scale(1.05);
  }
}
</style> 