if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("ProfileCometNUXDialog_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"userID"}],kind:"Fragment",metadata:null,name:"ProfileCometNUXDialog_user",selections:[{alias:null,args:[{kind:"Variable",name:"profile_id",variableName:"userID"},{kind:"Literal",name:"supported",value:["XFBCometProfileMembershipVisibilityNuxDialogRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_nux_dialog",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometNUXDialog_user_dialogTrigger",fragmentName:"ProfileCometNewCommunityNUXRenderer_dialogTrigger",fragmentPropName:"dialogTrigger",kind:"ModuleImport"}],type:"XFBCometProfileMembershipVisibilityNuxDialogRenderer",abstractKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("CometProfilePlusCreatePreferredInteractionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5348202998557157"}),null);
__d("CometProfilePlusCreatePreferredInteractionDialogQuery$Parameters",["CometProfilePlusCreatePreferredInteractionDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometProfilePlusCreatePreferredInteractionDialogQuery_facebookRelayOperation"),metadata:{},name:"CometProfilePlusCreatePreferredInteractionDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometNUXDialog.react",["CometPlaceholder.react","CometRelay","ProfileCometNUXDialog_user.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.user;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometNUXDialog_user.graphql"),a);a=a.comet_profile_nux_dialog;return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometProfilePlusCreatePreferredInteractionDialog.entrypoint",["CometProfilePlusCreatePreferredInteractionDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{parameters:b("CometProfilePlusCreatePreferredInteractionDialogQuery$Parameters"),variables:{profileID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometProfilePlusCreatePreferredInteractionDialog.react").__setRef("CometProfilePlusCreatePreferredInteractionDialog.entrypoint")};g["default"]=a}),98);