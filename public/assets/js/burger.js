$(function () {
    // On submit:
    $(".create-form").on("submit", function (event) {
        event.preventDefault(); // preventDefault() method to stop the default action of an element from happening
        // declare new burger variable as an object, set properties
        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };
        // send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger added");
            // reload the page to get the updxated list
            location.reload();
        });
    });
    // On click (eat):
    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            // reload the page to get the updxated list
            location.reload();
        });
    });
    // On click (remove):     
    $(".remove-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
            // reload the page to get the updxated list
        }).then(function () {
            console.log("Burger binned");
            // reload the page to get the updxated list
            location.reload();
        });
    });
});