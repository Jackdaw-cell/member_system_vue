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
            <el-col :span="8"><h1 style="color:white;text-align:left;font-size: 30px;margin: 20px;">用户权益</h1></el-col>
          </el-row>
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" style="text-align:left">
                      <!-- 增加 -->
                      <router-link active-class="active" to="/memberLevelAdd"><el-button type="primary" >新增</el-button></router-link>
                      <!-- 删除 -->
                      <vdelBtn :needing_attr="store" :requestd="requestd"></vdelBtn>
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
import vdelBtn from '@/components/deleteAlert.vue'
import vpage from '@/components/page.vue'
import vsearch from '@/components/search.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      column_key: [
                    {prop:'levelName',label:'等级名称'},
                    {prop:'credentialComon',label:'普通权益'},
                    {prop:'credentialVip',label:'会员权益'},
                    {prop:'createId',label:'创建人'},
                    {prop:'expDemand',label:'满足经验值'},
                    {prop:'isShow',label:'是否展示'},
                  ] ,
      store:{
        // store对象，用于调用方法
        // spaceName 命名空间
        stated:this.$store,
        spaceName:'memberLevel/',
        // state.包对象，用于访问state属性
        module:this.$store.state.memberLevel
      },
      requestd:{
        url:'http://127.0.0.1:9090/memberLevel',
        transd:function(res) {
                  res.data.forEach(function(item) {
                      // 处理经验值拼接
                      item.expDemand=item.expDemandStart+'-'+item.expDemandEnd
                      let comStr=''
                      let vipStr=''
                      item.memberLevelCredentials.forEach(function(credential){
                        if (credential.isVip==0) {
                            comStr+=credential.credentialsName
                        }else if (credential.isVip==2) {
                            vipStr+=credential.credentialsName
                        }
                      })
                      item.credentialComon=comStr
                      item.credentialVip=vipStr
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
    vdelBtn,
    // vaddBtn,
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