$(function(){
    // Makes the content in each page fade in when you load in
    $('.starter-image, .header, .overview, .gallery, .events, .contact-page').hide().fadeIn(1000);

    // Makes certain elements enlarge when you hover over them
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