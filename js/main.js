 Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
}

 $('document').ready(function() {
 	var	timeEnd = new Date('2014-12-09T11:00:00-08:00');

           

 	function dispatchTimer() {
 		var timeNow = new Date();

		var settings = {
			end: Math.floor(timeEnd.getTime() / 1000),
			now: Math.floor(timeNow.getTime() / 1000)
		}
         
		timer = {
		    days: Math.floor((settings.end - settings.now ) / 86400),
		    hours:  Math.floor(((settings.end - settings.now) % 86400) / 3600),
		    minutes: Math.floor((((settings.end - settings.now) % 86400) % 3600) / 60),
		    seconds: Math.floor((((settings.end - settings.now) % 86400) % 3600) % 60 )
		}

		$('#clock-days').text(timer.days.pad());
		$('#clock-hours').text(timer.hours.pad());
		$('#clock-minutes').text(timer.minutes.pad());
		$('#clock-seconds').text(timer.seconds.pad());
	}

	dispatchTimer();
	setInterval(dispatchTimer, 1000);
 });