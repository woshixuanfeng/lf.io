<template>
	<div>
<el-steps :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		<a href="#/no2/no2child">
			点击去no2的二级路由
		</a>
		<input type="text" @keyup.enter="fn" v-model="value1"/>
		<div>
			<router-view></router-view>
		</div>
	</div>
	
</template>

<script>
	 export default {
    data() {
      return {
        active: 0,
        value1:''
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      fn(){
      	let list = this.value1
      	location.href=`#/no2/no2child/${list}`
      },
    }
  }
</script>

<style>
</style>