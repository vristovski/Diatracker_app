$(document).ready(function() {
    handleMealsList();
});

function handleMealsList() {
    $(".meal-container .meal-title").on("click", function() {
        $(this).parent().toggleClass("open");
    });
}

$(document).ready(function(){
    $(".addbtn").click(function(){
        $("#myModal").modal('show');
    });
});


$(document).ready(function(){
    $("#savebtn").click(function(){
        $("#myModal").modal('hide');
    });
});
