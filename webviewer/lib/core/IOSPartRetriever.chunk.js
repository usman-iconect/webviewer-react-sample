/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[9],{437:function(Ba,ua,r){r.r(ua);var pa=r(1),ka=r(244);Ba=r(429);r(32);r=r(372);var ma=function(ha){function da(aa,x){var y=ha.call(this,aa,x)||this;y.url=aa;y.range=x;y.status=ka.a.NOT_STARTED;return y}Object(pa.c)(da,ha);da.prototype.start=function(){var aa=document.createElement("IFRAME");aa.setAttribute("src",this.url);document.documentElement.appendChild(aa);aa.parentNode.removeChild(aa);this.status=ka.a.STARTED;this.AC()};
return da}(Ba.ByteRangeRequest);Ba=function(ha){function da(aa,x,y,h){aa=ha.call(this,aa,x,y,h)||this;aa.Tx=ma;return aa}Object(pa.c)(da,ha);da.prototype.Mv=function(aa,x){return aa+"#"+x.start+"&"+(x.stop?x.stop:"")};return da}(Ba["default"]);Object(r.a)(Ba);Object(r.b)(Ba);ua["default"]=Ba}}]);}).call(this || window)