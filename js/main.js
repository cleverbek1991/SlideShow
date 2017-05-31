'use strict';

let container = $('#container'),
	counter = 0,
	caption = $('#caption');

container.children().hide();
let curentImg = container.children().first(),
	img = container.children();
curentImg.show();

let slideShow = function() {
	setInterval(function(){
		counter++;
		if (counter > 3) {
			counter = 0;
		}
		next(counter);
	}, 3000);
};

$(document).on('click', '.slide', function() {
	slideShow();
});

$(".next").click(function() {
	counter++;
	if (counter > 3) {
		counter = 0;
	}
	next(counter);
});

$(".prev").click(function() {
	counter--;
	if (counter < 0) {
		counter = 3;
	}
	prev(counter);
});

let next = function(counter) {
	$(img[counter]).prev().hide();
	$(img[counter]).show();
	if(counter === 0) {
		$(img[3]).hide();
	}
};

let prev = function(counter) {
	$(img[counter]).next().hide();
	$(img[counter]).show();
	if(counter === 3) {
		$(img[0]).hide();
	}
};