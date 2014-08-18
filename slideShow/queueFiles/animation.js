var show = {
	animateHelpWalkThrough: function(){
		var phrases = ["Hi, let's build a slideshow using jquery's queue!", "Let me walk you through this.", "You can execute any animations that you want. Don't be limited by jquery chaining!", "The code looks a lot cleaner than nesting inside jquery animation functions. Check it out in the readme!" ];

			show._createNewMessage(phrases[0])
				.fadeIn(800)
				
				.delay(2000)
				.queue(function(n){
					show._createNewMessage(phrases[1]);
					n();
				})
				.fadeIn(500)
				
				.delay(3000)
				.queue(function(n){
					show._createNewMessage(phrases[2]);
					n();
				})
				.fadeIn(500)
				
				.delay(5000)
				.queue(function(n){
					show._createNewMessage(phrases[3]);
					n();
				})
				.fadeIn(1000);
		},

		_createNewMessage: function(message){
			return $('.content h1').html(message).hide();
		}
};

$(function() {
	show.animateHelpWalkThrough();
});