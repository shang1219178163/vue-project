
// html[theme="dark"] {
//     --color: #FFF;
//     --background: #333;
//  }
//  html[theme="default"], html {
//     --color: #333;
//     --background: #FFF;
//  }

export const useTheme = (key = '') => {
    return (theme) => {
      document.documentElement.setAttribute(key, theme);
    }
}


// const changeTheme = useTheme();
// changeTheme('dark');