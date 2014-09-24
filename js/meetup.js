var Meetup = Meetup || {};

Meetup.config = {
	group_url: 'code-for-seoul',
	group_id: '146177402',
	api: '7c66136c4b2e242d241e289595e3546'
}

Meetup.getEvents = function(options) {
	var status = options && options.status || 'upcoming,past',
			desc = options && options.desc || true;

	var url = 'https://api.meetup.com/2/events?&key=' + this.config.api + '&sign=true&photo-host=public&desc=' + desc + '&group_urlname='+ this.config.group_url + '&page=10&status=' + status;

	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(data) {
			var events = [];
			console.log(data);

			$.each(data.results, function (key, val) {
				var date = new Date(val.time);
				convertedDate = (date.getMonth()+1) + '월 ' + date.getDate() + '일 ' + date.getHours() + ':' + date.getMinutes() + '시';
				events.push("<li><h3 class='event_name'>" + val.name + "</h3>" + val.description + "<p>" + convertedDate + "</p>");
			});
			
			$("<ul/>", {
				"class": "event",
				html: events.join("")
			}).appendTo('.events');
		}
	});
};