"use strict";(self.webpackChunkblog_1=self.webpackChunkblog_1||[]).push([[7571],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var o=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,o,a=function(e,t){if(null==e)return{};var s,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)s=i[o],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var r=o.createContext({}),u=function(e){var t=o.useContext(r),s=t;return e&&(s="function"==typeof e?e(t):n(n({},t),e)),s},d=function(e){var t=u(e.components);return o.createElement(r.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(s),c=a,m=h["".concat(r,".").concat(c)]||h[c]||p[c]||i;return s?o.createElement(m,n(n({ref:t},d),{},{components:s})):o.createElement(m,n({ref:t},d))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=s.length,n=new Array(i);n[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[h]="string"==typeof e?e:a,n[1]=l;for(var u=2;u<i;u++)n[u]=s[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,s)}c.displayName="MDXCreateElement"},3816:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=s(7462),a=(s(7294),s(3905));const i={slug:"bliss-updates-1123",title:"Bliss OS - Development Updates 11-23",authors:["electrikjesus","hmtheboy154"],description:"BlissOS Updates",img:"assets/blissos-updates-2023-11-20.png",date:new Date("2023-11-20T00:00:00.000Z"),comments:!0,tags:["blissos","bliss-x86"]},n="Development Progress",l={permalink:"/bliss-updates-1123",source:"@site/blog/2023/bliss-updates-1123.md",title:"Bliss OS - Development Updates 11-23",description:"BlissOS Updates",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"blissos",permalink:"/tags/blissos"},{label:"bliss-x86",permalink:"/tags/bliss-x-86"}],readingTime:5.99,hasTruncateMarker:!1,authors:[{name:"Jon West",title:"Founder / Developer @BlissCoLabs / Incorporator & CTO / Bliss OS / Android-Generic Project @BlissLabs",url:"https://github.com/electrikjesus",imageURL:"https://avatars.githubusercontent.com/u/8572619?v=4",key:"electrikjesus"},{name:"HMTheBoy154",title:"Bliss OS Maintainer",url:"https://github.com/hmtheboy154",imageURL:"https://avatars.githubusercontent.com/u/39849246?v=4",key:"hmtheboy154"}],frontMatter:{slug:"bliss-updates-1123",title:"Bliss OS - Development Updates 11-23",authors:["electrikjesus","hmtheboy154"],description:"BlissOS Updates",img:"assets/blissos-updates-2023-11-20.png",date:"2023-11-20T00:00:00.000Z",comments:!0,tags:["blissos","bliss-x86"]},nextItem:{title:"BlissOS 16.8 codenamed Typhoon-x86 is now available",permalink:"/bliss-168"}},r={authorsImageUrls:[void 0,void 0]},u=[{value:"Bliss Bass - beta builds started already",id:"bliss-bass---beta-builds-started-already",level:2},{value:"Go builds &amp; Low RAM devices can now bypass some options in Settings",id:"go-builds--low-ram-devices-can-now-bypass-some-options-in-settings",level:2},{value:"A/B OTA Updates - rolling out soon",id:"ab-ota-updates---rolling-out-soon",level:2},{value:"Grub updates to v2.06 - also rolling out soon",id:"grub-updates-to-v206---also-rolling-out-soon",level:2},{value:"OEM Install mode options - also rolling out soon",id:"oem-install-mode-options---also-rolling-out-soon",level:2},{value:"We have more on the way",id:"we-have-more-on-the-way",level:2}],d={toc:u},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:s(6956).Z,title:"Bliss OS - Development Updates 11-23",width:"1920",height:"1080"})),(0,a.kt)("p",null,"Since the release of our stable Bliss OS 14.x & 15.x builds, we have had the chance to make a number of advancements on the OS in various areas. We will start the post with the updates coming from the value added contributions on the business side of things, then end with the updates being merged into the Bliss OS builds. "),(0,a.kt)("h2",{id:"bliss-bass---beta-builds-started-already"},"Bliss Bass - beta builds started already"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:s(4995).Z,title:"Bliss Bass - Tablet Go - IOT/IIOT test build",width:"2160",height:"1440"})),(0,a.kt)("p",null,"We have started to push some of the source for our Bliss Bass (Broad Apparatus Support System) builds that we use for customer focused builds based on Bliss OS, and the feedback from that has been pushing our development on the platform in a positive direction. These builds will be 100% ready for use in products, and will come with a number of added configuration options for features, UI/UX, updates, and more. We have released a few beta builds of the base FOSS variant of Bliss Bass for testing on Sourceforge. The initial flavors we will offer are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kiosk variant"),(0,a.kt)("li",{parentName:"ul"},"Desktop variant"),(0,a.kt)("li",{parentName:"ul"},"Tablet variant"),(0,a.kt)("li",{parentName:"ul"},"Tablet Go - IOT/IIOT variant"),(0,a.kt)("li",{parentName:"ul"},"More on its way")),(0,a.kt)("p",null,"There will be a new website created for these builds, and they will still be free to download and test, although the initial test builds will come watermatked. This will ensure that we are able to produce these test builds for the public while still retaining our licensing rights for it. "),(0,a.kt)("p",null,"We are still collecting valuable information from our customers and would love to hear what our users think of this approach. Please leave a comment and let us know your thoughts. "),(0,a.kt)("h1",{id:"bliss-os-updates"},"Bliss OS Updates"),(0,a.kt)("p",null,"There are a few important changes that we are gearing up for on Bliss OS. First, on Bliss OS 14.x & 15.x, we will be shipping with Kernel 6.1, this includes our Surface builds. Second change will be for BlissOS 14.x, 15.x & 16.x (Generic/Surface), and that will be a switch to a new Audio HAL made by Intel\u2019s Project Celadon"),(0,a.kt)("p",null,"Switching to the new Audio HAL will be an important change for us, so we would like to ask everyone to help us to test these new HAL so that we can have feedback and improve it further."),(0,a.kt)("p",null,"Please join our Discord or Telegram to gain access to the new test builds of BlissOS 15.8.8 with Kernel 6.1.36 and the new Audio HAL."),(0,a.kt)("h2",{id:"go-builds--low-ram-devices-can-now-bypass-some-options-in-settings"},"Go builds & Low RAM devices can now bypass some options in Settings"),(0,a.kt)("p",null,"In BlissOS Go builds, there are some options that are being blocked by Android. Most notably the option to allow apps to draw on other apps. You will see this text when you are trying to grant the permission :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:s(466).Z,title:"image_tooltip",width:"720",height:"720"})),(0,a.kt)("p",null,"With the latest update of BlissOS, we've included a switch in Blissify Settings to allow bypassing this restriction. So now you are able to use apps like Smart Dock or Taskbar just like the usual generic version. The new option will be available in all of the upcoming BlissOS releases including 14, 15 and 16."),(0,a.kt)("h2",{id:"ab-ota-updates---rolling-out-soon"},"A/B OTA Updates - rolling out soon"),(0,a.kt)("p",null,"Our efforts on Bliss Co-Labs have been paying off and we have a number of features and options developed from there heading to our open-source Bliss OS builds soon. The recently merged changes for the Bliss Setup Wizard for Bliss OS 15.x is one of those. "),(0,a.kt)("p",null,"The other will be coming in the form of OTA updates for Bliss OS. These updates will bring the following improvements to the system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Separate A/B slots for all three images (system.img, initrd.img & kernel)"),(0,a.kt)("li",{parentName:"ul"},"System Rollbacks - Native bootctrl behavior"),(0,a.kt)("li",{parentName:"ul"},"Update server controlled by our own ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/shipperstack"},"Shipper Stack"))),(0,a.kt)("p",null,"But there is one major downside that we would like to address, with the new OTA feature we won't be able to ship the system image with any other type of images other than system.img. Meaning that there will be no more system.sfs (system.img inside a SquashFS image) or system.efs (system.img inside a EROFS image). We will have to ship with a system.img that is using SquashFS or EROFS instead."),(0,a.kt)("p",null,"So, what will this affect you ? Usually on BlissOS or Android-x86 in general, we build the system.img in EXT4, but then we put it inside system.sfs to make the image lighter because of SquashFS compression. And then if you want the system to be in read-write because it's EXT4, you can just extract system.sfs out, easy as that. However, the new OTA changes came with a challenge that restricted us to only build system.img, giving us no choice but to initially not build it with SquashFS or EROFS. We have since worked around those issues, but the early beta builds might not have all those fixes included just yet."),(0,a.kt)("h2",{id:"grub-updates-to-v206---also-rolling-out-soon"},"Grub updates to v2.06 - also rolling out soon"),(0,a.kt)("p",null,"Now that we have the groundwork laid out for updating Grub with our A/B OTA updates, we decided it was best to update to the current version of Grub that Linux uses, and in doing so, we also solve an issue that 12th gen+ Intel CPU\u2019s have had where the screen is black after selecting any boot option from Grub. This means that the most recent gen CPU\u2019s will now be supported by both the kernel and the bootloader for Bliss OS. "),(0,a.kt)("p",null,"This effort came from a few different contributors, so we have an initial solution we will likely release, and then split the other contributions into phases where we merge binary updates, libraries, modules, installer updates, and others separately in order to ensure stability as we move forward. "),(0,a.kt)("h2",{id:"oem-install-mode-options---also-rolling-out-soon"},"OEM Install mode options - also rolling out soon"),(0,a.kt)("p",null,"Bliss OS builds (and Android-x86)  have had some major issues with the auto-install mode that have been the source of many headaches and many long nights of reinstalling other operating systems in order to correct. So we took some time to update the current auto-install solution and give it a more proper name of OEM install, along with adding a few more options for unattended installation (Force):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OEM Install (same as old auto-install, will require some interaction)"),(0,a.kt)("li",{parentName:"ul"},"OEM Install - Force MBR ","[Unattended Install]"," (if bios is set to use Legacy)"),(0,a.kt)("li",{parentName:"ul"},"OEM Install - Force EFI ","[Unattended Install]"," (if bios is set to use UEFI/EFI)"),(0,a.kt)("li",{parentName:"ul"},"OEM Install - Force ","[Unattended Install]"," (autodetect MBR/EFI)"),(0,a.kt)("li",{parentName:"ul"},"OEM Update - Will auto-update a previous default install or OEM install")),(0,a.kt)("p",null,"These modes are intended for factory setup and will not work with devices that come with Windows unless you wipe all partitions except for EFI and leave a second OS partition with all the remaining space. "),(0,a.kt)("h2",{id:"we-have-more-on-the-way"},"We have more on the way"),(0,a.kt)("p",null,"We don\u2019t want to spoil any of the surprises we have planned, so we will leave things here for this post. Just know that there will be a lot of contributions heading towards Bliss OS source, coming from the efforts of Bliss Co-Labs\u2019 and the community in helping bring our project even further than we ever thought possible. "),(0,a.kt)("p",null,"Thanks again and enjoy the builds!"))}p.isMDXComponent=!0},4995:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/blissbass-tabletgo-675a87e42bd4012ea26cc659c8c84159.png"},466:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/image1-6e74d231c48311a7c4000e8fd1e26a71.jpg"},6956:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/blissos-updates-2023-11-20-9e5e079df9f123ff33805323b4b0b249.png"}}]);