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
            <el-col :span="12"> <vtag></vtag></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><h1 style="color:white;text-align:left;font-size: 30px;margin: 20px;">用户权益</h1></el-col>
          </el-row>
    
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6">
                      <el-button-group>
                      <vaddForm></vaddForm>
                      <vdelete></vdelete>
                    </el-button-group>
                </el-col>
                <el-col :span="6"><vsearch style="display: inline-block;" :needing_attr="store"></vsearch></el-col>
            </el-row>
                <br>
              <el-row type="flex" class="row-bg" justify="space-around">
                <!-- 传入$store对象、请求url、字段名称 -->
                <el-col><vtable :column_key="column_key" :needing_attr="store" :requestd="requestd"></vtable></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="8">
                  <!-- 传入$store对象 -->
                  <vpage :needing_attr="store"></vpage>
                </el-col>
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
import vaddForm from '@/components/addForm.vue'
import vpage from '@/components/page.vue'
import vsearch from '@/components/search.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      column_key: [
                    {prop:'credentialId',label:'权益ID'},
                    {prop:'isVip',label:'权益类型'},
                    {prop:'avatar',label:'图标'},
                    {prop:'credentialsName',label:'权益名称'},
                    {prop:'credentialsStatement',label:'权益说明'},
                    {prop:'isShow',label:'是否展示'},
                    {prop:'createTime',label:'创建时间'},
                    {prop:'option',label:'操作'},
                  ] ,
      store:{
        stated:this.$store,
        spaceName:'memberLevelCredential/',
        module:this.$store.state.memberLevelCredential
      },
      requestd:{
        url:'http://127.0.0.1:9090/memberLevelCredential',
        transd:function(res) {
                  res.data.forEach(function(item) {
                              if(item.isVip==0){item.isVip='会员'}
                              else item.isVip='普通'
                  })
                }
      }
    }
  },
  components: {
    vaside,
    vtag,
    vheader,
    vtable,
    vdelete,
    vaddForm,
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