const randomcolor = (el, binding) => {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r},${g},${b})`;
    // const randomColor = '#'+Math.floor(Math.random()*(2<<23)).toString(16); 
    el.style.backgroundColor = randomColor;
}
  
export default randomcolor