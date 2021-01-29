<template>
	<el-container class="site-container">
		<el-header class="head" style="height: 8%;">
			<el-row>
				<el-col :span="24">
					<div class="navigation-bar">
						<NavigationBar />
					</div>
				</el-col>
			</el-row>
		</el-header>
		<el-container class="content-container">
			<el-aside width="200px">
				<SideBar />
			</el-aside>
			<el-main>
				<MainContent />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import NavigationBar from './NavigationBar'
import SideBar from './SideBar'
import MainContent from './MainContent'
export default {
  name: 'Index',
  components:{
	NavigationBar,
	SideBar,
	MainContent
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.el-container{
	
}
.el-header{
	border-bottom: 1px solid #eeeeee;
	background-color: #333333;
	color: #ffffff;
}
.el-aside{
	margin-top: -1px;
	padding: 40px 20px;
	background-color: #333333;
	border-right: 1px solid #eeeeee;
}
.el-main{
	padding: 40px 20px;
}
.site-container{
	height: 100%;
}
.head{
	height: 10%;
}
.content-container{
	height: 92%;
}
</style>