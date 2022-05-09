if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometUFIAwardLearnMoreDialog.react",["fbt","ix","CometCardedDialog.react","CometColumn.react","CometColumnItem.react","CometImage.react","CometRow.react","CometRowItem.react","TetraButton.react","TetraText.react","ViewportAwareKeyframes.react","bx","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=548,l=h._(/*FBT_CALL*/"Introducing Community Awards"/*FBT_CALL*/),m=h._(/*FBT_CALL*/"You can now give awards to outstanding group content. Select \"Award\" underneath a post or comment to try it out."/*FBT_CALL*/);function a(a){a=a.onClose;var b=j.jsx(c("CometImage.react"),{src:i("188483")});b=j.jsx(c("ViewportAwareKeyframes.react"),{assetName:"animation",errorPlaceholder:b,height:235,projectName:"community_reputation_system",source:c("bx").getURL(c("bx")("2018")),width:k});return j.jsx(c("CometCardedDialog.react"),{onClose:a,withCloseButton:!0,children:j.jsx("div",{className:"rbmczful",children:j.jsxs(c("CometColumn.react"),{paddingHorizontal:0,paddingTop:0,paddingVertical:0,spacing:16,children:[j.jsx(c("CometColumnItem.react"),{children:b}),j.jsx(c("CometColumnItem.react"),{children:j.jsxs(c("CometColumn.react"),{paddingHorizontal:16,paddingTop:4,paddingVertical:12,spacing:12,children:[j.jsx(c("CometColumnItem.react"),{children:j.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:l})}),j.jsx(c("CometColumnItem.react"),{paddingTop:4,children:j.jsx(c("TetraText.react"),{type:"body2",children:m})})]})}),j.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:0,paddingVertical:16,children:j.jsx(c("CometRow.react"),{align:"end",paddingHorizontal:0,paddingTop:0,paddingVertical:0,spacing:0,children:j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"OK"/*FBT_CALL*/),onPress:a})})})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CommunityReputationAwardType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({DUMMY:0,NEW_IDEA:1,UPLIFTING:2,EDUCATIONAL:3,ENTERTAINING:4,RELEVANT:5,SUPPORTIVE:6,HILARIOUS:7,HELPFUL:8,THOUGHTFUL:9,APPLAUSE:10,INSPIRING:11,CONGRATS:12,ALL_STAR:13,HIGH_FIVE:14,CREATIVE:15,TOP_TIP:16});c=a;f["default"]=c}),66);
__d("XFBCommunityReputationAwardTypeUtils.facebook",["$InternalEnumUtils","CommunityReputationAwardType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("CommunityReputationAwardType"));b=d("$InternalEnumUtils").createFromJSEnum(c("CommunityReputationAwardType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("CometCommunityAwardsLogger",["XFBCommunityReputationAwardTypeUtils.facebook","promiseDone","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("CommunityAwardsEventFalcoEvent").__setRef("CometCommunityAwardsLogger");function a(a){var b=i(a);c("promiseDone")(h.load().then(function(a){return a.log(function(){return b})}))}function i(a){var b=a.awardTypes,c=a.commentID,d=a.contentType,e=a.entryPoint,f=a.eventType,g=a.groupID,h=a.productElement,i=a.storyID;a=a.surface;b=b?Array.from(b).map(function(a){return k(a)}).filter(Boolean):void 0;d=j(c,i,d);return{award_types:b,awarded_content_type:(b=d)!=null?b:void 0,comment_id:c,entry_point:e,event_type:f,group_id:g,product_element:h,story_id:i,surface:a}}function j(a,b,c){c=c;c==null&&(a!=null?c="comment":b!=null&&(c="post"));return c}function k(a){var b=d("XFBCommunityReputationAwardTypeUtils.facebook").toJSEnum(a);if(b==null){c("recoverableViolation")("CometCommunityAwardsLogger cannot convert award type "+a+"to JSEnum","community_awards");return null}return b}g.log=a}),98);
__d("CommunityAwardsEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1005");c=b("FalcoLoggerInternal").create("community_awards_event",a);e.exports=c}),null);