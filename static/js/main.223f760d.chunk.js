(this.webpackJsonp2021_movie_service=this.webpackJsonp2021_movie_service||[]).push([[0],{55:function(e,t,s){},56:function(e,t,s){},76:function(e,t,s){},82:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(0),n=s.n(c),i=s(18),r=s.n(i),o=s(15),l=s(6);s(55);var j=function(e){return console.log(e),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:"Clone Coding By Jeong Hyeong Lee"}),Object(a.jsx)("p",{children:"Used Movie database API"}),Object(a.jsx)("span",{children:"2021-01-18 Started"})]})},d=s(20),h=s(21),b=s(25),v=s(23),p=(s(56),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsxs)("div",{className:"movie_description",children:[Object(a.jsx)("div",{className:"background",children:Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.state.backposter.toString(),alt:e.state.title,title:e.state.title})}),Object(a.jsxs)("div",{className:"poster",children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.state.poster.toString(),alt:e.state.title,title:e.state.title}),Object(a.jsx)("div",{className:"movie_result",children:Object(a.jsxs)("div",{className:"movie_title",children:[Object(a.jsx)("h1",{children:e.state.title}),Object(a.jsxs)("div",{className:"movie_content",children:[Object(a.jsxs)("h2",{children:["\uac1c\ubd09 \ub0a0\uc9dc : ",e.state.release_date]}),Object(a.jsxs)("h2",{children:["\uad00\uac1d \ud3c9\uc810 : ",e.state.vote_average]}),Object(a.jsxs)("h2",{children:["\uad00\uac1d \ud22c\ud45c \uc218 : ",e.state.vote_count]}),Object(a.jsx)("h6",{children:e.state.overview})]})]})})]})]}):null}}]),s}(n.a.Component)),x=s(32),m=s.n(x),O=s(44),u=s(45),g=s.n(u);s(76);var _=function(e){var t=e.id,s=e.release_date,c=e.title,n=e.overview,i=e.poster,r=e.vote_count,l=e.vote_average,j=e.backposter;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{release_date:s,title:c,overview:n,poster:i,vote_count:r,vote_average:l,backposter:j}},children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+i.toString(),alt:c,title:c}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:c}),Object(a.jsxs)("h5",{className:"movie_release",children:["\uac1c\ubd09\uc77c : ",s]}),Object(a.jsxs)("h5",{className:"movie_voteCount",children:["\ud22c\ud45c \uc218 : ",r]}),Object(a.jsx)("span",{style:{color:"#b2b3bc"},children:"\uad00\uac1d \ud3c9\uc810 "}),Object(a.jsxs)("div",{className:"star-ratings-css",children:[Object(a.jsxs)("div",{className:"star-top",style:{width:14*l},children:[Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"})]}),Object(a.jsxs)("div",{className:"star-bottom",children:[Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"})]})]}),Object(a.jsxs)("p",{className:"movie_overview",children:[n.slice(0,140),"..."]})]})]})})},f=(s(82),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(O.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a");case 2:s=t.sent,a=s.data.results,e.setState({results:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.results;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(_,{id:e.id,release_date:e.release_date,title:e.title,overview:e.overview,poster:e.poster_path,backposter:e.backdrop_path,vote_count:e.vote_count,vote_average:e.vote_average},e.id)}))})})}}]),s}(n.a.Component)),N=s(90),w=s(92),y=s(91),k=s(49),S=s(89);s(83);var M=function(){return Object(a.jsx)("div",{className:"nav",style:{width:"100%"},children:Object(a.jsxs)(N.a,{bg:"dark",variant:"dark",style:{width:"100%"},children:[Object(a.jsx)(N.a.Brand,{to:"/home",children:"Jeong's Movie"}),Object(a.jsxs)(w.a,{className:"mr-auto",children:[Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white",marginRight:"10px"},children:"Home"}),Object(a.jsx)(o.b,{to:"/about",style:{textDecoration:"none",color:"white",marginRight:"10px"},children:"About"}),Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white",marginRight:"10px"},children:"NotYet"})]}),Object(a.jsxs)(y.a,{inline:!0,children:[Object(a.jsx)(k.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(a.jsx)(S.a,{variant:"outline-info",children:"Search"})]})]})})};s(85);var C=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(M,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(l.a,{path:"/about",component:j}),Object(a.jsx)(l.a,{path:"/movie/:id",component:p})]})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.223f760d.chunk.js.map