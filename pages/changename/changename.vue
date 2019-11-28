<template>
	<view class="change-name">
		<view class="white-name">
			 <input class="uni-input" @input="onKeyInput" placeholder="请输入昵称" />
		</view>
		<view class="change-but" @click="SendName">保存</view>
	</view>
</template>

<script>
	import requireurl from '../../requist/requist.js'
	export default {
		data() {
			return {
				inputValue:''
			}
		},
		methods: {
			onKeyInput(event){
				   this.inputValue = event.target.value
			},
			
			//发送名字
			SendName(){
				let data = {
					nickname : this.inputValue
				}
				requireurl.getPutData('/users/nickname/',data,this.changename,this.file)
			},
			//修改用户名回调
			changename(e){
				if(e.statusCode === 200){
					let storeobj = uni.getStorageSync('storage_user')
					storeobj.nickname = this.inputValue
					uni.setStorageSync('storage_user',storeobj);
					uni.navigateBack({
					    delta:1
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.change-name{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		position: relative;
		padding-top:28rpx;
		box-sizing: border-box;
		.white-name{
			width: 100%;
			height: 80rpx;
			input{
				background: #FFFFFF;
				width: 100%;
				height: 100%;
				display: block;
				padding-left: 27rpx;
				box-sizing: border-box;
				line-height: 80rpx;
				color:#000;
				font-weight: 400;
				&:-ms-input-placeholder{
					color:rgba(204,204,204,1);
				}
			}
		}
		.change-but{
			width: 100%;
			height:76rpx;
			background:rgba(3,133,119,1);
			text-align: center;
			font-size:32rpx;
			color:rgba(255,255,255,1);
			line-height:76rpx;
			position: absolute;
			left: 0;
			bottom: 72rpx;
		}
	}

</style>
