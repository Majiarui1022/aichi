<template>
	<view class="code-box">
		<p class="initcode">输入验证码</p>
		<p class="send-tit">验证码已发送至：{{usermobile}}</p>
		<!-- 输入验证码 -->
		<view class="init-box">
			<input type="number" v-model="code" maxlength="6" @focus="asdasd" readonlyunselectable="on"/>
			<view class="number-box">
				<view class="num">{{code.charAt(0)}}</view>
				<view class="num">{{code.charAt(1)}}</view>
				<view class="num">{{code.charAt(2)}}</view>
				<view class="num">{{code.charAt(3)}}</view>
				<view class="num">{{code.charAt(4)}}</view>
				<view class="num">{{code.charAt(5)}}</view>
			</view>
		</view>
		<view class="get-code-box">
			<view v-if="showcode === 0" class="get-code" @click="getcode">获取验证码</view>
			<p v-if="showcode === 1" class="resend-code">{{numbertime}}s重新发送</p>
			<p v-if="showcode === 2" class="resend" @click="AnewSendCode">重新发送</p>
		</view>
		
		<!-- 验证码错误 -->
		<uni-popup :show="authentication" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip uni-tip-two">
				<view class="uni-tip-content">验证码错误或已失效，请重试。</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import requireurl from '../../requist/requist.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
	  components: {uniPopup},
		data() {
			return {
				code:'',
				showcode:1,
				numbertime:59,
				time:null,
				type:'center',
				authentication:false,
				usermobile:uni.getStorageSync('storage_mobile')
			}
		},
		methods: {
			asdasd(){
				console.log('我失焦了')
			},
			
			//获取验证码
			getcode(){
				this.showcode = 1
				this.time = setInterval(()=>{
					this.numbertime--
					if(this.numbertime <= 0){
					this.showcode = 2
					this.numbertime = 59
						clearInterval(this.time)
					}
				},1000)
			},
			
			
			
			//发送验证码
			sedeCode(){
				let data = {
					mobile:uni.getStorageSync('storage_mobile'),
					code : this.code
				}
				requireurl.request('/users/login/',data, this.getCoodesuc, this.getFile)
			},
			
			//发送验证码回调
			getCoodesuc(e){
				if(e.statusCode === 201){
					console.log('登录成功')
					uni.removeStorage({
					    key: 'storage_mobile',
					    success: function (res) {
							uni.setStorageSync('storage_user', e.data);
							uni.reLaunch({
							    url: '../index/index'
							});
					    }
					});
				}else{
					this.authentication = true
					this.code = ''
				}
			},
			
			
			// 重新发送验证码
			AnewSendCode(){
				let data = {
					mobile:uni.getStorageSync('storage_mobile')
				}
				requireurl.request('/users/codes/',data,this.Anewsuccess)
			},
			
			//重新发送回调
			Anewsuccess(e){
				if(e.statusCode === 200){
					this.getcode()
				}
			},
			
			getFile(){
				console.log('验证码错误')
			},
			
			
			//关闭错误验证码弹窗
			cancel(){
				this.authentication = false
			}
		},
		mounted() {
			this.getcode()
		},
		destroyed() {
			if(this.time){
				clearInterval(this.time)
			}
		},
		watch:{
			code(news,olds){
				console.log(news.length)
				if(news.length === 6){
					this.sedeCode()
				}
			}
		}
	}
</script>

<style lang="scss">

	.code-box{
		width: 100%;
		height: 100%;
		.initcode{
			font-size:46rpx;
			font-family:SimHei;
			color:rgba(51,51,51,1);
			line-height:104rpx;
			margin-top: 42rpx;
			text-align: center;
		}
		.send-tit{
			font-size:30rpx;
			font-family:SimHei;
			color:rgba(170,170,170,1);
			line-height:30rpx;
			text-align: center;
			margin-bottom: 88rpx;
		}
		.init-box{
			width: 100%;
			height: 100rpx;
			position: relative;
			padding: 0 20rpx;
			box-sizing: border-box;
			input{
				width:calc( 100% + 100rpx);
				
				height: 100%;
				display: block;
				position: absolute;
				left: -100rpx;
				top: 0;
				opacity: 0;
				color: transparent;
				caret-color:transparent;
			}
			.number-box{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				background: #fff;
				// position: absolute;
				// left: 0;
				// top: 0;
				// padding: 0 20rpx;
				// box-sizing: border-box;
				.num{
					width: 100rpx;
					height: 100rpx;
					font-size:78rpx;
					font-family:Calibri;
					color:rgba(51,51,51,1);
					line-height:100rpx;
					border-bottom: 2px solid #D8D8D8;
					text-align: center;
				}
			}
		}
		.get-code-box{
			padding: 37rpx 20rpx 0;
			box-sizing: border-box;
			width: 100%;
			height: 117rpx;
			.get-code{
				width: 100%;
				height: 100%;	
				background:rgba(3,133,119,1);
				border-radius:40rpx;
				font-size:30rpx;
				font-family:SimHei;
				color:rgba(255,255,255,1);
				line-height:80rpx;
				text-align: center;
				margin-top: 27rpx;
			}
			.resend-code{
				font-size:24rpx;
				font-family:SimHei;
				color:rgba(202,202,202,1);
				line-height:24rpx;
				float: right;
			}
			.resend{
				font-size:24rpx;
				font-family:SimHei;
				color:#038577;
				line-height:24rpx;
				float: right;
			}
		}
		
		//验证码错误提示
		.uni-tip-two{
			height:218rpx;
			width:519rpx;
			background:rgba(247,247,247,1);
			border-radius: 5rpx;
			.uni-tip-content{
				width:100%;
				height: 128rpx;
				font-size:30rpx;
				color:rgba(0,0,0,1);
				line-height:128rpx;
				text-align: center;
				border-bottom: 1rpx solid #000;
				box-sizing: border-box;
			}
			.uni-tip-group-button{
				width:100%;
				height: 90rpx;
				border: 0;
				height: 90rpx;
				.uni-tip-button{
					width: 100%;
					height: 90rpx;
					text-align: center;
					line-height: 90rpx;
					font-size:36rpx;
					font-family:SimHei; 
				}
			}
		}
	}
</style>
