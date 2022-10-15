<template> 
    <el-button type="primary" icon="el-icon-edit" @click="open">新增</el-button>
  </template>
  
  <script>
    import vform from './form.vue'
    export default {
      methods: {
        open() {        
          const h = this.$createElement;
          this.$msgbox({
            title: '消息',
            message: h('p', null, [,
              h(vform)
            ]),
            showCancelButton: false,
            showConfirmButton: false,
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          });
        }
      }
    }
  </script>