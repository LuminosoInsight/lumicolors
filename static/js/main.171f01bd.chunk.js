(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(88),c=a.n(n),s=(a(98),a(10)),l=a(11),i=a(13),h=a(12),u=a(14),d=a(267),p=a(268),m=a(37),b=a(89),f=a.n(b)()({colors:{0:{id:0,hex:"#04aade"}}}),v=a(7),y=a(22),x=a(52),C=a.n(x),O=a(3),k=a.n(O),j=a(4),g=a.n(j),E=a(5),w=a.n(E),B=(w()(.5,.5,.5,.5),w()(.55,.055,.675,.19),w()(.215,.61,.355,1),w()(.645,.045,.355,1),w()(.47,0,.745,.715),w()(.39,.575,.565,1),w()(.445,.05,.55,.95),w()(.55,.085,.68,.53),w()(.25,.46,.45,.94),w()(.455,.03,.515,.955),w()(.895,.03,.685,.22),w()(.165,.84,.44,1),w()(.77,0,.175,1),w()(.6,.04,.98,.335),w()(.075,.82,.165,1),w()(.785,.135,.15,.86),w()(.755,.05,.855,.06),w()(.23,1,.32,1),w()(.86,0,.07,1)),S=(w()(.95,.05,.795,.035),w()(.19,1,.22,1),w()(1,0,0,1),w()(.6,-.28,.735,.045),w()(.175,.885,.32,1.275),w()(.68,-.55,.265,1.55),function(e){if(!e)return!0;var t=[1.1,19],a=k.a.times(12,function(e){return B(e/11)*(t[1]-t[0])+t[0]}),o=g.a.contrast(e,"white").toFixed(2),r=k.a.first(k.a.sortBy(a,function(e){return Math.abs(e-o)})),n=k.a.findIndex(a,function(e){return e===r}),c=function(e){return Math.max(Math.min(e,1),0)},s=[];k.a.times(120,function(t){var a=g()(e).hsv(),o=a[0]+.15*t,r=c(a[1]-.008*t),n=c(a[2]+.015*t),l=a[0]-.3*t,i=c(a[1]+.032*t),h=c(a[2]-.015*t),u=g()(g.a.hsv(o,r,n)).hex(),d=g()(g.a.hsv(l,i,h)).hex();s.push(d,u)});var l=k.a.first(k.a.sortBy(s,function(e){var t=g.a.contrast(e,"black").toFixed(2);return Math.abs(t-19)})),i=k.a.first(k.a.sortBy(s,function(e){var t=g.a.contrast(e,"white").toFixed(2);return Math.abs(t-18)})),h=g.a.scale([g()(l).hex(),e,g()(i).hex()]).domain([0,n/12,1]).colors(12);return k.a.map(h,function(t,a){a===n&&(t=e);var o=g.a.contrast(t,"white").toFixed(2),r=g.a.contrast(t,"black").toFixed(2),c="";return c=o>=4.5?"white":"black",{hex:g()(t).hex(),hue:g()(t).hsv()[0],sat:g()(t).hsv()[1],lum:g()(t).hsv()[2],hsv:g()(t).hsv(),hsl:g()(t).hsl(),rgb:g()(t).rgb(),contrastBlack:r,contrastWhite:o,displayColor:c,sourceColorIndex:n,steps:12}})}),N=function(e){return{updateColor:function(e,t){return{colors:Object(y.a)({},e.colors,k.a.keyBy([t],"id"))}},removeColor:function(e,t){return{colors:k.a.filter(e.colors,function(e){return e.id!==t.id})}},replaceColors:function(e,t){return{colors:t}}}},U=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"swatch-area",style:{display:"flex",flexDirection:"row"}},k.a.map(k.a.orderBy(this.props.colors,"id","desc"),function(e,t){return r.a.createElement("div",{key:t,className:"swatch-list"},k.a.map(e.swatches,function(e,t){return r.a.createElement(F,{key:t,index:t,color:e})}))}))}}]),t}(o.Component),F=function(e){var t={color:e.color.displayColor,backgroundColor:e.color.hex};return r.a.createElement("div",{className:"swatch",style:t},r.a.createElement("div",{className:"swatch__info"},r.a.createElement("span",{className:"swatch__info-segment"},e.color.hex),r.a.createElement("span",{className:"swatch__info-segment",style:{color:"black"}},e.color.contrastBlack,"b"),r.a.createElement("span",{className:"swatch__info-segment",style:{color:"white"}},e.color.contrastWhite,"w"),r.a.createElement(function(){return e.color.sourceColorIndex===e.index?r.a.createElement("span",null,"*"):null},null)))},I=a(90),P=a(1),_=a.n(P),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={displayColorPicker:!1},a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a.handleClose=a.handleClose.bind(Object(v.a)(Object(v.a)(a))),a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState({displayColorPicker:!this.state.displayColorPicker})}},{key:"handleClose",value:function(){this.setState({displayColorPicker:!1})}},{key:"handleChange",value:function(e){this.props.addOrUpdateColor({hex:e.hex,id:this.props.color.id}),this.setState({displayColorPicker:!1})}},{key:"render",value:function(){var e=g()(this.props.color.hex),t=_()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:"rgb(".concat(e.rgb()[0],", ").concat(e.rgb()[1],", ").concat(e.rgb()[2],")")},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return r.a.createElement("div",null,r.a.createElement("div",{style:t.swatch,onClick:this.handleClick},r.a.createElement("div",{style:t.color})),this.state.displayColorPicker?r.a.createElement("div",{style:t.popover},r.a.createElement("div",{style:t.cover,onClick:this.handleClose}),r.a.createElement(I.CompactPicker,{color:this.props.color.hex,onChange:this.handleChange})):null)}}]),t}(r.a.Component),M=a(92),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={comparison:null,search:"",result:null},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=g()(this.state.search),a=g.a.contrast(t.hex(),"white").toFixed(2),o=g.a.contrast(t.hex(),"black").toFixed(2),r="";r=a>=4.5?"white":"black";var n={hex:t.hex(),contrastWhite:a,contrastBlack:o,displayColor:r},c=[];k.a.each(this.props.colors,function(e){c.push.apply(c,Object(M.a)(e.swatches))}),console.log(c);var s=k.a.map(c,function(e){return Object(y.a)({},e,{colorDistance:g.a.distance(e.hex,n.hex)})}),l=k.a.first(k.a.orderBy(s,"colorDistance","asc"));console.log(s),console.log(l),this.setState({comparison:n,result:l,search:n.hex})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Find a color")),this.state.result&&r.a.createElement("div",null,r.a.createElement("p",{style:{lineHeight:1.5}},"You searched for: "),r.a.createElement("p",null,r.a.createElement("span",{style:{background:this.state.comparison.hex,color:this.state.comparison.displayColor,padding:"0 .5rem",borderRadius:".5rem"}},this.state.comparison.hex)),r.a.createElement("p",null,"The closest color is:"),r.a.createElement("p",null,r.a.createElement("span",{style:{background:this.state.result.hex,color:this.state.result.displayColor,padding:"0 .5rem",borderRadius:".5rem"}},this.state.result.hex)," ")))}}]),t}(o.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={display:"flex",flexDirection:"row",alignItems:"center",padding:".25rem 0"};return r.a.createElement("div",{className:"sidebar"},r.a.createElement("button",{onClick:this.props.addOrUpdateColor},"Add column"),k.a.map(k.a.orderBy(this.props.colors,"id","desc"),function(a,o){return r.a.createElement("div",{key:o,style:t},r.a.createElement(D,{color:a,addOrUpdateColor:e.props.addOrUpdateColor}),r.a.createElement("div",{style:{flex:1,padding:"0 .5rem"}},a.hex),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.props.removeColumn(a)}},"Remove")))}),r.a.createElement("div",null,r.a.createElement(R,{colors:this.props.colors})))}}]),t}(o.Component),A=function(e){return C.a.stringify({color:k.a.map(k.a.orderBy(e,"id"),function(e){return e})})},J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).addOrUpdateColor=a.addOrUpdateColor.bind(Object(v.a)(Object(v.a)(a))),a.removeColumn=a.removeColumn.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=function(e){var t=C.a.parse(e.location.search),a=[];return t.color&&(Array.isArray(t.color)?a=t.color:a.push(t.color)),k.a.map(a,function(e,t){return{hex:e,id:t}})}(this.props),t=k.a.keyBy(k.a.map(e,function(e){var t=S(e.hex);return Object(y.a)({},e,{sourceColorIndex:t[0].sourceColorIndex,swatches:t})}),"id");this.props.replaceColors(t)}},{key:"addOrUpdateColor",value:function(e){console.log(this.props.colors);var t=this.props.colors.length;console.log(t);var a=e.hex?Object(y.a)({},e,{swatches:S(e.hex)}):{hex:"#666666",id:Object.keys(this.props.colors).length,swatches:S("#666666")},o=function(e,t){var a=Object(y.a)({},t,k.a.keyBy([e],"id"));return k.a.map(k.a.orderBy(a,"id"),function(e){return e.hex})}(a,this.props.colors);this.props.updateColor(a),this.props.history.push("?".concat(A(o)))}},{key:"removeColumn",value:function(e){var t=k.a.map(k.a.filter(this.props.colors,function(t){return t.id!==e.id}),function(e){return e.hex});this.props.removeColor(e),this.props.history.push("?".concat(A(t)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"lumicolors-tool"},r.a.createElement(W,{addOrUpdateColor:this.addOrUpdateColor,colors:this.props.colors,removeColumn:this.removeColumn}),r.a.createElement(U,{colors:this.props.colors}))}}]),t}(o.Component),z=Object(m.connect)(function(e){return{colors:e.colors}},N)(J),H=(a(262),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.Provider,{store:f},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{path:"/",component:z}))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(265)},98:function(e,t,a){}},[[93,2,1]]]);
//# sourceMappingURL=main.171f01bd.chunk.js.map