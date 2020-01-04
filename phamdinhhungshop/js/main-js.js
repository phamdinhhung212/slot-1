// header
// handle hide and show respon left and respon right 
$(document).ready(function() {
	$("#header span#icon-respon-menu").click(function() {
		$("#header #respon-right .pt").stop().slideToggle(500);
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
	});
	// handle show respon right when screen less 667px
	$(window).resize(function() {
		if( $(window).width() > 650 ){
			$("#header #respon-right .pt").slideUp(500);
		}
	});
});
// handle show and hide search bar
// open respon left
$(document).ready(function() {
	$("#wp-respon #respon-left span#icon-tabbar").click(function() {
		$("#site").toggleClass('open-respon-left');
		$("#icon-tabbar").toggleClass("fa-chevron-circle-right fa-chevron-circle-left");
		$("#header #respon-right .pt").stop().slideUp(500);

	});
	// handle content click both respon right and respon left hide 
	$("#all-product , .widget.category , .list-slide").click(function() {
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
		$("#header #respon-right .pt").slideUp(500);
	});
	// when resize then respon left automatic close
	$(window).resize(function() {
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
	});
});	
// handle hide and show menu child in menu respon right when clicked
$(document).ready(function() {
	$("#header span#icon-menu").click(function() {
		$(this).toggleClass("move"); 
		$(this).toggleClass("fa-bars fa-chevron-circle-up");
		$("#menu-respon").stop().slideToggle(500);
	})
});

// handle hide and show search bar
$(document).ready(function() {
	// click search in sideabr
	$(".list-Utilities span.search.s").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
	});
	// click search in respon-left
	$(".list-Utilities span.search.h").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").toggleClass('fa-chevron-circle-left fa-chevron-circle-right')
	});
	// click search on header
	$("#header .icon-search").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
		$("#site").removeClass('open-respon-left');
		if( $("#content").is('.opacity-ct') ) {
			$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right')
		}
	});
	// click close search
	$("#header #search-bar #search-box .close-s").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
	});
});
// -------------------- content -----------------
// -------------------------------------
// handle hide and show img child
$(document).ready(function() {
	$("ul.list-product li").hover( function() {
		// hover in 
		$(this).addClass('open-list-thumb');
		$(this).children('.more-product').addClass('open-list-thumb');
		$(this).children('.love-this').stop().fadeIn(1000);
		// count img child
		var cout = 0;
		$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').children('li').each(function() {
			cout ++ ;
		});
		// handle when num img child = 3
		if( cout == 3 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('three-img');
		}
		// handle when num img child = 2
		if( cout == 2 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('two-img');
		}
		// handle when num img child = 1
		if( cout == 1 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('one-img');
		}
		// handle when num img child = 0
		if( cout == 0 ) {
			$(this).removeClass('open-list-thumb');
			$(this).children('.more-product').removeClass('open-list-thumb');
		}
	}, function() {
		// hover out
		$(this).removeClass('open-list-thumb');
		$(this).children('.more-product').removeClass('open-list-thumb');
		$(this).children('.love-this').stop().fadeOut(500);
	});
	// disable <a>
	$("ul.list-product li a").click(function() {
		return false;
	});
})

// open scroll bar and scroll top
$(document).ready(function() {
	$(window).scroll(function() {
		if( $(window).scrollTop() > 300 ) {
			$("#back-top").addClass('open-scroll');
		}
		else {
			$("#back-top").removeClass('open-scroll');
		}
	});
	$("#back-top span.icon-scroll").click(function() {
		$("html,body").animate({
			scrollTop : 0,
		},1000);
	});
});


// click show img 
$(document).ready(function() {
	$(".more-product .hide-2 ul.list-thumb li").hover(function() {
		var get_src_img = $(this).children('img').attr('src');
		$(".more-product .hide-2 ul.list-thumb li").removeClass('active-li');
		$(this).addClass('active-li');
		$(this).parents('li').children('a').children('img').attr('src',get_src_img)
	},function() {

	});
});
// function like product
$(document).ready(function() {
	$("ul.list-product li span.love-this").click(function() {
		$(this).parent('li').children('i').stop().fadeToggle();	
	});
	$("ul.list-product li i").click(function() {
		$(this).fadeToggle();
	});
});
// ----------------- end content ---------------------



// -------------------- footer --------------------
// handle when submit but part function not update
$(document).ready(function() {
	$("#signUp-f , #f-sp, #search-box").submit(function() {
		alert("Phạm Đình Hùng xin lỗi, chức năng này chưa được cập nhật");
		return false;
	});
});
// ------------------- end footer ------------------




// banner
// handle button next banner
$(document).ready(function() {
	// position of silde
	var pstActiveBnCt = $(".active-bn").index();
	var pstSlideFirst = $("#banner .slide-box .list-slide .slide:first").index();
	var pstSlideLast = $("#banner .slide-box .list-slide .slide:last").index();
	$("#banner .slide-box .btn-slide span.btn-next-bn").click(function() {
		if( pstActiveBnCt == pstSlideLast ) {
			pstActiveBnCt = pstSlideFirst - 1;
		}
		pstActiveBnCt ++ ;
		$("#banner .slide-box .list-slide .slide").removeClass('active-bn lost-on-left lost-on-right go-to-left go-to-right');
		$("#banner .slide-box .list-slide .slide").eq(pstActiveBnCt - 1).addClass('active-bn').addClass('lost-on-left');
		$("#banner .slide-box .list-slide .slide").eq(pstActiveBnCt).addClass('active-bn').addClass('go-to-left');
		// move active li when click next
		$("#banner .slide-box .btn-slide ul.list-btnBn li").removeClass('active-liBn');
		$("#banner .slide-box .btn-slide ul.list-btnBn li:nth-child("+(pstActiveBnCt + 1)+")").addClass('active-liBn');
	});
	$("#banner .slide-box .btn-slide span.btn-prev-bn").click(function() {
		if( pstActiveBnCt == pstSlideFirst ) {
			pstActiveBnCt = pstSlideLast + 1;
		}
		pstActiveBnCt -- ;
		$("#banner .slide-box .list-slide .slide").removeClass('active-bn lost-on-left lost-on-right go-to-left go-to-right');
		$("#banner .slide-box .list-slide .slide").eq(pstActiveBnCt).addClass('active-bn').addClass('lost-on-right');
		$("#banner .slide-box .list-slide .slide").eq(pstActiveBnCt - 1).addClass('active-bn').addClass('go-to-right');
		// move active li when click prev
		$("#banner .slide-box .btn-slide ul.list-btnBn li").removeClass('active-liBn');
		$("#banner .slide-box .btn-slide ul.list-btnBn li:nth-child("+(pstActiveBnCt + 1)+")").addClass('active-liBn');
		// pstActiveBnCt --;
	});
	// auto next page
	setInterval(function() {
		$("#banner .slide-box .btn-slide span.btn-next-bn").click();
	},3000);
	// -------------
});


