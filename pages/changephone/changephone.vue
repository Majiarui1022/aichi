<template>
	<view class="change-pohone-box">
		<view class="change-phone-content">
			<view class="change-phone-tit">原手机号</view>
			<view class="change-white-photo">
			   <input class="uni-input" type="number" v-model="oldphone"/>
			   <image src="../../static/clearinput.png" mode="" v-if="oldphone"></image>
			</view>
			<view class="change-phone-tit">新手机号</view>
			<view class="change-white-photo">
			   <input class="uni-input" type="number" v-model="newsphone"/>
			   <image src="../../static/clearinput.png" mode="" v-if="newsphone"></image>
			</view>
			<view class="change-phone-tit">
				验证码
				<view class="change-get-code">
					<span v-if="showgetcode === 0" style="color:#038577;" @click="getcode">获取验证码</span>
					<span v-if="showgetcode === 1">重新获取({{timeout}}S)</span>
					<span v-if="showgetcode === 2" style="color:#038577;" @click="getcode">重新获取</span>
				</view>
				</view>
			<view class="change-white-photo">
			   <input class="uni-input" type="text"/>
			</view>
			<view class="change-commit-data">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeout:10,
				showgetcode:0,
				timer:null,
				oldphone:'',
				newsphone:''
			}
		},
		methods: {
			getcode(){
				this.showgetcode = 1
				this.timer = setInterval(()=>{
					this.timeout--;
					if(this.timeout <= 0){
						clearInterval(this.timer)
						this.showgetcode = 2
						this.timeout = 10
					}
				},1000)
			}
		},
		destroyed() {
			if(this.timer){
						clearInterval(this.timer)
			}
		}
	}
</script>

<style lang="scss">
	.change-pohone-box{
		width: 100%;
		height: 100%;
		.change-phone-content{
			width: 100%;
			height: 100%;
			padding: 0 30rpx;
			box-sizing: border-box;
			.change-phone-tit{
				font-size:26rpx;
				font-weight:normal;
				color:rgba(170,170,170,1);
				margin-top: 52rpx;
				.change-get-code{
					float: right;
				}
			}
			.change-white-photo{
				width: 100%;
				height: 52rpx;
				border-bottom:1rpx solid #EDEDED;
				position: relative;
				margin-top: 8rpx;
				input{
					width: 100%;
					height: 100%;
					display: block;
					padding-right: 50rpx;
					box-sizing: border-box;
					color:#333333;
					font-size: 20rpx;
				}
				image{
					width: 33rpx;
					height: 33rpx;
					position: absolute;
					right: 0rpx;
					top: 50%;
					margin-top: -16.5rpx;
				}
			}
			.change-commit-data{
				width: 100%;
				height:88rpx;
				background:rgba(3,133,119,1);
				border-radius:10rpx;
				text-align: center;
				line-height: 88rpx;
				color: #FFFFFF;
				margin-top: 75rpx;
				&:active{
					background: #049d8c;
				}
			}
		}
	}
</style>
