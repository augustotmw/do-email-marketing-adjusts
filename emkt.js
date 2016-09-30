$(function(){
	var forAll = prompt("If you want to add a link in all images, please type the general link, or else leave it blank or esc this prompt", "");
	var relativeUrl = prompt("If you want to add a relative url to the images, please type it on input below, or else leave blank or esc this prompt", "");
	$("img").each(function(index, element) {
		var $this = $(this);
        $this.parent().attr("width",$this.width())
		$this.parent().attr("height",$this.height())
		$this.attr("border","0");
		$this.attr("style","display:block;");
		if(relativeUrl != "" && relativeUrl != null){
			var _splited = $this.attr("src").split('/');
			$this.attr("src", ((relativeUrl.replace(/\/$/gi, ''))+'/'+_splited[_splited.length-1]));
		}
		if(forAll != "" && forAll != null) $this.wrap('<a href="'+forAll+'" target="_blank"></a>');

    });
	$("body > table").attr("align","center");
	$("img").dblclick(function(){
		var $this = $(this);
		var _url = prompt("qual a url?");
		if(_url != "" && _url != null) $this.wrap('<a href="'+_url+'" target="_blank"></a>');
	});
	$('body > table td').attr('valign','top');
	$('body').prepend('\n <div style="padding: 15px; display: block; width: 100%; text-align: center;">Se você não estiver visualizando a mensagem corretamente, <a href="" target="_blank">acesse esse link</a>.</div>');
	$("html").append('<input type="button" value="Copiar" id="btCopy" />');
	$("#btCopy").click(function(){
		var doc = "<html>"+$('html').clone().find('script,noscript,style,#btCopy,#input').remove().end().html()+"</html>";
		$("html").append('<textarea id="input">'+doc+'</textarea>');
		$("#input").select().on('focusout',function(){$("#input").remove();});
	});
});