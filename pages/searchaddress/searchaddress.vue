<template>
	<view class="address-section">
		<!-- 顶部搜索 -->
		<view class="address-search-tit">
			<view class="search-box-tit">
			<image src="../../static/search.png" mode="" class="search-but"></image>
			   <input 
			   class="uni-input" 
			   adjust-position="false" 
			   @input="initinput" 
			   confirm-type="search" 
			   @confirm="oksendinput"
			   @blur="shiquinit"
			   placeholder="搜索网点、地点名称" />
			</view>
		</view>
		<!-- 地址列表 -->
		<view class="address-list-section">
			<view class="address-list-menu">
				<view class="address-list-padding">
					<ul>
						<li v-for="(item,index) in addresslist" :key="index">
							<view class="adress-list-con" @click="goproaddress(item)">
								<view class="address-content">
									<p class="address">{{item.name}}</p>
									<p class="address-ic">{{item.address}}</p>
								</view>
								<view class="distance">{{item.distance}}</view>
							</view>
						</li>
					</ul>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import requireurl from '../../requist/requist.js'
	export default {
		data() {
			return {
				addresslist:[],
				addressname:''
			}
		},
		methods: {
			upper(){
				console.log('顶部')
			},
			lower(){
				console.log('底部')
			},
			initinput(e){
				console.log(e.detail.value)
				this.addressname = e.detail.value
			this.getaddress()
			},
			oksendinput(){
				console.log('我点击了完成按钮')
			},
			shiquinit(){
				console.log('我失去了焦点')
			},
			goproaddress(e){
				uni.navigateTo({
				    url: `../netdetails/netdetails?id=${e.id}`
				});
			},
			
			
			//搜索地址
			getaddress(){
				requireurl.getData(`/applet/search/outlets/?location=${uni.getStorageSync('storage_longitude')},${uni.getStorageSync('storage_latitude')}&search=${this.addressname}&radius=&action=search`,this.cabackaddredd,this.erraddress)
			},
			
			
			//搜索地址回掉
			cabackaddredd(e){
				this.addresslist = e.data
			},
			erraddress(e){
				console.log(e)
			}
		},
		mounted() {
			
			this.getaddress()
		}
	}
</script>

<style lang="scss">
	.address-section{
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		padding-top:30rpx;
		box-sizing: border-box;
		overflow: hidden;
		.address-search-tit{
			width: 100%;
			height:76rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			.search-box-tit{
				width:100%;
				height:72rpx;
				background:rgba(255,255,255,1);
				box-shadow:0px 2rpx 2rpx 0px rgba(0, 0, 0, 0.15);
				border-radius:20rpx;
				padding-left: 16rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.search-but{
					width:33rpx;
					height:33rpx;
					margin-right: 16rpx;
				}
				input{
					width:calc(100% - 65rpx);
					height:100%;
					display: block;
					border: 0;
					background: transparent;
					outline: none;
					font-size:26rpx;
					font-family:SimHei;
					line-height:72rpx;
					color:#000;
					&:-ms-input-placeholder{
						color:rgba(187,187,187,1);
					}
				}
			}
		}
		.address-list-section{
			width: 100%;
			height: calc(100% - 76rpx);
			box-sizing: border-box;
			padding-bottom: 40rpx;
			.address-list-menu{
				width: 100%;
				height: 100%;
				overflow-y:scroll;
				-webkit-overflow-scrolling: touch;
				.address-list-padding{
					width: 100%;
					height: 100%;
					padding: 0 20rpx;
					box-sizing: border-box;
					ul{
						width: 100%;
						height: 100%;
						li{
							width: 100%;
							padding: 20rpx 0;
							border-bottom: 2rpx solid #D8D8D8;
							display: flex;
							justify-content: space-between;
							align-items: center;
							box-sizing: border-box;
							.adress-list-con{
								width: 100%;
								height: 100%;
								display: flex;
								justify-content: space-between;
								align-items: center;
								.address-content{
									.address{
										font-size:28rpx;
										color:rgba(51,51,51,1);
										line-height:38rpx;
										width: 600rpx;
										text-overflow: ellipsis;
										overflow: hidden;
										white-space: nowrap;
									}
									.address-ic{
										margin-top: 12rpx;
										width: 600rpx;
										font-size:28rpx;
										color:rgba(153,153,153,1);
										line-height:38rpx;
										text-overflow: ellipsis;
										overflow: hidden;
										white-space: nowrap;
									}
								}
								.distance{
									font-size:28rpx;
									font-family:SimHei;
									color:rgba(153,153,153,1);
								}
							}
						}
					}
				}
			}
		}
	}
	
</style>
