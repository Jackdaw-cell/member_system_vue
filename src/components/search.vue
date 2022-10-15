<template>    
    <div>
        <el-input  placeholder="请输入内容" v-model="keyWord"  class="input-with-select">
              <el-button @click="findByKey()" slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
    data() {
        return {
        input1: '',
        keyWord:'',
        }
    },
    props:{
      needing_attr:{type:Object,require:true}
    },
    methods: {
        findByKey(){
          this.needing_attr.stated.commit(this.needing_attr.spaceName+'setKeyWord',this.keyWord);
          this.needing_attr.stated.commit(this.needing_attr.spaceName+'setPageNum',1)  
        }
    },
}
</script>