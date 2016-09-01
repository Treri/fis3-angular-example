window.inlineCSS = function(styleContent) {
  var styleNode = document.createElement("style");
  styleNode.setAttribute("type", "text/css");
  if(styleNode.styleSheet){
    styleNode.styleSheet.cssText = styleContent;
  }else{
    styleNode.appendChild(document.createTextNode(styleContent));
  }
  document.getElementsByTagName("head")[0].appendChild(styleNode);
};

__inline("plugins/angular/angular.js");
__inline("plugins/angular-ui-router/angular-ui-router.js");
