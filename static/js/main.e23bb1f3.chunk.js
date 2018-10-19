(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=a(24),o=a(15),s=a(61),u=a(62),m=a.n(u),h=a(19),p=Object(o.c)({searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",apiEndPoint:"Images",images:[],films:[],imageTypes:["Pets","Life","Cute","Happy","Heart","Painting"],filmTypes:["Action","Fantasy","Adventure","Comedy","Crime","Drama"]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_SET_TITLE":return Object(h.a)({},e,{title:t.payload});case"SEARCH_SET_APIENDPOINT":return Object(h.a)({},e,{apiEndPoint:t.payload});case"SEARCH_IMAGES_LIST":return Object(h.a)({},e,{images:t.payload});case"SEARCH_FILM_LIST":return Object(h.a)({},e,{films:t.payload});default:return e}}}),d=Object(o.d)(p,{},Object(o.a)(s.a,m.a)),E=(a(81),a(63)),f=a(64),g=a(71),v=a(65),y=a(72),T=a(33),S=a.n(T),b=a(143),I=a(162),C=a(163),w=a(161),A=a(159),_=a(164),k=a(160),L=a(165),P=a(138),O=a(57),j=(a(102),function(e){var t=e.searchForTile,a=e.title,n=e.handleApiChoiceChange,c=e.handleQuickSearch,l=e.shortlist;return r.a.createElement("div",{className:"search"},r.a.createElement(A.a,null,r.a.createElement(_.a,{type:"text",placeholder:"Search",onChange:t,value:a,style:{marginTop:20}})),r.a.createElement(k.a,null,r.a.createElement(L.a,{type:"radio",name:"options",defaultValue:"Images"},r.a.createElement(P.a,{className:"search-api-endpoint",onClick:n,value:"Images"},"Images"),r.a.createElement(P.a,{className:"search-api-endpoint",onClick:n,value:"Films"},"Films"))),r.a.createElement("br",null),l.map(function(e){return r.a.createElement(O.a,{className:"search-quickPick",key:e,onClick:c,value:e},e)}))}),F=(a(139),function(e){return r.a.createElement("div",null,e.images.map(function(e){return r.a.createElement(w.a,{sx:12,key:e.id},r.a.createElement("div",{className:"imagelist"},r.a.createElement("h3",null,e.tags),r.a.createElement("span",null,"by: ",r.a.createElement("strong",null,e.user)),r.a.createElement("img",{src:e.largeImageURL,alt:e.user,style:{width:"100%",hieght:"100%"}})),r.a.createElement("hr",null))}))}),N=function(e){return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,null===e.posterpath?r.a.createElement("img",{width:"100",src:"Movies-icon.png",alt:"No Poster"}):r.a.createElement("img",{width:"100",src:"https://image.tmdb.org/t/p/w185/".concat(e.posterpath),alt:"Poster"})),r.a.createElement("td",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.overview)))))},H=function(e){var t=e.filmlist;return t.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(N,{count:0,title:e.title,posterpath:e.poster_path,overview:e.overview}),r.a.createElement("hr",null))})},R=(a(141),function(e){var t=e.filmlist;return r.a.createElement("div",{className:"Films"},r.a.createElement(H,{filmlist:t}))}),B=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).searchForTile=function(e){var t=e.target.value;a.props.setSearchTitle(t),"Images"===a.props.searchBar.apiEndPoint?a.props.searchGetImagesList(t):a.props.searchFilmList(t)},a.whichList=function(e){return"Images"===e?a.props.searchBar.imageTypes:a.props.searchBar.filmTypes},a.handleApiChoiceChange=function(e){var t=e.target.value;a.props.setApiEndPiont(t),a.props.setSearchTitle("")},a.handleQuickSearch=function(e){a.searchForTile(e)},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.searchBar,t=e.apiEndPoint,a=e.title,n=e.images,c=e.films,l=this.whichList(this.props.searchBar.apiEndPoint);return r.a.createElement(b.a,{fluid:!0},r.a.createElement(I.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Header,null,r.a.createElement(w.a,{xs:12},r.a.createElement(C.a.Brand,null,r.a.createElement("span",{style:{color:"red"}},t)," Search"))),r.a.createElement(w.a,{xs:12},r.a.createElement(j,{searchForTile:this.searchForTile,handleApiChoiceChange:this.handleApiChoiceChange,handleQuickSearch:this.handleQuickSearch,shortlist:l,title:a})))),r.a.createElement(I.a,null,"Images"===t?r.a.createElement(F,{images:n}):r.a.createElement(R,{filmTitle:a,filmlist:c})))}}]),t}(n.Component),x=Object(i.b)(function(e){return{searchBar:e.searchReducer}},function(e){return{setSearchTitle:function(t){e(function(e){return{type:"SEARCH_SET_TITLE",payload:e}}(t))},setApiEndPiont:function(t){e(function(e){return{type:"SEARCH_SET_APIENDPOINT",payload:e}}(t))},searchGetImagesList:function(t){e(function(e){return function(t){S.a.get("".concat("https://pixabay.com/api","/?key=").concat("10361802-d80edd7c8013de8fa58524476","&q=").concat(e,"&image_type=photo&per_page=20&safesearch=true")).then(function(e){t({type:"SEARCH_IMAGES_LIST",payload:e.data.hits})}).catch(function(e){return console.log(e)})}}(t))},searchFilmList:function(t){e(function(e){return function(t){var a="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat("ad15983bd210a7516df5735e5abb5f4f");S.a.get(a).then(function(e){t({type:"SEARCH_FILM_LIST",payload:e.data.results})}).catch(function(e){console.log(e)})}}(t))}}})(B),M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:d},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(158)},81:function(e,t,a){}},[[73,2,1]]]);
//# sourceMappingURL=main.e23bb1f3.chunk.js.map