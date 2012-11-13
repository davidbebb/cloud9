define("ace/theme/mono_industrial",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-mono-industrial",b.cssText=".ace-mono-industrial .ace_gutter {background: #1d2521;color: #C5C9C9}.ace-mono-industrial .ace_print-margin {width: 1px;background: #555651}.ace-mono-industrial .ace_scroller {background-color: #222C28}.ace-mono-industrial .ace_text-layer {color: #FFFFFF}.ace-mono-industrial .ace_cursor {border-left: 2px solid #FFFFFF}.ace-mono-industrial .ace_cursor.ace_overwrite {border-left: 0px;border-bottom: 1px solid #FFFFFF}.ace-mono-industrial .ace_marker-layer .ace_selection {background: rgba(145, 153, 148, 0.40)}.ace-mono-industrial.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #222C28;border-radius: 2px}.ace-mono-industrial .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-mono-industrial .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(102, 108, 104, 0.50)}.ace-mono-industrial .ace_marker-layer .ace_active-line {background: rgba(12, 13, 12, 0.25)}.ace-mono-industrial .ace_gutter-active-line {background-color: rgba(12, 13, 12, 0.25)}.ace-mono-industrial .ace_marker-layer .ace_selected-word {border: 1px solid rgba(145, 153, 148, 0.40)}.ace-mono-industrial .ace_invisible {color: rgba(102, 108, 104, 0.50)}.ace-mono-industrial .ace_string {background-color: #151C19;color: #FFFFFF}.ace-mono-industrial .ace_keyword,.ace-mono-industrial .ace_meta {color: #A39E64}.ace-mono-industrial .ace_constant,.ace-mono-industrial .ace_constant.ace_character,.ace-mono-industrial .ace_constant.ace_character.ace_escape,.ace-mono-industrial .ace_constant.ace_numeric,.ace-mono-industrial .ace_constant.ace_other {color: #E98800}.ace-mono-industrial .ace_entity.ace_name.ace_function,.ace-mono-industrial .ace_keyword.ace_operator,.ace-mono-industrial .ace_variable {color: #A8B3AB}.ace-mono-industrial .ace_invalid {color: #FFFFFF;background-color: rgba(153, 0, 0, 0.68)}.ace-mono-industrial .ace_support.ace_constant {color: #C87500}.ace-mono-industrial .ace_fold {background-color: #A8B3AB;border-color: #FFFFFF}.ace-mono-industrial .ace_support.ace_function {color: #588E60}.ace-mono-industrial .ace_entity.ace_name,.ace-mono-industrial .ace_support.ace_class,.ace-mono-industrial .ace_support.ace_type {color: #5778B6}.ace-mono-industrial .ace_storage {color: #C23B00}.ace-mono-industrial .ace_variable.ace_language,.ace-mono-industrial .ace_variable.ace_parameter {color: #648BD2}.ace-mono-industrial .ace_comment {color: #666C68;background-color: #151C19}.ace-mono-industrial .ace_entity.ace_other.ace_attribute-name {color: #909993}.ace-mono-industrial .ace_markup.ace_underline {text-decoration: underline}.ace-mono-industrial .ace_entity.ace_name.ace_tag {color: #A65EFF}.ace-mono-industrial .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ0tH4zzBz5sz/ABAOBECKH+evAAAAAElFTkSuQmCC) right repeat-y}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)}),define("node_modules/ace/build/src/theme-mono_industrial.js",function(){}),define("ace/lib/dom",["require","exports","module"],function(a,b,c){var d="http://www.w3.org/1999/xhtml";b.createElement=function(a,b){return document.createElementNS?document.createElementNS(b||d,a):document.createElement(a)},b.setText=function(a,b){a.innerText!==undefined&&(a.innerText=b),a.textContent!==undefined&&(a.textContent=b)},b.hasCssClass=function(a,b){var c=a.className.split(/\s+/g);return c.indexOf(b)!==-1},b.addCssClass=function(a,c){b.hasCssClass(a,c)||(a.className+=" "+c)},b.removeCssClass=function(a,b){var c=a.className.split(/\s+/g);for(;;){var d=c.indexOf(b);if(d==-1)break;c.splice(d,1)}a.className=c.join(" ")},b.toggleCssClass=function(a,b){var c=a.className.split(/\s+/g),d=!0;for(;;){var e=c.indexOf(b);if(e==-1)break;d=!1,c.splice(e,1)}return d&&c.push(b),a.className=c.join(" "),d},b.setCssClass=function(a,c,d){d?b.addCssClass(a,c):b.removeCssClass(a,c)},b.hasCssString=function(a,b){var c=0,d;b=b||document;if(b.createStyleSheet&&(d=b.styleSheets)){while(c<d.length)if(d[c++].owningElement.id===a)return!0}else if(d=b.getElementsByTagName("style"))while(c<d.length)if(d[c++].id===a)return!0;return!1},b.importCssString=function(c,e,f){f=f||document;if(e&&b.hasCssString(e,f))return null;var g;if(f.createStyleSheet)g=f.createStyleSheet(),g.cssText=c,e&&(g.owningElement.id=e);else{g=f.createElementNS?f.createElementNS(d,"style"):f.createElement("style"),g.appendChild(f.createTextNode(c)),e&&(g.id=e);var h=f.getElementsByTagName("head")[0]||f.documentElement;h.appendChild(g)}},b.importCssStylsheet=function(a,c){if(c.createStyleSheet)c.createStyleSheet(a);else{var d=b.createElement("link");d.rel="stylesheet",d.href=a;var e=c.getElementsByTagName("head")[0]||c.documentElement;e.appendChild(d)}},b.getInnerWidth=function(a){return parseInt(b.computedStyle(a,"paddingLeft"),10)+parseInt(b.computedStyle(a,"paddingRight"),10)+a.clientWidth},b.getInnerHeight=function(a){return parseInt(b.computedStyle(a,"paddingTop"),10)+parseInt(b.computedStyle(a,"paddingBottom"),10)+a.clientHeight},window.pageYOffset!==undefined?(b.getPageScrollTop=function(){return window.pageYOffset},b.getPageScrollLeft=function(){return window.pageXOffset}):(b.getPageScrollTop=function(){return document.body.scrollTop},b.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?b.computedStyle=function(a,b){return b?(window.getComputedStyle(a,"")||{})[b]||"":window.getComputedStyle(a,"")||{}}:b.computedStyle=function(a,b){return b?a.currentStyle[b]:a.currentStyle},b.scrollbarWidth=function(a){var c=b.createElement("p");c.style.width="100%",c.style.minWidth="0px",c.style.height="200px";var d=b.createElement("div"),e=d.style;e.position="absolute",e.left="-10000px",e.overflow="hidden",e.width="200px",e.minWidth="0px",e.height="150px",d.appendChild(c);var f=a.body||a.documentElement;f.appendChild(d);var g=c.offsetWidth;e.overflow="scroll";var h=c.offsetWidth;return g==h&&(h=d.clientWidth),f.removeChild(d),g-h},b.setInnerHtml=function(a,b){var c=a.cloneNode(!1);return c.innerHTML=b,a.parentNode.replaceChild(c,a),c},b.setInnerText=function(a,b){var c=a.ownerDocument;c.body&&"textContent"in c.body?a.textContent=b:a.innerText=b},b.getInnerText=function(a){var b=a.ownerDocument;return b.body&&"textContent"in b.body?a.textContent:a.innerText||a.textContent||""},b.getParentWindow=function(a){return a.defaultView||a.parentWindow}})