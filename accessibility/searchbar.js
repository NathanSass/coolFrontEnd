

$(function() {

	function flexInputArea(){
		var leftBox= $(".left-icon").width();
		var rightBox = $(".right-icon").width();
		var searchInput = $(".search-input");
		var container = $(".search-bar").width();
		console.log("hi");
		var usedSpace = leftBox + rightBox;
		searchInput[0].style.width = ((container - usedSpace - 45) + "px");
	}

  window.onresize=function(){
  	flexInputArea();
	};
});