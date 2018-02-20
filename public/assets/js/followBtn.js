$('#followBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/followers', {
        type: 'POST',
        data: {
            userId:$(this).attr('data-id'),
            followerId:$(this).attr('data-user'),
            status:true
        }
    }).then(function(){
        location.reload();
    });
});