<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

// 添加点击页面关闭菜单的事件处理
function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement
  const mobileMenu = document.querySelector('.mobile-nav')
  const menuButton = document.querySelector('.mobile-menu-btn')
  
  if (
    isMobileMenuOpen.value && 
    mobileMenu && 
    menuButton && 
    !mobileMenu.contains(target) && 
    !menuButton.contains(target)
  ) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="main-header">
    <div class="container header-container">
      <div class="logo">
        <RouterLink to="/">元 Coding</RouterLink>
      </div>
      
      <!-- 桌面导航 -->
      <nav class="desktop-nav">
        <RouterLink to="/">首页</RouterLink>
        <!-- <RouterLink to="/core-concept">核心理念</RouterLink> -->
        <RouterLink to="/contributors">贵人</RouterLink>
        <RouterLink to="/case-library">案例库</RouterLink>
        <RouterLink to="/open-source">开源声明</RouterLink>
        <RouterLink to="/author">主理人故事</RouterLink>
        <RouterLink to="/contact">联系我们</RouterLink>
        <!-- <RouterLink to="/co-creation">共创计划</RouterLink> -->
        <!-- <RouterLink to="/community">社群</RouterLink> -->
      </nav>
      
      <!-- 移动端汉堡菜单按钮 -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div class="mobile-nav" :class="{ 'is-open': isMobileMenuOpen }">
      <RouterLink to="/" @click="closeMobileMenu">首页</RouterLink>
      <RouterLink to="/case-library" @click="closeMobileMenu">案例库</RouterLink>
      <RouterLink to="/contributors" @click="closeMobileMenu">贵人</RouterLink>
      <RouterLink to="/open-source" @click="closeMobileMenu">开源声明</RouterLink>
      <RouterLink to="/author" @click="closeMobileMenu">主理人故事</RouterLink>
      <RouterLink to="/contact" @click="closeMobileMenu">联系我们</RouterLink>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">
      <p>&copy; 2025 元 Coding | AI 编程实战手册 - 永久免费开源</p>
    </div>
  </footer>
</template>

<style>
.main-header {
  background-color: var(--dark-bg);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo a {
  font-size: 1.8rem;
  font-weight: bold;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.desktop-nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.desktop-nav a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding-bottom: 3px;
}

.desktop-nav a:hover {
  color: #4ade80;
}

.desktop-nav a.router-link-active {
  color: #4ade80;
  border-bottom: 2px solid #4ade80;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-menu-btn span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  background-color: var(--dark-bg);
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.mobile-nav a {
  color: #e2e8f0;
  text-decoration: none;
  padding: 1rem;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a.router-link-active {
  color: #4ade80;
  background-color: rgba(74, 222, 128, 0.1);
}

.mobile-nav.is-open {
  padding: 0.5rem 0;
  max-height: 300px;
}

footer {
  background-color: var(--dark-bg);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
  color: #e2e8f0;
  padding: 2rem 0;
  /* margin-top: 2rem; */
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .logo {
    margin: 0;
  }
}
</style>
