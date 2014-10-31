var WIDGET = {
	flexInputArea: function(){
		var container = $(".search-bar").width();
		var widgets = $(".left-icon").width() + $(".right-icon").width();
		$(".search-input")[0].style.width = ((container - widgets - 41) + "px");
	},

	focusInputArea: function(e){
		WIDGET._changeBackgroundColors("rgba(255, 255, 255, 0)");
		WIDGET._showResultsArea();
	},
	resetSearchBar: function(e){
		$('.results-container').hide();
		$('.search-input').css("border-bottom", "none");
		WIDGET._changeBackgroundColors("rgba(255, 255, 255, .5)");
	},

	_changeBackgroundColors: function(color){
		var widgets = [$('.search-input'), $('.left-icon'), $('.right-icon')];
		for(var i = 0; i < widgets.length; i++){
			widgets[i][0].style.background = color;
		}
	},
	_showResultsArea: function(){
		$('.results-container').show();
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