if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometFileSelector.react",["react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef;function l(a){return a.map(function(a){if(a.indexOf("/")!==-1||a[0]===".")return a;c("recoverableViolation")('Accept parameter "'+a+'" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',"profile_comet");return"."+a}).join(",")}function a(a){var b=a.accept,c=a.children,d=a.multiple;d=d===void 0?!1:d;var e=a.onFilesSelected,f=k(null);j(function(){var a=f.current;if(a!=null){var b=function(a){a.stopPropagation()};a.addEventListener("click",b);return function(){a.removeEventListener("click",b)}}});a=i(function(){f.current!=null&&f.current.click()},[]);var g=i(function(a){e(a.currentTarget.files),a.currentTarget.value=""},[e]);b=h.jsxs(h.Fragment,{children:[h.jsx("input",{accept:b!=null?l(b):void 0,className:"mkhogb32",multiple:d,onChange:g,ref:f,type:"file"}),c(a)]});return b}g["default"]=a}),98);
__d("useFileDragEvents",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useEffect,j=b.useRef,k=b.useState;function a(a,b,c){b===void 0&&(b=document.documentElement);var d=j(0),e=k(!1),f=e[0],g=e[1],l=h(function(b){g(!1);if((c==null||c(b))&&a!=null){b.preventDefault();var e=b.dataTransfer;if(e!=null){var f=e.files;a(f,e)!==!1&&b.stopPropagation()}else b.stopPropagation();d.current=0}},[a,c]),m=h(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;(c==null||c(a))&&b!=null&&(a.preventDefault(),d.current++,g(!0))},[c]),n=h(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;(c==null||c(a))&&b!=null&&--d.current===0&&g(!1)},[c]),o=h(function(a){var b;b=(b=a.dataTransfer)==null?void 0:b.files;b!=null&&a.preventDefault()},[]);i(function(){if(b!=null){b.addEventListener("drop",l,!0);b.addEventListener("dragenter",m,!0);b.addEventListener("dragleave",n,!0);b.addEventListener("dragover",o,!0);return function(){b.removeEventListener("drop",l,!0),b.removeEventListener("dragenter",m,!0),b.removeEventListener("dragleave",n,!0),b.removeEventListener("dragover",o,!0)}}},[m,n,o,l,b]);return f}g["default"]=a}),98);
__d("CometImageCover.react",["BaseImage_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useRef,k=e.useState;d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var b=a.loading,d=a.onError,e=a.onLoad,f=a.src,g=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onError","onLoad","src","style"]);var l=k(null),m=l[0],n=l[1],o=j();l=i(function(){var a=o.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;n(a.src);e!=null&&e()},[e]);return m!=null?h.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+m+")",backgroundPosition:"center center",backgroundSize:"cover"},g)}):h.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"ttbfdpzt do00u71z",loading:b||void 0,onError:d,onLoad:l,ref:o,src:f,style:g}))}a.displayName=a.name+" [from "+f.id+"]";function b(a){return h.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}b.displayName=b.name+" [from "+f.id+"]";e=d?b:a;g["default"]=e}),98);
__d("fileInputAcceptValues",[],(function(a,b,c,d,e,f){"use strict";a=[".png",".jpg",".jpeg"];b=["image/*","image/heif","image/heic"];c=["video/*","video/mp4","video/x-m4v","video/x-matroska",".mkv"];d=b.concat(c);f.CUSTOM_THUMBNAIL=a;f.PHOTO=b;f.VIDEO=c;f.PHOTO_AND_VIDEO=d}),66);
__d("MWTooltipGroup.react",["cr:11874"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:11874")}),98);
__d("XAsyncRequest",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g,h){var i={},j=["Webkit","ms","Moz","O"],k=new RegExp("^("+j.join("|")+")"),l=d("ExecutionEnvironment").canUseDOM?document.createElement("div").style:{};function m(a){for(var b=0;b<j.length;b++){var c=j[b]+a;if(c in l)return c}return null}function n(a){switch(a){case"lineClamp":return c("UserAgent").isEngine("WebKit >= 315.14.2")?"WebkitLineClamp":null;default:return null}}function a(a){var b=c("camelize")(a);if(i[b]===void 0){var e=b.charAt(0).toUpperCase()+b.slice(1);k.test(e)&&h(0,957,a);d("ExecutionEnvironment").canUseDOM?i[b]=b in l?b:m(e):i[b]=n(b)}return i[b]}g["default"]=a}),98);
__d("shield",[],(function(a,b,c,d,e,f){function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}f["default"]=a}),66);
__d("BrowserSupportCore",["getVendorPrefixedName"],(function(a,b,c,d,e,f){a={hasCSSAnimations:function(){return!!b("getVendorPrefixedName")("animationName")},hasCSSTransforms:function(){return!!b("getVendorPrefixedName")("transform")},hasCSS3DTransforms:function(){return!!b("getVendorPrefixedName")("perspective")},hasCSSTransitions:function(){return!!b("getVendorPrefixedName")("transition")}};c=a;f["default"]=c}),66);
__d("BrowserSupport",["BrowserSupportCore","ExecutionEnvironment","UserAgent_DEPRECATED","getVendorPrefixedName","memoize"],(function(a,b,c,d,e,f,g){var h=null;function i(){if(d("ExecutionEnvironment").canUseDOM){h||(h=document.createElement("div"));return h}return null}b=function(a){return c("memoize")(function(){var b=i();return!b?!1:a(b)})};e=b(function(a){a.style.cssText="position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";return/sticky/.test(a.style.position)});f=b(function(a){return"scrollSnapType"in a.style||"webkitScrollSnapType"in a.style||"msScrollSnapType"in a.style});var j=b(function(a){return"scrollBehavior"in a.style});b=b(function(a){if(!("pointerEvents"in a.style))return!1;a.style.cssText="pointer-events:auto";return a.style.pointerEvents==="auto"});var k=c("memoize")(function(){return!(d("UserAgent_DEPRECATED").webkit()&&!d("UserAgent_DEPRECATED").chrome()&&d("UserAgent_DEPRECATED").windows())&&"FileList"in window&&"FormData"in window}),l=c("memoize")(function(){return!!a.blob}),m=c("memoize")(function(){return d("ExecutionEnvironment").canUseDOM&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","foreignObject").toString().includes("SVGForeignObject")}),n=c("memoize")(function(){return!!window.MutationObserver}),o=c("memoize")(function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd"},b=c("getVendorPrefixedName")("transition");return a[b]||null}),p=function(){return!!window.CanvasRenderingContext2D};g.hasCSSAnimations=c("BrowserSupportCore").hasCSSAnimations;g.hasCSSTransforms=c("BrowserSupportCore").hasCSSTransforms;g.hasCSS3DTransforms=c("BrowserSupportCore").hasCSS3DTransforms;g.hasCSSTransitions=c("BrowserSupportCore").hasCSSTransitions;g.hasPositionSticky=e;g.hasScrollSnapPoints=f;g.hasScrollBehavior=j;g.hasPointerEvents=b;g.hasFileAPI=k;g.hasBlobFactory=l;g.hasSVGForeignObject=m;g.hasMutationObserver=n;g.getTransitionEndEvent=o;g.hasCanvasRenderingContext2D=p}),98);