<template>
  <div class="hello">
    <div class="filter-area">
    <div class="filter-note">筛选</div>
    <el-row type="flex" justify="start" :gutter="20" class="filter">
      <el-col :span="8" >
        <div class="filter-section">
          <span class="filter-date-info">选择日期</span>
          <el-date-picker
            v-model="time"
            @change="handleTimeChange"
            type="datetime"
            size="mini"
            :picker-options="pickerOptions"
            placeholder="选择日期时间"
            default-time="12:00:00"
            class="filter-input"
            >
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="filter-section">
        <span class="filter-date-info">每页数量</span>
        <el-input class="filter-input" v-model.number="pageSize" size="mini" width="220" type="number" placeholder="请输入内容" @change="handlePageSizeChange"></el-input>
      </div>
      </el-col>
      <el-col :span="8">
      </el-col>
    </el-row>
    </div>
    <el-table
    v-loading="loading"
    :data="tableData"
    border
    stripe
    style="width: 920px;margin: 0 auto;">
      <el-table-column
        prop="rank"
        label="排名"
        width="50"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="s_time"
        label="创建时间"
        width="120"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="img_url"
        label="首图"
        width="170"
        align="center"  >
        <template slot-scope= "scope">
           <el-image :src="scope.row.img_url" lazy style= "width: 150px;height:150px"></el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="产品名称"
        width="200"
        align="center">
        <template slot-scope="scope">
           <a :href="scope.row.goods_url" alt= "" target="_blank">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="brand"
        label="品牌/商家"
        width="100"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="130"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="score"
        label="评分"
        width="50"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="questions"
        label="问题"
        width="80"
        align="center"
        >
      </el-table-column>
    </el-table>

    <el-pagination
    :page-size="pageSize"
    layout="prev, pager, next"
    :total="total"
    @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import {formatToYMDH} from '../common/utils/time.js'
import {getAmazonBestSellers} from '../api/amazon.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return {
      tableData:[],
      pageSize:10,
      pageIndex:1,
      time:new Date(),
      total:0,
      loading:false,
      pickerOptions:{
        disabledDate(time) {
            return time.getTime() > Date.now();
          }
      }
    }
  },
  mounted: function (){
    this.init()
  },
  methods:{
    init(){
      this.getList()
    },
    getList(){
      this.loading = true
      const sendData = {
        time:formatToYMDH(this.time),
        page_index:this.pageIndex,
        page_size:this.pageSize
      }
      getAmazonBestSellers(sendData).then(res=>{
        const data = res.data;
        this.tableData = [...data.goods_info]
        this.total = data.total
        this.handleBrand()
        this.loading = false
      })
    },
    handleBrand(){
      this.tableData.forEach((item)=>{
        item.brand = item.brand.indexOf('Brand') == -1 ? item.brand.replace('Visit the ', '').replace(' Store', '') : item.brand.replace('Brand: ', '')
        if(item.price==='[]') {
          item.price = '--'
        }
        else{
          const prices = item.price.split('\'')
          item.price = prices.length > 3 ? `${prices[1].split('$')[1]}~${prices[3].split('$')[1]}` : `${prices[1].split('$')[1]}`
        }
      })
    },
    handleCurrentChange(e){
      this.pageIndex = e
      this.getList()
    },
    handleTimeChange(){
      if(!this.time) this.time = formatToYMDH(new Date())
      this.getList()
    },
    handlePageSizeChange(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  align-items: center;
}
.filter-area{
  background: #f5f5f5;  
  padding: 20px 0;
  margin-left: 40px;
  width: 920px;
  margin: 0px auto;
}
.filter-note{
  text-align: left;
  margin-left: 25px;
  margin-bottom: 10px;
}
.filter{
  margin-bottom: 40px;
}
.filter span{
  font-size: 16px;
}
.filter-input{
  display: inline-block;
  width: 180px;
}
.filter-section .el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 180px
}
.filter-input > input{
  display: inline-block;
  width: 180px;
}
.filter-input .el-input__inner{
  display: inline-block;
  width: 180px;
}
.time-picker{

}
</style>
