loadScript("http://code.jquery.com/jquery-1.11.0.min.js", afterJquery);
function afterJquery(){
	loadScript("https://cdn.rawgit.com/augustotmw/doEmailMarketingAdjusts/master/emkt.js", null);
}
function loadScript(src, callback){
	var s,r,t;
	r = false;
	s = document.createElement('script');
	s.type = 'text/javascript';
	src.search('jquery')
	s.src = src;
	t = document.getElementsByTagName('script')[0].parentNode.appendChild(s);
	s.onload = s.onreadystatechange = function() {
		if ( !r && (!this.readyState || this.readyState == 'complete') ){
			r = true;
			if( typeof callback == 'function' )
				callback();
		}
	};
}
