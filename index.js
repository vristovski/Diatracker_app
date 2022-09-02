$(document).ready(function() {
    handleMealsList();
});

function handleMealsList() {
    $(".meal-container .meal-title").on("click", function() {
        $(this).parent().toggleClass("open");
    });
}