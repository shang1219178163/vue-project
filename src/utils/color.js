

// 随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`

// rgb 转 hex
const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// rgbToHex(0, 51, 255); 
// Result: #0033ff

export{
    randomHex,
    rgbToHex,
}