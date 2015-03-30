var t = '';

$("#input_field").keyup(function (){
	clearTimeout(t);
  t = setTimeout("send_data()", 2000);
});

var send_data = function () {
	$.ajax({
		url: ...,
		dataType: 'script',
		data: {name: 'name'}
	})
}
