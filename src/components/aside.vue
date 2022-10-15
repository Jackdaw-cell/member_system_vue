<template>
    <div>
        <el-row class="tac" >
          <h1>D27</h1>
            <el-menu
                :router="true"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                </el-submenu>
                <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">会员等级</span>
                </el-menu-item>
                <el-menu-item index="/memberLevelCredential" >
                <i class="el-icon-document"></i>
                <span slot="title">会员权益</span>
                </el-menu-item>
            </el-menu>
        </el-row>
    </div>
  </template>
  <script>
    export default {
        name: 'aside',
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>
  <style scoped>
    *{
      background-color: #282e5a;
      color: white;
    }
</style>