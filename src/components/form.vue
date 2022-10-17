
<template>
  <div style="text-align:left">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="7">
          <el-form-item v-model="ruleForm.levelName" label="会员等级名称">
            <el-input placeholder="请输入" v-model="ruleForm.levelName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="成长点满足">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <el-input v-model="ruleForm.expDemandStart" placeholder="下位"></el-input>
              </el-col>
              <el-col :span="3" style="margin-right: 5px;margin-left:5px"> <span style="color:white;">——</span></el-col>
              <el-col :span="6">
                <el-input v-model="ruleForm.expDemandEnd" placeholder="上位"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>

      <br>
      <el-row  type="flex" class="row-bg" justify="center">
        <el-col :span="10" :offset="0">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="2">
              <span style="color:#666773">上传徽章</span>
            </el-col>
            <el-col :span="1">
              <!-- on-success可以在上传成功可以得到响应体，指向绑定的回调函数function(response, file, fileList) -->
              <el-upload class="avatar-uploader" action="http://127.0.0.1:9090/file/upload" :show-file-list="true"
                :on-success="handleSuccessAvatar" :before-upload="beforeAvatarUpload">
                <!-- 这里的url都填写form.avatarUrl -->
                <img v-if="imageUrlAvatar" :src="imageUrlAvatar" class="avatar">
                <i v-else class=" avatar-uploader-icon el-icon-picture"></i>
              </el-upload>
            </el-col>
          </el-row>
          <br>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="2">
              <span style="color:#666773">上传背景</span>
            </el-col>
            <el-col :span="1">
              <el-upload class="avatar-uploader" action="http://127.0.0.1:9090/file/upload" :show-file-list="true"
                :on-success="handleSuccessBackground" :before-upload="beforeAvatarUpload">
                <!-- 这里的url都填写form.avatarUrl -->
                <img v-if="imageUrlBackground" :src="imageUrlBackground" class="avatar">
                <i v-else class=" avatar-uploader-icon el-icon-picture"></i>
              </el-upload>
            </el-col>
          </el-row>
          <br>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="7">
              <el-form-item label="设置为默认会员等级" prop="resource">
                <el-radio-group v-model="isDefault">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="7">
              <el-form-item label="权益选择" prop="resource">
                <el-button type="primary" >新建权益</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="9" :offset="2">
          <el-row type="flex" class="row-bg" justify="center" >
            <el-col :span="22"  >
                <el-image style="">
                  <div slot="error" class="image-slot demo-image__lazy" >
                    <img :src="imgUrlCard" style="width:100%"  lazy>
                  </div>
                </el-image>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <br>

      <br>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="7">
          <el-form-item>
            <el-container>
              <el-header style="color:aliceblue">普通权益</el-header>
              <el-main>
                <el-checkbox-group v-model="ruleForm.memberLevelCredentials" size="mini">
                  <el-checkbox :label=value v-for="(value,index) in credentialVip" :key="index">{{value.credentialsName}}</el-checkbox>
                </el-checkbox-group>
              </el-main>
            </el-container>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item>
            <el-container>
              <el-header style="color:aliceblue">会员权益</el-header>
              <el-main>
                <el-checkbox-group v-model="ruleForm.memberLevelCredentials" size="mini">
                  <el-checkbox  :label=value v-for="(value,index) in credentialCom" :key="index">{{value.credentialsName}}</el-checkbox>
                </el-checkbox-group>
              </el-main>
            </el-container>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="7">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  created() {
    request.get("http://127.0.0.1:9090/memberLevelCredential", {
      params: {
        pageNum: 1,
        pageSize: 9999,
        keyWord: ''
      }
    }).then(
      res => {
        res.data.forEach(item => {
          if (item.isVip == 0) {
            this.credentialCom.push(item)
          } else {
            this.credentialVip.push(item)
          }

        }); 
      }
    )
  },
  watch:{
    "isDefault"(newd,old) {
      if (newd=='是') {
        this.ruleForm.isDefault=1
      }else{
        this.ruleForm.isDefault=0
      }
    }
  },
  data() {
    return {
      credentialCom: [],
      credentialVip: [],
      imageUrlAvatar: '',
      imageUrlBackground: '', 
      imgUrlCard:"http://localhost:9090/file/f2c1d42c06c144f7ae02a59270a14707.jpg",
      isDefault:'是',
      ruleForm: {
        levelName:'',
        expDemandStart:0,
        expDemandEnd:0,
        isDefault:1,
        avatar:'',
        background:'',
        memberLevelCredentials: [],
      },
      rules: {
        levelName: [
          { required: true, message: '请输入会员', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        expDemandStart: [
          { required: true, message: '必填',  }
        ],
        expDemandEnd: [
          { required: true, message: '成长点数', trigger: 'change' }
        ],
        isDefault: [
          { type: 'array', required: true, message: '请选择是否显示', trigger: 'change' }
        ],
        avatar: [
          { type: 'String', required: true, trigger: 'change' }
        ],
        background: [
          { type: 'String', trigger: 'change' }
        ],
        credentialComChecked: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        credentialVipChecked: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.requestPost(this.ruleForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    requestPost(ruleForm){
        request.post("http://127.0.0.1:9090/memberLevel",ruleForm
        ).then(
          res=>{
            console.log("添加成功");
          }
        )
    },
    handleSuccessAvatar(response, file, fileList) {
      this.imageUrlAvatar=response
      this.ruleForm.avatar=response
    },
    handleSuccessBackground(response, file, fileList) {
      this.imageUrlBackground=response
      this.background=response
      this.ruleForm.background=response
    },
  }
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>