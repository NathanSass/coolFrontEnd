var WIDGET = {
	flexInputArea: function(){
		var container = $(".search-bar").width();
		var widgets = $(".left-icon").width() + $(".right-icon").width();
		$(".search-input")[0].style.width = ((container - widgets - 48) + "px"); //was 41
	},

	focusInputArea: function(e){
		WIDGET._changeBackgroundColors("rgba(255, 255, 255, 1)");
		WIDGET._showResultsArea();
	},
	resetSearchBar: function(e){
		$('.results').hide();
		$('.results-container').css("height", "44px");
		$('.search-input').css("border-bottom", "none");
		WIDGET._changeBackgroundColors("rgba(255, 255, 255, .5)");
	},

	_changeBackgroundColors: function(color){
			$(".results-container")[0].style.background = color;
	},
	_showResultsArea: function(){
		$('.results').show();
		$('.results-container').css("height", "inherit");
		$('.search-input').css("border-bottom", "1px solid grey");
	}
};

$(function() {
	WIDGET.flexInputArea();
	$(document).on("click", ".search-input", WIDGET.focusInputArea);
	$(document).on("mouseleave", ".results-container", WIDGET.resetSearchBar); //really need a scenario for mouseout on input as well

  window.onresize=function(){
  	WIDGET.flexInputArea();
	};
});