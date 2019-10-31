<template>
	<view class="map-box" id="test">
		<!-- 搜索框 -->
		<view class="search-box">搜索网点、地点名称</view>
		
		<!-- 预约 -->
		<view class="count-down-box">
			<view class="count-down-menu">
				<p class="row-one">
					预约中：
					<span>
						<uni-countdown 
						border-color="transparent"	
						:show-day="false" 
						:hour="false" 
						:minute="minute" 
						@timeup="timeup"
						:second="sec">
					</uni-countdown>
					</span>
				</p>
				<p class="row-two">预约编号：xxx500</p>
			</view>
			<view class="count-down-but">取消</view>
		</view>
		
		<!-- 扫码but -->
		<view class="but" @click="gosao">
			<p class="nopro">附近暂无可用充电柜</p>
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
			
			<text @click="clickgohome" class="back">返回</text>
			<image src="../../static/me.png" class="isme" mode=""></image>
		</view>
	</view>
</template>

<script>
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
	export default {
	  components: {uniCountdown},
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
				minute:0,
				sec:4
				
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
			clickgohome(){
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
			
			//倒计时结束回调
			timeup(){
				console.log("结束了")
			},
			
			
			//点击进入扫一扫
			gosao(){
				uni.navigateTo({
				    url: '../home/home'
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
			color:rgba(187,187,187,1);
			line-height:72rpx;
			text-indent:100rpx;
			display: none;
		}
		.count-down-box{
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
			background:rgba(100,100,100,1);
			border-radius:16rpx;
			position: absolute;
			left:calc(50% - 200rpx);
			bottom: 60rpx;
			z-index: 999;
			.nopro{
				font-size:28rpx;
				color:rgba(255,255,255,1);
				line-height:100rpx;
				text-align: center;
			}
		}
		.back{
			font-size:12rpx;
			position: fixed;
			right: 50rpx;
			bottom: 50rpx;
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
	}
</style>
