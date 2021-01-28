<template>
	<div class="main">
		<h3>Best sellers in Electronics</h3>
		<router-view class="main-view"></router-view>
	</div>
</template>

<script>
export default {

  name: 'MainContent',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.main{
	margin-top: 20px;
}
h3{
	height: 40px;
	line-height: 40px;
}
.main-view{
	margin-top: 20px;
}
</style>