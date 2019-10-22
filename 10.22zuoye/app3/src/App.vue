<template>
	<div id="app">
		<div style="min-height: 50px;background: #CCCCCC;">
			<nav_t :boxs='arr'></nav_t>
		</div>
		<div style="min-height: 500px;">
			<router-view></router-view>
		</div>
		<div style="min-height: 150px;background: #CCCCCC;"></div>
	</div>
</template>

<script>
	import nav_t from './c/nav.vue'
	export default {
		name: 'app',
		components:{
			nav_t
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				arr:[{
						title: '首页',
						path: '/'
					},
					{
						title: '产品',
						path: '/no2'
					}, {
						title: '新闻',
						path: '/no3'
					},
					{
						title: '联系我们',
						path: '/no4'
					}
				]
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>