!function(e){function s(t){if(r[t])return r[t].exports;var n=r[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}this.webpackChunk=function(s,r){for(var n in r)e[n]=r[n];for(;s.length;)t[s.pop()]=1};var r={},t={0:1};return s.e=function(e,r){t[e]||importScripts(""+e+".27127970a16e348f3ab1.worker.js"),r.call(null,s)},s.m=e,s.c=r,s.p="",s(0)}([function(e,s,r){r.e(1,function(e){var s=[e(1),e(11)];(function(e,s){return self.addEventListener("message",function(r){var t,n,a,p;return p=r.data,"password"===p.cmd?self.password=p.password:"apps"===p.cmd?(t=p.apps,a=!1,n=t.map(function(r){var t,n,p;return n=r.encryptedSeed.replace(/[\r\n]/g,""),t=e.decryptAES(r.salt,self.password,n),p=null!=t&&s.isBase32(t),p?{decryptedSeed:t,id:r.id}:(a=!0,null)}),a?self.postMessage({cmd:"decryption-failed",result:{message:"Failed to decrypt apps"}}):self.postMessage({cmd:"decryption-successful",result:n}),self.close()):void 0},!1),self.postMessage({cmd:"ready"})}).apply(null,s)})}]);