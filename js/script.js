lazyload($('img[data-src]'));

let nav = document.querySelector('.nav');
window.addEventListener('resize', function () {
	if (window.innerWidth > 768 && nav.classList.contains('active')) {
		nav.classList.remove('active');
		header.classList.remove('active');
		burger.classList.remove('active');
		document.body.classList.remove('lock');
	}
})

setTimeout(function () {
	nav.style.transition = 'transform 0.8s ease';
}, 1000)

$('.section-title').not('h1').not('.no-anim').addClass('animation');

$(".stroke").each(anime);
function anime() {
	var stroke = $(this);
	var offsetTop = stroke.offset().top - $(window).height();

	if ($(document).scrollTop() > offsetTop + 50) {
		stroke.addClass('active');
	}
	$(window).scroll(function (event) {
		offsetTop = stroke.offset().top - $(window).height();
		if ($(document).scrollTop() > offsetTop + 50) {
			stroke.addClass('active');
		}
	});
}

let customSwitch = document.querySelector('.switch');
customSwitch.querySelector('.switch__handle').addEventListener('click', function () {
	customSwitch.classList.toggle('active');
})

let header = document.querySelector('header');
if (window.pageYOffset > 90) {
	header.classList.add('fixed');
} else {
	header.classList.remove('fixed');
}
// прилипание шапки
window.addEventListener('scroll', function () {
	if (window.pageYOffset > 90) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});




let burger = document.querySelector('.header__burger');
let headerGrade = header.querySelector('.header__grade');
let headerSocial = header.querySelector('.header__social');
burger.addEventListener('click', function () {
	if (!burger.classList.contains('active')) {
		burger.classList.add('active');
		header.classList.add('active');
		headerGrade.style.transitionDelay = '0.5s';
		headerSocial.style.transitionDelay = '0.5s';

		setTimeout(function () {
			nav.classList.add('active');
			if (window.innerWidth < 768) {
				nav.style.minHeight = "calc(100vh - 21rem)";
			} else {
				nav.style.minHeight = "calc(100vh - 11.5rem)";
			}
		}, 500)
	} else {
		burger.classList.remove('active');
		nav.classList.remove('active');
		headerGrade.style.transitionDelay = '';
		headerSocial.style.transitionDelay = '';
		setTimeout(function () {
			header.classList.remove('active');
			nav.style.minHeight = 0;
		}, 800)
	}
	document.body.classList.toggle('lock');

	let links = nav.querySelectorAll('.nav__link');
	links.forEach(function (link) {
		link.addEventListener('click', function () {
			closeMenu();
		})
	})
})

function closeMenu() {
	burger.classList.remove('active');
	nav.classList.remove('active');
	setTimeout(function () {
		header.classList.remove('active');
		nav.style.minHeight = 0;
	}, 800)
	document.body.classList.remove('lock');
}

// checkbox 
let checkbox = document.querySelectorAll('.agree__checkbox');
checkbox.forEach(function (item) {
	let mainBtn = item.closest('form').querySelector('.main-btn');
	item.classList.add('check');

	item.addEventListener('click', function () {
		item.classList.toggle('check');
		if (!item.classList.contains('check')) {
			mainBtn.setAttribute('disabled', 'disabled');
		} else {
			mainBtn.removeAttribute('disabled', 'disabled');
		}
		mainBtn.classList.toggle('disabled');
	})
})

// кнопка наверх
let heightOfHero = document.querySelector('.hero').offsetHeight;
let btnUp = document.querySelector('.btn-top');
window.addEventListener('scroll', function () {
	if (window.pageYOffset > heightOfHero - 400) {
		btnUp.classList.add('active')
	} else {
		btnUp.classList.remove('active')
	}
});
if (btnUp) {
	btnUp.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	})
}

// select
let select = document.querySelectorAll('select');
select.forEach(function (item) {
	if (item) {
		customSelect(item);
	}
})

// select с соцсетями
let selectSocial = document.querySelectorAll('.select-social');
selectSocial.forEach(function (selectWrap) {
	let select = selectWrap.querySelector('select');
	let selectImg = selectWrap.querySelector('.select-social__img');

	select.addEventListener('click', function () {
		selectImg.classList.toggle('active');
	})

	select.addEventListener('change', function () {
		let socialItem = selectImg.querySelectorAll('.social__item');
		socialItem.forEach((item) => {
			item.classList.remove('active');
		})
		if (select.value == "WhatsApp") {
			selectImg.querySelector('.social__item-whatsapp').classList.add('active');
		}
		if (select.value == "Telegram") {
			selectImg.querySelector('.social__item-telegram').classList.add('active');
		}
	});
})

// маска на телефон
$("input[type='tel']").mask('+7(999)999-99-99');
jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
	return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
});

// tabs
document.querySelectorAll('.benefits__tab').forEach(function (tabsBtn) {
	tabsBtn.addEventListener('click', function (e) {
		const path = e.currentTarget.dataset.tab;
		document.querySelectorAll('.benefits__tab').forEach(function (btn) {
			btn.classList.remove('active')
		});
		e.currentTarget.classList.add('active');
		document.querySelectorAll('.benefits__item').forEach(function (tabsBtn) {
			tabsBtn.classList.remove('active')
		});
		document.querySelector(`[data-benefits="${path}"]`).classList.add('active');
	});
});
let benefitsNumber = document.querySelectorAll('.benefits__number');
for (let i = 0; i < benefitsNumber.length; i++) {
	benefitsNumber[i].innerHTML = '0' + (i + 1);
}

// доп.услуги
let servNumber = document.querySelectorAll('.services__number');
for (let i = 0; i < servNumber.length; i++) {
	i < 9 ? servNumber[i].innerHTML = '0' + (i + 1) : servNumber[i].innerHTML = i + 1;
}

let servBtn = document.querySelectorAll('.services__btn');
servBtn.forEach(btn => {
	btn.addEventListener('click', function () {
		btn.closest('.services__slide').classList.toggle('active');
	})
})


// block system
let systemLabel = document.querySelector('.system__label');
if (systemLabel) {
	if (window.innerWidth < 768) {
		systemLabel.innerHTML = "Листайте и кликайте на этап, чтобы понять, что вы получите";
	} else {
		systemLabel.innerHTML = 'Кликните на этап, чтобы понять, что вы получите';
	}
	window.addEventListener('resize', function () {
		if (window.innerWidth < 768) {
			systemLabel.innerHTML = "Листайте и кликайте на этап, чтобы понять, что вы получите";
		} else {
			systemLabel.innerHTML = 'Кликните на этап, чтобы понять, что вы получите';
		}
	})
}
let systemTabs = document.querySelectorAll('.system__tab');
let systemContent = document.querySelectorAll('.system__content');

systemTabs.forEach((tab, index) => {
	let number = document.createElement('span');
	number.classList.add('system__number');
	number.innerHTML = '0' + (index + 1);
	tab.prepend(number);
	tab.addEventListener('click', (e) => {
		systemTabs.forEach(tab => {
			tab.classList.remove('active')
		});
		tab.classList.add('active');

		let line = document.querySelector('.system__line');
		if (window.innerWidth > 768) {
			line.style.left = (e.target.offsetLeft / 10) - ((line.offsetWidth - tab.offsetWidth) / 2 / 10) + 'rem';
		} else {
			line.style.width = tab.offsetWidth / 10 + 'rem';
			line.style.left = e.target.offsetLeft / 10 + 'rem';
		}

		systemContent.forEach(content => {
			content.classList.remove('active')
		});
		systemContent[index].classList.add('active');

	})
})

let systemHint = document.querySelectorAll('.system__hint');
let hintActive = document.getElementsByClassName('system__hint active');

Array.from(systemHint).forEach(function (item) {
	item.addEventListener('click', function (e) {
		if (hintActive.length > 0 && hintActive[0] !== this) hintActive[0].classList.remove('active');

		this.classList.toggle('active');
	});
});


// валидация формы
$('[data-form-validate-js]').each(function () {
	var form = $(this);

	form.validate({
		errorClass: "validate_error",
		rules: {
			phone: {
				required: true,
				checkMaskPhone: true,
			},
			email: {
				required: true
			}
		},
		errorPlacement: function (error, element) { },
		submitHandler: function () {
			var data = form.serialize();
			var action = form.attr('action');
			var method = form.attr('method');

			$.ajax({
				type: method,
				url: action,
				data: data,
				success: function (response) {
					window.location.href = "thanks.html";
				},
				error: function (response) {
					window.location.href = "404.html";
				},
			});
		},
	});
});

$('[data-download-form-js]').each(function () {
	var form = $(this);

	form.validate({
		errorClass: "validate_error",
		rules: {
			phone: {
				required: true,
				checkMaskPhone: true
			},
			email: {
				required: true
			}
		},
		errorPlacement: function (error, element) { },
		submitHandler: function () {
			var data = form.serialize();
			var action = form.attr('action');
			var method = form.attr('method');
			var link = document.createElement('a');
			var file = form.attr('data-download-form-js');

			link.setAttribute('href', file);
			link.setAttribute('download', '');

			$.ajax({
				type: method,
				url: action,
				data: data,
				success: function (response) {
					window.location.href = "thanks.html";
					link.click();
				},
				error: function (response) {
					window.location.href = "404.html";
				},
			});
		},
	});
});


// плавная прокрутка
$("[data-anchor-btn-js]").on("click", function (event) {
	event.preventDefault();
	var headerHeight = $('header').height();

	var target = $(this).attr('href');

	if ($(target).length) {
		if (window.innerWidth > 768) {
			var offset = ($(target).offset().top) - 150;
		} else {
			var offset = ($(target).offset().top) - headerHeight - 50;
		}

		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();

		if (offset > scroll) {
			var time = Math.round(offset / windowHeight) * 500;
		} else {
			var time = Math.round((scroll - offset) / windowHeight) * 300;
		}

		$('body,html').animate({
			scrollTop: offset
		}, time);
	} else {
		window.location.href = "index.html";
	}
});

$('.nav__list a').on("click", handler);
$(function () {
	handler(location.hash);
});

function handler(event) {
	var hash = typeof event === 'string' ? event : event.target.hash;
	var headerHeight = $('header').height();

	if (!hash)
		return

	var tag = $(hash);

	if (tag.length) {
		var offset = tag.offset().top - headerHeight - 50;
		$('html, body').stop().animate({
			scrollTop: offset
		}, 2000);
	}
}

window.onhashchange = locationHashChanged;
function locationHashChanged() {
	if (location.hash) {
		history.pushState("", document.title, window.location.pathname);
	}
}


// квиз
var number = 0;
var maxNumber = $(".quiz-item").length;
var $element = $(".quiz-item").find("input");
var btnPrev = $(".quiz-btn--prev");
var btnNext = $('.quiz-btn--next');
var isValid;
var dataBlock;
var activeSlide = [];

$element.on('change input', function (e) {
	var value = $(this).val().trim();
	isValid = value !== "";
	btnActive(!isValid);
});

function btnActive(isValid) {
	if (number === 0) {
		btnPrev.prop('disabled', 'false');
		btnNext.prop('disabled', isValid);
	} else {
		btnPrev.prop('disabled', false);
		if (activeSlide[number] === true || isValid === false) {
			btnNext.prop('disabled', false);
		} else {
			btnNext.prop('disabled', true);
		}
	}
}

let quizSingle = document.querySelectorAll('[data-quiz-single-answer]');
quizSingle.forEach(function (item) {
	let inputs = item.querySelectorAll('input');

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("click", function () {
			for (let j = 0; j < inputs.length; j++) {
				if (inputs[j].getAttribute('checked') == 'checked') {
					inputs[j].removeAttribute('checked')
				}
			};
			inputs[i].setAttribute('checked', 'checked')
		});
	}
})

let quizMulti = document.querySelectorAll('[data-quiz-multi-answer]');
quizMulti.forEach(function (item) {
	let inputs = item.querySelectorAll('input[type="checkbox"]');

	inputs.forEach(function (input) {
		input.addEventListener('click', function () {
			if (input.getAttribute('checked') == 'checked') {
				input.removeAttribute('checked');
			} else {
				input.setAttribute('checked', 'checked')
			}
		})
	})
})

$('input[name="quiz0"], input[name="quiz3"], input[name="quiz4"]').on('change', function () {
	setTimeout(function () {
		btnNext.click();
	}, 500);
});

// progressbar
function progress(num) {
	const percent = parseInt((100 / maxNumber) * (num + 1));
	$('.js-quiz').text(num + 1);
	$('.quiz__progress-inner').css('width', (percent === 100 ? 96 : percent) + '%');
}
progress(0);

// btn
function btnClick() {
	btnPrev.on('click', function (event) {
		event.preventDefault();
		--number;
		$(".quiz-item").hide();
		$(".quiz-item").eq(number).fadeIn();
		btnActive(!isValid);
		if (number === 0) {
			btnPrev.hide();
		}
		progress(number);
		btnNext.blur();
	});

	btnNext.on('click', function (event) {
		event.preventDefault();
		let quizScroll = $(".quiz__inner").offset().top - 100;

		activeSlide[number] = true;
		++number;
		$(".quiz-item").hide();
		$(".quiz-item").eq(number).fadeIn(1000);
		btnActive(!isValid);

		if (activeSlide[number] === true) {
			btnNext.prop('disabled', false);
		} else {
			btnNext.prop('disabled', true);
		}

		if (number > 0) {
			btnPrev.show();
		}

		if (number == 2) {
			btnNext.prop('disabled', false);
		}

		$('html, body').animate({
			scrollTop: quizScroll
		}, 1000);

		progress(number);

		if (number === maxNumber - 1) {
			$(".quiz__bottom").hide();
			$(".quiz__inner").addClass('final');
			$(".quiz__progress-text").html('<b>Тест пройден на 100%</b>');
			$('.quiz-plate__text').html(`
			<p>
			&laquo;Захватим&raquo; ваш город маркетингом, чтобы каждый потенциальный покупатель захотел заказать именно у&nbsp;вас.
			</p> 

			<p>
			<b>С&nbsp;радостью поделимся контактами наших клиентов,</b> чтобы вы&nbsp;лично получили от&nbsp;них обратную связь по&nbsp;нашей работе!
			</p>
			`);

			setTimeout(function () {
				quizFinalStep();
			}, 500)
		}

		setTimeout(function () {
			btnNext.trigger("blur");
		}, 500);
	});
}
btnClick();

var quizFinalStep = function () {
	$('.quiz__body').addClass('blur');

	setTimeout(function () {
		$('.quiz-item--final').addClass('visible');
	}, 1500)

	setTimeout(function () {
		$('.quiz__body').removeClass('blur');
	}, 1000)
}



// слайдеры
let swipers = document.querySelectorAll('.swiper');
swipers.forEach(function (slider) {
	let swiper = new Swiper(slider, {
		loop: false,
		speed: 600,
		centeredSlides: false,
		touchRatio: 1,
		slidesPerView: 'auto',
		freeMode: true,

		navigation: {
			nextEl: slider.closest('section').querySelector('.slider-btn--next'),
			prevEl: slider.closest('section').querySelector('.slider-btn--prev'),
		},

		pagination: {
			el: slider.closest('section').querySelector('.swiper-pagination'),
			clickable: true,
		},
	});
})

let teamSwiper = document.querySelector('.team__swiper');
let membersSwiper = document.querySelector('.team__members');
setTimeout(function () {
	teamSwiper.classList.add('swiper');
	membersSwiper.classList.add('swiper');
	var teamMembers = new Swiper(membersSwiper, {
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
		clickable: true,
	});
	var swiper2 = new Swiper(teamSwiper, {
		loop: false,
		speed: 700,
		centeredSlides: false,
		touchRatio: 1,
		slidesPerView: 1,
		freeMode: true,
		effect: "fade",

		navigation: {
			nextEl: teamSwiper.closest('section').querySelector('.slider-btn--next'),
			prevEl: teamSwiper.closest('section').querySelector('.slider-btn--prev'),
		},
		pagination: {
			el: teamSwiper.closest('section').querySelector('.swiper-pagination'),
			clickable: true,
		},
		thumbs: {
			swiper: teamMembers,
		},
	});
}, 500)



// анимация подгрузки контента при скролле
var titleAnimation = function () {
	$('.animation').each(function () {
		var element = $(this);

		if (!(element.hasClass('visible'))) {
			var scroll = $(window).scrollTop(),
				position = element.offset().top,
				windowHeight = $(window).height();

			if ((scroll + (windowHeight * 4 / 5)) > position) {
				element.addClass('visible');
			};
		};
	});
}
$(document).ready(function () {
	titleAnimation();
	setTimeout(function () {
		$('.hero__title').addClass('visible');
	}, 500)
});
$(window).on('scroll', function () {
	titleAnimation();
});


// popup
let callbackPopup = document.querySelector('.popup-callback');
let openCallbackPopup = document.querySelectorAll('.callback-open');

let confPopup = document.querySelector('.popup-conf');
let openConfPopup = document.querySelectorAll('.conf');

let legalPopup = document.querySelector('.popup-legal');
let openLegalPopup = document.querySelectorAll('.legal-open');

let mapPopup = document.querySelector('.popup-map');
let openMapPopup = document.querySelectorAll('.map-open');

// открытие popup
openPopup(openConfPopup, confPopup);
openPopup(openCallbackPopup, callbackPopup);
openPopup(openLegalPopup, legalPopup);
openPopup(openMapPopup, mapPopup);

function openPopup(btnOpen, popup) {
	btnOpen.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			popup.classList.add('active');
			if (!document.body.classList.add('lock')) document.body.classList.add('lock');
		});
	})
}

// закрытие popup
let popups = document.querySelectorAll('.popup');
popups.forEach(function (popup) {
	let body = popup.querySelector(".popup__body");
	let close = popup.querySelector(".popup__close");

	if (!popup.classList.contains('popup-cookie')) {
		popup.addEventListener('click', (e) => {
			const withinBoundaries = e.composedPath().includes(body);
			if (!withinBoundaries) closePopup(popup);
		})
	}
	close.addEventListener('click', function () {
		closePopup(popup)
	});

})

function closePopup(popup) {
	popup.classList.remove('active');
	if (!nav.classList.contains('nav--active')) document.body.classList.remove('lock');
}


var hideTheModal = $.cookie('hideTheModal');
if (hideTheModal == null) {
	setTimeout(function () {
		$('.popup-cookie').addClass('active');
		$('.popup-cookie').find('.popup__btn').click(function () {
			$.cookie('hideTheModal', 'true', { expires: 30, path: '/' });
			$('.popup-cookie').removeClass('active');
		});
	}, 3000);
}


const sliderEl = document.querySelectorAll("input[type='range']");
sliderEl.forEach(function (range) {
	const tempSliderValue = range.value;
	const progress = (tempSliderValue / range.max) * 100;
	range.style.background = `linear-gradient(to right, #42B214 ${progress}%, #cacaca ${progress}%)`;

	range.addEventListener("input", (event) => {
		const tempSliderValue = event.target.value;
		const progress = (tempSliderValue / range.max) * 100;
		range.style.background = `linear-gradient(to right, #42B214 ${progress}%, #cacaca ${progress}%)`;
	})
})

// липкое боковое меню
let sideMenu = document.querySelector('.sidemenu');
if (sideMenu) {
	let sideClose = sideMenu.querySelector('.sidemenu__close');
	let sideBody = sideMenu.querySelector('.sidemenu__body');
	let sideTop = sideMenu.querySelector('.sidemenu__top');
	sideBody.style.maxHeight = sideBody.scrollHeight + "px";

	window.addEventListener('resize', function () {
		if (!sideMenu.classList.contains('hidden')) {
			sideBody.style.maxHeight = sideBody.scrollHeight + "px";
		}
	})

	sideClose.addEventListener('click', function () {
		if (sideBody.style.maxHeight == null && !sideTop.classList.contains('active')) {
			sideBody.style.maxHeight = sideBody.scrollHeight + "px";
		} else {
			sideBody.style.maxHeight = null;
			sideMenu.classList.add('hidden');
		}

		setTimeout(function () {
			sideClose.classList.add('close');
			sideTop.classList.add('close');
		}, 1200)

		if (sideMenu.classList.contains('hidden')) {
			setTimeout(function () {
				sideClose.classList.remove('close');
				sideTop.classList.remove('close');
				sideMenu.classList.remove('hidden');
			}, 15000)
		}
	})

	sideTop.addEventListener('click', function () {
		sideTop.classList.toggle('active');
		if (sideBody.style.maxHeight) {
			sideBody.style.maxHeight = null;
		} else {
			sideBody.style.maxHeight = sideBody.scrollHeight + "px";
		}
	})

	if (window.innerWidth < 768) {
		setTimeout(function () {
			sideTop.click();
		}, 2000)
	}
}

// анимация цифр
$(function () {
	$(".about__number span").each(function () {
		let numb = $(this);
		let maxNumb = numb.attr('data-max')
		$(window).scroll(function onScroll() {
			if ($(window).scrollTop() > (numb.offset().top - $(window).height())) {
				$(window).off("scroll", onScroll);
				$({ numberValue: 0 }).animate({ numberValue: maxNumb }, {
					duration: 3000,
					easing: "linear",
					step: function (val) {
						numb.html(Math.ceil(val));
					}
				});
			}
		})
	});
})