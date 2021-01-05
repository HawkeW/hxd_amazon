function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatToYMDH(time) {
	const nowTime = new Date(time)
	const year = nowTime.getFullYear(),
		date = nowTime.getDate(),
		month = nowTime.getMonth() + 1,
		hour = nowTime.getHours()
	return `${year}${month<10? ('0'+month):month}${date<10? ('0'+date) : date}${hour<10? '0'+hour : hour}`
} 

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}

		return humanize || '刚刚';
	},
	format: function (dateNum) {
		// var date = this.parse(dateStr)
    if(dateNum.indexOf("-")>-1){
      dateNum = dateNum.replace(/-/g,'/')
    }
    var date = new Date(dateNum);
		var diff = Date.now() - date;
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

function format(timeVal) {
	if (typeof timeVal !== 'number') {
		return timeVal
	}
	const time = new Date(timeVal)
	const y = time.getFullYear()
	const M = time.getMonth() + 1
	const d = time.getDate()
	const h = time.getHours()
	const m = time.getMinutes()
	const s = time.getSeconds()
	return `${y}-${M<=9?`0${M}`:M}-${d<=9?`0${d}`:d} ${h<=9?`0${h}`:h}:${m<=9?`0${m}`:m}:${s<=9?`0${s}`:s}`
}


module.exports = {
	formatTime: formatTime,
	dateUtils: dateUtils,
	format,
	formatToYMDH
}
