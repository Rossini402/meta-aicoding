<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('model');
</script>

<template>
  <main>
    <section class="concept-model">
      <div class="container">
        <h1 class="section-title">核心理念</h1>
        <p class="section-subtitle">X轴元能力与Y轴技术的平衡模型</p>
        
        <div class="model-visualization">
          <div class="model-grid">
            <div class="axis x-axis">
              <div class="axis-label">X轴: 元能力</div>
              <div class="axis-arrow">→</div>
            </div>
            <div class="axis y-axis">
              <div class="axis-label">Y轴: 技术</div>
              <div class="axis-arrow">↓</div>
            </div>
            <div class="quadrant q1">
              <h3>高元能力 + 低技术</h3>
              <p>产品思维强，技术实现弱</p>
            </div>
            <div class="quadrant q2">
              <h3>高元能力 + 高技术</h3>
              <p>理想状态</p>
            </div>
            <div class="quadrant q3">
              <h3>低元能力 + 低技术</h3>
              <p>初学者</p>
            </div>
            <div class="quadrant q4">
              <h3>低元能力 + 高技术</h3>
              <p>技术强，产品思维弱</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="concept-details">
      <div class="container">
        <div class="tabs">
          <button 
            :class="['tab-btn', { active: activeTab === 'model' }]"
            @click="activeTab = 'model'"
          >
            模型解读
          </button>
          <button 
            :class="['tab-btn', { active: activeTab === 'meta' }]"
            @click="activeTab = 'meta'"
          >
            元能力解析
          </button>
          <button 
            :class="['tab-btn', { active: activeTab === 'tech' }]"
            @click="activeTab = 'tech'"
          >
            技术视角
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'model'" class="tab-pane">
            <h2>元能力与技术的平衡模型</h2>
            <p>
              以 Y 轴为主导的技术门槛在逐渐降低，因为 LLM 在提升，但不会降到零，提出一个好问题的门槛一直在。
              以 X 轴为主导的元能力要求在逐渐增长。
            </p>
            <p>
              在 AI 编程时代，我们需要平衡两个关键维度：
            </p>
            <ul>
              <li><strong>X轴（元能力）</strong>：关注产品思维、需求理解、审美能力等"软"技能</li>
              <li><strong>Y轴（技术）</strong>：传统的编程技术、框架知识、算法等"硬"技能</li>
            </ul>
            <p>
              随着 AI 工具的发展，Y轴的门槛正在降低，但不会降到零。而X轴的重要性却在不断提升，成为区分普通开发者和卓越开发者的关键因素。
            </p>
          </div>

          <div v-if="activeTab === 'meta'" class="tab-pane">
            <h2>元能力的四个维度</h2>
            <div class="meta-abilities">
              <div class="meta-ability-card">
                <h3>需求理解能力</h3>
                <p>准确捕捉和解读用户需求，将模糊的想法转化为明确的产品规格。</p>
              </div>
              <div class="meta-ability-card">
                <h3>审美能力</h3>
                <p>识别什么样的产品设计和用户体验是优秀的，能够指导AI生成高质量的视觉和交互设计。</p>
              </div>
              <div class="meta-ability-card">
                <h3>架构设计能力</h3>
                <p>规划高并发、可维护的系统架构，确保产品在技术层面的可扩展性。</p>
              </div>
              <div class="meta-ability-card">
                <h3>快速启动能力</h3>
                <p>迅速从零开始构建原型，验证想法，并快速迭代改进。</p>
              </div>
            </div>
            <p class="meta-summary">
              本手册重点修炼的是 X 轴相关的能力，这样模型能力越强，大家也一样。
            </p>
          </div>

          <div v-if="activeTab === 'tech'" class="tab-pane">
            <h2>技术视角的演变</h2>
            <p>
              随着大语言模型(LLM)的发展，传统的技术壁垒正在被打破。AI 能够生成代码、调试错误、解释复杂概念，使得编程变得更加平民化。
            </p>
            <div class="tech-evolution">
              <div class="tech-stage">
                <h3>过去</h3>
                <p>技术是稀缺资源，掌握编程语言和框架是核心竞争力</p>
              </div>
              <div class="tech-stage">
                <h3>现在</h3>
                <p>AI 降低了编码门槛，但提出好问题、理解产品本质的能力成为稀缺资源</p>
              </div>
              <div class="tech-stage">
                <h3>未来</h3>
                <p>元能力将成为开发者的核心竞争力，技术实现将更多依赖AI辅助</p>
              </div>
            </div>
            <p>
              尽管如此，技术基础知识仍然重要，它能帮助你更好地与AI沟通，理解AI生成的代码，并在必要时进行调整和优化。
            </p>
          </div>
        </div>
      </div>
    </section>
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
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.concept-model {
  padding: 4rem 0;
}

.model-visualization {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.model-grid {
  position: relative;
  width: 600px;
  height: 600px;
  border: 2px solid #e2e8f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.axis {
  position: absolute;
  color: #1a1a2e;
  font-weight: bold;
}

.x-axis {
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.y-axis {
  left: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.axis-arrow {
  font-size: 2rem;
}

.quadrant {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s;
}

.quadrant:hover {
  background-color: rgba(74, 222, 128, 0.1);
}

.q1 {
  border-right: 2px solid #e2e8f0;
  border-bottom: 2px solid #e2e8f0;
}

.q2 {
  border-bottom: 2px solid #e2e8f0;
  background-color: rgba(59, 130, 246, 0.1);
}

.q3 {
  border-right: 2px solid #e2e8f0;
}

.q4 {
  background-color: rgba(239, 68, 68, 0.1);
}

.concept-details {
  padding: 4rem 0;
  background-color: #f8fafc;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1rem;
}

.tab-btn {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  color: #64748b;
  font-weight: 500;
  transition: all 0.3s;
}

.tab-btn:hover {
  color: #3b82f6;
}

.tab-btn.active {
  color: #3b82f6;
  border-bottom: 3px solid #3b82f6;
}

.tab-content {
  min-height: 400px;
}

.tab-pane {
  animation: fadeIn 0.5s;
}

.meta-abilities {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.meta-ability-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.meta-summary {
  text-align: center;
  font-weight: 600;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #3b82f6;
}

.tech-evolution {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.tech-stage {
  flex: 1;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .model-grid {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
  
  .tech-evolution {
    flex-direction: column;
  }
}
</style> 