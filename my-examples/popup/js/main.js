$(document).ready(function () {
//	$('.popup').on('click', function(){
//		popupShow();
//		popupPosition();
//		$('.btn-close').click(function(){
//			popupHide();
//		})
//	})

	$(window).resize(function () {
		popupPosition();
	});

	var popupContainer = {
		popup: $('#popup'),
		show:function () {
			$('body').prepend("<div id='overlay'></div>");
//			popupContainer.popup.prepend('');
			$('#overlay').animate({
				opacity:0.2,
				opacity:0.5
			}, 500);
			var globalWidth = $('body').width();
			var globalHeight = $(window).height();
			$('#overlay').css('width', globalWidth);
			$('#overlay').css('height', globalHeight);
			popupContainer.popup.css('left', globalWidth / 2 - ($('#popup').width() / 2));
			popupContainer.popup.css('top', globalHeight / 2 - ($('#popup').height() / 2));
			popupContainer.popup.show();
		},

		hide:function () {
			popupContainer.popup.fadeOut();
			$('#overlay').fadeOut(500);
			setTimeout(function () {
				$('#overlay').remove();
			}, 1000);

		},

		init:function () {
			$('.open').on('click', popupContainer.show);
			popupContainer.popup.on('click', popupContainer.hide);

		}

	};
	popupContainer.init();


});






// old version

function popupShow() {
	var $popup = $('#popup');
	var $content = $('.text').val();
	$('body').append("<div id='overlay'></div>");
	$('body').append("<div id='popup'>" + $content + "</div>");

	$('#overlay').animate({
		opacity:0.2,
		opacity:0.5
	}, 500);
	$('#popup').append('<a href="#" class="btn-close">close</a>');

}
function popupPosition() {
	var globalWidth = $('body').width();
	var globalHeight = $(window).height();
	$('#overlay').css('width', globalWidth);
	$('#overlay').css('height', globalHeight);
	$('#popup').css('left', globalWidth / 2 - ($('#popup').width() / 2));
	$('#popup').css('top', globalHeight / 2 - ($('#popup').height() / 2));
}
function popupHide() {

	$('#popup').remove();
	$('#overlay').fadeOut(500);
	setTimeout(function () {
		$('#overlay').remove();
	}, 1000);


}


