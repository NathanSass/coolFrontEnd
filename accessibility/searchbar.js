function flexInputArea(){
	var container = $(".search-bar").width();
	var widgets = $(".left-icon").width() + $(".right-icon").width();
	$(".search-input")[0].style.width = ((container - widgets - 41) + "px");
}


$(function() {
	flexInputArea();


  window.onresize=function(){
  	flexInputArea();
	};
});