(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa2b9f4e"],{"04c3":function(t,e,s){"use strict";var a=s("132d"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"m_default-header"},[t.leftIcon?s(a["a"],{staticClass:"left",on:{click:t.close}},[t._v(t._s(t.leftIcon))]):s(a["a"],{staticClass:"left",on:{click:t.close}},[t._v("mdi-close")]),s("h4",[t._v(t._s(t.title))]),s(a["a"],{staticClass:"right",on:{click:t.clickRightIcon}},[t._v(t._s(t.rightIcon))])],1)},i=[],r={name:"MobileHeader",props:{leftIcon:{type:String,default:String},title:{type:String,default:String},rightIcon:{type:String,default:String}},methods:{close:function(){this.$emit("close")},clickRightIcon:function(){this.$emit("clickRightIcon")}}},o=r,c=s("2877"),l=Object(c["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},"0627":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tablet-page"}},[a("mobile-header",{staticClass:"reg-obituary",attrs:{"left-icon":"mdi-chevron-left",title:"위패/지방 축문"},on:{close:t.back}}),a("main",[a("img",{attrs:{src:s("a440"),alt:""}}),t._m(0),a("button",{on:{click:t.back}},[t._v("이전")])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" 위패/지방 축문은 "),s("br"),t._v(" PC에서 사용할 수 있으며 "),s("br"),t._v(" 간편하게 작성하여 출력할 수 있습니다 ")])}],i=s("04c3"),r={components:{MobileHeader:i["a"]},methods:{back:function(){this.$router.go(-1)}}},o=r,c=(s("1dc1"),s("2877")),l=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=l.exports},"132d":function(t,e,s){"use strict";s("7db0"),s("caad"),s("c975"),s("fb6a"),s("45fc"),s("a9e3"),s("2532"),s("498a"),s("c96a");var a,n=s("5530"),i=(s("4804"),s("7e2b")),r=s("a9ad"),o=s("af2b"),c=s("7560"),l=s("80d2"),u=s("2b0e"),h=s("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var b=Object(h["a"])(i["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["t"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["q"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],a=this.getDefaultData(),n="material-icons",i=t.indexOf("-"),r=i<=-1;r?s.push(t):(n=t.slice(0,i),d(n)&&(n="")),a.class[n]=!0,a.class[t]=!r;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,s)},renderSvgIcon:function(t,e){var s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(s.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s={class:{"v-icon__component":!0}},a=this.getSize();a&&(s.style={fontSize:a,height:a,width:a}),this.applyColors(s);var n=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,s)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["default"].extend({name:"v-icon",$_wrapperFor:b,functional:!0,render:function(t,e){var s=e.data,a=e.children,n="";return s.domProps&&(n=s.domProps.textContent||s.domProps.innerHTML||n,delete s.domProps.textContent,delete s.domProps.innerHTML),t(b,s,n?[n]:a)}})},"1dc1":function(t,e,s){"use strict";var a=s("6daf"),n=s.n(a);n.a},4804:function(t,e,s){},"6daf":function(t,e,s){},"7e2b":function(t,e,s){"use strict";var a=s("2b0e");function n(t){return function(e,s){for(var a in s)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(var n in e)this.$set(this.$data[t],n,e[n])}}e["a"]=a["default"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},a440:function(t,e,s){t.exports=s.p+"m/img/pc_tablet.fba50de2.svg"},a9ad:function(t,e,s){"use strict";s("d3b7"),s("ac1f"),s("25f0"),s("1276"),s("498a");var a=s("3835"),n=s("ade3"),i=s("5530"),r=s("2b0e"),o=s("d9bd"),c=s("7bc6");e["a"]=r["default"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?(Object(o["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(o["b"])("class must be an object",this),e):(Object(c["d"])(t)?e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(i["a"])(Object(i["a"])({},e.class),{},Object(n["a"])({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return Object(o["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(o["b"])("class must be an object",this),e;if(Object(c["d"])(t))e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var s=t.toString().trim().split(" ",2),r=Object(a["a"])(s,2),l=r[0],u=r[1];e.class=Object(i["a"])(Object(i["a"])({},e.class),{},Object(n["a"])({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},af2b:function(t,e,s){"use strict";s("c96a");var a=s("2b0e");e["a"]=a["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,s){"use strict";var a=s("23e7"),n=s("857a"),i=s("af03");a({target:"String",proto:!0,forced:i("small")},{small:function(){return n(this,"small","","")}})}}]);
//# sourceMappingURL=chunk-fa2b9f4e.f7767f58.js.map