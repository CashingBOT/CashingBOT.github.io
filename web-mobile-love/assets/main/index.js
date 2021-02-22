System.register("chunks:///_virtual/Main.ts",["cc"],(function(e){"use strict";var t,r,n,i;return{setters:[function(e){t=e.cclegacy,r=e._decorator,n=e.Label,i=e.Component}],execute:function(){var o,a,u,c,s;function l(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){l(o,n,i,a,u,"next",e)}function u(e){l(o,n,i,a,u,"throw",e)}a(void 0)}))}}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t._RF.push({},"2ada2yIz+pOmofj7e/KtY4S","Main",void 0);var b=r.ccclass,y=r.property;e("Main",(o=b("Main"),a=y(n),o((s=function(e,t,r,n,i){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((c=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return p(h(t=e.call.apply(e,[this].concat(n))||this),"lb",s,h(t)),v(h(t),"isFirstShow",!0),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.start=function(){var e=f(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"我可爱的女朋友---CY老师",t="有你陪伴着的每一天，阳光总是那么明媚",r="冬天已经进入尾声了，我却只能回忆起你温暖的拥抱",n="———————From最喜欢你的小沈 :)",e.next=6,this.typeWrite("我可爱的女朋友---CY老师");case 6:return e.next=8,this.typeWrite(t);case 8:return e.next=10,this.typeWrite(r);case 10:this.typeWrite(n);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.typeWrite=function(){var e=f(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isFirstShow){e.next=3;break}return e.next=3,this.sleep();case 3:return e.abrupt("return",new Promise((function(e){r.resetLb();var n=0,i=t.length-1;r.schedule((function(){r.lb.string+=t[n],++n===i&&setTimeout(e,1e3)}),.15,i)})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.resetLb=function(){this.lb.string=""},i.sleep=function(){return this.isFirstShow=!1,new Promise((function(e){setTimeout(e,2e3)}))},n}(i)).prototype,"lb",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=c))||u));t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Main.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});