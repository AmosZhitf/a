import{r as e,o as t,c as a,p as s,a as o,u as n,b as l,d as i,e as r,f as c,g as m,t as d,w as u,h as p,F as _,i as h,j as g,k as f,l as b,T as v,K as E,m as L,n as T,q as x,s as I,v as k,_ as w,x as P,R as y,y as O}from"./vendor.fd9c3eac.js";const C={};let j;C.render=function(s,o,n,l,i,r){const c=e("router-view");return t(),a(c)};const R={},A=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":j,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};var D="./assets/img.cf1cb86c.jpg";const V={setup(){const e=localStorage.getItem("ms_username"),t=n(),a=l((()=>t.state.collapse)),s=()=>{t.commit("handleCollapse",!a.value)};i((()=>{document.body.clientWidth<1500&&s()}));const o=r();return{username:e,message:2,collapse:a,collapseChage:s,handleCommand:e=>{"loginout"==e?(localStorage.removeItem("ms_username"),o.push("/login")):"user"==e&&o.push("/user")}}}},S=u();s("data-v-13929b00");const $={class:"header"},q={key:0,class:"el-icon-s-fold"},z={key:1,class:"el-icon-s-unfold"},B=c("div",{class:"logo"},"杭州朝厚_OM面板",-1),H={class:"header-right"},W={class:"header-user-con"},F=c("div",{class:"user-avator"},[c("img",{src:D})],-1),M={class:"el-dropdown-link"},U=c("i",{class:"el-icon-caret-bottom"},null,-1),K=m("退出登录");o();const N=S(((s,o,n,l,i,r)=>{const u=e("el-dropdown-item"),p=e("el-dropdown-menu"),_=e("el-dropdown");return t(),a("div",$,[c("div",{class:"collapse-btn",onClick:o[1]||(o[1]=(...e)=>l.collapseChage&&l.collapseChage(...e))},[l.collapse?(t(),a("i",z)):(t(),a("i",q))]),B,c("div",H,[c("div",W,[F,c(_,{class:"user-name",trigger:"click",onCommand:l.handleCommand},{dropdown:S((()=>[c(p,null,{default:S((()=>[c(u,{divided:"",command:"loginout"},{default:S((()=>[K])),_:1})])),_:1})])),default:S((()=>[c("span",M,[m(d(l.username)+" ",1),U])])),_:1},8,["onCommand"])])])])}));V.render=N,V.__scopeId="data-v-13929b00";const Z={setup(){const e=p(),t=l((()=>e.path)),a=n();return{items:[{icon:"el-icon-lx-rank",index:"/workflow",title:"工作流"},{icon:"el-icon-lx-warn",index:"7",title:"错误处理",subs:[{index:"/permission",title:"权限测试"},{index:"/404",title:"404页面"}]}],onRoutes:t,collapse:l((()=>a.state.collapse))}}},G=u();s("data-v-3c46ec4f");const J={class:"sidebar"};o();const Q=G(((s,o,n,l,i,r)=>{const u=e("el-menu-item"),p=e("el-submenu"),g=e("el-menu");return t(),a("div",J,[c(g,{class:"sidebar-el-menu","default-active":l.onRoutes,collapse:l.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""},{default:G((()=>[(t(!0),a(_,null,h(l.items,(e=>(t(),a(_,null,[e.subs?(t(),a(p,{index:e.index,key:e.index},{title:G((()=>[c("i",{class:e.icon},null,2),c("span",null,d(e.title),1)])),default:G((()=>[(t(!0),a(_,null,h(e.subs,(e=>(t(),a(_,null,[e.subs?(t(),a(p,{index:e.index,key:e.index},{title:G((()=>[m(d(e.title),1)])),default:G((()=>[(t(!0),a(_,null,h(e.subs,((e,s)=>(t(),a(u,{key:s,index:e.index},{default:G((()=>[m(d(e.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(t(),a(u,{index:e.index,key:e.index},{default:G((()=>[m(d(e.title),1)])),_:2},1032,["index"]))],64)))),256))])),_:2},1032,["index"])):(t(),a(u,{index:e.index,key:e.index},{title:G((()=>[m(d(e.title),1)])),default:G((()=>[c("i",{class:e.icon},null,2)])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])}));Z.render=Q,Z.__scopeId="data-v-3c46ec4f";const X={setup(){const e=p(),t=r(),a=n(),s=l((()=>a.state.tagsList)),o=l((()=>s.value.length>0)),i=e=>{s.value.some((t=>t.path===e.fullPath))||(s.value.length>=8&&a.commit("delTagsItem",{index:0}),a.commit("setTagsItem",{name:e.name,title:e.meta.title,path:e.fullPath}))};i(e),g((e=>{i(e)}));return{isActive:t=>t===e.fullPath,tagsList:s,showTags:o,closeTags:o=>{const n=s.value[o];a.commit("delTagsItem",{index:o});const l=s.value[o]?s.value[o]:s.value[o-1];l?n.path===e.fullPath&&t.push(l.path):t.push("/")},handleTags:o=>{"other"===o?(()=>{const t=s.value.filter((t=>t.path===e.fullPath));a.commit("closeTagsOther",t)})():(a.commit("clearTags"),t.push("/"))}}}},Y={key:0,class:"tags"},ee=c("i",{class:"el-icon-close"},null,-1),te={class:"tags-close-box"},ae=m(" 标签选项 "),se=c("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),oe=m("关闭其他"),ne=m("关闭所有");X.render=function(s,o,n,l,i,r){const u=e("router-link"),p=e("el-button"),g=e("el-dropdown-item"),v=e("el-dropdown-menu"),E=e("el-dropdown");return l.showTags?(t(),a("div",Y,[c("ul",null,[(t(!0),a(_,null,h(l.tagsList,((e,s)=>(t(),a("li",{class:["tags-li",{active:l.isActive(e.path)}],key:s},[c(u,{to:e.path,class:"tags-li-title"},{default:f((()=>[m(d(e.title),1)])),_:2},1032,["to"]),c("span",{class:"tags-li-icon",onClick:e=>l.closeTags(s)},[ee],8,["onClick"])],2)))),128))]),c("div",te,[c(E,{onCommand:l.handleTags},{dropdown:f((()=>[c(v,{size:"small"},{default:f((()=>[c(g,{command:"other"},{default:f((()=>[oe])),_:1}),c(g,{command:"all"},{default:f((()=>[ne])),_:1})])),_:1})])),default:f((()=>[c(p,{size:"mini",type:"primary"},{default:f((()=>[ae,se])),_:1})])),_:1},8,["onCommand"])])])):b("",!0)};const le={components:{vHeader:V,vSidebar:Z,vTags:X},setup(){const e=n();return{tagsList:l((()=>e.state.tagsList.map((e=>e.name)))),collapse:l((()=>e.state.collapse))}}},ie={class:"about"},re={class:"content"};le.render=function(s,o,n,l,i,r){const m=e("v-header"),d=e("v-sidebar"),u=e("v-tags"),p=e("router-view");return t(),a("div",ie,[c(m),c(d),c("div",{class:["content-box",{"content-collapse":l.collapse}]},[c(u),c("div",re,[c(p,null,{default:f((({Component:e})=>[c(v,{name:"move",mode:"out-in"},{default:f((()=>[(t(),a(E,{include:l.tagsList},[(t(),a(L(e)))],1032,["include"]))])),_:2},1024)])),_:1})])],2)])};const ce=[{path:"/",redirect:"/workflow"},{path:"/",name:"Home",component:le,children:[{path:"/workflow",name:"workflow",meta:{title:"工作流"},component:()=>A((()=>import("./Workflow.e3667f74.js")),["./assets/Workflow.e3667f74.js","./assets/Workflow.36d9666e.css","./assets/vendor.fd9c3eac.js","./assets/request.21b4a6f2.js"])},{path:"/dashboard",name:"dashboard",meta:{title:"系统首页"},component:()=>A((()=>import("./Dashboard.246d08b2.js")),["./assets/Dashboard.246d08b2.js","./assets/Dashboard.769d48c9.css","./assets/vue-schart.4d78d678.js","./assets/vendor.fd9c3eac.js"])},{path:"/table",name:"basetable",meta:{title:"表格"},component:()=>A((()=>import("./BaseTable.c8f43bec.js")),["./assets/BaseTable.c8f43bec.js","./assets/BaseTable.53fb0b77.css","./assets/vendor.fd9c3eac.js","./assets/request.21b4a6f2.js"])},{path:"/charts",name:"basecharts",meta:{title:"图表"},component:()=>A((()=>import("./BaseCharts.6250a532.js")),["./assets/BaseCharts.6250a532.js","./assets/BaseCharts.ef6f5d7a.css","./assets/vue-schart.4d78d678.js","./assets/vendor.fd9c3eac.js"])},{path:"/form",name:"baseform",meta:{title:"表单"},component:()=>A((()=>import("./BaseForm.0dcf9674.js")),["./assets/BaseForm.0dcf9674.js","./assets/vendor.fd9c3eac.js"])},{path:"/tabs",name:"tabs",meta:{title:"tab标签"},component:()=>A((()=>import("./Tabs.6b6ab843.js")),["./assets/Tabs.6b6ab843.js","./assets/Tabs.63f07ab2.css","./assets/vendor.fd9c3eac.js"])},{path:"/donate",name:"donate",meta:{title:"鼓励作者"},component:()=>A((()=>import("./Donate.6c975f55.js")),["./assets/Donate.6c975f55.js","./assets/Donate.3433f125.css","./assets/vendor.fd9c3eac.js"])},{path:"/permission",name:"permission",meta:{title:"权限管理",permission:!0},component:()=>A((()=>import("./Permission.09571cd0.js")),["./assets/Permission.09571cd0.js","./assets/Permission.d263d8ff.css","./assets/vendor.fd9c3eac.js"])},{path:"/i18n",name:"i18n",meta:{title:"国际化语言"},component:()=>A((()=>import("./I18n.4a3b23b2.js")),["./assets/I18n.4a3b23b2.js","./assets/I18n.d9304692.css","./assets/vendor.fd9c3eac.js"])},{path:"/upload",name:"upload",meta:{title:"上传插件"},component:()=>A((()=>import("./Upload.3745de00.js")),["./assets/Upload.3745de00.js","./assets/Upload.eb23aaff.css","./assets/cropper.85e3a935.js","./assets/cropper.77360c55.css","./assets/vendor.fd9c3eac.js"])},{path:"/icon",name:"icon",meta:{title:"自定义图标"},component:()=>A((()=>import("./Icon.a9b711eb.js")),["./assets/Icon.a9b711eb.js","./assets/Icon.79828abd.css","./assets/vendor.fd9c3eac.js"])},{path:"/404",name:"404",meta:{title:"找不到页面"},component:()=>A((()=>import("./404.1d0f28a4.js")),["./assets/404.1d0f28a4.js","./assets/404.56a902ba.css","./assets/vendor.fd9c3eac.js"])},{path:"/403",name:"403",meta:{title:"没有权限"},component:()=>A((()=>import("./403.f777af0f.js")),["./assets/403.f777af0f.js","./assets/403.5687ad1c.css","./assets/vendor.fd9c3eac.js"])},{path:"/user",name:"user",meta:{title:"个人中心"},component:()=>A((()=>import("./User.fbc60b3c.js")),["./assets/User.fbc60b3c.js","./assets/User.d0822032.css","./assets/cropper.85e3a935.js","./assets/cropper.77360c55.css","./assets/vendor.fd9c3eac.js"])},{path:"/editor",name:"editor",meta:{title:"富文本编辑器"},component:()=>A((()=>import("./Editor.aa428bfa.js")),["./assets/Editor.aa428bfa.js","./assets/Donate.3433f125.css","./assets/vendor.fd9c3eac.js"])}]},{path:"/login",name:"Login",meta:{title:"登录"},component:()=>A((()=>import("./Login.dcbc069a.js")),["./assets/Login.dcbc069a.js","./assets/Login.d80b8306.css","./assets/vendor.fd9c3eac.js"])}],me=T({history:x(),routes:ce});me.beforeEach(((e,t,a)=>{document.title=`${e.meta.title} | ZOHO_OM`;const s=localStorage.getItem("ms_username"),o=sessionStorage.getItem("ms_token_session");s&&o||"/login"===e.path?e.meta.permission?"admin"===s?a():a("/403"):a():a("/login")}));var de=I({state:{tagsList:[],collapse:!1},mutations:{delTagsItem(e,t){e.tagsList.splice(t.index,1)},setTagsItem(e,t){e.tagsList.push(t)},clearTags(e){e.tagsList=[]},closeTagsOther(e,t){e.tagsList=t},closeCurrentTag(e,t){for(let a=0,s=e.tagsList.length;a<s;a++){if(e.tagsList[a].path===t.$route.fullPath){a<s-1?t.$router.push(e.tagsList[a+1].path):a>0?t.$router.push(e.tagsList[a-1].path):t.$router.push("/"),e.tagsList.splice(a,1);break}}},handleCollapse(e,t){e.collapse=t}},actions:{},modules:{}});const ue=k({locale:w.name,fallbackLocale:P.name,messages:{"zh-cn":{i18n:{breadcrumb:"国际化产品",tips:"通过切换语言按钮，来改变当前内容的语言。",btn:"切换英文",title1:"常用用法",p1:"要是你把你的秘密告诉了风，那就别怪风把它带给树。",p2:"没有什么比信念更能支撑我们度过艰难的时光了。",p3:"只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。"}},en:{i18n:{breadcrumb:"International Products",tips:"Click on the button to change the current language. ",btn:"Switch Chinese",title1:"Common usage",p1:"If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",p2:"Nothing can help us endure dark times better than our faith. ",p3:"If you can do what you do best and be happy, you're further along in life  than most people."}}}});const pe=O(C);var _e;(_e=pe).use(y,{locale:w}),_e.use(ue),pe.use(de).use(me).mount("#app");export{D as a};
