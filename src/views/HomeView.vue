<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col>
            <el-menu default-active="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              background-color="#545c64" text-color="#fff" :collapse="iscollapse" active-text-color="#ffd04b">
              <el-menu-item index="/home" route="/index">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-menu-item index="/home/document">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>

              <el-menu-item index="/home/lead">
                <i class="el-icon-menu"></i>
                <span slot="title">引导页</span>
              </el-menu-item>

              <!-- 二级菜单 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限测试页</span>
                </template>
                <el-menu-item index="4-1">页面权限</el-menu-item>
                <el-menu-item index="4-2">指令权限</el-menu-item>
                <el-menu-item index="4-3">角色权限</el-menu-item>
              </el-submenu>
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">图标</span>
              </el-menu-item>

              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>组件</span>
                </template>
                <el-menu-item index="6-1">页面权限</el-menu-item>
                <el-menu-item index="6-2">指令权限</el-menu-item>
                <el-menu-item index="6-3">角色权限</el-menu-item>
              </el-submenu>
              <!--  -->
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>图表</span>
                </template>
                <el-menu-item index="7-1">页面权限</el-menu-item>
                <el-menu-item index="7-2">指令权限</el-menu-item>
                <el-menu-item index="7-3">角色权限</el-menu-item>
              </el-submenu>
              <!--  -->
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>路由嵌套</span>
                </template>
                <el-menu-item index="8-1">页面权限</el-menu-item>
                <el-menu-item index="8-2">指令权限</el-menu-item>
                <el-menu-item index="8-3">角色权限</el-menu-item>
              </el-submenu>
              <!--  -->
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>tab</span>
                </template>
                <el-menu-item index="9-1">页面权限</el-menu-item>
                <el-menu-item index="9-2">指令权限</el-menu-item>
                <el-menu-item index="9-3">角色权限</el-menu-item>
              </el-submenu>
              <!--  -->
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>综合实例</span>
                </template>
                <el-menu-item index="10-1">页面权限</el-menu-item>
                <el-menu-item index="10-2">指令权限</el-menu-item>
                <el-menu-item index="10-3">角色权限</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view>
          <el-header>header</el-header>
          <el-main>main</el-main>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import instance from "@/api/api.js"
export default {
  name: 'homeview',
  data() {
    return {
      iscollapse: false,//aside是否折叠
    }
  },
  created() {
    // /api/aa   ==  127.0.0.1:2222/aa
    // instance.get("/aa").then(res=>{
    //   console.log(res)
    // })
    instance.post("/aa", { name: 1 }).then(res => {
      // console.log(res)
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  .el-aside {
    padding: 0;
    overflow: visible;
  }
}

.is-opened {
  div {
    background-color: azure !important;
    color: aqua !important;

    i {
      color: #fff;
    }
  }
}
</style>