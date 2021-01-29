<template>
	<div class="chart" id="chart">
		<div id="comments" style="width: 600px;height:400px;"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
export default {

  name: 'ProductTrends',

	data () {
		return {
			option:{
				title: {
					text: '评价趋势'
				},
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					smooth: true
				}]
			}
		}
	},
	mounted(){
		console.log(echarts)
		var chartDom = document.getElementById('comments');
		const myChart = echarts.init(chartDom); //
		this.option && myChart.setOption(this.option);
	}
}
</script>

<style lang="css" scoped>
</style>