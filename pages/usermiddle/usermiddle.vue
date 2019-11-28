<template>
	<view class="usermiddle-box">
		<!-- 个人中心头部 -->
		<view class="usermiddle-header" @click="gouserinfo">
			<view class="middle-left">
				<view class="user-header-img">
					<image :src="headerImg" mode=""></image>
				</view>
				<view class="user-header-userinfo">
					<p classu="user-phone">{{username}}</p>
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
				<li @click="goaboutwe">
					<view>
						<text class="user-list-name">关于我们</text>
					</view>
				</li>
			</ul>
		</view>
	
		<!-- 退出登录but -->
		<view class="clear-login" @click="callphone = true">退出登录</view>
		
		<!-- 提示框 -->
		<uni-popup :show="callphone" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip callphone">
				<view class="callphone-content">确定退出登录吗？</view>
				<view class="callphone-but-box">
					<view class="callphone-left-but" @click="clearLogin">确定</view>
					<view class="callphone-right-but" @click="callphone = false">取消</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
	  components: {uniPopup},
		data() {
			return {
				headerImg : uni.getStorageSync('storage_user').head_img_url,
				username : uni.getStorageSync('storage_user').nickname,
				callphone:false,
				type:'center'
			}
		},
		onShow(){
			setTimeout(()=>{
				console.log('onshow了')
				this.headerImg = uni.getStorageSync('storage_user').head_img_url
				this.username = uni.getStorageSync('storage_user').nickname 
			},500)
			
		},
		methods: {
			//个人信息
			gouserinfo(){
				uni.navigateTo({
				    url: '../userinfo/userinfo'
				});
			},
			//订单
			gomyorder(){
				uni.navigateTo({
				    url: '../order/order'
				});
			},
			//关于我们
			goaboutwe(){
				uni.navigateTo({
				    url: '../aboutwe/aboutwe'
				});
			},
			
			//退出登录
			clearLogin(){
				uni.removeStorageSync('storage_user');
				this.callphone = false
				uni.reLaunch({
				    url: '../index/index'
				});
			}
		},
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
		
		//退出登录
		.callphone{
			width:559rpx;
			height:269rpx;
			background:rgba(255,255,255,1);
			padding: 76rpx 50rpx 36rpx 50rpx;
			box-sizing: border-box;
			.callphone-content{
				font-size:28rpx;
				font-family:FZLanTingHeiS-R-GB;
				color:rgb(51, 51, 51);
				line-height:28rpx;
				margin-bottom: 38rpx;
				text-align: center;
			}
			.callphone-but-box{
				width: 100%;
				height: 58rpx;
				display: flex;
				justify-content: space-between;
				view{
					font-size:28rpx;
					font-family:SimHei;
					color:rgba(255,255,255,1);
					line-height:58rpx;
					text-align: center;
				}
				.callphone-left-but{
					width:180rpx;
					height:58rpx;
					background:rgba(3,133,119,1);
				}
				.callphone-right-but{
					width:180rpx;
					height:58rpx;
					background:#999999;
				}
			}
		}
	}
</style>
