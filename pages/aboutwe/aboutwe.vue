<template>
	 <view>
	       
	    </view>
	 
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
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
				    }
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
		}
	}
</script>

<style>
	
	.back{
		font-size:12px;
		position: fixed;
		right: 50px;
		bottom: 50px;
	}
	.isme{
		display: block;
		position: fixed;
		width: 20px;
		height: 44px;
		top: 50%;
		left:50%;
		margin-left: -10px;
		margin-top: -22px;
	}
</style>
