<template>
  <el-container style="height:1000px">
    <div>
        <el-aside  width="200px">
          <vaside></vaside>
        </el-aside>
    </div>
    <el-container>  
        <el-header style="height: 100px;text-align: right; font-size: 12px">
          <vheader ></vheader>
        </el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12" style="text-align:left"> <vtag></vtag></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><h1 style="color:white;text-align:left;font-size: 30px;margin: 20px;">新建会员等级</h1></el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" style="text-align:left">
                      <router-link active-class="active" to="/"><el-button type="primary" >返回</el-button></router-link>
                </el-col>
            </el-row>
            <br>
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="24"><vform style="background-color:#41497d;padding:50px"></vform></el-col>
            </el-row>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import vaside from '@/components/aside.vue'
import vtag from '@/components/tag.vue'
import vheader from '@/components/header.vue'
import vtable from '@/components/table.vue'
import vdelete from '@/components/deleteAlert.vue'
import vform from '@/components/form.vue'
import vpage from '@/components/page.vue'
import vsearch from '@/components/search.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      store:{
        // store对象，用于调用方法
        // spaceName 命名空间
        stated:this.$store,
        spaceName:'memberLevel/',
        // state.包对象，用于访问state属性
        module:this.$store.state.memberLevel
      },
      requestd:{
        url:'http://127.0.0.1:9090/memberLevel'
      }
    }
  },
  components: {
    vaside,
    vtag,
    vheader,
    vtable,
    vdelete,
    vform,
    vpage,
    vsearch
  },
  methods: {
  },
}
</script>
<style>
  *{
    box-sizing: border-box;
    margin: 0;
  }
  .el-header, .el-footer {
    background-color: #292f5b;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: white;
    background-color: #282e5a;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #353f6f;
    color: #333;
    text-align: center;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>