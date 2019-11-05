<template>
	<view class="taskdian-box">
		<view class="task-padding-box">
			<!-- 是否取电 -->
			<view class="task-content">
				<image class="mylogo" src="../../static/mylogo.png"></image>
				<view class="task-but-box">
					<view class="task-dian taskor">取电</view>
					<view class="no-task taskor">暂不取电</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.taskdian-box{
		width: 100%;
		height: 100%;
		.task-padding-box{
			width: 100%;
			height: 100%;
			padding: 0 20rpx;
			box-sizing: border-box;
			.task-content{
				width: 100%;
				height: 100%;
				.mylogo{
					width:320rpx;
					height:192rpx;
					margin: 197rpx auto 0;
					display: block;
				}
				.task-but-box{
					width: 100%;
					margin-top: 212rpx;
					.taskor{
						width: 100%;
						height:80rpx;
						background:rgba(3,133,119,1);
						border-radius:40rpx;
						text-align: center;
						line-height: 80rpx;
						font-size:30rpx;
						color:rgba(255,255,255,1);
						margin-top: 54rpx;
					}
				}
			}
		}
	}
</style>
