(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7484:function(t){var e,n,i,r,s,u,a,o,f,h,c,l,d,$,m,v,g,y,p,D,M;t.exports=(e="millisecond",n="second",i="minute",r="hour",s="week",u="month",a="quarter",o="year",f="date",h="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},(m={})[$="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},v=function(t){return t instanceof D},g=function t(e,n,i){var r;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();m[s]&&(r=s),n&&(m[s]=n,r=s);var u=e.split("-");if(!r&&u.length>1)return t(u[0])}else{var a=e.name;m[a]=e,r=a}return!i&&r&&($=r),r||!i&&$},y=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},(p={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+d(Math.floor(n/60),2,"0")+":"+d(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:u,y:o,w:s,d:"day",D:f,h:r,m:i,s:n,ms:e,Q:a})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=g,p.i=v,p.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},M=(D=function(){function t(t){this.$L=g(t.locale,null,!0),this.parse(t)}var d=t.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(p.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return p},d.isValid=function(){return this.$d.toString()!==h},d.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.$g=function(t,e,n){return p.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,e){var a=this,h=!!p.u(e)||e,c=p.p(t),l=function(t,e){var n=p.w(a.$u?Date.UTC(a.$y,e,t):new Date(a.$y,e,t),a);return h?n:n.endOf("day")},d=function(t,e){return p.w(a.toDate()[t].apply(a.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),a)},$=this.$W,m=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case o:return h?l(1,0):l(31,11);case u:return h?l(1,m):l(0,m+1);case s:var y=this.$locale().weekStart||0,D=($<y?$+7:$)-y;return l(h?v-D:v+(6-D),m);case"day":case f:return d(g+"Hours",0);case r:return d(g+"Minutes",1);case i:return d(g+"Seconds",2);case n:return d(g+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(t,s){var a,h=p.p(t),c="set"+(this.$u?"UTC":""),l=((a={}).day=c+"Date",a[f]=c+"Date",a[u]=c+"Month",a[o]=c+"FullYear",a[r]=c+"Hours",a[i]=c+"Minutes",a[n]=c+"Seconds",a[e]=c+"Milliseconds",a)[h],d="day"===h?this.$D+(s-this.$W):s;if(h===u||h===o){var $=this.clone().set(f,1);$.$d[l](d),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](d);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[p.p(t)]()},d.add=function(t,e){var a,f=this;t=Number(t);var h=p.p(e),c=function(e){var n=y(f);return p.w(n.date(n.date()+Math.round(e*t)),f)};if(h===u)return this.set(u,this.$M+t);if(h===o)return this.set(o,this.$y+t);if("day"===h)return c(1);if(h===s)return c(7);var l=((a={})[i]=6e4,a[r]=36e5,a[n]=1e3,a)[h]||1,d=this.$d.getTime()+t*l;return p.w(d,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=p.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,c=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return p.s(s%12||12,t,"0")},$=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:p.s(a+1,2,"0"),MMM:c(n.monthsShort,a,f,3),MMMM:c(f,a),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:p.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:p.s(u,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:r};return i.replace(l,function(t,e){return e||m[t]||r.replace(":","")})},d.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},d.diff=function(t,e,f){var h,c=p.p(e),l=y(t),d=(l.utcOffset()-this.utcOffset())*6e4,$=this-l,m=p.m(this,l);return m=((h={})[o]=m/12,h[u]=m,h[a]=m/3,h[s]=($-d)/6048e5,h.day=($-d)/864e5,h[r]=$/36e5,h[i]=$/6e4,h[n]=$/1e3,h)[c]||$,f?m:p.a(m)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},d.clone=function(){return p.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=M,[["$ms",e],["$s",n],["$m",i],["$H",r],["$W","day"],["$M",u],["$y",o],["$D",f]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,D,y),t.$i=!0),y},y.locale=g,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=m[$],y.Ls=m,y.p={},y)},178:function(t){var e,n,i;t.exports=(e="minute",n=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g,function(t,r,s){var u=r.prototype;s.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},u.utc=function(t){var n=s(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},u.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var o=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var f=u.utcOffset;u.utcOffset=function(t,r){var s=this.$utils().u;if(s(t))return this.$u?0:s(this.$offset)?f.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(n);if(!e)return null;var r=(""+e[0]).match(i)||["-",0,0],s=r[0],u=60*+r[1]+ +r[2];return 0===u?0:"+"===s?u:-u}(t)))return this;var u=16>=Math.abs(t)?60*t:t,a=this;if(r)return a.$offset=u,a.$u=0===t,a;if(0!==t){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(u+o,e)).$offset=u,a.$x.$localOffset=o}else a=this.utc();return a};var h=u.format;u.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,e)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var c=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var l=u.diff;u.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var i=this.local(),r=s(t).local();return l.call(i,r,e,n)}})},7801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(2258)}])},2258:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d}});var i=n(5893),r=n(3544),s=n(7484),u=n.n(s),a=n(178),o=n.n(a),f=n(2066),h=n(300);u().extend(o());let c=t=>(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(l,{...t}),(0,i.jsx)("div",{className:"sticky top-[100vh]",children:(0,i.jsx)(f.Z,{})})]}),l=t=>{let e=t=>"/blog/"+t.replace(/\.mdx?$/,"").replace(/^[^_]+_/,"");return(0,i.jsxs)("article",{className:"container mx-auto px-5 prose",children:[(0,i.jsx)("h1",{className:" dark:text-gray-300",children:"Blog"}),(0,i.jsx)("section",{children:(0,i.jsx)("ul",{children:t.posts.map(t=>t.published?(0,i.jsx)("li",{children:(0,i.jsxs)("span",{className:"dark:text-gray-500",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)("a",{className:"dark:text-gray-500",href:e(t.id),children:t.title}),(0,i.jsx)("span",{children:t.created_at})]})},t.id):(0,i.jsx)(i.Fragment,{}))})})]})};var d=!0;e.default=(0,r.withSuperJSONPage)(c)}},function(t){t.O(0,[487,544,836,774,888,179],function(){return t(t.s=7801)}),_N_E=t.O()}]);