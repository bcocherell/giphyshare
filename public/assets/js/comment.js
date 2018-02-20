$('#submitComment').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/subposts', {
        type: 'POST',
        data: {
            userId:$(this).attr('data-user'),
            postId:$(this).attr('data-id'),
            comment: $('#postComment').val(),
        }
    }).then(function(){
        location.reload();
    });
});