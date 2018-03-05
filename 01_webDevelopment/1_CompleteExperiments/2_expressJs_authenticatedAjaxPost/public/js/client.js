$(function(){
	$('form').on('submit', function(event){
		event.preventDefault();
		var form = $(this);
		var hardwareData = form.serialize(); //Form verisini URL de gonderilecek formata cevirir.
		
		$.ajax({
			type: 'POST', url: '/hardwarelibrary/add', data: hardwareData
		}).done(function(responseData){
			form.trigger('reset');
			alert("Hardware Name:"+responseData.name+" Status:"+responseData.status);
		})
	})
});