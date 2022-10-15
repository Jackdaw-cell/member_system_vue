<template>
    <div>
        <div class="block">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5,10,20]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
          </el-pagination>
        </div>
    </div>
    
  </template>
  <script>
    export default {
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.needing_attr.stated.commit(this.needing_attr.spaceName+'setPageSize',val)
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.needing_attr.stated.commit(this.needing_attr.spaceName+'setPageNum',val)
        }
      },
      mounted() {
		},
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 1,
        total:10,
      };
    },
    props:{
      needing_attr:{type:Object,require:true}
    },
      computed: {
        total_change() { 
          return this.needing_attr.module.total;
        }
      },
      watch:{
        total_change:function(newd){
            this.total=newd
          }
      }
    }
  </script>