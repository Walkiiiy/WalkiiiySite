"use strict";(self["webpackChunkwalkiiiy_top"]=self["webpackChunkwalkiiiy_top"]||[]).push([[59],{8059:function(t,o,n){n.r(o),n.d(o,{default:function(){return l}});var e=n(3396);const r={id:"blog_content"};function a(t,o,n,a,s,i){return(0,e.wg)(),(0,e.iD)("div",r)}var s=n(1076),i={data(){return{mark:""}},methods:{async get_markdown(t){const o="111.231.21.55",n="3000",e=`http://${o}:${n}/blog_content?path=${t}`;return new Promise(((t,o)=>{s.Z.get(e).then((o=>{t(o.data)})).catch((t=>{console.error(t),o(t)}))}))},async show_blog(){console.log("show_blog_start");var t=this.$route.query.blog_path;console.log("blog_path:",t),this.mark=await this.get_markdown(t);var o=document.getElementById("blog_content");o.innerHTML=this.mark}},mounted(){this.show_blog()},watch:{$route(t,o){this.show_blog()}}},c=n(89);const h=(0,c.Z)(i,[["render",a]]);var l=h}}]);
//# sourceMappingURL=59.005d5739.js.map