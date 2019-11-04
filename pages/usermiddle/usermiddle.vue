<template>
	<view class="usermiddle-box">
		<!-- 个人中心头部 -->
		<view class="usermiddle-header" @click="gouserinfo">
			<view class="middle-left">
				<view class="user-header-img">
					<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3343968209,3672130651&fm=26&gp=0.jpg" mode=""></image>
				</view>
				<view class="user-header-userinfo">
					<p classu="user-phone">13845785678</p>
				</view>
			</view>
			<view class="middle-tight"></view>
		</view>
		
		<!-- 个人中心menu -->
		<view class="user-but-list" >
			<ul>
				<li @click="gomyorder">
					<view>
						<text class="user-list-name">我的订单</text>
					</view>
				</li>
				<li>
					<view>
						<text class="user-list-name">关于我们</text>
					</view>
				</li>
			</ul>
		</view>
	
		<!-- 退出登录but -->
		<view class="clear-login">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gouserinfo(){
				uni.navigateTo({
				    url: '../userinfo/userinfo'
				});
			},
			gomyorder(){
				uni.navigateTo({
				    url: '../order/order'
				});
			}
		}
	}
</script>

<style lang="scss">
	.usermiddle-box{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		.usermiddle-header{
			width: 100%;
			height:176rpx;
			padding:18rpx 30rpx 18rpx 20rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background:rgba(255,255,255,1);
			box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.15);
			.middle-left{
				display: flex;
				.user-header-img{
					width:140rpx;
					height:140rpx;
					border-radius:50%;
					margin-right: 32rpx;
					image{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.user-header-userinfo{
					.user-phone{
						font-size:36rpx;
						font-family:SimHei;
						color:rgba(51,51,51,1);
						line-height:76rpx;
					}
				}
			}
		}
		.user-but-list{
			width: 100%;
			margin-top: 25rpx;
			background: #FFFFFF;
			ul{
				width: 100%;
				padding-left: 30rpx;
				box-sizing: border-box;
				li{
					width: 100%;
					height: 85rpx;
					display: flex;
					justify-content: space-between;
					padding-right: 30rpx;
					border-bottom: 1rpx solid #DDDDDD;
					align-items: center;
					&:last-child{
						border: 0;
					}
					.user-list-name{
						font-size:28rpx;
						font-family:SimHei;
						color:rgba(51,51,51,1);
					}
				}
			}
		}
		.clear-login{
			width: 100%;
			height:76rpx;
			background:rgba(3,133,119,1);
			text-align: center;
			font-size:32rpx;
			font-family:SimHei;
			color:rgba(255,255,255,1);
			line-height:76rpx;
			position: fixed;
			left: 0;
			bottom: 72rpx;
		}
	}
</style>
