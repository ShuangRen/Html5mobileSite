var yhcmsApp = {
	rem : function () {
		$('html').css('fontSize', $(window).width()/20);
		$(window).on('resize', function () {
			$('html').css('fontSize', $(window).width()/20);
		});
		return this;
	},
	slidebar : function () {
		var t = this;
		t.timer = null;
		t.slideOB = true;
		$('#slideBtn').on('click', function () {
			if(t.slideOB) {
				t.slideOB = false;
				$('.slidebar').css('transform', 'translate(0, 0)');
				$('.content-container').css('transform', 'translate(60%, 0)');
				$('.topheader').css('transform', 'translate(60%, 0)');
			}else {
				t.slideOB = true;
				$('.slidebar').css('transform', 'translate(-100%, 0)');
				$('.content-container').css('transform', 'translate(0, 0)');
				$('.topheader').css('transform', 'translate(0, 0)');
			}
			t.addEnd(t._$('slidebar'), end);
		});

		function end() {
			if(!t.slideOB) {
				for(var i = 0; i<$('.slidebar').find('li').length;i++) {
					timeout($('.slidebar').find('li'),i)
				}
			}else {
				$('.slidebar').find('li').css('transform', 'translate(-100%, 0)');
			}
		}

		function timeout(obj,i) {
			 setTimeout(function() {
				obj.eq(i).css('transform', 'translate(0, 0)');
			}, i*100);
		}

		return this;
	},
	addEnd : function (obj,fn)
	{
		obj.addEventListener('WebkitTransitionEnd',fn,false);
		obj.addEventListener('transitionend',fn,false);
	},
	_$ : function (obj) {
		return document.getElementById(obj);
	},
	
	searchBtn : function () {
		$('#searchBtn').on('focus', function () {
			$('.search-form').css({
				'height' : $(window).height(),
				'opacity' : 1,
				'top' : 0
			})
		})

		$('#searchClose').on('click', function () {
			$('.search-form').css({
				'height' : 0,
				'opacity' : 0,
				'top' : '50%'
			});
		})

		$('#searchSub')
	},
	cateBar: function() {
		if($('.catelist').height() < $(window).height()) {
			$('.catelist').css('height', $(window).height());
		}

		$('#catBtn-s').on('click', function () {
			$('.catelist').css('transform', 'translate(0, 0)');
		});
		$('#cateBtn').on('click', function () {
			$('.catelist').css('transform', 'translate(100%, 0)');
		});
		return this;
	},
	windowSize : function () {
		if($('.container').height() < $(window).height()) {
				$('.container').css('height', $(window).height());
			}

		$('.catelist').children('.list').css('height', $(window).height()-45);
		$('.container').on('resize',function () {
			if($('.container').height() < $(window).height()) {
				$('.container').css('height', $(window).height());
			}
			$('.catelist').children('.list').css('height', $(window).height()-45);
		})

		return this;
	},
	tab : function () {
		$('.show_pro').find('ul').eq(0).children('li').on('click', function () {
			$('.show_pro').find('ul').eq(0).children('li').removeClass('active');
			$(this).addClass('active');
			$('.show_pro').find('ul').eq(1).css('transform', 'translate('+ ($(this).index() * -50) +'%, 0)')
		})
	}
}