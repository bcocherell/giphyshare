$(function(){
    $.each($('.postPic'),function(index, pic){
        var stillPic = $(pic).attr('src');
        $(pic).attr('src', $(pic).attr('data-fixed'));
        $(pic).attr('data-fixed', stillPic);
    });
});