<template>
	<view class="netdetail-box">
		<view class="scroll-y">
			<!-- 网点地址 -->
			<view class="address-box">
				<view class="address">
					<p class="address-name">{{address.name}}</p>
					<p class="address-pic">{{address.address}}</p>
				</view>
				<view class="distance" @click="goaddress">
					<image src="../../static/maplogo.png" mode=""></image>
					<text>{{address.distance}}</text>
				</view>
			</view>
			<!-- 网点充电桩 -->
			<view class="give-dian-box">
				<ul>
					<li v-for="(item,index) in listdetail" :key="index">
						<view class="menu">
							<view class="one"><image class="car" :src="item.category === 'car' ?'../../static/car.png' : '../../static/bike.png' " mode=""></image><span>{{item.status}}</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(aaaaa,indexT) in listnum" :key="indexT">
										<view class="electricity-onec">
											<i :style="{'width': (indexT + 1) <= Math.round(item.level/10) ? '100%':'2%'}"></i>
										</view>
									</block>
								</view>
								<span class="show-electri-num">{{item.level}}%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>{{item.number}}</span></p>
							</view>
						</view>
						<view class="but" :class="item.is_appointment === 1  ||  is_appointment === 4? 'active' : ''" @click="openPopup(item.is_appointment,index)">{{item.is_appointment === 3 ? '预约中' :'预约'}}</view>
					</li>
				
				</ul>
			</view>
			
			<!-- 底部弹窗 -->
			<uni-popup ref="popup" type="bottom" maskClick="true" class="piker-box">
				<view class="piker-view">
					<!-- 电池名称 -->
					<view class="piker-tit">
						<p class="piker-name">{{oneclist.status}}</p>
					</view>
					<!-- 电池信息 -->
					<view class="menu">
						<view class="one">
							<image :src="oneclist.category === 'car' ?'../../static/car.png' : '../../static/bike.png' " class="car" mode=""></image>
							<span>{{oneclist.status}}</span>
						</view>
						<view class="two">
							<view class="electricity-bar">
								<block v-for="(aaaaa,indexT) in listnum" :key="indexT">	
									<view class="electricity-onec">
										<i :style="{'width': (indexT + 1) <= Math.round(oneclist.level/10) ? '100%':'2%'}"></i>	
									</view>									
								</block>
							</view>
							<span class="show-electri-num">{{oneclist.level}}%</span>
						</view>
						<view class="three">
							<p>电池组编号：<span>{{oneclist.number}}</span></p>
						</view>
					</view>
					<!-- 电池介绍 -->
					<view class="word-content">
						<p class="word-menu">{{oneclist.appointment_hint}}</p>
					</view>
				</view>
				<view class="piker-but" :class="oneclist.is_appointment === true ? '' : 'active'"  @click="quedingnle(oneclist.id)">确定预约</view>
			</uni-popup>
			
			
			<!-- 提示框 -->
			<uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
				<view class="uni-tip">
					<view class="uni-tip-title">提醒</view>
					<view class="uni-tip-content">您尚未进行用电认证，暂时无法换电</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel">取消</view>
						<view class="uni-tip-button" @click="cancel">确定</view>
					</view>
				</view>
			</uni-popup>
			
			
			
			<uni-popup :show="authentication" :type="type" :custom="true" :mask-click="false">
				<view class="uni-tip uni-tip-two">
					<view class="uni-tip-title">提醒</view>
					<view class="uni-tip-content">{{shownopro}}</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel">确定</view>
					</view>
				</view>
			</uni-popup>
			
		</view>
	</view>
</template>

<script>
	import requireurl from '../../requist/requist.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
	  components: {uniPopup},
		data() {
			return {
				listnum:10,
				show: false,
				type:'center',
				authentication:false,
				addressID:'',
				listdetail:[],
				oneclist:{},
				address:{},
				shownopro:'您所选的电池已有电池被预约，请重新预约'
			}
		},  
		onShow() {
			var _that = this
			uni.getLocation({
			    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			    success:  (res)=> {
					console.log('用户允许')
					console.log(res)
					this.$nextTick(()=>{
						this.latitude = res.latitude
						this.longitude = res.longitude
						uni.setStorage({
						    key: 'storage_latitude',
						    data:  res.latitude,
						    success: function () {
								uni.setStorage({
									    key: 'storage_longitude',
									    data:  res.longitude,
								});
								
								
								console.log('请求了网点ID' + _that.addressID)
								requireurl.getData(`/applet/outlet/address/detail/?location=${uni.getStorageSync('storage_longitude')},${uni.getStorageSync('storage_latitude')}&id=${_that.addressID}`,_that.getaddressgo,_that.fileaddress)
								
						    }
						});
					})
				},
				fail :(err)=> {
					uni.removeStorage({
					    key: 'storage_latitude',
					    success: function (res) {
							uni.removeStorage({
							    key: 'storage_longitude',
							    success: function (res) {
									console.log('用户拒绝授权，清除位置')
							    }
							});
					    }
					});
					
				}
			});
			
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option); //打印出上个页面传递的参数。
			this.addressID = option.id
			console.log('拿到了网点ID' + this.addressID)
			this.getaddresslist(option.id)
			requireurl.getData(`/applet/outlet/detail/?id=${option.id}`,this.getaddresslist,this.fileaddress)
			requireurl.getData(`/applet/outlet/address/detail/?location=${uni.getStorageSync('storage_longitude')},${uni.getStorageSync('storage_latitude')}&id=${option.id}`,this.getaddressgo,this.fileaddress)
		},
		methods: {
			//打开底部弹窗
			openPopup(status,index){
				if(status === 1){
					this.shownopro = "改电池已被别人预约"
					return false
				}else if(status === 2){
					this.authentication = true
					this.shownopro = "该电池电量不足，请重新选择"
					return false
				}else if(status === 3){
					return false
				}else if(status === 4){
					this.authentication = true
					this.shownopro = "您已有预约"
					return false
				}else if(status === 5){
					this.authentication = true
					this.shownopro = "预约失败，您今日已取消预约次数上限"
					return false
				}
				this.oneclist = this.listdetail[index]
				this.$refs.popup.open()
			},
			//关闭底部弹窗
			closePopup(){
				this.oneclist = {}
				this.$refs.popup.close()
			},
			//打开  已被预约提醒  + 暂未认证提醒
			quedingnle(id){
				let obj = {
					battery_pack:id
				}
				requireurl.request("/applet/appointment/order/",obj,this.timentsuc,this.timeerr,true)
				
			},
			
			//预约电池成功回调
			timentsuc(e){
				if(e.statusCode === 201){
					this.$refs.popup.close()
					uni.setStorage({
					    key: 'storage_number',
					    data: e.data.number,
					    success: function () {
							uni.setStorage({
							    key: 'storage_name',
							    data: e.data.appointment_duration,
							    success: function () {
									uni.reLaunch({
									    url: '../successappointment/successappointment'
									});
							    }
							});
					    }
					});
				}
			},
			timeerr(){
				console.log('预约错误回调')
			},
			//网点详情
			getaddresslist(e){
				console.log(e)
				if(e.statusCode === 200){
					this.listdetail = e.data
				}
			},
			//地址详情
			getaddressgo(e){
				if(e.statusCode === 200){
					this.address = e.data
				}
			},
			
			
			//导航
			goaddress(){
				console.log('我执行了')
				// let { lat, lon, name, address } = this.data.address;
				// wx.openLocation({
				//   latitude: +lat,
				//   longitude: +lon,
				//   name,
				//   address: address
				// });
				let { lat, lon, name, address } = this.address;
				console.log(lat,lon,name,address)
				// let name = _that.address.name
				wx.openLocation({
					latitude: +lat,
				    longitude: +lon,
				    name,
				    address: address
				});
			},
			
			//关闭  已被预约提醒  + 暂未认证提醒
			cancel(){
				this.authentication=false
			}
		},
	}
</script>

<style lang="scss">
	.netdetail-box{
		width: 100%;
		height: 100%;
		overflow: hidden;
		.scroll-y{
			width: 100%;
			height: 100%;
			padding: 16rpx 20rpx 70rpx;
			box-sizing: border-box;
			.address-box{
				width:710rpx;
				height:120rpx;
				display: flex;
				box-shadow:2rpx 2rpx 2rpx 1rpx rgba(0, 0, 0, 0.16);
				.address{
					width: 590rpx;
					height: 100%;
					background: #E0FFF7;
					padding: 16rpx 0 13rpx 15rpx;
					box-sizing: border-box;
					.address-name{
						line-height: 47rpx;
						font-size:30rpx;
						color:rgba(17,17,17,1);
					}
					.address-pic{
						line-height: 44rpx;
						font-size:26rpx;
						color:rgba(3,133,119,1);
					}
				}
				.distance{
					width: 120rpx;
					height: 120rpx;
					background: #038577;
					padding-top: 29rpx;
					box-sizing: border-box;
					image{
						display: block;
						width:36rpx;
						height:36rpx;
						margin: 0 auto;
					}
					text{;
						font-size:26rpx;
						font-family:SimHei;
						color:rgba(255,255,255,1);
						line-height:54rpx;
						display: block;
						text-align: center;
					}
				}
			}
			.give-dian-box{
				width: 100%;
				height: calc(100% - 120rpx);
				padding-top: 15rpx;
				box-sizing: border-box;
				overflow-y: scroll;
				-webkit-overflow-scrolling: touch;
				ul{
					width: 100%;
					height: 100%;
					li{
						width: 100%;
						height: 185rpx;
						border-bottom: 2rpx solid #D8D8D8;
						padding: 22rpx 0 7rpx 0;
						box-sizing:border-box;
						display: flex;
						justify-content: space-between;
						align-items:center;
						.but{
							width:140rpx;
							height:60rpx;
							background:rgba(3,133,119,1);
							border-radius:15rpx;
							font-size:30rpx;
							font-weight:bold;
							color:rgba(255,255,255,1);
							line-height:60rpx;
							text-align: center;
							&.active{
								background: #BEBEBE;
							}
						}
						.menu{
							flex:1;
							.one{
								display: flex;
								height: 54rpx;
								align-items: center;
								.car{
									width:115rpx;
									height:41rpx;
									margin-right: 18rpx;
								}
								.bike{
									width:66rpx;
									height:53rpx;
									margin-left:15rpx;
									margin-right: 44rpx;
								}
								span{
									font-size:26rpx;
									font-family:SimHei;
									color:rgba(51,51,51,1);
									line-height:54rpx;
								}
							}
							.two{
								display: flex;
								margin-top: 18rpx;
								.electricity-bar{
									overflow: hiddem;
									.electricity-onec{
										float: left;
										width:8rpx;
										height:32rpx;
										border-radius:4rpx;
										background: #BEBEBE;
										margin-right: 8rpx;
									}
									i{
										display: block;
										border-radius:4rpx;
										width: 100%;
										height: 100%;
										background:rgba(3,133,119,1);
									}
								}
								.show-electri-num{
									font-size:32rpx;
									color:#038577;
									line-height:32rpx;
									margin-left: 16rpx;
								}
							}
							.three{
								line-height: 53rpx;
								font-size:26rpx;
								font-family:SimHei;
								color:rgba(153,153,153,1);
								width: 80%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}
			.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{
				padding: 0;
			}
			/*弹出层*/
			.piker-box{
				width: 100%;
				height: 482rpx;
				.piker-view{
					width: 100%;
					height: 482rpx;
					padding: 14rpx 20rpx;
					box-sizing: border-box;
					.piker-tit{
						width: 100%;
						height: 106rpx;
						border-bottom: 2rpx solid #D8D8D8;
						.piker-name{
							font-size:36rpx;
							font-family:SimHei;
							font-weight:bold;
							color:rgba(0,0,0,1);
							line-height:46px;
							text-align: center;
						}
					}
					.menu{
						width: 100%;
						height: 184rpx;
						border-bottom: 2rpx solid #D8D8D8;
						.one{
							margin-top:33rpx;
							display: flex;
							align-items: center;
							height:54rpx;
							span{
								font-size:26rpx;
								font-family:SimHei;
								color:rgba(51,51,51,1);
								line-height:54rpx;
							}
							.car{
								width:115rpx;
								height:41rpx;
								margin-right: 18rpx;
							}
							.bike{
								width:66rpx;
								height:53rpx;
								margin-left:15rpx;
								margin-right: 44rpx;
							}
						}
						.two{
							display: flex;
							margin-top: 18rpx;
							.electricity-bar{
								overflow: hiddem;
								.electricity-onec{
									float: left;
									width:8rpx;
									height:32rpx;
									border-radius:4rpx;
									background: #BEBEBE;
									margin-right: 8rpx;
								}
								i{
									display: block;
									border-radius:4rpx;
									width: 100%;
									height: 100%;
									background:rgba(3,133,119,1);
								}
							}
							.show-electri-num{
								font-size:32rpx;
								color:#038577;
								line-height:32rpx;
								margin-left: 16rpx;
							}
						}
						.three{
							line-height: 53rpx;
							font-size:26rpx;
							font-family:SimHei;
							color:rgba(153,153,153,1);
							width: 80%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.word-content{
						width: 100%;
						height: 110rpx;
						margin-top: 15rpx;
						.word-menu{
							font-size:26rpx;
							font-family:SimHei;
							color:rgba(153,153,153,1);
							line-height:36rpx;
							width: 100%;
							height: 100%;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
						}
					}
				}
				.piker-but{
					width: 100%;
					height: 96rpx;
					background: #038577;
					text-align: center;
					font-size:30rpx;
					font-family:SimHei;
					font-weight:bold;
					color:rgba(255,255,255,1);
					line-height:96rpx;
					&:active{
						background: #049d8c;
					}
				}
			}
			
			
			// 提示框
			.uni-tip{
				width:540rpx;
			    height:281rpx;
				background:rgba(247,247,247,1);
				border-radius: 15rpx;
				padding-top: 37rpx;
				box-sizing: border-box;
				.uni-tip-title{
					font-size:34rpx;
					font-family:SimHei;
					color:rgba(0,0,0,1);
					text-align: center;
					line-height: 64rpx;
				}
				.uni-tip-content{
					font-size:26rpx;
					font-family:SimHei;
					color:rgba(0,0,0,1);
					line-height: 56rpx;
					margin-bottom: 35rpx;
					text-align: center;
				}
				.uni-tip-group-button{
					width: 100%;
					display: flex;
					border-top: 2rpx solid #09141F;
					position: absolute;
					bottom: 0;
					box-sizing: border-box;
					.uni-tip-button{
						width: 50%;
						height: 88rpx;
						box-sizing: border-box;
						border-right: 2rpx solid #09141F;
						font-size:34rpx;
						font-family:SimHei;
						color:rgba(0,122,255,1);
						line-height:88rpx;
						text-align: center;
						&:last-child{
							border: 0;
						}
					}
					
				}
			}
		
			//已被预约提示框
			.uni-tip-two{
				height:291rpx;
				width:540rpx;
				background:rgba(247,247,247,1);
				border-radius: 15rpx;
				box-sizing: border-box;
				padding: 0 38rpx;
				.uni-tip-title{
					font-size:34rpx;
					font-family:SimHei;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:92rpx;
				}
				.uni-tip-content{
					font-size:26rpx;
					color:rgba(0,0,0,1);
					line-height:32rpx;
					margin-top: 10rpx;
				}
				.uni-tip-group-button{
					width: calc(100% - 76rpx);
					border: 0;
					height: 88rpx;
					.uni-tip-button{
						width: 100%;
						height: 88rpx;
					
					}
				}
			}
		}
	}
</style>
