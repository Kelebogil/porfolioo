if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("ProfileCometTimelineGridViewRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8056892377670190"}),null);
__d("ProfileCometTimelineGridViewRootQuery$Parameters",["ProfileCometTimelineGridViewRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometTimelineGridViewRootQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometTimelineGridViewRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTimelineGridViewFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4680918898675718"}),null);
__d("ProfileCometTimelineGridViewFeedQuery$Parameters",["ProfileCometTimelineGridViewFeedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometTimelineGridViewFeedQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometTimelineGridViewFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTimelineGridViewRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometTimelineGridViewFeedQuery$Parameters","ProfileCometTimelineGridViewRootQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometProfileRoute.entrypoint")(c("JSResourceForInteraction")("ProfileCometTimelineGridViewRoot.react").__setRef("ProfileCometTimelineGridViewRouteRoot.entrypoint"),function(a){var b={gridMediaWidth:230,omitPinnedPost:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:d("WebPixelRatio").get(),userID:String(a.routeProps.userID)||""};a.routeProps.hasMentionsTab===!0&&(b=babelHelpers["extends"]({},b,{postedBy:{group:"OWNER"}}));return{queries:{timelineGridViewFeedQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("ProfileCometTimelineGridViewFeedQuery$Parameters"),variables:b},timelineGridViewRootQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("ProfileCometTimelineGridViewRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),userID:String(a.routeProps.userID)||""}}}}});g["default"]=a}),98);