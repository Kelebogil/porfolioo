if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometHomeContactsHeader_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometHomeContactsHeader_viewer",selections:[{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGHLScrambledLabel_label"}],storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[{alias:"new_room_fbt",args:[{kind:"Literal",name:"type",value:"NEW_ROOM"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:'joinable_video_chats_string(type:"NEW_ROOM")'}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometHomeContacts_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"count",variableName:"count"}];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"count"},{kind:"RootArgument",name:"noHovercards"}],kind:"Fragment",metadata:null,name:"CometHomeContacts_viewer",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"chat_sidebar_contacts",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"chat_visibility",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"chat_sidebar_is_collapsed",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometHomeContactsHeader_viewer"},{condition:"noHovercards",kind:"Condition",passingValue:!1,selections:[{args:a,kind:"FragmentSpread",name:"CometHomeContactListItemsHoverCards_viewer"}]},{condition:"noHovercards",kind:"Condition",passingValue:!0,selections:[{args:a,kind:"FragmentSpread",name:"CometHomeContactListItemsNoHover_viewer"}]}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"count",variableName:"numContactsToFetch"}],b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d=[c,{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}],e={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:d,storageKey:null};d={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:d,storageKey:null};var f={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};c=[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"chat_sidebar_contacts",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[b,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"story_bucket(first:1)"},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"last_active_time",storageKey:null}]}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PresenceViewerBasedSettings",kind:"LinkedField",name:"presence_view_side_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_status_viewable",storageKey:null},b],storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer$normalization",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"chat_sidebar_contacts",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b,{kind:"TypeDiscriminator",abstractKey:"__isProfile"},{kind:"InlineFragment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"chat_visibility",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"chat_sidebar_is_collapsed",storageKey:null},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[e,d,f,g,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[e,d,f,g,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[e,d,f,g],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"JoinableVideoChatsViewerFields",kind:"LinkedField",name:"joinable_video_chats",plural:!1,selections:[{alias:"new_room_fbt",args:[{kind:"Literal",name:"type",value:"NEW_ROOM"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:[f],storageKey:'joinable_video_chats_string(type:"NEW_ROOM")'}],storageKey:null},{condition:"noHovercards",kind:"Condition",passingValue:!1,selections:c},{condition:"noHovercards",kind:"Condition",passingValue:!0,selections:c}],storageKey:null}]}}();e.exports=a}),null);
__d("CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"numContactsToFetch"}],kind:"Fragment",metadata:null,name:"CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"numContactsToFetch"}],kind:"FragmentSpread",name:"CometHomeContacts_viewer"}],storageKey:null},action:"THROW",path:"viewer"}],type:"XFBContactsHomeDefaultRenderer",abstractKey:null};e.exports=a}),null);
__d("AppRoomsFilled16.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor",viewBox:"0 0 16 16",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("g",{fillRule:"evenodd",transform:"translate(-448 -544)",children:h.jsx("path",{d:"M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("AppRoomsFilled16IconSvg.react",["AppRoomsFilled16.svg.react","SVGIcon"],(function(a,b,c,d,e,f,g){"use strict";a=d("SVGIcon").svgIcon(c("AppRoomsFilled16.svg.react"));g["default"]=a}),98);
__d("CometHomeContactListItems.react",["cr:3270","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(b("cr:3270"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeContactsHeader.react",["fbt","AppRoomsFilled16IconSvg.react","CometEntryPointPopoverTrigger.react","CometGlobalPanelGating","CometHomeChatSettings.entrypoint","CometHomeContactsHeader_viewer.graphql","CometProgressRingIndeterminate.react","CometRelay","CometTooltip.react","CometTooltipGroup.react","CometUnitHeader.react","Dots3HorizontalFilled20IconSvg.react","MagnifyingGlassFilled16IconSvg.react","MessengerWebEventsFalcoEvent","RoomsLinkCreationSupported","TetraIcon.react","cometGetKeyCommandConfig","cr:1815922","cr:942","cr:943","react","useLayerKeyCommands","useMWChatNewVideoChat"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useEffect,l=e.useMemo,m=h._(/*FBT_CALL*/"Contacts"/*FBT_CALL*/),n=h._(/*FBT_CALL*/"New room"/*FBT_CALL*/),o=h._(/*FBT_CALL*/"Search by name or group"/*FBT_CALL*/),p=h._(/*FBT_CALL*/"Options"/*FBT_CALL*/);function a(a){var e;a=a.viewer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometHomeContactsHeader_viewer.graphql"),a);var f=c("useMWChatNewVideoChat")(),g=f[0];f=f[1];var h=b("cr:942")==null?void 0:b("cr:942").useHook("rhc_search_icon","sidebarSearch");e=(e=b("cr:943")==null?void 0:b("cr:943")("sidebarContactsList"))!=null?e:{};var q=e.onPress;e=babelHelpers.objectWithoutPropertiesLoose(e,["onPress"]);var r=(h=h)!=null?h:q;h=l(function(){return[d("cometGetKeyCommandConfig").getCometKeyCommandConfig("newsfeed","searchContacts",r)]},[r]);c("useLayerKeyCommands")(h);q=a==null?void 0:a.ghl_label;k(function(){c("MessengerWebEventsFalcoEvent").log(function(){return{event_name:"show_sidebar_contacts"}})},[]);a=(h=(h=a.joinable_video_chats)==null?void 0:(a=h.new_room_fbt)==null?void 0:a.text)!=null?h:n;return j.jsx(c("CometUnitHeader.react"),{addOn_DEPRECATED:j.jsx("div",{className:"j83agx80",children:j.jsxs(c("CometTooltipGroup.react"),{children:[d("RoomsLinkCreationSupported").isLinkCreationSupported()?j.jsx(c("CometTooltip.react"),{align:"end",tooltip:a,children:f||!1?j.jsx("div",{className:"ozuftl9m tvfksri0 j83agx80 bp9cbjyn",children:j.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled",size:16})}):j.jsx("div",{className:"ozuftl9m tvfksri0",children:j.jsx(c("TetraIcon.react"),{"aria-label":a,color:"secondary",disabled:f,icon:c("AppRoomsFilled16IconSvg.react"),onPress:function(){return g("fb_chat_side_bar")},size:16})})}):null,j.jsx(c("CometTooltip.react"),{align:"end",position:"below",tooltip:o,children:j.jsx("div",{className:"ozuftl9m tvfksri0",children:j.jsx(c("TetraIcon.react"),babelHelpers["extends"]({},e,{"aria-label":o,color:"secondary",icon:c("MagnifyingGlassFilled16IconSvg.react"),onPress:function(){return r()},size:16}))})}),j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{},otherProps:{chatSettingsContextualSection:"contacts"},popoverEntryPoint:c("CometHomeChatSettings.entrypoint"),position:"below",preloadTrigger:"button",children:function(a,b,d){return j.jsx(c("CometTooltip.react"),{align:"end",position:"below",tooltip:p,children:j.jsx("div",{className:"ozuftl9m",children:j.jsx(c("TetraIcon.react"),{"aria-label":p,color:"secondary",icon:c("Dots3HorizontalFilled20IconSvg.react"),onPress:function(){b()},ref:a,size:20})})})}})]})}),headline:b("cr:1815922")&&q!=null?j.jsx(b("cr:1815922"),{label:q,location:"rhc",text:m,withTextDecoration:!1}):m,headlineColor:d("CometGlobalPanelGating").isGlobalPanelM3Enabled()?"primary":"secondary",level:3})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatFilterContacts",["CometHomeContactsConfig"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){var b=0,d=0;a=a.filter(function(a){if(d>=c("CometHomeContactsConfig").numContactsToFetch&&a.availability!=="ACTIVE")return!1;var e=a==null?void 0:a.id;if(e==null)return!1;a.availability==="ACTIVE"&&b++;d++;return!0});return{activeCount:b,filteredContacts:a}};g.filter=a}),98);
__d("CometHomeContacts.react",["fbt","BaseContextualLayerAnchorRootContext","ChevronDownFilled16IconSvg.react","CometGlobalPanelGating","CometHomeContactListItems.react","CometHomeContactsHeader.react","CometHomeContactsPresenceAwareList.react","CometHomeContacts_viewer.graphql","CometHomeRightRailUnit.react","CometRelay","CometVisualCompletionAttributes","FocusWithinHandler.react","MWChatFilterContacts","MessengerWebEventsFalcoEvent","TetraButton.react","TetraIcon.react","react","requireDeferred","useMWChatOpenTabForUser"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useEffect,l=e.useRef,m=e.useState,n=c("requireDeferred")("MWChatSidebarStateSettingMutation").__setRef("CometHomeContacts.react");function a(a){a=a.viewer$key;var e=l(document.body),f=d("CometRelay").useRelayEnvironment(),g=d("CometRelay").useFragment(i!==void 0?i:i=b("CometHomeContacts_viewer.graphql"),a);a=(a=g==null?void 0:g.chat_sidebar_contacts)!=null?a:[];var o=(g==null?void 0:g.chat_sidebar_is_collapsed)===!0,p=m(!1),q=p[0],r=p[1];p=c("useMWChatOpenTabForUser")("sidebarContactsList");var s=p[0];p[1];var t=(g==null?void 0:g.chat_visibility)===!0;k(function(){c("MessengerWebEventsFalcoEvent").log(function(){return{event_name:"show_sidebar_contacts"}})},[]);p=d("MWChatFilterContacts").filter(a);a=p.activeCount;p=p.filteredContacts;return j.jsx("div",babelHelpers["extends"]({"data-testid":void 0},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:j.jsx(c("BaseContextualLayerAnchorRootContext").Provider,{value:e,children:p.length>0?j.jsx(c("CometHomeRightRailUnit.react"),{hasBottomDivider:!d("CometGlobalPanelGating").isGlobalPanelM3Enabled()&&!o,header:j.jsx(c("CometHomeContactsHeader.react"),{viewer:g}),children:o?j.jsx("div",{className:"dati1w0a sj5x9vvc hv4rvrfc cxgpxx05",children:j.jsx(c("TetraButton.react"),{addOnSecondary:j.jsx(c("TetraIcon.react"),{icon:c("ChevronDownFilled16IconSvg.react"),size:16}),label:h._(/*FBT_CALL*/"See All ({active count})"/*FBT_CALL*/,[h._param("active count",a)]),onPress:function(){n.onReadyImmediately(function(a){return a({environment:f,isCollapsed:!1})})},size:"medium",type:"secondary"})}):j.jsx("div",{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:j.jsx(c("FocusWithinHandler.react"),{children:function(a,b){return j.jsx(c("CometHomeContactsPresenceAwareList.react"),{active:t,children:j.jsx(c("CometHomeContactListItems.react"),{activeStatusOn:t,openTabForUser:s,preventReordering:q||a||b,viewer$key:g})})}})})}):null})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeContactsDefaultRenderer.react",["CometHomeContacts.react","CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.contactsHomeDefaultRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometHomeContactsDefaultRenderer_contactsHomeDefaultRenderer.graphql"),a);a=a.viewer;return i.jsx(c("CometHomeContacts.react"),{viewer$key:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);