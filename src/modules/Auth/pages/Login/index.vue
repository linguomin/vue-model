<template>
  <div class="login">
    <header>
      <switch-lang />
    </header>
    <main class="login_container">
      <div class="login_header">{{$t('login.title')}}</div>
      <el-form
        :rules="loginRules"
        :model="loginForm"
        ref="loginForm"
        label-width="80px"
        label-position='left'
        hide-required-asterisk
      >
        <el-form-item
          :label="$t('login.form.username')"
          prop="username"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('login.form.password')"
          prop="password"
        >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="login_footer">
        <div class="login_footer_forgot">{{$t('login.forgot')}}</div>
        <el-button
          class="login_footer_btn"
          @click="login"
        >{{$t('login.btnText')}}</el-button>
      </div>
    </main>
    <footer>{{$t('login.footer')}}</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import cookies from '@/utils/util.cookies';
import cache from '@/utils/util.cache';

@Component
export default class Login extends Vue {
  loginForm: any = {
    username: '',
    password: '',
  };

  loginRules: any = {
    username: [
      {
        required: true,
        validator: this.validateName,
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        validator: this.validatePwd,
        trigger: 'blur',
      },
    ],
  };

  // 用户名校验
  validateName(rule, value, callback) {
    const val: any = this.$t('login.formRules.username');
    if (!value) {
      return callback(new Error(val));
    } else {
      return callback();
    }
  }

  // 密码校验
  validatePwd(rule, value, callback) {
    const val: any = this.$t('login.formRules.password');
    if (!value) {
      return callback(new Error(val));
    } else {
      return callback();
    }
  }

  // 当语言改变时已有的表单验证更新语言
  @Watch('$i18n.locale')
  listenLang(val) {
    const ref: any = this.$refs.loginForm;
    ref.fields.forEach(item => {
      if (item.validateState === 'error') {
        ref.validateField(item.labelFor);
      }
    });
  }

  login() {
    const ref: any = this.$refs.loginForm;
    ref.validate(valid => {
      if (valid) {
        cookies.set('accessToken', 'test model');
        cache.sessionSet('userInfo', 'test model');
        this.$router.replace('/Demo/demo');
      } else {
        return false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
