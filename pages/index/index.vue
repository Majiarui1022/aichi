<template>
	<view class="map-box" id="test">
		<!-- 搜索框 -->
		<view class="search-box" @click="searchaddress">
			<image src="../../static/search.png" mode=""></image>
			搜索网点、地点名称
		</view>
		
		<!-- 预约 -->
		<view class="count-down-box">
			<view class="count-down-menu">
				<p class="row-one">
					预约中：
					<span>
						<uni-countdown 
						border-color="transparent"	
						:show-day="false" 
						:showHours="false"
						:minute="minute" 
						@timeup="timeup"
						:second="sec">
					</uni-countdown>
					</span>
				</p>
				<p class="row-two">预约编号：xxx500</p>
			</view>
			<view class="count-down-but" @click="quedingnle">取消</view>
		</view>
		
		<!-- 扫码but -->
		<view class="but">
			<view class="dian-wu">
				<p class="nopro">附近暂无可用充电柜</p>
			</view>
			<view class="give-dian"  @click="gosao">
				<image class="code-image" src="../../static/code.png" mode=""></image>
				<text>扫码取电</text>
			</view>
		</view>
		<view class="page-body">
		    <view class="page-section page-section-gap">
		        <map :style="{width: '100%', height: Mapheight + 'px'}"
				id="mapId"
					@regionchange="aaaaaaa"
				   show-location="false" 
				   :latitude="latitude" 
				   :longitude="longitude" 
				   :markers="covers"
				   @markertap="clickmarkertap"
				   @updated="asdasdasd"
				   >
		        </map>
		    </view> 
			
			<view @click="clickgoaddress" class="back"><image src="../../static/localtion.png" mode=""></image></view>
			<view @click="showservice" class="back serviceicn"><image src="../../static/service.png" mode=""></image></view>
			<view @click="clickgohome" class="back indexhomeicn"><image src="../../static/indexhome.png" mode=""></image></view>
			<image src="../../static/me.png" class="isme" mode=""></image>
		</view>
		
		
		<!-- 提示框 -->
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-title">提醒</view>
				<view class="uni-tip-content">您是否取消预约？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel">是</view>
					<view class="uni-tip-button" @click="cancel">否</view>
				</view>
			</view>
		</uni-popup>
		
		
		<!-- 提示框 -->
		<uni-popup :show="callphone" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip callphone">
				<view class="callphone-tit">拨打电话</view>
				<view class="callphone-content">确认要拨打电话{{usermoblie}}吗？</view>
				<view class="callphone-but-box">
					<view class="callphone-left-but" @click="callmeoblie">呼叫</view>
					<view class="callphone-right-but" @click="callphone = false">取消</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
	export default {
	  components: {uniCountdown,uniPopup},
		data(){
			return{
				title: 'map',
				latitude: 0,
				longitude: 0,
				covers: [ {
					id:2,
					latitude: 31.174439,
					longitude: 121.556339,
					iconPath: '../../static/dian.png'
				}],
				mapObj:{},
				Mapheight:0,
				minute:1,
				sec:4,
				show: false,
				type:'center',
				callphone:false,
				usermoblie:'15000000000'
				
			}
		},
		methods:{
			aaaaaaa(e){
				if(e.type === 'end'){
					console.log('松开屏幕')
					var a = uni.createMapContext('mapId',this)
					//获取当前地图中心位置
					// a.getCenterLocation({
					// 	success:(res)=>{
					// 		console.log('我获取到中心了')
					// 	},
					// 	fail:()=>{
					// 		console.log('失败')
					// 	}
					// })
					//获取当前视野范围
						a.getRegion({
							success:(res)=>{
								console.log('我获取到视野范围了')
							},
							fail:()=>{
								console.log('失败')
							}
						})
				}
			},
			clickmarkertap(e){
				console.log('我点击了icon')
				console.log(e)
				
				uni.navigateTo({
				    url: `../netdetails/netdetails?id=${e.markerId}`
				});
			},
			//地图更新完成之后
			asdasdasd(e){
				console.log('渲染完成')
					
			},
			
			//点击回到当前定位位置
			clickgoaddress(){
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				    success:  (res)=> {
						var a = uni.createMapContext('mapId',this)
						a.moveToLocation({
							latitude : res.latitude,
							longitude : res.longitude
						})
						this.latitude =  res.latitude,
						this.longitude =  res.longitude
				    }
				});
				
			},
			
			//进入我的界面
			clickgohome(){
				uni.navigateTo({
				    url: '../usermiddle/usermiddle'
				});
			},
			
			
			//弹出客服框
			showservice(){
				this.callphone = true
			},
			
			
			//拨打电话
			callmeoblie(){
				var moblie = this.usermoblie
				wx.makePhoneCall({
				  phoneNumber: moblie,
				})
			},
			
			//倒计时结束回调
			timeup(){
				console.log("结束了")
			},
			
			//打开  已被预约提醒  + 暂未认证提醒
			quedingnle(){
				this.show = true
				
			},
			//关闭  已被预约提醒  + 暂未认证提醒
			cancel(){
				this.show=false
				
				uni.showToast({
				    title: '取消成功',
					icon :'none',
				    duration: 1500
				});
			},
			
			//点击进入扫一扫
			gosao(){
				uni.navigateTo({
				    url: '../home/home'
				});
			},
			
			
			//进入网点搜索
			searchaddress(){
				uni.navigateTo({
				    url: '../searchaddress/searchaddress'
				});
			}
		
		},
		mounted() {
			uni.getLocation({
			    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			    success:  (res)=> {
					this.$nextTick(()=>{
						this.latitude = res.latitude
						this.longitude = res.longitude
					})
			    }
			});
			
			 
			//创建节点选择器
			const query = wx.createSelectorQuery()
			    query.select('#test').boundingClientRect()
			    query.selectViewport().scrollOffset()
			    query.exec( (res) =>{
					this.Mapheight = res[0].height
			    })
		}
	}
</script>

<style lang="scss">
	.map-box{
		width: 100%;
		height: 100%;
		background: red;
		position: relative;
		.search-box{
			width: calc(100% - 20rpx);
			height:72rpx;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 2rpx 0px rgba(213,218,227,0.5);
			position: absolute;
			left: 10rpx;
			top: 16rpx;
			border-radius: 20rpx;
			z-index: 999;
			font-size:26rpx;
			font-family:SimHei;
			padding-left: 16rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			color:rgba(187,187,187,1);
			image{
				width:33rpx;
				height:33rpx;
				margin-right: 16rpx;
			}
			text{
				line-height:72rpx;
			}
		}
		.count-down-box{
			display: none !important;
			width: calc(100% - 20rpx);
			height:100rpx;
			background:rgba(255,255,255,1);
			box-shadow:2rpx 2rpx 2rpx 1rpx rgba(0, 0, 0, 0.16);
			border-radius:20rpx;
			position: absolute;
			left: 10rpx;
			z-index: 999;
			top: 16rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 18rpx 32rpx 18rpx 26rpx;
			box-sizing: border-box;
			.count-down-menu{
				.row-one{
					font-size:30rpx;
					color:#333333;
					line-height:30rpx;
					margin-bottom: 12rpx;
					span{
						color:#038577;
					}
				}
				.row-two{
					font-size:26rpx;
					color:rgba(153,153,153,1);
					line-height:26rpx;
				}
			}
			.count-down-but{
				width:100rpx;
				height:46rpx;
				background:rgba(3,133,119,1);
				border-radius:23rpx;
				font-size:26rpx;
				color:rgba(255,255,255,1);
				line-height:46rpx;
				text-align: center;
			}
		}
		.but{
			width:400rpx;
			height:100rpx;
			border-radius:16rpx;
			position: absolute;
			left:calc(50% - 200rpx);
			bottom: 60rpx;
			z-index: 999;
			.dian-wu{
				border-radius:16rpx;
				width: 100%;
				height: 100%;
				display: none;
				background:rgba(100,100,100,1);
				.nopro{
					font-size:28rpx;
					color:rgba(255,255,255,1);
					line-height:100rpx;
					text-align: center;
				}
			}
			.give-dian{
				border-radius:16rpx;
				width: 100%;
				height: 100%;
				background: #038577;
				padding: 18rpx 0 18rpx 80rpx;
				box-sizing: border-box;
				display: flex;
				align-content: center;
				.code-image{
					width:62rpx;
					height:64rpx;
					margin-right: 30rpx;
				}
				text{
					font-size:36rpx;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
			}
		}
		.back{
			position: fixed;
			right: 30rpx;
			bottom:243rpx;
			width:72rpx;
			height:72rpx;
			background:rgba(255,255,255,1);
			box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.2);
			border-radius:2rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width:44rpx;
				height:45rpx;
			}
		}
		.serviceicn{
			bottom:343rpx;
		}
		.indexhomeicn{
			right: 648rpx;
			bottom: 243rpx;
		}
		.isme{
			display: block;
			position: fixed;
			width: 24rpx;
			height: 44rpx;
			top: 50%;
			left:50%;
			margin-left: -10rpx;
			margin-top: -44rpx;
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
					color:#007AFF;
					line-height:88rpx;
					text-align: center;
					&:last-child{
						border: 0;
						color:#FF002A;
					}
				}
				
			}
		}
	
		//拨打客服电话
		.callphone{
			width:559rpx;
			height:269rpx;
			background:rgba(255,255,255,1);
			padding: 0 50rpx 36rpx 50rpx;
			box-sizing: border-box;
			.callphone-tit{
				font-size:32rpx;
				font-family:SimHei;
				color:rgba(51,51,51,1);
				line-height:114rpx;
				text-align: center;
				text-align: center;
			}
			.callphone-content{
				font-size:24rpx;
				font-family:FZLanTingHeiS-R-GB;
				color:rgba(102,102,102,1);
				line-height:24rpx;
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
