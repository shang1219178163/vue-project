export default function (el, binding) {
    if (!binding.value || binding.value == 1) {
        el.style.overflow = 'hidden';
        el.style.whiteSpace = 'nowrap';
        el.style.textOverflow = 'ellipsis';
        
    } else {
        el.style.overflow = 'hidden';
        el.style.display = '-webkit-box';
        el.style.webkitBoxOrient = 'vertical';
        el.style.webkitBoxClamp = parseInt(binding.value);
    }
}