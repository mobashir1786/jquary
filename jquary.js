// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible.
//1. Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible


$("#disable").click(function () {
  $("#para").hide()
})
$("#enable").click(function () {
  $("#para").show()
})




// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page.

$("#ajax_call").click(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/3",
    type: "GET",
    success: function (data) {
      document.getElementById("heading").innerText = data.title
    }
  })
})