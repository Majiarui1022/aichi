<template>
	<view class="login-box">
		<view class="login-pad-box">
			<text class="login-tit">登录</text>
			<text class="login-content">验证即登录，未注册将自动创建账号</text>
			<view class="pohone-box">
				 <view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}<image src="../../static/bottom.png" mode=""></image></view>
					</picker>
				</view>
				<view class="init-phone">
					<input class="uni-input" type="number" placeholder="这是一个数字输入框" maxlength="11"/>
				</view>
			</view>
			<view class="get-code-but" @click="goGetcode">获取验证码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['+87', '+88', '+89', '+90', '91', '+92','+100'],
				index: 0,
			}
		},
		methods: {
			 bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target)
				this.index = e.target.value
			},
			goGetcode(){
				uni.navigateTo({
					url:'../sendcode/sendcode'
				})
			}
		}
	}
</script>

<style lang="scss">
	.login-box{
		width: 100%;
		height: 100%;
		.login-pad-box{
			width: 100%;
			height: 100%;
			padding: 128rpx 20rpx 0;
			box-sizing: border-box;
			.login-tit{
				font-size:46rpx;
				font-weight:bold;
				color:rgba(3,133,119,1);
				display: block;
			}
			.login-content{
				font-size:26rpx;
				color:rgba(155,155,155,1);
				line-height:84rpx;
				margin-bottom: 58rpx;
				display: block;
			}
			.pohone-box{
				width: 100%;
				height:54rpx;
				padding: 0 10rpx;
				border-bottom: 1rpx solid #D8D8D8;
				display: flex;
				align-items: center;
				.uni-list-cell-db{
					width: 106rpx;
					height: 34rpx;
					color: #038577;
					font-size:30rpx;
					border-right: 1rpx solid #D8D8D8;
				}
				.uni-input{
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width:19rpx;
						height:10rpx;
						margin-left: 10rpx;
					}
				}
				.init-phone{
					width: calc(100% - 107rpx);
					height: 100%;
					input{
						width: 100%;
						height: 100%;
						padding-left: 32rpx;
						font-size:30rpx;
						color:#333333;
						line-height:34rpx;
						box-sizing: border-box;
						text-align: left;
						display: block;
						&:-ms-input-placeholder{
							color: #DDDDDD;
						}
					}
				}
			}
			.get-code-but{
				width: 100%;
				height: 80rpx;
				background:rgba(3,133,119,1);
				border-radius:40rpx;
				font-size:30rpx;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				margin-top: 64rpx;
				text-align: center;
			}
		}
	}
</style>
