
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

const ddlog = (color, text, bgColor = Style.reset) => {
    console.log(`${color}%s${bgColor}`, text);
};
const ddlogDemo = () => {
    const content = "Hellow World!"
    // console.log(`${'\x1b[31m'}%s${'\x1b[0m'}`, content);

    ddlog(Style.fg.red, content);
    ddlog(Style.fg.yellow, content);
    ddlog(Style.fg.blue, content);
    ddlog(Style.fg.green, content);

    ddlog(Style.fg.magenta, content);
    ddlog(Style.fg.cyan, content);
    ddlog(Style.fg.crimson, content);
    
    // ddlog(Style.bg.red, content);
    // ddlog(Style.bg.yellow, content);
    // ddlog(Style.bg.blue, content);
    // ddlog(Style.bg.green, content);
}

export {
    ddlog,
    ddlogDemo,
} 