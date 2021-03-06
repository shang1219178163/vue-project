
// const Style = {
//     reset: "\x1b[0m",
//     bright: "\x1b[1m",
//     dim: "\x1b[2m",
//     underscore: "\x1b[4m",
//     blink: "\x1b[5m",
//     reverse: "\x1b[7m",
//     hidden: "\x1b[8m",
//     // Foreground (text) colors
//     fg: {
//       black: "\x1b[30m",
//       red: "\x1b[31m",
//       green: "\x1b[32m",
//       yellow: "\x1b[33m",
//       blue: "\x1b[34m",
//       magenta: "\x1b[35m",
//       cyan: "\x1b[36m",
//       white: "\x1b[37m",
//       crimson: "\x1b[38m"
//     },
//     // Background colors
//     bg: {
//       black: "\x1b[40m",
//       red: "\x1b[41m",
//       green: "\x1b[42m",
//       yellow: "\x1b[43m",
//       blue: "\x1b[44m",
//       magenta: "\x1b[45m",
//       cyan: "\x1b[46m",
//       white: "\x1b[47m",
//       crimson: "\x1b[48m"
//     }
// };

// const color = (color, message, ...optionalParams) => {
//     const optionalMessage = optionalParams.join(" ")
//     console.log(`${color}%s %s${Style.reset}`, message, optionalMessage);
//     // console.log(`%c%s %s`, "color: white; background-color: green", message, optionalMessage);
// };

// const ddlogExample = () => {
//     const message = "Hellow World!"
//     // console.log(`${'\x1b[31m'}%s${'\x1b[0m'}`, message);
//     const options = ["aa", "bb", "cc"]
//     color(Style.fg.red, message, "a", "b", "c");
//     color(Style.fg.yellow, message, "a", "b", "c");
//     color(Style.fg.blue, message, "a", "b", "c");
//     color(Style.fg.green, message, "a", "b", "c");

//     color(Style.bg.red, message, ...options);
//     color(Style.bg.yellow, message, ...options);
//     color(Style.bg.blue, message, ...options);
//     color(Style.bg.green, message, ...options);
// }


/// 获取日志方法信息

/**
 * 获取日志位置方法信息
 * 
 * @param {*} row 锁定错误日志行
 * @returns 
 */
 const getMethodInfo = (row = 2, message, ...optionalParams) => {

    // var err = new Error;
    // err.name = 'Trace';
    // err.message = util.format.apply(this, arguments);
    // Error.captureStackTrace(err, trace);

    let traceString = Error().stack
    const list = traceString.split("\n")
    // console.log(traceString);
    // console.log(list);
    const info = list[row]; 
    // console.log(info);

    const matchFuncs = info.match(/at (\S*) \(/);
    if (matchFuncs == undefined || matchFuncs.length < 2) {
        return ""
    }
    // console.log("matchs", matchFuncs)
    const funcName = matchFuncs[1];
    // console.log(`_${funcName}_`);

    const matchFiles = info.match(/[a-zA-Z0-9]*\.vue/);
    if (matchFiles == undefined || matchFiles.length == 0) {
        return funcName
    }
    const fileName = matchFiles[0];
    return `${fileName} ${funcName}`
};

/// 日志打印
const LogLevel = {
    log: 0,
    info: 1, 
    debug: 2, //（调试
    warn: 3, //（警告）
    error: 4, //（错误）
}

/**
 * 等级日志打印
 * 
 * @param row 锁定错误日志行
 * @param leve 方法层数
 * @returns 
 */
const logLevel = (row = 3, leve = LogLevel.log, message, ...optionalParams) => {
    if (message == undefined || message === "") {
        return
    }
    const msg = `${getMethodInfo(row,  message, optionalParams)}: ${message}`
    if (optionalParams) {
        const optionalMessage = optionalParams.join(" ")
        // console.log(`>> %c%s %s`, style, msg, optionalMessage);
        switch (leve) {
            case LogLevel.info:
                console.info(`%s %s`, msg, optionalMessage);
                break;
            case LogLevel.debug:
                console.debug(`%s %s`, msg, optionalMessage);
                break;
            case LogLevel.warn:
                console.warn(`%s %s`, msg, optionalMessage);
                break;
            case LogLevel.error:
                console.error(`%s %s`, msg, optionalMessage);
                break;
            default:
                console.log(`%s %s`, msg, optionalMessage);
                break;
        }

    } else {
        // console.log(`>> %c%s %s`, style, msg);
        switch (leve) {
            case LogLevel.info:
                console.info(`%s`, msg);
                break;
            case LogLevel.debug:
                console.debug(`%s`, msg);
                break;
            case LogLevel.warn:
                console.warn(`%s`, msg);
                break;
            case LogLevel.error:
                console.error(`%s`, msg);
                break;
            default:
                console.log(`%s`, msg);
                break;
        }
    }
};

const log = (message, ...optionalParams) => {
    logLevel(4, LogLevel.log, message, optionalParams);
};

const info = (message, ...optionalParams) => {
    logLevel(4, LogLevel.info, message, optionalParams);
};

const debug = (message, ...optionalParams) => {
    logLevel(4, LogLevel.debug, message, optionalParams);
};

const warn = (message, ...optionalParams) => {
    logLevel(4, LogLevel.warn, message, optionalParams);
};

const error = (message, ...optionalParams) => {
    logLevel(4, LogLevel.error, message, optionalParams);
};


/**
 * 颜色日志
 * 
 * @param {*} style style 字符串
 * @param {*} row 锁定错误日志行
 * @returns 
 */
const logColor = (style = `color: green; background-color: white;`, row = 3, message, ...optionalParams) => {
    if (message == undefined || message === "") {
        return
    }
    const msg = `${getMethodInfo(row,  message, optionalParams)}: ${message}`
    if (optionalParams) {
        const optionalMessage = optionalParams.join(" ")
        console.log(`%c%s %s`, style, msg, optionalMessage);
    } else {
        console.log(`%c%s %s`, style, msg);
    }
};


// 白底黑字
const red = (message, ...optionalParams) => {
    const style = `color: red; background-color: white;`
    logColor(style, 4, message, optionalParams);
};

// 白底橙色(替代黄色)
const orange = (message, ...optionalParams) => {
    const style = `color: orange; background-color: white;`
    logColor(style, 4, message, optionalParams);
};

// 白底蓝色
const blue = (message, ...optionalParams) => {
    const style = `color: blue; background-color: white;`
    logColor(style, 4, message, optionalParams);
};

// 白底绿色
const green = (message, ...optionalParams) => {
    const style = `color: green; background-color: white;`
    logColor(style, 4, message, optionalParams);
};


export {
    log,
    info,
    debug, //（调试
    warn, //（警告）
    error, //（错误）

    red,
    orange,    
    blue,
    green,
}