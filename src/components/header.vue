<template>
    <div >
        <el-row :gutter="0"  >
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="1">
                  <div style="display:flex">
                        <a style="margin:5px" href=""><i class="el-icon-s-unfold" style="flex:1"></i></a>
                        <a style="margin:5px" href=""><i class="el-icon-c-scale-to-original" style="flex:1"></i></a>
                        <a style="margin:5px" href=""><i class="el-icon-refresh" style="flex:1"></i></a>
                    </div> 
            </el-col>
            <el-col :span="6">
                  <div  style="display:inline-block;border-left: 1px solid black;margin-left: 20px;padding-left: 20px;">
                      <el-breadcrumb separator="/">
                          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                      </el-breadcrumb>
                  </div>
            </el-col>
            <el-col :span="6">
                      <div class="block">
                        <el-cascader
                          v-model="value"
                          :options="options"
                          @change="handleChange"></el-cascader>
                      </div>
            </el-col>
            <el-col :span="6">
                    <a style="margin:5px" href=""><i class="el-icon-search"></i></a>
                    <a style="margin:5px" href=""><i class="el-icon-bell"></i></a>
                    <a style="margin:5px" href=""><i class="el-icon-refresh"></i></a>
                    <el-avatar style="position:relative;top:9px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-col>

          </el-row> 
        </el-row>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

}
</script>
<style scoped>
    *{
        background-color: #292f5b;
        color:white
    }
</style>