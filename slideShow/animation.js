console.log("in js");
var show = {
	animateHelpWalkThrough: function(){
		var phrases = ["Hi", "Let me walk you through this", "This is how you build a message queue", "I think it looks a lot better than a nested list of calls" ];

			show._createNewMessage(phrases[0])
				.fadeIn(800)
				.delay(2000)
				
				.queue(function(n){
					show._createNewMessage(phrases[1]);
					n();
				})
				.fadeIn(500)
				
				.delay(5000)
				.queue(function(n){
					show._createNewMessage(phrases[2]);
					n();
				})
				.fadeIn(500)
				
				.delay(500)
				.queue(function(n){
					show._createNewMessage(phrases[3]);
					n();
				})
				.fadeIn(3000);
		},

		_createNewMessage: function(message){
			return $('.content h1').html(message).hide();
		}
};

$(function() {
	show.animateHelpWalkThrough();
});