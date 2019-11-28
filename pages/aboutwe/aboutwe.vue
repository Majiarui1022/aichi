<template>
	 <view class="aboutwe-box">
		<view class="scroll-y">
			<view class="text-box">
				<text>{{aboutword}}</text>
				<!-- <text v-html="aboutword"></text> -->
			</view>
		</view>
	</view>
	 
</template>

<script>
	import requireurl from '../../requist/requist.js'
	export default {
		data() {
			return {
				aboutword:''
			}
		},
		onLoad() {
			
		},
		methods: {
			aboutcb(e){
				if(e.statusCode === 200){
					console.log(e)
					this.aboutword = e.data.message
				}else{
					console.log('调用关于我们失败')
				}
				
			}
		},
		mounted() {
			requireurl.getData("/applet/about_us/",this.aboutcb,this.file)
		}
	}
</script>

<style lang="scss">
	.aboutwe-box{
		width: 100%;
		height: 100%;
		.scroll-y{
			width: 100%;
			height: 100%;
			.text-box{
				width: 100%;
				height: 100%;
				padding: 28rpx 30rpx;
				box-sizing: border-box;
				text{
					width: 100%;
					height: 100%;
					font-size:26rpx;
					font-family:SimHei;
					display: block;
					color:rgba(51,51,51,1);
					line-height:46rpx;
				}
			}
		}
	}
</style>
