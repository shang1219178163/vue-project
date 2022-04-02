// import moment from "@/lib/moment.js"

// declare global {

//     interface Date {
//         /// 日期格式化 ex: (new Date).Format() : 2022-03-31 10:25:14
//         format(fmt: String, locale: String): String,
//         /// 获取定位日期往后七天日期数组
//         getWeektime(offset?: number, block?: Function): any[],
        
//         // 获取当前日期所在周的第一天
//         getMonday(): Date;
//         // 获取日期偏移天数日期
//         offsetDay(n: number): Date;
//         // 获取日期偏移小时日期
//         offsetHour(n: number): Date;

//         isValid(): boolean;

//         betweenDates(endTime: Date, monthUnitDes: String, dayUnitDes: String): any[],
//         // dayOfYear(): number;
//     }
// }
// export {}; 


// /**
//  * 日期格式化 ex: (new Date).Format() : 2022-03-31 10:25:14
//  * 
//  * @param {*} fmt 默认 YYYY-MM-DD HH:mm:ss
//  * @param {*} locale 默认 zh-cn
//  * @returns 字符串日期
//  */
//  Date.prototype.format = function (fmt: String = 'YYYY-MM-DD HH:mm:ss', locale: String = 'zh-cn') {
// 	const now = moment(this).locale(locale).format(fmt);
// 	return now
// }

// const weekMap = {
// 	1: "星期一",
// 	2: "星期二",
// 	3: "星期三",
// 	4: "星期四",
// 	5: "星期五",
// 	6: "星期六",
// 	7: "星期日",
// }

// /**
//  * 获取定位日期往后七天日期数组
//  * 
//  * @param {*} date 定位日期
//  * @param {*} block 日期格式化函数
//  * @returns 日期模型数组 {date (外部通过 (new Date(e.date))获取), dateStr, weekday, weekdayDesc} 
//  */
//  Date.prototype.getWeektime = function (offset: number = 0, block: Function = (e) => { e.toLocaleDateString() }}) {
//     let date = this; 
//     date.setDate(date.getDate() + offset);
	
//     const list = [];
//     for (let i = 0; i < 7; i++) {
// 		let dateStr = block(date) ?? date.toLocaleString()
// 		// let dateStr = block(date) ?? date.Format()
// 		let weekday = date.getDay() || 7
// 		let weekdayStr = weekMap[weekday] ?? ""

// 		let newDate = JSON.parse(JSON.stringify(date))
// 		const obj = {
//             date: newDate,
// 			dateStr: dateStr,
//             weekday: weekday,
// 			weekdayStr: weekdayStr,
//         }
//         list.push(obj)
//         date.setDate(date.getDate() + 1);
//     }
//     return list;
// }


// if (!Date.prototype.getMonday) {
//     Date.prototype.getMonday = function(): Date {
//         const nowDay = this.getDay() || 7;
    
//         // let monday = new Date();
//         let monday = this;
//         monday.setDate(this.getDate() - nowDay + 1);
//         return monday
//     }
// }

// /**
//  * 获取日期偏移天数日期
//  * 
//  * @return Date
//  */
//  Date.prototype.offsetDay = function (n: number = 0) {
// 	let date = this;
// 	date.setDate(date.getDate() + n);
// 	return date
// }

// /**
//  * 获取日期偏移小时日期
//  * 
//  * @return Date
//  */
//  Date.prototype.offsetHour = function (n: number = 0) {
// 	let date = this;
// 	date.setHours(date.getHours() + n);
// 	return date
// }

// // 检查日期是否有效
// Date.prototype.isValid = function () {
// 	let date = this;
//     return !Number.isNaN(date.valueOf())
// }

// // Date.prototype.dayOfYear = function () {
// // 	let date = this;
// //     let dateYearStart = new Date(date.getFullYear(), 0, 0)
// //     return Math.floor((date - dateYearStart) / 1000 / 60 / 60 / 24);
// // }


// Date.prototype.betweenDates = function (endTime: Date, monthUnitDes: string = '月', dayUnitDes: string = '日') {
// 	let startTime = this;
//     var list = []
//     var i = 0
//     while ((endTime.getTime() - startTime.getTime()) >= 0) {
//       var year = startTime.getFullYear()
//       var month = startTime.getMonth() + 1
//       var day = startTime.getDate()
//       list[i] = month + monthUnitDes ?? "-" + day + dayUnitDes ?? "-"
//       startTime.setDate(startTime.getDate() + 1)
//       i += 1
//     }
//     return list
// }
