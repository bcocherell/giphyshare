$('.deletePostBtn').on('click', function (event) {
    event.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "/api/post/" + $(this).attr('data-postid')
    }).then(function(){
        location.reload();
    });
});