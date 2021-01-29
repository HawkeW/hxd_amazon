<template>
	<div class="main">
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
	min-width: 951px;
}
.main-view{
	margin-top: 20px;
}
</style>