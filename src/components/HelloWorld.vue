<template>
  <div class="hello">
    <el-table
    :data="tableData"
    height="800"
    border
    stripe
    style="width: 780px;margin: 0 auto;">
      <el-table-column
        prop="rank"
        label="排名"
        width="50">
      </el-table-column>
      <el-table-column
        prop="s_time"
        label="创建时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="img_url"
        label="首图"
        width="170">
        <template slot-scope= "scope">
           <img :src="scope.row.img_url" alt= "" style= "width: 150px;height:150px">
        </template>
      </el-table-column>
      <el-table-column
        prop="goods_url"
        label="产品链接"
        width="80">
        <template slot-scope="scope">
           <a :href="scope.row.goods_url" alt= "" target="_blank">点击跳转</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="brand"
        label="品牌/商家"
        width="100"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="130"
        >
      </el-table-column>
      <el-table-column
        prop="score"
        label="评分"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="questions"
        label="问题"
        width="80"
        >
      </el-table-column>
  </el-table>
  </div>
</template>

<script>
import res from '../mock/data.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return {
      tableData:[]
    }
  },
  mounted: function (){
    setTimeout(()=>{
      this.tableData = [...res.data.goods_info]
      this.handleBrand()
    },50)
  },
  methods:{
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
.hello > el-table{
  text-align: center;
}
el-table-column{
  text-align: center;
}
</style>
