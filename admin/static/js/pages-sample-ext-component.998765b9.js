(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sample-ext-component"],{"7d1b":function(t,e,n){"use strict";n.r(e);var o=n("da61"),a=n("aeed");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var u,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=l.exports},"8e16":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onLoad:function(){},methods:{onTel:function(e){t("log","onTel="+e.detail.tel," at pages/sample/ext-component.nvue:18")},myTextClick:function(t){this.$refs.telText.clearTel()}}};e.default=n}).call(this,n("0de9")["log"])},aeed:function(t,e,n){"use strict";n.r(e);var o=n("8e16"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},da61:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-uni-text",{staticClass:"intro"},[t._v("ext component")]),n("myText",{ref:"telText",staticStyle:{width:"200",height:"100"},attrs:{tel:"12305"},on:{onTel:function(e){arguments[0]=e=t.$handleEvent(e),t.onTel.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.myTextClick.apply(void 0,arguments)}}})],1)},i=[]}}]);