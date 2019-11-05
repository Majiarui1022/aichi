<template>
	  <view class="scan-view">
	    <view class='scan-border'>
	      
	      <camera class='scan-camera' :flash="swichflash" mode="scanCode" binderror="cameraError" @scancode="aaaaa" bindscancode='scancode' frame-size='large'>
	        <cover-image class='cover-corner cover-left-top' src='../../static/left-top.png'></cover-image>
	        <cover-image class='cover-corner cover-right-top' src='../../static/right-top.png'></cover-image>
	        <cover-image class='cover-corner cover-left-bottom' src='../../static/left-bottom.png'></cover-image>
	        <cover-image class='cover-corner cover-right-bottom' src='../../static/right-bottom.png'></cover-image>
	        <image src="" mode=""></image>
	        <cover-view class='scan-animation' :animation="animation"></cover-view>
	      </camera>
		  <p class="codetit">请将二维码放入框内</p>
		 <!-- <p class="codetit" @click="openflash"><image src="../../static/flashlight.png"></image>{{swichflash === "off"?'打开手电筒':'关闭手电筒'}}</p> -->
	    </view>
	  </view>
</template>

<script>
	import mp3 from '../../static/sao.wav'
	export default {
		data() {
			return {
				animation:"",
				swichflash:"off"
			}
		},
		methods:{
			 donghua(){
			 let animation = wx.createAnimation({});
			    var that = this;
				// 控制向上还是向下移动
			    let m = true
				
			    setInterval(function () {
			      if (m) {
			        animation.translateY(240).step({ duration: 3000 })
			        m = !m;
			      } else {
			        animation.translateY(10).step({ duration: 3000 })
			        m = !m;
					
			      }
			        this.animation = animation.export()
			    }.bind(this), 3000)
			  },
			  scancode(e){
				  console.log('打印1')
				  console.log(e)
			    // 校验扫描结果，并处理
			    let res = e.detail.result
			  },
			  aaaaa(e){
			  let innerAudioContext = wx.createInnerAudioContext()
			  innerAudioContext.src = mp3
				  console.log(innerAudioContext)
			    // 提示音
			 innerAudioContext.play()
				  console.log(e)
			  },
			  openflash(){
				 if(this.swichflash === "off"){
					 this.swichflash = "on"
				 }else{
					 this.swichflash = "off"
				 }
			  }
		},
		mounted() {
			this.donghua()
		}
	}
</script>

<style lang="scss">
	/**scan.wxss**/
	.scan-view {
	  width: 100%;
	  height: 100%;
	}
	
	.scan-border {
	  width: 100%;
	  height: 100%;
	  background: #434343;
	  padding-top:160rpx;
	  box-sizing: border-box;
	  .codetit{
		  font-size:34rpx;
		  color:rgba(255,255,255,1);
		  text-align: center;  
		  margin-top: 51rpx;
		  margin-bottom: 100rpx;
		  image{
			width:44rpx;
			height:80rpx;
			margin-right: 20rpx;
			display: block;
			margin: 0 auto;
		  }
	  }
	}
	
	.scan-camera {
	  width: 480rpx;
	  height: 480rpx;
	  border-radius: 6rpx;
	  margin:0 auto;
	  position: relative;
	  
	}
	
	.cover-corner {
	  width: 40rpx;
	  height: 40rpx;
	  position: absolute;
	}
	
	.cover-left-top {
	  left: 0;
	  top: 0;
	}
	
	.cover-right-top {
	  right: 0;
	  top: 0;
	}
	
	.cover-left-bottom {
	  left: 0;
	  bottom: 0;
	}
	
	.cover-right-bottom {
	  right: 0;
	  bottom: 0;
	}
	
	.scan-animation {
	  position: absolute;
	  top: 10rpx;
	  left: 10rpx;
	  width: 460rpx;
	  height: 8rpx;
	  background-color: #038577;
	  border-radius: 50%;
	}

</style>