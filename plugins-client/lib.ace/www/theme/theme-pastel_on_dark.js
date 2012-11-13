define("ace/theme/pastel_on_dark",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-pastel-on-dark",b.cssText=".ace-pastel-on-dark .ace_gutter {background: #353030;color: #8F938F}.ace-pastel-on-dark .ace_print-margin {width: 1px;background: #353030}.ace-pastel-on-dark .ace_scroller {background-color: #2C2828}.ace-pastel-on-dark .ace_text-layer {color: #8F938F}.ace-pastel-on-dark .ace_cursor {border-left: 2px solid #A7A7A7}.ace-pastel-on-dark .ace_cursor.ace_overwrite {border-left: 0px;border-bottom: 1px solid #A7A7A7}.ace-pastel-on-dark .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-pastel-on-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #2C2828;border-radius: 2px}.ace-pastel-on-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-pastel-on-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-pastel-on-dark .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-pastel-on-dark .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-pastel-on-dark .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-pastel-on-dark .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-pastel-on-dark .ace_keyword,.ace-pastel-on-dark .ace_meta {color: #757aD8}.ace-pastel-on-dark .ace_constant,.ace-pastel-on-dark .ace_constant.ace_character,.ace-pastel-on-dark .ace_constant.ace_character.ace_escape,.ace-pastel-on-dark .ace_constant.ace_other {color: #4FB7C5}.ace-pastel-on-dark .ace_keyword.ace_operator {color: #797878}.ace-pastel-on-dark .ace_constant.ace_character {color: #AFA472}.ace-pastel-on-dark .ace_constant.ace_language {color: #DE8E30}.ace-pastel-on-dark .ace_constant.ace_numeric {color: #CCCCCC}.ace-pastel-on-dark .ace_invalid,.ace-pastel-on-dark .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-pastel-on-dark .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-pastel-on-dark .ace_fold {background-color: #757aD8;border-color: #8F938F}.ace-pastel-on-dark .ace_support.ace_function {color: #AEB2F8}.ace-pastel-on-dark .ace_string {color: #66A968}.ace-pastel-on-dark .ace_string.ace_regexp {color: #E9C062}.ace-pastel-on-dark .ace_comment {color: #A6C6FF}.ace-pastel-on-dark .ace_variable {color: #BEBF55}.ace-pastel-on-dark .ace_variable.ace_language {color: #C1C144}.ace-pastel-on-dark .ace_xml-pe {color: #494949}.ace-pastel-on-dark .ace_markup.ace_underline {text-decoration: underline}.ace-pastel-on-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0dD4z9DR0fEfAA+vBBPqhbn1AAAAAElFTkSuQmCC) right repeat-y}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)}),define("node_modules/ace/build/src/theme-pastel_on_dark.js",function(){}),define("ace/lib/dom",["require","exports","module"],function(a,b,c){var d="http://www.w3.org/1999/xhtml";b.createElement=function(a,b){return document.createElementNS?document.createElementNS(b||d,a):document.createElement(a)},b.setText=function(a,b){a.innerText!==undefined&&(a.innerText=b),a.textContent!==undefined&&(a.textContent=b)},b.hasCssClass=function(a,b){var c=a.className.split(/\s+/g);return c.indexOf(b)!==-1},b.addCssClass=function(a,c){b.hasCssClass(a,c)||(a.className+=" "+c)},b.removeCssClass=function(a,b){var c=a.className.split(/\s+/g);for(;;){var d=c.indexOf(b);if(d==-1)break;c.splice(d,1)}a.className=c.join(" ")},b.toggleCssClass=function(a,b){var c=a.className.split(/\s+/g),d=!0;for(;;){var e=c.indexOf(b);if(e==-1)break;d=!1,c.splice(e,1)}return d&&c.push(b),a.className=c.join(" "),d},b.setCssClass=function(a,c,d){d?b.addCssClass(a,c):b.removeCssClass(a,c)},b.hasCssString=function(a,b){var c=0,d;b=b||document;if(b.createStyleSheet&&(d=b.styleSheets)){while(c<d.length)if(d[c++].owningElement.id===a)return!0}else if(d=b.getElementsByTagName("style"))while(c<d.length)if(d[c++].id===a)return!0;return!1},b.importCssString=function(c,e,f){f=f||document;if(e&&b.hasCssString(e,f))return null;var g;if(f.createStyleSheet)g=f.createStyleSheet(),g.cssText=c,e&&(g.owningElement.id=e);else{g=f.createElementNS?f.createElementNS(d,"style"):f.createElement("style"),g.appendChild(f.createTextNode(c)),e&&(g.id=e);var h=f.getElementsByTagName("head")[0]||f.documentElement;h.appendChild(g)}},b.importCssStylsheet=function(a,c){if(c.createStyleSheet)c.createStyleSheet(a);else{var d=b.createElement("link");d.rel="stylesheet",d.href=a;var e=c.getElementsByTagName("head")[0]||c.documentElement;e.appendChild(d)}},b.getInnerWidth=function(a){return parseInt(b.computedStyle(a,"paddingLeft"),10)+parseInt(b.computedStyle(a,"paddingRight"),10)+a.clientWidth},b.getInnerHeight=function(a){return parseInt(b.computedStyle(a,"paddingTop"),10)+parseInt(b.computedStyle(a,"paddingBottom"),10)+a.clientHeight},window.pageYOffset!==undefined?(b.getPageScrollTop=function(){return window.pageYOffset},b.getPageScrollLeft=function(){return window.pageXOffset}):(b.getPageScrollTop=function(){return document.body.scrollTop},b.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?b.computedStyle=function(a,b){return b?(window.getComputedStyle(a,"")||{})[b]||"":window.getComputedStyle(a,"")||{}}:b.computedStyle=function(a,b){return b?a.currentStyle[b]:a.currentStyle},b.scrollbarWidth=function(a){var c=b.createElement("p");c.style.width="100%",c.style.minWidth="0px",c.style.height="200px";var d=b.createElement("div"),e=d.style;e.position="absolute",e.left="-10000px",e.overflow="hidden",e.width="200px",e.minWidth="0px",e.height="150px",d.appendChild(c);var f=a.body||a.documentElement;f.appendChild(d);var g=c.offsetWidth;e.overflow="scroll";var h=c.offsetWidth;return g==h&&(h=d.clientWidth),f.removeChild(d),g-h},b.setInnerHtml=function(a,b){var c=a.cloneNode(!1);return c.innerHTML=b,a.parentNode.replaceChild(c,a),c},b.setInnerText=function(a,b){var c=a.ownerDocument;c.body&&"textContent"in c.body?a.textContent=b:a.innerText=b},b.getInnerText=function(a){var b=a.ownerDocument;return b.body&&"textContent"in b.body?a.textContent:a.innerText||a.textContent||""},b.getParentWindow=function(a){return a.defaultView||a.parentWindow}})