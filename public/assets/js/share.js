$('.shareBtn').on('click', function(){
    $('.modalPicContainer').html(`<img class="modalPic" src=${$('.postPic').attr('src')}>`);
});
$('.postBtn').on('click', function(event){
    $.post('/api/posts', {
        url:asd,
        urlStill:asdasd,
        urlOriginal:asdasd,
        urlOriginalStill:asdasd,
        comment:comment
    });
});