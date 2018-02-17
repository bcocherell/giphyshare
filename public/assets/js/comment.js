$('#submitComment').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/subposts', {
        type: 'POST',
        data: {
            userId:2,
            postId:9,
            comment: $('#postComment').val(),
        }
    });
});