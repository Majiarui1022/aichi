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
			   <input class="uni-input" type="text" v-model="usercode" />
			</view>
			<view class="change-commit-data" @click="initmobile">提交</view>
		</view>
		
		
		
		<!-- 验证码错误 -->
		<uni-popup :show="authentication" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip uni-tip-two">
				<view class="uni-tip-content">{{errortit}}</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="authentication = false">确定</view>
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
				timeout:60,
				showgetcode:0,
				timer:null,
				oldphone:'',
				newsphone:'',
				usercode:'',
				authentication:false,
				type:'center',
				errortit:'',
			}
		},
		methods: {
			
			//修改手机号获取验证码
			getcode(){
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				if(!myreg.test(this.newsphone) || this.newsphone.length < 11){
					return false
				}
				let data = {
					mobile:this.newsphone
				}
				requireurl.request('/users/codes/',data,this.getcodesuccess,this.file)
			},
			//获取验证码回调
			getcodesuccess(e){
				if(e.statusCode === 200){
					this.showgetcode = 1
					this.timer = setInterval(()=>{
						this.timeout--;
						if(this.timeout <= 0){
							clearInterval(this.timer)
							this.showgetcode = 2
							this.timeout = 59
						}
					},1000)
				}
			},
			
			//修改手机号提交
			initmobile(){
				let data = {
					mobile:this.newsphone,
					code:this.usercode
				}
				requireurl.getPutData('/users/mobile/',data,this.changemobile,this.file)
			},
			//修改手机号回调
			changemobile(e){
				if(e.statusCode === 200){
					let storeobj = uni.getStorageSync('storage_user')
					storeobj.mobile = this.newsphone
					storeobj.token = e.data.token
					uni.setStorageSync('storage_user',storeobj);
					uni.navigateBack({
					    delta:1
					});
				}else{
					this.errortit = e.data.err
					this.authentication = true
				}
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
