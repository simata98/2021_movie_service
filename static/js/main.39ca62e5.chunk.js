(this.webpackJsonp2021_movie_service=this.webpackJsonp2021_movie_service||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(2),n=s.n(c),i=s(13),r=s.n(i),o=s(4),l=s.n(o),j=s(14),d=s(15),v=s(16),b=s(19),h=s(18),p=s(17),m=s.n(p);s(44);var u=function(e){var t=e.release_date,s=e.title,c=e.overview,n=e.poster,i=e.vote_count,r=e.vote_average;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n.toString(),alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:s}),Object(a.jsxs)("h5",{className:"movie_release",children:["\uac1c\ubd09\uc77c : ",t]}),Object(a.jsxs)("h5",{className:"movie_voteCount",children:["\ud22c\ud45c \uc218 : ",i]}),Object(a.jsx)("span",{style:{color:"#b2b3bc"},children:"\uad00\uac1d \ud3c9\uc810 "}),Object(a.jsxs)("div",{className:"star-ratings-css",children:[Object(a.jsxs)("div",{className:"star-top",style:{width:14*r},children:[Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"})]}),Object(a.jsxs)("div",{className:"star-bottom",children:[Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"}),Object(a.jsx)("span",{children:"\u2605"})]})]}),Object(a.jsxs)("p",{className:"movie_overview",children:[c.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(j.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a");case 2:s=t.sent,a=s.data.results,e.setState({results:a,isLoading:!1}),console.log(a);case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.results;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(u,{id:e.id,release_date:e.release_date,title:e.title,overview:e.overview,poster:e.poster_path,vote_count:e.vote_count,vote_average:e.vote_average},e.id)}))})})}}]),s}(n.a.Component));r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.39ca62e5.chunk.js.map