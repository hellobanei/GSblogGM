<template>
    <a-menu
      mode="inline"
      theme="red"
    >
      <a-menu-item key="home">
        <router-link :to="{name: 'home'}" style="text-decoration: none;">
          <span>Trang chủ</span>
        </router-link>
      </a-menu-item>
  
      <a-menu-item key="about">
        <router-link :to="{name: 'about'}" style="text-decoration: none;">
          <span>Tin tức & Giới thiệu</span>
        </router-link>
      </a-menu-item>
  
      <a-menu-item key="contact">
        <router-link :to="{name: 'contact'}" style="text-decoration: none;">
          <span>Liên hệ</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="login">
        <router-link :to="{name: 'login'}" style="text-decoration: none;">
          <span>LOGIN</span>
        </router-link>
      </a-menu-item>
      
    </a-menu>
  </template>