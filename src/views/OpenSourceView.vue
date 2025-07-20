<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const showQrCode = ref(false);
const showWechatGroupQrCode = ref(false);

// 动画状态
const showContent = ref(false);
const showHeader = ref(false);
const showOpenSourceCard = ref(false);
const showAccessSection = ref(false);
const showLicenseSection = ref(false);
const hoveredCard = ref<string | null>(null);

// 页面加载动画
onMounted(async () => {
  await nextTick();
  
  // 分步显示动画
  setTimeout(() => showContent.value = true, 100);
  setTimeout(() => showHeader.value = true, 300);
  setTimeout(() => showOpenSourceCard.value = true, 600);
  setTimeout(() => showAccessSection.value = true, 900);
  setTimeout(() => showLicenseSection.value = true, 1200);
});

// 卡片悬停处理
const handleCardHover = (cardId: string | null) => {
  hoveredCard.value = cardId;
};

const toggleQrCode = () => {
  showQrCode.value = !showQrCode.value;
};

const toggleWechatGroupQrCode = () => {
  showWechatGroupQrCode.value = !showWechatGroupQrCode.value;
};
</script>

<template>
  <main>
    <section class="open-source-content" :class="{ 'content-visible': showContent }">
      <div class="container">
        <div class="page-header" :class="{ 'header-visible': showHeader }">
          <h1 class="section-title">
            <span class="title-char" style="animation-delay: 0.1s">开</span>
            <span class="title-char" style="animation-delay: 0.2s">源</span>
            <span class="title-char" style="animation-delay: 0.3s">声</span>
            <span class="title-char" style="animation-delay: 0.4s">明</span>
          </h1>
          <p class="section-subtitle">永久免费开源，已更新 18 万字</p>
          <div class="title-underline"></div>
        </div>
        
        <div class="open-source-card" :class="{ 'card-visible': showOpenSourceCard }" @mouseenter="handleCardHover('opensource')" @mouseleave="handleCardHover(null)">
          <div class="open-source-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M19 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1z"/>
            </svg>
          </div>
          <h2>
            <span class="staggered-text">
              <span v-for="(char, index) in '永久免费开源'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
            </span>
          </h2>
          <p>
            本手册免费开源，已更新 18 万字，大家可以随意转发给身边想通过 AI 编程做产品的朋友。
          </p>
          <p>
            我们相信知识共享的力量，希望通过开源的方式，让更多人受益于 AI 编程的实战经验。
          </p>
          <div class="card-shine"></div>
        </div>

        <div class="access-links" :class="{ 'section-visible': showAccessSection }">
          <h2>
            <span class="staggered-text">
              <span v-for="(char, index) in '获取方式'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
            </span>
          </h2>
          <div class="access-container">
            <div class="access-card" 
                 :style="{ 'animation-delay': '0.1s' }"
                 @mouseenter="handleCardHover('feishu')" 
                 @mouseleave="handleCardHover(null)">
              <div class="access-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#3b82f6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8" stroke="#fff" stroke-width="1" fill="none"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="#fff" stroke-width="1"></line>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="#fff" stroke-width="1"></line>
                  <polyline points="10 9 9 9 8 9" stroke="#fff" stroke-width="1"></polyline>
                </svg>
              </div>
              <div class="access-content">
                <h3>飞书文档</h3>
                <p>随时在线阅读完整手册，更新及时</p>
                <a href="https://drwnsc5veu.feishu.cn/wiki/HhHOwodFciggqqkTeF8cK3Wcnyb" target="_blank" class="access-btn">
                  <span>立即访问</span>
                  <span class="btn-icon">→</span>
                  <div class="btn-ripple"></div>
                </a>
              </div>
              <div class="card-shine"></div>
            </div>
            
            <div class="access-card" 
                 :style="{ 'animation-delay': '0.2s' }"
                 @mouseenter="handleCardHover('wechat')" 
                 @mouseleave="handleCardHover(null)">
              <div class="access-icon">
                <svg t="1751900120859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7339" width="48" height="48"><path d="M175.181658 915.640212c-13.845973 0-25.885949-11.437978-25.885949-25.885949l0-74.647854c0-148.69371 89.697825-281.133451 228.157554-336.517343l18.661964-7.825985-16.253968-12.641975c-51.771899-40.93592-81.87184-101.737801-81.87184-167.355673 0-117.389771 95.717813-212.505585 212.505585-212.505585 117.389771 0 212.505585 95.717813 212.505585 212.505585 0 65.617872-29.497942 126.419753-81.87184 167.355673l-16.253968 12.641975 18.661964 7.825985c139.061728 55.383892 228.157554 187.221634 228.157554 336.517343l0 74.647854c0 13.845973-11.437978 25.885949-25.885949 25.885949L175.181658 915.640212 175.181658 915.640212zM512.300999 503.873016c-171.569665 0-311.233392 139.061728-311.233392 311.233392l0 48.761905 621.864785 0 0-48.761905C822.932393 643.536743 683.870664 503.873016 512.300999 503.873016L512.300999 503.873016zM511.699001 130.031746c-89.095826 0-161.335685 72.239859-161.335685 161.335685s72.239859 161.335685 161.335685 161.335685c89.095826 0 161.335685-72.239859 161.335685-161.335685S600.794827 130.031746 511.699001 130.031746L511.699001 130.031746z" p-id="7340" fill="#3b82f6"></path><path d="M25.885949 803.066432c-13.845973 0-25.885949-11.437978-25.885949-25.885949l0-57.791887c0-107.75779 59.597884-205.883598 154.713698-255.247501l13.243974-6.621987-10.23398-11.437978c-29.497942-32.507937-45.751911-74.045855-45.751911-117.389771 0-81.269841 55.383892-151.703704 134.245738-170.365667 1.805996-0.601999 4.213992-0.601999 6.019988-0.601999 12.039976 0 22.273956 7.825985 25.283951 19.865961 3.009994 13.845973-5.417989 27.691946-18.661964 30.70194-55.985891 13.845973-94.513815 63.209877-94.513815 121.001764 0 48.761905 28.895944 93.309818 73.443857 113.175779 3.009994 1.203998 5.417989 3.009994 7.825985 5.417989 0.601999 0.601999 0.601999 0.601999 1.203998 1.203998 1.203998 1.203998 1.805996 3.009994 3.009994 5.417989l0.601999 0.601999c0.601999 1.203998 0.601999 1.805996 1.203998 3.009994 0 0.601999 0.601999 1.203998 0.601999 1.805996 0 0.601999 0 1.805996 0 3.009994l0 0.601999c0.601999 2.407995 0.601999 4.213992 0.601999 6.019988 0 0.601999-0.601999 1.203998-0.601999 1.805996l-0.601999 1.203998c-0.601999 1.203998-0.601999 1.805996-0.601999 3.009994 0 0.601999 0 1.203998-0.601999 1.805996-3.611993 7.825985-10.835979 13.845973-19.865961 15.049971l-0.601999 0-0.601999 0c-104.747795 26.487948-178.191652 120.399765-178.191652 228.759553l0 57.791887C51.1699 792.230453 39.731922 803.066432 25.885949 803.066432L25.885949 803.066432z" p-id="7341" fill="#3b82f6"></path><path d="M998.114051 803.066432c-13.845973 0-25.885949-11.437978-25.885949-25.885949l0-57.791887c0-108.359788-73.443857-202.271605-178.191652-228.759553l-0.601999 0-0.601999 0c-9.029982-1.203998-16.253968-6.621987-19.865961-15.049971 0-0.601999 0-1.203998-0.601999-1.805996 0-1.203998-0.601999-1.805996-0.601999-3.009994l-0.601999-1.203998c0-0.601999-0.601999-1.203998-0.601999-1.805996 0-1.805996 0-3.009994 0.601999-5.417989l0-0.601999c0-0.601999 0-1.805996 0-3.009994 0.601999-0.601999 0.601999-1.203998 0.601999-1.805996 0 0 0.601999-0.601999 0.601999-1.805996l0.601999-1.203998c1.203998-3.009994 2.407995-4.213992 3.611993-5.417989 0.601999-0.601999 0.601999-0.601999 1.203998-1.203998 1.805996-1.805996 4.815991-4.213992 7.825985-5.417989 44.547913-19.865961 73.443857-64.413874 73.443857-113.175779 0-55.985891-37.925926-105.349794-91.503821-119.797766-13.845973-3.611993-22.273956-18.059965-18.059965-31.905938 3.009994-11.437978 13.243974-19.263962 24.681952-19.263962 2.407995 0 4.213992 0.601999 6.621987 0.601999 76.453851 20.46796 129.429747 90.299824 129.429747 169.16167 0 43.343915-16.253968 84.881834-45.751911 117.389771l-10.23398 11.437978 13.243974 6.621987c95.717813 49.363904 154.713698 147.489712 154.713698 255.247501l0 57.791887C1024 792.230453 1012.562022 803.066432 998.114051 803.066432L998.114051 803.066432z" p-id="7342" fill="#3b82f6"></path></svg>
              </div>
              <div class="access-content">
                <h3>微信公众号</h3>
                <p>关注公众号获取更新提醒和精选内容推送</p>
                <button @click="toggleQrCode" class="access-btn">
                  <span>关注公众号</span>
                  <span class="btn-icon">→</span>
                  <div class="btn-ripple"></div>
                </button>
              </div>
              <div class="card-shine"></div>
            </div>
            
            <div class="access-card" 
                 :style="{ 'animation-delay': '0.3s' }"
                 @mouseenter="handleCardHover('group')" 
                 @mouseleave="handleCardHover(null)">
              <div class="access-icon">
                <svg t="1751900242904" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="48" height="48"><path d="M973.2608 605.7472c0-124.6208-110.9504-227.584-253.184-241.2544-27.648-135.4752-165.1712-235.1104-330.24-235.1104-185.0368 0-335.3088 127.6416-335.3088 284.5184 0 82.2784 40.96 158.72 112.64 212.7872l-22.4256 76.3904a28.16 28.16 0 0 0 38.6048 33.5872l110.7968-50.0224a391.5264 391.5264 0 0 0 95.6928 11.776c11.2128 0 22.4768-0.512 33.5872-1.4336 42.496 88.7808 144.9984 151.6032 264.448 151.6032a333.4144 333.4144 0 0 0 84.3264-10.752l75.264 43.008a27.904 27.904 0 0 0 13.9776 3.7376 28.2112 28.2112 0 0 0 27.6992-33.3824l-11.9808-63.6416c61.3376-46.08 96.1024-111.4112 96.1024-181.8112z m-583.424 36.352A333.5168 333.5168 0 0 1 299.3152 629.76a28.2112 28.2112 0 0 0-19.2 1.4336l-64.1024 28.9792 10.8544-36.9152a28.16 28.16 0 0 0-11.52-31.4368c-66.56-43.7248-104.4992-108.544-104.4992-177.8688 0-125.7984 125.1328-228.1984 278.9888-228.1984 130.7136 0 243.9168 76.2368 272.1792 178.2784-145.3056 11.1616-259.5328 115.3024-259.5328 241.7664a208.4864 208.4864 0 0 0 3.1232 35.84c-5.2224 0.3072-10.496 0.4608-15.7696 0.4608z m440.9344 109.2096a28.2112 28.2112 0 0 0-12.288 28.7744l4.0448 21.6576-32.6656-18.688a28.2112 28.2112 0 0 0-22.1696-2.4576 274.9952 274.9952 0 0 1-79.8208 11.6736c-126.3104 0-229.0688-83.6608-229.0688-186.5216s102.7584-186.5216 229.0688-186.5216 229.0688 83.6608 229.0688 186.5216c0 56.7808-31.1808 109.824-86.1696 145.5616z" fill="#3b82f6" p-id="2593"></path><path d="M288.2048 280.832a40.96 40.96 0 1 0 40.96 40.96 40.96 40.96 0 0 0-40.96-40.96zM490.6496 363.1616a40.96 40.96 0 1 0-40.96-40.96 40.96 40.96 0 0 0 40.96 40.96zM606.8224 517.12a35.84 35.84 0 1 0 35.84 35.84 35.84 35.84 0 0 0-35.84-35.84zM773.12 516.1472a37.0688 37.0688 0 1 0 37.0688 37.0176 37.0688 37.0688 0 0 0-37.0688-37.0176z" fill="#3b82f6" p-id="2594"></path></svg>
              </div>
              <div class="access-content">
                <h3>微信交流群</h3>
                <p>与 500+ AI编程爱好者的社区，共同成长</p>
                <button @click="toggleWechatGroupQrCode" class="access-btn">
                  <span>加入微信群</span>
                  <span class="btn-icon">→</span>
                  <div class="btn-ripple"></div>
                </button>
              </div>
              <div class="card-shine"></div>
            </div>
          </div>
        </div>
        
        <!-- 公众号二维码弹窗 -->
        <div v-if="showQrCode" class="qrcode-modal" @click="toggleQrCode">
          <div class="qrcode-content" @click.stop>
            <button class="close-btn" @click="toggleQrCode">&times;</button>
            <h3>关注公众号</h3>
            <p>官方公众号：小林AI编程</p>
            <img src="../assets/img/gzh.jpg" alt="微信公众号二维码" class="qrcode-img" />
            <p>关注公众号，获取更多AI编程资讯</p>
          </div>
        </div>
        
        <!-- 微信群二维码弹窗 -->
        <div v-if="showWechatGroupQrCode" class="qrcode-modal" @click="toggleWechatGroupQrCode">
          <div class="qrcode-content" @click.stop>
            <button class="close-btn" @click="toggleWechatGroupQrCode">&times;</button>
            <h3>扫码加入微信群</h3>
            <img src="../assets/img/wechat_group.png" alt="微信群二维码" class="qrcode-img" />
            <p>扫描上方二维码，备注"AI编程"</p>
          </div>
        </div>

        <div class="license-section" :class="{ 'section-visible': showLicenseSection }">
          <h2>
            <span class="staggered-text">
              <span v-for="(char, index) in '版权声明'" :key="index" :style="{ 'animation-delay': `${index * 0.05}s` }">{{ char }}</span>
            </span>
          </h2>
          <div class="license-card" @mouseenter="handleCardHover('license')" @mouseleave="handleCardHover(null)">
            <p>
              本手册很多共创者是技术人，可能没有标志引用来源的习惯，但都是为了分享心得。
            </p>
            <p>
              小林牵头做这个手册目的就一个：普及 AI 编程，如果您发现有案例有引用您的原创提示词，或者二创提示词，请直接联系小林，我第一时间标注引用来源，加上署名。
            </p>
            <div class="card-shine"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ========== 页面入场动画 ========== */
.open-source-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%);
}

.open-source-content.content-visible {
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

/* ========== 卡片入场动画 ========== */
.open-source-card {
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.open-source-card.card-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.access-links {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.access-links.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.access-links.section-visible .access-card {
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

.license-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.license-section.section-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========== 文字动画 ========== */
.staggered-text.section-visible span,
.card-visible .staggered-text span,
.section-visible .staggered-text span {
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

.open-source-content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.open-source-card {
  background-color: #f8fafc;
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 4px solid transparent;
}

.open-source-card::before {
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

.open-source-card:hover::before {
  opacity: 1;
}

.open-source-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.open-source-card:active {
  transform: translateY(-2px) scale(0.98);
  transition: transform 0.1s ease;
}

.open-source-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  transition: transform 0.3s ease;
}

.open-source-icon svg {
  width: 64px;
  height: 64px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.2));
}

.open-source-card:hover .open-source-icon {
  transform: scale(1.1) rotate(5deg);
}

.open-source-card:hover .open-source-icon svg {
  filter: drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3));
}

.open-source-card p {
  font-size: 1.2rem;
  color: #334155;
  max-width: 800px;
  margin: 0 auto 1rem;
}

.access-links {
  margin-bottom: 4rem;
}

.access-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.access-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-top: 4px solid transparent;
}

.access-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.access-card:hover::before {
  opacity: 1;
}

.access-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.access-card:active {
  transform: translateY(-2px) scale(0.98);
  transition: transform 0.1s ease;
}

.access-icon {
  background-color: #f1f5f9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.access-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.access-card:hover .access-icon::before {
  opacity: 1;
}

.access-card:hover .access-icon {
  background-color: #e0f2fe;
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.access-content {
  flex-grow: 1;
  width: 100%;
}

.access-content h3 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.access-content p {
  margin: 0 0 1.5rem;
  color: #64748b;
  line-height: 1.6;
}

.access-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(90deg, #4ade80, #3b82f6);
  color: white;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.access-btn span {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  pointer-events: none;
}

.access-btn:hover .btn-ripple {
  width: 200px;
  height: 200px;
}

.access-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(74, 222, 128, 0.4);
}

.access-btn:hover span {
  transform: scale(1.05);
}

.access-btn:active {
  transform: translateY(-1px) scale(0.98);
  transition: transform 0.1s ease;
}

.btn-icon {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.access-btn:hover .btn-icon {
  transform: translateX(4px);
}

.license-section {
  margin-bottom: 4rem;
}

.license-card {
  background-color: #f8fafc;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 4px solid transparent;
}

.license-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.license-card:hover::before {
  opacity: 1;
}

.license-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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

.open-source-card:hover .card-shine,
.access-card:hover .card-shine,
.license-card:hover .card-shine {
  transform: translateX(100%);
}

.license-card p {
  margin-bottom: 1rem;
}

.contribution-section {
  text-align: center;
}

.contribution-section p {
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
}

.qrcode-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.qrcode-content {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
}

.qrcode-img {
  max-width: 250px;
  width: 100%;
  height: auto;
  margin: 1.5rem auto;
  display: block;
}

.qrcode-content h3 {
  margin-bottom: 1rem;
  color: #1e293b;
}

.qrcode-content p {
  color: #64748b;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .open-source-content h2 {
    font-size: 1.8rem;
  }
  
  .open-source-card {
    padding: 2rem;
  }
  
  .open-source-card p {
    font-size: 1rem;
  }
  
  .access-container {
    grid-template-columns: 1fr;
  }
  
  .title-char {
    animation-duration: 0.6s;
  }
  
  .access-card:hover {
    transform: translateY(-5px) scale(1.01);
  }
  
  .open-source-card:hover {
    transform: translateY(-5px) scale(1.01);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .open-source-content {
    padding: 2rem 0;
  }
  
  .open-source-card {
    padding: 1.5rem;
  }
  
  .open-source-icon svg {
    width: 48px;
    height: 48px;
  }
  
  .access-card {
    padding: 1.5rem;
  }
  
  .access-icon {
    width: 60px;
    height: 60px;
  }
  
  .qrcode-content {
    padding: 1.5rem;
    max-width: 320px;
  }
  
  .qrcode-img {
    max-width: 200px;
  }
  
  /* 移动端禁用一些动画以提升性能 */
  .card-shine {
    display: none;
  }
  
  .btn-ripple {
    display: none;
  }
  
  .access-card:hover {
    transform: translateY(-3px) scale(1.01);
  }
  
  .open-source-card:hover {
    transform: translateY(-3px) scale(1.01);
  }
  
  .license-card:hover {
    transform: translateY(-3px) scale(1.01);
  }
  
  .access-btn:hover {
    transform: translateY(-2px) scale(1.02);
  }
}
</style> 