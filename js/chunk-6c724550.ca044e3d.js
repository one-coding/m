(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c724550"],{"0ad8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"wrap"}},[t._m(0),i("div",{attrs:{id:"contents"}},[i("div",{staticClass:"board_view"},[i("h6",[t._v(t._s(t.getNoticeDetail.noticeTitle))]),i("p",{staticClass:"viewarea_date"},[t._v(" "+t._s(t.YYYYMMDDDate(t.getNoticeDetail.regDate))+" ")]),i("div",{staticClass:"viewarea"},[t.fileExistCheck?i("div",{staticClass:"fileArea"},[t._l(t.getNoticeDetail.noticeFile,(function(e,a){return["PICTURE"!==e.fileType&&"MOVIE"!==e.fileType?i("a",{key:a,on:{click:function(i){return t.downloadItem(e)}}},[t._v(t._s(e.fileOriginalName)+" "),i("br")]):t._e()]}))],2):t._e(),t._l(t.getNoticeDetail.noticeFile,(function(e,a){return["PICTURE"===e.fileType?i("img",{key:a,staticStyle:{"max-width":"100%",height:"auto"},attrs:{src:e.filePath}}):t._e(),"MOVIE"===e.fileType?i("video",{key:a,attrs:{width:"100%",height:"auto",controls:""}},[".mp4"==e.fileExtension?i("source",{attrs:{src:e.filePath,type:"video/mp4;"}}):t._e(),".ogv"==e.fileExtension?i("source",{attrs:{src:e.filePath,type:"video/ogg;"}}):t._e()]):t._e()]})),i("span",{domProps:{innerHTML:t._s(t.changeTxtToHtml(t.getNoticeDetail.noticeContent))}})],2)]),i("div",{staticClass:"btn_next_area"},[i("div",{staticClass:"btn_next_area_inner"},[i("button",{staticClass:"btn_list rigthspace",on:{click:t.list}},[t._v("목록")])])])]),i("Footer")],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{attrs:{id:"sub"}},[i("div",{staticClass:"header_wrap underLineGray"},[i("h1",{staticStyle:{"padding-left":"5%"}},[t._v("공지사항")])])])}],n=i("5530"),s=i("cdaa"),c=(i("fb3c"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search_area_wrapper"},[i("span",{staticClass:"search_area"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTxt,expression:"searchTxt"}],attrs:{type:"text",placeholder:"검색어를 입력해주세요"},domProps:{value:t.searchTxt},on:{input:function(e){e.target.composing||(t.searchTxt=e.target.value)}}}),i("button",{on:{click:t.requestSearch}},[t._v("검색버튼")])])])}),o=[],l={name:"NoticeSearch",data:function(){return{searchTxt:this.$route.query.searchTxt?this.$route.query.searchTxt:"",notice:{id:null,noticeContent:this.$route.query.searchTxt?this.$route.query.searchTxt:"",noticeTitle:this.$route.query.searchTxt?this.$route.query.searchTxt:"",page:{page:0,size:10,sort:"regDate,desc"}}}},methods:{requestSearch:function(){this.$router.push({path:"/notice",query:{searchTxt:this.searchTxt}})}}},u=l,h=i("2877"),_=Object(h["a"])(u,c,o,!1,null,null,null),d=_.exports,f=i("2f62"),p=i("e09c"),m={name:"ObituaryReg",mixins:[p["a"]],components:{Footer:s["a"],Search:d},props:{},data:function(){return{id:this.$route.query.id?this.$route.query.id:""}},computed:Object(n["a"])(Object(n["a"])({},Object(f["b"])(["getNoticeDetail"])),{},{fileExistCheck:function(){if(null!==this.getNoticeDetail.noticeFile&&void 0!==this.getNoticeDetail.noticeFile&&this.getNoticeDetail.noticeFile.length>0)for(var t=0;t<this.getNoticeDetail.noticeFile.length;t++)if("PICTURE"!==this.getNoticeDetail.noticeFile[t].fileType)return!0;return!1}}),mounted:function(){var t={id:this.id};this.$store.dispatch("REQUEST_NOTICE_DETAIL",t)},beforeDestroy:function(){this.$store.commit("NOTICE_INIT")},methods:{list:function(){this.$router.go(-1)}}},E=m,v=Object(h["a"])(E,a,r,!1,null,null,null);e["default"]=v.exports},cdaa:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footer"}},[i("button",{staticClass:"btn_back",on:{click:t.back}},[t._v("보기")]),i("button",{staticClass:"btn_home",on:{click:t.home}},[t._v("보기")])])},r=[],n=i("5530"),s=i("e09c"),c=i("2f62"),o={name:"Header",mixins:[s["a"]],props:[],data:function(){return{}},computed:Object(n["a"])({},Object(c["b"])([])),mounted:function(){this.$store.commit("END_DEEMED"),this.$nextTick((function(){this.allLoadingEvent()}))},methods:{home:function(){this.$router.push("/")},back:function(){this.$router.go(-1)}}},l=o,u=i("2877"),h=Object(u["a"])(l,a,r,!1,null,null,null);e["a"]=h.exports},fb3c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{style:{height:t.height+"px",width:t.width+"px"},attrs:{src:t.src}})},r=[],n={props:["height","width","src"],data:function(){return{url:Object({NODE_ENV:"production",VUE_APP_CLIENTID:"funeral",VUE_APP_CLIENTSECRET:"funeral",VUE_APP_BASEURL:"http://cnemoment.com",VUE_APP_OBITUARY_BASEURL:"https://obituary.jrbaksa.com",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_KAKAO_API_KEY:"ef2b5f2fd7068c57e84d304d9dffa314",BASE_URL:"/"}).VUE_APP_USER_BASEURL}},methods:{}},s=n,c=i("2877"),o=Object(c["a"])(s,a,r,!1,null,null,null);o.exports}}]);
//# sourceMappingURL=chunk-6c724550.ca044e3d.js.map