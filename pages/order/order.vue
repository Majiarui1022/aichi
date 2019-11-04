<template>
	<view class="order-box">
		<view class="order-content">
			<ul>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">预约成功</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">已取消</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
							<view class="order-name order-new">取消时间：2019-09-17 09:19</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">完成</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
							<view class="order-name order-new">完成时间：2019-09-17 09:19</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">完成</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
							<view class="order-time order-new">完成时间：2019-09-17 09:19</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">预约成功</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">预约成功</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
						</view>
					</view>
				</li>
				<li>
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">预约编号：xxxx500</text>
							<view class="order-status-box"><text class="order-status">预约成功</text></view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">汽车电池</view>
							<view class="order-menu-number">电池组编号：xxx0005</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new">预约时间：2019-09-17 09:19</view>
							<view class="order-name order-new">网点名称：祥科路炬芯研发大厦B1停车场</view>
						</view>
					</view>
				</li>
			</ul>
			<uni-load-more :status="loadingStatus" :content-text='loadingWord'></uni-load-more>
		</view>
	</view>
	
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	export default {
		 components: {uniLoadMore},
		data() {
			return {
				loadingStatus:'more',
				loadingWord:{
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了",
				},
				
			}
		},
		onReachBottom() {
			this.loadingStatus = 'loading'
			setTimeout(()=>{
			this.loadingStatus = 'noMore'
			},2000)
			console.log('触底')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.order-box{
		width: 100%;
		background: #F9F9F9;
		.order-content{
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			ul{
				width: 100%;
				li{
					width: 100%;
					background:rgba(255,255,255,1);
					box-shadow:0px 2rpx 2rpx 0px rgba(0, 0, 0, 0.15);
					border-radius:5rpx;
					margin-bottom: 28rpx;
					.order-list-content{
						width:100%;
						padding-left:20rpx;
						padding-right: 5rpx;
						box-sizing: border-box;
						.order-tit{
							height:70rpx;
							width:100%;
							display: flex;
							justify-content: space-between;
							border-bottom: 1rpx solid #D8D8D8;
							.order-name{
								font-size:26rpx;
								font-weight:bold;
								color:rgba(51,51,51,1);
								line-height:70rpx;
								display: block;
								max-width: 550rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.order-status-box{
								display: flex;
								justify-content: space-between;
								.order-status{
									font-size:26rpx;
									font-weight:bold;
									color:rgba(3,133,119,1);
									line-height:70rpx;
								}
							}
						}
						.order-menu{
							width: 100%;
							height: 105rpx;
							border-bottom: 1rpx solid #D8D8D8;
							padding: 22rpx 0;
							box-sizing: border-box;
							.order-menu-name{
								font-size:26rpx;
								font-family:SimHei;
								color:rgba(51,51,51,1);
								line-height:26rpx;
								margin-bottom: 10rpx;
							}
							.order-menu-number{
								font-size:26rpx;
								font-family:SimHei;
								color:rgba(153,153,153,1);
								line-height:26rpx;
								max-width: 550rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
						.order-timer-address{
							padding: 20rpx 0;
							box-sizing: border-box;
							width: 100%;
							.order-new{
								font-size:26rpx;
								font-family:SimHei;
								color:rgba(51,51,51,1);
								line-height:26rpx;
								margin-bottom: 26rpx;
								&:last-child{
									margin: 0;
								}
							}
							.order-name{
								max-width: 550rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}
		}
	}
</style>
