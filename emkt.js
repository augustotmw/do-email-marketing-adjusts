$(function(){
	//prompt to get url for make links wrapping all images
	var forAll = prompt("If you want to add a link in all images, please type the general link, or else leave it blank or esc this prompt", "");
	//prompt to get url for images' relative path
	var relativeUrl = prompt("If you want to add a relative url to the images, please type it on input below, or else leave blank or esc this prompt", "");
	//work the images and parents
	$("img").each(function(index, element) {
		var $this = $(this);
        $this.parent().attr("width",$this.width()) //set img width to td
		$this.parent().attr("height",$this.height()) //set img height to td
		$this.attr("border","0"); //set border = 0
		$this.attr("style","display:block;"); //set display: block
		if(relativeUrl != "" && relativeUrl != null){ //set relative url, if has
			var _splited = $this.attr("src").split('/');
			$this.attr("src", ((relativeUrl.replace(/\/$/gi, ''))+'/'+_splited[_splited.length-1]));
		}
		// wrap image with link, if has
		if(forAll != "" && forAll != null) $this.wrap('<a href="'+forAll+'" target="_blank"></a>');

    });
	//set double click event to change url/link of image
	$("img").dblclick(function(){
		var $this = $(this);
		var _url = prompt("qual a url?");
		if(_url != "" && _url != null)  {
			$this.wrap('<a href="'+_url+'" target="_blank"></a>');
		} else {
			$this.parents('td').html($this.html());
		}
	});
	//apply align = center to table
	$("body > table").attr("align","center");
	$('body > table td').attr('valign','top');
	$('body').prepend('\n <div style="padding: 15px; display: table; width: auto; margin: 0 auto; text-align: center;">Se você não estiver visualizando a mensagem corretamente, <a href="" target="_blank">acesse esse link</a>.</div>');
	$("html").append('<input type="button" value="Copiar" id="btCopy" />');
	$("#btCopy").click(function(){
		var doc = "<html>"+$('html').clone().find('script,noscript,style,#btCopy,#input').remove().end().html()+"</html>";
		$("html").append('<textarea id="input">'+doc+'</textarea>');
		$("#input").select().on('focusout',function(){$("#input").remove();});
	});
});
