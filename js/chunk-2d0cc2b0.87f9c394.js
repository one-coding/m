(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc2b0"],{"4d7a":function(t,a,i){"use strict";i.r(a);var e=i("8654"),s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("mobile-header",{staticClass:"mb-10",staticStyle:{"border-bottom":"none"},attrs:{title:"부고 정보 확인"},on:{close:function(a){return t.move("/obituary-list")}}}),i("div",[i("div",[i("div",{attrs:{id:"m_reg-obituary"}},[i("section",[i("section",{staticClass:"title-inputs__wrap"},[t._m(0),i("div",{staticClass:"inputs-box"},[i("div",[i("div",{staticClass:"inputs_wrap"},[i("div",{staticStyle:{width:"160%"}},[i(e["a"],{attrs:{placeholder:"고인명",flat:"",solo:"",dense:"","hide-details":"",color:"main",readonly:""},model:{value:t.getObituaryDetail.obituaryName,callback:function(a){t.$set(t.getObituaryDetail,"obituaryName",a)},expression:"getObituaryDetail.obituaryName"}})],1),i(e["a"],{attrs:{placeholder:"고인 나이",flat:"",solo:"",dense:"","hide-details":"",color:"main",maxlength:"3",value:t.getObituaryDetail.obituaryAge+"세",readonly:""}}),i(e["a"],{attrs:{placeholder:"성별",flat:"",solo:"",dense:"",color:"main","hide-details":"",value:"M"===t.getObituaryDetail.obituarySex?"남성":"여성",readonly:""}}),i("div",{staticClass:"not-show__wraps"},[i("div",{staticClass:"check-box small",class:{checked:t.getObituaryDetail.obituaryAgeYn}}),i("span",[t._v(" 비공개 ")])])],1),i("div",{staticClass:"inputs_wrap py-1"},[i("div",{staticClass:"d-flex",staticStyle:{gap:"14px"}},[i("span",{staticClass:"txt02"},[t._v("별세")]),i("span",{staticClass:"txt02"},[t._v(t._s(t.YYMMDDHHmm2Date(t.getObituaryDetail.obituaryDieDate))+" ")])]),i("div",[i("span",{staticClass:"txt02"},[t._v(" "+t._s(null!==t.getObituaryDetail.obituaryCode?t.getObituaryDetail.obituaryCode.codeName:"")+" ")])])]),i("div",{staticClass:"inputs_wrap py-1"},[i("div",{staticClass:"d-flex",staticStyle:{gap:"14px"}},[i("span",{staticClass:"txt02"},[t._v("발인")]),i("span",{staticClass:"txt02"},[t._v(t._s(t.YYMMDDHHmm2Date(t.getObituaryDetail.obituaryEndDate))+" ")])])]),i("div",{staticClass:"inputs_wrap py-1"},[i("div",{staticClass:"d-flex",staticStyle:{gap:"14px"}},[i("span",{staticClass:"txt02"},[t._v("장지")]),i("span",{staticClass:"txt02"},[t._v(t._s(t.getObituaryDetail.obituaryPlace)+" ")])])])])])]),i("section",{staticClass:"title-inputs__wrap"},[t._m(1),i("div",{staticClass:"inputs-box"},[i("div",[i("div",{staticClass:"inputs_wrap py-1"},[i("div",{staticClass:"d-flex",staticStyle:{gap:"14px"}},[i("span",{staticClass:"txt02"},[t._v(t._s(t.getObituaryDetail.obituaryAddrName))])]),i("div",["TYPE-0"===t.memberInfo.memberAttr?i("span",{staticClass:"txt02"},[t._v(t._s(null!==t.getObituaryDetail.obituaryMortuary&&void 0!==t.getObituaryDetail.obituaryMortuary?t.getObituaryDetail.obituaryMortuary.mortuaryNumber:"")+" ")]):t._e(),"TYPE-1"===t.memberInfo.memberAttr?i("span",{staticClass:"txt02"},[t._v(t._s(t.getObituaryDetail.obituaryMortuaryName)+" ")]):t._e()])])])])]),i("section",{staticClass:"title-inputs__wrap"},[t._m(2),i("div",{staticClass:"inputs-box"},[i("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[i("a",{on:{click:function(a){return t.obituaryViewPicture(t.getObituaryDetail)}}},[null!==t.getObituaryDetail.obituaryFile&&void 0!==t.getObituaryDetail.obituaryFile&&t.getObituaryDetail.obituaryFile.length>0?i("img",{attrs:{src:t.getObituaryDetail.obituaryFile[0].filePath,width:"135px"}}):t._e()])])])]),i("section",{staticClass:"title-inputs__wrap"},[t._m(3),i("div",{staticClass:"inputs-box"},[i("div",t._l(t.getObituaryDetail.obituaryObituaryMember,(function(a,e){return i("div",{key:e,staticClass:"inputs_wrap py-1"},[i("div",{staticClass:"d-flex",staticStyle:{gap:"14px"}},[i("span",{staticClass:"txt02"},[t._v(t._s(a.obituaryMemberType)+" | "+t._s(a.obituaryMemberName))]),i("span",{staticClass:"txtphone"},[t._v(t._s(a.obituaryMemberPhone))])]),i("div",[i("span",[i("button",{staticClass:"btnstyle01",on:{click:function(i){return t.requestObituaryOnlySend(a.id)}}},[t._v(" 부고재전송 ")])])])])})),0)])])])]),i("div",{staticStyle:{"flex-basis":"fit-content"}})])]),t.imageModal?i("ImgModal",{attrs:{methods:t.closeImgModal,image:t.modalImage}}):t._e()],1)},r=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[i("div",{staticClass:"title-box"},[i("h4",[t._v("고인 정보")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[i("div",{staticClass:"title-box"},[i("h4",[t._v("장례식장 / 빈소")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[i("div",{staticClass:"title-box"},[i("h4",[t._v("영정사진")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",[i("div",{staticClass:"title-box"},[i("h4",[t._v("상주 정보")])])])}],l=i("5530"),o=i("2f62"),n=i("e09c"),u=i("04c3"),d={name:"ObituaryReg2",mixins:[n["a"]],props:[],components:{MobileHeader:u["a"]},data:function(){return{modalImage:"",imageModal:!1,menu1:!1,id:this.$route.query.id?this.$route.query.id:""}},computed:Object(l["a"])({},Object(o["b"])(["getObituaryDetail","memberInfo","getloadingState"])),created:function(){},mounted:function(){var t={id:this.id};this.$store.dispatch("REQUEST_OBITUARY_DETAIL",t)},methods:{closeImgModal:function(){this.imageModal=!1,this.$store.commit("END_DEEMED")},obituaryViewPicture:function(t){null!==t.obituaryFile&&void 0!==t.obituaryFile&&t.obituaryFile.length>0?(this.$store.commit("START_DEEMED"),this.modalImage=t.obituaryFile[0].filePath,this.imageModal=!0):alert("영정사진이 존재하지 않습니다.")},move:function(t){this.$router.push(t)},requestObituarySend:function(){if(null!==this.getObituaryDetail.obituaryEndDate&&void 0!==this.getObituaryDetail.obituaryEndDate&&""!==this.getObituaryDetail.obituaryEndDate&&new Date(this.getObituaryDetail.obituaryEndDate)<new Date)alert("완료된 발인의 부고를 전송할 수 없습니다.");else{var t={id:this.id};this.$store.dispatch("REQUEST_OBITUARY_SEND",t)}},requestObituarySendAllOnly:function(){if(null!==this.getObituaryDetail.obituaryEndDate&&void 0!==this.getObituaryDetail.obituaryEndDate&&""!==this.getObituaryDetail.obituaryEndDate&&new Date(this.getObituaryDetail.obituaryEndDate)<new Date)alert("완료된 발인의 부고를 전송할 수 없습니다.");else{var t={id:this.id};this.$store.dispatch("REQUEST_OBITUARY_SEND_ALL_ONLY",t)}},requestObituaryOnlySend:function(t){if(null!==this.getObituaryDetail.obituaryEndDate&&void 0!==this.getObituaryDetail.obituaryEndDate&&""!==this.getObituaryDetail.obituaryEndDate&&new Date(this.getObituaryDetail.obituaryEndDate)<new Date)alert("완료된 발인의 부고를 전송할 수 없습니다.");else{var a={id:t};this.$store.dispatch("REQUEST_OBITUARY_ALL_SEND",a)}},requestObituaryOnlyReply:function(t){var a={id:t};this.$store.dispatch("REQUEST_OBITUARY_REPLY_SEND",a)},requestObituaryOnlyMovie:function(t){if(confirm("고객한테 제작 안내 메시지가 발송됩니다. 전송하시겠습니까? (제3자 개인정보 동의로 간주함)")){var a={id:t};this.$store.dispatch("REQUEST_OBITUARY_REPLY_MOVIE",a)}},obituaryView:function(t){this.$store.dispatch("REQUEST_ENCODE",t.id).then((function(t){t.result&&window.open("/obituary?id=".concat(t.str),"부고장","width=800,height=1500")}))},obituaryUpdate:function(t){this.$router.push({path:"/obituaryUpdate",query:{id:t}})}}},c=d,b=i("2877"),y=Object(b["a"])(c,s,r,!1,null,null,null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0cc2b0.87f9c394.js.map