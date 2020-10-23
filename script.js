$("document").ready(() => {
  let border = { borderWidth: "5px", borderStyle: "solid" };
  let css = { color: "#fff", backgroundColor: "#03a9f4" };
  $("header")
    .html("Cybage Software")
    .height("10vh")
    .width("100%")
    .css({
      ...css,
      fontSize: "40px",
      textAlign: "center",
    });
  $("section").css({
    display: "flex",
    flexDirection: "row",
    height: "80vh",
  });
  $("main").html("This is the main section").width("60%").css(border);
  $("aside").css(border);
  $("aside").eq(0).html("This is the nav bar").width("20%");
  $("aside").eq(1).html("This is the aside bar").width("20%");

  $("footer").html("Copyrights Reserved").height("10vh").width("100%").css(css);
});
