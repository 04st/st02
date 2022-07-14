<!-- 特别封装
 -->
 <template>
    <div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
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
        </el-dialog>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    name: 'add',
    props: ['wid', 'val', 'flag'],
    created() {
        this.formLabelWidth = this.wid
        this.form = this.val
        this.dialogFormVisible = this.flag
    },
    date() {
        return {}
    },
    methods: {
        confirmfn() {
            this.dialogFormVisble = false
            this.form.data = dayjs(this.form.date).format("YYYY-MM-DD")
            this.updatefn()
        },
    },
}
</script>
 <style lang="scss" scoped>
 </style>