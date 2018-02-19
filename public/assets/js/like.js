$('.likeBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/likes', {
        type: 'POST',
        data: {
            postId:$(this).attr('data-postid'),
            userId: 1
        }
    });
});