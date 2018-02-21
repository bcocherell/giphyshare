$('#followBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax('/api/followers', {
        type: 'POST',
        data: {
            followerId: $(this).attr('data-id'),
            userId: $(this).attr('data-user'),
            status: true
        }
    }).then(function () {
        $('nav').after('<div class="alert alert-primary" role="alert">Followed!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        if (alertTimeout) clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function () {
            $('.alert').remove();
        }, 5000);
    });
});