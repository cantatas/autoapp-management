(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sample-richAlert"],{"204c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("modal"),a=uni.requireNativePlugin("DCloud-RichAlert"),i={data:function(){return{title:""}},onLoad:function(){},methods:{showRichAlert:function(){a.show({position:"bottom",title:"提示信息",titleColor:"#FF0000",content:"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",contentAlign:"left",checkBox:{title:"不再提示",isSelected:!0},buttons:[{title:"取消"},{title:"否"},{title:"确认",titleColor:"#3F51B5"}]},(function(e){var a=JSON.stringify(e);switch(n.toast({message:a,duration:1.5}),e.type){case"button":t("log","callback---button--"+e.index," at pages/sample/richAlert.vue:50");break;case"checkBox":t("log","callback---checkBox--"+e.isSelected," at pages/sample/richAlert.vue:53");break;case"a":t("log","callback---a--"+JSON.stringify(e)," at pages/sample/richAlert.vue:56");break;case"backCancel":t("log","callback---backCancel--"," at pages/sample/richAlert.vue:59");break}}))}}};e.default=i}).call(this,n("0de9")["log"])},2641:function(t,e,n){"use strict";n.r(e);var a=n("e88c"),i=n("6141");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("40b0");var r,c=n("f0c5"),l=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"58d687f1",null,!1,a["a"],r);e["default"]=l.exports},3815:function(t,e,n){var a=n("fce5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("193dd26f",a,!0,{sourceMap:!1,shadowMode:!1})},"40b0":function(t,e,n){"use strict";var a=n("3815"),i=n.n(a);i.a},6141:function(t,e,n){"use strict";n.r(e);var a=n("204c"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e88c:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"button-sp-area"},[n("v-uni-button",{attrs:{type:"primary",plain:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRichAlert()}}},[t._v("点击显示弹窗")])],1)},o=[]},fce5:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-button[data-v-58d687f1]{margin-top:%?30?%;margin-bottom:%?30?%}.button-sp-area[data-v-58d687f1]{margin:0 auto;width:60%}.content[data-v-58d687f1]{text-align:center;height:%?400?%}.wrapper[data-v-58d687f1]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.button[data-v-58d687f1]{width:200px;margin-top:30px;margin-left:20px;padding-top:20px;padding-bottom:20px;border-width:2px;border-style:solid;border-color:#458b00;background-color:#458b00}.text[data-v-58d687f1]{font-size:30px;color:#666;text-align:center}",""]),t.exports=e}}]);