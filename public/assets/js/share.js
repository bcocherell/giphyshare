$('.shareBtn').on('click', function () {
    $('#modalPicContainer').empty();
    var src= $(this).parent().parent().children('.postPic');
    $('#modalPicContainer').append(src);
});

$('.postBtn').on('click', function (event) {
    var img = $(this).parent().parent().children('.modal-body').children('#modalPicContainer').children('.postPic');
    $.ajax('/api/posts', {
        type: 'POST',
        data: {
            url: img.attr('src'),
            urlStill: img.attr('data-fixed'),
            urlOriginal: img.attr('data-original'),
            urlOriginalStill: img.attr('data-fixed-small'),
            comment: $('#modalComment').val(),
            userId: 1
        }
    });
});