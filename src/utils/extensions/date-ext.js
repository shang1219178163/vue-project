var moment =require('moment');

/**
 * 日期格式化 ex: (new Date).Format() : 2022-03-31 10:25:14
 * 
 * @param {*} fmt 默认 YYYY-MM-DD HH:mm:ss
 * @param {*} locale 默认 zh-cn
 * @returns 字符串日期
 */
 Date.prototype.format = function (fmt = 'YYYY-MM-DD HH:mm:ss', locale = 'zh-cn') {
	const now = moment(this).locale(locale).format(fmt);
	return now
}

/**
 * 日期几点几分 ex: 10:05
 * @returns 字符串日期
 */
 Date.prototype.hourAndMinute = function () {
  let date = this; 
	return date.toLocaleTimeString().slice(0, 5);
}

const weekMap = {
	1: "星期一",
	2: "星期二",
	3: "星期三",
	4: "星期四",
	5: "星期五",
	6: "星期六",
	7: "星期日",
}

/**
 * 获取定位日期往后七天日期数组
 * 
 * @param {*} date 定位日期
 * @param {*} block 日期格式化函数
 * @returns 日期模型数组 {date (外部通过 (new Date(e.date))获取), dateStr, weekday, weekdayDesc} 
 */
 Date.prototype.getWeektime = function ({offset = 0, block = (e) => { e.toLocaleDateString() }}) {
  let date = this; 
  date.setDate(date.getDate() + offset);

  const list = [];
  for (let i = 0; i < 7; i++) {
    let dateStr = block(date) ?? date.toLocaleString()
    // let dateStr = block(date) ?? date.Format()
    let weekday = date.getDay() || 7
    let weekdayStr = weekMap[weekday] ?? ""

    let newDate = JSON.parse(JSON.stringify(date))
    const obj = {
      date: newDate,
      dateStr: dateStr,
      weekday: weekday,
      weekdayStr: weekdayStr,
    }
    list.push(obj)
    date.setDate(date.getDate() + 1);
  }
  return list;
}


if (!Date.prototype.getMonday) {
  Date.prototype.getMonday = function() {
    const nowDay = this.getDay() || 7;

    // let monday = new Date();
    let monday = this;
    monday.setDate(this.getDate() - nowDay + 1);
    return monday
  }
}

/**
 * 获取日期偏移天数日期
 * 
 * @return Date
 */
 Date.prototype.offsetDay = function (n = 0) {
	let date = this;
	date.setDate(date.getDate() + n);
	return date
}

/**
 * 获取日期偏移小时日期
 * 
 * @return Date
 */
 Date.prototype.offsetHour = function (n = 0) {
	let date = this;
	date.setHours(date.getHours() + n);
	return date
}


Date.prototype.dayOfYear = function () {
	let date = this;
  let dateYearStart = new Date(date.getFullYear(), 0, 0)
  return Math.floor((date - dateYearStart) / 1000 / 60 / 60 / 24);
}

/**
 * 获取两个日期之间的所有日期
 * 
 * @param {*} endDate 截止日期
 * @returns 日期数组
 */
Date.prototype.betweenDates = function (endDate) {
	let startDate = this;
  let list = []
  //to avoid modifying the original date
  const dateTmp = new Date(startDate)
  while (dateTmp < endDate) {
    list = [...list, new Date(dateTmp)]
    dateTmp.setDate(dateTmp.getDate() + 1)
  }
  return list
}

/**
 * 计算两个日期之间的间隔天数
 * 
 * @param {*} endDate 截止日期
 * @returns 
 */
Date.prototype.dayDif = function (endDate) {
	let date = this;
  return Math.ceil(Math.abs(date.getTime() - endDate.getTime()) / 86400000)
}