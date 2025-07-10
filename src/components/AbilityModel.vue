<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface AbilityPoint {
  x: number;
  y: number;
  label: string;
  type: 'meta' | 'tech' | 'balanced';
  description: string;
}

const svgRef = ref<SVGElement>();
const hoveredPoint = ref<AbilityPoint | null>(null);

const abilityPoints: AbilityPoint[] = [
  { x: 25, y: 35, label: '传统程序员', type: 'tech', description: '技术能力强，但缺乏产品思维' },
  { x: 75, y: 35, label: '产品经理', type: 'meta', description: '需求洞察力强，但技术实现依赖他人' },
  // { x: 20, y: 80, label: '算法工程师', type: 'tech', description: '算法能力突出，但产品化能力有限' },
  { x: 88, y: 85, label: 'AI时代创造者', type: 'balanced', description: '兼具元能力和技术能力的全能型人才' },
  // { x: 50, y: 35, label: '初级开发者', type: 'tech', description: '正在学习技术，需要培养产品思维' },
  { x: 55, y: 55, label: '技术产品经理', type: 'balanced', description: '懂技术的产品经理，AI时代的稀缺人才' }
];

const getPointColor = (type: string) => {
  switch (type) {
    case 'meta': return '#f59e0b';
    case 'tech': return '#3b82f6';
    case 'balanced': return '#10b981';
    default: return '#6b7280';
  }
};

const handlePointHover = (point: AbilityPoint) => {
  hoveredPoint.value = point;
};

const handlePointLeave = () => {
  hoveredPoint.value = null;
};
</script>

<template>
  <div class="ability-model">
    <div class="model-header">
      <h3 class="model-title">AI时代的核心能力模型</h3>
      <p class="model-subtitle">X轴（元能力）与Y轴（技术能力）共同决定了你在AI时代的生产力</p>
    </div>
    
    <div class="model-container">
      <div class="model-chart">
        <svg ref="svgRef" viewBox="0 0 400 300" class="ability-svg">
          <!-- 背景网格 -->
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <!-- 坐标轴 -->
          <line x1="50" y1="250" x2="350" y2="250" stroke="#374151" stroke-width="2" marker-end="url(#arrowhead)"/>
          <line x1="50" y1="250" x2="50" y2="50" stroke="#374151" stroke-width="2" marker-end="url(#arrowhead)"/>
          
          <!-- 箭头标记 -->
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
            </marker>
          </defs>
          
          <!-- 象限背景 -->
          <rect x="50" y="150" width="150" height="100" fill="rgba(239, 68, 68, 0.05)" />
          <rect x="200" y="150" width="150" height="100" fill="rgba(245, 158, 11, 0.05)" />
          <rect x="50" y="50" width="150" height="100" fill="rgba(59, 130, 246, 0.05)" />
          <rect x="200" y="50" width="150" height="100" fill="rgba(16, 185, 129, 0.05)" />
          
          <!-- 象限标签 -->
          <text x="125" y="200" text-anchor="middle" class="quadrant-label">低元能力<tspan x="125" dy="15">高技术</tspan></text>
          <text x="275" y="200" text-anchor="middle" class="quadrant-label">高元能力<tspan x="275" dy="15">低技术</tspan></text>
          <!-- <text x="125" y="100" text-anchor="middle" class="quadrant-label">低元能力<tspan x="125" dy="15">高技术</tspan></text> -->
          <text x="275" y="100" text-anchor="middle" class="quadrant-label">高元能力<tspan x="275" dy="15">高技术</tspan></text>
          
          <!-- 能力点 -->
          <g v-for="point in abilityPoints" :key="point.label">
            <circle 
              :cx="50 + (point.x / 100) * 300" 
              :cy="250 - (point.y / 100) * 200"
              :r="hoveredPoint?.label === point.label ? 8 : 6"
              :fill="getPointColor(point.type)"
              :stroke="hoveredPoint?.label === point.label ? '#ffffff' : 'none'"
              :stroke-width="hoveredPoint?.label === point.label ? 2 : 0"
              class="ability-point"
              @mouseenter="handlePointHover(point)"
              @mouseleave="handlePointLeave"
            />
            <text 
              :x="50 + (point.x / 100) * 300" 
              :y="250 - (point.y / 100) * 200 - 12"
              text-anchor="middle"
              class="point-label"
              :class="{ 'label-highlighted': hoveredPoint?.label === point.label }"
            >
              {{ point.label }}
            </text>
          </g>
          
          <!-- 坐标轴标签 -->
          <text x="200" y="280" text-anchor="middle" class="axis-label">元能力 (X轴)</text>
          <text x="25" y="150" text-anchor="middle" class="axis-label" transform="rotate(-90 25 150)">技术能力 (Y轴)</text>
        </svg>
      </div>
      
      <div class="model-legend">
        <div class="legend-item">
          <div class="legend-color" style="background: #f59e0b;"></div>
          <span>元能力导向</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #3b82f6;"></div>
          <span>技术能力导向</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #10b981;"></div>
          <span>平衡发展</span>
        </div>
      </div>
    </div>
    
    <!-- 悬停信息 -->
    <div v-if="hoveredPoint" class="hover-info">
      <h4>{{ hoveredPoint.label }}</h4>
      <p>{{ hoveredPoint.description }}</p>
    </div>
    
    <div class="ability-explanation">
      <div class="explanation-grid">
        <div class="explanation-card">
          <div class="card-icon">🧠</div>
          <h4>X轴：元能力</h4>
          <ul>
            <li>需求洞察与产品思维</li>
            <li>用户体验设计能力</li>
            <li>商业模式理解</li>
            <li>系统架构设计</li>
          </ul>
        </div>
        
        <div class="explanation-card">
          <div class="card-icon">🔧</div>
          <h4>Y轴：技术能力</h4>
          <ul>
            <li>编程语言掌握</li>
            <li>算法与数据结构</li>
            <li>框架与工具使用</li>
            <li>系统调优与维护</li>
          </ul>
        </div>
      </div>
      
      <div class="key-insight">
        <h4>💡 关键洞察</h4>
        <p>AI时代，纯技术能力的壁垒正在降低，而<strong>元能力</strong>（需求洞察、产品设计、用户理解）成为真正的核心竞争力。最理想的状态是成为右上角的<strong>"AI时代创造者"</strong>——既懂技术实现，又具备产品思维。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ability-model {
  padding: var(--space-3xl) 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.model-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.model-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--space-md);
}

.model-subtitle {
  font-size: 1.125rem;
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}

.model-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.model-chart {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.ability-svg {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.quadrant-label {
  fill: var(--gray-500);
  font-size: 12px;
  font-weight: 500;
}

.ability-point {
  cursor: pointer;
  transition: all var(--transition-normal);
}

.ability-point:hover {
  filter: brightness(1.1);
}

.point-label {
  fill: var(--gray-700);
  font-size: 11px;
  font-weight: 500;
  pointer-events: none;
  transition: all var(--transition-normal);
}

.label-highlighted {
  fill: var(--gray-900);
  font-weight: 600;
}

.axis-label {
  fill: var(--gray-600);
  font-size: 14px;
  font-weight: 600;
}

.model-legend {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.9rem;
  color: var(--gray-600);
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.hover-info {
  background: var(--gray-900);
  color: white;
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  margin: var(--space-lg) auto;
  max-width: 400px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.hover-info h4 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1.1rem;
}

.hover-info p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.ability-explanation {
  max-width: 1000px;
  margin: 0 auto;
}

.explanation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.explanation-card {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: all var(--transition-normal);
}

.explanation-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: var(--space-md);
}

.explanation-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--space-md);
}

.explanation-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.explanation-card li {
  padding: var(--space-sm) 0;
  color: var(--gray-600);
  position: relative;
  padding-left: var(--space-lg);
}

.explanation-card li::before {
  content: '•';
  color: var(--primary-blue);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.key-insight {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  border: 1px solid #f59e0b;
  text-align: center;
}

.key-insight h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #92400e;
  margin-bottom: var(--space-md);
}

.key-insight p {
  color: #78350f;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.key-insight strong {
  color: #92400e;
  font-weight: 700;
}

@media (max-width: 768px) {
  .model-title {
    font-size: 2rem;
  }
  
  .model-subtitle {
    font-size: 1rem;
  }
  
  .model-chart {
    padding: var(--space-md);
  }
  
  .model-legend {
    flex-direction: column;
    align-items: center;
  }
  
  .explanation-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style> 