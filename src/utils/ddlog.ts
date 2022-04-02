
const Style = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    // Foreground (text) colors
    fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      crimson: "\x1b[38m"
    },
    // Background colors
    bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      crimson: "\x1b[48m"
    }
  };

const logColor = (color, message, ...optionalParams) => {
    const optionalMessage = optionalParams.join(" ")
    console.log(`${color}%s %s${Style.reset}`, message, optionalMessage);
    // console.log(`%c%s %s`, "color: white; background-color: green", message, optionalMessage);
};

const ddlogExample = () => {
    const message = "Hellow World!"
    // console.log(`${'\x1b[31m'}%s${'\x1b[0m'}`, message);
    const options = ["aa", "bb", "cc"]
    logColor(Style.fg.red, message, "a", "b", "c");
    logColor(Style.fg.yellow, message, "a", "b", "c");
    logColor(Style.fg.blue, message, "a", "b", "c");
    logColor(Style.fg.green, message, "a", "b", "c");

    // logColor(Style.fg.magenta, message, ...options);
    // logColor(Style.fg.cyan, message, ...options);
    // logColor(Style.fg.crimson, message, ...options);
    
    logColor(Style.bg.red, message, ...options);
    logColor(Style.bg.yellow, message, ...options);
    logColor(Style.bg.blue, message, ...options);
    logColor(Style.bg.green, message, ...options);
}

/// 日志打印
const ddlog = (message, ...optionalParams) => {

    if (message == undefined || message === "") {
        return
    }

    // var err = new Error;
    // err.name = 'Trace';
    // err.message = util.format.apply(this, arguments);
    // Error.captureStackTrace(err, trace);

    let traceString = Error().stack
    const list = traceString.split("\n")
    // console.log(traceString);
    // console.log(list);
    const info = list[2]; 
    // console.log(info);

    const matchFuncs = info.match(/at (\S*) \(/);
    if (matchFuncs == undefined || matchFuncs.length < 2) {
        print(`${message}`, ...optionalParams)
        return
    }
    // console.log("matchs", matchFuncs)
    const funcName = matchFuncs[1];
    // console.log(`_${funcName}_`);

    const matchFiles = info.match(/[a-zA-Z0-9]*\.vue/);
    if (matchFiles == undefined || matchFiles.length == 0) {
        print(`${funcName}: ${message}`, ...optionalParams)
        return
    }
    const fileName = matchFiles[0];

    // console.log("matchFiles", matchFiles);
    print(`${fileName} ${funcName}: ${message}`, ...optionalParams)

};

const print = (message, ...optionalParams) => {
    if (optionalParams) {
        console.log(message, ...optionalParams.join(""))
    } else {
        console.log(message)
    }
}

const printInfo = (message, ...optionalParams) => {
    const style = `color: green; background-color: white`
    if (optionalParams) {
        const optionalMessage = optionalParams.join(" ")
        console.log(`%c%s %s`, style, message, optionalMessage);
    } else {
        console.log(`%c%s %s`, style, message);
    }
}

export {
    ddlog,
    printInfo,
    ddlogExample
}