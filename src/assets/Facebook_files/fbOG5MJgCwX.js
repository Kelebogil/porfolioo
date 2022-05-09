if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"environment",variableName:"device"},b=[{kind:"Variable",name:"bookmark_render_location",variableName:"bookmark_render_location"},a],c=[{alias:null,args:null,kind:"ScalarField",name:"badge_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"GroupsCometNotificationListItem_tabBadge"}],d={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},e={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notifications",plural:!0,selections:c,storageKey:null},f=[d,e];return{argumentDefinitions:[{defaultValue:[],kind:"LocalArgument",name:"bookmark_ids"},{defaultValue:"COMET_TOP_TAB",kind:"LocalArgument",name:"bookmark_render_location"},{defaultValue:"COMET",kind:"LocalArgument",name:"device"},{defaultValue:!1,kind:"LocalArgument",name:"useNewInfra"}],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailSurfaceHighlights_viewer",selections:[{condition:"useNewInfra",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Variable",name:"bookmark_ids",variableName:"bookmark_ids"},a],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:b,kind:"ScalarField",name:"unread_count",storageKey:null},{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"unread_notifications",plural:!0,selections:c,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},{condition:"useNewInfra",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometNotificationListItem_groupsTab"},{alias:"newHighlights",args:null,concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"badge_identifiers",storageKey:null},d,e],storageKey:null},{alias:"seenHighlights",args:[{kind:"Literal",name:"seen_states",value:["SEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:f,storageKey:'highlights(seen_states:["SEEN"])'},{alias:"unseenHighlights",args:[{kind:"Literal",name:"seen_states",value:["UNSEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:f,storageKey:'highlights(seen_states:["UNSEEN"])'}],storageKey:null}]}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometNotificationListItem_groupsTab.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"useNewInfra"}],kind:"Fragment",metadata:null,name:"GroupsCometNotificationListItem_groupsTab",selections:[{condition:"useNewInfra",kind:"Condition",passingValue:!1,selections:[{alias:"seenHighlights",args:[{kind:"Literal",name:"seen_states",value:["SEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null}],storageKey:null}],storageKey:'highlights(seen_states:["SEEN"])'}]}],type:"GroupsTab",abstractKey:null};e.exports=a}),null);
__d("GroupsCometNotificationListItem_tabBadge.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],c=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometNotificationListItem_tabBadge",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"destination_uri",storageKey:null},{alias:null,args:null,concreteType:"TabBadgeImageData",kind:"LinkedField",name:"image_data",plural:!1,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"TabBadgeContextData",kind:"LinkedField",name:"context",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"text",plural:!1,selections:c,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:3},{kind:"Literal",name:"orderby",value:"COUNT_DESC"}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:16},{kind:"Literal",name:"scale",value:16},{kind:"Literal",name:"width",value:16}],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:b,storageKey:"face_image(height:16,scale:16,width:16)"}],storageKey:null}],storageKey:null}],storageKey:'top_reactions(first:3,orderby:"COUNT_DESC")'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"clicked",storageKey:null}]}],type:"GroupsAppBookmarkUnreadNotification",abstractKey:null}}();e.exports=a}),null);
__d("useGroupsCometLeftRailBadges_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometLeftRailBadges_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"seen_states",value:["NEW","UNSEEN"]}],concreteType:"GroupsTabBadgeContentConnection",kind:"LinkedField",name:"badge_content",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTabBadgeContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"stories_count",storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],type:"GroupWithNewPostsGroupsTabBadgeContent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'badge_content(seen_states:["NEW","UNSEEN"])'}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useGroupsCometNotifFeedVisitMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5275107652567433"}),null);
__d("useGroupsCometNotifFeedVisitMutation.graphql",["GlobalPanelM3Enabled.relayprovider","CometTextWithEntitiesRelay_textWithEntities$normalization.graphql","useGroupsCometNotifFeedVisitMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__GlobalPanelM3Enabledrelayprovider:b("GlobalPanelM3Enabled.relayprovider")};a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkID"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e=[{kind:"Variable",name:"data",variableName:"input"}],f=[{kind:"Literal",name:"seen_states",value:["NEW","UNSEEN"]}],h={alias:null,args:null,kind:"ScalarField",name:"stories_count",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j={alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[i],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[l,i],storageKey:null},n={kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"},o={kind:"Variable",name:"scale",variableName:"scale"},p={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},q={kind:"Literal",name:"icon_size",value:"DP24"},r=[n];return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"useGroupsCometNotifFeedVisitMutation",selections:[{alias:null,args:e,concreteType:"ViewerGroupsTabLogGroupVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_group_visit",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"group_bookmark",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFolderBookmarkListItem_bookmark"}],storageKey:null},{alias:"viewer_for_homepage_unread_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:f,concreteType:"GroupsTabBadgeContentConnection",kind:"LinkedField",name:"badge_content",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTabBadgeContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[h,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[k],storageKey:null}],type:"GroupWithNewPostsGroupsTabBadgeContent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'badge_content(seen_states:["NEW","UNSEEN"])'}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,a,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__GlobalPanelM3Enabledrelayprovider"}],kind:"Operation",name:"useGroupsCometNotifFeedVisitMutation",selections:[{alias:null,args:e,concreteType:"ViewerGroupsTabLogGroupVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_group_visit",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"group_bookmark",plural:!1,selections:[m,{alias:null,args:null,kind:"ScalarField",name:"additonal_profile_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_additonal_profile",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"eligible_for_direct_profile_switching",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"last_used_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"with_core_app_access",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_news_feed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_user_hidden",storageKey:null},{alias:null,args:[n,{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")'},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{condition:"__relay_internal__pv__GlobalPanelM3Enabledrelayprovider",kind:"Condition",passingValue:!1,selections:[{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},o],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[p],storageKey:null}]},{condition:"__relay_internal__pv__GlobalPanelM3Enabledrelayprovider",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"BookmarkGlyphIconData",kind:"LinkedField",name:"glyph_icon_data",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"color",value:"fds-primary-icon"},q,o],kind:"ScalarField",name:"fbicon_uri",storageKey:null},{alias:"dark_mode_fbicon_uri",args:[{kind:"Literal",name:"color",value:"fds-white"},q,o],kind:"ScalarField",name:"fbicon_uri",storageKey:null}],storageKey:null}]},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},o,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[p,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"query_prefetching_eligible",storageKey:null},{alias:null,args:r,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:null,args:r,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"context_sentence",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},i],storageKey:null},{alias:"viewer_for_homepage_unread_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"FAVORITES"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[m,{alias:"bookmark_unread_count",args:r,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"bookmark_unread_count_string",args:r,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},i],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:f,concreteType:"GroupsTabBadgeContentConnection",kind:"LinkedField",name:"badge_content",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTabBadgeContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[l,{kind:"InlineFragment",selections:[h,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[l,k],storageKey:null}],type:"GroupWithNewPostsGroupsTabBadgeContent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'badge_content(seen_states:["NEW","UNSEEN"])'}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("useGroupsCometNotifFeedVisitMutation_facebookRelayOperation"),metadata:{},name:"useGroupsCometNotifFeedVisitMutation",operationKind:"mutation",text:null,providedVariables:g}}}();e.exports=a}),null);
__d("GroupsCometTabNotifFeedContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({refs:{current:[]}});g["default"]=b}),98);
__d("GroupsCometCrossGroupFeedRoot.Loading.react",["CometContentArea.react","CometFeedStoryGlimmer.react","CometFeedWidthStyles","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={feedContainer:{marginBottom:"sej5wr8e",marginTop:"dht4glve",maxWidth:"g86cw1v9",minHeight:"h3gjbzrl",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}},j=d("CometFeedWidthStyles").getFeedWidthStyles();function a(){return h.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:h.jsxs("div",{className:c("stylex")(i.feedContainer,j.feedContainer),children:[h.jsx(c("CometFeedStoryGlimmer.react"),{}),h.jsx(c("CometFeedStoryGlimmer.react"),{})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedLayoutWithRightRail.react",["CometResponsiveColumns.react","CometRouteRenderType","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.feedContents;a=a.secondaryContents;var c=d("CometRouteRenderType").useIsHosted();return h.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",reverseColumns:!0,children:[h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:b}),a==null?null:h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"SECONDARY",xstyle:"kcmanqeg g2wm7t24"+(c?" lsig0mp6":" n99bqvw7"),children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailCard.react",["CometCard.react","CometErrorBoundary.react","CometUnit.react","CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,d=a.headerActionText,e=a.headerActionUrl,f=a.headline;a=a.subtitle;return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx("div",{className:"sjgh65i0",children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx(c("CometUnit.react"),{header:h.jsx(c("CometUnitHeader.react"),{action:d,actionLinkProps:{url:e},body:a,headline:f,level:3}),paddingBottom:16,children:b})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometErrorState.react",["fbt","GroupsCometTabFalcoEventLog","NullStateGeneral","TetraButton.react","TetraNullState.react","XCometGroupsTabEngageControllerRouteBuilder","XCometHomeControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("XCometGroupsTabEngageControllerRouteBuilder").buildURL({}),k=c("XCometHomeControllerRouteBuilder").buildURL({}),l=h._(/*FBT_CALL*/"Go to News Feed"/*FBT_CALL*/),m=h._(/*FBT_CALL*/"Go to groups feed"/*FBT_CALL*/);function a(a){a=a.subTab;d("GroupsCometTabFalcoEventLog").useLogGroupsTabImpressionDeferred("GroupsCometCrossGroupFeedEndOfFeed",a);a=a==="notifications";return i.jsx("div",{className:"sjgh65i0",children:i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:a?m:l,linkProps:{url:a?j:k}}),body:h._(/*FBT_CALL*/"This may be because of a technical error we are working to fix."/*FBT_CALL*/),headline:h._(/*FBT_CALL*/"This Page isn't available right now"/*FBT_CALL*/),icon:c("NullStateGeneral")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometVariables",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("gkx")("5771");b=a;d=a;e=a;g.ENABLE_NEW_INFRA=b;g.SHOULD_HIDE_NOTIF_HUB_BUTTON=d;g.SHOW_COMMENTS_AND_REACTIONS=e}),98);
__d("GroupsCometNotificationListItem.react",["fbt","ix","CometBadge.react","CometBoldedEntityRenderer","CometColumn.react","CometColumnItem.react","CometEmojiTransform","CometEmoticonTransform","CometListCellStrict.react","CometMiddot.react","CometNumber.react","CometRelativeTimestamp.react","CometRelay","CometRow.react","CometRowItem.react","CometTextWithEntitiesRelay.react","FBLogger","GroupsCometNotificationListItem_groupsTab.graphql","GroupsCometNotificationListItem_tabBadge.graphql","GroupsCometTabFalcoEventLog","GroupsCometVariables","TetraOverlappingFacepileUnstyled.react","TetraText.react","TetraTextPairing.react","XCometGroupDiscussionControllerRouteBuilder","cr:98","fbicon","qex","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react");e=d("react");var m=e.useCallback,n=e.useState,o=(e=c("qex")._("1269"))!=null?e:!1,p=(e=c("qex")._("1265"))!=null?e:!1,q={"*":[c("CometBoldedEntityRenderer")]},r=[c("CometEmoticonTransform")(),c("CometEmojiTransform")()],s={icons:{paddingEnd:"ph5uu5jm"},info:{paddingBottom:"e5nlhep0"},middot:{paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus"}};function a(a){var e,f,g,h,s,w=a.groupsTab,x=a.isHub,y=a.logEventName,z=a.onClick,A=a.position;a=a.tabBadge;a=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometNotificationListItem_tabBadge.graphql"),a);w=d("CometRelay").useFragment(k!==void 0?k:k=b("GroupsCometNotificationListItem_groupsTab.graphql"),w);e=(e=a)!=null?e:{};var B=e.context,C=e.destination_uri,D=e.id,E=e.image_data,F=e.sender_id,G=e.story,H=e.time;e=e.title;var I=d("CometRelay").useRelayEnvironment();f=G==null?void 0:(f=G.feedback)==null?void 0:f.comment_count;g=G==null?void 0:(g=G.feedback)==null?void 0:g.reaction_count;var J=G==null?void 0:G.post_id;B=B==null?void 0:B.text;h=G==null?void 0:(h=G.feedback)==null?void 0:(h=h.top_reactions)==null?void 0:h.edges;E=E==null?void 0:E.uri;s=(s=/^\d+(?=;)/.exec((s=F)!=null?s:""))==null?void 0:s[0];var K=m(function(){M(!1),d("GroupsCometTabFalcoEventLog").logGroupsTabFalcoEventDeferred({component:"GroupsCometNotificationListItem",event:"click.notif",metadata:y,position:String(A)}),d("CometRelay").commitLocalUpdate(I,function(a){if(!d("GroupsCometVariables").ENABLE_NEW_INFRA||D==null)return;a=a.get(D);a==null?void 0:a.setValue(!0,"clicked")}),z&&z(A)},[I,y,z,A,D]);J=x&&s!=null?c("XCometGroupDiscussionControllerRouteBuilder").buildURL({idorvanity:s,multi_permalinks:(s=J)!=null?s:""}):C;var L=[];h!=null&&h.forEach(function(a){var b;((b=a.node)==null?void 0:(b=b.face_image)==null?void 0:b.uri)!=null&&L.push({source:{uri:a.node.face_image.uri}})});if(d("GroupsCometVariables").ENABLE_NEW_INFRA)s=a==null?void 0:a.clicked;else{s=w==null?void 0:(h=w.seenHighlights)==null?void 0:(a=h.notifications)==null?void 0:a.some(function(a){return(a==null?void 0:a.sender_id)===F})}w=n(!s);h=w[0];var M=w[1];if(C==null||B==null||e==null)throw c("FBLogger")("community_home_comet").mustfixThrow("destinationUri, header, or title is null");return l.jsx(c("CometListCellStrict.react"),{addOnEnd:o&&b("cr:98")?{addOn:l.jsx(b("cr:98"),{feedLocation:"GROUPS_SURFACE_HIGHLIGHTS",id:G==null?void 0:G.id,serializedFRTPIdentifiers:G==null?void 0:G.serialized_frtp_identifiers,storyDebugInfo:G==null?void 0:G.debug_info}),type:"body"}:null,addOnStart:E!=null?{shape:"circle",size:60,source:{uri:E},type:"profile-photo"}:{icon:d("fbicon")._(i("510948"),24),size:60,type:"contained-icon"},body:l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{children:l.jsx(t,{header:B})}),l.jsx(c("CometColumnItem.react"),{expanding:!0,children:l.jsx(c("TetraText.react"),{color:h?"primary":"secondary",numberOfLines:1,type:"body3",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:q,textWithEntities:e,transforms:r})})})]}),bodyColor:h?"primary":"secondary",bodyLineLimit:3,linkProps:{url:x&&p?null:J},meta:l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{children:l.jsx(v,{commentCount:f,icons:L,reactionCount:g})}),l.jsx(c("CometColumnItem.react"),{children:l.jsx(u,{isHighlight:h,time:H})})]}),onPress:K})}a.displayName=a.name+" [from "+f.id+"]";var t=function(a){a=a.header;return!d("GroupsCometVariables").ENABLE_NEW_INFRA||a==null?null:l.jsx(c("TetraTextPairing.react"),{body:l.jsx(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:8,children:l.jsx(c("CometRowItem.react"),{expanding:!0,verticalAlign:"center",children:l.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:1,type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:q,textWithEntities:a,transforms:r})})})}),bodyColor:"secondary",level:4})},u=function(a){var b=a.isHighlight;a=a.time;return a==null?null:l.jsx(c("TetraText.react"),{color:b?"highlight":"secondary",type:"body4",children:l.jsxs("span",{children:[b?l.jsx(c("CometBadge.react"),{color:"blue"}):l.jsx(c("CometBadge.react"),{color:"gray"}),l.jsx(c("CometRelativeTimestamp.react"),{date:new Date(a*1e3)})]})})},v=function(a){var b=a.commentCount,e=a.icons;a=a.reactionCount;var f=!d("GroupsCometVariables").ENABLE_NEW_INFRA||b==null||b===0,g=!d("GroupsCometVariables").ENABLE_NEW_INFRA||a==null||a===0||e.length===0,h=f&&g;return h?null:l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,xstyle:s.info,children:[g?null:l.jsx(c("CometRowItem.react"),{children:l.jsx(x,{icons:e,reactionCount:(h=a)!=null?h:0})}),f?null:l.jsx(c("CometRowItem.react"),{children:l.jsx(w,{commentCount:(e=b)!=null?e:0,reactionsDidNotRender:g})})]})},w=function(a){var b=a.commentCount;a=a.reactionsDidNotRender;return l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,children:[l.jsx(c("CometRowItem.react"),{children:a?null:l.jsx(c("CometMiddot.react"),{className:c("stylex")(s.middot)})}),l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx("span",{children:h._(/*FBT_CALL*/{"*":"{number} comments","_1":"1 comment"}/*FBT_CALL*/,[h._plural(b,"number")])})})})]})},x=function(a){var b=a.icons;a=a.reactionCount;return l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,children:[l.jsx(c("CometRowItem.react"),{children:l.jsx("div",{className:c("stylex")(s.icons),children:l.jsx(c("TetraOverlappingFacepileUnstyled.react"),{align:"start",count:b.length,items:b,size:16})})}),l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometNumber.react"),{decimals:0,number:a})})})]})};g["default"]=a}),98);
__d("XCometGroupsTabNotificationsHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/notifications/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useGroupsCometNotifFeedVisitMutation",["CometRelay","useGroupsCometNotifFeedVisitMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=d("CometRelay").useMutation(h!==void 0?h:h=b("useGroupsCometNotifFeedVisitMutation.graphql"));a=a[0];return a}g["default"]=a}),98);
__d("GroupsCometFeedRightRailSurfaceHighlights.react",["fbt","CometRelay","FBLogger","GroupsCometFeedRightRailCard.react","GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql","GroupsCometNotificationListItem.react","GroupsCometTabFalcoEventLog","GroupsCometTabNotifFeedContext","GroupsCometVariables","TetraButton.react","WebPixelRatio","XCometGroupsTabNotificationsHubControllerRouteBuilder","qex","react","useGroupsCometNotifFeedVisitMutation","useGroupsCometVisitMutation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useContext,l=e.useReducer,m=e.useRef,n=(e=c("qex")._("1259"))!=null?e:!1,o=(e=c("qex")._("1265"))!=null?e:!1,p=(e=c("qex")._("1260"))!=null?e:!1,q=h._(/*FBT_CALL*/"Your notifications"/*FBT_CALL*/),r=function(a){var b=a.newNotifications,c=a.seenNotifications,d=a.showAll,e=a.unreadNotifications,f=a.unseenNotifications;a=a.useNewInfra;if(a)return{notifs:e,title:q};else if(d)return{notifs:[].concat(b,f,c),title:q};else if(b.length>0)return{notifs:b,title:h._(/*FBT_CALL*/"New for you"/*FBT_CALL*/)};else if(f.length>0)return{notifs:f,title:h._(/*FBT_CALL*/"Earlier notifications"/*FBT_CALL*/)};else if(c.length>0)return{notifs:c,title:h._(/*FBT_CALL*/"Seen notifications"/*FBT_CALL*/)};return{notifs:[],title:""}},s=function(a,b){switch(b.type){case"groupVisit":return babelHelpers["extends"]({},a,r(b.payload));default:throw c("FBLogger")("comet_groups").mustfix("Unhandled action type: "+b.type)}},t=function(a){var b,c,d,e,f=a.data;a=a.showAll;b=(b=f==null?void 0:(b=f.groups_tab)==null?void 0:(b=b.newHighlights)==null?void 0:b.notifications)!=null?b:[];c=(c=f==null?void 0:(c=f.groups_tab)==null?void 0:(c=c.unseenHighlights)==null?void 0:c.notifications)!=null?c:[];d=(d=f==null?void 0:(d=f.groups_tab)==null?void 0:(d=d.seenHighlights)==null?void 0:d.notifications)!=null?d:[];e=(e=f==null?void 0:(e=f.bookmarks)==null?void 0:(e=e.edges[0])==null?void 0:(e=e.node)==null?void 0:e.unread_notifications)!=null?e:[];f=(f==null?void 0:f.bookmarks)!=null;return r({newNotifications:b,seenNotifications:d,showAll:a,unreadNotifications:e,unseenNotifications:c,useNewInfra:f})};function u(a){var b,e,f=a.data,g=a.dispatch,i=a.notifs,l=a.title,p=c("useGroupsCometVisitMutation")(),q=c("useGroupsCometNotifFeedVisitMutation")(),r=k(c("GroupsCometTabNotifFeedContext"));b=m(((b=f==null?void 0:(b=f.groups_tab)==null?void 0:(b=b.newHighlights)==null?void 0:b.count)!=null?b:0)+((b=f==null?void 0:(b=f.groups_tab)==null?void 0:(b=b.seenHighlights)==null?void 0:b.count)!=null?b:0)+((b=f==null?void 0:(b=f.groups_tab)==null?void 0:(b=b.unseenHighlights)==null?void 0:b.count)!=null?b:0)+((b=f==null?void 0:(b=f.bookmarks)==null?void 0:(b=b.edges[0])==null?void 0:(b=b.node)==null?void 0:b.unread_count)!=null?b:0));i=i.filter(function(a){return Boolean(a==null?void 0:(a=a.story)==null?void 0:a.id)}).sort(function(a,b){return((b=b.time)!=null?b:0)-((b=a.time)!=null?b:0)}).slice(0,a.showAll?i.length:2).map(function(b,e){return j.jsx(c("GroupsCometNotificationListItem.react"),{groupsTab:f==null?void 0:f.groups_tab,isHub:a.showAll,logEventName:"[click][tab][surface highlight][item]",onClick:function(c){var e;e=(e=/^\d+(?=;)/.exec((e=b==null?void 0:b.sender_id)!=null?e:""))==null?void 0:e[0];if(e==null)return;!a.showAll&&n?((f==null?void 0:f.groups_tab)!=null&&p({onCompleted:function(b,c){var d;if(c!=null)return;c=(c=b==null?void 0:(c=b.viewer_groups_tab_log_group_visit)==null?void 0:(c=c.viewer)==null?void 0:(c=c.groups_tab)==null?void 0:(c=c.newHighlights)==null?void 0:c.notifications)!=null?c:[];d=(d=b==null?void 0:(d=b.viewer_groups_tab_log_group_visit)==null?void 0:(d=d.viewer)==null?void 0:(d=d.groups_tab)==null?void 0:(d=d.seenHighlights)==null?void 0:d.notifications)!=null?d:[];b=(b=b==null?void 0:(b=b.viewer_groups_tab_log_group_visit)==null?void 0:(b=b.viewer)==null?void 0:(b=b.groups_tab)==null?void 0:(b=b.unseenHighlights)==null?void 0:b.notifications)!=null?b:[];g({payload:{newNotifications:c,seenNotifications:d,showAll:a.showAll,unreadNotifications:[],unseenNotifications:b,useNewInfra:!1},type:"groupVisit"})},variables:{bookmarkID:e,input:{badge_entry_point:"GROUPS_TAB_MAIN",group_id:e},scale:d("WebPixelRatio").get()}}),scrollTo({behavior:"smooth",top:0})):a.showAll&&o&&(q({variables:{bookmarkID:e,input:{badge_entry_point:"GROUPS_TAB_MAIN",group_id:e},scale:d("WebPixelRatio").get()}}),scrollTo({behavior:"smooth",top:r.refs.current[c].offsetTop}))},position:e,tabBadge:b},b.badge_id)}).filter(Boolean);e=d("GroupsCometVariables").ENABLE_NEW_INFRA?null:{passthroughProps:{badgeIdentifiers:f==null?void 0:(e=f.groups_tab)==null?void 0:(e=e.newHighlights)==null?void 0:e.badge_identifiers}};return j.jsxs(c("GroupsCometFeedRightRailCard.react"),{headline:l,children:[i,a.showAll||b.current<=2?null:j.jsx("div",{className:"discj3wi dati1w0a hv4rvrfc",children:j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"Show more"/*FBT_CALL*/),linkProps:babelHelpers["extends"]({},e,{url:c("XCometGroupsTabNotificationsHubControllerRouteBuilder").buildURL({})}),onPress:function(){return d("GroupsCometTabFalcoEventLog").logGroupsTabFalcoEventDeferred({component:"GroupsCometFeedRightRailSurfaceHighlights",event:"click.nav",metadata:"notifications"})},reduceEmphasis:!0})})]})}u.displayName=u.name+" [from "+f.id+"]";function a(a){var c=a.showAll,e=a.viewer;e=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql"),e);c=l(s,{data:e,showAll:c},t);var f=c[0],g=f.notifs;f=f.title;c=c[1];return!p||g.length===0?null:j.jsx(u,babelHelpers["extends"]({},a,{data:e,dispatch:c,notifs:g,title:f}))}a.displayName=a.name+" [from "+f.id+"]";g.useGroupsCometFeedRightRailSurfaceHighlights=a}),98);
__d("useGroupsCometCacheSurfaceHighlightsData",["CometRelay","GroupsCometVariables","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a){var b=d("CometRelay").useRelayEnvironment();h(function(){d("CometRelay").commitLocalUpdate(b,function(a){if(!d("GroupsCometVariables").ENABLE_NEW_INFRA)return;a=(a=a.get(d("CometRelay").VIEWER_ID))==null?void 0:a.getLinkedRecord("groups_tab");if(!a)return;var b=a.getLinkedRecord("highlights"),c=a.getLinkedRecord("cached_highlights");c==null&&b!=null?a.setLinkedRecord(b,"cached_highlights"):c!=null&&b==null&&a.setLinkedRecord(c,"highlights")})},[a,b])}g["default"]=a}),98);
__d("useGroupsCometLeftRailBadges",["CometRelay","react","useGroupsCometLeftRailBadges_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useMemo;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometLeftRailBadges_viewer.graphql"),a);var c=a==null?void 0:(a=a.groups_tab)==null?void 0:(a=a.badge_content)==null?void 0:a.edges;return i(function(){var a=new Map();c!=null&&c.forEach(function(b){var c,d;b=b==null?void 0:b.node;if(b==null)return;c=(c=b.group)==null?void 0:c.id;d=(d=b.action_link)==null?void 0:d.url;b=b.stories_count;c!=null&&c!==""&&a.set(c,{actionLink:d,storiesCount:b})});return a},[c])}g["default"]=a}),98);
__d("DeamplificationEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("2007397");c=b("FalcoLoggerInternal").create("deamplification_event",a);e.exports=c}),null);
__d("groupsJoinedUtils",["DeamplificationEventFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e,f,g){var h={entity_id:(a=a)!=null?a:"",entity_type:69,event:b,extra_data:{is_comet_render:"true",is_sole_admin:e?"true":"false",list_ordering:(a=f)!=null?a:"",search_keywords:(b=g)!=null?b:""},product_surface:d,tags:["group_breaking_bad_connections"]};c("DeamplificationEventFalcoEvent").log(function(){return h})}function b(){return!1}function d(){return!1}g.logGroupFollowingMembership=a;g.isEligibleForBreakingBadGroupConnections=b;g.isEligibleForBreakingBadGroupConnectionsDialog=d}),98);