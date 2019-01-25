$(document).ready(function(){

  let existingUser = JSON.parse(localStorage.getItem("user"));
  console.log (existingUser);
  if (null !== existingUser){
    window.location.replace("/index");
  }


  var API = {
    registerUser: function() {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/itinerary",
        data: JSON.stringify(itinerary)
      });
    },
    retrieveUser: function(email) {
      return $.ajax({
        url: "/api/user/" + email,
        type: "GET"
      });
    }
  };

  $("#loginButton").on("click", function(event){
    event.preventDefault();
    let email = $("#existingUserEmail").val();

    if (!email){
      $("#error").show();
      $("#existingUserEmail").val("");
      $("#newUserEmail").val("");
      return;
    }
    API.retrieveUser(email).then(function(userProfile){
      if (userProfile.length === 0){
        $("#error").show();
        $("#existingUserEmail").val("");
        $("#newUserEmail").val("");
      }else {
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(userProfile));
        window.location.replace("/index");
      }
    });

  });

  $("#existingUserEmail").keyup(function() {
    $("#error").hide();
  });

  $("#newUserEmail").keyup(function() {
    $("#error").hide();
  });

  $("#registerButton").on("click", function(event){
    event.preventDefault();
  });

});