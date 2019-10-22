<template>
	<div>
		<div style="margin-top: 60px;">
		<h1>我是no2的二级路由</h1>
		<div class="box">
			<div class="top">
				<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
					<el-button>上左</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
					<el-button>上边</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
					<el-button>上右</el-button>
				</el-tooltip>
			</div>
			<div class="left">
				<el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
					<el-button>左上</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
					<el-button>左边</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
					<el-button>左下</el-button>
				</el-tooltip>
			</div>

			<div class="right">
				<el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
					<el-button>右上</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
					<el-button>右边</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
					<el-button>右下</el-button>
				</el-tooltip>
			</div>
			<div class="bottom">
				<el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
					<el-button>下左</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
					<el-button>下边</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
					<el-button>下右</el-button>
				</el-tooltip>
			</div>
		</div>
		</div>
		<div v-for="i in songlist">
			{{i}}
		</div>
		<div style="margin-top: 60px;">
			
			<a href="#/no2/no2child/no2sun">点击去no2的三级路由</a>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'no2child',
		data(){
			return {
				songlist:''	
			}
		},
		created(){
			this.$http.jsonp('https://c.y.qq.com/soso/fcgi-bin/client_search_cp?g_tk=5381&p=1&n=20&w=' + this.$route.params.value + '&format=jsonp&jsonpCallback=callback&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&remoteplace=txt.yqq.song&t=0&aggr=1&cr=1&catZhida=1&flag_qc=0', {
								jsonpCallback: 'callback'
							}).then((data) => {
								this.songlist = data.data.data.song.list
								console.log(data.data.data.song.list)
							})
		},
		watch:{
						'$route.params' (a) {
							if(this.$route.params.value) {
								this.$http.jsonp('https://c.y.qq.com/soso/fcgi-bin/client_search_cp?g_tk=5381&p=1&n=20&w=' + this.$route.params.value + '&format=jsonp&jsonpCallback=callback&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&remoteplace=txt.yqq.song&t=0&aggr=1&cr=1&catZhida=1&flag_qc=0', {
								jsonpCallback: 'callback'
							}).then((data) => {
								this.songlist = data.data.data.song.list
								console.log(data.data.data.song.list)
							})
							}
						}
					}
	}
</script>

<style>
	.box {
		width: 800px;
		.top {
			text-align: center;
		}
		.left {
			float: left;
			width: 60px;
		}
		.right {
			float: right;
			width: 60px;
		}
		.bottom {
			clear: both;
			text-align: center;
		}
		.item {
			margin: 4px;
		}
		.left .el-tooltip__popper,
		.right .el-tooltip__popper {
			padding: 8px 10px;
		}
	}
</style>