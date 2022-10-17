<template>
    <div >
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        border
        style="width: 100%;background-color: #2a315d;">
        
        <el-table-column
        :prop=value.prop
        sortable
        :label=value.label
        v-for="(value,index) in column_key" :key="index"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    </div>
</template>


<script>
import request from '@/utils/request'
  export default {
    // 外部只需要传入字段column_key
    //          传入nedding_attr数据就行了
    props:{
      // 传入表格字段
        column_key:{type:Array,require:true},
        // 传入仓库对象（仓库对象$store和$store.包对象）
        needing_attr:{type:Object,require:true},
        // 传入请求必须的参数（url，处理res的回调函数）
        requestd:{type:'Object',require:true}
    },
    data() {
      return {
        tableData:this.needing_attr.module.data,
        pageNum:this.needing_attr.module.pageNum,
        pageSize:this.needing_attr.module.pageSize
      };
    },
    computed: {
        pageNum_change() {
          return this.needing_attr.module.pageNum;
        },
        pageSize_change() {
          return this.needing_attr.module.pageSize;
        },
        keyWord_change() {
          return this.needing_attr.module.keyWord;
        }
      },
      watch:{
        pageNum_change:function(newd,old){
            this.pageNum=newd
            this.requestGet()
          },
          pageSize_change:function(newd,old){
            this.pageSize=newd
            this.requestGet()
          },
          keyWord_change:function(newd,old){
            this.keyWord=newd
            this.requestGet()
          }
      },
    mounted() {  
    },
    created(){
        this.requestGet() 
      },
    methods: {
      // 请求返回表格
      requestGet(){
        request.get(this.requestd.url,{
          params:{
            pageNum:this.needing_attr.module.pageNum,
            pageSize:this.needing_attr.module.pageSize,
            keyWord:this.needing_attr.module.keyWord
          }
        }).then(
          res=>{
            if (this.requestd.transd) {
              this.requestd.transd(res)
            }
            this.needing_attr.stated.commit(this.needing_attr.spaceName+'setData',res.data)
            this.tableData=this.needing_attr.module.data
            this.needing_attr.stated.commit(this.needing_attr.spaceName+'setTotal',res.total)
            }
        )
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
</script>

<style>
.el-table{
  background: #323b69;
}
  .el-table .warning-row {
    background: #323b69;
  }

  .el-table .success-row {
    background: white;
  }
</style>