

$(function() {
	var leftBox= $(".left-icon").width();
	var rightBox = $(".right-icon").width();
	var searchInput = $(".search-input");
	var container = $(".search-bar").width();

	function flexInputArea(){
		searchInput[0].style.width = ((container - leftBox - rightBox - 20) + "px");
	}

  window.onresize=function(){
  	flexInputArea();
	};
});