<template>
	<!-- 选择登录注册界面 -->
	<view class="select-login-box">
		<view class="select-login-pad">
			<view class="login-logo-image">
				<image src="../../static/mylogo.png" mode=""></image>
			</view>
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="login-but">微信登录</button>
			<view class="login-phone-register" @click="usermobile">手机号码注册/登录</view>
			<view class="clear-login" @click="backindex">取消登录</view>
		</view>
	</view>
</template>

<script>
	import requireurl from '../../requist/requist.js'
	export default {
		data() {
			return {
				secckey:'',
				timer:null,
				num:0
			}
		},
		methods: {
			//使用手机号码登录
			usermobile(){
				uni.navigateTo({
				    url: '../login/login'
				});
			},
			//用户取消登录
			backindex(){
				uni.reLaunch({
				    url: '../index/index'
				});
			},
			//获取微信session_key
			getscodesuccess(e){
				console.log('发送code成功')
				console.log('code' + e.data.key)
				this.secckey = e.data.key
				
			},
			
			
			//微信登录
			wxlogins(){
				var _that = this
				wx.login({
				  success (res) {
				    if (res.code) {
				      //发起网络请求
					  requireurl.getData(`/users/wx/session_key/?code=${res.code}`,_that.getscodesuccess,_that.file)
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			},
			
			
			//获取手机号
			getPhoneNumber(e){
				uni.showLoading({
				    title: '加载中',
					mask:true
				});
				console.log(e)
				let obj = {
					key:this.secckey,
					encryptedData:e.detail.encryptedData,
					iv:e.detail.iv
				}
				console.log(obj)
				console.log('执行了')
				if(this.secckey === ''){
					uni.hideToast();
					uni.showToast({
					    title: '状态已失效请重试',
						icon :'none',
					    duration: 1500
					});
					this.wxlogins()
				}
				requireurl.request(`/users/wx/login/`,obj,this.wxloginca,this.file)
			},
			//登录失败
			file(err){
				uni.hideToast();
			},
			wxloginca(e){
				console.log('登录了')
				console.log(e)
				uni.hideToast();
				if(e.data.errno === 0){
					uni.setStorage({
					    key: 'storage_mobile',
					    data: e.data.mobile,
					    success: function () {
					        console.log('success')
							uni.navigateTo({
								url:'../sendcode/sendcode'
							})
					    }
					});
				}else if(e.data.errno === 1){
					uni.setStorageSync('storage_user', e.data.user_data);
					uni.reLaunch({
					    url: '../index/index'
					});
				}else if(e.data.errno === -1){
					uni.showToast({
					    title: e.data.err,
						icon :'none',
					    duration: 1500
					});
				}
			}
		},
		
		
		mounted() {
			this.wxlogins()
		
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
