(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";
    var recalc = function () {
      var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
      if (clientWidth) {
        var fontSize = clientWidth / 7.5;
        docEl.style.fontSize = fontSize + "px";
        var realFontSize = +window
          .getComputedStyle(docEl, null)
          .fontSize.replace("px", "");
        if (fontSize !== realFontSize) {
          docEl.style.fontSize =
            fontSize * (fontSize / realFontSize) + "px";
        }
      }
    };
    if (doc.addEventListener) {
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    }
  })(document, window);