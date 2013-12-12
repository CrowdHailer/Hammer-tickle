var myApp = {
	hammerEvents: "touch release tap hold doubletap drag dragstart dragend dragup dragdown dragleft dragright swipe swipeup swipedown swipeleft swiperight transform transformstart transformend rotate pinch pinchin pinchout",
	other: "click dblclick mousedown",
	init: function (){
		this.hammertime = Hammer(document).on(this.hammerEvents, function(evt){
			console.log(evt.type);
		});
	}
};
myApp.init();