<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

// 动画状态
const showContent = ref(false);
const showHeader = ref(false);
const showAuthorProfile = ref(false);
const hoveredCard = ref<string | null>(null);

// 页面加载动画
onMounted(async () => {
  await nextTick();
  
  // 分步显示动画
  setTimeout(() => showContent.value = true, 100);
  setTimeout(() => showHeader.value = true, 300);
  setTimeout(() => showAuthorProfile.value = true, 600);
});

// 卡片悬停处理
const handleCardHover = (cardId: string | null) => {
  hoveredCard.value = cardId;
};
</script>

<template>
  <main>
    <section class="author-story" :class="{ 'content-visible': showContent }">
      <div class="container">
        <div class="page-header" :class="{ 'header-visible': showHeader }">
          <h1 class="section-title">
            <span class="title-char" style="animation-delay: 0.1s">主</span>
            <span class="title-char" style="animation-delay: 0.2s">理</span>
            <span class="title-char" style="animation-delay: 0.3s">人</span>
            <span class="title-char" style="animation-delay: 0.4s">故</span>
            <span class="title-char" style="animation-delay: 0.5s">事</span>
          </h1>
          <p class="section-subtitle">从 医学生 到 AI 编程转型之路</p>
          <div class="title-underline"></div>
        </div>
        
        <div class="author-profile" :class="{ 'profile-visible': showAuthorProfile }" @mouseenter="handleCardHover('profile')" @mouseleave="handleCardHover(null)">
          <div class="author-avatar">
            <div class="avatar-glow"></div>
            <img src="../assets/img/avatar.jpg" alt="小林头像" class="avatar-img">
            <div class="avatar-pulse"></div>
          </div>
          <div class="author-info">
            <h2>
              <span class="staggered-text">
                <span v-for="(char, index) in '小林'" :key="index" :style="{ 'animation-delay': `${index * 0.1}s` }">{{ char }}</span>
              </span>
            </h2>
            <p class="author-title">公众号：小林AI编程</p>
            <p class="author-description">
              大家好，我是小林，一个爬过珠穆朗玛峰的医学生，做这个手册初衷是让更多人意识到新时代已到来，早人一步就是红利。
            </p>
          </div>
          <div class="card-shine"></div>
        </div>

        <div class="story-content">
          <div class="story-section">
            <h3>转型历程</h3>
            <h4>从医学生到编程创作者</h4><br>
            <p>
              转型之路始于 2016 年，当时刚上大学就注册了一个公众号，最初只是随便发一些自己觉得有用的文章。转折点出现在 2018年9月28日，那天做了一个重大决定：不再专注医学领域，而是开始记录编程学习内容。
              </p>
              <p>
              第一篇编程文章只有 1000字，但花了整整5个小时才完成。从那以后，坚持日更，第二篇文章写作时间缩短到2个小时，逐渐形成了稳定的创作习惯。当时没有 AI 辅助工具，全靠手动编写内容。
              </p>
              <p>
              我对外输出内容已经坚持了七年，能取得一些成果的核心是韧性和运气。2018 年还处于自媒体的蓝海期，市场上创作者较少，坚持一年后就成为了领域内的头部账号。
              </p>
              <p>
              值得注意的是，转型并非一帆风顺。在大学期间，在饭店打工、当服务员，甚至去过电子厂拧螺丝。这些经历让我认识到纯体力劳动难以带来复利效应，必须寻找更具杠杆效应的工作方式。
              </p>
          </div>

          <div class="story-section">
            <h4>认知突破与价值观重塑</h4><br>
            <p>
              在 25 岁生日前，经历了一次重要的认知突破。当时已经通过写作积累了一定收入，开始思考金钱的意义和价值。
            </p>
            <p>
              做了两个决定：一是走遍中国，去看没见过的风景；二是回馈社会，给母校捐了 4000 块钱。这笔钱不算多，但对当时的我来说却很有意义。
            </p>
            <p>
              在旅行过程中，去了西藏、云南等地，爬了珠峰，在大兴安岭无人区自驾，这些经历极大地拓展了视野。而且我有个习惯，每到一个地方都会写篇游记，记录自己的所见所感和成长。
            </p>
            <p>
              通过这短短一年的旅行，阅历和履历有了大量增加。当你亲眼见到课本上描述的景色和动物，那种拥抱大自然的快乐是无比珍贵的。
            </p>
            <p>
              "我见青山多妩媚，料青山见我应如是"。
            </p>
            <p>
              这段经历彻底改变了我对金钱和生活的认知：赚钱的目的是为了花钱，为了体验生活，为了回馈社会。
            </p>
            <p>
              三观也经历了重建，顿悟确实存在。
            </p>
            <p>
              以前读过很多古书，比如《道德经》全文能背，但一直觉得老子说的顿悟、王阳明格竹子能把自己顿悟了这些有点夸张。但那一刻自己真的想明白了，他们不是在吹牛，而是自己当年太浅薄了。
            </p>
          </div>
          <div class="story-section">
            <h4>AI时代的新机遇</h4><br>
            <p>
              今年春节，发现大家都在讨论 AI编程，于是用 Cursor 尝试开发了一个小程序。很震惊，只花了一天时间就部署上线了，至今已有 42,100 用户。
            </p>
            <p>
              "如果今年不拥抱 AI 变革，可能就会被时代抛弃"。
            </p>
            <p>
              于是毅然决然地投入 AI编程领域，截至到今天，已经开发了五个小程序，累计用户达6万，广告收入约两万元。更令人震惊的是，开发效率呈指数级提升:
            </p>
            <p>
              <p>第一个小程序用了一天，第二个用了一小时，第三个仅用了几分钟。</p>
              <p>这是因为已经掌握了 AI编程的全流程，建立了自己的方法论。</p>
              <p>2023 年我只能做 AI 写作，因为当时的 AI 对编程的理解还有门槛。但现在 AI 已经大爆发了，如果到今天这个时代，还停留在最初级的文字处理上，就有点跟不上时代的前沿了，</p>
            </p>
          </div>

          <div class="story-section">
            <h3>创建手册的初衷</h3>
            <p>
              看到越来越多的人对 AI 编程感兴趣，但又不知从何入手，我决定将自己的学习经验和实战案例整理成这本手册。
            </p>
            <p>
              我希望通过这本手册，让更多像我一样的"非专业人士"看到：在 AI 时代，编程不再是少数人的专利。只要你有好的想法，有解决问题的决心，AI 可以成为你强大的助手，帮助你将想法变为现实。
            </p>
          </div>

          <div class="story-section">
            <h3>对未来的展望</h3>
            <p>
              我相信 AI 编程将彻底改变软件开发的格局。未来，我们会看到更多来自各行各业的创新者，他们不一定有传统的编程背景，但能够借助 AI 的力量构建令人惊叹的产品和解决方案。
            </p>
            <p>
              我将继续更新和完善这本手册，分享更多实用的案例和技巧，帮助大家在这个激动人心的新时代抓住机遇，创造属于自己的价值。
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ========== 页面入场动画 ========== */
.author-story {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
}

.author-story.content-visible {
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
  100% { width: 120px; }
}

/* ========== 头像卡片动画 ========== */
.author-profile {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-top: 4px solid transparent;
}

.author-profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.author-profile:hover::before {
  opacity: 1;
}

.author-profile.profile-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.author-profile:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* ========== 头像动画系统 ========== */
.author-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: visible;
  margin-right: 2rem;
  flex-shrink: 0;
  position: relative;
  transition: transform 0.3s ease;
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #3b82f6, #06b6d4, #10b981, #f59e0b, #ef4444, #8b5cf6, #3b82f6);
  animation: avatarRotate 8s linear infinite;
  opacity: 0.6;
  z-index: 1;
}

.avatar-pulse {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%);
  animation: avatarPulse 3s ease-in-out infinite;
  z-index: 0;
}

@keyframes avatarRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes avatarPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.5;
  }
  50% { 
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  border: 3px solid #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.author-profile:hover .author-avatar {
  transform: scale(1.1) rotate(5deg);
}

.author-profile:hover .avatar-img {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

/* ========== 作者信息动画 ========== */
.author-info {
  flex-grow: 1;
}

.author-info h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.author-title {
  color: #64748b;
  margin-bottom: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.author-profile:hover .author-title {
  color: #3b82f6;
}

.author-description {
  font-size: 1.2rem;
  text-align: left;
  color: #334155;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.author-profile:hover .author-description {
  color: #1e293b;
}

/* ========== 故事章节样式 ========== */
.story-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-section {
  margin-bottom: 3rem;
}

.story-section h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a2e;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.story-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #334155;
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

.author-profile:hover .card-shine,
.story-section:hover .card-shine {
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
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ========== 响应式设计 ========== */
@media (max-width: 768px) {
  .author-profile {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .author-avatar {
    margin-right: 0;
    margin-bottom: 1.5rem;
    width: 100px;
    height: 100px;
  }
  
  .story-section h3,
  .story-section h4 {
    font-size: 1.5rem;
  }
  
  .story-section {
    padding: 1.5rem;
  }
  
  .achievement-stats {
    grid-template-columns: 1fr;
  }
  
  .title-char {
    animation-duration: 0.6s;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .author-story {
    padding: 2rem 0;
  }
  
  .author-profile {
    padding: 1rem;
  }
  
  .story-section {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .story-section h3,
  .story-section h4 {
    font-size: 1.3rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .story-section p {
    font-size: 1rem;
  }
  
  .quote-text {
    font-size: 1rem !important;
    padding: 0.8rem 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  /* 移动端禁用一些动画以提升性能 */
  .card-shine {
    display: none;
  }
  
  .avatar-glow,
  .avatar-pulse {
    display: none;
  }
  
  .story-section:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .author-profile:hover {
    transform: translateY(-4px) scale(1.01);
  }
}
</style> 