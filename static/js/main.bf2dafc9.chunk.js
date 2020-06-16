(this["webpackJsonprecoil-list-demo"]=this["webpackJsonprecoil-list-demo"]||[]).push([[0],{15:function(e,t,a){e.exports=a(44)},20:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(20),a(1)),s=function(){return r.a.createElement("header",{className:"text-gray-700 body-font"},r.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},r.a.createElement("a",{href:"/recoil-foodtalk-demo",className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"},r.a.createElement("svg",{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M3.9468 10.0288L20.5548.995c2.4433-1.3267 5.45-1.3267 7.8936 0l16.6078 9.0338C47.4966 11.3585 49 13.8102 49 16.4666V34.534c0 2.6537-1.5034 5.1082-3.9438 6.438l-16.6078 9.0307c-2.4435 1.3297-5.4503 1.3297-7.8937 0L3.9467 40.972C1.5035 39.642 0 37.1876 0 34.534V16.4667c0-2.6564 1.5034-5.108 3.9468-6.4378z",fillRule:"evenodd"})),r.a.createElement("span",{className:"ml-3 text-xl"},"Foodtalk")),r.a.createElement("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center"},r.a.createElement("button",{className:"mr-5 hover:text-gray-900 cursor-pointer"},"Recipes")),r.a.createElement("a",{href:"https://github.com/emilmork/recoil-foodtalk-demo"},"Github")))},i=a(6),m=a(2),u=a(5),d=a.n(u),f=["Cozy","Fast","Healthy"],p=["Breakfast","Lunch","Dinner"],g=[{name:"Pancakes",desc:"Fast to make, fast to eat",categories:["Cozy"],types:["Dinner"]},{name:"Kylling",desc:"Juicy and tasty",categories:["Fast"],types:["Dinner"]},{name:"Hamburger",desc:"To the whole family",categories:["Fast","Cozy"],types:["Lunsj"]},{name:"Omelett",desc:"To the whole family",categories:["Fast","Healthy"],types:["Breakfast"]},{name:"Pasta & kreps",desc:"Proper evening food",categories:["Cozy"],types:["Dinner"]},{name:"Fish & ships",desc:"When you are out of time",categories:["Fast"],types:["Dinner","Lunch"]},{name:"Fish soup",desc:"Perfect for the date",categories:["Fast"],types:["Dinner","Lunch"]},{name:"Crayfish",desc:"Perfect for the date",categories:["Cozy","Healthy"],types:["Dinner","Lunch"]}],x=Object(o.atom)({key:"selectedCategores",default:[]}),y=Object(o.atom)({key:"selectedTypes",default:[]}),E=Object(o.atom)({key:"search",default:""}),h=Object(o.selector)({key:"categoriesQuery",default:[],get:function(){return new Promise((function(e){setTimeout((function(){e(f)}),1500)}))}}),b=Object(o.selector)({key:"typeQuery",default:[],get:function(){return new Promise((function(e){setTimeout((function(){e(p)}),2e3)}))}}),k=Object(o.selector)({key:"recipesQuery",get:function(){return new Promise((function(e){setTimeout((function(){e(g)}),3e3)}))}}),v=Object(o.selector)({key:"filteredRecepies",get:function(e){var t=e.get,a=t(k),n=t(x),r=t(y),l=t(E);return a.filter((function(e){return function(e,t){return 0===t.length||t.some((function(t){return e.categories.includes(t)}))}(e,n)&&function(e,t){return 0===t.length||t.some((function(t){return e.types.includes(t)}))}(e,r)&&function(e,t){return""===t||e.name.toLowerCase().indexOf(t.toLowerCase())>=0}(e,l)}))}});var L=function(){var e=Object(o.useRecoilValue)(h),t=Object(o.useRecoilState)(x),a=Object(m.a)(t,2),n=a[0],l=a[1];return r.a.createElement("nav",{className:"list-none -mb-1"},e.map((function(e){var t=n.includes(e);return r.a.createElement("li",{key:e,onClick:function(){return function(e){n.includes(e)?l(n.filter((function(t){return t!==e}))):l([e].concat(Object(i.a)(n)))}(e)}},r.a.createElement("label",{className:d()("text-gray-600 hover:text-gray-800 cursor-pointer",{"text-green-600":t,"hover:text-green-800":t})},e))})))},w=function(){var e=Object(o.useRecoilValue)(b),t=Object(o.useRecoilState)(y),a=Object(m.a)(t,2),n=a[0],l=a[1];return r.a.createElement("nav",{className:"list-none -mb-1"},e.map((function(e){var t=n.includes(e);return r.a.createElement("li",{key:e,onClick:function(){return function(e){n.includes(e)?l(n.filter((function(t){return t!==e}))):l([e].concat(Object(i.a)(n)))}(e)}},r.a.createElement("label",{className:d()("text-gray-600 hover:text-gray-800 cursor-pointer",{"text-green-600":t,"hover:text-green-800":t})},e))})))},N=function(){var e=Object(o.useRecoilValue)(v);return r.a.createElement("div",{className:"flex flex-wrap"},e.map((function(e){return r.a.createElement("div",{key:e.name,className:"md:w-1/2 cursor-pointer"},r.a.createElement("div",{className:"border-2 border-gray-200 m-2 p-4"},r.a.createElement("h2",{className:"text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"},e.name),r.a.createElement(j,null),r.a.createElement("p",{className:"leading-relaxed text-base mb-4"},e.desc),r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("span",{className:"text-sm text-yellow-800"},e.categories.join(", ")),r.a.createElement("span",{className:"text-sm text-indigo-800"},e.types.join(", ")))))})))};function j(){return r.a.createElement("div",{className:"flex mb-4"},r.a.createElement("span",{className:"flex items-center"},r.a.createElement("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-green-500",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})),r.a.createElement("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-green-500",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})),r.a.createElement("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-green-500",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})),r.a.createElement("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-green-500",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})),r.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-green-500",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}))))}var C=function(){var e=Object(o.useRecoilState)(E),t=Object(m.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"px-2"},r.a.createElement("input",{className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block w-full appearance-none leading-normal",type:"email",placeholder:"Search for recipe..",value:a,onChange:function(e){n(e.target.value)}}))},O=function(){return r.a.createElement("div",{className:"text-gray-700 body-font"},r.a.createElement(s,null),r.a.createElement("div",{className:"px-5 py-24 mx-auto flex flex-col"},r.a.createElement("div",{className:"lg:w-4/6 mx-auto"},r.a.createElement("div",{className:"flex flex-col sm:flex-row mt-10"},r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{className:"text-center sm:pr-8 sm:py-8"},r.a.createElement("h2",{className:"title-font font-medium text-gray-800 tracking-widest text-sm mb-3"},"CATEGORY"),r.a.createElement(n.Suspense,{fallback:r.a.createElement("span",null,"...")},r.a.createElement(L,null))),r.a.createElement("div",{className:"text-center sm:pr-8 sm:py-8"},r.a.createElement("h2",{className:"title-font font-medium text-gray-800 tracking-widest text-sm mb-3"},"TYPE"),r.a.createElement(n.Suspense,{fallback:r.a.createElement("span",null,"...")},r.a.createElement(w,null)))),r.a.createElement("div",{className:"sm:w-2/3 sm:pl-8 sm:border-l border-gray-300 sm:border-t-0 border-t"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("span",null,"Loading recipes...")},r.a.createElement(N,null)))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.RecoilRoot,null,r.a.createElement(O,null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bf2dafc9.chunk.js.map