$('#followBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/followers', {
        type: 'POST',
        data: {
            followerId:$(this).attr('data-id'),
            userId:$(this).attr('data-user'),
            status:true
        }
    }).then(function(){
        location.reload();
    });
});