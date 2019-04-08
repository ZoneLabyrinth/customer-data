function connectWebViewJavascriptBridge(callback){
	if (window.WebViewJavascriptBridge){
	    callback(WebViewJavascriptBridge);
	} else {
	    document.addEventListener('WebViewJavascriptBridgeReady', function(){
	        callback(WebViewJavascriptBridge);
	    }, false);
	}
}
connectWebViewJavascriptBridge(function(YonYouJSBridge){
    YonYouJSBridge.init(function(message, responseCallback){});
	var data = {
		'function': 'configNavBar',
		parameters: {
			backgroundColor: '#0072bb',
			rightItems: [
				{
					callback: 'test',
					icon: 'http://ykj-esn-test.oss-cn-beijing.aliyuncs.com/152257/1/201703/29/14907677438Mej.png',

				}
			]
		}
	};
	YonYouJSBridge.registerHandler('test', function(data, responseCallback) {
        alert(4344);
    });
	YonYouJSBridge.send(JSON.stringify(data), function(responseData){});
});

