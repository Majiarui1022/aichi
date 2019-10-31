<template>
	<view class="netdetail-box">
		<view class="scroll-y">
			<!-- 网点地址 -->
			<view class="address-box">
				<view class="address">
					<p class="address-name">祥科路炬芯研发大厦B1停车场</p>
					<p class="address-pic">祥科路炬芯研发大厦B1停车场</p>
				</view>
				<view class="distance"></view>
			</view>
			<!-- 网点充电桩 -->
			<view class="give-dian-box">
				<ul>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					<li>
						<view class="menu">
							<view class="one"><span>未充电</span></view>
							<view class="two">
								<view class="electricity-bar">
									<block v-for="(item,index) in listnum" :key="index">
										<i></i>
									</block>
								</view>
								<span class="show-electri-num">100%</span>
							</view>
							<view class="three">
								<p>电池组编号：<span>xxx0005/17年生产</span></p>
							</view>
						</view>
						<view class="but" @click="openPopup">预约</view>
					</li>
					
				</ul>
			</view>
			
			<!-- 底部弹窗 -->
			<uni-popup ref="popup" type="bottom" maskClick="true" class="piker-box">
				<view class="piker-view">
					<!-- 电池名称 -->
					<view class="piker-tit">
						<p class="piker-name">汽车电池</p>
					</view>
					<!-- 电池信息 -->
					<view class="menu">
						<view class="one"><span>未充电</span></view>
						<view class="two">
							<view class="electricity-bar">
								<block v-for="(item,index) in listnum" :key="index">
									<i></i>
								</block>
							</view>
							<span class="show-electri-num">100%</span>
						</view>
						<view class="three">
							<p>电池组编号：<span>xxx0005/17年生产</span></p>
						</view>
					</view>
					<!-- 电池介绍 -->
					<view class="word-content">
						<p class="word-menu">中国文字史是中国文字长达数千年的发展和演变的历史过程, 依照发展的时间顺序,基本可以分为秦、汉以前音乐、汉、唐 时期文字、宋、秦、清、明、元、天、地、宋、秦、清、明、元、天、地、宋、秦、清、明、元、天、地、宋、秦、清、明、元、天、地、商等等</p>
					</view>
				</view>
				<view class="piker-but" @click="quedingnle">确定预约</view>
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
					<view class="uni-tip-content">您所选的电池已有电池被预约，请重新预约</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel">确定</view>
					</view>
				</view>
			</uni-popup>
			
		</view>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
	  components: {uniPopup},
		data() {
			return {
				listnum:10,
				show: false,
				type:'center',
				authentication:false
			}
		},  
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option); //打印出上个页面传递的参数。
		},
		methods: {
			//打开底部弹窗
			openPopup(){
				this.$refs.popup.open()
			},
			//关闭底部弹窗
			closePopup(){
				this.$refs.popup.close()
			},
			//打开  已被预约提醒  + 暂未认证提醒
			quedingnle(){
				this.authentication = true
			},
			//关闭  已被预约提醒  + 暂未认证提醒
			cancel(){
				this.authentication=false
			}
		}
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
						}
						.menu{
							flex:1;
							.one{
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
									i{
										float: left;
										width:8rpx;
										height:32rpx;
										background:rgba(3,133,119,1);
										border-radius:4rpx;
										margin-right: 8rpx;
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
								i{
									float: left;
									width:8rpx;
									height:32rpx;
									background:rgba(3,133,119,1);
									border-radius:4rpx;
									margin-right: 8rpx;
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
