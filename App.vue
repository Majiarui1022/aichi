<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	a{
	  text-decoration: none;
	}
	ul li{
	  list-style: none;
	}
	body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {margin:0;padding:0;}
	table {border-collapse:collapse;border-spacing:0;}
	html{
	  width : 100% ;
	  height : 100% ;
	  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	body{
	  width : 100% ;
	  height : 100% ;
	}
	fieldset,img {border:0}
	ol,ul {list-style:none}
	caption,th {text-align:left}
	h1,h2,h3,h4,h5,h6 {font-size:100%;font-weight:normal}
	q:before,q:after {content:''}
	abbr,acronym { border:0}
	
	input[type="number"] {
	  -moz-appearance: textfield;
	}
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
	}
</style>
