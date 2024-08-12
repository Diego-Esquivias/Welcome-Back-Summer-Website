$(function(){
    $('.starter-image, .header, .overview, .gallery, .events, .contact-page').hide().fadeIn(1000);

    $('.header, .starter-image, .container').hover(
        function() {
            // Mouse enters
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            // Mouse leaves
            $(this).css('transform', 'scale(1)');
        }
    );
});