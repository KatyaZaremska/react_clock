(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),s=n(5),i=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(){return(new Date).toUTCString().slice(-12,-4)},h=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={today:m()},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:m()}),console.info(t.state.today)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(l.Component);function k(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("mouseup",(function(e){0===e.button&&t.setState({hasClock:!0})})),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),this.timerId=window.setInterval((function(){t.setState({clockName:k()})}),3300)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(h,{clockName:e})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1262882c.chunk.js.map