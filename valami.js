function sidebarCcollapse(){

  const width = $(".sidebar").width();

  if(width > 100){

    $(".sidebar").animate({
      width: "40px"
    });

    $(".main").animate({
      "margin-left": "50px"
    });

    $(".dropdown-icon-padding").animate({
      "padding-left": "0px"
    });

    $("dropdown-text-width").animate({
      "width": "130px"
    });

    // $(".collapse").animate({width: 'toggle'}, "slow");
    $(".collapse").toggle();

    $(".collapse-btn").animate({
      "left": "40px"
    }, function(){
      $(".sidebar-toggle").text("keyboard_arrow_right");
    });

    // $(".toggle-visibility-icon").text("visibility");

  } else {

    $(".sidebar").animate({
      width: "200px"
    });

    $(".dropdown-icon-padding").animate({
      "padding-left": "30px"
    });

    $("dropdown-text-width").animate({
      "width": "160px"
    });

    $(".collapse-btn").animate({
      "left": "200px"
    });

    $(".main").animate({
      "margin-left": "200px"
    }, function(){
      // $(".collapse").animate({width: 'toggle'}, "slow");
      $(".collapse").toggle();

      $(".sidebar-toggle").text("keyboard_arrow_left");
      // $(".toggle-visibility-icon").text("visibility_off");
    });

  }

}

// $(document).ready(function() {
//   $("#button").toggle(function() {
//       $(this).text('Show Content');
//   }, function() {
//       $(this).text('Hide Content');
//   }).click(function(){
//       $("#hidden_content").animate({width: 'toggle'}, "slow");
//   });
// });

function toggleDropdown(clickedID) {

  $("." + clickedID).toggle(400);

  const arrow = $("#" + clickedID).find("span")[0].innerHTML;

  if(arrow === "keyboard_arrow_right"){
    $("#" + clickedID).find("span")[0].innerHTML = "keyboard_arrow_down";
    // $("#" + clickedID).find(".sidebar-col-middle").toggleClass("dropdown-underline");
  } else {
    $("#" + clickedID).find("span")[0].innerHTML = "keyboard_arrow_right";
    // $("#" + clickedID).find(".sidebar-col-middle").toggleClass("dropdown-underline");
  }

}

let toggle = false;

function dropDownAll(){

  if(toggle === false){
    $(".dropdown").show(function(){
      toggle = true;
      $(".home-arrow").text("keyboard_arrow_up");
      $(".icon-arrow").text("keyboard_arrow_down");
    });
  } else {
    $(".dropdown").hide(function(){
      toggle = false;
      $(".home-arrow").text("keyboard_arrow_down");
      $(".icon-arrow").text("keyboard_arrow_right");
    });
  }
  
}

$(".sidebar-row").hover(function(){
  $(this).animate({
    paddingLeft: "7px"
    // backgroundColor: "#e9e9e9",
    // borderRadius: "5px"
  });
}, function(){
  $(this).animate({
    "padding-left": "0px"
  });
}

);

$(".sidebar-row").focus(function(event){
  console.log(event.target);
})

$(document).keydown(function(e){    
      if (e.keyCode == 40) {      
          $(".sidebar-row:focus").next().focus();

      }
      if (e.keyCode == 38) {      
          $(".sidebar-row:focus").prev().focus();

      }
  }
);

// $(document).keydown(function(event){
//   switch(event.keyCode){
//     case 37: console.log("left pressed");
//     break;
//     case 38: console.log("up pressed");
//     break;
//     case 39: console.log("right pressed");
//     break;
//     case 40: down();
//     break;
//     case 32: console.log("space pressed");
//     break;
//     case 13: console.log("enter pressed");
//     break;
//     case 27: console.log("esc pressed");
//     break;
//     case 9: console.log("tab pressed");
//     break;
//     default: console.log("non of the expected keys where pressed")
//   }
// })

// function down(){
//   console.log("down pressed");
//   console.log(tabindex);
//   // $("#home").focus();
// }

// $(".sidebar-row").hover(function(){
//   $(".sidebar-row").animate({
//     paddingLeft: "5px"
//   });
// }, function(){
//   $(".sidebar-row").animate({
//     paddingLeft: "0"
//   });
// });


// .sidebar-row:hover {
//   background-color: rgb(233, 233, 233);
//   border-radius: 5px;
//   padding-left: 5px;
// }
