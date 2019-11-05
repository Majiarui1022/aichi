<template>
	<view class="successappointment-box">
		<view class="successappointment-pad">
			<image src="../../static/sj.png" class="success-successappointment-pad-image"></image>
			<text class="success-tit">预约成功</text>
			<text class="succss-num">预约编号：xxx500</text>
			<text class="success-content-row">即刻起您预约的电瓶将为您保留30分钟</text>
			<text class="success-content-row">若30分钟内未取电，预约自动取消（每天可预约三次）</text>
			<view class="success-back" @click="goindex">返回</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goindex(){
				uni.navigateTo({
				    url: '../index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	.successappointment-box{
		width: 100%;
		height: 100%;
		.successappointment-pad{
			width: 100%;
			height: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;
			.success-successappointment-pad-image{
				width:345rpx;
				height:391rpx;
				display: block;
				margin: 180rpx auto 0;
			}
			text{
				display: block;
				text-align: center;
			}
			.success-tit{
				font-size:36rpx;
				color:rgba(3,133,119,1);
				line-height:62rpx;
			}
			.succss-num{
				font-size:28rpx;
				color:rgba(102,102,102,1);
				line-height:56rpx;
				margin-top: 26rpx;
			}
			.success-content-row{
				font-size:28rpx;
				color:rgba(102,102,102,1);
				line-height:34rpx;
			}
			.success-back{
				width:100%;
				height:80rpx;
				background:rgba(3,133,119,1);
				border-radius:40rpx;
				font-size:30rpx;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				text-align: center;
				margin-top: 124rpx;
			}
		}
	}
</style>
