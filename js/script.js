$(document).ready(function() {
	// Handle the scroll-to-top button, this is for the BOOK section
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();

		if  (scrollTop < 200) {
			$(".scroll-top").fadeOut();
		} else {
			$(".scroll-top").fadeIn();
		}

		checkIllustration();
	});
	// When scroll-to-top button show, click on it to animate the scrolling to top, this is for the BOOK section
	$(document).on("click", ".scroll-top", function() {
		$("html, body").animate({ scrollTop: 0 }, 600);
	});

	// Calculate checkout price, this is for the SHOP section
	$(document).on("change", "input.count", function() {
		var total = 0;
		$("tr.product").each(function(index, el) {
			var amount = $(el).find(".count").val();
			var price = $(el).find(".price").attr("value");

			var itemPrice = parseFloat(amount) * parseFloat(price);
			
			if (isFinite(itemPrice) && itemPrice > 0) {
				total += itemPrice
			}
		});

		total = total > 0 ? total : 0;
		$(".total-price").html(total);
	});

	// Check for illustration images position to fade in, this is for the BOOK section 
	function checkIllustration() {
		var scrollTop = $(window).scrollTop();
		var $illustration = $("img.illustration");

		$illustration.each(function(index, el) {
			var imgTop = $(el).offset().top;

			if (scrollTop + 200 > imgTop || index == 0) {
				$(el).addClass("show");
			}
		}); 
	}

	$("img.illustration").eq(0).on("load", function() {
		$(this).addClass("show");
	});
});