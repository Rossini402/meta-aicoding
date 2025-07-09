<script setup lang="ts">
import { ref } from 'vue';

const showQrCode = ref(false);

function toggleQrCode() {
  showQrCode.value = !showQrCode.value;
}
</script>

<template>
  <main>
    <section class="community-content">
      <div class="container">
        <h1 class="section-title">社群</h1>
        <p class="section-subtitle">加入 500+ 人的 AI 编程交流群</p>
        
        <div class="community-card">
          <div class="community-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
          </div>
          <h2>加入我们的社区</h2>
          <p>
            与 500+ 位 AI 编程爱好者一起交流，分享经验，解决问题，共同成长。
          </p>
          <div class="community-actions">
            <a href="https://drwnsc5veu.feishu.cn/docx/PieSdJSTKoGUNjx1lM9cRRvAngg" target="_blank" class="btn btn-primary">查看飞书文档</a>
            <button @click="toggleQrCode" class="btn btn-secondary">加入微信群</button>
          </div>
        </div>

        <div class="community-benefits">
          <h2>加入社群的好处</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🚀</div>
              <h3>最新资源</h3>
              <p>第一时间获取 AI 编程领域的最新资源、工具和技术动态</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🧩</div>
              <h3>问题解答</h3>
              <p>遇到 AI 编程问题？在社群中寻求帮助，快速解决难题</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🔄</div>
              <h3>经验分享</h3>
              <p>与其他成员分享你的 AI 编程经验，互相学习成长</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🤝</div>
              <h3>合作机会</h3>
              <p>结识志同道合的伙伴，发现潜在的合作和项目机会</p>
            </div>
          </div>
        </div>

        <div class="community-rules">
          <h2>社群规则</h2>
          <div class="rules-list">
            <div class="rule-item">
              <div class="rule-number">1</div>
              <div class="rule-content">
                <h3>尊重他人</h3>
                <p>尊重社群中的每一位成员，不发表攻击性言论，保持友好交流氛围。</p>
              </div>
            </div>
            <div class="rule-item">
              <div class="rule-number">2</div>
              <div class="rule-content">
                <h3>内容相关</h3>
                <p>发布的内容应与 AI 编程相关，避免无关话题和广告宣传。</p>
              </div>
            </div>
            <div class="rule-item">
              <div class="rule-number">3</div>
              <div class="rule-content">
                <h3>分享精神</h3>
                <p>鼓励分享有价值的内容，但请尊重原创，标明信息来源。</p>
              </div>
            </div>
            <div class="rule-item">
              <div class="rule-number">4</div>
              <div class="rule-content">
                <h3>互助互利</h3>
                <p>在力所能及的范围内帮助其他成员，共同营造互助互利的社群环境。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="community-events">
          <h2>社群活动</h2>
          <p class="events-intro">
            我们定期在社群中组织各类活动，帮助成员深入学习 AI 编程知识，拓展技能边界。
          </p>
          <div class="events-grid">
            <div class="event-card">
              <div class="event-tag">每周</div>
              <h3>技术分享</h3>
              <p>每周由社群成员轮流分享 AI 编程相关的技术心得和实践经验</p>
            </div>
            <div class="event-card">
              <div class="event-tag">每月</div>
              <h3>案例研讨</h3>
              <p>深入剖析一个 AI 编程实战案例，从需求到实现全过程解析</p>
            </div>
            <div class="event-card">
              <div class="event-tag">不定期</div>
              <h3>大咖直播</h3>
              <p>邀请行业专家进行线上分享，解读 AI 编程前沿趋势和技术</p>
            </div>
            <div class="event-card">
              <div class="event-tag">季度</div>
              <h3>项目孵化</h3>
              <p>组织社群成员共同参与 AI 编程项目，从零到一实现创意</p>
            </div>
          </div>
        </div>

        <div class="join-now">
          <h2>立即加入</h2>
          <p>
            不要错过与其他 AI 编程爱好者交流的机会，立即加入我们的社群，一起探索 AI 编程的无限可能！
          </p>
          <div class="contact-info">
            <p>微信：ycodingAI（备注：加入 AI 编程交流群）</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- QR Code Modal -->
    <div v-if="showQrCode" class="qrcode-modal">
      <div class="qrcode-content">
        <button class="close-btn" @click="toggleQrCode">&times;</button>
        <h3>扫码加入微信交流群</h3>
        <img src="../assets/img/wechat_group.png" alt="微信群二维码" class="qrcode-img" />
        <p>扫描上方二维码或添加微信号，备注"AI编程"</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
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

.community-content {
  padding: 4rem 0;
}

.community-content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.community-card {
  background-color: #f8fafc;
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.community-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

.community-icon svg {
  width: 64px;
  height: 64px;
}

.community-card p {
  font-size: 1.2rem;
  color: #334155;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.join-info {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.join-info h3 {
  margin-bottom: 1.5rem;
}

.join-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.join-step {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-icon {
  width: 30px;
  height: 30px;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.join-step p {
  margin: 0;
  font-size: 1rem;
}

.benefits-grid, .events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.benefit-card, .event-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
}

.benefit-card:hover, .event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.event-tag {
  display: inline-block;
  background-color: #4ade80;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.rules-list {
  margin-bottom: 4rem;
}

.rule-item {
  display: flex;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.rule-number {
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.rule-content h3 {
  margin-bottom: 0.5rem;
}

.rule-content p {
  color: #334155;
  margin: 0;
}

.events-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.join-now {
  background-color: #f8fafc;
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.join-now p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #334155;
}

.contact-info {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: inline-block;
}

.contact-info p {
  margin: 0;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .community-content h2 {
    font-size: 1.8rem;
  }
  
  .community-card {
    padding: 2rem;
  }
  
  .community-card p {
    font-size: 1rem;
  }
  
  .rule-item {
    flex-direction: column;
  }
  
  .rule-number {
    margin-bottom: 1rem;
    margin-right: 0;
  }
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
</style> 