(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dad086e"],{"2e36":function(e,t,a){},"73e8":function(e,t,a){"use strict";a.r(t);var i=a("132d"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mobile-header",{staticClass:"mb-6",attrs:{title:"마이 페이지","left-icon":"mdi-chevron-left"},on:{close:e.backRouting}}),a("div",{staticClass:"pt-0",attrs:{id:"m_admin-main__page"}},[a("section",{staticClass:"sidebar-items__wraps my-page"},[a("div",{staticClass:"title-box"},[a("h4",[e._v("회원정보")]),a("a",{on:{click:e.openDeleteAdminModal}},[e._v("회원탈퇴")])]),a("div",{staticClass:"px-4 admin-info"},[a("p",[e._v(e._s(e.memberInfo.memberName))]),a("p",{staticClass:"mb-0"},[e._v(e._s(e.memberInfo.memberPhone))])])]),"TYPE-1"===e.memberInfo.memberAttr?a("section",{staticClass:"sidebar-items__wraps my-page corp-change"},[a("div",{staticClass:"title-box"},[a("h4",[e._v("상조회사 변경")]),a("a",{on:{click:function(t){return e.move("/corp")}}},[e._v("추가하기")])]),a("div",{staticClass:"preview-box mx-3"},[a(i["a"],[e._v("mdi-home-city-outline")]),a("p",{staticClass:"mb-0"},[e._v(e._s(e.memberInfo.memberCorpName))])],1)]):e._e(),e._m(0),a("section",{staticClass:"sidebar-items__wraps my-page"},[a("div",{staticClass:"title-box"},[a("h4",[e._v("광고수신여부")]),a("a",{on:{click:e.adAgreeBtnClick}},[e._v(e._s(e.memberInfo.memberMarketingAgree?"동의함":"미동의")+" / 변경하기")])])]),a("section",{staticClass:"sidebar-items__wraps my-page"},[a("div",{staticClass:"title-box"},[a("button",{on:{click:e.logout}},[a("h4",[e._v("로그아웃")])])])])]),e.deleteAdminFlag?a("DeleteAdminModal",{on:{cancel:e.closeModal}}):e._e(),e.displayAddFlag?a("DisplayAdd",{attrs:{methods:e.displayAddPopup}}):e._e(),e.agreeFlag?a("TermPopup2",{attrs:{memberMarketingAgree:e.memberInfo.memberMarketingAgree,method:e.adAgreeBtnClickSubmit}}):e._e()],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"sidebar-items__wraps my-page"},[a("div",{staticClass:"title-box"},[a("h4",[e._v("1:1 문의하기")])])])}],r=a("5530"),c=a("2f62"),o=a("8654"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"delete-admin__modal"}},[e.deleteAdminFlag?"inputPw"===e.deleteAdminFlag?a("div",{staticClass:"delete-admin__inner"},[a("div",[a("p",{staticClass:"mb-2",staticStyle:{transform:"translateY(-16px)"}},[e._v(" 비밀번호를 입력하여 주십시오 ")]),a(o["a"],{staticClass:"search_input",attrs:{outlined:"",type:"password",rules:[function(e){return(e||"").length>0||"탈퇴하시려면 비밀번호를 입력하여 주십시오"}],color:"main",placeholder:"비밀번호"},model:{value:e.secessionPw,callback:function(t){e.secessionPw=t},expression:"secessionPw"}})],1),a("div",{staticClass:"button__wraps"},[a("button",{on:{click:e.deleteAdmin}},[e._v("탈퇴")]),a("button",{staticClass:"cancel",on:{click:e.cancel}},[e._v("취소하기")])])]):a("div",{staticClass:"delete-admin__inner"},[e._m(1),a("div",{staticClass:"button__wraps"},[a("button",{on:{click:e.logout}},[e._v("로그아웃")])])]):a("div",{staticClass:"delete-admin__inner"},[e._m(0),a("div",{staticClass:"button__wraps"},[a("button",{on:{click:e.deleteAdminConfirm}},[e._v("회원탈퇴")]),a("button",{staticClass:"cancel",on:{click:e.cancel}},[e._v("취소하기")])])])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("회원 탈퇴를 하면 서비스를")]),a("p",[e._v("더이상 사용할 수 없습니다")]),a("p",[e._v("정말 탈퇴하시겠습니까?")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("회원탈퇴가 완료되었습니다")]),a("p",[e._v("자동으로 로그아웃 됩니다")])])}],m={data:function(){return{deleteAdminFlag:!1,secessionPw:""}},computed:Object(r["a"])({},Object(c["b"])(["memberInfo"])),methods:{cancel:function(){this.$emit("cancel")},deleteAdminConfirm:function(){this.deleteAdminFlag="inputPw"},deleteAdmin:function(){if(""!==this.secessionPw){var e={member:{id:this.memberInfo.id,memberPw:this.secessionPw}};this.$store.dispatch("REQUEST_SECESSION_MEMBER",e),this.secessionPw=""}},logout:function(){this.$store.dispatch("REQUEST_LOGOUT"),this.$store.commit("END_DEEMED")}}},u=m,_=(a("f514"),a("2877")),g=Object(_["a"])(u,l,d,!1,null,null,null),p=g.exports,v=a("e09c"),b=a("04c3"),h=a("bd17"),f={name:"MainPage",components:{DeleteAdminModal:p,MobileHeader:b["a"],TermPopup2:h["a"]},mixins:[v["a"]],layout:"admin",props:{},data:function(){return{corp:null,deleteAdminFlag:!1,secessionPw:"",displayAddFlag:!1,password:"",agreeFlag:!1,corpSearchTxt:""}},computed:Object(r["a"])({},Object(c["b"])(["memberInfo"])),mounted:function(){},methods:{backRouting:function(){this.$router.go(-1)},changeProfile:function(){alert("서비스 준비 중입니다")},adAgreeBtnClick:function(){this.agreeFlag=!0,this.$store.commit("START_DEEMED")},adAgreeBtnClickSubmit:function(e){this.agreeFlag=!1,this.$store.commit("END_DEEMED");var t={member:{id:this.memberInfo.id,memberMarketingAgree:e}};this.$store.dispatch("REQUEST_CHANGE_MARKET_AGREE_MEMBER",t)},openDeleteAdminModal:function(){this.deleteAdminFlag=!0,this.$store.commit("START_DEEMED")},closeModal:function(){this.deleteAdminFlag=!1,this.$store.commit("END_DEEMED")},move:function(e){this.$router.push(e)},logout:function(){this.$store.dispatch("REQUEST_LOGOUT")}}},E=f,C=(a("d198"),Object(_["a"])(E,s,n,!1,null,null,null));t["default"]=C.exports},bd17:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"active",attrs:{id:"address-search"}},[a("div",{staticClass:"address-search__inner"},[a("h1",[e._v("마케팅 수신동의")]),a("div",{staticClass:"my-16 px-4"},[a("br"),a("b",[e._v("1. 광고성 정보의 이용목적")]),a("br"),e._v(" 장례박사가 제공하는 이용자 맞춤형광고 서비스 및 신규프로그램 등의 광고성 정보를 전자우편이나 서신우편, 문자(SMS 또는 카카오 알림톡), 푸시, 전화 등을 통해 이용자에게 제공합니다."),a("br"),e._v(" - 마케팅 수신 동의는 거부하실 수 있으며 동의 이후에라도 고객의 의사에 따라 동의를 철회할 수 있습니다. 동의를 거부하시더라도 장례박사가 제공하는 서비스의 이용에 제한이 되지 않습니다. 단, 신규 무료 프로그램 및 이용자 맞춤형 광고서비스 등의 마케팅 정보 안내 서비스가 제한됩니다."),a("br"),a("br"),a("b",[e._v("2.미동의 시 불이익 사항")]),a("br"),e._v(" 개인정보보호법 제22조 제5항에 의해 선택정보 사항에 대해서는 동의 거부하시더라도 서비스 이용에 제한되지 않습니다. 단 신규 프로그램 및 이용자 맞춤형 광고 등의 마케팅 정보 안내 서비스가 제한됩니다. "),a("div",{staticClass:"agree mt-16"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agreeFlag,expression:"agreeFlag"}],attrs:{type:"checkbox",name:"obituaryleader"},domProps:{checked:Array.isArray(e.agreeFlag)?e._i(e.agreeFlag,null)>-1:e.agreeFlag},on:{change:function(t){var a=e.agreeFlag,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=e._i(a,n);i.checked?r<0&&(e.agreeFlag=a.concat([n])):r>-1&&(e.agreeFlag=a.slice(0,r).concat(a.slice(r+1)))}else e.agreeFlag=s}}}),a("span",{staticClass:"ml-2",on:{click:function(t){e.agreeFlag=!e.agreeFlag}}},[e._v(" 동의합니다 ")])]),a("button",{staticClass:"btn_join mt-4",staticStyle:{width:"100%",height:"48px","margin-top":"36px","font-weight":"700","font-size":"var(--default)","font-family":"var(--noto3)",color:"var(--white-font)",background:"var(--main-color)","border-radius":"8px"},on:{click:function(t){return e.method(e.agreeFlag)}}},[e._v(" 확인 ")])])])])},s=[],n={name:"AddressSearch",props:["method","memberMarketingAgree"],data:function(){return{address:"",searchType:"only",agreeFlag:!1}},mounted:function(){this.agreeFlag=this.memberMarketingAgree},computed:{},methods:{close:function(){$("#address-search").removeClass("active"),this.$store.commit("END_DEEMED")}}},r=n,c=a("2877"),o=Object(c["a"])(r,i,s,!1,null,null,null);t["a"]=o.exports},d198:function(e,t,a){"use strict";var i=a("ff0e"),s=a.n(i);s.a},f514:function(e,t,a){"use strict";var i=a("2e36"),s=a.n(i);s.a},ff0e:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7dad086e.1273b792.js.map