//JQUERY SELECTORS AND METHODS:
// .append("<h3>element</h3>")
// .css("property","value")


$("document").ready(function(){
  $("body").append("<h1 class='red bordered'>this was created with body.append()</h1>") //appends the body with this tag.
  
  $(".bordered").css("border", "3px dotted orange") //border: "width style color"
  
  //filters have ":". grabbing first and last h1 elements...
  $("h1:first").css("color", "purple") 
  $("h1:last").css("color", "blue")


  $("ol li:first-child").css("color", "purple") //grabs the first "li" tag that's a child or grandchild of ol.
  
  $("li:last-of-type")
    .css("color", "orange") //grabs the last "li" among siblings.
    .hover(function(){    //give it strikethrough when hovering, remove that when mouseleave.
      $(this).css("text-decoration", "line-through")
    }, function(){
      $(this).css("text-decoration", "none")
    })

  $("ul li:nth-child(3)").css("color", "green") //grabs the 3rd li child in all ul's
  
  //next adjacent selector: "prev + next"
  $("label + input").css("background-color", "teal") //grabs all input tags with previous child label.


  $("tr:odd").css( "background-color", "#bbbbff" ) //grab all ODD-numbered tr children.
  $("tr:even").css( "background-color", "DarkTurquoise" ) //grab all EVEN-numbered children.


  //TYPE ATTRIBUTE SELECTORS
  $( "<input>" ).is( "[type=text]" ); // false
  $( "<input>" ).is( ":text" ); // true; type=text is implied for input tags w/o a type attribute.
  
  //$(":typename") where typename can be checkbox, checked, image, radio, password, submit
  $(":password").css("background-color", "aliceblue")
  $(":submit").css("border", "3px outset blue")
})