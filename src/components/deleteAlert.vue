<template>
    <el-button type="primary" icon="el-icon-delete" @click="open">删除</el-button>
  </template>
  
  <script>
  import request from '@/utils/request'
    export default {
      props:{
        needing_attr:{type:Object,require:true},
        requestd:{type:'Object',require:true}
    },
      methods: {
        open() {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log(this.needing_attr.module.multipleSelection);
            // request.delete(this.requestd.url,{
            //   params:{
                
            //   }
            // }).then(res=>{
            //   console.log("删除成功");
            // })
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
        }
      }
    }
  </script>