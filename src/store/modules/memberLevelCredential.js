export default{
    // 等级模块
    // 访问属性时：  原来  this.$store.state.属性；  现在 this.$store.state.模块名称.属性
    //注册 action、mutations、getters（默认情况下，action和mutations是注册在全局的，要加命名空间namespaced使其私有化）
    //外部访问方法：  原来  this.$store.commit('方法名',value)  现在 this.$store.commit('模块名称/方法名',value)
        namespaced:true,
        actions:{
            setPageNum(context,value){
                context.commit('setPageNum',value)
            },
            setPageSize(context,value){
                context.commit('setPageSize',value)
            },
            setKeyWord(context,value){
                context.commit('setKeyWord',value)
            },
            setTotal(context,value){
                context.commit('setTotal',value)
            }
        },
        mutations:{
            setPageNum(state,value){
                state.pageNum=value
            },
            setPageSize(state,value){
                state.pageSize=value
            },
            setKeyWord(state,value){
                state.keyWord=value
            },
            setTotal(state,value){
                state.total=value
            },
            setData(state,value){
                state.data=value
            },
        },
        state:{
            // 表格内容公共属性
            tableData: [],
            pageNum:1,
            pageSize:5,
            keyWord:'',
            total:0,
            data:{},
        }
    
}