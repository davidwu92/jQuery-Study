//lets use jquery here.

// $(document).ready(function(){ //when the document is ready... do all this stuff.
  
//   // elem.hover(function, callback).
//   //Runs function when hovering, callback runs when hovering stops.
//   $('#hidden').hover(function(){    
//       $(this).css("color", "black");
//     },
//     function(){//this is the callback; runs when hovering stops.
//       $(this).hide() //this will hide the element; sets "display: none"
//       //$(this).css("display", "none")
//     }
//   )
  
// })

$(document).ready(()=>{ //when the document is ready... do all this stuff.
  
  // elem.hover(function, callback).
  //Runs function when hovering, callback runs when hovering stops.
  $('#hidden').hover(function(){    
      console.log($(this))
      $(this).css("color", "black");
    },
    function(){//this is the callback; runs when hovering stops.
      $(this).hide() //this will hide the element; sets "display: none"
      //$(this).css("display", "none")
    }
  )
  
  $("button").click(function(){  //this runs whenever any button elem is clicked
    alert("You clicked the button.")
  })


})