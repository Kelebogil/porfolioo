if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PagesCometAdminRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4825552967492995"}),null);
__d("PagesCometAdminRootQuery$Parameters",["PagesCometAdminRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometAdminRootQuery_facebookRelayOperation"),metadata:{},name:"PagesCometAdminRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PageCometAdminNotificationsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7504386499635140"}),null);
__d("PageCometAdminNotificationsRootQuery$Parameters",["PageCometAdminNotificationsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PageCometAdminNotificationsRootQuery_facebookRelayOperation"),metadata:{},name:"PageCometAdminNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePagePhotosRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7726197234071980"}),null);
__d("CometSinglePagePhotosRootQuery$Parameters",["CometSinglePagePhotosRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSinglePagePhotosRootQuery_facebookRelayOperation"),metadata:{},name:"CometSinglePagePhotosRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildCometPageAdminRoute.entrypoint",["JSResourceForInteraction","PagesCometAdminRootQuery$Parameters","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("PagesCometAdminRoot.react").__setRef("buildCometPageAdminRoute.entrypoint"),function(a){a=a.routeProps.pageID;return{pagesCometAdminRootQueryReference:{parameters:b("PagesCometAdminRootQuery$Parameters"),variables:{pageID:String(a),scale:d("WebPixelRatio").get()}}}});g["default"]=a}),98);
__d("PagesCometAdminSelfViewRoot.entrypoint",["CometSinglePageHomeRoot.entrypoint","JSResourceForInteraction","buildCometPageAdminRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometPageAdminRoute.entrypoint")(c("JSResourceForInteraction")("PagesCometAdminSelfViewRoot.react").__setRef("PagesCometAdminSelfViewRoot.entrypoint"),function(a){return{entryPoints:{pageSelfViewEntryPoint:{entryPoint:b("CometSinglePageHomeRoot.entrypoint"),entryPointParams:a}},extraProps:a}});g["default"]=a}),98);
__d("PageCometAdminNotificationRoot.entrypoint",["JSResourceForInteraction","PageCometAdminNotificationsRootQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeProps.pageID;return{queries:{pageNotifRootQueryReference:{parameters:b("PageCometAdminNotificationsRootQuery$Parameters"),variables:{count:18,environment:"MAIN_SURFACE",pageID:String(a),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("PageCometAdminNotificationsRoot.react").__setRef("PageCometAdminNotificationRoot.entrypoint")};g["default"]=a}),98);
__d("CometSinglePagePhotosRoot.entrypoint",["CometSinglePagePhotosRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("CometSinglePagePhotosRoot.react").__setRef("CometSinglePagePhotosRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{queries:{singlePagePhotosRootQueryReference:{parameters:b("CometSinglePagePhotosRootQuery$Parameters"),variables:{pageID:a,scale:d("WebPixelRatio").get()*4}}}}});g["default"]=a}),98);
__d("CometPageReviewsContentContainerFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4906302596164327"}),null);
__d("CometSinglePageReviewsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5786028241468413"}),null);
__d("CometSinglePageReviewsRoot.entrypoint",["CometPageReviewsContentContainerFeedQuery$Parameters","CometSinglePageReviewsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("CometSinglePageReviewsRoot.react").__setRef("CometSinglePageReviewsRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{extraProps:{pageID:a},queries:{singlePageReviewsContentContainerFeedQueryReference:{parameters:b("CometPageReviewsContentContainerFeedQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:0,feedLocation:"PAGE_TIMELINE",order:"MOST_HELPFUL",pageID:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1}},singlePageReviewsRootQueryReference:{parameters:b("CometSinglePageReviewsRootQuery$Parameters"),variables:{pageID:a,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);