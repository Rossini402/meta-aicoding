<script setup lang="ts">
import { ref } from 'vue';
import AbilityModel from '../components/AbilityModel.vue';

const showQrCode = ref(false);

function toggleQrCode() {
  showQrCode.value = !showQrCode.value;
}
</script>

<template>
  <main>
    <section class="hero">
      <!-- 粒子背景 -->
      <div class="particles-bg">
        <div class="particle" v-for="n in 20" :key="n" 
             :style="{ 
               left: Math.random() * 100 + '%', 
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 6 + 's',
               animationDuration: (4 + Math.random() * 4) + 's'
             }"></div>
      </div>
      
      <div class="container">
        <div class="hero-badges animate-fade-in">
          <span class="badge badge-green">
            <i class="icon">🔓</i> 永久免费开源
          </span>
          <span class="badge badge-orange">
            <i class="icon">⭐</i> 持续更新中
          </span>
        </div>
        
        <h1 class="hero-title animate-slide-up">
          <span class="title-highlight">AI编程实战手册</span>
        </h1>
        
        <p class="hero-subtitle animate-slide-up">
          <span class="creator">技术 </span>门槛降低，<span class="meta-ability">"元能力" </span>才是长期护城河。
          <br/>
          <!-- 解锁你的<span class="meta-ability">"元能力"</span>，成为AI时代的<span class="creator">创造者</span>而非打工人 -->
        </p>
        
        <p class="hero-description animate-slide-up">致力于做最懂小白的开源文档</p>
        
        <div class="hero-features animate-slide-up">
          <div class="feature-item">
            <span class="feature-number">18万字</span>
            <span class="feature-label">实战指南</span>
          </div>
          <div class="feature-divider">×</div>
          <div class="feature-item">
            <span class="feature-number">55+</span>
            <span class="feature-label">高质量案例</span>
          </div>
          <div class="feature-divider">×</div>
          <div class="feature-item">
            <span class="feature-number">100%</span>
            <span class="feature-label">免费开源</span>
          </div>
          <div class="feature-divider">×</div>
          <div class="feature-item">
            <span class="feature-number">持续</span>
            <span class="feature-label">更新中</span>
          </div>
        </div>

        <div class="hero-actions animate-scale-in">
          <a href="https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg" target="_blank" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
            </svg>
            访问飞书文档
          </a>
          <button @click="toggleQrCode" class="btn btn-secondary">
            <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg> -->
            <svg t="1751900242904" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="48" height="48">
              <path d="M973.2608 605.7472c0-124.6208-110.9504-227.584-253.184-241.2544-27.648-135.4752-165.1712-235.1104-330.24-235.1104-185.0368 0-335.3088 127.6416-335.3088 284.5184 0 82.2784 40.96 158.72 112.64 212.7872l-22.4256 76.3904a28.16 28.16 0 0 0 38.6048 33.5872l110.7968-50.0224a391.5264 391.5264 0 0 0 95.6928 11.776c11.2128 0 22.4768-0.512 33.5872-1.4336 42.496 88.7808 144.9984 151.6032 264.448 151.6032a333.4144 333.4144 0 0 0 84.3264-10.752l75.264 43.008a27.904 27.904 0 0 0 13.9776 3.7376 28.2112 28.2112 0 0 0 27.6992-33.3824l-11.9808-63.6416c61.3376-46.08 96.1024-111.4112 96.1024-181.8112z m-583.424 36.352A333.5168 333.5168 0 0 1 299.3152 629.76a28.2112 28.2112 0 0 0-19.2 1.4336l-64.1024 28.9792 10.8544-36.9152a28.16 28.16 0 0 0-11.52-31.4368c-66.56-43.7248-104.4992-108.544-104.4992-177.8688 0-125.7984 125.1328-228.1984 278.9888-228.1984 130.7136 0 243.9168 76.2368 272.1792 178.2784-145.3056 11.1616-259.5328 115.3024-259.5328 241.7664a208.4864 208.4864 0 0 0 3.1232 35.84c-5.2224 0.3072-10.496 0.4608-15.7696 0.4608z m440.9344 109.2096a28.2112 28.2112 0 0 0-12.288 28.7744l4.0448 21.6576-32.6656-18.688a28.2112 28.2112 0 0 0-22.1696-2.4576 274.9952 274.9952 0 0 1-79.8208 11.6736c-126.3104 0-229.0688-83.6608-229.0688-186.5216s102.7584-186.5216 229.0688-186.5216 229.0688 83.6608 229.0688 186.5216c0 56.7808-31.1808 109.824-86.1696 145.5616z" fill="#3b82f6" p-id="2593"></path><path d="M288.2048 280.832a40.96 40.96 0 1 0 40.96 40.96 40.96 40.96 0 0 0-40.96-40.96zM490.6496 363.1616a40.96 40.96 0 1 0-40.96-40.96 40.96 40.96 0 0 0 40.96 40.96zM606.8224 517.12a35.84 35.84 0 1 0 35.84 35.84 35.84 35.84 0 0 0-35.84-35.84zM773.12 516.1472a37.0688 37.0688 0 1 0 37.0688 37.0176 37.0688 37.0688 0 0 0-37.0688-37.0176z" fill="#3b82f6" p-id="2594"></path>
            </svg>
            加入微信交流群
          </button>
        </div>
      </div>
    </section>

    <!-- QR Code Modal -->
    <div v-if="showQrCode" class="qrcode-modal" @click="toggleQrCode">
      <div class="qrcode-content" @click.stop>
        <button class="close-btn" @click="toggleQrCode">&times;</button>
        <h3>扫码加入微信交流群</h3>
        <img src="../assets/img/wechat_group.png" alt="微信群二维码" class="qrcode-img" />
        <p>扫描上方二维码，备注"AI编程"</p>
      </div>
    </div>

    <!-- 元能力模型 -->
    <section class="core-concept">
      <div class="container">
        <!-- <AbilityModel /> -->
      </div>
    </section>


    <section class="open-source">
      <div class="container">
        <h2 class="section-title">开源与共创计划</h2>
        <p class="section-subtitle">手册永久免费开源，并邀请您一起参与知识共创</p>
        
        <div class="contribution-grid">
          <div class="contribution-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M19 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1z"/>
              </svg>
            </div>
            <h3>知识无界</h3>
            <p>手册永久免费开放，遵循开源协议。我们相信知识的自由流动是创新之本</p>
            <a href="https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg" target="_blank" class="card-link">访问飞书文档</a>
          </div>
          
          <div class="contribution-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>案例投稿</h3>
            <p>分享您的AI编程案例，被采纳的案例将在手册中署名展示，共建AI编程生态</p>
            <a href="https://drwnsc5veu.feishu.cn/share/base/form/shrcnOa9LiPFX2XlqKhIH8IVl3O" target="_blank" class="card-link">我要投稿</a>
          </div>
          
          <div class="contribution-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              </svg>
            </div>
            <h3>社区共建</h3>
            <p>加入500+ AI编程爱好者的社区，相互交流，共同成长</p>
            <button @click="toggleQrCode" class="card-link">加入微信群</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f7ff 60%, #faf5ff 100%);
  padding: 8rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation-delay: 0.2s;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.badge-green {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.badge-orange {
  background: rgba(249, 115, 22, 0.15);
  color: #f97316;
}

.icon {
  margin-right: 0.5rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 1.1;
  animation-delay: 0.4s;
}

.title-highlight {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.hero-subtitle {
  font-size: 1.85rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  color: #475569;
  line-height: 1.4;
  animation-delay: 0.6s;
}

.meta-ability {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
}

.creator {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.hero-description {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #64748b;
  animation-delay: 0.8s;
}

.hero-features {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  animation-delay: 1s;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  min-width: 120px;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.feature-number {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #64748b;
}

.feature-divider {
  color: #94a3b8;
  font-weight: 300;
  font-size: 1.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation-delay: 1.2s;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
  font-size: 16px;
  backdrop-filter: blur(10px);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn svg {
  width: 20px;
  height: 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.core-concept {
  padding: 0;
  background-color: transparent;
}

.concept-subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.concept-text {
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.skill-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-title {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #1e293b;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-list li {
  margin-bottom: 0.75rem;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;
}

.skill-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #3b82f6;
}

.case-library {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.case-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.filter-btn:hover:not(.active) {
  border-color: #3b82f6;
}

.stars {
  color: #eab308;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.case-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.case-level {
  color: #eab308;
  margin-bottom: 1rem;
  font-weight: bold;
}

.case-meta {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  color: #64748b;
  font-size: 0.9rem;
}

.case-desc {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.case-link {
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
}

.case-link:hover {
  text-decoration: underline;
}

.open-source {
  padding: 6rem 0;
  background-color: white;
}

.contribution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.contribution-card {
  background-color: #f8fafc;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
}

.contribution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

.card-icon svg {
  width: 64px;
  height: 64px;
}

.contribution-card h3 {
  margin-bottom: 1rem;
  color: #1e293b;
}

.contribution-card p {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card-link {
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  transition: all 0.3s;
  background: none;
  cursor: pointer;
  font-size: 1rem;
}

.card-link:hover {
  background-color: #3b82f6;
  color: white;
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
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .concept-content {
    grid-template-columns: 1fr;
  }
  
  .skill-comparison {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-badges {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-features {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .contribution-card {
    padding: 1.5rem;
  }
  
  .btn {
    padding: 0.6rem 1.2rem;
    min-width: auto;
  }
}
</style>
