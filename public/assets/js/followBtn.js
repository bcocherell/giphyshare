$('#followBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/followers', {
        type: 'POST',
        data: {
            userId:$(this).attr('data-id'),
            followerId:1,
            status:true
        }
    }).then(function(){
        location.reload();
    });
});