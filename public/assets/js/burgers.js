console.log('hello');
//HTML JS


$(".change-devoured").on("click", function (event) {

    console.log('clicked');
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
        devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function () {
        
            location.reload();
        }
    );
});

$(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
        name: $("#ca").val().trim(),
        devoured: 0
    };[]

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
});