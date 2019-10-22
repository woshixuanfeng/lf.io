<template>
	<div>
		<ul id="nav">
			<li v-for="i in arr">
				<a :href="'#'+i.path">{{i.title}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['boxs'],
		data() {
			return {
				arr: this.boxs
			}
		}
	}
</script>

<style>
	#nav {
		list-style: none;
		overflow: hidden;
	}
	
	#nav li {
		float: left;
		line-height: 50px;
		padding: 0 10px;
	}
</style>