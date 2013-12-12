var myApp = {
	hammerEvents: "touch release tap hold doubletap drag dragstart dragend dragup dragdown dragleft dragright swipe swipeup swipedown swipeleft swiperight transform transformstart transformend rotate pinch pinchin pinchout",
	other: "click dblclick mousedown",
	init: function (){
		this.output = document.getElementById('events');
		this.hammertime = Hammer(document).on(this.hammerEvents, myApp.addToList);
	},
	addToList: function (evt) {
		myApp.output.innerHTML += '<li>' + evt.type +'</li>';
		window.setTimeout(function (){
			myApp.removeTopListItem(myApp.output);
		}, 5000);
	},
	removeTopListItem: function (list) {
		list.removeChild(list.children[0]);
	}
};
myApp.init();