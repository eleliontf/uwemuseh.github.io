
// READ MORE
$(document).ready(function() {
    $('.toggle-btn').on('click', function() {
        var extraText = $(this).siblings('p').find('.extra-text');
        if (extraText.is(':visible')) {
            extraText.slideUp();
            $(this).text('Read More');
        } else {
            extraText.slideDown();
            $(this).text('Read Less');
        }
    });
});


// PDF PREVIEW

$(document).ready(function () {
    // Handle Preview button click
    $('.preview-btn').on('click', function (e) {
        e.preventDefault();
        var pdfUrl = $(this).data('pdf');
        var amazonUrl = $(this).data('amazon');
        
        // Set the iframe source to the PDF URL
        $('#pdfViewer').attr('src', pdfUrl);

        // Update the Amazon link
        $('#amazonLink').attr('href', amazonUrl);

        // Show the modal
        $('#pdfModal').modal('show');
    });

    // Close the modal
    $('.close').on('click', function () {
        $('#pdfModal').modal('hide');
    });
});


// YOUTUBE PLAYER

$(document).ready(function () {
    // Handle "Play Video" button click
    $('.play-video').on('click', function () {
        var videoId = $(this).data('video-id');
        var videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        // Set the video URL in the iframe
        $('#youtubeVideo').attr('src', videoUrl);


        // Position the video player section near the clicked button
        var offset = $(this).offset();
        $('#videoPlayerSection').css({
            top: offset.top,
            left: offset.left + $(this).outerWidth(),
            position: 'absolute'
        }).show();

        // Show the video player section
        $('#videoPlayerSection').show();

        // Hide the thumbnail and button after clicking
        $(this).closest('.portfolio-card').find('img').hide();
        $(this).hide();
    });


     // Handle "Play Video" button click for Facebook
     $('.fb-video').on('click', function () {
        var videoUrl = $(this).data('href');

        // Set the video URL in the iframe
        $('#facebookVideo').attr('src', videoUrl);

        // Position the video player section near the clicked button
        var offset = $(this).offset();
        $('#videoPlayerSection').css({
            top: offset.top,
            left: offset.left + $(this).outerWidth(),
            position: 'absolute'
        }).show();

        // Show the video player section
        $('#videoPlayerSection').show();

        // Hide the thumbnail and button after clicking
        $(this).closest('.portfolio-card').find('img').hide();
        $(this).hide();
    });

    // Handle "Close Video" button click
    $('#closeVideo').on('click', function () {
        // Stop the video by removing the iframe src
        $('#youtubeVideo').attr('src', '');

        // Hide the video player section
        $('#videoPlayerSection').hide();

        // Show the thumbnail and play button again
        $('.portfolio-card img').show();
        $('.portfolio-card .play-video').show();
    });
});

