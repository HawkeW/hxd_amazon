<template>
	<div>
		<ul>
			<li>
				<router-link to="/best-sellers">
					<img src="../assets/amazon.png" class="icon">
					<span>亚马逊热卖</span>
				</router-link>
			</li>
			<li>
				<router-link to="/best-sellers">
					<img src="../assets/tools.png" class="icon">
					<span>常用工具</span>
				</router-link>
			</li>
			<li>
				<router-link to="/best-sellers">
					<img src="../assets/other.png" class="icon">
					<span>其他</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'SideBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
li > a{
	display: inline-block;
	background-color: #336699;
	border-radius: 20px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	color: #ffffff;
	margin-top: 20px;
}
.icon{
	float: left;
	width: 20px;
	height: 20px;
	padding:10px 0 10px 20px;
}
span{
	display: inline-block;
	width: 110px;
	text-align: left;
}
</style>