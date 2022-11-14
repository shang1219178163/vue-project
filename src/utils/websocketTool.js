
let timerID = 0; 

export function keepAlive() { 
  let timeout = 20000;  
  if (webSocket.readyState == webSocket.OPEN) {  
    webSocket.send('');  
  }  
  timerID = setTimeout(keepAlive, timeout);  
}  

export function cancelKeepAlive() {  
  if (timerID) {  
    clearTimeout(timerID);  
  }  
}


// 现在我们实现了我们需要的两个方法，我们可以在 onOpen() 的最后面调用 keepAlive() ，在onClose() 的组后面调用 cancelKeepAlive()。