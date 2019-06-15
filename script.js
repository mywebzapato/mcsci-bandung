// on
$(window).on('load', function (){
	$('.jumbotron .club').addClass('animasi');
	$('.jumbotron .slogan').addClass('animasi');
});





// scroll
$(window).scroll(function() {
	var jumboScroll = $(this).scrollTop();
// navbar

// about
if(jumboScroll > $('.about').offset().top - 150) {
	$('.about .texa').addClass('animate');}

if(jumboScroll > $('.about').offset().top - 150) {
	$('.about .gambar').addClass('animate');}


// history
if(jumboScroll > $('.history').offset().top - 150) {
	$('.history .tex1').addClass('anime');}


if(jumboScroll > $('.history').offset().top - 150) {
	$('.history .tex2').addClass('anime');}



// portofolio
if( jumboScroll > $('.portofolio').offset().top - 200 ) {

	$('.portofolio .card').each(function(i) {

		setTimeout(function() {

			$('.portofolio .card').eq(i).addClass('animasi');

	}, 300 * (i+1));

	});

}


});
