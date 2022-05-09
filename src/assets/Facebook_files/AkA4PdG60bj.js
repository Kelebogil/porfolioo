if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometComposerPluginsDispatchContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometComposerPreSubmitHooksContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({current:new Map()});g["default"]=b}),98);
__d("useCometComposerDecorator",["CometComposerPluginsDispatchContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect;function a(a){var b=h(c("CometComposerPluginsDispatchContext"));i(function(){b({decorator:a,type:"install_decorator"});return function(){return b({decorator:a,type:"uninstall_decorator"})}},[a,b])}g["default"]=a}),98);
__d("useCometComposerHandler",["CometComposerPluginsDispatchContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect;function a(a){var b=h(c("CometComposerPluginsDispatchContext"));i(function(){b({handler:a,type:"install_handler"});return function(){return b({handler:a,type:"uninstall_handler"})}},[b,a])}g["default"]=a}),98);
__d("useComposerPreSubmitHook",["CometComposerPreSubmitHooksContext","useContextRef"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useContextRef")(a,c("CometComposerPreSubmitHooksContext"))}g["default"]=a}),98);
__d("CometComposerInlineErrorRenderer.react",["TetraListCell.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={errorList:{maxHeight:"d7pq72xb",overflowX:"d76ob5m9",overflowY:"eg9m0zos",position:"l9j0dhe7"}};function a(a){var b=a.error;a=a.xstyle;return b==null||b===""?null:h.jsx("div",{className:c("stylex")(i.errorList,a),children:h.jsx(c("TetraListCell.react"),{contentHorizontalPadding:0,headline:h.jsx(c("TetraText.react"),{color:"negative",type:"body3",children:b}),paddingHorizontal:0},"error")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getEditorStateFromContentEditableState_DEPRECATED_DO_NOT_USE",["ContentState","EditorState","RichTextEditorUtil"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){switch(a.__type){case"plain-text":var d=a.hasFocus,e=a.selectionOffsets,f=a.text,g=c("ContentState").createFromText(f.replace(/\n\n$/,"\n")),h=c("EditorState").createWithContent(g);a.startWithHeaderTextStyle===!0&&f===""&&(h=c("RichTextEditorUtil").toggleBlockType(h,"header-one"),h=c("EditorState").forceSelection(h,h.getSelection()));if(e){var i,j,k;f=g.getFirstBlock();var l=0;while(f){var m=f.getKey(),n=f.getLength(),o=l;l+=n;l>=e.start&&e.start-o>=0&&(i={key:m,offset:e.start-o});l>=e.end&&e.end-o>=0&&(j={key:m,offset:e.end-o});k==null&&(j&&!i?k=!0:i&&!j?k=!1:j&&i&&(k=i.offset>j.offset));f=g.getBlockAfter(m)}if(i&&j){n=h.getSelection().merge({anchorKey:i.key,anchorOffset:i.offset,focusKey:j.key,focusOffset:j.offset,isBackward:!!k});h=c("EditorState").forceSelection(h,n)}}else d&&(h=c("EditorState").moveFocusToEnd(h));return h;case"editor-state-based":default:return b!=null?c("EditorState").set(a.draftEditorState,{decorator:b}):a.draftEditorState}}g["default"]=a}),98);
__d("getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a.__type){case"plain-text":return a.text;case"editor-state-based":return a.draftEditorState.getCurrentContent().getPlainText();default:return a}}f["default"]=a}),66);
__d("getDeferredComposerTransformer",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b,c,d,e){a.loadImmediately(function(a){a(b,c,d,e)})}}f["default"]=a}),66);
__d("cometComposerAttachmentsEligibilityChecker",["CometComposerAttachmentPluginTypes","CometComposerTaggerPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=(a=a.attachmentArea)==null?void 0:a.activeAttachmentType;if(b!=null){if(Object.prototype.hasOwnProperty.call(c("CometComposerTaggerPluginTypes"),b))return new Set();a=new Set(Object.keys(c("CometComposerAttachmentPluginTypes")).filter(function(a){return!Object.prototype.hasOwnProperty.call(c("CometComposerTaggerPluginTypes"),a)&&a!==b}));b===c("CometComposerAttachmentPluginTypes").LINK&&a["delete"](c("CometComposerAttachmentPluginTypes").MEDIA);return a}return new Set()}g["default"]=a}),98);
__d("composerEditorStateViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"update_editor_state":if(b.editorState!==a.editorState)return babelHelpers["extends"]({},a,{editorState:b.editorState});break;case"update_draft_editor_state":var c=a.editorState;if(c!=null&&c.__type==="editor-state-based"&&c.draftEditorState!==b.draftEditorState)return babelHelpers["extends"]({},a,{editorState:babelHelpers["extends"]({},c,{draftEditorState:b.draftEditorState})});break}return a}f["default"]=a}),66);
__d("FeedComposerCometTextStyleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({color:"primary-text",fontSize:24});g["default"]=b}),98);
__d("getIsOptimisticPreviewEnabled",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.transformedMediaData;a=a.viewStateMediaData;var d=!1;if(b){d=((b=b)!=null?b:[]).some(function(a){return(a==null?void 0:a.video)!=null})}else if(a){d=((b=a)!=null?b:[]).some(function(a){return a.fileType==="VIDEO"})}return d?c("gkx")("768"):!1}g["default"]=a}),98);
__d("CometMentionsA11yContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("StoriesUtils",["ExecutionEnvironment","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h={};b=function(a){h[a]==null&&(h[a]=window.atob(a).split(":")[2]);return h[a]};function a(){var a={format:"image/jpeg",quality:.92};return!c("UserAgent").isBrowser("Chrome")?a:{format:"image/webp",quality:.86}}var i=500;e=function(a,b){b===void 0&&(b=i);return!d("ExecutionEnvironment").canUseDOM?!1:a<b};g.cardID2ThreadID=b;g.getBlobImageParams=a;g.shouldResizeToViewStories=e}),98);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("getActiveElement",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a=document);if(a===void 0)return null;try{return a.activeElement||a.body}catch(b){return a.body}}f["default"]=a}),66);
__d("DraftEditorFlushControlled",["ReactDOMComet"],(function(a,b,c,d,e,f){a=b("ReactDOMComet").unstable_flushControlled;e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 88:return i(a)&&a.shiftKey?"strikethrough":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);