<template>
	<!-- 选择登录注册界面 -->
	<view class="select-login-box">
		<view class="select-login-pad">
			<view class="login-logo-image">
				<image src="../../static/mylogo.png" mode=""></image>
			</view>
			<view class="login-but">微信登录</view>
			<view class="login-phone-register">手机号码注册/登录</view>
			<view class="clear-login">取消登录</view>
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
			
		}
	}
</script>

<style lang="scss">
	.select-login-box{
		width: 100%;
		height: 100%;
		.select-login-pad{
			width: 100%;
			height: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;
			.login-logo-image{
				width:320rpx;
				height:192rpx;
				margin: 173rpx auto 0;
				image{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.login-but{
				width: 100%;
				height:80rpx;
				background:rgba(3,133,119,1);
				border-radius:40rpx;
				font-size:30rpx;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				text-align: center;
				margin-top:260rpx;
			}
			.login-phone-register{
				font-size:30rpx;
				color:rgba(51,51,51,1);
				line-height:30rpx;
				margin-top: 70rpx;
				margin-bottom: 73rpx;
				text-align: center;
			}
			.clear-login{
				font-size:26rpx;
				color:rgba(155,155,155,1);
				line-height:26rpx;
				text-align: center;
			}
		}
	}
</style>
