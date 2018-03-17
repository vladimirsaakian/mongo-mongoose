function showModal() {
    console.log("working");
    $("#modal_" + $(this).attr("data-id")).show();

    function closeModal() {
        $("#modal_" + $(this).attr("data-id")).hide();
    }

    $(document).on("click", ".modalClose", closeModal);
}
$(document).on("click", ".comment-button", showModal);


$(document).on("click", "#savecomment", function() {
 
  console.log("click firing");
  var thisId = $(this).attr("data-id");
  console.log("pre-comment-body");
  var commentBody = $("#bodyinput-"+$(this).attr("data-id")).val();
  console.log(commentBody);

 
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: commentBody
    }
  })
  
    .done(function(data) {
      console.log(data);
      location.reload();
    });
    
});

$(document).on("click", "#deletecomment", function() {
  console.log("working");
  var id = $(this).attr("data-comment");
  $.ajax({
    method: "POST",
    url: "/articles/delete/" + id,
    data: {
    }
  })

    .done(function(data) {

      console.log(data);

      location.reload();
    });
});

$(document).on("click", ".save-button", function() {
  var id = $(this).attr("data-id");
  $.ajax({
    method: "POST",
    url: "/articles/save/" + id,
    data: {
    }
  })

    .done(function(data) {

      console.log(data);

      location.reload();
    });
});

$(document).on("click", ".unsave-button", function() {
  var id = $(this).attr("data-id");
  $.ajax({
    method: "POST",
    url: "/articles/unsave/" + id,
    data: {
    }
  })

    .done(function(data) {

      console.log(data);

      location.reload();
    });
});