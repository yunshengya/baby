import{m as k,n as C,q as T,y as p,N as b,ay as I,d as n,ao as f,az as w,I as y,ai as N,B as A,_ as L,r as P,o as R,c as S,b as E}from"./index.10d6f7a6.js";const[z,a]=k("nav-bar"),O={title:String,fixed:Boolean,zIndex:C,border:T,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var $=p({name:z,props:O,emits:["click-left","click-right"],setup(e,{emit:l,slots:t}){const o=b(),i=I(o,a),c=r=>l("click-left",r),s=r=>l("click-right",r),h=()=>t.left?t.left():[e.leftArrow&&n(y,{class:a("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:a("text")},[e.leftText])],_=()=>t.right?t.right():n("span",{class:a("text")},[e.rightText]),d=()=>{const{title:r,fixed:u,border:v,zIndex:x}=e,g=N(x),B=e.leftArrow||e.leftText||t.left,m=e.rightText||t.right;return n("div",{ref:o,style:g,class:[a({fixed:u}),{[w]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:a("content")},[B&&n("div",{class:[a("left"),f],onClick:c},[h()]),n("div",{class:[a("title"),"van-ellipsis"]},[t.title?t.title():r]),m&&n("div",{class:[a("right"),f],onClick:s},[_()])])])};return()=>e.fixed&&e.placeholder?i(d):d()}});const D=A($);const V={methods:{onClickLeft(){this.$router.go(-1)}},components:{NavBar:D},props:["title"]},q={class:"box"};function F(e,l,t,o,i,c){const s=P("NavBar");return R(),S("div",null,[E("div",q,[n(s,{style:{position:"fixed",top:"0",width:"100%"},title:t.title,"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:c.onClickLeft},null,8,["title","onClickLeft"])])])}const K=L(V,[["render",F],["__scopeId","data-v-3e68bdb6"]]);export{K as h};
