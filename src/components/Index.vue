<template>
  <div>
    <h3>数据的增删改查</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" width="100px" align="center">
      </el-table-column>
      <el-table-column label="姓名" prop="name" width="100px" align="center">
      </el-table-column>
      <el-table-column label="地址" prop="address" width="400px" align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
      <el-table-column label="修改" width="300px" align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div><button @click="addfn">增加新用户</button></div>
    <!-- 增加的弹窗 -->
    <!-- <el-dialog title="收货地址" :visible.sync="increnmentform">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible">取 消</el-button>
        <el-button type="primary" @click="addconfirmfn">确 定</el-button>
      </div>
    </el-dialog> -->
    <myDialog @a="confirmfn" :wid="formLabelWidth" :val="form" :flag="dialogFormVisible"></myDialog>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import myDialog from '@/components/myDialog.vue'
import instance from "@/api/api";
export default {
  name: "Index",
  components: { myDialog },
  data() {
    return {
      search: "",
      tableData: [],
      dialogFormVisible: false,//表单的显示隐藏
      form: {
        date: null,
        index: 0,
        name: "",
        address: ""
      },//表单的内容
      formLabelWidth: "120px",
      increnmentform: false, //增加||修改
      addform: {
        // 增加表单的绑定数据
        date: '',
        name: '',
        address: '',
      }
    };
  },
  created() {
    this.getall()
  },
  methods: {
    addFormVisible() { },
    addconfirmfn() {
      this.incrementfn().then(() => {
        this.$message({
          type: "success",
          duration: 2000,
          message: "添加成功!",
        });
      }).catch(() => {
        //取消
        this.$message({
          type: "info",
          message: "添加失败",
        });
      });
    },
    //请求数据业务
    async getall() {
      let { data } = await instance.get("/all");
      this.tableData = data.tabledata
    },
    // 增加业务
    addfn() {
      this.increnmentform = true
    },
    async incrementfn() {
      let { date, name, address } = this.addform
      let { data } = await instance.get("/add", { date, name, address });
    },
    // 删除业务
    handleDelete(scope) {
      this.$confirm("确定删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //确定
        this.deletefn(scope.$index).then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        });
      }).catch(() => {
        //取消
        this.$message({
          type: "info",
          message: "已取消删除",
        });
      });
    },
    async deletefn(id) {
      let { data } = await instance.delete('/delete', { params: { id } })
      this.getall();
    },
    // 确定修改||增加
    confirmfn() {
      this.dialogFormVisible = false
      this.form.data = dayjs(this.form.date).format("YYYY-MM-DD")
      this.updatefn()
    },
    // 修改业务
    handleEdit(scope) {
      this.form = scope.row
      this.dialogFormVisible = true
    },
    async updatefn() {
      let { date, name, address } = this.from;
      let { data } = await instance.put('/update', { date, name, address })
      // put与post类似
    },
  },
  watch:{
    dialogFormVisible(a,b){
      console.log(a)
    }
  }
};
</script>
<style lang="sass" scoped>
</style>