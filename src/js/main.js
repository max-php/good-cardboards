$(document).ready(function () {
	// Слайдер
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow arrow__left"></div>',
		nextArrow: '<div class="slider-arrow arrow__right"></div>',
		responsive: [
			{
				breakpoint: 961,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 787,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 581,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Настройка номеров
	$("#header__phone, #offer__phone, #modal__phone").mask("+7 (999) 999-99-99");

	// Модальноые окно
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks').fadeOut('slow');
	})

	// Отправка сообщения на почту без перезагрузки страницы
	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

	// Стрелка верх
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn('slow');
		} else {
			$('.pageup').fadeOut('slow');
		}
	});

	// Плавная прокрутка
	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
});