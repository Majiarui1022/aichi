<template>
	<view class="order-box">
		<!-- 订单 -->
		<view class="order-content" v-if="orderlist.length > 0">
			<ul>
				<li  v-for = "(item,index) in orderlist" :key="index">
					<view class="order-list-content">
						<view class="order-tit">
							<text class="order-name">{{item.number}}</text>
							<view class="order-status-box">
								<text class="order-status">{{item.status}}</text>
								<image v-if="item.is_delete" @click="removeorder(item.id,index)" src="../../static/delete.png" mode=""></image>
							</view>
						</view>
						<view class="order-menu">
							<view class="order-menu-name">{{item.battery_pack[0]}}电池</view>
							<view class="order-menu-number">电池组编号：{{item.battery_pack[1]}}</view>
						</view>
						<!-- 预约电池时间地点 -->
						<view class="order-timer-address">
							<view class="order-time order-new" v-if="item.appointment_time !== null">预约时间:{{item.appointment_time}}</view>
							<view class="order-name order-new">网点名称：{{item.battery_pack[2]}}</view>
							<view class="order-name order-new" v-if="item.end_time !== null">{{item.end_time}}</view>
						</view>
					</view>
				</li>
			</ul>
			<uni-load-more v-if="orderlist.length > 4" :status="loadingStatus" :content-text='loadingWord'></uni-load-more>
		</view>
	
		<!-- 暂无订单 --> 
		<view class="order-no" v-else>
			<image src="../../static/ch.png" mode=""></image>
			<text>暂无订单</text>
		</view>
	
		<!-- 提示框 -->
		<!-- <uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-title">提醒</view>
				<view class="uni-tip-content">您是否确定删除当前订单</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="removeorder">是</view>
					<view class="uni-tip-button" @click="show = false">否</view>
				</view>
			</view>
		</uni-popup> -->
	</view>
	
</template>

<script>
	import requireurl from '../../requist/requist.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	export default {
		 components: {uniLoadMore,uniPopup},
		data() {
			return {
				loadingStatus:'more',
				loadingWord:{
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了",
				},
				orderlist:[],
				page:1,
				nexturl:null,
				Nonext:true,				//防止多次上拉加载
				show: false,
				type:'center',
				orderIndex:-1
			}
		},
		onReachBottom() {
			this.loadingStatus = 'loading'
			console.log(this.nexturl)
			if(this.nexturl === null){
				this.loadingStatus = 'noMore'
			}else{
				if(this.Nonext === true){
					this.Nonext = false
					this.getNextorder()
				}
			}
		},
		methods: {
			getcodesuccess(e){
				this.Nonext = true
				this.orderlist.push.apply(this.orderlist,e.data.results);
				this.nexturl = e.data.next
			},
			getNextorder(){
				this.page++
				requireurl.getData(`/applet/orders/?page=${this.page}`,this.getcodesuccess,this.file)
			},
			//删除订单
			removeorder(id,index){
				console.log("删除")
				this.orderIndex = index
				requireurl.getDeleteData(`/applet/delete_order/${id}/`,this.removeback,this.file)
			},
			removeback(){
				this.orderlist.splice(this.orderIndex,1)
				this.page = 1
				requireurl.getData(`/applet/orders/?page=${this.page}`,this.getorderlist,this.file)
			},
			getorderlist(e){
				this.Nonext = true
				this.orderlist = []
				this.orderlist.push.apply(this.orderlist,e.data.results);
				this.nexturl = e.data.next
			}
		},
		mounted() {
			requireurl.getData(`/applet/orders/?page=${this.page}`,this.getcodesuccess,this.file)
			
		}
	}
</script>

<style lang="scss">
	.order-box{
		width: 100%;
		height: 100%;
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
								align-items: center;
								.order-status{
									font-size:26rpx;
									font-weight:bold;
									color:rgba(3,133,119,1);
									line-height:70rpx;
								}
								image{
									width: 36rpx;
									height: 36rpx;
									display: block;
									margin:0 8rpx;
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
		
		.order-no{
			width: 100%;
			height: 100%;
			position: relative;
			image{
				width:426rpx;
				height:364rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-top: -213rpx;
				margin-left: -182rpx;
			}
			text{
				font-size:36rpx;
				font-family:SimHei;
				color:rgba(3,133,119,1);
				position: absolute;
				top: 788rpx;
				left: 168px;

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
	}
</style>
