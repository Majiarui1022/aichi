<template>
	<view class="user-info-box">
		<view class="user-info-list">
			<ul>
				<li @click="openPopup">
					<view class="userinfo-list-name">头像</view>
					<view class="userinfo-right">
						<image class="user-header-image" :src="headerImg" mode=""></image>
						<image src="../../static/right.png" mode="" class="right-img"></image>
					</view>
				</li>
				<li @click="changename">
					<view class="userinfo-list-name">昵称</view>
					<view class="userinfo-right">
						<view class="userinfo-right-con">{{username}}</view>
						<image src="../../static/right.png" mode="" class="right-img"></image>
					</view>
				</li>
				<li @click="changepohone">
					<view class="userinfo-list-name">手机号</view>
					<view class="userinfo-right">
						<view class="userinfo-right-con">{{usermobile}}</view>
						<image src="../../static/right.png" mode="" class="right-img"></image>
					</view>
				</li>
			</ul>
		</view>
		
		<uni-popup ref="popup" type="bottom" maskClick="true" class="piker-box">
			<view class="piker-content">
				<view class="select-photo-box">
					<ul>
						<li @click="selectphoto('camera')">拍照</li>
						<li @click="selectphoto('album')">从手机相册选择</li>
					</ul>
				</view>
				<view class="close-piker" @click="closePopup">取消</view>
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
				usermobile:uni.getStorageSync('storage_user').mobile
				
			}
		},
		onShow(){
			setTimeout(()=>{
				this.username = uni.getStorageSync('storage_user').nickname
				this.usermobile = uni.getStorageSync('storage_user').mobile 
				console.log(this.usermobile)
				console.log(uni.getStorageSync('storage_user').mobile )
			},500)
			
		},
		methods: {
			selectphoto(val){
				var _that = this
				console.log(_that.headerImg)
				this.closePopup()
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: [val], //从相册选择
				    success: function (res) {
				        console.log(res.tempFilePaths);
				        console.log(res.tempFiles[0]);
						
						
						uni.uploadFile({
						    url: 'http://10.102.100.120:8000/users/head/', //仅为示例，非真实的接口地址
						    filePath: res.tempFilePaths[0],
						    name: 'head_img_url',
							header:{
								"content-type" : "multipart/form-data",
								'Authorization': uni.getStorageSync('storage_user').token ? 'JWT ' + uni.getStorageSync('storage_user').token : '' 
							},
						    success: (uploadFileRes) => {
								let storeobj = uni.getStorageSync('storage_user')
								storeobj.head_img_url =  JSON.parse(uploadFileRes.data).head_img_url
								_that.headerImg = JSON.parse(uploadFileRes.data).head_img_url
								console.log(_that.headerImg)
								uni.setStorageSync('storage_user',storeobj);
						    }
						});
						
						
				    }
				});
			},
			
			
			
			//修改用户名称
			changename(){
				uni.navigateTo({
				    url: '../changename/changename'
				});
			},
			
			//修改手机号
			changepohone(){
				uni.navigateTo({
				    url: '../changephone/changephone'
				});
			},
			
			
			//打开底部弹窗
			openPopup(){
				this.$refs.popup.open()
			},
			
			//关闭底部弹窗
			closePopup(){
				this.$refs.popup.close()
			}
		},
		computed:{
			
		},
		watch:{
			
		}
	}
</script>

<style lang="scss">
	.user-info-box{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		.user-info-list{
			width: 100%;
			padding-left: 20rpx;
			background: #FFFFFF;
			ul{
				width: 100%;
				li{
					width: 100%;
					padding:23rpx 30rpx 23rpx 0;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 1rpx solid #D8D8D8;
					.userinfo-list-name{
						font-size:28rpx;
						font-family:SimHei;
						color:rgba(51,51,51,1);
					}
					.userinfo-right{
						display: flex;
						align-items: center;
						.user-header-image{
							width:140rpx;
							height:140rpx;
							border-radius:50%;
						}
						.right-img{
							width:18rpx;
							height:35rpx;
							margin-left: 22rpx;
						}
						.userinfo-right-con{
							font-size:28rpx;
							font-family:SimHei;
							color:rgba(125,125,125,1);
						}
					}
					&:first-child{
						padding: 30rpx 30rpx 30rpx 0;
					}
					&:last-child{
						border: 0;
					}
				}
			}
		}
		
		
		// 去掉弹出层padding
		.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{
			padding: 0;
		}
		/*弹出层*/
		.piker-box{
			width: 100%;
			height:312rpx;
			background:#ECECEC;
			border-radius:15px 15px 0px 0px;
			.piker-content{
				width: 100%;
				height:100%;
				background:#ECECEC;
				.select-photo-box{
					width: 100%;
					height: 196rpx;
					background: #FFFFFF;
					ul{
						width: 100%;
						li{
							width: 100%;
							height: 98rpx;
							border-bottom: 1rpx solid #ECECEC;
							box-sizing: border-box;
							text-align: center;
							font-size:28rpx;
							color:rgba(51,51,51,1);
							line-height:98rpx;
						}
					}
				}
				.close-piker{
					width: 100%;
					height: 96rpx;
					background: #FFFFFF;
					text-align: center;
					font-size:28rpx;
					color:rgba(51,51,51,1);
					line-height:96rpx;
					margin-top:20rpx;
				}
			}
		}
	}
</style>
