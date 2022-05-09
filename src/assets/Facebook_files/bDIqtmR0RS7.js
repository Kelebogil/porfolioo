if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("VideoPlayerWatchInlinePauseScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlinePauseScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowItem_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeTitleOwnerThumbnailOverlay_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7094390067268819"}),null);
__d("VideoPlayerWatchInlinePauseScreenRowQuery.graphql",["VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},c={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},d={defaultValue:null,kind:"LocalArgument",name:"entry_point"},e={defaultValue:null,kind:"LocalArgument",name:"id"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g=[{kind:"Variable",name:"id",variableName:"id"}],h=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],i=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[j,k,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlinePauseScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},m=[k],n={kind:"InlineFragment",selections:m,type:"Node",abstractKey:"__isNode"},o={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[j,{kind:"InlineFragment",selections:[k,{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlinePauseScreenRowItem_story"},l,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[l],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,c,d,f],kind:"Operation",name:"VideoPlayerWatchInlinePauseScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[j,k,{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[j,{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},o,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[o,k],storageKey:null}],type:"Story",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"CommunityChatFeedObject",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBGroupsTabSuggestedGroupSetFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBGroupsTabSuggestedGroupSetsFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},k],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:b("VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation"),metadata:{},name:"VideoPlayerWatchInlinePauseScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5329865160358920"}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery.graphql",["VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},c={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},d={defaultValue:null,kind:"LocalArgument",name:"entry_point"},e={defaultValue:null,kind:"LocalArgument",name:"id"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g=[{kind:"Variable",name:"id",variableName:"id"}],h=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],i=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[j,k,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},m=[k],n={kind:"InlineFragment",selections:m,type:"Node",abstractKey:"__isNode"},o={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[j,{kind:"InlineFragment",selections:[k,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_story"},l,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[l],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,c,d,f],kind:"Operation",name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[j,k,{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[j,{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},o,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[o,k],storageKey:null}],type:"Story",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"CommunityChatFeedObject",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBGroupsTabSuggestedGroupSetFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBGroupsTabSuggestedGroupSetsFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},k],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:b("VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation"),metadata:{},name:"VideoPlayerWatchInlineEndScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeDurationThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeHuddleThumbnailWithRelay3d_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeTitleOwnerThumbnailOverlay_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailImageWithPreview_video",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeHuddleThumbnailWithRelay3d_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay.react",["fbt","CometRelay","CometVideoHomeDurationThumbnailOverlay_video.graphql","TetraText.react","VideoBroadcastStatus","formatDurationSeconds","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){a=a.video;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometVideoHomeDurationThumbnailOverlay_video.graphql"),a);if(!a||a.broadcast_status===c("VideoBroadcastStatus").LIVE)return null;var e=a&&!!a.has_viewer_watched_show_video;a=a.playable_duration||0;return a===0&&!e?null:j.jsx("div",{className:"pu81012h pmk7jnqg hzruof5a pcp91wgn pby63qed p8fzw8mz linoseic b5fwa0m2 labbqbtg b6jg2yqc hp05c5td bn9qtmzc s8bnoagg d6rk862h",children:j.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:e?h._(/*FBT_CALL*/"WATCHED"/*FBT_CALL*/):c("formatDurationSeconds")(a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailHoverContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("CometVideoHomePlayButtonThumbnailOverlay.react",["ix","CometImage.react","CometVideoHomeVideoThumbnailHoverContext","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useContext;function a(a){var b=a.forceVisibility;b=b===void 0?!1:b;a=a.size;var d=j(c("CometVideoHomeVideoThumbnailHoverContext"));d=d||b;b=h("101640");switch(a){case 24:b=h("354763");break;case 48:b=h("101640");break;case 72:b=h("352839");break}return i.jsx("div",{className:c("stylex").dedupe({"opacity-1":"b5wmifdl","transition-delay-1":"lxbcnve3","transition-duration-1":"pc15xi3s","transition-property-1":"art1omkt","transition-timing-function-1":"ilcmz9jb"},d?{"opacity-1":"pedkr2u6"}:null,{"display-1":"pq6dq46d","left-1":"pzli0o6b","position-1":"pmk7jnqg","top-1":"rk01pc8j","transform-0.1":"i07tyfg8"}),children:i.jsx(c("CometImage.react"),{src:b,width:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeTitleOwnerThumbnailOverlay.react",["CometLink.react","CometRelay","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql","CometVideoHomeVideoThumbnailHoverContext","TetraTextPairing.react","VideoHomeTypedLoggerLite","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;function a(a){a=a.video;var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql"),a),f=j(c("CometVideoHomeVideoThumbnailHoverContext")),g=e==null?void 0:e.id,k=e==null?void 0:e.owner;if(a==null||g==null||k==null)return i.jsx(c("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48});a=e.title_with_fallback;var l=k.uri_token;l=l!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:l}):k.url;g=c("XCometWatchControllerRouteBuilder").buildURL({v:g});var m=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"video",event_target_id:e.id})},n=function(){var a;c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"page",event_target_id:(a=e.owner)==null?void 0:a.id})};return i.jsx("div",{className:c("stylex").dedupe({"opacity-1":"b5wmifdl","transition-delay-1":"lxbcnve3","transition-duration-1":"pc15xi3s","transition-property-1":"art1omkt","transition-timing-function-1":"ilcmz9jb"},f?{"opacity-1":"pedkr2u6"}:null,{"background-color-1":"c6a7hszh","bottom-1":"i09qtzwb","box-sizing-1":"rq0escxv","end-1":"n7fi1qx3","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"}),children:i.jsx("div",{children:i.jsx("div",{className:"cxgpxx05 scb9dxdr dflh9lhu",children:i.jsx(c("TetraTextPairing.react"),{body:i.jsx(c("CometLink.react"),{color:"secondary",href:l,onClick:n,children:k.name}),bodyLineLimit:1,headline:a!=null&&i.jsx(c("CometLink.react"),{color:"white",href:g,onClick:m,children:a}),headlineLineLimit:2,level:4,reduceEmphasis:!0})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeHuddleThumbnailWithRelay3d.react",["CometPlaceholder.react","CometRelay","CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.className;a=a.video;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeHuddleThumbnailWithRelay3d_video.graphql"),a);return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a==null?void 0:a.huddle_thumbnail_enabled,props:{className:e}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d.react",["CometPlaceholder.react","CometRelay","CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.noPreviewFallback;e=e===void 0?null:e;var f=a.preload;f=f===void 0?!0:f;a=a.video;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql"),a);a=a==null?void 0:a.smart_preview_video;return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a,props:{noPreviewFallback:e,preload:f,previewVideo:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeVideoThumbnailImageWithPreview.react",["fbt","CometAspectRatioContainer.react","CometImage.react","CometRelay","CometVideoHomeHuddleThumbnailWithRelay3d.react","CometVideoHomeVideoThumbnailImageWithPreview_video.graphql","CometVideoHomeVideoThumbnailPreviewWithRelay3d.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={blackBackground:{backgroundColor:"tqsryivl",height:"datstx6m"},image:{bottom:"i09qtzwb",end:"n7fi1qx3",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",maxHeight:"nwf6jgls",maxWidth:"d2edcug0",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},imageContainer:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},root:{position:"l9j0dhe7"}};function a(a){var e,f=d("CometRelay").useFragment(i!==void 0?i:i=b("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql"),a.video);e=f==null?void 0:(e=f.image)==null?void 0:e.uri;return e==null?null:j.jsx("div",{className:c("stylex")(k.root),children:j.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:a.width/a.height,children:[j.jsxs("div",{className:c("stylex")(k.imageContainer),children:[j.jsx("div",{className:c("stylex")(k.blackBackground)}),j.jsx(c("CometImage.react"),{alt:h._(/*FBT_CALL*/"Video thumbnail"/*FBT_CALL*/),src:e,xstyle:k.image}),j.jsx(c("CometVideoHomeHuddleThumbnailWithRelay3d.react"),{className:c("stylex")(k.image),video:f})]}),j.jsx(c("CometVideoHomeVideoThumbnailPreviewWithRelay3d.react"),{video:f})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomeTitleOwnerThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlinePauseScreenRowItem_story.graphql","VideoPlayerWatchInlinePauseScreenRowItem_video.graphql","XCometWatchControllerRouteBuilder","react","useInnerMostTrackingCode","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useCallback,l=e.useState,m=84,n=150;function a(a){var e=a.position,f=a.story;a=a.video;f=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlinePauseScreenRowItem_story.graphql"),f);e=c("useStoryVPVDLogger")({interactionSourceOverride:54,position:e,trackable:f==null?void 0:f.encrypted_tracking});var g=e[0];e=e[1];var i=f.click_tracking_linkshim_cb,k=f.encrypted_click_tracking;f=f.encrypted_tracking;i={click_tracking_linkshim_cb:i||"",encrypted_click_tracking:k||"",encrypted_tracking:f||""};return j.jsx("div",{className:"cbu4d94t j83agx80",ref:g,children:j.jsx(c("CometTrackingCodeProvider.react"),{trackingCode:i,children:j.jsx(o,{video:a,vpvdDebuggingInfoComponent:e})})})}a.displayName=a.name+" [from "+f.id+"]";function o(a){var e=a.video;a=a.vpvdDebuggingInfoComponent;var f=l(!1),g=f[0],h=f[1];f=k(function(){h(!0)},[]);var o=k(function(){h(!1)},[]),p=c("useInnerMostTrackingCode")(),q=d("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWatchInlinePauseScreenRowItem_video.graphql"),e);e=q==null?void 0:q.id;if(q==null||e==null)return null;e=c("XCometWatchControllerRouteBuilder").buildURL({v:e});var r=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"video",event_target_id:q.id})};p={playerSubOrigin:"inline_pause_screen",trackingCode:p};return j.jsxs(j.Fragment,{children:[a,j.jsx(c("CometLink.react"),{href:e,onClick:r,passthroughProps:p,children:j.jsx(c("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:g,children:j.jsxs("div",{className:"l9j0dhe7 stjgntxs ni8dbmo4 kzx2olss aot14ch1 p86d2i9g beltcj47",onMouseEnter:f,onMouseLeave:o,children:[j.jsx(c("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:m,video:q,width:n}),j.jsx(c("CometVideoHomeDurationThumbnailOverlay.react"),{video:q}),j.jsx(c("CometVideoHomeTitleOwnerThumbnailOverlay.react"),{video:q})]})})})]})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRow.react",["fbt","ix","CometFlexibleRow.react","CometImage.react","CometLink.react","CometPressable.react","RelayHooks","TetraText.react","VideoPlayerWatchInlinePauseScreenRowItem.react","VideoPlayerWatchInlinePauseScreenRowQuery.graphql","WebPixelRatio","XCometWatchControllerRouteBuilder","react","requireDeferred","useImpressionLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useEffect,m=e.useState,n=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerWatchInlinePauseScreenRow.react");function a(a){var e=a.onPauseScreenDismissed,f=a.videoChainingCaller,g=a.videoChannelEntryPoint,o=a.videoChannelID;a=a.videoID;f=d("RelayHooks").useLazyLoadQuery(j!==void 0?j:j=b("VideoPlayerWatchInlinePauseScreenRowQuery.graphql"),{caller:f,entry_channel_id:o,entry_point:g,id:a,scale:d("WebPixelRatio").get()});o=m(!1);var p=o[0],q=o[1];g=m(!1);var r=g[0],s=g[1];a=c("useImpressionLogger")(n,function(a,b){r||(a.log({event:"inline_pause_screen_impression"}),s(!0))});g=(o=f==null?void 0:(o=f.video)==null?void 0:(g=o.video_channel)==null?void 0:(f=g.video_channel_feed)==null?void 0:f.nodes)!=null?o:[];var t=g.map(function(a,b){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:k.jsx(c("VideoPlayerWatchInlinePauseScreenRowItem.react"),{position:b,story:a,video:d},d.id)}).filter(Boolean);l(function(){p||(n.onReady(function(a){a.log({event:"video_pause_card_fetch",result_count:t.length})}),q(!0))},[p,t.length]);f=function(){n.onReady(function(a){a.log({click_point:"inline_pause_screen",event:"click",event_target:"watch"}),a.log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_home_www",tab_selection_type:"user_initiated_click"})})};return t.length>0?k.jsxs("div",{className:"dy7m38rt bkfpd7mw hdr16bak buofh1pr cbu4d94t j83agx80",ref:a,children:[k.jsxs("div",{className:"i1fnvgqd j83agx80",children:[k.jsx("div",{className:"ihqw7lf3",children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:k.jsx(c("CometLink.react"),{href:c("XCometWatchControllerRouteBuilder").buildURL({}),onClick:f,children:h._(/*FBT_CALL*/"More Videos on Watch"/*FBT_CALL*/)})})}),k.jsx("div",{className:"gl3lb2sf",children:e!=null?k.jsx(c("CometPressable.react"),{label:h._(/*FBT_CALL*/"Click to dismiss pause screen"/*FBT_CALL*/),onPress:e,children:k.jsx("div",{className:"mrt03zmi gl3lb2sf nhd2j8a9",children:k.jsx(c("CometImage.react"),{src:i("480713")})})}):null})]}),k.jsx(c("CometFlexibleRow.react"),{columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:t.length,children:t})]}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRowContainer.react",["VideoPlayerWatchInlinePauseScreenRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.onPauseScreenDismissed,d=a.videoChainingCaller,e=a.videoChannelEntryPoint,f=a.videoChannelID;a=a.videoID;return h.jsx(c("VideoPlayerWatchInlinePauseScreenRow.react"),{onPauseScreenDismissed:b,videoChainingCaller:d,videoChannelEntryPoint:e,videoChannelID:f,videoID:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","TetraTextPairing.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlineEndScreenRowItem_story.graphql","VideoPlayerWatchInlineEndScreenRowItem_video.graphql","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","react","useInnerMostTrackingCode","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useCallback,l=e.useState,m=84,n=150;function a(a){var e=a.position,f=a.story;a=a.video;f=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowItem_story.graphql"),f);e=c("useStoryVPVDLogger")({interactionSourceOverride:54,position:e,trackable:f==null?void 0:f.encrypted_tracking});var g=e[0];e=e[1];var i=f.click_tracking_linkshim_cb,k=f.encrypted_click_tracking;f=f.encrypted_tracking;i={click_tracking_linkshim_cb:i||"",encrypted_click_tracking:k||"",encrypted_tracking:f||""};return j.jsx("div",{className:"cbu4d94t j83agx80",ref:g,children:j.jsx(c("CometTrackingCodeProvider.react"),{trackingCode:i,children:j.jsx(o,{video:a,vpvdDebuggingInfoComponent:e})})})}a.displayName=a.name+" [from "+f.id+"]";function o(a){var e=a.video;a=a.vpvdDebuggingInfoComponent;var f=l(!1),g=f[0],h=f[1];f=k(function(){h(!0)},[]);var o=k(function(){h(!1)},[]),p=c("useInnerMostTrackingCode")(),q=d("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWatchInlineEndScreenRowItem_video.graphql"),e);e=q==null?void 0:q.id;var r=q==null?void 0:q.owner;if(q==null||e==null||r==null)return null;var s=q.title_with_fallback,t=r.uri_token;t=t!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:t}):r.url;e=c("XCometWatchControllerRouteBuilder").buildURL({v:e});var u=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_end_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"video",event_target_id:q.id})},v=function(){var a;c("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"page",event_target_id:(a=q.owner)==null?void 0:a.id})};p={playerSubOrigin:"inline_end_screen",trackingCode:p};return j.jsxs(j.Fragment,{children:[a,j.jsx(c("CometLink.react"),{href:e,onClick:u,passthroughProps:p,children:j.jsx(c("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:g,children:j.jsxs("div",{className:"l9j0dhe7 stjgntxs ni8dbmo4 kzx2olss aot14ch1 p86d2i9g beltcj47",onMouseEnter:f,onMouseLeave:o,children:[j.jsx(c("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:m,video:q,width:n}),j.jsx(c("CometVideoHomeDurationThumbnailOverlay.react"),{video:q}),j.jsx(c("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48})]})})}),j.jsx("div",{className:"cxgpxx05 dflh9lhu",children:j.jsx(c("TetraTextPairing.react"),{body:j.jsx(c("CometLink.react"),{color:"secondary",href:t,onClick:v,children:r.name}),bodyLineLimit:1,headline:s!=null&&j.jsx(c("CometLink.react"),{color:"white",href:e,onClick:u,passthroughProps:p,children:s}),headlineLineLimit:3,level:4,reduceEmphasis:!0})})]})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRow.react",["fbt","CometFlexibleRow.react","CometLink.react","RelayHooks","TetraText.react","VideoPlayerWatchInlineEndScreenRowItem.react","VideoPlayerWatchInlineEndScreenRowQuery.graphql","WebPixelRatio","XCometWatchControllerRouteBuilder","react","requireDeferred","useImpressionLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useEffect,l=e.useState,m=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerWatchInlineEndScreenRow.react");function a(a){var e=a.videoChainingCaller,f=a.videoChannelEntryPoint,g=a.videoChannelID;a=a.videoID;e=d("RelayHooks").useLazyLoadQuery(i!==void 0?i:i=b("VideoPlayerWatchInlineEndScreenRowQuery.graphql"),{caller:e,entry_channel_id:g,entry_point:f,id:a,scale:d("WebPixelRatio").get()});g=l(!1);var n=g[0],o=g[1];f=l(!1);var p=f[0],q=f[1];a=c("useImpressionLogger")(m,function(a,b){p||(a.log({event:"inline_end_screen_impression"}),q(!0))});f=(g=e==null?void 0:(g=e.video)==null?void 0:(f=g.video_channel)==null?void 0:(e=f.video_channel_feed)==null?void 0:e.nodes)!=null?g:[];var r=f.map(function(a,b){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:j.jsx(c("VideoPlayerWatchInlineEndScreenRowItem.react"),{position:b,story:a,video:d},d.id)}).filter(Boolean);k(function(){n||(m.onReady(function(a){a.log({event:"video_end_card_fetch",result_count:r.length})}),o(!0))},[n,r.length]);e=function(){m.onReady(function(a){a.log({click_point:"inline_end_screen",event:"click",event_target:"watch"}),a.log({entry_point_type:"inline_video_end_screen_tapped",event:"video_tab_selected",event_target:"watch_home_www",tab_selection_type:"user_initiated_click"})})};return r.length>0?j.jsxs("div",{className:"ihqw7lf3 taijpn5t hdr16bak buofh1pr cbu4d94t j83agx80",ref:a,children:[j.jsx("div",{className:"ihqw7lf3",children:j.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:j.jsx(c("CometLink.react"),{href:c("XCometWatchControllerRouteBuilder").buildURL({}),onClick:e,children:h._(/*FBT_CALL*/"More Videos on Watch"/*FBT_CALL*/)})})}),j.jsx(c("CometFlexibleRow.react"),{columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:r.length,children:r})]}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRowContainer.react",["VideoPlayerWatchInlineEndScreenRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;return h.jsx(c("VideoPlayerWatchInlineEndScreenRow.react"),{videoChainingCaller:b,videoChannelEntryPoint:d,videoChannelID:e,videoID:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);