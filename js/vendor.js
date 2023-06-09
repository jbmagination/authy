_xamzrequire=function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof _xamzrequire&&_xamzrequire;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return i(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof _xamzrequire&&_xamzrequire,s=0;s<n.length;s++)i(n[s]);return i}({25:[function(t,e,r){var n={util:t("./util")},i={};i.toString(),e.exports=n,n.util.update(n,{VERSION:"2.5.4",Signers:{},Protocol:{Json:t("./protocol/json"),Query:t("./protocol/query"),Rest:t("./protocol/rest"),RestJson:t("./protocol/rest_json"),RestXml:t("./protocol/rest_xml")},XML:{Builder:t("./xml/builder"),Parser:null},JSON:{Builder:t("./json/builder"),Parser:t("./json/parser")},Model:{Api:t("./model/api"),Operation:t("./model/operation"),Shape:t("./model/shape"),Paginator:t("./model/paginator"),ResourceWaiter:t("./model/resource_waiter")},util:t("./util"),apiLoader:function(){throw new Error("No API loader set")}}),t("./service"),t("./credentials"),t("./credentials/credential_provider_chain"),t("./credentials/temporary_credentials"),t("./credentials/web_identity_credentials"),t("./credentials/cognito_identity_credentials"),t("./credentials/saml_credentials"),t("./config"),t("./http"),t("./sequential_executor"),t("./event_listeners"),t("./request"),t("./response"),t("./resource_waiter"),t("./signers/request_signer"),t("./param_validator"),n.events=new n.SequentialExecutor},{"./config":24,"./credentials":26,"./credentials/cognito_identity_credentials":27,"./credentials/credential_provider_chain":28,"./credentials/saml_credentials":29,"./credentials/temporary_credentials":30,"./credentials/web_identity_credentials":31,"./event_listeners":37,"./http":38,"./json/builder":40,"./json/parser":41,"./model/api":42,"./model/operation":44,"./model/paginator":45,"./model/resource_waiter":46,"./model/shape":47,"./param_validator":48,"./protocol/json":49,"./protocol/query":50,"./protocol/rest":51,"./protocol/rest_json":52,"./protocol/rest_xml":53,"./request":57,"./resource_waiter":58,"./response":59,"./sequential_executor":61,"./service":62,"./signers/request_signer":78,"./util":85,"./xml/builder":87}],87:[function(t,e,r){function n(){}function i(t,e,r){switch(r.type){case"structure":return o(t,e,r);case"map":return s(t,e,r);case"list":return a(t,e,r);default:return u(t,e,r)}}function o(t,e,r){l.arrayEach(r.memberNames,function(n){var o=r.members[n];if("body"===o.location){var s=e[n],a=o.name;if(void 0!==s&&null!==s)if(o.isXmlAttribute)t.att(a,s);else if(o.flattened)i(t,s,o);else{var u=t.ele(a);c(u,o),i(u,s,o)}}})}function s(t,e,r){var n=r.key.name||"key",o=r.value.name||"value";l.each(e,function(e,s){var a=t.ele(r.flattened?r.name:"entry");i(a.ele(n),e,r.key),i(a.ele(o),s,r.value)})}function a(t,e,r){r.flattened?l.arrayEach(e,function(e){var n=r.member.name||r.name,o=t.ele(n);i(o,e,r.member)}):l.arrayEach(e,function(e){var n=r.member.name||"member",o=t.ele(n);i(o,e,r.member)})}function u(t,e,r){t.txt(r.toWireFormat(e))}function c(t,e){var r,n="xmlns";e.xmlNamespaceUri?(r=e.xmlNamespaceUri,e.xmlNamespacePrefix&&(n+=":"+e.xmlNamespacePrefix)):t.isRoot&&e.api.xmlNamespaceUri&&(r=e.api.xmlNamespaceUri),r&&t.att(n,r)}var l=t("../util"),h=t("xmlbuilder");n.prototype.toXML=function(t,e,r,n){var o=h.create(r);return c(o,e),i(o,t,e),o.children.length>0||n?o.root().toString():""},e.exports=n},{"../util":85,xmlbuilder:105}],105:[function(t,e,r){(function(){var r,n;n=t("lodash/object/assign"),r=t("./XMLBuilder"),e.exports.create=function(t,e,i,o){return o=n({},e,i,o),new r(t,o).root()}}).call(this)},{"./XMLBuilder":90,"lodash/object/assign":147}],147:[function(t,e,r){var n=t("../internal/baseAssign"),i=t("../internal/createAssigner"),o=i(n);e.exports=o},{"../internal/baseAssign":108,"../internal/createAssigner":126}],126:[function(t,e,r){function n(t){return function(){var e=arguments,r=e.length,n=e[0];if(2>r||null==n)return n;var s=e[r-2],a=e[r-1],u=e[3];r>3&&"function"==typeof s?(s=i(s,a,5),r-=2):(s=r>2&&"function"==typeof a?a:null,r-=s?1:0),u&&o(e[1],e[2],u)&&(s=3==r?null:s,r=2);for(var c=0;++c<r;){var l=e[c];l&&t(n,l,s)}return n}}var i=t("./bindCallback"),o=t("./isIterateeCall");e.exports=n},{"./bindCallback":125,"./isIterateeCall":132}],108:[function(t,e,r){function n(t,e,r){var n=o(e);if(!r)return i(e,t,n);for(var s=-1,a=n.length;++s<a;){var u=n[s],c=t[u],l=r(c,e[u],u,t,e);(l===l?l===c:c!==c)&&("undefined"!=typeof c||u in t)||(t[u]=l)}return t}var i=t("./baseCopy"),o=t("../object/keys");e.exports=n},{"../object/keys":149,"./baseCopy":110}],90:[function(t,e,r){(function(){var r,n,i,o,s;s=t("./XMLStringifier"),n=t("./XMLDeclaration"),i=t("./XMLDocType"),o=t("./XMLElement"),e.exports=r=function(){function t(t,e){var r,n;if(null==t)throw new Error("Root element needs a name");null==e&&(e={}),this.options=e,this.stringify=new s(e),n=new o(this,"doc"),r=n.element(t),r.isRoot=!0,r.documentObject=this,this.rootObject=r,e.headless||(r.declaration(e),(null!=e.pubID||null!=e.sysID)&&r.doctype(e))}return t.prototype.root=function(){return this.rootObject},t.prototype.end=function(t){return this.toString(t)},t.prototype.toString=function(t){var e,r,n,i,o,s,a,u;return i=(null!=t?t.pretty:void 0)||!1,e=null!=(s=null!=t?t.indent:void 0)?s:"  ",n=null!=(a=null!=t?t.offset:void 0)?a:0,r=null!=(u=null!=t?t.newline:void 0)?u:"\n",o="",null!=this.xmldec&&(o+=this.xmldec.toString(t)),null!=this.doctype&&(o+=this.doctype.toString(t)),o+=this.rootObject.toString(t),i&&o.slice(-r.length)===r&&(o=o.slice(0,-r.length)),o},t}()}).call(this)},{"./XMLDeclaration":97,"./XMLDocType":98,"./XMLElement":99,"./XMLStringifier":103}],103:[function(t,e,r){(function(){var t,r=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty;e.exports=t=function(){function t(t){this.assertLegalChar=r(this.assertLegalChar,this);var e,i,o;this.allowSurrogateChars=null!=t?t.allowSurrogateChars:void 0,i=(null!=t?t.stringify:void 0)||{};for(e in i)n.call(i,e)&&(o=i[e],this[e]=o)}return t.prototype.eleName=function(t){return t=""+t||"",this.assertLegalChar(t)},t.prototype.eleText=function(t){return t=""+t||"",this.assertLegalChar(this.elEscape(t))},t.prototype.cdata=function(t){if(t=""+t||"",t.match(/]]>/))throw new Error("Invalid CDATA text: "+t);return this.assertLegalChar(t)},t.prototype.comment=function(t){if(t=""+t||"",t.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+t);return this.assertLegalChar(t)},t.prototype.raw=function(t){return""+t||""},t.prototype.attName=function(t){return""+t||""},t.prototype.attValue=function(t){return t=""+t||"",this.attEscape(t)},t.prototype.insTarget=function(t){return""+t||""},t.prototype.insValue=function(t){if(t=""+t||"",t.match(/\?>/))throw new Error("Invalid processing instruction value: "+t);return t},t.prototype.xmlVersion=function(t){if(t=""+t||"",!t.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+t);return t},t.prototype.xmlEncoding=function(t){if(t=""+t||"",!t.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/))throw new Error("Invalid encoding: "+t);return t},t.prototype.xmlStandalone=function(t){return t?"yes":"no"},t.prototype.dtdPubID=function(t){return""+t||""},t.prototype.dtdSysID=function(t){return""+t||""},t.prototype.dtdElementValue=function(t){return""+t||""},t.prototype.dtdAttType=function(t){return""+t||""},t.prototype.dtdAttDefault=function(t){return null!=t?""+t||"":t},t.prototype.dtdEntityValue=function(t){return""+t||""},t.prototype.dtdNData=function(t){return""+t||""},t.prototype.convertAttKey="@",t.prototype.convertPIKey="?",t.prototype.convertTextKey="#text",t.prototype.convertCDataKey="#cdata",t.prototype.convertCommentKey="#comment",t.prototype.convertRawKey="#raw",t.prototype.convertListKey="#list",t.prototype.assertLegalChar=function(t){var e,r;if(e=this.allowSurrogateChars?/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/:/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/,r=t.match(e))throw new Error("Invalid character ("+r+") in string: "+t+" at index "+r.index);return t},t.prototype.elEscape=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")},t.prototype.attEscape=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;")},t}()}).call(this)},{}],97:[function(t,e,r){(function(){var r,n,i,o,s=function(t,e){function r(){this.constructor=t}for(var n in e)a.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},a={}.hasOwnProperty;i=t("lodash/object/create"),o=t("lodash/lang/isObject"),n=t("./XMLNode"),e.exports=r=function(t){function e(t,r,n,i){var s;e.__super__.constructor.call(this,t),o(r)&&(s=r,r=s.version,n=s.encoding,i=s.standalone),r||(r="1.0"),null!=r&&(this.version=this.stringify.xmlVersion(r)),null!=n&&(this.encoding=this.stringify.xmlEncoding(n)),null!=i&&(this.standalone=this.stringify.xmlStandalone(i))}return s(e,t),e.prototype.clone=function(){return i(e.prototype,this)},e.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<?xml",null!=this.version&&(s+=' version="'+this.version+'"'),null!=this.encoding&&(s+=' encoding="'+this.encoding+'"'),null!=this.standalone&&(s+=' standalone="'+this.standalone+'"'),s+="?>",o&&(s+=n),s},e}(n)}).call(this)},{"./XMLNode":100,"lodash/lang/isObject":144,"lodash/object/create":148}],100:[function(t,e,r){(function(){var r,n,i,o,s,a,u,c,l,h,p,f,d={}.hasOwnProperty;f=t("lodash/lang/isObject"),l=t("lodash/lang/isArray"),p=t("lodash/lang/isFunction"),h=t("lodash/lang/isEmpty"),s=null,r=null,n=null,i=null,o=null,u=null,c=null,e.exports=a=function(){function e(e){this.parent=e,this.options=this.parent.options,this.stringify=this.parent.stringify,null===s&&(s=t("./XMLElement"),r=t("./XMLCData"),n=t("./XMLComment"),i=t("./XMLDeclaration"),o=t("./XMLDocType"),u=t("./XMLRaw"),c=t("./XMLText"))}return e.prototype.clone=function(){throw new Error("Cannot clone generic XMLNode")},e.prototype.element=function(t,e,r){var n,i,o,s,a,u,c;if(s=null,null==e&&(e={}),e=e.valueOf(),f(e)||(u=[e,r],r=u[0],e=u[1]),null!=t&&(t=t.valueOf()),l(t))for(i=0,a=t.length;a>i;i++)n=t[i],s=this.element(n);else if(p(t))s=this.element(t.apply());else if(f(t))for(o in t)d.call(t,o)&&(c=t[o],p(c)&&(c=c.apply()),f(c)&&h(c)&&(c=null),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===o.indexOf(this.stringify.convertAttKey)?s=this.attribute(o.substr(this.stringify.convertAttKey.length),c):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===o.indexOf(this.stringify.convertPIKey)?s=this.instruction(o.substr(this.stringify.convertPIKey.length),c):f(c)?!this.options.ignoreDecorators&&this.stringify.convertListKey&&0===o.indexOf(this.stringify.convertListKey)&&l(c)?s=this.element(c):(s=this.element(o),s.element(c)):s=this.element(o,c));else s=!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===t.indexOf(this.stringify.convertTextKey)?this.text(r):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===t.indexOf(this.stringify.convertCDataKey)?this.cdata(r):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===t.indexOf(this.stringify.convertCommentKey)?this.comment(r):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===t.indexOf(this.stringify.convertRawKey)?this.raw(r):this.node(t,e,r);if(null==s)throw new Error("Could not create any elements with: "+t);return s},e.prototype.insertBefore=function(t,e,r){var n,i,o;if(this.isRoot)throw new Error("Cannot insert elements at root level");return i=this.parent.children.indexOf(this),o=this.parent.children.splice(i),n=this.parent.element(t,e,r),Array.prototype.push.apply(this.parent.children,o),n},e.prototype.insertAfter=function(t,e,r){var n,i,o;if(this.isRoot)throw new Error("Cannot insert elements at root level");return i=this.parent.children.indexOf(this),o=this.parent.children.splice(i+1),n=this.parent.element(t,e,r),Array.prototype.push.apply(this.parent.children,o),n},e.prototype.remove=function(){var t,e;if(this.isRoot)throw new Error("Cannot remove the root element");return t=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[t,t-t+1].concat(e=[])),e,this.parent},e.prototype.node=function(t,e,r){var n,i;return null!=t&&(t=t.valueOf()),null==e&&(e={}),e=e.valueOf(),f(e)||(i=[e,r],r=i[0],e=i[1]),n=new s(this,t,e),null!=r&&n.text(r),this.children.push(n),n},e.prototype.text=function(t){var e;return e=new c(this,t),this.children.push(e),this},e.prototype.cdata=function(t){var e;return e=new r(this,t),this.children.push(e),this},e.prototype.comment=function(t){var e;return e=new n(this,t),this.children.push(e),this},e.prototype.raw=function(t){var e;return e=new u(this,t),this.children.push(e),this},e.prototype.declaration=function(t,e,r){var n,o;return n=this.document(),o=new i(n,t,e,r),n.xmldec=o,n.root()},e.prototype.doctype=function(t,e){var r,n;return r=this.document(),n=new o(r,t,e),r.doctype=n,n},e.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},e.prototype.root=function(){var t;if(this.isRoot)return this;for(t=this.parent;!t.isRoot;)t=t.parent;return t},e.prototype.document=function(){return this.root().documentObject},e.prototype.end=function(t){return this.document().toString(t)},e.prototype.prev=function(){var t;if(this.isRoot)throw new Error("Root node has no siblings");if(t=this.parent.children.indexOf(this),1>t)throw new Error("Already at the first node");return this.parent.children[t-1]},e.prototype.next=function(){var t;if(this.isRoot)throw new Error("Root node has no siblings");if(t=this.parent.children.indexOf(this),-1===t||t===this.parent.children.length-1)throw new Error("Already at the last node");return this.parent.children[t+1]},e.prototype.importXMLBuilder=function(t){var e;return e=t.root().clone(),e.parent=this,e.isRoot=!1,this.children.push(e),this},e.prototype.ele=function(t,e,r){return this.element(t,e,r)},e.prototype.nod=function(t,e,r){return this.node(t,e,r)},e.prototype.txt=function(t){return this.text(t)},e.prototype.dat=function(t){return this.cdata(t)},e.prototype.com=function(t){return this.comment(t)},e.prototype.doc=function(){return this.document()},e.prototype.dec=function(t,e,r){return this.declaration(t,e,r)},e.prototype.dtd=function(t,e){return this.doctype(t,e)},e.prototype.e=function(t,e,r){return this.element(t,e,r)},e.prototype.n=function(t,e,r){return this.node(t,e,r)},e.prototype.t=function(t){return this.text(t)},e.prototype.d=function(t){return this.cdata(t)},e.prototype.c=function(t){return this.comment(t)},e.prototype.r=function(t){return this.raw(t)},e.prototype.u=function(){return this.up()},e}()}).call(this)},{"./XMLCData":91,"./XMLComment":92,"./XMLDeclaration":97,"./XMLDocType":98,"./XMLElement":99,"./XMLRaw":102,"./XMLText":104,"lodash/lang/isArray":140,"lodash/lang/isEmpty":141,"lodash/lang/isFunction":142,"lodash/lang/isObject":144}],141:[function(t,e,r){function n(t){if(null==t)return!0;var e=t.length;return a(e)&&(o(t)||c(t)||i(t)||u(t)&&s(t.splice))?!e:!l(t).length}var i=t("./isArguments"),o=t("./isArray"),s=t("./isFunction"),a=t("../internal/isLength"),u=t("../internal/isObjectLike"),c=t("./isString"),l=t("../object/keys");e.exports=n},{"../internal/isLength":133,"../internal/isObjectLike":134,"../object/keys":149,"./isArguments":139,"./isArray":140,"./isFunction":142,"./isString":145}],145:[function(t,e,r){function n(t){return"string"==typeof t||i(t)&&a.call(t)==o||!1}var i=t("../internal/isObjectLike"),o="[object String]",s=Object.prototype,a=s.toString;e.exports=n},{"../internal/isObjectLike":134}],104:[function(t,e,r){(function(){var r,n,i,o=function(t,e){function r(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=t("lodash/object/create"),r=t("./XMLNode"),e.exports=n=function(t){function e(t,r){if(e.__super__.constructor.call(this,t),null==r)throw new Error("Missing element text");this.value=this.stringify.eleText(r)}return o(e,t),e.prototype.clone=function(){return i(e.prototype,this)},e.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+=this.value,o&&(s+=n),s},e}(r)}).call(this)},{"./XMLNode":100,"lodash/object/create":148}],102:[function(t,e,r){(function(){var r,n,i,o=function(t,e){function r(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=t("lodash/object/create"),r=t("./XMLNode"),e.exports=n=function(t){function e(t,r){if(e.__super__.constructor.call(this,t),null==r)throw new Error("Missing raw text");this.value=this.stringify.raw(r)}return o(e,t),e.prototype.clone=function(){return i(e.prototype,this)},e.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+=this.value,o&&(s+=n),s},e}(r)}).call(this)},{"./XMLNode":100,"lodash/object/create":148}],99:[function(t,e,r){(function(){var r,n,i,o,s,a,u,c,l,h=function(t,e){function r(){this.constructor=t}for(var n in e)p.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=t("lodash/object/create"),l=t("lodash/lang/isObject"),u=t("lodash/lang/isArray"),c=t("lodash/lang/isFunction"),a=t("lodash/collection/every"),i=t("./XMLNode"),r=t("./XMLAttribute"),o=t("./XMLProcessingInstruction"),e.exports=n=function(t){function e(t,r,n){if(e.__super__.constructor.call(this,t),null==r)throw new Error("Missing element name");this.name=this.stringify.eleName(r),this.children=[],this.instructions=[],this.attributes={},null!=n&&this.attribute(n)}return h(e,t),e.prototype.clone=function(){var t,r,n,i,o,a,u,c;n=s(e.prototype,this),n.isRoot&&(n.documentObject=null),n.attributes={},u=this.attributes;for(r in u)p.call(u,r)&&(t=u[r],n.attributes[r]=t.clone());for(n.instructions=[],c=this.instructions,i=0,o=c.length;o>i;i++)a=c[i],n.instructions.push(a.clone());return n.children=[],this.children.forEach(function(t){var e;return e=t.clone(),e.parent=n,n.children.push(e)}),n},e.prototype.attribute=function(t,e){var n,i;if(null!=t&&(t=t.valueOf()),l(t))for(n in t)p.call(t,n)&&(i=t[n],this.attribute(n,i));else c(e)&&(e=e.apply()),this.options.skipNullAttributes&&null==e||(this.attributes[t]=new r(this,t,e));return this},e.prototype.removeAttribute=function(t){var e,r,n;if(null==t)throw new Error("Missing attribute name");if(t=t.valueOf(),u(t))for(r=0,n=t.length;n>r;r++)e=t[r],delete this.attributes[e];else delete this.attributes[t];return this},e.prototype.instruction=function(t,e){var r,n,i,s,a;if(null!=t&&(t=t.valueOf()),null!=e&&(e=e.valueOf()),u(t))for(r=0,a=t.length;a>r;r++)n=t[r],this.instruction(n);else if(l(t))for(n in t)p.call(t,n)&&(i=t[n],this.instruction(n,i));else c(e)&&(e=e.apply()),s=new o(this,t,e),this.instructions.push(s);return this},e.prototype.toString=function(t,e){var r,n,i,o,s,u,c,l,h,f,d,y,m,v,g,b,w,E,_,x;for(y=(null!=t?t.pretty:void 0)||!1,o=null!=(v=null!=t?t.indent:void 0)?v:"  ",d=null!=(g=null!=t?t.offset:void 0)?g:0,f=null!=(b=null!=t?t.newline:void 0)?b:"\n",e||(e=0),x=new Array(e+d+1).join(o),m="",w=this.instructions,i=0,c=w.length;c>i;i++)s=w[i],m+=s.toString(t,e+1);y&&(m+=x),m+="<"+this.name,E=this.attributes;for(h in E)p.call(E,h)&&(r=E[h],m+=r.toString(t));if(0===this.children.length||a(this.children,function(t){return""===t.value}))m+="/>",y&&(m+=f);else if(y&&1===this.children.length&&null!=this.children[0].value)m+=">",m+=this.children[0].value,m+="</"+this.name+">",m+=f;else{for(m+=">",y&&(m+=f),_=this.children,u=0,l=_.length;l>u;u++)n=_[u],m+=n.toString(t,e+1);y&&(m+=x),m+="</"+this.name+">",y&&(m+=f)}return m},e.prototype.att=function(t,e){return this.attribute(t,e)},e.prototype.ins=function(t,e){return this.instruction(t,e)},e.prototype.a=function(t,e){return this.attribute(t,e)},e.prototype.i=function(t,e){return this.instruction(t,e)},e}(i)}).call(this)},{"./XMLAttribute":89,"./XMLNode":100,"./XMLProcessingInstruction":101,"lodash/collection/every":106,"lodash/lang/isArray":140,"lodash/lang/isFunction":142,"lodash/lang/isObject":144,"lodash/object/create":148}],142:[function(t,e,r){(function(r){var n=t("../internal/baseIsFunction"),i=t("./isNative"),o="[object Function]",s=Object.prototype,a=s.toString,u=i(u=r.Uint8Array)&&u,c=n(/x/)||u&&!n(u)?function(t){return a.call(t)==o}:n;e.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../internal/baseIsFunction":118,"./isNative":143}],118:[function(t,e,r){function n(t){return"function"==typeof t||!1}e.exports=n},{}],106:[function(t,e,r){function n(t,e,r){var n=a(t)?i:s;return("function"!=typeof e||"undefined"!=typeof r)&&(e=o(e,r,3)),n(t,e)}var i=t("../internal/arrayEvery"),o=t("../internal/baseCallback"),s=t("../internal/baseEvery"),a=t("../lang/isArray");e.exports=n},{"../internal/arrayEvery":107,"../internal/baseCallback":109,"../internal/baseEvery":113,"../lang/isArray":140}],113:[function(t,e,r){function n(t,e){var r=!0;return i(t,function(t,n,i){return r=!!e(t,n,i)}),r}var i=t("./baseEach");e.exports=n},{"./baseEach":112}],112:[function(t,e,r){function n(t,e){var r=t?t.length:0;if(!o(r))return i(t,e);for(var n=-1,a=s(t);++n<r&&e(a[n],n,a)!==!1;);return t}var i=t("./baseForOwn"),o=t("./isLength"),s=t("./toObject");e.exports=n},{"./baseForOwn":115,"./isLength":133,"./toObject":138}],115:[function(t,e,r){function n(t,e){return i(t,e,o)}var i=t("./baseFor"),o=t("../object/keys");e.exports=n},{"../object/keys":149,"./baseFor":114}],114:[function(t,e,r){function n(t,e,r){for(var n=-1,o=i(t),s=r(t),a=s.length;++n<a;){var u=s[n];if(e(o[u],u,o)===!1)break}return t}var i=t("./toObject");e.exports=n},{"./toObject":138}],138:[function(t,e,r){function n(t){return i(t)?t:Object(t)}var i=t("../lang/isObject");e.exports=n},{"../lang/isObject":144}],109:[function(t,e,r){function n(t,e,r){var n=typeof t;return"function"==n?"undefined"!=typeof e&&c(t)?a(t,e,r):t:null==t?u:"object"==n?i(t):"undefined"==typeof e?s(t+""):o(t+"",e)}var i=t("./baseMatches"),o=t("./baseMatchesProperty"),s=t("./baseProperty"),a=t("./bindCallback"),u=t("../utility/identity"),c=t("./isBindable");e.exports=n},{"../utility/identity":153,"./baseMatches":120,"./baseMatchesProperty":121,"./baseProperty":122,"./bindCallback":125,"./isBindable":130}],130:[function(t,e,r){function n(t){var e=!(s.funcNames?t.name:s.funcDecomp);if(!e){var r=c.call(t);s.funcNames||(e=!a.test(r)),e||(e=u.test(r)||o(t),i(t,e))}return e}var i=t("./baseSetData"),o=t("../lang/isNative"),s=t("../support"),a=/^\s*function[ \n\r\t]+\w/,u=/\bthis\b/,c=Function.prototype.toString;e.exports=n},{"../lang/isNative":143,"../support":152,"./baseSetData":123}],123:[function(t,e,r){var n=t("../utility/identity"),i=t("./metaMap"),o=i?function(t,e){return i.set(t,e),t}:n;e.exports=o},{"../utility/identity":153,"./metaMap":136}],136:[function(t,e,r){(function(r){var n=t("../lang/isNative"),i=n(i=r.WeakMap)&&i,o=i&&new i;e.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lang/isNative":143}],125:[function(t,e,r){function n(t,e,r){if("function"!=typeof t)return i;if("undefined"==typeof e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 3:return function(r,n,i){return t.call(e,r,n,i)};case 4:return function(r,n,i,o){return t.call(e,r,n,i,o)};case 5:return function(r,n,i,o,s){return t.call(e,r,n,i,o,s)}}return function(){return t.apply(e,arguments)}}var i=t("../utility/identity");e.exports=n},{"../utility/identity":153}],153:[function(t,e,r){function n(t){return t}e.exports=n},{}],122:[function(t,e,r){function n(t){return function(e){return null==e?void 0:e[t]}}e.exports=n},{}],121:[function(t,e,r){function n(t,e){return o(e)?function(r){return null!=r&&r[t]===e}:function(r){return null!=r&&i(e,r[t],null,!0)}}var i=t("./baseIsEqual"),o=t("./isStrictComparable");e.exports=n},{"./baseIsEqual":116,"./isStrictComparable":135}],120:[function(t,e,r){function n(t){var e=s(t),r=e.length;if(1==r){var n=e[0],a=t[n];if(o(a))return function(t){return null!=t&&t[n]===a&&u.call(t,n)}}for(var c=Array(r),l=Array(r);r--;)a=t[e[r]],c[r]=a,l[r]=o(a);return function(t){return i(t,e,c,l)}}var i=t("./baseIsMatch"),o=t("./isStrictComparable"),s=t("../object/keys"),a=Object.prototype,u=a.hasOwnProperty;e.exports=n},{"../object/keys":149,"./baseIsMatch":119,"./isStrictComparable":135}],135:[function(t,e,r){function n(t){return t===t&&(0===t?1/t>0:!i(t))}var i=t("../lang/isObject");e.exports=n},{"../lang/isObject":144}],119:[function(t,e,r){function n(t,e,r,n,o){var a=e.length;if(null==t)return!a;for(var u=-1,c=!o;++u<a;)if(c&&n[u]?r[u]!==t[e[u]]:!s.call(t,e[u]))return!1;for(u=-1;++u<a;){var l=e[u];if(c&&n[u])var h=s.call(t,l);else{var p=t[l],f=r[u];h=o?o(p,f,l):void 0,"undefined"==typeof h&&(h=i(f,p,o,!0))}if(!h)return!1}return!0}var i=t("./baseIsEqual"),o=Object.prototype,s=o.hasOwnProperty;e.exports=n},{"./baseIsEqual":116}],116:[function(t,e,r){function n(t,e,r,o,s,a){if(t===e)return 0!==t||1/t==1/e;var u=typeof t,c=typeof e;return"function"!=u&&"object"!=u&&"function"!=c&&"object"!=c||null==t||null==e?t!==t&&e!==e:i(t,e,n,r,o,s,a)}var i=t("./baseIsEqualDeep");e.exports=n},{"./baseIsEqualDeep":117}],117:[function(t,e,r){function n(t,e,r,n,p,y,m){var v=a(t),g=a(e),b=l,w=l;v||(b=d.call(t),b==c?b=h:b!=h&&(v=u(t))),g||(w=d.call(e),w==c?w=h:w!=h&&(g=u(e)));var E=b==h,_=w==h,x=b==w;if(x&&!v&&!E)return o(t,e,b);var S=E&&f.call(t,"__wrapped__"),A=_&&f.call(e,"__wrapped__");if(S||A)return r(S?t.value():t,A?e.value():e,n,p,y,m);if(!x)return!1;y||(y=[]),m||(m=[]);for(var R=y.length;R--;)if(y[R]==t)return m[R]==e;y.push(t),m.push(e);var C=(v?i:s)(t,e,r,n,p,y,m);return y.pop(),m.pop(),C}var i=t("./equalArrays"),o=t("./equalByTag"),s=t("./equalObjects"),a=t("../lang/isArray"),u=t("../lang/isTypedArray"),c="[object Arguments]",l="[object Array]",h="[object Object]",p=Object.prototype,f=p.hasOwnProperty,d=p.toString;e.exports=n},{"../lang/isArray":140,"../lang/isTypedArray":146,"./equalArrays":127,"./equalByTag":128,"./equalObjects":129}],146:[function(t,e,r){function n(t){return o(t)&&i(t.length)&&I[j.call(t)]||!1}var i=t("../internal/isLength"),o=t("../internal/isObjectLike"),s="[object Arguments]",a="[object Array]",u="[object Boolean]",c="[object Date]",l="[object Error]",h="[object Function]",p="[object Map]",f="[object Number]",d="[object Object]",y="[object RegExp]",m="[object Set]",v="[object String]",g="[object WeakMap]",b="[object ArrayBuffer]",w="[object Float32Array]",E="[object Float64Array]",_="[object Int8Array]",x="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",R="[object Uint8ClampedArray]",C="[object Uint16Array]",T="[object Uint32Array]",I={};I[w]=I[E]=I[_]=I[x]=I[S]=I[A]=I[R]=I[C]=I[T]=!0,I[s]=I[a]=I[b]=I[u]=I[c]=I[l]=I[h]=I[p]=I[f]=I[d]=I[y]=I[m]=I[v]=I[g]=!1;var L=Object.prototype,j=L.toString;e.exports=n},{"../internal/isLength":133,"../internal/isObjectLike":134}],129:[function(t,e,r){function n(t,e,r,n,o,a,u){var c=i(t),l=c.length,h=i(e),p=h.length;if(l!=p&&!o)return!1;for(var f,d=-1;++d<l;){var y=c[d],m=s.call(e,y);if(m){var v=t[y],g=e[y];m=void 0,n&&(m=o?n(g,v,y):n(v,g,y)),"undefined"==typeof m&&(m=v&&v===g||r(v,g,n,o,a,u))}if(!m)return!1;f||(f="constructor"==y)}if(!f){var b=t.constructor,w=e.constructor;if(b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w))return!1}return!0}var i=t("../object/keys"),o=Object.prototype,s=o.hasOwnProperty;e.exports=n},{"../object/keys":149}],128:[function(t,e,r){function n(t,e,r){switch(r){case i:case o:return+t==+e;case s:return t.name==e.name&&t.message==e.message;case a:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case u:case c:return t==e+""}return!1}var i="[object Boolean]",o="[object Date]",s="[object Error]",a="[object Number]",u="[object RegExp]",c="[object String]";e.exports=n},{}],127:[function(t,e,r){function n(t,e,r,n,i,o,s){var a=-1,u=t.length,c=e.length,l=!0;if(u!=c&&!(i&&c>u))return!1;for(;l&&++a<u;){var h=t[a],p=e[a];if(l=void 0,n&&(l=i?n(p,h,a):n(h,p,a)),"undefined"==typeof l)if(i)for(var f=c;f--&&(p=e[f],!(l=h&&h===p||r(h,p,n,i,o,s))););else l=h&&h===p||r(h,p,n,i,o,s)}return!!l}e.exports=n},{}],107:[function(t,e,r){function n(t,e){for(var r=-1,n=t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}e.exports=n},{}],89:[function(t,e,r){(function(){var r,n;n=t("lodash/object/create"),e.exports=r=function(){function t(t,e,r){if(this.stringify=t.stringify,null==e)throw new Error("Missing attribute name of element "+t.name);if(null==r)throw new Error("Missing attribute value for attribute "+e+" of element "+t.name);this.name=this.stringify.attName(e),this.value=this.stringify.attValue(r)}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){return" "+this.name+'="'+this.value+'"'},t}()}).call(this)},{"lodash/object/create":148}],98:[function(t,e,r){(function(){var r,n,i,o,s,a,u,c,l,h;l=t("lodash/object/create"),h=t("lodash/lang/isObject"),r=t("./XMLCData"),n=t("./XMLComment"),i=t("./XMLDTDAttList"),s=t("./XMLDTDEntity"),o=t("./XMLDTDElement"),a=t("./XMLDTDNotation"),c=t("./XMLProcessingInstruction"),e.exports=u=function(){function t(t,e,r){var n,i;this.documentObject=t,this.stringify=this.documentObject.stringify,this.children=[],h(e)&&(n=e,e=n.pubID,r=n.sysID),null==r&&(i=[e,r],r=i[0],e=i[1]),null!=e&&(this.pubID=this.stringify.dtdPubID(e)),null!=r&&(this.sysID=this.stringify.dtdSysID(r))}return t.prototype.clone=function(){return l(t.prototype,this)},t.prototype.element=function(t,e){var r;return r=new o(this,t,e),this.children.push(r),this},t.prototype.attList=function(t,e,r,n,o){var s;return s=new i(this,t,e,r,n,o),this.children.push(s),this},t.prototype.entity=function(t,e){var r;return r=new s(this,!1,t,e),this.children.push(r),this},t.prototype.pEntity=function(t,e){var r;return r=new s(this,!0,t,e),this.children.push(r),this},t.prototype.notation=function(t,e){var r;return r=new a(this,t,e),this.children.push(r),this},t.prototype.cdata=function(t){var e;return e=new r(this,t),this.children.push(e),this},t.prototype.comment=function(t){var e;return e=new n(this,t),this.children.push(e),this},t.prototype.instruction=function(t,e){var r;return r=new c(this,t,e),this.children.push(r),this},t.prototype.root=function(){return this.documentObject.root()},t.prototype.document=function(){return this.documentObject},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l,h,p,f,d;if(u=(null!=t?t.pretty:void 0)||!1,i=null!=(l=null!=t?t.indent:void 0)?l:"  ",a=null!=(h=null!=t?t.offset:void 0)?h:0,s=null!=(p=null!=t?t.newline:void 0)?p:"\n",e||(e=0),d=new Array(e+a+1).join(i),c="",u&&(c+=d),c+="<!DOCTYPE "+this.root().name,this.pubID&&this.sysID?c+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.sysID&&(c+=' SYSTEM "'+this.sysID+'"'),this.children.length>0){for(c+=" [",u&&(c+=s),f=this.children,n=0,o=f.length;o>n;n++)r=f[n],c+=r.toString(t,e+1);c+="]"}return c+=">",u&&(c+=s),c},t.prototype.ele=function(t,e){return this.element(t,e)},
t.prototype.att=function(t,e,r,n,i){return this.attList(t,e,r,n,i)},t.prototype.ent=function(t,e){return this.entity(t,e)},t.prototype.pent=function(t,e){return this.pEntity(t,e)},t.prototype.not=function(t,e){return this.notation(t,e)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.up=function(){return this.root()},t.prototype.doc=function(){return this.document()},t}()}).call(this)},{"./XMLCData":91,"./XMLComment":92,"./XMLDTDAttList":93,"./XMLDTDElement":94,"./XMLDTDEntity":95,"./XMLDTDNotation":96,"./XMLProcessingInstruction":101,"lodash/lang/isObject":144,"lodash/object/create":148}],101:[function(t,e,r){(function(){var r,n;n=t("lodash/object/create"),e.exports=r=function(){function t(t,e,r){if(this.stringify=t.stringify,null==e)throw new Error("Missing instruction target");this.target=this.stringify.insTarget(e),r&&(this.value=this.stringify.insValue(r))}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<?",s+=this.target,this.value&&(s+=" "+this.value),s+="?>",o&&(s+=n),s},t}()}).call(this)},{"lodash/object/create":148}],96:[function(t,e,r){(function(){var r,n;n=t("lodash/object/create"),e.exports=r=function(){function t(t,e,r){if(this.stringify=t.stringify,null==e)throw new Error("Missing notation name");if(!r.pubID&&!r.sysID)throw new Error("Public or system identifiers are required for an external entity");this.name=this.stringify.eleName(e),null!=r.pubID&&(this.pubID=this.stringify.dtdPubID(r.pubID)),null!=r.sysID&&(this.sysID=this.stringify.dtdSysID(r.sysID))}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<!NOTATION "+this.name,this.pubID&&this.sysID?s+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.pubID?s+=' PUBLIC "'+this.pubID+'"':this.sysID&&(s+=' SYSTEM "'+this.sysID+'"'),s+=">",o&&(s+=n),s},t}()}).call(this)},{"lodash/object/create":148}],95:[function(t,e,r){(function(){var r,n,i;n=t("lodash/object/create"),i=t("lodash/lang/isObject"),e.exports=r=function(){function t(t,e,r,n){if(this.stringify=t.stringify,null==r)throw new Error("Missing entity name");if(null==n)throw new Error("Missing entity value");if(this.pe=!!e,this.name=this.stringify.eleName(r),i(n)){if(!n.pubID&&!n.sysID)throw new Error("Public and/or system identifiers are required for an external entity");if(n.pubID&&!n.sysID)throw new Error("System identifier is required for a public external entity");if(null!=n.pubID&&(this.pubID=this.stringify.dtdPubID(n.pubID)),null!=n.sysID&&(this.sysID=this.stringify.dtdSysID(n.sysID)),null!=n.nData&&(this.nData=this.stringify.dtdNData(n.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity")}else this.value=this.stringify.dtdEntityValue(n)}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<!ENTITY",this.pe&&(s+=" %"),s+=" "+this.name,this.value?s+=' "'+this.value+'"':(this.pubID&&this.sysID?s+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.sysID&&(s+=' SYSTEM "'+this.sysID+'"'),this.nData&&(s+=" NDATA "+this.nData)),s+=">",o&&(s+=n),s},t}()}).call(this)},{"lodash/lang/isObject":144,"lodash/object/create":148}],94:[function(t,e,r){(function(){var r,n,i;n=t("lodash/object/create"),i=t("lodash/lang/isArray"),e.exports=r=function(){function t(t,e,r){if(this.stringify=t.stringify,null==e)throw new Error("Missing DTD element name");r||(r="(#PCDATA)"),i(r)&&(r="("+r.join(",")+")"),this.name=this.stringify.eleName(e),this.value=this.stringify.dtdElementValue(r)}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<!ELEMENT "+this.name+" "+this.value+">",o&&(s+=n),s},t}()}).call(this)},{"lodash/lang/isArray":140,"lodash/object/create":148}],93:[function(t,e,r){(function(){var r,n;n=t("lodash/object/create"),e.exports=r=function(){function t(t,e,r,n,i,o){if(this.stringify=t.stringify,null==e)throw new Error("Missing DTD element name");if(null==r)throw new Error("Missing DTD attribute name");if(!n)throw new Error("Missing DTD attribute type");if(!i)throw new Error("Missing DTD attribute default");if(0!==i.indexOf("#")&&(i="#"+i),!i.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");if(o&&!i.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT");this.elementName=this.stringify.eleName(e),this.attributeName=this.stringify.attName(r),this.attributeType=this.stringify.dtdAttType(n),this.defaultValue=this.stringify.dtdAttDefault(o),this.defaultValueType=i}return t.prototype.clone=function(){return n(t.prototype,this)},t.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<!ATTLIST "+this.elementName+" "+this.attributeName+" "+this.attributeType,"#DEFAULT"!==this.defaultValueType&&(s+=" "+this.defaultValueType),this.defaultValue&&(s+=' "'+this.defaultValue+'"'),s+=">",o&&(s+=n),s},t}()}).call(this)},{"lodash/object/create":148}],92:[function(t,e,r){(function(){var r,n,i,o=function(t,e){function r(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=t("lodash/object/create"),n=t("./XMLNode"),e.exports=r=function(t){function e(t,r){if(e.__super__.constructor.call(this,t),null==r)throw new Error("Missing comment text");this.text=this.stringify.comment(r)}return o(e,t),e.prototype.clone=function(){return i(e.prototype,this)},e.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<!-- "+this.text+" -->",o&&(s+=n),s},e}(n)}).call(this)},{"./XMLNode":100,"lodash/object/create":148}],91:[function(t,e,r){(function(){var r,n,i,o=function(t,e){function r(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},s={}.hasOwnProperty;i=t("lodash/object/create"),n=t("./XMLNode"),e.exports=r=function(t){function e(t,r){if(e.__super__.constructor.call(this,t),null==r)throw new Error("Missing CDATA text");this.text=this.stringify.cdata(r)}return o(e,t),e.prototype.clone=function(){return i(e.prototype,this)},e.prototype.toString=function(t,e){var r,n,i,o,s,a,u,c,l;return o=(null!=t?t.pretty:void 0)||!1,r=null!=(a=null!=t?t.indent:void 0)?a:"  ",i=null!=(u=null!=t?t.offset:void 0)?u:0,n=null!=(c=null!=t?t.newline:void 0)?c:"\n",e||(e=0),l=new Array(e+i+1).join(r),s="",o&&(s+=l),s+="<![CDATA["+this.text+"]]>",o&&(s+=n),s},e}(n)}).call(this)},{"./XMLNode":100,"lodash/object/create":148}],148:[function(t,e,r){function n(t,e,r){var n=o(t);return r&&s(t,e,r)&&(e=null),e?i(e,n,a(e)):n}var i=t("../internal/baseCopy"),o=t("../internal/baseCreate"),s=t("../internal/isIterateeCall"),a=t("./keys");e.exports=n},{"../internal/baseCopy":110,"../internal/baseCreate":111,"../internal/isIterateeCall":132,"./keys":149}],149:[function(t,e,r){var n=t("../internal/isLength"),i=t("../lang/isNative"),o=t("../lang/isObject"),s=t("../internal/shimKeys"),a=i(a=Object.keys)&&a,u=a?function(t){if(t)var e=t.constructor,r=t.length;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&r&&n(r)?s(t):o(t)?a(t):[]}:s;e.exports=u},{"../internal/isLength":133,"../internal/shimKeys":137,"../lang/isNative":143,"../lang/isObject":144}],137:[function(t,e,r){function n(t){for(var e=u(t),r=e.length,n=r&&t.length,l=n&&a(n)&&(o(t)||c.nonEnumArgs&&i(t)),p=-1,f=[];++p<r;){var d=e[p];(l&&s(d,n)||h.call(t,d))&&f.push(d)}return f}var i=t("../lang/isArguments"),o=t("../lang/isArray"),s=t("./isIndex"),a=t("./isLength"),u=t("../object/keysIn"),c=t("../support"),l=Object.prototype,h=l.hasOwnProperty;e.exports=n},{"../lang/isArguments":139,"../lang/isArray":140,"../object/keysIn":150,"../support":152,"./isIndex":131,"./isLength":133}],150:[function(t,e,r){function n(t){if(null==t)return[];u(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(o(t)||c.nonEnumArgs&&i(t))&&e||0;for(var r=t.constructor,n=-1,l="function"==typeof r&&r.prototype===t,p=Array(e),f=e>0;++n<e;)p[n]=n+"";for(var d in t)f&&s(d,e)||"constructor"==d&&(l||!h.call(t,d))||p.push(d);return p}var i=t("../lang/isArguments"),o=t("../lang/isArray"),s=t("../internal/isIndex"),a=t("../internal/isLength"),u=t("../lang/isObject"),c=t("../support"),l=Object.prototype,h=l.hasOwnProperty;e.exports=n},{"../internal/isIndex":131,"../internal/isLength":133,"../lang/isArguments":139,"../lang/isArray":140,"../lang/isObject":144,"../support":152}],152:[function(t,e,r){(function(r){var n=t("./lang/isNative"),i=/\bthis\b/,o=Object.prototype,s=(s=r.window)&&s.document,a=o.propertyIsEnumerable,u={};!function(t){u.funcDecomp=!n(r.WinRTError)&&i.test(function(){return this}),u.funcNames="string"==typeof Function.name;try{u.dom=11===s.createDocumentFragment().nodeType}catch(e){u.dom=!1}try{u.nonEnumArgs=!a.call(arguments,1)}catch(e){u.nonEnumArgs=!0}}(0,0),e.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lang/isNative":143}],140:[function(t,e,r){var n=t("../internal/isLength"),i=t("./isNative"),o=t("../internal/isObjectLike"),s="[object Array]",a=Object.prototype,u=a.toString,c=i(c=Array.isArray)&&c,l=c||function(t){return o(t)&&n(t.length)&&u.call(t)==s||!1};e.exports=l},{"../internal/isLength":133,"../internal/isObjectLike":134,"./isNative":143}],143:[function(t,e,r){function n(t){return null==t?!1:l.call(t)==s?h.test(c.call(t)):o(t)&&a.test(t)||!1}var i=t("../string/escapeRegExp"),o=t("../internal/isObjectLike"),s="[object Function]",a=/^\[object .+?Constructor\]$/,u=Object.prototype,c=Function.prototype.toString,l=u.toString,h=RegExp("^"+i(l).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},{"../internal/isObjectLike":134,"../string/escapeRegExp":151}],151:[function(t,e,r){function n(t){return t=i(t),t&&s.test(t)?t.replace(o,"\\$&"):t}var i=t("../internal/baseToString"),o=/[.*+?^${}()|[\]\/\\]/g,s=RegExp(o.source);e.exports=n},{"../internal/baseToString":124}],124:[function(t,e,r){function n(t){return"string"==typeof t?t:null==t?"":t+""}e.exports=n},{}],139:[function(t,e,r){function n(t){var e=o(t)?t.length:void 0;return i(e)&&u.call(t)==s||!1}var i=t("../internal/isLength"),o=t("../internal/isObjectLike"),s="[object Arguments]",a=Object.prototype,u=a.toString;e.exports=n},{"../internal/isLength":133,"../internal/isObjectLike":134}],134:[function(t,e,r){function n(t){return t&&"object"==typeof t||!1}e.exports=n},{}],132:[function(t,e,r){function n(t,e,r){if(!s(r))return!1;var n=typeof e;if("number"==n)var a=r.length,u=o(a)&&i(e,a);else u="string"==n&&e in r;if(u){var c=r[e];return t===t?t===c:c!==c}return!1}var i=t("./isIndex"),o=t("./isLength"),s=t("../lang/isObject");e.exports=n},{"../lang/isObject":144,"./isIndex":131,"./isLength":133}],133:[function(t,e,r){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&i>=t}var i=Math.pow(2,53)-1;e.exports=n},{}],131:[function(t,e,r){function n(t,e){return t=+t,e=null==e?i:e,t>-1&&t%1==0&&e>t}var i=Math.pow(2,53)-1;e.exports=n},{}],111:[function(t,e,r){(function(r){var n=t("../lang/isObject"),i=function(){function t(){}return function(e){if(n(e)){t.prototype=e;var i=new t;t.prototype=null}return i||r.Object()}}();e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lang/isObject":144}],144:[function(t,e,r){function n(t){var e=typeof t;return"function"==e||t&&"object"==e||!1}e.exports=n},{}],110:[function(t,e,r){function n(t,e,r){r||(r=e,e={});for(var n=-1,i=r.length;++n<i;){var o=r[n];e[o]=t[o]}return e}e.exports=n},{}],78:[function(t,e,r){var n=t("../core"),i=n.util.inherit;n.Signers.RequestSigner=i({constructor:function(t){this.request=t},setServiceClientId:function(t){this.serviceClientId=t},getServiceClientId:function(){return this.serviceClientId}}),n.Signers.RequestSigner.getVersion=function(t){switch(t){case"v2":return n.Signers.V2;case"v3":return n.Signers.V3;case"v4":return n.Signers.V4;case"s3":return n.Signers.S3;case"v3https":return n.Signers.V3Https}throw new Error("Unknown signing version "+t)},t("./v2"),t("./v3"),t("./v3https"),t("./v4"),t("./s3"),t("./presign")},{"../core":25,"./presign":77,"./s3":79,"./v2":80,"./v3":81,"./v3https":82,"./v4":83}],83:[function(t,e,r){var n=t("../core"),i=n.util.inherit,o={},s=[],a=50,u="presigned-expires";n.Signers.V4=i(n.Signers.RequestSigner,{constructor:function(t,e,r){n.Signers.RequestSigner.call(this,t),this.serviceName=e,this.signatureCache=r},algorithm:"AWS4-HMAC-SHA256",addAuthorization:function(t,e){var r=n.util.date.iso8601(e).replace(/[:\-]|\.\d{3}/g,"");this.isPresigned()?this.updateForPresigned(t,r):this.addHeaders(t,r),this.request.headers.Authorization=this.authorization(t,r)},addHeaders:function(t,e){this.request.headers["X-Amz-Date"]=e,t.sessionToken&&(this.request.headers["x-amz-security-token"]=t.sessionToken)},updateForPresigned:function(t,e){var r=this.credentialString(e),i={"X-Amz-Date":e,"X-Amz-Algorithm":this.algorithm,"X-Amz-Credential":t.accessKeyId+"/"+r,"X-Amz-Expires":this.request.headers[u],"X-Amz-SignedHeaders":this.signedHeaders()};t.sessionToken&&(i["X-Amz-Security-Token"]=t.sessionToken),this.request.headers["Content-Type"]&&(i["Content-Type"]=this.request.headers["Content-Type"]),this.request.headers["Content-MD5"]&&(i["Content-MD5"]=this.request.headers["Content-MD5"]),this.request.headers["Cache-Control"]&&(i["Cache-Control"]=this.request.headers["Cache-Control"]),n.util.each.call(this,this.request.headers,function(t,e){if(t!==u&&this.isSignableHeader(t)){var r=t.toLowerCase();0===r.indexOf("x-amz-meta-")?i[r]=e:0===r.indexOf("x-amz-")&&(i[t]=e)}});var o=this.request.path.indexOf("?")>=0?"&":"?";this.request.path+=o+n.util.queryParamsToString(i)},authorization:function(t,e){var r=[],n=this.credentialString(e);return r.push(this.algorithm+" Credential="+t.accessKeyId+"/"+n),r.push("SignedHeaders="+this.signedHeaders()),r.push("Signature="+this.signature(t,e)),r.join(", ")},signature:function(t,e){var r=null,i=this.serviceName+(this.getServiceClientId()?"_"+this.getServiceClientId():"");if(this.signatureCache){var r=o[i];r||(s.push(i),s.length>a&&delete o[s.shift()])}var u=e.substr(0,8);if(!r||r.akid!==t.accessKeyId||r.region!==this.request.region||r.date!==u){var c=t.secretAccessKey,l=n.util.crypto.hmac("AWS4"+c,u,"buffer"),h=n.util.crypto.hmac(l,this.request.region,"buffer"),p=n.util.crypto.hmac(h,this.serviceName,"buffer"),f=n.util.crypto.hmac(p,"aws4_request","buffer");if(!this.signatureCache)return n.util.crypto.hmac(f,this.stringToSign(e),"hex");o[i]={region:this.request.region,date:u,key:f,akid:t.accessKeyId}}var d=o[i].key;return n.util.crypto.hmac(d,this.stringToSign(e),"hex")},stringToSign:function(t){var e=[];return e.push("AWS4-HMAC-SHA256"),e.push(t),e.push(this.credentialString(t)),e.push(this.hexEncodedHash(this.canonicalString())),e.join("\n")},canonicalString:function(){var t=[],e=this.request.pathname();return"s3"!==this.serviceName&&(e=n.util.uriEscapePath(e)),t.push(this.request.method),t.push(e),t.push(this.request.search()),t.push(this.canonicalHeaders()+"\n"),t.push(this.signedHeaders()),t.push(this.hexEncodedBodyHash()),t.join("\n")},canonicalHeaders:function(){var t=[];n.util.each.call(this,this.request.headers,function(e,r){t.push([e,r])}),t.sort(function(t,e){return t[0].toLowerCase()<e[0].toLowerCase()?-1:1});var e=[];return n.util.arrayEach.call(this,t,function(t){var r=t[0].toLowerCase();this.isSignableHeader(r)&&e.push(r+":"+this.canonicalHeaderValues(t[1].toString()))}),e.join("\n")},canonicalHeaderValues:function(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},signedHeaders:function(){var t=[];return n.util.each.call(this,this.request.headers,function(e){e=e.toLowerCase(),this.isSignableHeader(e)&&t.push(e)}),t.sort().join(";")},credentialString:function(t){var e=[];return e.push(t.substr(0,8)),e.push(this.request.region),e.push(this.serviceName),e.push("aws4_request"),e.join("/")},hexEncodedHash:function(t){return n.util.crypto.sha256(t,"hex")},hexEncodedBodyHash:function(){return this.isPresigned()&&"s3"===this.serviceName&&!this.request.body?"UNSIGNED-PAYLOAD":this.request.headers["X-Amz-Content-Sha256"]?this.request.headers["X-Amz-Content-Sha256"]:this.hexEncodedHash(this.request.body||"")},unsignableHeaders:["authorization","content-type","content-length","user-agent",u,"expect"],isSignableHeader:function(t){return 0===t.toLowerCase().indexOf("x-amz-")?!0:this.unsignableHeaders.indexOf(t)<0},isPresigned:function(){return this.request.headers[u]?!0:!1}}),e.exports=n.Signers.V4},{"../core":25}],82:[function(t,e,r){var n=t("../core"),i=n.util.inherit;t("./v3"),n.Signers.V3Https=i(n.Signers.V3,{authorization:function(t){return"AWS3-HTTPS AWSAccessKeyId="+t.accessKeyId+",Algorithm=HmacSHA256,Signature="+this.signature(t)},stringToSign:function(){return this.request.headers["X-Amz-Date"]}}),e.exports=n.Signers.V3Https},{"../core":25,"./v3":81}],81:[function(t,e,r){var n=t("../core"),i=n.util.inherit;n.Signers.V3=i(n.Signers.RequestSigner,{addAuthorization:function(t,e){var r=n.util.date.rfc822(e);this.request.headers["X-Amz-Date"]=r,t.sessionToken&&(this.request.headers["x-amz-security-token"]=t.sessionToken),this.request.headers["X-Amzn-Authorization"]=this.authorization(t,r)},authorization:function(t){return"AWS3 AWSAccessKeyId="+t.accessKeyId+",Algorithm=HmacSHA256,SignedHeaders="+this.signedHeaders()+",Signature="+this.signature(t)},signedHeaders:function(){var t=[];return n.util.arrayEach(this.headersToSign(),function(e){t.push(e.toLowerCase())}),t.sort().join(";")},canonicalHeaders:function(){var t=this.request.headers,e=[];return n.util.arrayEach(this.headersToSign(),function(r){e.push(r.toLowerCase().trim()+":"+String(t[r]).trim())}),e.sort().join("\n")+"\n"},headersToSign:function(){var t=[];return n.util.each(this.request.headers,function(e){("Host"===e||"Content-Encoding"===e||e.match(/^X-Amz/i))&&t.push(e)}),t},signature:function(t){return n.util.crypto.hmac(t.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var t=[];return t.push(this.request.method),t.push("/"),t.push(""),t.push(this.canonicalHeaders()),t.push(this.request.body),n.util.crypto.sha256(t.join("\n"))}}),e.exports=n.Signers.V3},{"../core":25}],80:[function(t,e,r){var n=t("../core"),i=n.util.inherit;n.Signers.V2=i(n.Signers.RequestSigner,{addAuthorization:function(t,e){e||(e=n.util.date.getDate());var r=this.request;r.params.Timestamp=n.util.date.iso8601(e),r.params.SignatureVersion="2",r.params.SignatureMethod="HmacSHA256",r.params.AWSAccessKeyId=t.accessKeyId,t.sessionToken&&(r.params.SecurityToken=t.sessionToken),delete r.params.Signature,r.params.Signature=this.signature(t),r.body=n.util.queryParamsToString(r.params),r.headers["Content-Length"]=r.body.length},signature:function(t){return n.util.crypto.hmac(t.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var t=[];return t.push(this.request.method),t.push(this.request.endpoint.host.toLowerCase()),t.push(this.request.pathname()),t.push(n.util.queryParamsToString(this.request.params)),t.join("\n")}}),e.exports=n.Signers.V2},{"../core":25}],79:[function(t,e,r){var n=t("../core"),i=n.util.inherit;n.Signers.S3=i(n.Signers.RequestSigner,{subResources:{acl:1,accelerate:1,cors:1,lifecycle:1,"delete":1,location:1,logging:1,notification:1,partNumber:1,policy:1,requestPayment:1,replication:1,restore:1,tagging:1,torrent:1,uploadId:1,uploads:1,versionId:1,versioning:1,versions:1,website:1},responseHeaders:{"response-content-type":1,"response-content-language":1,"response-expires":1,"response-cache-control":1,"response-content-disposition":1,"response-content-encoding":1},addAuthorization:function(t,e){this.request.headers["presigned-expires"]||(this.request.headers["X-Amz-Date"]=n.util.date.rfc822(e)),t.sessionToken&&(this.request.headers["x-amz-security-token"]=t.sessionToken);var r=this.sign(t.secretAccessKey,this.stringToSign()),i="AWS "+t.accessKeyId+":"+r;this.request.headers.Authorization=i},stringToSign:function(){var t=this.request,e=[];e.push(t.method),e.push(t.headers["Content-MD5"]||""),e.push(t.headers["Content-Type"]||""),e.push(t.headers["presigned-expires"]||"");var r=this.canonicalizedAmzHeaders();return r&&e.push(r),e.push(this.canonicalizedResource()),e.join("\n")},canonicalizedAmzHeaders:function(){var t=[];n.util.each(this.request.headers,function(e){e.match(/^x-amz-/i)&&t.push(e)}),t.sort(function(t,e){return t.toLowerCase()<e.toLowerCase()?-1:1});var e=[];return n.util.arrayEach.call(this,t,function(t){e.push(t.toLowerCase()+":"+String(this.request.headers[t]))}),e.join("\n")},canonicalizedResource:function(){var t=this.request,e=t.path.split("?"),r=e[0],i=e[1],o="";if(t.virtualHostedBucket&&(o+="/"+t.virtualHostedBucket),o+=r,i){var s=[];n.util.arrayEach.call(this,i.split("&"),function(t){var e=t.split("=")[0],r=t.split("=")[1];if(this.subResources[e]||this.responseHeaders[e]){var n={name:e};void 0!==r&&(this.subResources[e]?n.value=r:n.value=decodeURIComponent(r)),s.push(n)}}),s.sort(function(t,e){return t.name<e.name?-1:1}),s.length&&(i=[],n.util.arrayEach(s,function(t){void 0===t.value?i.push(t.name):i.push(t.name+"="+t.value)}),o+="?"+i.join("&"))}return o},sign:function(t,e){return n.util.crypto.hmac(t,e,"base64","sha1")}}),e.exports=n.Signers.S3},{"../core":25}],77:[function(t,e,r){function n(t){var e=t.httpRequest.headers[a],r=t.service.getSignerClass(t);if(delete t.httpRequest.headers["User-Agent"],delete t.httpRequest.headers["X-Amz-User-Agent"],r===o.Signers.V4){if(e>604800){var n="Presigning does not support expiry time greater than a week with SigV4 signing.";throw o.util.error(new Error,{code:"InvalidExpiryTime",message:n,retryable:!1})}t.httpRequest.headers[a]=e}else{if(r!==o.Signers.S3)throw o.util.error(new Error,{message:"Presigning only supports S3 or SigV4 signing.",code:"UnsupportedSigner",retryable:!1});t.httpRequest.headers[a]=parseInt(o.util.date.unixTimestamp()+e,10).toString()}}function i(t){var e=t.httpRequest.endpoint,r=o.util.urlParse(t.httpRequest.path),n={};r.search&&(n=o.util.queryStringParse(r.search.substr(1))),o.util.each(t.httpRequest.headers,function(t,e){t===a&&(t="Expires"),0===t.indexOf("x-amz-meta-")&&(delete n[t],t=t.toLowerCase()),n[t]=e}),delete t.httpRequest.headers[a];var i=n.Authorization.split(" ");if("AWS"===i[0])i=i[1].split(":"),n.AWSAccessKeyId=i[0],n.Signature=i[1];else if("AWS4-HMAC-SHA256"===i[0]){i.shift();var s=i.join(" "),u=s.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];n["X-Amz-Signature"]=u,delete n.Expires}delete n.Authorization,delete n.Host,e.pathname=r.pathname,e.search=o.util.queryParamsToString(n)}var o=t("../core"),s=o.util.inherit,a="presigned-expires";o.Signers.Presign=s({sign:function(t,e,r){if(t.httpRequest.headers[a]=e||3600,t.on("build",n),t.on("sign",i),t.removeListener("afterBuild",o.EventListeners.Core.SET_CONTENT_LENGTH),t.removeListener("afterBuild",o.EventListeners.Core.COMPUTE_SHA256),t.emit("beforePresign",[t]),!r){if(t.build(),t.response.error)throw t.response.error;return o.util.urlFormat(t.httpRequest.endpoint)}t.build(function(){this.response.error?r(this.response.error):r(null,o.util.urlFormat(t.httpRequest.endpoint))})}}),e.exports=o.Signers.Presign},{"../core":25}],62:[function(t,e,r){var n=t("./core"),i=t("./model/api"),o=t("./region_config"),s=n.util.inherit,a=0;n.Service=s({constructor:function(t){if(!this.loadServiceClass)throw n.util.error(new Error,"Service must be constructed with `new' operator");var e=this.loadServiceClass(t||{});if(e){var r=n.util.copy(t),i=new e(t);return Object.defineProperty(i,"_originalConfig",{get:function(){return r},enumerable:!1,configurable:!0}),i._clientId=++a,i}this.initialize(t)},initialize:function(t){var e=n.config[this.serviceIdentifier];this.config=new n.Config(n.config),e&&this.config.update(e,!0),t&&this.config.update(t,!0),this.validateService(),this.config.endpoint||o(this),this.config.endpoint=this.endpointFromTemplate(this.config.endpoint),this.setEndpoint(this.config.endpoint)},validateService:function(){},loadServiceClass:function(t){var e=t;if(n.util.isEmpty(this.api)){if(e.apiConfig)return n.Service.defineServiceApi(this.constructor,e.apiConfig);if(this.constructor.services){e=new n.Config(n.config),e.update(t,!0);var r=e.apiVersions[this.constructor.serviceIdentifier];return r=r||e.apiVersion,this.getLatestServiceClass(r)}return null}return null},getLatestServiceClass:function(t){return t=this.getLatestServiceVersion(t),null===this.constructor.services[t]&&n.Service.defineServiceApi(this.constructor,t),this.constructor.services[t]},getLatestServiceVersion:function(t){if(!this.constructor.services||0===this.constructor.services.length)throw new Error("No services defined on "+this.constructor.serviceIdentifier);if(t?n.util.isType(t,Date)&&(t=n.util.date.iso8601(t).split("T")[0]):t="latest",Object.hasOwnProperty(this.constructor.services,t))return t;for(var e=Object.keys(this.constructor.services).sort(),r=null,i=e.length-1;i>=0;i--)if("*"!==e[i][e[i].length-1]&&(r=e[i]),e[i].substr(0,10)<=t)return r;throw new Error("Could not find "+this.constructor.serviceIdentifier+" API to satisfy version constraint `"+t+"'")},api:{},defaultRetryCount:3,makeRequest:function(t,e,r){if("function"==typeof e&&(r=e,e=null),e=e||{},this.config.params){var i=this.api.operations[t];i&&(e=n.util.copy(e),n.util.each(this.config.params,function(t,r){i.input.members[t]&&(void 0===e[t]||null===e[t])&&(e[t]=r)}))}var o=new n.Request(this,t,e);return this.addAllRequestListeners(o),r&&o.send(r),o},makeUnauthenticatedRequest:function(t,e,r){"function"==typeof e&&(r=e,e={});var n=this.makeRequest(t,e).toUnauthenticated();return r?n.send(r):n},waitFor:function(t,e,r){var i=new n.ResourceWaiter(this,t);return i.wait(e,r)},addAllRequestListeners:function(t){for(var e=[n.events,n.EventListeners.Core,this.serviceInterface(),n.EventListeners.CorePost],r=0;r<e.length;r++)e[r]&&t.addListeners(e[r]);this.config.paramValidation||t.removeListener("validate",n.EventListeners.Core.VALIDATE_PARAMETERS),this.config.logger&&t.addListeners(n.EventListeners.Logger),this.setupRequestListeners(t)},setupRequestListeners:function(){},getSignerClass:function(){var t;return t=this.config.signatureVersion?this.config.signatureVersion:this.api.signatureVersion,n.Signers.RequestSigner.getVersion(t)},serviceInterface:function(){switch(this.api.protocol){case"ec2":return n.EventListeners.Query;case"query":return n.EventListeners.Query;case"json":return n.EventListeners.Json;case"rest-json":return n.EventListeners.RestJson;case"rest-xml":return n.EventListeners.RestXml}if(this.api.protocol)throw new Error("Invalid service `protocol' "+this.api.protocol+" in API config")},successfulResponse:function(t){return t.httpResponse.statusCode<300},numRetries:function(){return void 0!==this.config.maxRetries?this.config.maxRetries:this.defaultRetryCount},retryDelays:function(t){var e=this.config.retryDelayOptions||{},r=e.customBackoff||null;if("function"==typeof r)return r(t);var n=e.base||30,i=Math.random()*Math.pow(2,t)*n;return i},retryableError:function(t){return this.networkingError(t)?!0:this.expiredCredentialsError(t)?!0:this.throttledError(t)?!0:t.statusCode>=500?!0:!1},networkingError:function(t){return"NetworkingError"===t.code},expiredCredentialsError:function(t){return"ExpiredTokenException"===t.code},clockSkewError:function(t){switch(t.code){case"RequestTimeTooSkewed":case"RequestExpired":case"InvalidSignatureException":case"SignatureDoesNotMatch":case"AuthFailure":case"RequestInTheFuture":return!0;default:return!1}},throttledError:function(t){switch(t.code){case"ProvisionedThroughputExceededException":case"Throttling":case"ThrottlingException":case"RequestLimitExceeded":case"RequestThrottled":return!0;default:return!1}},endpointFromTemplate:function(t){if("string"!=typeof t)return t;var e=t;return e=e.replace(/\{service\}/g,this.api.endpointPrefix),e=e.replace(/\{region\}/g,this.config.region),e=e.replace(/\{scheme\}/g,this.config.sslEnabled?"https":"http")},setEndpoint:function(t){this.endpoint=new n.Endpoint(t,this.config)},paginationConfig:function(t,e){var r=this.api.operations[t].paginator;if(!r){if(e){var i=new Error;throw n.util.error(i,"No pagination configuration for "+t)}return null}return r}}),n.util.update(n.Service,{defineMethods:function(t){n.util.each(t.prototype.api.operations,function(e){if(!t.prototype[e]){var r=t.prototype.api.operations[e];"none"===r.authtype?t.prototype[e]=function(t,r){return this.makeUnauthenticatedRequest(e,t,r)}:t.prototype[e]=function(t,r){return this.makeRequest(e,t,r)}}})},defineService:function(t,e,r){n.Service._serviceMap[t]=!0,Array.isArray(e)||(r=e,e=[]);var i=s(n.Service,r||{});if("string"==typeof t){n.Service.addVersions(i,e);var o=i.serviceIdentifier||t;i.serviceIdentifier=o}else i.prototype.api=t,n.Service.defineMethods(i);return i},addVersions:function(t,e){Array.isArray(e)||(e=[e]),t.services=t.services||{};for(var r=0;r<e.length;r++)void 0===t.services[e[r]]&&(t.services[e[r]]=null);t.apiVersions=Object.keys(t.services).sort()},defineServiceApi:function(t,e,r){function o(t){t.isApi?a.prototype.api=t:a.prototype.api=new i(t)}var a=s(t,{serviceIdentifier:t.serviceIdentifier});if("string"==typeof e){if(r)o(r);else try{o(n.apiLoader(t.serviceIdentifier,e))}catch(u){throw n.util.error(u,{message:"Could not find API configuration "+t.serviceIdentifier+"-"+e})}Object.prototype.hasOwnProperty.call(t.services,e)||(t.apiVersions=t.apiVersions.concat(e).sort()),t.services[e]=a}else o(e);return n.Service.defineMethods(a),a},hasService:function(t){return Object.prototype.hasOwnProperty.call(n.Service._serviceMap,t)},_serviceMap:{}})},{"./core":25,"./model/api":42,"./region_config":56}],56:[function(t,e,r){function n(t){if(!t)return null;var e=t.split("-");return e.length<3?null:e.slice(0,e.length-2).join("-")+"-*"}function i(t){var e=t.config.region,r=n(e),i=t.api.endpointPrefix;return[[e,i],[r,i],[e,"*"],[r,"*"],["*",i],["*","*"]].map(function(t){return t[0]&&t[1]?t.join("/"):null})}function o(t,e){a.each(e,function(e,r){"globalEndpoint"!==e&&(void 0===t.config[e]||null===t.config[e])&&(t.config[e]=r)})}function s(t){for(var e=i(t),r=0;r<e.length;r++){var n=e[r];if(n&&Object.prototype.hasOwnProperty.call(u.rules,n)){var s=u.rules[n];return"string"==typeof s&&(s=u.patterns[s]),t.config.useDualstack&&a.isDualstackAvailable(t)&&(s=a.copy(s),s.endpoint="{service}.dualstack.{region}.amazonaws.com"),
t.isGlobalEndpoint=!!s.globalEndpoint,s.signatureVersion||(s.signatureVersion="v4"),void o(t,s)}}}var a=t("./util"),u=t("./region_config.json");e.exports=s},{"./region_config.json":55,"./util":85}],55:[function(t,e,r){e.exports={rules:{"*/*":{endpoint:"{service}.{region}.amazonaws.com"},"cn-*/*":{endpoint:"{service}.{region}.amazonaws.com.cn"},"*/cloudfront":"globalSSL","*/iam":"globalSSL","*/sts":"globalSSL","*/importexport":{endpoint:"{service}.amazonaws.com",signatureVersion:"v2",globalEndpoint:!0},"*/route53":{endpoint:"https://{service}.amazonaws.com",signatureVersion:"v3https",globalEndpoint:!0},"*/waf":"globalSSL","us-gov-*/iam":"globalGovCloud","us-gov-*/sts":{endpoint:"{service}.{region}.amazonaws.com"},"us-gov-west-1/s3":"s3dash","us-west-1/s3":"s3dash","us-west-2/s3":"s3dash","eu-west-1/s3":"s3dash","ap-southeast-1/s3":"s3dash","ap-southeast-2/s3":"s3dash","ap-northeast-1/s3":"s3dash","sa-east-1/s3":"s3dash","us-east-1/s3":{endpoint:"{service}.amazonaws.com",signatureVersion:"s3"},"us-east-1/sdb":{endpoint:"{service}.amazonaws.com",signatureVersion:"v2"},"*/sdb":{endpoint:"{service}.{region}.amazonaws.com",signatureVersion:"v2"}},patterns:{globalSSL:{endpoint:"https://{service}.amazonaws.com",globalEndpoint:!0},globalGovCloud:{endpoint:"{service}.us-gov.amazonaws.com"},s3dash:{endpoint:"{service}-{region}.amazonaws.com",signatureVersion:"s3"}}}},{}],59:[function(t,e,r){var n=t("./core"),i=n.util.inherit,o=t("jmespath");n.Response=i({constructor:function(t){this.request=t,this.data=null,this.error=null,this.retryCount=0,this.redirectCount=0,this.httpResponse=new n.HttpResponse,t&&(this.maxRetries=t.service.numRetries(),this.maxRedirects=t.service.config.maxRedirects)},nextPage:function(t){var e,r=this.request.service,i=this.request.operation;try{e=r.paginationConfig(i,!0)}catch(o){this.error=o}if(!this.hasNextPage()){if(t)t(this.error,null);else if(this.error)throw this.error;return null}var s=n.util.copy(this.request.params);if(this.nextPageTokens){var a=e.inputToken;"string"==typeof a&&(a=[a]);for(var u=0;u<a.length;u++)s[a[u]]=this.nextPageTokens[u];return r.makeRequest(this.request.operation,s,t)}return t?t(null,null):null},hasNextPage:function(){return this.cacheNextPageTokens(),this.nextPageTokens?!0:void 0===this.nextPageTokens?void 0:!1},cacheNextPageTokens:function(){if(Object.prototype.hasOwnProperty.call(this,"nextPageTokens"))return this.nextPageTokens;this.nextPageTokens=void 0;var t=this.request.service.paginationConfig(this.request.operation);if(!t)return this.nextPageTokens;if(this.nextPageTokens=null,t.moreResults&&!o.search(this.data,t.moreResults))return this.nextPageTokens;var e=t.outputToken;return"string"==typeof e&&(e=[e]),n.util.arrayEach.call(this,e,function(t){var e=o.search(this.data,t);e&&(this.nextPageTokens=this.nextPageTokens||[],this.nextPageTokens.push(e))}),this.nextPageTokens}})},{"./core":25,jmespath:88}],58:[function(t,e,r){function n(t){var e=t.request._waiter,r=e.config.acceptors,n=!1,i="retry";r.forEach(function(r){if(!n){var o=e.matchers[r.matcher];o&&o(t,r.expected,r.argument)&&(n=!0,i=r.state)}}),!n&&t.error&&(i="failure"),"success"===i?e.setSuccess(t):e.setError(t,"retry"===i)}var i=t("./core"),o=i.util.inherit,s=t("jmespath");i.ResourceWaiter=o({constructor:function(t,e){this.service=t,this.state=e,this.loadWaiterConfig(this.state)},service:null,state:null,config:null,matchers:{path:function(t,e,r){var n=s.search(t.data,r);return s.strictDeepEqual(n,e)},pathAll:function(t,e,r){var n=s.search(t.data,r);Array.isArray(n)||(n=[n]);var i=n.length;if(!i)return!1;for(var o=0;i>o;o++)if(!s.strictDeepEqual(n[o],e))return!1;return!0},pathAny:function(t,e,r){var n=s.search(t.data,r);Array.isArray(n)||(n=[n]);for(var i=n.length,o=0;i>o;o++)if(s.strictDeepEqual(n[o],e))return!0;return!1},status:function(t,e){var r=t.httpResponse.statusCode;return"number"==typeof r&&r===e},error:function(t,e){return"string"==typeof e&&t.error?e===t.error.code:e===!!t.error}},listeners:(new i.SequentialExecutor).addNamedListeners(function(t){t("RETRY_CHECK","retry",function(t){var e=t.request._waiter;t.error&&"ResourceNotReady"===t.error.code&&(t.error.retryDelay=1e3*(e.config.delay||0))}),t("CHECK_OUTPUT","extractData",n),t("CHECK_ERROR","extractError",n)}),wait:function(t,e){"function"==typeof t&&(e=t,t=void 0);var r=this.service.makeRequest(this.config.operation,t);return r._waiter=this,r.response.maxRetries=this.config.maxAttempts,r.addListeners(this.listeners),e&&r.send(e),r},setSuccess:function(t){t.error=null,t.data=t.data||{},t.request.removeAllListeners("extractData")},setError:function(t,e){t.data=null,t.error=i.util.error(t.error||new Error,{code:"ResourceNotReady",message:"Resource is not in the state "+this.state,retryable:e})},loadWaiterConfig:function(t){if(!this.service.api.waiters[t])throw new i.util.error(new Error,{code:"StateNotFoundError",message:"State "+t+" not found."});this.config=this.service.api.waiters[t]}})},{"./core":25,jmespath:88}],57:[function(t,e,r){(function(e){function r(t){return Object.prototype.hasOwnProperty.call(u,t._asm.currentState)}var n=t("./core"),i=t("./state_machine"),o=n.util.inherit,s=n.util.nodeRequire("domain"),a=t("jmespath"),u={success:1,error:1,complete:1},c=new i;c.setupStates=function(){var t=function(t,e){var n=this;n._haltHandlersOnError=!1,n.emit(n._asm.currentState,function(t){if(t)if(r(n)){if(!(s&&n.domain instanceof s.Domain))throw t;t.domainEmitter=n,t.domain=n.domain,t.domainThrown=!1,n.domain.emit("error",t)}else n.response.error=t,e(t);else e(n.response.error)})};this.addState("validate","build","error",t),this.addState("build","afterBuild","restart",t),this.addState("afterBuild","sign","restart",t),this.addState("sign","send","retry",t),this.addState("retry","afterRetry","afterRetry",t),this.addState("afterRetry","sign","error",t),this.addState("send","validateResponse","retry",t),this.addState("validateResponse","extractData","extractError",t),this.addState("extractError","extractData","retry",t),this.addState("extractData","success","retry",t),this.addState("restart","build","error",t),this.addState("success","complete","complete",t),this.addState("error","complete","complete",t),this.addState("complete",null,null,t)},c.setupStates(),n.Request=o({constructor:function(t,e,r){var o=t.endpoint,a=t.config.region,u=t.config.customUserAgent;t.isGlobalEndpoint&&(a="us-east-1"),this.domain=s&&s.active,this.service=t,this.operation=e,this.params=r||{},this.httpRequest=new n.HttpRequest(o,a,u),this.startTime=n.util.date.getDate(),this.response=new n.Response(this),this._asm=new i(c.states,"validate"),this._haltHandlersOnError=!1,n.SequentialExecutor.call(this),this.emit=this.emitEvent},send:function(t){return t&&this.on("complete",function(e){t.call(e,e.error,e.data)}),this.runTo(),this.response},build:function(t){return this.runTo("send",t)},runTo:function(t,e){return this._asm.runTo(t,e,this),this},abort:function(){return this.removeAllListeners("validateResponse"),this.removeAllListeners("extractError"),this.on("validateResponse",function(t){t.error=n.util.error(new Error("Request aborted by user"),{code:"RequestAbortedError",retryable:!1})}),this.httpRequest.stream&&(this.httpRequest.stream.abort(),this.httpRequest._abortCallback?this.httpRequest._abortCallback():this.removeAllListeners("send")),this},eachPage:function(t){function e(r){t.call(r,r.error,r.data,function(i){i!==!1&&(r.hasNextPage()?r.nextPage().on("complete",e).send():t.call(r,null,null,n.util.fn.noop))})}t=n.util.fn.makeAsync(t,3),this.on("complete",e).send()},eachItem:function(t){function e(e,i){if(e)return t(e,null);if(null===i)return t(null,null);var o=r.service.paginationConfig(r.operation),s=o.resultKey;Array.isArray(s)&&(s=s[0]);var u=a.search(i,s),c=!0;return n.util.arrayEach(u,function(e){return c=t(null,e),c===!1?n.util.abort:void 0}),c}var r=this;this.eachPage(e)},isPageable:function(){return this.service.paginationConfig(this.operation)?!0:!1},createReadStream:function(){var t=n.util.nodeRequire("stream"),r=this,i=null;return 2===n.HttpClient.streamsApiVersion?(i=new t.PassThrough,r.send()):(i=new t.Stream,i.readable=!0,i.sent=!1,i.on("newListener",function(t){i.sent||"data"!==t||(i.sent=!0,e.nextTick(function(){r.send()}))})),this.on("httpHeaders",function(e,o,s){if(300>e){r.removeListener("httpData",n.EventListeners.Core.HTTP_DATA),r.removeListener("httpError",n.EventListeners.Core.HTTP_ERROR),r.on("httpError",function(t){s.error=t,s.error.retryable=!1});var a,u=!1;if("HEAD"!==r.httpRequest.method&&(a=parseInt(o["content-length"],10)),void 0!==a&&!isNaN(a)&&a>=0){u=!0;var c=0}var l=function(){u&&c!==a?i.emit("error",n.util.error(new Error("Stream content length mismatch. Received "+c+" of "+a+" bytes."),{code:"StreamContentLengthMismatch"})):2===n.HttpClient.streamsApiVersion?i.end():i.emit("end")},h=s.httpResponse.createUnbufferedStream();if(2===n.HttpClient.streamsApiVersion)if(u){var p=new t.PassThrough;p._write=function(e){return e&&e.length&&(c+=e.length),t.PassThrough.prototype._write.apply(this,arguments)},p.on("end",l),h.pipe(p).pipe(i,{end:!1})}else h.pipe(i);else u&&h.on("data",function(t){t&&t.length&&(c+=t.length)}),h.on("data",function(t){i.emit("data",t)}),h.on("end",l);h.on("error",function(t){u=!1,i.emit("error",t)})}}),this.on("error",function(t){i.emit("error",t)}),i},emitEvent:function(t,e,r){"function"==typeof e&&(r=e,e=null),r||(r=function(){}),e||(e=this.eventParameters(t,this.response));var i=n.SequentialExecutor.prototype.emit;i.call(this,t,e,function(t){t&&(this.response.error=t),r.call(this,t)})},eventParameters:function(t){switch(t){case"restart":case"validate":case"sign":case"build":case"afterValidate":case"afterBuild":return[this];case"error":return[this.response.error,this.response];default:return[this.response]}},presign:function(t,e){return e||"function"!=typeof t||(e=t,t=null),(new n.Signers.Presign).sign(this.toGet(),t,e)},isPresigned:function(){return Object.prototype.hasOwnProperty.call(this.httpRequest.headers,"presigned-expires")},toUnauthenticated:function(){return this.removeListener("validate",n.EventListeners.Core.VALIDATE_CREDENTIALS),this.removeListener("sign",n.EventListeners.Core.SIGN),this},toGet:function(){return("query"===this.service.api.protocol||"ec2"===this.service.api.protocol)&&(this.removeListener("build",this.buildAsGet),this.addListener("build",this.buildAsGet)),this},buildAsGet:function(t){t.httpRequest.method="GET",t.httpRequest.path=t.service.endpoint.path+"?"+t.httpRequest.body,t.httpRequest.body="",delete t.httpRequest.headers["Content-Length"],delete t.httpRequest.headers["Content-Type"]},haltHandlersOnError:function(){this._haltHandlersOnError=!0}}),n.util.addPromisesToRequests(n.Request),n.util.mixin(n.Request,n.SequentialExecutor)}).call(this,t("_process"))},{"./core":25,"./state_machine":84,_process:13,jmespath:88}],88:[function(t,e,r){!function(t){"use strict";function e(t){return null!==t?"[object Array]"===Object.prototype.toString.call(t):!1}function r(t){return null!==t?"[object Object]"===Object.prototype.toString.call(t):!1}function n(t,i){if(t===i)return!0;var o=Object.prototype.toString.call(t);if(o!==Object.prototype.toString.call(i))return!1;if(e(t)===!0){if(t.length!==i.length)return!1;for(var s=0;s<t.length;s++)if(n(t[s],i[s])===!1)return!1;return!0}if(r(t)===!0){var a={};for(var u in t)if(hasOwnProperty.call(t,u)){if(n(t[u],i[u])===!1)return!1;a[u]=!0}for(var c in i)if(hasOwnProperty.call(i,c)&&a[c]!==!0)return!1;return!0}return!1}function i(t){if(""===t||t===!1||null===t)return!0;if(e(t)&&0===t.length)return!0;if(r(t)){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}return!1}function o(t){for(var e=Object.keys(t),r=[],n=0;n<e.length;n++)r.push(t[e[n]]);return r}function s(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t}function a(t){return t>="0"&&"9">=t||"-"===t}function u(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||t>="0"&&"9">=t||"_"===t}function c(){}function l(){}function h(t){this.runtime=t}function p(t){this._interpreter=t,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[v]}]},avg:{_func:this._functionAvg,_signature:[{types:[A]}]},ceil:{_func:this._functionCeil,_signature:[{types:[v]}]},contains:{_func:this._functionContains,_signature:[{types:[b,w]},{types:[g]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[b]},{types:[b]}]},floor:{_func:this._functionFloor,_signature:[{types:[v]}]},length:{_func:this._functionLength,_signature:[{types:[b,w,E]}]},map:{_func:this._functionMap,_signature:[{types:[x]},{types:[w]}]},max:{_func:this._functionMax,_signature:[{types:[A,R]}]},merge:{_func:this._functionMerge,_signature:[{types:[E],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[w]},{types:[x]}]},sum:{_func:this._functionSum,_signature:[{types:[A]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[b]},{types:[b]}]},min:{_func:this._functionMin,_signature:[{types:[A,R]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[w]},{types:[x]}]},type:{_func:this._functionType,_signature:[{types:[g]}]},keys:{_func:this._functionKeys,_signature:[{types:[E]}]},values:{_func:this._functionValues,_signature:[{types:[E]}]},sort:{_func:this._functionSort,_signature:[{types:[R,A]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[w]},{types:[x]}]},join:{_func:this._functionJoin,_signature:[{types:[b]},{types:[R]}]},reverse:{_func:this._functionReverse,_signature:[{types:[b,w]}]},to_array:{_func:this._functionToArray,_signature:[{types:[g]}]},to_string:{_func:this._functionToString,_signature:[{types:[g]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[g]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[g],variadic:!0}]}}}function f(t){var e=new l,r=e.parse(t);return r}function d(t){var e=new c;return e.tokenize(t)}function y(t,e){var r=new l,n=new p,i=new h(n);n._interpreter=i;var o=r.parse(e);return i.search(o,t)}var m;m="function"==typeof String.prototype.trimLeft?function(t){return t.trimLeft()}:function(t){return t.match(/^\s*(.*)/)[1]};var v=0,g=1,b=2,w=3,E=4,_=5,x=6,S=7,A=8,R=9,C="EOF",T="UnquotedIdentifier",I="QuotedIdentifier",L="Rbracket",j="Rparen",O="Comma",q="Colon",D="Rbrace",k="Number",P="Current",N="Expref",M="Pipe",B="Or",U="And",F="EQ",z="GT",H="LT",X="GTE",V="LTE",K="NE",W="Flatten",Y="Star",G="Filter",J="Dot",$="Not",Z="Lbrace",Q="Lbracket",tt="Lparen",et="Literal",rt={".":J,"*":Y,",":O,":":q,"{":Z,"}":D,"]":L,"(":tt,")":j,"@":P},nt={"<":!0,">":!0,"=":!0,"!":!0},it={" ":!0,"	":!0,"\n":!0};c.prototype={tokenize:function(t){var e=[];this._current=0;for(var r,n,i;this._current<t.length;)if(s(t[this._current]))r=this._current,n=this._consumeUnquotedIdentifier(t),e.push({type:T,value:n,start:r});else if(void 0!==rt[t[this._current]])e.push({type:rt[t[this._current]],value:t[this._current],start:this._current}),this._current++;else if(a(t[this._current]))i=this._consumeNumber(t),e.push(i);else if("["===t[this._current])i=this._consumeLBracket(t),e.push(i);else if('"'===t[this._current])r=this._current,n=this._consumeQuotedIdentifier(t),e.push({type:I,value:n,start:r});else if("'"===t[this._current])r=this._current,n=this._consumeRawStringLiteral(t),e.push({type:et,value:n,start:r});else if("`"===t[this._current]){r=this._current;var o=this._consumeLiteral(t);e.push({type:et,value:o,start:r})}else if(void 0!==nt[t[this._current]])e.push(this._consumeOperator(t));else if(void 0!==it[t[this._current]])this._current++;else if("&"===t[this._current])r=this._current,this._current++,"&"===t[this._current]?(this._current++,e.push({type:U,value:"&&",start:r})):e.push({type:N,value:"&",start:r});else{if("|"!==t[this._current]){var u=new Error("Unknown character:"+t[this._current]);throw u.name="LexerError",u}r=this._current,this._current++,"|"===t[this._current]?(this._current++,e.push({type:B,value:"||",start:r})):e.push({type:M,value:"|",start:r})}return e},_consumeUnquotedIdentifier:function(t){var e=this._current;for(this._current++;this._current<t.length&&u(t[this._current]);)this._current++;return t.slice(e,this._current)},_consumeQuotedIdentifier:function(t){var e=this._current;this._current++;for(var r=t.length;'"'!==t[this._current]&&this._current<r;){var n=this._current;"\\"!==t[n]||"\\"!==t[n+1]&&'"'!==t[n+1]?n++:n+=2,this._current=n}return this._current++,JSON.parse(t.slice(e,this._current))},_consumeRawStringLiteral:function(t){var e=this._current;this._current++;for(var r=t.length;"'"!==t[this._current]&&this._current<r;){var n=this._current;"\\"!==t[n]||"\\"!==t[n+1]&&"'"!==t[n+1]?n++:n+=2,this._current=n}this._current++;var i=t.slice(e+1,this._current-1);return i.replace("\\'","'")},_consumeNumber:function(t){var e=this._current;this._current++;for(var r=t.length;a(t[this._current])&&this._current<r;)this._current++;var n=parseInt(t.slice(e,this._current));return{type:k,value:n,start:e}},_consumeLBracket:function(t){var e=this._current;return this._current++,"?"===t[this._current]?(this._current++,{type:G,value:"[?",start:e}):"]"===t[this._current]?(this._current++,{type:W,value:"[]",start:e}):{type:Q,value:"[",start:e}},_consumeOperator:function(t){var e=this._current,r=t[e];return this._current++,"!"===r?"="===t[this._current]?(this._current++,{type:K,value:"!=",start:e}):{type:$,value:"!",start:e}:"<"===r?"="===t[this._current]?(this._current++,{type:V,value:"<=",start:e}):{type:H,value:"<",start:e}:">"===r?"="===t[this._current]?(this._current++,{type:X,value:">=",start:e}):{type:z,value:">",start:e}:"="===r&&"="===t[this._current]?(this._current++,{type:F,value:"==",start:e}):void 0},_consumeLiteral:function(t){this._current++;for(var e,r=this._current,n=t.length;"`"!==t[this._current]&&this._current<n;){var i=this._current;"\\"!==t[i]||"\\"!==t[i+1]&&"`"!==t[i+1]?i++:i+=2,this._current=i}var o=m(t.slice(r,this._current));return o=o.replace("\\`","`"),e=this._looksLikeJSON(o)?JSON.parse(o):JSON.parse('"'+o+'"'),this._current++,e},_looksLikeJSON:function(t){var e='[{"',r=["true","false","null"],n="-0123456789";if(""===t)return!1;if(e.indexOf(t[0])>=0)return!0;if(r.indexOf(t)>=0)return!0;if(!(n.indexOf(t[0])>=0))return!1;try{return JSON.parse(t),!0}catch(i){return!1}}};var ot={};ot[C]=0,ot[T]=0,ot[I]=0,ot[L]=0,ot[j]=0,ot[O]=0,ot[D]=0,ot[k]=0,ot[P]=0,ot[N]=0,ot[M]=1,ot[B]=2,ot[U]=3,ot[F]=5,ot[z]=5,ot[H]=5,ot[X]=5,ot[V]=5,ot[K]=5,ot[W]=9,ot[Y]=20,ot[G]=21,ot[J]=40,ot[$]=45,ot[Z]=50,ot[Q]=55,ot[tt]=60,l.prototype={parse:function(t){this._loadTokens(t),this.index=0;var e=this.expression(0);if(this._lookahead(0)!==C){var r=this._lookaheadToken(0),n=new Error("Unexpected token type: "+r.type+", value: "+r.value);throw n.name="ParserError",n}return e},_loadTokens:function(t){var e=new c,r=e.tokenize(t);r.push({type:C,value:"",start:t.length}),this.tokens=r},expression:function(t){var e=this._lookaheadToken(0);this._advance();for(var r=this.nud(e),n=this._lookahead(0);t<ot[n];)this._advance(),r=this.led(n,r),n=this._lookahead(0);return r},_lookahead:function(t){return this.tokens[this.index+t].type},_lookaheadToken:function(t){return this.tokens[this.index+t]},_advance:function(){this.index++},nud:function(t){var e,r,n;switch(t.type){case et:return{type:"Literal",value:t.value};case T:return{type:"Field",name:t.value};case I:var i={type:"Field",name:t.value};if(this._lookahead(0)===tt)throw new Error("Quoted identifier not allowed for function names.");return i;case $:return r=this.expression(ot.Not),{type:"NotExpression",children:[r]};case Y:return e={type:"Identity"},r=null,r=this._lookahead(0)===L?{type:"Identity"}:this._parseProjectionRHS(ot.Star),{type:"ValueProjection",children:[e,r]};case G:return this.led(t.type,{type:"Identity"});case Z:return this._parseMultiselectHash();case W:return e={type:W,children:[{type:"Identity"}]},r=this._parseProjectionRHS(ot.Flatten),{type:"Projection",children:[e,r]};case Q:return this._lookahead(0)===k||this._lookahead(0)===q?(r=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},r)):this._lookahead(0)===Y&&this._lookahead(1)===L?(this._advance(),this._advance(),r=this._parseProjectionRHS(ot.Star),{type:"Projection",children:[{type:"Identity"},r]}):this._parseMultiselectList();case P:return{type:P};case N:return n=this.expression(ot.Expref),{type:"ExpressionReference",children:[n]};case tt:for(var o=[];this._lookahead(0)!==j;)this._lookahead(0)===P?(n={type:P},this._advance()):n=this.expression(0),o.push(n);return this._match(j),o[0];default:this._errorToken(t)}},led:function(t,e){var r;switch(t){case J:var n=ot.Dot;return this._lookahead(0)!==Y?(r=this._parseDotRHS(n),{type:"Subexpression",children:[e,r]}):(this._advance(),r=this._parseProjectionRHS(n),{type:"ValueProjection",children:[e,r]});case M:return r=this.expression(ot.Pipe),{type:M,children:[e,r]};case B:return r=this.expression(ot.Or),{type:"OrExpression",children:[e,r]};case U:return r=this.expression(ot.And),{type:"AndExpression",children:[e,r]};case tt:for(var i,o,s=e.name,a=[];this._lookahead(0)!==j;)this._lookahead(0)===P?(i={type:P},this._advance()):i=this.expression(0),this._lookahead(0)===O&&this._match(O),a.push(i);return this._match(j),o={type:"Function",name:s,children:a};case G:var u=this.expression(0);return this._match(L),r=this._lookahead(0)===W?{type:"Identity"}:this._parseProjectionRHS(ot.Filter),{type:"FilterProjection",children:[e,r,u]};case W:var c={type:W,children:[e]},l=this._parseProjectionRHS(ot.Flatten);return{type:"Projection",children:[c,l]};case F:case K:case z:case X:case H:case V:return this._parseComparator(e,t);case Q:var h=this._lookaheadToken(0);return h.type===k||h.type===q?(r=this._parseIndexExpression(),this._projectIfSlice(e,r)):(this._match(Y),this._match(L),r=this._parseProjectionRHS(ot.Star),{type:"Projection",children:[e,r]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(t){if(this._lookahead(0)!==t){var e=this._lookaheadToken(0),r=new Error("Expected "+t+", got: "+e.type);throw r.name="ParserError",r}this._advance()},_errorToken:function(t){var e=new Error("Invalid token ("+t.type+'): "'+t.value+'"');throw e.name="ParserError",e},_parseIndexExpression:function(){if(this._lookahead(0)===q||this._lookahead(1)===q)return this._parseSliceExpression();var t={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(L),t},_projectIfSlice:function(t,e){var r={type:"IndexExpression",children:[t,e]};return"Slice"===e.type?{type:"Projection",children:[r,this._parseProjectionRHS(ot.Star)]}:r},_parseSliceExpression:function(){for(var t=[null,null,null],e=0,r=this._lookahead(0);r!==L&&3>e;){if(r===q)e++,this._advance();else{if(r!==k){var n=this._lookahead(0),i=new Error("Syntax error, unexpected token: "+n.value+"("+n.type+")");throw i.name="Parsererror",i}t[e]=this._lookaheadToken(0).value,this._advance()}r=this._lookahead(0)}return this._match(L),{type:"Slice",children:t}},_parseComparator:function(t,e){var r=this.expression(ot[e]);return{type:"Comparator",name:e,children:[t,r]}},_parseDotRHS:function(t){var e=this._lookahead(0),r=[T,I,Y];return r.indexOf(e)>=0?this.expression(t):e===Q?(this._match(Q),this._parseMultiselectList()):e===Z?(this._match(Z),this._parseMultiselectHash()):void 0},_parseProjectionRHS:function(t){var e;if(ot[this._lookahead(0)]<10)e={type:"Identity"};else if(this._lookahead(0)===Q)e=this.expression(t);else if(this._lookahead(0)===G)e=this.expression(t);else{if(this._lookahead(0)!==J){var r=this._lookaheadToken(0),n=new Error("Sytanx error, unexpected token: "+r.value+"("+r.type+")");throw n.name="ParserError",n}this._match(J),e=this._parseDotRHS(t)}return e},_parseMultiselectList:function(){for(var t=[];this._lookahead(0)!==L;){var e=this.expression(0);if(t.push(e),this._lookahead(0)===O&&(this._match(O),this._lookahead(0)===L))throw new Error("Unexpected token Rbracket")}return this._match(L),{type:"MultiSelectList",children:t}},_parseMultiselectHash:function(){for(var t,e,r,n,i=[],o=[T,I];;){if(t=this._lookaheadToken(0),o.indexOf(t.type)<0)throw new Error("Expecting an identifier token, got: "+t.type);if(e=t.value,this._advance(),this._match(q),r=this.expression(0),n={type:"KeyValuePair",name:e,value:r},i.push(n),this._lookahead(0)===O)this._match(O);else if(this._lookahead(0)===D){this._match(D);break}}return{type:"MultiSelectHash",children:i}}},h.prototype={search:function(t,e){return this.visit(t,e)},visit:function(t,s){var a,u,c,l,h,p,f,d,y,m;switch(t.type){case"Field":return null===s?null:r(s)?(p=s[t.name],void 0===p?null:p):null;case"Subexpression":for(c=this.visit(t.children[0],s),m=1;m<t.children.length;m++)if(c=this.visit(t.children[1],c),null===c)return null;return c;case"IndexExpression":return f=this.visit(t.children[0],s),d=this.visit(t.children[1],f);case"Index":if(!e(s))return null;var v=t.value;return 0>v&&(v=s.length+v),c=s[v],void 0===c&&(c=null),c;case"Slice":if(!e(s))return null;var g=t.children.slice(0),b=this.computeSliceParams(s.length,g),w=b[0],E=b[1],_=b[2];if(c=[],_>0)for(m=w;E>m;m+=_)c.push(s[m]);else for(m=w;m>E;m+=_)c.push(s[m]);return c;case"Projection":var x=this.visit(t.children[0],s);if(!e(x))return null;for(y=[],m=0;m<x.length;m++)u=this.visit(t.children[1],x[m]),null!==u&&y.push(u);return y;case"ValueProjection":if(x=this.visit(t.children[0],s),!r(x))return null;y=[];var S=o(x);for(m=0;m<S.length;m++)u=this.visit(t.children[1],S[m]),null!==u&&y.push(u);return y;case"FilterProjection":if(x=this.visit(t.children[0],s),!e(x))return null;var A=[],R=[];for(m=0;m<x.length;m++)a=this.visit(t.children[2],x[m]),i(a)||A.push(x[m]);for(var C=0;C<A.length;C++)u=this.visit(t.children[1],A[C]),null!==u&&R.push(u);return R;case"Comparator":switch(l=this.visit(t.children[0],s),h=this.visit(t.children[1],s),t.name){case F:c=n(l,h);break;case K:c=!n(l,h);break;case z:c=l>h;break;case X:c=l>=h;break;case H:c=h>l;break;case V:c=h>=l;break;default:throw new Error("Unknown comparator: "+t.name)}return c;case W:var T=this.visit(t.children[0],s);if(!e(T))return null;var I=[];for(m=0;m<T.length;m++)u=T[m],e(u)?I.push.apply(I,u):I.push(u);return I;case"Identity":return s;case"MultiSelectList":if(null===s)return null;for(y=[],m=0;m<t.children.length;m++)y.push(this.visit(t.children[m],s));return y;case"MultiSelectHash":if(null===s)return null;y={};var L;for(m=0;m<t.children.length;m++)L=t.children[m],y[L.name]=this.visit(L.value,s);return y;case"OrExpression":return a=this.visit(t.children[0],s),i(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return l=this.visit(t.children[0],s),i(l)===!0?l:this.visit(t.children[1],s);case"NotExpression":return l=this.visit(t.children[0],s),i(l);case"Literal":return t.value;case M:return f=this.visit(t.children[0],s),this.visit(t.children[1],f);case P:return s;case"Function":var j=[];for(m=0;m<t.children.length;m++)j.push(this.visit(t.children[m],s));return this.runtime.callFunction(t.name,j);case"ExpressionReference":var O=t.children[0];return O.jmespathType=N,O;default:throw new Error("Unknown node type: "+t.type)}},computeSliceParams:function(t,e){var r=e[0],n=e[1],i=e[2],o=[null,null,null];if(null===i)i=1;else if(0===i){var s=new Error("Invalid slice, step cannot be 0");throw s.name="RuntimeError",s}var a=0>i?!0:!1;return r=null===r?a?t-1:0:this.capSliceRange(t,r,i),n=null===n?a?-1:t:this.capSliceRange(t,n,i),o[0]=r,o[1]=n,o[2]=i,o},capSliceRange:function(t,e,r){return 0>e?(e+=t,0>e&&(e=0>r?-1:0)):e>=t&&(e=0>r?t-1:t),e}},p.prototype={callFunction:function(t,e){var r=this.functionTable[t];if(void 0===r)throw new Error("Unknown function: "+t+"()");return this._validateArgs(t,e,r._signature),r._func.call(this,e)},_validateArgs:function(t,e,r){var n;if(r[r.length-1].variadic){if(e.length<r.length)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: "+t+"() takes at least"+r.length+n+" but received "+e.length)}else if(e.length!==r.length)throw n=1===r.length?" argument":" arguments",new Error("ArgumentError: "+t+"() takes "+r.length+n+" but received "+e.length);for(var i,o,s,a=0;a<r.length;a++){s=!1,i=r[a].types,o=this._getTypeName(e[a]);for(var u=0;u<i.length;u++)if(this._typeMatches(o,i[u],e[a])){s=!0;break}if(!s)throw new Error("TypeError: "+t+"() expected argument "+(a+1)+" to be type "+i+" but received type "+o+" instead.")}},_typeMatches:function(t,e,r){if(e===g)return!0;if(e!==R&&e!==A&&e!==w)return t===e;if(e===w)return t===w;if(t===w){var n;e===A?n=v:e===R&&(n=b);for(var i=0;i<r.length;i++)if(!this._typeMatches(this._getTypeName(r[i]),n,r[i]))return!1;return!0}},_getTypeName:function(t){switch(Object.prototype.toString.call(t)){case"[object String]":return b;case"[object Number]":return v;case"[object Array]":return w;case"[object Boolean]":return _;case"[object Null]":return S;case"[object Object]":return t.jmespathType===N?x:E}},_functionStartsWith:function(t){return 0===t[0].lastIndexOf(t[1])},_functionEndsWith:function(t){var e=t[0],r=t[1];return-1!==e.indexOf(r,e.length-r.length)},_functionReverse:function(t){var e=this._getTypeName(t[0]);if(e===b){for(var r=t[0],n="",i=r.length-1;i>=0;i--)n+=r[i];return n}var o=t[0].slice(0);return o.reverse(),o},_functionAbs:function(t){return Math.abs(t[0])},_functionCeil:function(t){return Math.ceil(t[0])},_functionAvg:function(t){for(var e=0,r=t[0],n=0;n<r.length;n++)e+=r[n];return e/r.length},_functionContains:function(t){return t[0].indexOf(t[1])>=0},_functionFloor:function(t){return Math.floor(t[0])},_functionLength:function(t){return r(t[0])?Object.keys(t[0]).length:t[0].length},_functionMap:function(t){for(var e=[],r=this._interpreter,n=t[0],i=t[1],o=0;o<i.length;o++)e.push(r.visit(n,i[o]));return e},_functionMerge:function(t){for(var e={},r=0;r<t.length;r++){var n=t[r];for(var i in n)e[i]=n[i]}return e},_functionMax:function(t){if(t[0].length>0){var e=this._getTypeName(t[0][0]);if(e===v)return Math.max.apply(Math,t[0]);for(var r=t[0],n=r[0],i=1;i<r.length;i++)n.localeCompare(r[i])<0&&(n=r[i]);return n}return null},_functionMin:function(t){if(t[0].length>0){var e=this._getTypeName(t[0][0]);if(e===v)return Math.min.apply(Math,t[0]);for(var r=t[0],n=r[0],i=1;i<r.length;i++)r[i].localeCompare(n)<0&&(n=r[i]);return n}return null},_functionSum:function(t){for(var e=0,r=t[0],n=0;n<r.length;n++)e+=r[n];return e},_functionType:function(t){switch(this._getTypeName(t[0])){case v:return"number";case b:return"string";case w:return"array";case E:return"object";case _:return"boolean";case x:return"expref";case S:return"null"}},_functionKeys:function(t){return Object.keys(t[0])},_functionValues:function(t){for(var e=t[0],r=Object.keys(e),n=[],i=0;i<r.length;i++)n.push(e[r[i]]);return n},_functionJoin:function(t){var e=t[0],r=t[1];return r.join(e)},_functionToArray:function(t){return this._getTypeName(t[0])===w?t[0]:[t[0]]},_functionToString:function(t){return this._getTypeName(t[0])===b?t[0]:JSON.stringify(t[0])},_functionToNumber:function(t){var e,r=this._getTypeName(t[0]);return r===v?t[0]:r!==b||(e=+t[0],isNaN(e))?null:e},_functionNotNull:function(t){for(var e=0;e<t.length;e++)if(this._getTypeName(t[e])!==S)return t[e];return null},_functionSort:function(t){var e=t[0].slice(0);return e.sort(),e},_functionSortBy:function(t){var e=t[0].slice(0);if(0===e.length)return e;var r=this._interpreter,n=t[1],i=this._getTypeName(r.visit(n,e[0]));if([v,b].indexOf(i)<0)throw new Error("TypeError");for(var o=this,s=[],a=0;a<e.length;a++)s.push([a,e[a]]);s.sort(function(t,e){var s=r.visit(n,t[1]),a=r.visit(n,e[1]);if(o._getTypeName(s)!==i)throw new Error("TypeError: expected "+i+", received "+o._getTypeName(s));if(o._getTypeName(a)!==i)throw new Error("TypeError: expected "+i+", received "+o._getTypeName(a));return s>a?1:a>s?-1:t[0]-e[0]});for(var u=0;u<s.length;u++)e[u]=s[u][1];return e},_functionMaxBy:function(t){for(var e,r,n=t[1],i=t[0],o=this.createKeyFunction(n,[v,b]),s=-(1/0),a=0;a<i.length;a++)r=o(i[a]),r>s&&(s=r,e=i[a]);return e},_functionMinBy:function(t){for(var e,r,n=t[1],i=t[0],o=this.createKeyFunction(n,[v,b]),s=1/0,a=0;a<i.length;a++)r=o(i[a]),s>r&&(s=r,e=i[a]);return e},createKeyFunction:function(t,e){
var r=this,n=this._interpreter,i=function(i){var o=n.visit(t,i);if(e.indexOf(r._getTypeName(o))<0){var s="TypeError: expected one of "+e+", received "+r._getTypeName(o);throw new Error(s)}return o};return i}},t.tokenize=d,t.compile=f,t.search=y,t.strictDeepEqual=n}("undefined"==typeof r?this.jmespath={}:r)},{}],84:[function(t,e,r){function n(t,e){this.currentState=e||null,this.states=t||{}}n.prototype.runTo=function(t,e,r,n){"function"==typeof t&&(n=r,r=e,e=t,t=null);var i=this,o=i.states[i.currentState];o.fn.call(r||i,n,function(n){if(n){if(!o.fail)return e?e.call(r,n):null;i.currentState=o.fail}else{if(!o.accept)return e?e.call(r):null;i.currentState=o.accept}return i.currentState===t?e?e.call(r,n):null:void i.runTo(t,e,r,n)})},n.prototype.addState=function(t,e,r,n){return"function"==typeof e?(n=e,e=null,r=null):"function"==typeof r&&(n=r,r=null),this.currentState||(this.currentState=t),this.states[t]={accept:e,fail:r,fn:n},this},e.exports=n},{}],48:[function(t,e,r){var n=t("./core");n.ParamValidator=n.util.inherit({constructor:function(t){(t===!0||void 0===t)&&(t={min:!0}),this.validation=t},validate:function(t,e,r){if(this.errors=[],this.validateMember(t,e||{},r||"params"),this.errors.length>1){var i=this.errors.join("\n* ");throw i="There were "+this.errors.length+" validation errors:\n* "+i,n.util.error(new Error(i),{code:"MultipleValidationErrors",errors:this.errors})}if(1===this.errors.length)throw this.errors[0];return!0},fail:function(t,e){this.errors.push(n.util.error(new Error(e),{code:t}))},validateStructure:function(t,e,r){this.validateType(e,r,["object"],"structure");for(var n,i=0;t.required&&i<t.required.length;i++){n=t.required[i];var o=e[n];(void 0===o||null===o)&&this.fail("MissingRequiredParameter","Missing required key '"+n+"' in "+r)}for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=e[n],a=t.members[n];if(void 0!==a){var u=[r,n].join(".");this.validateMember(a,s,u)}else this.fail("UnexpectedParameter","Unexpected key '"+n+"' found in "+r)}return!0},validateMember:function(t,e,r){switch(t.type){case"structure":return this.validateStructure(t,e,r);case"list":return this.validateList(t,e,r);case"map":return this.validateMap(t,e,r);default:return this.validateScalar(t,e,r)}},validateList:function(t,e,r){if(this.validateType(e,r,[Array])){this.validateRange(t,e.length,r,"list member count");for(var n=0;n<e.length;n++)this.validateMember(t.member,e[n],r+"["+n+"]")}},validateMap:function(t,e,r){if(this.validateType(e,r,["object"],"map")){var n=0;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(this.validateMember(t.key,i,r+"[key='"+i+"']"),this.validateMember(t.value,e[i],r+"['"+i+"']"),n++);this.validateRange(t,n,r,"map member count")}},validateScalar:function(t,e,r){switch(t.type){case null:case void 0:case"string":return this.validateString(t,e,r);case"base64":case"binary":return this.validatePayload(e,r);case"integer":case"float":return this.validateNumber(t,e,r);case"boolean":return this.validateType(e,r,["boolean"]);case"timestamp":return this.validateType(e,r,[Date,/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/,"number"],"Date object, ISO-8601 string, or a UNIX timestamp");default:return this.fail("UnkownType","Unhandled type "+t.type+" for "+r)}},validateString:function(t,e,r){this.validateType(e,r,["string"])&&(this.validateEnum(t,e,r),this.validateRange(t,e.length,r,"string length"),this.validatePattern(t,e,r))},validatePattern:function(t,e,r){this.validation.pattern&&void 0!==t.pattern&&(new RegExp(t.pattern).test(e)||this.fail("PatternMatchError",'Provided value "'+e+'" does not match regex pattern /'+t.pattern+"/ for "+r))},validateRange:function(t,e,r,n){this.validation.min&&void 0!==t.min&&e<t.min&&this.fail("MinRangeError","Expected "+n+" >= "+t.min+", but found "+e+" for "+r),this.validation.max&&void 0!==t.max&&e>t.max&&this.fail("MaxRangeError","Expected "+n+" <= "+t.max+", but found "+e+" for "+r)},validateEnum:function(t,e,r){this.validation["enum"]&&void 0!==t["enum"]&&-1===t["enum"].indexOf(e)&&this.fail("EnumError","Found string value of "+e+", but expected "+t["enum"].join("|")+" for "+r)},validateType:function(t,e,r,i){if(null===t||void 0===t)return!1;for(var o=!1,s=0;s<r.length;s++){if("string"==typeof r[s]){if(typeof t===r[s])return!0}else if(r[s]instanceof RegExp){if((t||"").toString().match(r[s]))return!0}else{if(t instanceof r[s])return!0;if(n.util.isType(t,r[s]))return!0;i||o||(r=r.slice()),r[s]=n.util.typeName(r[s])}o=!0}var a=i;a||(a=r.join(", ").replace(/,([^,]+)$/,", or$1"));var u=a.match(/^[aeiou]/i)?"n":"";return this.fail("InvalidParameterType","Expected "+e+" to be a"+u+" "+a),!1},validateNumber:function(t,e,r){if(null!==e&&void 0!==e){if("string"==typeof e){var n=parseFloat(e);n.toString()===e&&(e=n)}this.validateType(e,r,["number"])&&this.validateRange(t,e,r,"numeric value")}},validatePayload:function(t,e){if(null!==t&&void 0!==t&&"string"!=typeof t&&(!t||"number"!=typeof t.byteLength)){if(n.util.isNode()){var r=n.util.nodeRequire("stream").Stream;if(n.util.Buffer.isBuffer(t)||t instanceof r)return}var i=["Buffer","Stream","File","Blob","ArrayBuffer","DataView"];if(t)for(var o=0;o<i.length;o++){if(n.util.isType(t,i[o]))return;if(n.util.typeName(t.constructor)===i[o])return}this.fail("InvalidParameterType","Expected "+e+" to be a string, Buffer, Stream, Blob, or typed array object")}}})},{"./core":25}],42:[function(t,e,r){function n(t,e){t=t||{},e=e||{},e.api=this,t.metadata=t.metadata||{},l(this,"isApi",!0,!1),l(this,"apiVersion",t.metadata.apiVersion),l(this,"endpointPrefix",t.metadata.endpointPrefix),l(this,"signingName",t.metadata.signingName),l(this,"globalEndpoint",t.metadata.globalEndpoint),l(this,"signatureVersion",t.metadata.signatureVersion),l(this,"jsonVersion",t.metadata.jsonVersion),l(this,"targetPrefix",t.metadata.targetPrefix),l(this,"protocol",t.metadata.protocol),l(this,"timestampFormat",t.metadata.timestampFormat),l(this,"xmlNamespaceUri",t.metadata.xmlNamespace),l(this,"abbreviation",t.metadata.serviceAbbreviation),l(this,"fullName",t.metadata.serviceFullName),h(this,"className",function(){var e=t.metadata.serviceAbbreviation||t.metadata.serviceFullName;return e?(e=e.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g,""),"ElasticLoadBalancing"===e&&(e="ELB"),e):null}),l(this,"operations",new i(t.operations,e,function(t,r){return new o(t,r,e)},c.string.lowerFirst)),l(this,"shapes",new i(t.shapes,e,function(t,r){return s.create(r,e)})),l(this,"paginators",new i(t.paginators,e,function(t,r){return new a(t,r,e)})),l(this,"waiters",new i(t.waiters,e,function(t,r){return new u(t,r,e)},c.string.lowerFirst)),e.documentation&&(l(this,"documentation",t.documentation),l(this,"documentationUrl",t.documentationUrl))}var i=t("./collection"),o=t("./operation"),s=t("./shape"),a=t("./paginator"),u=t("./resource_waiter"),c=t("../util"),l=c.property,h=c.memoizedProperty;e.exports=n},{"../util":85,"./collection":43,"./operation":44,"./paginator":45,"./resource_waiter":46,"./shape":47}],46:[function(t,e,r){function n(t,e,r){r=r||{},o(this,"name",t),o(this,"api",r.api,!1),e.operation&&o(this,"operation",i.string.lowerFirst(e.operation));var n=this,s=["type","description","delay","maxAttempts","acceptors"];s.forEach(function(t){var r=e[t];r&&o(n,t,r)})}var i=t("../util"),o=i.property;e.exports=n},{"../util":85}],45:[function(t,e,r){function n(t,e){i(this,"inputToken",e.input_token),i(this,"limitKey",e.limit_key),i(this,"moreResults",e.more_results),i(this,"outputToken",e.output_token),i(this,"resultKey",e.result_key)}var i=t("../util").property;e.exports=n},{"../util":85}],44:[function(t,e,r){function n(t,e,r){r=r||{},s(this,"name",e.name||t),s(this,"api",r.api,!1),e.http=e.http||{},s(this,"httpMethod",e.http.method||"POST"),s(this,"httpPath",e.http.requestUri||"/"),s(this,"authtype",e.authtype||""),a(this,"input",function(){return e.input?i.create(e.input,r):new i.create({type:"structure"},r)}),a(this,"output",function(){return e.output?i.create(e.output,r):new i.create({type:"structure"},r)}),a(this,"errors",function(){var t=[];if(!e.errors)return null;for(var n=0;n<e.errors.length;n++)t.push(i.create(e.errors[n],r));return t}),a(this,"paginator",function(){return r.api.paginators[t]}),r.documentation&&(s(this,"documentation",e.documentation),s(this,"documentationUrl",e.documentationUrl))}var i=t("./shape"),o=t("../util"),s=o.property,a=o.memoizedProperty;e.exports=n},{"../util":85,"./shape":47}],38:[function(t,e,r){var n=t("./core"),i=n.util.inherit;n.Endpoint=i({constructor:function(t,e){if(n.util.hideProperties(this,["slashes","auth","hash","search","query"]),"undefined"==typeof t||null===t)throw new Error("Invalid endpoint: "+t);if("string"!=typeof t)return n.util.copy(t);if(!t.match(/^http/)){var r=e&&void 0!==e.sslEnabled?e.sslEnabled:n.config.sslEnabled;t=(r?"https":"http")+"://"+t}n.util.update(this,n.util.urlParse(t)),this.port?this.port=parseInt(this.port,10):this.port="https:"===this.protocol?443:80}}),n.HttpRequest=i({constructor:function(t,e,r){t=new n.Endpoint(t),this.method="POST",this.path=t.path||"/",this.headers={},this.body="",this.endpoint=t,this.region=e,this.setUserAgent(r)},setUserAgent:function(t){var e=n.util.isBrowser()?"X-Amz-":"",r="";"string"==typeof t&&t&&(r+=" "+t),this.headers[e+"User-Agent"]=n.util.userAgent()+r},pathname:function(){return this.path.split("?",1)[0]},search:function(){var t=this.path.split("?",2)[1];return t?(t=n.util.queryStringParse(t),n.util.queryParamsToString(t)):""}}),n.HttpResponse=i({constructor:function(){this.statusCode=void 0,this.headers={},this.body=void 0,this.streaming=!1,this.stream=null},createUnbufferedStream:function(){return this.streaming=!0,this.stream}}),n.HttpClient=i({}),n.HttpClient.getInstance=function(){return void 0===this.singleton&&(this.singleton=new this),this.singleton}},{"./core":25}],37:[function(t,e,r){var n=t("./core"),i=t("./sequential_executor");n.EventListeners={Core:{}},n.EventListeners={Core:(new i).addNamedListeners(function(t,e){e("VALIDATE_CREDENTIALS","validate",function(t,e){return t.service.api.signatureVersion?void t.service.config.getCredentials(function(r){r&&(t.response.error=n.util.error(r,{code:"CredentialsError",message:"Missing credentials in config"})),e()}):e()}),t("VALIDATE_REGION","validate",function(t){t.service.config.region||t.service.isGlobalEndpoint||(t.response.error=n.util.error(new Error,{code:"ConfigError",message:"Missing region in config"}))}),t("VALIDATE_PARAMETERS","validate",function(t){var e=t.service.api.operations[t.operation].input,r=t.service.config.paramValidation;new n.ParamValidator(r).validate(e,t.params)}),e("COMPUTE_SHA256","afterBuild",function(t,e){if(t.haltHandlersOnError(),!t.service.api.signatureVersion)return e();if(t.service.getSignerClass(t)===n.Signers.V4){var r=t.httpRequest.body||"";n.util.computeSha256(r,function(r,n){r?e(r):(t.httpRequest.headers["X-Amz-Content-Sha256"]=n,e())})}else e()}),t("SET_CONTENT_LENGTH","afterBuild",function(t){if(void 0===t.httpRequest.headers["Content-Length"]){var e=n.util.string.byteLength(t.httpRequest.body);t.httpRequest.headers["Content-Length"]=e}}),t("SET_HTTP_HOST","afterBuild",function(t){t.httpRequest.headers.Host=t.httpRequest.endpoint.host}),t("RESTART","restart",function(){var t=this.response.error;t&&t.retryable&&(this.httpRequest=new n.HttpRequest(this.service.endpoint,this.service.region),this.response.retryCount<this.service.config.maxRetries?this.response.retryCount++:this.response.error=null)}),e("SIGN","sign",function(t,e){var r=t.service;return r.api.signatureVersion?void r.config.getCredentials(function(i,o){if(i)return t.response.error=i,e();try{var s=n.util.date.getDate(),a=r.getSignerClass(t),u=new a(t.httpRequest,r.api.signingName||r.api.endpointPrefix,r.config.signatureCache);u.setServiceClientId(r._clientId),delete t.httpRequest.headers.Authorization,delete t.httpRequest.headers.Date,delete t.httpRequest.headers["X-Amz-Date"],u.addAuthorization(o,s),t.signedAt=s}catch(c){t.response.error=c}e()}):e()}),t("VALIDATE_RESPONSE","validateResponse",function(t){this.service.successfulResponse(t,this)?(t.data={},t.error=null):(t.data=null,t.error=n.util.error(new Error,{code:"UnknownError",message:"An unknown error occurred."}))}),e("SEND","send",function(t,e){function r(r){t.httpResponse.stream=r,r.on("headers",function(e,i){t.request.emit("httpHeaders",[e,i,t]),t.httpResponse.streaming||(2===n.HttpClient.streamsApiVersion?r.on("readable",function(){var e=r.read();null!==e&&t.request.emit("httpData",[e,t])}):r.on("data",function(e){t.request.emit("httpData",[e,t])}))}),r.on("end",function(){t.request.emit("httpDone"),e()})}function i(e){e.on("sendProgress",function(e){t.request.emit("httpUploadProgress",[e,t])}),e.on("receiveProgress",function(e){t.request.emit("httpDownloadProgress",[e,t])})}function o(r){t.error=n.util.error(r,{code:"NetworkingError",region:t.request.httpRequest.region,hostname:t.request.httpRequest.endpoint.hostname,retryable:!0}),t.request.emit("httpError",[t.error,t],function(){e()})}function s(){var e=n.HttpClient.getInstance(),s=t.request.service.config.httpOptions||{};try{var a=e.handleRequest(t.request.httpRequest,s,r,o);i(a)}catch(u){o(u)}}t.httpResponse._abortCallback=e,t.error=null,t.data=null;var a=(n.util.date.getDate()-this.signedAt)/1e3;a>=600?this.emit("sign",[this],function(t){t?e(t):s()}):s()}),t("HTTP_HEADERS","httpHeaders",function(t,e,r){r.httpResponse.statusCode=t,r.httpResponse.headers=e,r.httpResponse.body=new n.util.Buffer(""),r.httpResponse.buffers=[],r.httpResponse.numBytes=0;var i=e.date||e.Date;if(i){var o=Date.parse(i);r.request.service.config.correctClockSkew&&n.util.isClockSkewed(o)&&n.util.applyClockOffset(o)}}),t("HTTP_DATA","httpData",function(t,e){if(t){if(n.util.isNode()){e.httpResponse.numBytes+=t.length;var r=e.httpResponse.headers["content-length"],i={loaded:e.httpResponse.numBytes,total:r};e.request.emit("httpDownloadProgress",[i,e])}e.httpResponse.buffers.push(new n.util.Buffer(t))}}),t("HTTP_DONE","httpDone",function(t){if(t.httpResponse.buffers&&t.httpResponse.buffers.length>0){var e=n.util.buffer.concat(t.httpResponse.buffers);t.httpResponse.body=e}delete t.httpResponse.numBytes,delete t.httpResponse.buffers}),t("FINALIZE_ERROR","retry",function(t){t.httpResponse.statusCode&&(t.error.statusCode=t.httpResponse.statusCode,void 0===t.error.retryable&&(t.error.retryable=this.service.retryableError(t.error,this)))}),t("INVALIDATE_CREDENTIALS","retry",function(t){if(t.error)switch(t.error.code){case"RequestExpired":case"ExpiredTokenException":case"ExpiredToken":t.error.retryable=!0,t.request.service.config.credentials.expired=!0}}),t("EXPIRED_SIGNATURE","retry",function(t){var e=t.error;e&&"string"==typeof e.code&&"string"==typeof e.message&&e.code.match(/Signature/)&&e.message.match(/expired/)&&(t.error.retryable=!0)}),t("CLOCK_SKEWED","retry",function(t){t.error&&this.service.clockSkewError(t.error)&&this.service.config.correctClockSkew&&n.config.isClockSkewed&&(t.error.retryable=!0)}),t("REDIRECT","retry",function(t){t.error&&t.error.statusCode>=300&&t.error.statusCode<400&&t.httpResponse.headers.location&&(this.httpRequest.endpoint=new n.Endpoint(t.httpResponse.headers.location),this.httpRequest.headers.Host=this.httpRequest.endpoint.host,t.error.redirect=!0,t.error.retryable=!0)}),t("RETRY_CHECK","retry",function(t){t.error&&(t.error.redirect&&t.redirectCount<t.maxRedirects?t.error.retryDelay=0:t.retryCount<t.maxRetries&&(t.error.retryDelay=this.service.retryDelays(t.retryCount)||0))}),e("RESET_RETRY_STATE","afterRetry",function(t,e){var r,n=!1;t.error&&(r=t.error.retryDelay||0,t.error.retryable&&t.retryCount<t.maxRetries?(t.retryCount++,n=!0):t.error.redirect&&t.redirectCount<t.maxRedirects&&(t.redirectCount++,n=!0)),n?(t.error=null,setTimeout(e,r)):e()})}),CorePost:(new i).addNamedListeners(function(t){t("EXTRACT_REQUEST_ID","extractData",n.util.extractRequestId),t("EXTRACT_REQUEST_ID","extractError",n.util.extractRequestId),t("ENOTFOUND_ERROR","httpError",function(t){if("NetworkingError"===t.code&&"ENOTFOUND"===t.errno){var e="Inaccessible host: `"+t.hostname+"'. This service may not be available in the `"+t.region+"' region.";this.response.error=n.util.error(new Error(e),{code:"UnknownEndpoint",region:t.region,hostname:t.hostname,retryable:!0,originalError:t})}})}),Logger:(new i).addNamedListeners(function(e){e("LOG_REQUEST","complete",function(e){function r(){var r=n.util.date.getDate().getTime(),s=(r-i.startTime.getTime())/1e3,a=o.isTTY?!0:!1,u=e.httpResponse.statusCode,c=t("util").inspect(i.params,!0,null),l="";return a&&(l+="[33m"),l+="[AWS "+i.service.serviceIdentifier+" "+u,l+=" "+s.toString()+"s "+e.retryCount+" retries]",a&&(l+="[0;1m"),l+=" "+n.util.string.lowerFirst(i.operation),l+="("+c+")",a&&(l+="[0m"),l}var i=e.request,o=i.service.config.logger;if(o){var s=r();"function"==typeof o.log?o.log(s):"function"==typeof o.write&&o.write(s+"\n")}})}),Json:(new i).addNamedListeners(function(e){var r=t("./protocol/json");e("BUILD","build",r.buildRequest),e("EXTRACT_DATA","extractData",r.extractData),e("EXTRACT_ERROR","extractError",r.extractError)}),Rest:(new i).addNamedListeners(function(e){var r=t("./protocol/rest");e("BUILD","build",r.buildRequest),e("EXTRACT_DATA","extractData",r.extractData),e("EXTRACT_ERROR","extractError",r.extractError)}),RestJson:(new i).addNamedListeners(function(e){var r=t("./protocol/rest_json");e("BUILD","build",r.buildRequest),e("EXTRACT_DATA","extractData",r.extractData),e("EXTRACT_ERROR","extractError",r.extractError)}),RestXml:(new i).addNamedListeners(function(e){var r=t("./protocol/rest_xml");e("BUILD","build",r.buildRequest),e("EXTRACT_DATA","extractData",r.extractData),e("EXTRACT_ERROR","extractError",r.extractError)}),Query:(new i).addNamedListeners(function(e){var r=t("./protocol/query");e("BUILD","build",r.buildRequest),e("EXTRACT_DATA","extractData",r.extractData),e("EXTRACT_ERROR","extractError",r.extractError)})}},{"./core":25,"./protocol/json":49,"./protocol/query":50,"./protocol/rest":51,"./protocol/rest_json":52,"./protocol/rest_xml":53,"./sequential_executor":61,util:20}],61:[function(t,e,r){var n=t("./core");n.SequentialExecutor=n.util.inherit({constructor:function(){this._events={}},listeners:function(t){return this._events[t]?this._events[t].slice(0):[]},on:function(t,e){return this._events[t]?this._events[t].push(e):this._events[t]=[e],this},onAsync:function(t,e){return e._isAsync=!0,this.on(t,e)},removeListener:function(t,e){var r=this._events[t];if(r){for(var n=r.length,i=-1,o=0;n>o;++o)r[o]===e&&(i=o);i>-1&&r.splice(i,1)}return this},removeAllListeners:function(t){return t?delete this._events[t]:this._events={},this},emit:function(t,e,r){r||(r=function(){});var n=this.listeners(t),i=n.length;return this.callListeners(n,e,r),i>0},callListeners:function(t,e,r,i){function o(i){return i&&(a=n.util.error(a||new Error,i),s._haltHandlersOnError)?r.call(s,a):void s.callListeners(t,e,r,a)}for(var s=this,a=i||null;t.length>0;){var u=t.shift();if(u._isAsync)return void u.apply(s,e.concat([o]));try{u.apply(s,e)}catch(c){a=n.util.error(a||new Error,c)}if(a&&s._haltHandlersOnError)return void r.call(s,a)}r.call(s,a)},addListeners:function(t){var e=this;return t._events&&(t=t._events),n.util.each(t,function(t,r){"function"==typeof r&&(r=[r]),n.util.arrayEach(r,function(r){e.on(t,r)})}),e},addNamedListener:function(t,e,r){return this[t]=r,this.addListener(e,r),this},addNamedAsyncListener:function(t,e,r){return r._isAsync=!0,this.addNamedListener(t,e,r)},addNamedListeners:function(t){var e=this;return t(function(){e.addNamedListener.apply(e,arguments)},function(){e.addNamedAsyncListener.apply(e,arguments)}),this}}),n.SequentialExecutor.prototype.addListener=n.SequentialExecutor.prototype.on,e.exports=n.SequentialExecutor},{"./core":25}],53:[function(t,e,r){function n(t){var e=t.service.api.operations[t.operation].input,r=new a.XML.Builder,n=t.params,i=e.payload;if(i){var o=e.members[i];if(n=n[i],void 0===n)return;if("structure"===o.type){var s=o.name;t.httpRequest.body=r.toXML(n,o,s,!0)}else t.httpRequest.body=n}else t.httpRequest.body=r.toXML(n,e,e.name||e.shape||u.string.upperFirst(t.operation)+"Request")}function i(t){c.buildRequest(t),["GET","HEAD"].indexOf(t.httpRequest.method)<0&&n(t)}function o(t){c.extractError(t);var e=(new a.XML.Parser).parse(t.httpResponse.body.toString());e.Errors&&(e=e.Errors),e.Error&&(e=e.Error),e.Code?t.error=u.error(new Error,{code:e.Code,message:e.Message}):t.error=u.error(new Error,{code:t.httpResponse.statusCode,message:null})}function s(t){c.extractData(t);var e,r=t.request,n=t.httpResponse.body,i=r.service.api.operations[r.operation],o=i.output,s=o.payload;if(s){var l=o.members[s];l.isStreaming?t.data[s]=n:"structure"===l.type?(e=new a.XML.Parser,t.data[s]=e.parse(n.toString(),l)):t.data[s]=n.toString()}else if(n.length>0){e=new a.XML.Parser;var h=e.parse(n.toString(),o);u.update(t.data,h)}}var a=t("../core"),u=t("../util"),c=t("./rest");e.exports={buildRequest:i,extractError:o,extractData:s}},{"../core":25,"../util":85,"./rest":51}],52:[function(t,e,r){function n(t){var e=new l,r=t.service.api.operations[t.operation].input;if(r.payload){var n={},i=r.members[r.payload];if(n=t.params[r.payload],void 0===n)return;"structure"===i.type?t.httpRequest.body=e.build(n,i):t.httpRequest.body=n}else t.httpRequest.body=e.build(t.params,r)}function i(t){u.buildRequest(t),["GET","HEAD","DELETE"].indexOf(t.httpRequest.method)<0&&n(t)}function o(t){c.extractError(t)}function s(t){u.extractData(t);var e=t.request,r=e.service.api.operations[e.operation].output||{};if(r.payload){var n=r.members[r.payload],i=t.httpResponse.body;if(n.isStreaming)t.data[r.payload]=i;else if("structure"===n.type||"list"===n.type){var o=new h;t.data[r.payload]=o.parse(i,n)}else t.data[r.payload]=i.toString()}else{var s=t.data;c.extractData(t),t.data=a.merge(s,t.data)}}var a=t("../util"),u=t("./rest"),c=t("./json"),l=t("../json/builder"),h=t("../json/parser");e.exports={buildRequest:i,extractError:o,extractData:s}},{"../json/builder":40,"../json/parser":41,"../util":85,"./json":49,"./rest":51}],51:[function(t,e,r){function n(t){t.httpRequest.method=t.service.api.operations[t.operation].httpMethod}function i(t){var e=t.service.api.operations[t.operation],r=e.input,n=[t.httpRequest.endpoint.path,e.httpPath].join("/");n=n.replace(/\/+/g,"/");var i={},o=!1;if(c.each(r.members,function(e,r){var s=t.params[e];if(null!==s&&void 0!==s)if("uri"===r.location){var a=new RegExp("\\{"+r.name+"(\\+)?\\}");n=n.replace(a,function(t,e){var r=e?c.uriEscapePath:c.uriEscape;return r(String(s))})}else"querystring"===r.location&&(o=!0,"list"===r.type?i[r.name]=s.map(function(t){return c.uriEscape(String(t))}):"map"===r.type?c.each(s,function(t,e){Array.isArray(e)?i[t]=e.map(function(t){return c.uriEscape(String(t))}):i[t]=c.uriEscape(String(e))}):i[r.name]=c.uriEscape(String(s)))}),o){n+=n.indexOf("?")>=0?"&":"?";var s=[];c.arrayEach(Object.keys(i).sort(),function(t){Array.isArray(i[t])||(i[t]=[i[t]]);for(var e=0;e<i[t].length;e++)s.push(c.uriEscape(String(t))+"="+i[t][e])}),n+=s.join("&")}t.httpRequest.path=n}function o(t){var e=t.service.api.operations[t.operation];c.each(e.input.members,function(e,r){var n=t.params[e];null!==n&&void 0!==n&&("headers"===r.location&&"map"===r.type?c.each(n,function(e,n){t.httpRequest.headers[r.name+e]=n}):"header"===r.location&&(n=r.toWireFormat(n).toString(),t.httpRequest.headers[r.name]=n))})}function s(t){n(t),i(t),o(t)}function a(){}function u(t){var e=t.request,r={},n=t.httpResponse,i=e.service.api.operations[e.operation],o=i.output,s={};c.each(n.headers,function(t,e){s[t.toLowerCase()]=e}),c.each(o.members,function(t,e){var i=(e.name||t).toLowerCase();if("headers"===e.location&&"map"===e.type){r[t]={};var o=e.isLocationName?e.name:"",a=new RegExp("^"+o+"(.+)","i");c.each(n.headers,function(e,n){var i=e.match(a);null!==i&&(r[t][i[1]]=n)})}else"header"===e.location?void 0!==s[i]&&(r[t]=s[i]):"statusCode"===e.location&&(r[t]=parseInt(n.statusCode,10))}),t.data=r}var c=t("../util");e.exports={buildRequest:s,extractError:a,extractData:u}},{"../util":85}],50:[function(t,e,r){function n(t){var e=t.service.api.operations[t.operation],r=t.httpRequest;r.headers["Content-Type"]="application/x-www-form-urlencoded; charset=utf-8",r.params={Version:t.service.api.apiVersion,Action:e.name};var n=new u;n.serialize(t.params,e.input,function(t,e){r.params[t]=e}),r.body=a.queryParamsToString(r.params)}function i(t){var e,r=t.httpResponse.body.toString();e=r.match("<UnknownOperationException")?{Code:"UnknownOperation",Message:"Unknown operation "+t.request.operation}:(new s.XML.Parser).parse(r),e.requestId&&!t.requestId&&(t.requestId=e.requestId),e.Errors&&(e=e.Errors),e.Error&&(e=e.Error),e.Code?t.error=a.error(new Error,{code:e.Code,message:e.Message}):t.error=a.error(new Error,{code:t.httpResponse.statusCode,message:null})}function o(t){var e=t.request,r=e.service.api.operations[e.operation],n=r.output||{},i=n;if(i.resultWrapper){var o=c.create({type:"structure"});o.members[i.resultWrapper]=n,o.memberNames=[i.resultWrapper],a.property(n,"name",n.resultWrapper),n=o}var u=new s.XML.Parser;if(n&&n.members&&!n.members._XAMZRequestId){var l=c.create({type:"string"},{api:{protocol:"query"}},"requestId");n.members._XAMZRequestId=l}var h=u.parse(t.httpResponse.body.toString(),n);t.requestId=h._XAMZRequestId||h.requestId,h._XAMZRequestId&&delete h._XAMZRequestId,i.resultWrapper&&h[i.resultWrapper]&&(a.update(h,h[i.resultWrapper]),delete h[i.resultWrapper]),t.data=h}var s=t("../core"),a=t("../util"),u=t("../query/query_param_serializer"),c=t("../model/shape");e.exports={buildRequest:n,extractError:i,extractData:o}},{"../core":25,"../model/shape":47,"../query/query_param_serializer":54,"../util":85}],54:[function(t,e,r){function n(){}function i(t){return t.isQueryName||"ec2"!==t.api.protocol?t.name:t.name[0].toUpperCase()+t.name.substr(1)}function o(t,e,r,n){c.each(r.members,function(r,o){var s=e[r];if(null!==s&&void 0!==s){var a=i(o);a=t?t+"."+a:a,u(a,s,o,n)}})}function s(t,e,r,n){var i=1;c.each(e,function(e,o){var s=r.flattened?".":".entry.",a=s+i++ +".",c=a+(r.key.name||"key"),l=a+(r.value.name||"value");u(t+c,e,r.key,n),u(t+l,o,r.value,n)})}function a(t,e,r,n){var o=r.member||{};return 0===e.length?void n.call(this,t,null):void c.arrayEach(e,function(e,s){var a="."+(s+1);if("ec2"===r.api.protocol)a+="";else if(r.flattened){if(o.name){var c=t.split(".");c.pop(),c.push(i(o)),t=c.join(".")}}else a=".member"+a;u(t+a,e,o,n)})}function u(t,e,r,n){null!==e&&void 0!==e&&("structure"===r.type?o(t,e,r,n):"list"===r.type?a(t,e,r,n):"map"===r.type?s(t,e,r,n):n(t,r.toWireFormat(e).toString()))}var c=t("../util");n.prototype.serialize=function(t,e,r){o("",t,e,r)},e.exports=n},{"../util":85}],47:[function(t,e,r){function n(t,e,r){null!==r&&void 0!==r&&g.property.apply(this,arguments)}function i(t,e){t.constructor.prototype[e]||g.memoizedProperty.apply(this,arguments)}function o(t,e,r){e=e||{},n(this,"shape",t.shape),n(this,"api",e.api,!1),n(this,"type",t.type),n(this,"enum",t["enum"]),n(this,"min",t.min),n(this,"max",t.max),n(this,"pattern",t.pattern),n(this,"location",t.location||this.location||"body"),n(this,"name",this.name||t.xmlName||t.queryName||t.locationName||r),n(this,"isStreaming",t.streaming||this.isStreaming||!1),n(this,"isComposite",t.isComposite||!1),n(this,"isShape",!0,!1),n(this,"isQueryName",t.queryName?!0:!1,!1),n(this,"isLocationName",t.locationName?!0:!1,!1),e.documentation&&(n(this,"documentation",t.documentation),n(this,"documentationUrl",t.documentationUrl)),t.xmlAttribute&&n(this,"isXmlAttribute",t.xmlAttribute||!1),n(this,"defaultValue",null),this.toWireFormat=function(t){return null===t||void 0===t?"":t},this.toType=function(t){return t}}function s(t){o.apply(this,arguments),n(this,"isComposite",!0),t.flattened&&n(this,"flattened",t.flattened||!1)}function a(t,e){var r=null,a=!this.isShape;s.apply(this,arguments),a&&(n(this,"defaultValue",function(){return{}}),n(this,"members",{}),n(this,"memberNames",[]),n(this,"required",[]),n(this,"isRequired",function(){return!1})),t.members&&(n(this,"members",new v(t.members,e,function(t,r){return o.create(r,e,t)})),i(this,"memberNames",function(){return t.xmlOrder||Object.keys(t.members)})),t.required&&(n(this,"required",t.required),n(this,"isRequired",function(e){if(!r){r={};for(var n=0;n<t.required.length;n++)r[t.required[n]]=!0}return r[e]},!1,!0)),n(this,"resultWrapper",t.resultWrapper||null),t.payload&&n(this,"payload",t.payload),"string"==typeof t.xmlNamespace?n(this,"xmlNamespaceUri",t.xmlNamespace):"object"==typeof t.xmlNamespace&&(n(this,"xmlNamespacePrefix",t.xmlNamespace.prefix),n(this,"xmlNamespaceUri",t.xmlNamespace.uri))}function u(t,e){var r=this,a=!this.isShape;if(s.apply(this,arguments),a&&n(this,"defaultValue",function(){return[]}),t.member&&i(this,"member",function(){return o.create(t.member,e)}),this.flattened){var u=this.name;i(this,"name",function(){return r.member.name||u})}}function c(t,e){var r=!this.isShape;s.apply(this,arguments),r&&(n(this,"defaultValue",function(){return{}}),n(this,"key",o.create({type:"string"},e)),n(this,"value",o.create({type:"string"},e))),t.key&&i(this,"key",function(){return o.create(t.key,e)}),t.value&&i(this,"value",function(){return o.create(t.value,e)})}function l(t){var e=this;if(o.apply(this,arguments),"header"===this.location)n(this,"timestampFormat","rfc822");else if(t.timestampFormat)n(this,"timestampFormat",t.timestampFormat);else if(this.api)if(this.api.timestampFormat)n(this,"timestampFormat",this.api.timestampFormat);else switch(this.api.protocol){case"json":case"rest-json":n(this,"timestampFormat","unixTimestamp");break;case"rest-xml":case"query":case"ec2":n(this,"timestampFormat","iso8601")}this.toType=function(t){return null===t||void 0===t?null:"function"==typeof t.toUTCString?t:"string"==typeof t||"number"==typeof t?g.date.parseTimestamp(t):null},this.toWireFormat=function(t){return g.date.format(t,e.timestampFormat)}}function h(){if(o.apply(this,arguments),this.api)switch(this.api.protocol){case"rest-xml":case"query":case"ec2":this.toType=function(t){return t||""}}}function p(){o.apply(this,arguments),this.toType=function(t){return null===t||void 0===t?null:parseFloat(t)},this.toWireFormat=this.toType}function f(){o.apply(this,arguments),this.toType=function(t){return null===t||void 0===t?null:parseInt(t,10)},this.toWireFormat=this.toType}function d(){o.apply(this,arguments),this.toType=g.base64.decode,this.toWireFormat=g.base64.encode}function y(){d.apply(this,arguments)}function m(){o.apply(this,arguments),this.toType=function(t){return"boolean"==typeof t?t:null===t||void 0===t?null:"true"===t}}var v=t("./collection"),g=t("../util");o.normalizedTypes={character:"string","double":"float","long":"integer","short":"integer",biginteger:"integer",bigdecimal:"float",blob:"binary"},o.types={structure:a,list:u,map:c,"boolean":m,timestamp:l,"float":p,integer:f,string:h,base64:y,binary:d},o.resolve=function(t,e){if(t.shape){var r=e.api.shapes[t.shape];if(!r)throw new Error("Cannot find shape reference: "+t.shape);return r}return null},o.create=function(t,e,r){if(t.isShape)return t;var n=o.resolve(t,e);if(n){var i=Object.keys(t);if(e.documentation||(i=i.filter(function(t){return!t.match(/documentation/)})),i===["shape"])return n;var s=function(){n.constructor.call(this,t,e,r)};return s.prototype=n,new s}t.type||(t.members?t.type="structure":t.member?t.type="list":t.key?t.type="map":t.type="string");var a=t.type;if(o.normalizedTypes[t.type]&&(t.type=o.normalizedTypes[t.type]),o.types[t.type])return new o.types[t.type](t,e,r);throw new Error("Unrecognized shape type: "+a)},o.shapes={StructureShape:a,ListShape:u,MapShape:c,StringShape:h,BooleanShape:m,Base64Shape:y},e.exports=o},{"../util":85,"./collection":43}],43:[function(t,e,r){function n(t,e,r,n){o(this,n(t),function(){return r(t,e)})}function i(t,e,r,i){i=i||String;var o=this;for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.call(o,s,t[s],r,i)}var o=t("../util").memoizedProperty;
e.exports=i},{"../util":85}],49:[function(t,e,r){function n(t){var e=t.httpRequest,r=t.service.api,n=r.targetPrefix+"."+r.operations[t.operation].name,i=r.jsonVersion||"1.0",o=r.operations[t.operation].input,s=new a;1===i&&(i="1.0"),e.body=s.build(t.params||{},o),e.headers["Content-Type"]="application/x-amz-json-"+i,e.headers["X-Amz-Target"]=n}function i(t){var e={},r=t.httpResponse;if(e.code=r.headers["x-amzn-errortype"]||"UnknownError","string"==typeof e.code&&(e.code=e.code.split(":")[0]),r.body.length>0){var n=JSON.parse(r.body.toString());(n.__type||n.code)&&(e.code=(n.__type||n.code).split("#").pop()),"RequestEntityTooLarge"===e.code?e.message="Request body must be less than 1 MB":e.message=n.message||n.Message||null}else e.statusCode=r.statusCode,e.message=r.statusCode.toString();t.error=s.error(new Error,e)}function o(t){var e=t.httpResponse.body.toString()||"{}";if(t.request.service.config.convertResponseTypes===!1)t.data=JSON.parse(e);else{var r=t.request.service.api.operations[t.request.operation],n=r.output||{},i=new u;t.data=i.parse(e,n)}}var s=t("../util"),a=t("../json/builder"),u=t("../json/parser");e.exports={buildRequest:n,extractError:i,extractData:o}},{"../json/builder":40,"../json/parser":41,"../util":85}],41:[function(t,e,r){function n(){}function i(t,e){if(!e||void 0===t)return void 0;switch(e.type){case"structure":return o(t,e);case"map":return a(t,e);case"list":return s(t,e);default:return u(t,e)}}function o(t,e){if(null==t)return void 0;var r={},n=e.members;return c.each(n,function(e,n){var o=n.isLocationName?n.name:e;if(Object.prototype.hasOwnProperty.call(t,o)){var s=t[o],a=i(s,n);void 0!==a&&(r[e]=a)}}),r}function s(t,e){if(null==t)return void 0;var r=[];return c.arrayEach(t,function(t){var n=i(t,e.member);void 0===n?r.push(null):r.push(n)}),r}function a(t,e){if(null==t)return void 0;var r={};return c.each(t,function(t,n){var o=i(n,e.value);void 0===o?r[t]=null:r[t]=o}),r}function u(t,e){return e.toType(t)}var c=t("../util");n.prototype.parse=function(t,e){return i(JSON.parse(t),e)},e.exports=n},{"../util":85}],40:[function(t,e,r){function n(){}function i(t,e){if(!e||void 0===t||null===t)return void 0;switch(e.type){case"structure":return o(t,e);case"map":return a(t,e);case"list":return s(t,e);default:return u(t,e)}}function o(t,e){var r={};return c.each(t,function(t,n){var o=e.members[t];if(o){if("body"!==o.location)return;var s=o.isLocationName?o.name:t,a=i(n,o);void 0!==a&&(r[s]=a)}}),r}function s(t,e){var r=[];return c.arrayEach(t,function(t){var n=i(t,e.member);void 0!==n&&r.push(n)}),r}function a(t,e){var r={};return c.each(t,function(t,n){var o=i(n,e.value);void 0!==o&&(r[t]=o)}),r}function u(t,e){return e.toWireFormat(t)}var c=t("../util");n.prototype.build=function(t,e){return JSON.stringify(i(t,e))},e.exports=n},{"../util":85}],85:[function(t,e,r){(function(r){var n,i=t("crypto"),o=t("buffer").Buffer,s={engine:function(){return s.isBrowser()&&"undefined"!=typeof navigator?navigator.userAgent:r.platform+"/"+r.version},userAgent:function(){var e=s.isBrowser()?"js":"nodejs",r="aws-sdk-"+e+"/"+t("./core").VERSION;return"nodejs"===e&&(r+=" "+s.engine()),r},isBrowser:function(){return r&&r.browser},isNode:function(){return!s.isBrowser()},nodeRequire:function(e){return s.isNode()?t(e):void 0},multiRequire:function(e,r){return t(s.isNode()?e:r)},uriEscape:function(t){var e=encodeURIComponent(t);return e=e.replace(/[^A-Za-z0-9_.~\-%]+/g,escape),e=e.replace(/[*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})},uriEscapePath:function(t){var e=[];return s.arrayEach(t.split("/"),function(t){e.push(s.uriEscape(t))}),e.join("/")},urlParse:function(e){return t("url").parse(e)},urlFormat:function(e){return t("url").format(e)},queryStringParse:function(e){return t("querystring").parse(e)},queryParamsToString:function(t){var e=[],r=s.uriEscape,n=Object.keys(t).sort();return s.arrayEach(n,function(n){var i=t[n],o=r(n),a=o+"=";if(Array.isArray(i)){var u=[];s.arrayEach(i,function(t){u.push(r(t))}),a=o+"="+u.sort().join("&"+o+"=")}else void 0!==i&&null!==i&&(a=o+"="+r(i));e.push(a)}),e.join("&")},readFileSync:function(t){return s.isBrowser()?null:s.nodeRequire("fs").readFileSync(t,"utf-8")},base64:{encode:function(t){return new o(t).toString("base64")},decode:function(t){return new o(t,"base64")}},Buffer:o,buffer:{toStream:function(t){s.Buffer.isBuffer(t)||(t=new s.Buffer(t));var e=new(s.nodeRequire("stream").Readable),r=0;return e._read=function(n){if(r>=t.length)return e.push(null);var i=r+n;i>t.length&&(i=t.length),e.push(t.slice(r,i)),r=i},e},concat:function(t){var e,r=0,n=0,i=null;for(e=0;e<t.length;e++)r+=t[e].length;for(i=new o(r),e=0;e<t.length;e++)t[e].copy(i,n),n+=t[e].length;return i}},string:{byteLength:function(t){if(null===t||void 0===t)return 0;if("string"==typeof t&&(t=new o(t)),"number"==typeof t.byteLength)return t.byteLength;if("number"==typeof t.length)return t.length;if("number"==typeof t.size)return t.size;if("string"==typeof t.path)return s.nodeRequire("fs").lstatSync(t.path).size;throw s.error(new Error("Cannot determine length of "+t),{object:t})},upperFirst:function(t){return t[0].toUpperCase()+t.substr(1)},lowerFirst:function(t){return t[0].toLowerCase()+t.substr(1)}},ini:{parse:function(t){var e,r={};return s.arrayEach(t.split(/\r?\n/),function(t){t=t.split(/(^|\s)[;#]/)[0];var n=t.match(/^\s*\[([^\[\]]+)\]\s*$/);if(n)e=n[1];else if(e){var i=t.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);i&&(r[e]=r[e]||{},r[e][i[1]]=i[2])}}),r}},fn:{noop:function(){},makeAsync:function(t,e){return e&&e<=t.length?t:function(){var e=Array.prototype.slice.call(arguments,0),r=e.pop(),n=t.apply(null,e);r(n)}}},date:{getDate:function(){return n||(n=t("./core")),n.config.systemClockOffset?new Date((new Date).getTime()+n.config.systemClockOffset):new Date},iso8601:function(t){return void 0===t&&(t=s.date.getDate()),t.toISOString().replace(/\.\d{3}Z$/,"Z")},rfc822:function(t){return void 0===t&&(t=s.date.getDate()),t.toUTCString()},unixTimestamp:function(t){return void 0===t&&(t=s.date.getDate()),t.getTime()/1e3},from:function(t){return"number"==typeof t?new Date(1e3*t):new Date(t)},format:function(t,e){return e||(e="iso8601"),s.date[e](s.date.from(t))},parseTimestamp:function(t){if("number"==typeof t)return new Date(1e3*t);if(t.match(/^\d+$/))return new Date(1e3*t);if(t.match(/^\d{4}/))return new Date(t);if(t.match(/^\w{3},/))return new Date(t);throw s.error(new Error("unhandled timestamp format: "+t),{code:"TimestampParserError"})}},crypto:{crc32Table:[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],crc32:function(t){var e=s.crypto.crc32Table,r=-1;"string"==typeof t&&(t=new o(t));for(var n=0;n<t.length;n++){var i=t.readUInt8(n);r=r>>>8^e[255&(r^i)]}return(-1^r)>>>0},hmac:function(t,e,r,n){return r||(r="binary"),"buffer"===r&&(r=void 0),n||(n="sha256"),"string"==typeof e&&(e=new o(e)),i.createHmac(n,t).update(e).digest(r)},md5:function(t,e,r){return s.crypto.hash("md5",t,e,r)},sha256:function(t,e,r){return s.crypto.hash("sha256",t,e,r)},hash:function(t,e,r,n){var i=s.crypto.createHash(t);r||(r="binary"),"buffer"===r&&(r=void 0),"string"==typeof e&&(e=new o(e));var a=s.arraySliceFn(e),u=o.isBuffer(e);if(s.isBrowser()&&"undefined"!=typeof ArrayBuffer&&e&&e.buffer instanceof ArrayBuffer&&(u=!0),n&&"object"==typeof e&&"function"==typeof e.on&&!u)e.on("data",function(t){i.update(t)}),e.on("error",function(t){n(t)}),e.on("end",function(){n(null,i.digest(r))});else{if(!n||!a||u||"undefined"==typeof FileReader){s.isBrowser()&&"object"==typeof e&&!u&&(e=new o(new Uint8Array(e)));var c=i.update(e).digest(r);return n&&n(null,c),c}var l=0,h=524288,p=new FileReader;p.onerror=function(){n(new Error("Failed to read data."))},p.onload=function(){var t=new o(new Uint8Array(p.result));i.update(t),l+=t.length,p._continueReading()},p._continueReading=function(){if(l>=e.size)return void n(null,i.digest(r));var t=l+h;t>e.size&&(t=e.size),p.readAsArrayBuffer(a.call(e,l,t))},p._continueReading()}},toHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push(("0"+t.charCodeAt(r).toString(16)).substr(-2,2));return e.join("")},createHash:function(t){return i.createHash(t)}},abort:{},each:function(t,e){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=e.call(this,r,t[r]);if(n===s.abort)break}},arrayEach:function(t,e){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=e.call(this,t[r],parseInt(r,10));if(n===s.abort)break}},update:function(t,e){return s.each(e,function(e,r){t[e]=r}),t},merge:function(t,e){return s.update(s.copy(t),e)},copy:function(t){if(null===t||void 0===t)return t;var e={};for(var r in t)e[r]=t[r];return e},isEmpty:function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0},arraySliceFn:function(t){var e=t.slice||t.webkitSlice||t.mozSlice;return"function"==typeof e?e:null},isType:function(t,e){return"function"==typeof e&&(e=s.typeName(e)),Object.prototype.toString.call(t)==="[object "+e+"]"},typeName:function(t){if(Object.prototype.hasOwnProperty.call(t,"name"))return t.name;var e=t.toString(),r=e.match(/^\s*function (.+)\(/);return r?r[1]:e},error:function(t,e){var r=null;return"string"==typeof t.message&&""!==t.message&&("string"==typeof e||e&&e.message)&&(r=s.copy(t),r.message=t.message),t.message=t.message||null,"string"==typeof e?t.message=e:"object"==typeof e&&null!==e&&(s.update(t,e),e.message&&(t.message=e.message),(e.code||e.name)&&(t.code=e.code||e.name),e.stack&&(t.stack=e.stack)),"function"==typeof Object.defineProperty&&(Object.defineProperty(t,"name",{writable:!0,enumerable:!1}),Object.defineProperty(t,"message",{enumerable:!0})),t.name=e&&e.name||t.name||t.code||"Error",t.time=new Date,r&&(t.originalError=r),t},inherit:function(t,e){var r=null;if(void 0===e)e=t,t=Object,r={};else{var n=function(){};n.prototype=t.prototype,r=new n}return e.constructor===Object&&(e.constructor=function(){return t!==Object?t.apply(this,arguments):void 0}),e.constructor.prototype=r,s.update(e.constructor.prototype,e),e.constructor.__super__=t,e.constructor},mixin:function(){for(var t=arguments[0],e=1;e<arguments.length;e++)for(var r in arguments[e].prototype){var n=arguments[e].prototype[r];"constructor"!==r&&(t.prototype[r]=n)}return t},hideProperties:function(t,e){"function"==typeof Object.defineProperty&&s.arrayEach(e,function(e){Object.defineProperty(t,e,{enumerable:!1,writable:!0,configurable:!0})})},property:function(t,e,r,n,i){var o={configurable:!0,enumerable:void 0!==n?n:!0};"function"!=typeof r||i?(o.value=r,o.writable=!0):o.get=r,Object.defineProperty(t,e,o)},memoizedProperty:function(t,e,r,n){var i=null;s.property(t,e,function(){return null===i&&(i=r()),i},n)},hoistPayloadMember:function(t){var e=t.request,r=e.operation,n=e.service.api.operations[r].output;if(n.payload){var i=n.members[n.payload],o=t.data[n.payload];"structure"===i.type&&s.each(o,function(e,r){s.property(t.data,e,r,!1)})}},computeSha256:function(t,e){if(s.isNode()){var r=s.nodeRequire("stream").Stream,n=s.nodeRequire("fs");if(t instanceof r){if("string"!=typeof t.path)return e(new Error("Non-file stream objects are not supported with SigV4"));var i={};"number"==typeof t.start&&(i.start=t.start),"number"==typeof t.end&&(i.end=t.end),t=n.createReadStream(t.path,i)}}s.crypto.sha256(t,"hex",function(t,r){t?e(t):e(null,r)})},isClockSkewed:function(t){return t?(s.property(n.config,"isClockSkewed",Math.abs((new Date).getTime()-t)>=3e5,!1),n.config.isClockSkewed):void 0},applyClockOffset:function(t){t&&(n.config.systemClockOffset=t-(new Date).getTime())},extractRequestId:function(t){var e=t.httpResponse.headers["x-amz-request-id"]||t.httpResponse.headers["x-amzn-requestid"];!e&&t.data&&t.data.ResponseMetadata&&(e=t.data.ResponseMetadata.RequestId),e&&(t.requestId=e),t.error&&(t.error.requestId=e)},addPromisesToRequests:function(t,e){return e=e||null,e||"undefined"==typeof Promise||(e=Promise),"function"!=typeof e?void delete t.prototype.promise:void(t.prototype.promise=function(){var t=this;return new e(function(e,r){t.on("complete",function(t){t.error?r(t.error):e(t.data)}),t.runTo()})})},isDualstackAvailable:function(e){if(!e)return!1;var r=t("../apis/metadata.json");return"string"!=typeof e&&(e=e.serviceIdentifier),"string"==typeof e&&r.hasOwnProperty(e)?!!r[e].dualstackAvailable:!1}};e.exports=s}).call(this,t("_process"))},{"../apis/metadata.json":21,"./core":25,_process:13,buffer:1,crypto:6,querystring:17,url:18}],31:[function(t,e,r){var n=t("../core");n.WebIdentityCredentials=n.util.inherit(n.Credentials,{constructor:function(t){n.Credentials.call(this),this.expired=!0,this.params=t,this.params.RoleSessionName=this.params.RoleSessionName||"web-identity",this.data=null},refresh:function(t){var e=this;e.createClients(),t||(t=function(t){if(t)throw t}),e.service.assumeRoleWithWebIdentity(function(r,n){e.data=null,r||(e.data=n,e.service.credentialsFrom(n,e)),t(r)})},createClients:function(){this.service=this.service||new n.STS({params:this.params})}})},{"../core":25}],30:[function(t,e,r){var n=t("../core");n.TemporaryCredentials=n.util.inherit(n.Credentials,{constructor:function(t){n.Credentials.call(this),this.loadMasterCredentials(),this.expired=!0,this.params=t||{},this.params.RoleArn&&(this.params.RoleSessionName=this.params.RoleSessionName||"temporary-credentials")},refresh:function(t){var e=this;e.createClients(),t||(t=function(t){if(t)throw t}),e.service.config.credentials=e.masterCredentials;var r=e.params.RoleArn?e.service.assumeRole:e.service.getSessionToken;r.call(e.service,function(r,n){r||e.service.credentialsFrom(n,e),t(r)})},loadMasterCredentials:function(){for(this.masterCredentials=n.config.credentials;this.masterCredentials.masterCredentials;)this.masterCredentials=this.masterCredentials.masterCredentials},createClients:function(){this.service=this.service||new n.STS({params:this.params})}})},{"../core":25}],29:[function(t,e,r){var n=t("../core");n.SAMLCredentials=n.util.inherit(n.Credentials,{constructor:function(t){n.Credentials.call(this),this.expired=!0,this.params=t},refresh:function(t){var e=this;e.createClients(),t||(t=function(t){if(t)throw t}),e.service.assumeRoleWithSAML(function(r,n){r||e.service.credentialsFrom(n,e),t(r)})},createClients:function(){this.service=this.service||new n.STS({params:this.params})}})},{"../core":25}],27:[function(t,e,r){var n=t("../core");n.CognitoIdentityCredentials=n.util.inherit(n.Credentials,{localStorageKey:{id:"aws.cognito.identity-id.",providers:"aws.cognito.identity-providers."},constructor:function(t){n.Credentials.call(this),this.expired=!0,this.params=t,this.data=null,this.identityId=null,this.loadCachedId()},refresh:function(t){var e=this;e.createClients(),e.data=null,e.identityId=null,e.getId(function(r){r?(e.clearIdOnNotAuthorized(r),t(r)):e.params.RoleArn?e.getCredentialsFromSTS(t):e.getCredentialsForIdentity(t)})},clearCachedId:function(){this.identityId=null,delete this.params.IdentityId;var t=this.params.IdentityPoolId,e=this.params.LoginId||"";delete this.storage[this.localStorageKey.id+t+e],delete this.storage[this.localStorageKey.providers+t+e]},clearIdOnNotAuthorized:function(t){var e=this;"NotAuthorizedException"==t.code&&e.clearCachedId()},getId:function(t){var e=this;return"string"==typeof e.params.IdentityId?t(null,e.params.IdentityId):void e.cognito.getId(function(r,n){!r&&n.IdentityId?(e.params.IdentityId=n.IdentityId,t(null,n.IdentityId)):t(r)})},loadCredentials:function(t,e){t&&e&&(e.expired=!1,e.accessKeyId=t.Credentials.AccessKeyId,e.secretAccessKey=t.Credentials.SecretKey,e.sessionToken=t.Credentials.SessionToken,e.expireTime=t.Credentials.Expiration)},getCredentialsForIdentity:function(t){var e=this;e.cognito.getCredentialsForIdentity(function(r,n){r?e.clearIdOnNotAuthorized(r):(e.cacheId(n),e.data=n,e.loadCredentials(e.data,e)),t(r)})},getCredentialsFromSTS:function(t){var e=this;e.cognito.getOpenIdToken(function(r,n){r?(e.clearIdOnNotAuthorized(r),t(r)):(e.cacheId(n),e.params.WebIdentityToken=n.Token,e.webIdentityCredentials.refresh(function(r){r||(e.data=e.webIdentityCredentials.data,e.sts.credentialsFrom(e.data,e)),t(r)}))})},loadCachedId:function(){var t=this;if(n.util.isBrowser()&&!t.params.IdentityId){var e=t.getStorage("id");if(e&&t.params.Logins){var r=Object.keys(t.params.Logins),i=(t.getStorage("providers")||"").split(","),o=i.filter(function(t){return-1!==r.indexOf(t)});0!==o.length&&(t.params.IdentityId=e)}else e&&(t.params.IdentityId=e)}},createClients:function(){this.webIdentityCredentials=this.webIdentityCredentials||new n.WebIdentityCredentials(this.params),this.cognito=this.cognito||new n.CognitoIdentity({params:this.params}),this.sts=this.sts||new n.STS},cacheId:function(t){this.identityId=t.IdentityId,this.params.IdentityId=this.identityId,n.util.isBrowser()&&(this.setStorage("id",t.IdentityId),this.params.Logins&&this.setStorage("providers",Object.keys(this.params.Logins).join(",")))},getStorage:function(t){return this.storage[this.localStorageKey[t]+this.params.IdentityPoolId+(this.params.LoginId||"")]},setStorage:function(t,e){try{this.storage[this.localStorageKey[t]+this.params.IdentityPoolId+(this.params.LoginId||"")]=e}catch(r){}},storage:function(){try{return n.util.isBrowser()&&null!==window.localStorage&&"object"==typeof window.localStorage?window.localStorage:{}}catch(t){return{}}}()})},{"../core":25}],24:[function(t,e,r){var n=t("./core");t("./credentials"),t("./credentials/credential_provider_chain"),n.Config=n.util.inherit({constructor:function(t){void 0===t&&(t={}),t=this.extractCredentials(t),n.util.each.call(this,this.keys,function(e,r){this.set(e,t[e],r)})},getCredentials:function(t){function e(e){t(e,e?null:s.credentials)}function r(t,e){return new n.util.error(e||new Error,{code:"CredentialsError",message:t})}function i(){s.credentials.get(function(t){if(t){var n="Could not load credentials from "+s.credentials.constructor.name;t=r(n,t)}e(t)})}function o(){var t=null;s.credentials.accessKeyId&&s.credentials.secretAccessKey||(t=r("Missing credentials")),e(t)}var s=this;s.credentials?"function"==typeof s.credentials.get?i():o():s.credentialProvider?s.credentialProvider.resolve(function(t,n){t&&(t=r("Could not load credentials from any providers",t)),s.credentials=n,e(t)}):e(r("No credentials to load"))},update:function(t,e){e=e||!1,t=this.extractCredentials(t),n.util.each.call(this,t,function(t,r){(e||Object.prototype.hasOwnProperty.call(this.keys,t)||n.Service.hasService(t))&&this.set(t,r)})},loadFromPath:function(t){this.clear();var e=JSON.parse(n.util.readFileSync(t)),r=new n.FileSystemCredentials(t),i=new n.CredentialProviderChain;return i.providers.unshift(r),i.resolve(function(t,r){if(t)throw t;e.credentials=r}),this.constructor(e),this},clear:function(){n.util.each.call(this,this.keys,function(t){delete this[t]}),this.set("credentials",void 0),this.set("credentialProvider",void 0)},set:function(t,e,r){void 0===e?(void 0===r&&(r=this.keys[t]),"function"==typeof r?this[t]=r.call(this):this[t]=r):"httpOptions"===t&&this[t]?this[t]=n.util.merge(this[t],e):this[t]=e},keys:{credentials:null,credentialProvider:null,region:null,logger:null,apiVersions:{},apiVersion:null,endpoint:void 0,httpOptions:{timeout:12e4},maxRetries:void 0,maxRedirects:10,paramValidation:!0,sslEnabled:!0,s3ForcePathStyle:!1,s3BucketEndpoint:!1,s3DisableBodySigning:!0,computeChecksums:!0,convertResponseTypes:!0,correctClockSkew:!1,customUserAgent:null,dynamoDbCrc32:!0,systemClockOffset:0,signatureVersion:null,signatureCache:!0,retryDelayOptions:{base:100},useAccelerateEndpoint:!1},extractCredentials:function(t){return t.accessKeyId&&t.secretAccessKey&&(t=n.util.copy(t),t.credentials=new n.Credentials(t)),t},setPromisesDependency:function(t){n.util.addPromisesToRequests(n.Request,t)}}),n.config=new n.Config},{"./core":25,"./credentials":26,"./credentials/credential_provider_chain":28}],28:[function(t,e,r){var n=t("../core");n.CredentialProviderChain=n.util.inherit(n.Credentials,{constructor:function(t){t?this.providers=t:this.providers=n.CredentialProviderChain.defaultProviders.slice(0)},resolve:function(t){function e(i,o){if(!i&&o||r===n.length)return void t(i,o);var s=n[r++];o="function"==typeof s?s.call():s,o.get?o.get(function(t){e(t,t?null:o)}):e(null,o)}if(0===this.providers.length)return t(new Error("No providers")),this;var r=0,n=this.providers.slice(0);return e(),this}}),n.CredentialProviderChain.defaultProviders=[]},{"../core":25}],26:[function(t,e,r){var n=t("./core");n.Credentials=n.util.inherit({constructor:function(){if(n.util.hideProperties(this,["secretAccessKey"]),this.expired=!1,this.expireTime=null,1===arguments.length&&"object"==typeof arguments[0]){var t=arguments[0].credentials||arguments[0];this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,this.sessionToken=t.sessionToken}else this.accessKeyId=arguments[0],this.secretAccessKey=arguments[1],this.sessionToken=arguments[2]},expiryWindow:15,needsRefresh:function(){var t=n.util.date.getDate().getTime(),e=new Date(t+1e3*this.expiryWindow);return this.expireTime&&e>this.expireTime?!0:this.expired||!this.accessKeyId||!this.secretAccessKey},get:function(t){var e=this;this.needsRefresh()?this.refresh(function(r){r||(e.expired=!1),t&&t(r)}):t&&t()},refresh:function(t){this.expired=!1,t()}})},{"./core":25}],21:[function(t,e,r){e.exports={acm:{name:"ACM"},apigateway:{name:"APIGateway"},applicationautoscaling:{prefix:"application-autoscaling",name:"ApplicationAutoScaling"},autoscaling:{name:"AutoScaling"},cloudformation:{name:"CloudFormation"},cloudfront:{name:"CloudFront",versions:["2013-05-12*","2013-11-11*","2014-05-31*","2014-10-21*","2014-11-06*","2015-04-17*","2015-07-27*","2015-09-17*","2016-01-13*","2016-01-28*","2016-08-01*"]},cloudhsm:{name:"CloudHSM"},cloudsearch:{name:"CloudSearch"},cloudsearchdomain:{name:"CloudSearchDomain"},cloudtrail:{name:"CloudTrail"},cloudwatch:{prefix:"monitoring",name:"CloudWatch"},cloudwatchevents:{prefix:"events",name:"CloudWatchEvents",versions:["2014-02-03*"]},cloudwatchlogs:{prefix:"logs",name:"CloudWatchLogs"},codecommit:{name:"CodeCommit"},codedeploy:{name:"CodeDeploy"},codepipeline:{name:"CodePipeline"},cognitoidentity:{prefix:"cognito-identity",name:"CognitoIdentity"},cognitoidentityserviceprovider:{prefix:"cognito-idp",name:"CognitoIdentityServiceProvider"},cognitosync:{prefix:"cognito-sync",name:"CognitoSync"},configservice:{prefix:"config",name:"ConfigService"},datapipeline:{name:"DataPipeline"},devicefarm:{name:"DeviceFarm"},directconnect:{name:"DirectConnect"},directoryservice:{prefix:"ds",name:"DirectoryService"},discovery:{name:"Discovery"},dms:{name:"DMS"},dynamodb:{name:"DynamoDB"},dynamodbstreams:{prefix:"streams.dynamodb",name:"DynamoDBStreams"},ec2:{name:"EC2",versions:["2013-06-15*","2013-10-15*","2014-02-01*","2014-05-01*","2014-06-15*","2014-09-01*","2014-10-01*","2015-03-01*","2015-04-15*","2015-10-01*"]},ecr:{name:"ECR"},ecs:{name:"ECS"},efs:{prefix:"elasticfilesystem",name:"EFS"},elasticache:{name:"ElastiCache",versions:["2012-11-15*","2014-03-24*","2014-07-15*","2014-09-30*"]},elasticbeanstalk:{name:"ElasticBeanstalk"},elb:{prefix:"elasticloadbalancing",name:"ELB"},elbv2:{prefix:"elasticloadbalancingv2",name:"ELBv2"},emr:{prefix:"elasticmapreduce",name:"EMR"},es:{name:"ES"},elastictranscoder:{name:"ElasticTranscoder"},firehose:{name:"Firehose"},gamelift:{name:"GameLift"},glacier:{name:"Glacier"},iam:{name:"IAM"},importexport:{name:"ImportExport"},inspector:{name:"Inspector",versions:["2015-08-18*"]},iot:{name:"Iot"},iotdata:{prefix:"iot-data",name:"IotData"},kinesis:{name:"Kinesis"},kinesisanalytics:{name:"KinesisAnalytics"},kms:{name:"KMS"},lambda:{name:"Lambda"},machinelearning:{name:"MachineLearning"},marketplacecommerceanalytics:{name:"MarketplaceCommerceAnalytics"},marketplacemetering:{prefix:"meteringmarketplace",name:"MarketplaceMetering"},mobileanalytics:{name:"MobileAnalytics"},opsworks:{name:"OpsWorks"},rds:{name:"RDS",versions:["2014-09-01*"]},redshift:{name:"Redshift"},route53:{name:"Route53"},route53domains:{name:"Route53Domains"},s3:{name:"S3",dualstackAvailable:!0},servicecatalog:{name:"ServiceCatalog"},ses:{prefix:"email",name:"SES"},simpledb:{prefix:"sdb",name:"SimpleDB"},snowball:{name:"Snowball"},sns:{name:"SNS"},sqs:{name:"SQS"},ssm:{name:"SSM"},storagegateway:{name:"StorageGateway"},sts:{name:"STS"},support:{name:"Support"},swf:{name:"SWF"},waf:{name:"WAF"},workspaces:{name:"WorkSpaces"}}},{}],20:[function(t,e,r){(function(e,n){function i(t,e){var n={seen:[],stylize:s};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(e)?n.showHidden=e:e&&r._extend(n,e),E(n.showHidden)&&(n.showHidden=!1),E(n.depth)&&(n.depth=2),E(n.colors)&&(n.colors=!1),E(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),u(n,t,n.depth)}function o(t,e){var r=i.styles[e];return r?"["+i.colors[r][0]+"m"+t+"["+i.colors[r][1]+"m":t}function s(t,e){return t}function a(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}function u(t,e,n){if(t.customInspect&&e&&R(e.inspect)&&e.inspect!==r.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(n,t);return b(i)||(i=u(t,i,n)),i}var o=c(t,e);if(o)return o;var s=Object.keys(e),y=a(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(e)),A(e)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(e);if(0===s.length){if(R(e)){var m=e.name?": "+e.name:"";return t.stylize("[Function"+m+"]","special")}if(_(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(S(e))return t.stylize(Date.prototype.toString.call(e),"date");if(A(e))return l(e)}var v="",g=!1,w=["{","}"];if(d(e)&&(g=!0,w=["[","]"]),R(e)){var E=e.name?": "+e.name:"";v=" [Function"+E+"]"}if(_(e)&&(v=" "+RegExp.prototype.toString.call(e)),S(e)&&(v=" "+Date.prototype.toUTCString.call(e)),A(e)&&(v=" "+l(e)),0===s.length&&(!g||0==e.length))return w[0]+v+w[1];if(0>n)return _(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special");t.seen.push(e);var x;return x=g?h(t,e,n,y,s):s.map(function(r){return p(t,e,n,y,r,g)}),t.seen.pop(),f(x,v,w)}function c(t,e){if(E(e))return t.stylize("undefined","undefined");if(b(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return g(e)?t.stylize(""+e,"number"):y(e)?t.stylize(""+e,"boolean"):m(e)?t.stylize("null","null"):void 0}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,i){for(var o=[],s=0,a=e.length;a>s;++s)j(e,String(s))?o.push(p(t,e,r,n,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(t,e,r,n,i,!0))}),o}function p(t,e,r,n,i,o){var s,a,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),j(n,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(r)?u(t,c.value,null):u(t,c.value,r-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n"))):a=t.stylize("[Circular]","special")),E(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function f(t,e,r){var n=0,i=t.reduce(function(t,e){return n++,e.indexOf("\n")>=0&&n++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function d(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function m(t){return null===t}function v(t){return null==t}function g(t){return"number"==typeof t}function b(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function E(t){return void 0===t}function _(t){return x(t)&&"[object RegExp]"===T(t)}function x(t){return"object"==typeof t&&null!==t}function S(t){return x(t)&&"[object Date]"===T(t)}function A(t){return x(t)&&("[object Error]"===T(t)||t instanceof Error)}function R(t){return"function"==typeof t}function C(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function T(t){return Object.prototype.toString.call(t)}function I(t){return 10>t?"0"+t.toString(10):t.toString(10)}function L(){var t=new Date,e=[I(t.getHours()),I(t.getMinutes()),I(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}function j(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var O=/%[sdj%]/g;r.format=function(t){if(!b(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(i(arguments[r]));return e.join(" ")}for(var r=1,n=arguments,o=n.length,s=String(t).replace(O,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}}),a=n[r];o>r;a=n[++r])s+=m(a)||!x(a)?" "+a:" "+i(a);return s},r.deprecate=function(t,i){function o(){if(!s){if(e.throwDeprecation)throw new Error(i);e.traceDeprecation?console.trace(i):console.error(i),s=!0}return t.apply(this,arguments)}if(E(n.process))return function(){return r.deprecate(t,i).apply(this,arguments);
};if(e.noDeprecation===!0)return t;var s=!1;return o};var q,D={};r.debuglog=function(t){if(E(q)&&(q=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!D[t])if(new RegExp("\\b"+t+"\\b","i").test(q)){var n=e.pid;D[t]=function(){var e=r.format.apply(r,arguments);console.error("%s %d: %s",t,n,e)}}else D[t]=function(){};return D[t]},r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=d,r.isBoolean=y,r.isNull=m,r.isNullOrUndefined=v,r.isNumber=g,r.isString=b,r.isSymbol=w,r.isUndefined=E,r.isRegExp=_,r.isObject=x,r.isDate=S,r.isError=A,r.isFunction=R,r.isPrimitive=C,r.isBuffer=t("./support/isBuffer");var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];r.log=function(){console.log("%s - %s",L(),r.format.apply(r,arguments))},r.inherits=t("inherits"),r._extend=function(t,e){if(!e||!x(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t}}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":19,_process:13,inherits:12}],19:[function(t,e,r){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],18:[function(t,e,r){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,r){if(t&&c(t)&&t instanceof n)return t;var i=new n;return i.parse(t,e,r),i}function o(t){return u(t)&&(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function c(t){return"object"==typeof t&&null!==t}function l(t){return null===t}function h(t){return null==t}var p=t("punycode");r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=n;var f=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,y=["<",">",'"',"`"," ","\r","\n","	"],m=["{","}","|","\\","^","`"].concat(y),v=["'"].concat(m),g=["%","/","?",";","#"].concat(v),b=["/","?","#"],w=255,E=/^[a-z0-9A-Z_-]{0,63}$/,_=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},S={javascript:!0,"javascript:":!0},A={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},R=t("querystring");n.prototype.parse=function(t,e,r){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t;n=n.trim();var i=f.exec(n);if(i){i=i[0];var o=i.toLowerCase();this.protocol=o,n=n.substr(i.length)}if(r||i||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===n.substr(0,2);!s||i&&S[i]||(n=n.substr(2),this.slashes=!0)}if(!S[i]&&(s||i&&!A[i])){for(var a=-1,c=0;c<b.length;c++){var l=n.indexOf(b[c]);-1!==l&&(-1===a||a>l)&&(a=l)}var h,d;d=-1===a?n.lastIndexOf("@"):n.lastIndexOf("@",a),-1!==d&&(h=n.slice(0,d),n=n.slice(d+1),this.auth=decodeURIComponent(h)),a=-1;for(var c=0;c<g.length;c++){var l=n.indexOf(g[c]);-1!==l&&(-1===a||a>l)&&(a=l)}-1===a&&(a=n.length),this.host=n.slice(0,a),n=n.slice(a),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var m=this.hostname.split(/\./),c=0,C=m.length;C>c;c++){var T=m[c];if(T&&!T.match(E)){for(var I="",L=0,j=T.length;j>L;L++)I+=T.charCodeAt(L)>127?"x":T[L];if(!I.match(E)){var O=m.slice(0,c),q=m.slice(c+1),D=T.match(_);D&&(O.push(D[1]),q.unshift(D[2])),q.length&&(n="/"+q.join(".")+n),this.hostname=O.join(".");break}}}if(this.hostname.length>w?this.hostname="":this.hostname=this.hostname.toLowerCase(),!y){for(var k=this.hostname.split("."),P=[],c=0;c<k.length;++c){var N=k[c];P.push(N.match(/[^A-Za-z0-9_-]/)?"xn--"+p.encode(N):N)}this.hostname=P.join(".")}var M=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+M,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!x[o])for(var c=0,C=v.length;C>c;c++){var U=v[c],F=encodeURIComponent(U);F===U&&(F=escape(U)),n=n.split(U).join(F)}var z=n.indexOf("#");-1!==z&&(this.hash=n.substr(z),n=n.slice(0,z));var H=n.indexOf("?");if(-1!==H?(this.search=n.substr(H),this.query=n.substr(H+1),e&&(this.query=R.parse(this.query)),n=n.slice(0,H)):e&&(this.search="",this.query={}),n&&(this.pathname=n),A[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var M=this.pathname||"",N=this.search||"";this.path=M+N}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(o=R.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||A[e])&&i!==!1?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+r+s+n},n.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(u(t)){var e=new n;e.parse(t,!1,!0),t=e}var r=new n;if(Object.keys(this).forEach(function(t){r[t]=this[t]},this),r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(r[e]=t[e])}),A[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r;if(t.protocol&&t.protocol!==r.protocol){if(!A[t.protocol])return Object.keys(t).forEach(function(e){r[e]=t[e]}),r.href=r.format(),r;if(r.protocol=t.protocol,t.host||S[t.protocol])r.pathname=t.pathname;else{for(var i=(t.pathname||"").split("/");i.length&&!(t.host=i.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),r.pathname=i.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var o=r.pathname||"",s=r.search||"";r.path=o+s}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var a=r.pathname&&"/"===r.pathname.charAt(0),c=t.host||t.pathname&&"/"===t.pathname.charAt(0),p=c||a||r.host&&t.pathname,f=p,d=r.pathname&&r.pathname.split("/")||[],i=t.pathname&&t.pathname.split("/")||[],y=r.protocol&&!A[r.protocol];if(y&&(r.hostname="",r.port=null,r.host&&(""===d[0]?d[0]=r.host:d.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===i[0]?i[0]=t.host:i.unshift(t.host)),t.host=null),p=p&&(""===i[0]||""===d[0])),c)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,d=i;else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),r.search=t.search,r.query=t.query;else if(!h(t.search)){if(y){r.hostname=r.host=d.shift();var m=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;m&&(r.auth=m.shift(),r.host=r.hostname=m.shift())}return r.search=t.search,r.query=t.query,l(r.pathname)&&l(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!d.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var v=d.slice(-1)[0],g=(r.host||t.host)&&("."===v||".."===v)||""===v,b=0,w=d.length;w>=0;w--)v=d[w],"."==v?d.splice(w,1):".."===v?(d.splice(w,1),b++):b&&(d.splice(w,1),b--);if(!p&&!f)for(;b--;b)d.unshift("..");!p||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),g&&"/"!==d.join("/").substr(-1)&&d.push("");var E=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(y){r.hostname=r.host=E?"":d.length?d.shift():"";var m=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;m&&(r.auth=m.shift(),r.host=r.hostname=m.shift())}return p=p||r.host&&d.length,p&&!E&&d.unshift(""),d.length?r.pathname=d.join("/"):(r.pathname=null,r.path=null),l(r.pathname)&&l(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=d.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{punycode:14,querystring:17}],17:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":15,"./encode":16}],16:[function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(s(t),function(s){var a=encodeURIComponent(i(s))+r;return o(t[s])?n(t[s],function(t){return a+encodeURIComponent(i(t))}).join(e):a+encodeURIComponent(i(t[s]))}).join(e):a?encodeURIComponent(i(a))+r+encodeURIComponent(i(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],15:[function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var l=0;c>l;++l){var h,p,f,d,y=t[l].replace(a,"%20"),m=y.indexOf(r);m>=0?(h=y.substr(0,m),p=y.substr(m+1)):(h=y,p=""),f=decodeURIComponent(h),d=decodeURIComponent(p),n(s,f)?i(s[f])?s[f].push(d):s[f]=[s[f],d]:s[f]=d}return s};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],14:[function(t,e,r){(function(t){!function(n){function i(t){throw RangeError(q[t])}function o(t,e){for(var r=t.length;r--;)t[r]=e(t[r]);return t}function s(t,e){return o(t.split(O),e).join(".")}function a(t){for(var e,r,n=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),i--)):n.push(e);return n}function u(t){return o(t,function(t){var e="";return t>65535&&(t-=65536,e+=P(t>>>10&1023|55296),t=56320|1023&t),e+=P(t)}).join("")}function c(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:_}function l(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function h(t,e,r){var n=0;for(t=r?k(t/R):t>>1,t+=k(t/e);t>D*S>>1;n+=_)t=k(t/D);return k(n+(D+1)*t/(t+A))}function p(t){var e,r,n,o,s,a,l,p,f,d,y=[],m=t.length,v=0,g=T,b=C;for(r=t.lastIndexOf(I),0>r&&(r=0),n=0;r>n;++n)t.charCodeAt(n)>=128&&i("not-basic"),y.push(t.charCodeAt(n));for(o=r>0?r+1:0;m>o;){for(s=v,a=1,l=_;o>=m&&i("invalid-input"),p=c(t.charCodeAt(o++)),(p>=_||p>k((E-v)/a))&&i("overflow"),v+=p*a,f=b>=l?x:l>=b+S?S:l-b,!(f>p);l+=_)d=_-f,a>k(E/d)&&i("overflow"),a*=d;e=y.length+1,b=h(v-s,e,0==s),k(v/e)>E-g&&i("overflow"),g+=k(v/e),v%=e,y.splice(v++,0,g)}return u(y)}function f(t){var e,r,n,o,s,u,c,p,f,d,y,m,v,g,b,w=[];for(t=a(t),m=t.length,e=T,r=0,s=C,u=0;m>u;++u)y=t[u],128>y&&w.push(P(y));for(n=o=w.length,o&&w.push(I);m>n;){for(c=E,u=0;m>u;++u)y=t[u],y>=e&&c>y&&(c=y);for(v=n+1,c-e>k((E-r)/v)&&i("overflow"),r+=(c-e)*v,e=c,u=0;m>u;++u)if(y=t[u],e>y&&++r>E&&i("overflow"),y==e){for(p=r,f=_;d=s>=f?x:f>=s+S?S:f-s,!(d>p);f+=_)b=p-d,g=_-d,w.push(P(l(d+b%g,0))),p=k(b/g);w.push(P(l(p,0))),s=h(r,v,n==o),r=0,++n}++r,++e}return w.join("")}function d(t){return s(t,function(t){return L.test(t)?p(t.slice(4).toLowerCase()):t})}function y(t){return s(t,function(t){return j.test(t)?"xn--"+f(t):t})}var m="object"==typeof r&&r,v="object"==typeof e&&e&&e.exports==m&&e,g="object"==typeof t&&t;(g.global===g||g.window===g)&&(n=g);var b,w,E=2147483647,_=36,x=1,S=26,A=38,R=700,C=72,T=128,I="-",L=/^xn--/,j=/[^ -~]/,O=/\x2E|\u3002|\uFF0E|\uFF61/g,q={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=_-x,k=Math.floor,P=String.fromCharCode;if(b={version:"1.2.4",ucs2:{decode:a,encode:u},decode:p,encode:f,toASCII:y,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b});else if(m&&!m.nodeType)if(v)v.exports=b;else for(w in b)b.hasOwnProperty(w)&&(m[w]=b[w]);else n.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(t,e,r){function n(){if(!a){a=!0;for(var t,e=s.length;e;){t=s,s=[];for(var r=-1;++r<e;)t[r]();e=s.length}a=!1}}function i(){}var o=e.exports={},s=[],a=!1;o.nextTick=function(t){s.push(t),a||setTimeout(n,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=i,o.addListener=i,o.once=i,o.off=i,o.removeListener=i,o.removeAllListeners=i,o.emit=i,o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],12:[function(t,e,r){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},{}],6:[function(t,e,r){function n(t,e,r){a.isBuffer(e)||(e=new a(e)),a.isBuffer(r)||(r=new a(r)),e.length>f?e=t(e):e.length<f&&(e=a.concat([e,d],f));for(var n=new a(f),i=new a(f),o=0;f>o;o++)n[o]=54^e[o],i[o]=92^e[o];var s=t(a.concat([n,r]));return t(a.concat([i,s]))}function i(t,e){t=t||"sha1";var r=p[t],i=[],s=0;return r||o("algorithm:",t,"is not yet supported"),{update:function(t){return a.isBuffer(t)||(t=new a(t)),i.push(t),s+=t.length,this},digest:function(t){var o=a.concat(i),s=e?n(r,e,o):r(o);return i=null,t?s.toString(t):s}}}function o(){var t=[].slice.call(arguments).join(" ");throw new Error([t,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}function s(t,e){for(var r in t)e(t[r],r)}var a=t("buffer").Buffer,u=t("./sha"),c=t("./sha256"),l=t("./rng"),h=t("./md5"),p={sha1:u,sha256:c,md5:h},f=64,d=new a(f);d.fill(0),r.createHash=function(t){return i(t)},r.createHmac=function(t,e){return i(t,e)},r.randomBytes=function(t,e){if(!e||!e.call)return new a(l(t));try{e.call(this,void 0,new a(l(t)))}catch(r){e(r)}},s(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(t){r[t]=function(){o("sorry,",t,"is not implemented yet")}})},{"./md5":7,"./rng":8,"./sha":9,"./sha256":10,buffer:1}],10:[function(t,e,r){var n=t("./helpers"),i=function(t,e){var r=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(r>>16);return n<<16|65535&r},o=function(t,e){return t>>>e|t<<32-e},s=function(t,e){return t>>>e},a=function(t,e,r){return t&e^~t&r},u=function(t,e,r){return t&e^t&r^e&r},c=function(t){return o(t,2)^o(t,13)^o(t,22)},l=function(t){return o(t,6)^o(t,11)^o(t,25)},h=function(t){return o(t,7)^o(t,18)^s(t,3)},p=function(t){return o(t,17)^o(t,19)^s(t,10)},f=function(t,e){var r,n,o,s,f,d,y,m,v,g,b,w,E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),_=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),x=new Array(64);t[e>>5]|=128<<24-e%32,t[(e+64>>9<<4)+15]=e;for(var v=0;v<t.length;v+=16){r=_[0],n=_[1],o=_[2],s=_[3],f=_[4],d=_[5],y=_[6],m=_[7];for(var g=0;64>g;g++)16>g?x[g]=t[g+v]:x[g]=i(i(i(p(x[g-2]),x[g-7]),h(x[g-15])),x[g-16]),b=i(i(i(i(m,l(f)),a(f,d,y)),E[g]),x[g]),w=i(c(r),u(r,n,o)),m=y,y=d,d=f,f=i(s,b),s=o,o=n,n=r,r=i(b,w);_[0]=i(r,_[0]),_[1]=i(n,_[1]),_[2]=i(o,_[2]),_[3]=i(s,_[3]),_[4]=i(f,_[4]),_[5]=i(d,_[5]),_[6]=i(y,_[6]),_[7]=i(m,_[7])}return _};e.exports=function(t){return n.hash(t,f,32,!0)}},{"./helpers":5}],9:[function(t,e,r){function n(t,e){t[e>>5]|=128<<24-e%32,t[(e+64>>9<<4)+15]=e;for(var r=Array(80),n=1732584193,u=-271733879,c=-1732584194,l=271733878,h=-1009589776,p=0;p<t.length;p+=16){for(var f=n,d=u,y=c,m=l,v=h,g=0;80>g;g++){16>g?r[g]=t[p+g]:r[g]=a(r[g-3]^r[g-8]^r[g-14]^r[g-16],1);var b=s(s(a(n,5),i(g,u,c,l)),s(s(h,r[g]),o(g)));h=l,l=c,c=a(u,30),u=n,n=b}n=s(n,f),u=s(u,d),c=s(c,y),l=s(l,m),h=s(h,v)}return Array(n,u,c,l,h)}function i(t,e,r,n){return 20>t?e&r|~e&n:40>t?e^r^n:60>t?e&r|e&n|r&n:e^r^n}function o(t){return 20>t?1518500249:40>t?1859775393:60>t?-1894007588:-899497514}function s(t,e){var r=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(r>>16);return n<<16|65535&r}function a(t,e){return t<<e|t>>>32-e}var u=t("./helpers");e.exports=function(t){return u.hash(t,n,20,!0)}},{"./helpers":5}],8:[function(t,e,r){!function(){var t,r,n=this;t=function(t){for(var e,e,r=new Array(t),n=0;t>n;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r},n.crypto&&crypto.getRandomValues&&(r=function(t){var e=new Uint8Array(t);return crypto.getRandomValues(e),e}),e.exports=r||t}()},{}],7:[function(t,e,r){function n(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;for(var r=1732584193,n=-271733879,i=-1732584194,l=271733878,h=0;h<t.length;h+=16){var p=r,f=n,d=i,y=l;r=o(r,n,i,l,t[h+0],7,-680876936),l=o(l,r,n,i,t[h+1],12,-389564586),i=o(i,l,r,n,t[h+2],17,606105819),n=o(n,i,l,r,t[h+3],22,-1044525330),r=o(r,n,i,l,t[h+4],7,-176418897),l=o(l,r,n,i,t[h+5],12,1200080426),i=o(i,l,r,n,t[h+6],17,-1473231341),n=o(n,i,l,r,t[h+7],22,-45705983),r=o(r,n,i,l,t[h+8],7,1770035416),l=o(l,r,n,i,t[h+9],12,-1958414417),i=o(i,l,r,n,t[h+10],17,-42063),n=o(n,i,l,r,t[h+11],22,-1990404162),r=o(r,n,i,l,t[h+12],7,1804603682),l=o(l,r,n,i,t[h+13],12,-40341101),i=o(i,l,r,n,t[h+14],17,-1502002290),n=o(n,i,l,r,t[h+15],22,1236535329),r=s(r,n,i,l,t[h+1],5,-165796510),l=s(l,r,n,i,t[h+6],9,-1069501632),i=s(i,l,r,n,t[h+11],14,643717713),n=s(n,i,l,r,t[h+0],20,-373897302),r=s(r,n,i,l,t[h+5],5,-701558691),l=s(l,r,n,i,t[h+10],9,38016083),i=s(i,l,r,n,t[h+15],14,-660478335),n=s(n,i,l,r,t[h+4],20,-405537848),r=s(r,n,i,l,t[h+9],5,568446438),l=s(l,r,n,i,t[h+14],9,-1019803690),i=s(i,l,r,n,t[h+3],14,-187363961),n=s(n,i,l,r,t[h+8],20,1163531501),r=s(r,n,i,l,t[h+13],5,-1444681467),l=s(l,r,n,i,t[h+2],9,-51403784),i=s(i,l,r,n,t[h+7],14,1735328473),n=s(n,i,l,r,t[h+12],20,-1926607734),r=a(r,n,i,l,t[h+5],4,-378558),l=a(l,r,n,i,t[h+8],11,-2022574463),i=a(i,l,r,n,t[h+11],16,1839030562),n=a(n,i,l,r,t[h+14],23,-35309556),r=a(r,n,i,l,t[h+1],4,-1530992060),l=a(l,r,n,i,t[h+4],11,1272893353),i=a(i,l,r,n,t[h+7],16,-155497632),n=a(n,i,l,r,t[h+10],23,-1094730640),r=a(r,n,i,l,t[h+13],4,681279174),l=a(l,r,n,i,t[h+0],11,-358537222),i=a(i,l,r,n,t[h+3],16,-722521979),n=a(n,i,l,r,t[h+6],23,76029189),r=a(r,n,i,l,t[h+9],4,-640364487),l=a(l,r,n,i,t[h+12],11,-421815835),i=a(i,l,r,n,t[h+15],16,530742520),n=a(n,i,l,r,t[h+2],23,-995338651),r=u(r,n,i,l,t[h+0],6,-198630844),l=u(l,r,n,i,t[h+7],10,1126891415),i=u(i,l,r,n,t[h+14],15,-1416354905),n=u(n,i,l,r,t[h+5],21,-57434055),r=u(r,n,i,l,t[h+12],6,1700485571),l=u(l,r,n,i,t[h+3],10,-1894986606),i=u(i,l,r,n,t[h+10],15,-1051523),n=u(n,i,l,r,t[h+1],21,-2054922799),r=u(r,n,i,l,t[h+8],6,1873313359),l=u(l,r,n,i,t[h+15],10,-30611744),i=u(i,l,r,n,t[h+6],15,-1560198380),n=u(n,i,l,r,t[h+13],21,1309151649),r=u(r,n,i,l,t[h+4],6,-145523070),l=u(l,r,n,i,t[h+11],10,-1120210379),i=u(i,l,r,n,t[h+2],15,718787259),n=u(n,i,l,r,t[h+9],21,-343485551),r=c(r,p),n=c(n,f),i=c(i,d),l=c(l,y)}return Array(r,n,i,l)}function i(t,e,r,n,i,o){return c(l(c(c(e,t),c(n,o)),i),r)}function o(t,e,r,n,o,s,a){return i(e&r|~e&n,t,e,o,s,a)}function s(t,e,r,n,o,s,a){return i(e&n|r&~n,t,e,o,s,a)}function a(t,e,r,n,o,s,a){return i(e^r^n,t,e,o,s,a)}function u(t,e,r,n,o,s,a){return i(r^(e|~n),t,e,o,s,a)}function c(t,e){var r=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(r>>16);return n<<16|65535&r}function l(t,e){return t<<e|t>>>32-e}var h=t("./helpers");e.exports=function(t){return h.hash(t,n,16)}},{"./helpers":5}],5:[function(t,e,r){function n(t,e){if(t.length%a!==0){var r=t.length+(a-t.length%a);t=s.concat([t,u],r)}for(var n=[],i=e?t.readInt32BE:t.readInt32LE,o=0;o<t.length;o+=a)n.push(i.call(t,o));return n}function i(t,e,r){for(var n=new s(e),i=r?n.writeInt32BE:n.writeInt32LE,o=0;o<t.length;o++)i.call(n,t[o],4*o,!0);return n}function o(t,e,r,o){s.isBuffer(t)||(t=new s(t));var a=e(n(t,o),t.length*c);return i(a,r,o)}var s=t("buffer").Buffer,a=4,u=new s(a);u.fill(0);var c=8;e.exports={hash:o}},{buffer:1}],1:[function(t,e,r){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t){return this instanceof i?(this.length=0,this.parent=void 0,"number"==typeof t?o(this,t):"string"==typeof t?s(this,t,arguments.length>1?arguments[1]:"utf8"):a(this,t)):arguments.length>1?new i(t,arguments[1]):new i(t)}function o(t,e){if(t=f(t,0>e?0:0|d(e)),!i.TYPED_ARRAY_SUPPORT)for(var r=0;e>r;r++)t[r]=0;return t}function s(t,e,r){("string"!=typeof r||""===r)&&(r="utf8");var n=0|m(e,r);return t=f(t,n),t.write(e,r),t}function a(t,e){if(i.isBuffer(e))return u(t,e);if(Y(e))return c(t,e);if(null==e)throw new TypeError("must start with number, buffer, array or string");return"undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer?l(t,e):e.length?h(t,e):p(t,e)}function u(t,e){var r=0|d(e.length);return t=f(t,r),e.copy(t,0,0,r),t}function c(t,e){var r=0|d(e.length);t=f(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function l(t,e){var r=0|d(e.length);t=f(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function h(t,e){var r=0|d(e.length);t=f(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function p(t,e){var r,n=0;"Buffer"===e.type&&Y(e.data)&&(r=e.data,n=0|d(r.length)),t=f(t,n);for(var i=0;n>i;i+=1)t[i]=255&r[i];return t}function f(t,e){i.TYPED_ARRAY_SUPPORT?t=i._augment(new Uint8Array(e)):(t.length=e,t._isBuffer=!0);var r=0!==e&&e<=i.poolSize>>>1;return r&&(t.parent=G),t}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function y(t,e){if(!(this instanceof y))return new y(t,e);var r=new i(t,e);return delete r.parent,r}function m(t,e){"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return r;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return H(t).length;default:if(n)return U(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if(e=0|e,r=void 0===r||r===1/0?this.length:0|r,t||(t="utf8"),0>e&&(e=0),r>this.length&&(r=this.length),e>=r)return"";for(;;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return A(this,e,r);case"ascii":return R(this,e,r);case"binary":return C(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function g(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;n>s;s++){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))throw new Error("Invalid hex string");t[r+s]=a}return s}function b(t,e,r,n){return X(U(e,t.length-r),t,r,n)}function w(t,e,r,n){return X(F(e),t,r,n)}function E(t,e,r,n){return w(t,e,r,n)}function _(t,e,r,n){return X(H(e),t,r,n)}function x(t,e,r,n){return X(z(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,r))}function A(t,e,r){var n="",i="";r=Math.min(t.length,r);for(var o=e;r>o;o++)t[o]<=127?(n+=V(i)+String.fromCharCode(t[o]),i=""):i+="%"+t[o].toString(16);return n+V(i)}function R(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(127&t[i]);return n}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(t[i]);return n}function T(t,e,r){var n=t.length;(!e||0>e)&&(e=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=e;r>o;o++)i+=B(t[o]);return i}function I(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function L(t,e,r){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function j(t,e,r,n,o,s){if(!i.isBuffer(t))throw new TypeError("buffer must be a Buffer instance");if(e>o||s>e)throw new RangeError("value is out of bounds");if(r+n>t.length)throw new RangeError("index out of range")}function O(t,e,r,n){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);o>i;i++)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function q(t,e,r,n){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);o>i;i++)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(e>i||o>e)throw new RangeError("value is out of bounds");if(r+n>t.length)throw new RangeError("index out of range");if(0>r)throw new RangeError("index out of range")}function k(t,e,r,n,i){return i||D(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),W.write(t,e,r,n,23,4),r+4}function P(t,e,r,n,i){return i||D(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),W.write(t,e,r,n,52,8),r+8}function N(t){if(t=M(t).replace($,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function M(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function B(t){return 16>t?"0"+t.toString(16):t.toString(16)}function U(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],s=0;n>s;s++){if(r=t.charCodeAt(s),r>55295&&57344>r){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(56320>r){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=i-55296<<10|r-56320|65536,i=null}else i&&((e-=3)>-1&&o.push(239,191,189),i=null);if(128>r){if((e-=1)<0)break;o.push(r)}else if(2048>r){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(65536>r){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(2097152>r))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function F(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e}function z(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);s++)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function H(t){return K.toByteArray(N(t))}function X(t,e,r,n){for(var i=0;n>i&&!(i+r>=e.length||i>=t.length);i++)e[i+r]=t[i];return i}function V(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}var K=t("base64-js"),W=t("ieee754"),Y=t("is-array");r.Buffer=i,r.SlowBuffer=y,r.INSPECT_MAX_BYTES=50,i.poolSize=8192;var G={};i.TYPED_ARRAY_SUPPORT=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===new Uint8Array(1).subarray(1,1).byteLength}catch(r){return!1}}(),i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,s=Math.min(r,n);s>o&&t[o]===e[o];)++o;return o!==s&&(r=t[o],n=e[o]),n>r?-1:r>n?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Y(t))throw new TypeError("list argument must be an Array of Buffers.");if(0===t.length)return new i(0);if(1===t.length)return t[0];var r;if(void 0===e)for(e=0,r=0;r<t.length;r++)e+=t[r].length;var n=new i(e),o=0;for(r=0;r<t.length;r++){var s=t[r];s.copy(n,o),o+=s.length}return n},i.byteLength=m,i.prototype.length=void 0,i.prototype.parent=void 0,i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?A(this,0,t):v.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:0===i.compare(this,t)},i.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?0:i.compare(this,t)},i.prototype.indexOf=function(t,e){function r(t,e,r){for(var n=-1,i=0;r+i<t.length;i++)if(t[r+i]===e[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===e.length)return r+n}else n=-1;return-1}if(e>2147483647?e=2147483647:-2147483648>e&&(e=-2147483648),e>>=0,0===this.length)return-1;if(e>=this.length)return-1;if(0>e&&(e=Math.max(this.length+e,0)),"string"==typeof t)return 0===t.length?-1:String.prototype.indexOf.call(this,t,e);if(i.isBuffer(t))return r(this,t,e);if("number"==typeof t)return i.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,t,e):r(this,[t],e);throw new TypeError("val must be string, number or Buffer")},i.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},i.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0);else{var i=n;n=e,e=0|r,r=i}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(0>r||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return g(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return w(this,t,e,r);case"binary":return E(this,t,e,r);case"base64":return _(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,0>t?(t+=r,0>t&&(t=0)):t>r&&(t=r),0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),t>e&&(e=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=i._augment(this.subarray(t,e));else{var o=e-t;n=new i(o,void 0);for(var s=0;o>s;s++)n[s]=this[s+t]}return n.length&&(n.parent=this.parent||this),n},i.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||L(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},i.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||L(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},i.prototype.readUInt8=function(t,e){
return e||L(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||L(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||L(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},i.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),W.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),W.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),W.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),W.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||j(this,t,e,r,Math.pow(2,8*r),0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUIntBE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||j(this,t,e,r,Math.pow(2,8*r),0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUInt8=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=t,e+1},i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=t):O(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t):q(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t):q(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);j(this,t,e,r,i-1,-i)}var o=0,s=1,a=0>t?1:0;for(this[e]=255&t;++o<r&&(s*=256);)this[e+o]=(t/s>>0)-a&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);j(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0>t?1:0;for(this[e+o]=255&t;--o>=0&&(s*=256);)this[e+o]=(t/s>>0)-a&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),0>t&&(t=255+t+1),this[e]=t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=t):O(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):q(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e=0|e,r||j(this,t,e,4,2147483647,-2147483648),0>t&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t):q(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return P(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return P(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&r>n&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(0>e)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>n)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(1e3>o||!i.TYPED_ARRAY_SUPPORT)for(var s=0;o>s;s++)t[s+e]=this[s+r];else t._set(this.subarray(r,r+o),e);return o},i.prototype.fill=function(t,e,r){if(t||(t=0),e||(e=0),r||(r=this.length),e>r)throw new RangeError("end < start");if(r!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>r||r>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof t)for(n=e;r>n;n++)this[n]=t;else{var i=U(t.toString()),o=i.length;for(n=e;r>n;n++)this[n]=i[n%o]}return this}},i.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(i.TYPED_ARRAY_SUPPORT)return new i(this).buffer;for(var t=new Uint8Array(this.length),e=0,r=t.length;r>e;e+=1)t[e]=this[e];return t.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var J=i.prototype;i._augment=function(t){return t.constructor=i,t._isBuffer=!0,t._set=t.set,t.get=J.get,t.set=J.set,t.write=J.write,t.toString=J.toString,t.toLocaleString=J.toString,t.toJSON=J.toJSON,t.equals=J.equals,t.compare=J.compare,t.indexOf=J.indexOf,t.copy=J.copy,t.slice=J.slice,t.readUIntLE=J.readUIntLE,t.readUIntBE=J.readUIntBE,t.readUInt8=J.readUInt8,t.readUInt16LE=J.readUInt16LE,t.readUInt16BE=J.readUInt16BE,t.readUInt32LE=J.readUInt32LE,t.readUInt32BE=J.readUInt32BE,t.readIntLE=J.readIntLE,t.readIntBE=J.readIntBE,t.readInt8=J.readInt8,t.readInt16LE=J.readInt16LE,t.readInt16BE=J.readInt16BE,t.readInt32LE=J.readInt32LE,t.readInt32BE=J.readInt32BE,t.readFloatLE=J.readFloatLE,t.readFloatBE=J.readFloatBE,t.readDoubleLE=J.readDoubleLE,t.readDoubleBE=J.readDoubleBE,t.writeUInt8=J.writeUInt8,t.writeUIntLE=J.writeUIntLE,t.writeUIntBE=J.writeUIntBE,t.writeUInt16LE=J.writeUInt16LE,t.writeUInt16BE=J.writeUInt16BE,t.writeUInt32LE=J.writeUInt32LE,t.writeUInt32BE=J.writeUInt32BE,t.writeIntLE=J.writeIntLE,t.writeIntBE=J.writeIntBE,t.writeInt8=J.writeInt8,t.writeInt16LE=J.writeInt16LE,t.writeInt16BE=J.writeInt16BE,t.writeInt32LE=J.writeInt32LE,t.writeInt32BE=J.writeInt32BE,t.writeFloatLE=J.writeFloatLE,t.writeFloatBE=J.writeFloatBE,t.writeDoubleLE=J.writeDoubleLE,t.writeDoubleBE=J.writeDoubleBE,t.fill=J.fill,t.inspect=J.inspect,t.toArrayBuffer=J.toArrayBuffer,t};var $=/[^+\/0-9A-z\-]/g},{"base64-js":2,ieee754:3,"is-array":4}],4:[function(t,e,r){var n=Array.isArray,i=Object.prototype.toString;e.exports=n||function(t){return!!t&&"[object Array]"==i.call(t)}},{}],3:[function(t,e,r){r.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,c=u>>1,l=-7,h=r?i-1:0,p=r?-1:1,f=t[e+h];for(h+=p,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+t[e+h],h+=p,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[e+h],h+=p,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:(f?-1:1)*(1/0);s+=Math.pow(2,n),o-=c}return(f?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,e,r,n,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:o-1,d=n?1:-1,y=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+h>=1?p/u:p*Math.pow(2,1-h),e*u>=2&&(s++,u/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+f]=255&a,f+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[r+f]=255&s,f+=d,s/=256,c-=8);t[r+f-d]|=128*y}},{}],2:[function(t,e,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===s||e===h?62:e===a||e===p?63:u>e?-1:u+10>e?e-u+26+26:l+26>e?e-l:c+26>e?e-c+26:void 0}function r(t){function r(t){c[h++]=t}var n,i,s,a,u,c;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=t.length;u="="===t.charAt(l-2)?2:"="===t.charAt(l-1)?1:0,c=new o(3*t.length/4-u),s=u>0?t.length-4:t.length;var h=0;for(n=0,i=0;s>n;n+=4,i+=3)a=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&a)>>16),r((65280&a)>>8),r(255&a);return 2===u?(a=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&a)):1===u&&(a=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(a>>8&255),r(255&a)),c}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,s,a=t.length%3,u="";for(i=0,s=t.length-a;s>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=r(o);switch(a){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),c="a".charCodeAt(0),l="A".charCodeAt(0),h="-".charCodeAt(0),p="_".charCodeAt(0);t.toByteArray=r,t.fromByteArray=i}("undefined"==typeof r?this.base64js={}:r)},{}]},{},[]),_xamzrequire=function e(t,r,n){function i(s,a){if(!r[s]){if(!t[s]){var u="function"==typeof _xamzrequire&&_xamzrequire;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return i(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var o="function"==typeof _xamzrequire&&_xamzrequire,s=0;s<n.length;s++)i(n[s]);return i}({22:[function(t,e,r){var n=t("./core");n.apiLoader=function(t,e){return n.apiLoader.services[t][e]},n.apiLoader.services={},n.XML.Parser=t("./xml/browser_parser"),t("./http/xhr"),"undefined"!=typeof window&&(window.AWS=n),"undefined"!=typeof e&&(e.exports=n),"undefined"!=typeof self&&(self.AWS=n)},{"./core":25,"./http/xhr":39,"./xml/browser_parser":86}],86:[function(t,e,r){function n(){}function i(t,e){switch(e||(e={}),e.type){case"structure":return o(t,e);case"map":return s(t,e);case"list":return a(t,e);case void 0:case null:return c(t);default:return u(t,e)}}function o(t,e){var r={};return null===t?r:(l.each(e.members,function(e,n){if(n.isXmlAttribute){if(Object.prototype.hasOwnProperty.call(t.attributes,n.name)){var o=t.attributes[n.name].value;r[e]=i({textContent:o},n)}}else{var s=n.flattened?t:t.getElementsByTagName(n.name)[0];s?r[e]=i(s,n):n.flattened||"list"!==n.type||(r[e]=n.defaultValue)}}),r)}function s(t,e){for(var r={},n=e.key.name||"key",o=e.value.name||"value",s=e.flattened?e.name:"entry",a=t.firstElementChild;a;){if(a.nodeName===s){var u=a.getElementsByTagName(n)[0].textContent,c=a.getElementsByTagName(o)[0];r[u]=i(c,e.value)}a=a.nextElementSibling}return r}function a(t,e){for(var r=[],n=e.flattened?e.name:e.member.name||"member",o=t.firstElementChild;o;)o.nodeName===n&&r.push(i(o,e.member)),o=o.nextElementSibling;return r}function u(t,e){if(t.getAttribute){var r=t.getAttribute("encoding");"base64"===r&&(e=new h.create({type:r}))}var n=t.textContent;return""===n&&(n=null),"function"==typeof e.toType?e.toType(n):n}function c(t){if(void 0===t||null===t)return"";if(!t.firstElementChild)return null===t.parentNode.parentNode?{}:0===t.childNodes.length?"":t.textContent;for(var e={type:"structure",members:{}},r=t.firstElementChild;r;){var n=r.nodeName;Object.prototype.hasOwnProperty.call(e.members,n)?e.members[n].type="list":e.members[n]={name:n},r=r.nextElementSibling}return o(t,e)}var l=t("../util"),h=t("../model/shape");n.prototype.parse=function(t,e){if(""===t.replace(/^\s+/,""))return{};var r,n;try{if(window.DOMParser){try{var o=new DOMParser;r=o.parseFromString(t,"text/xml")}catch(s){throw l.error(new Error("Parse error in document"),{originalError:s,code:"XMLParserError",retryable:!0})}if(null===r.documentElement)throw l.error(new Error("Cannot parse empty document."),{code:"XMLParserError",retryable:!0});var a=r.getElementsByTagName("parsererror")[0];if(a&&(a.parentNode===r||"body"===a.parentNode.nodeName||a.parentNode.parentNode===r||"body"===a.parentNode.parentNode.nodeName)){var u=a.getElementsByTagName("div")[0]||a;throw l.error(new Error(u.textContent||"Parser error in document"),{code:"XMLParserError",retryable:!0})}}else{if(!window.ActiveXObject)throw new Error("Cannot load XML parser");if(r=new window.ActiveXObject("Microsoft.XMLDOM"),r.async=!1,!r.loadXML(t))throw l.error(new Error("Parse error in document"),{code:"XMLParserError",retryable:!0})}}catch(c){n=c}if(r&&r.documentElement&&!n){var h=i(r.documentElement,e),p=r.getElementsByTagName("ResponseMetadata")[0];return p&&(h.ResponseMetadata=i(p,{})),h}if(n)throw l.error(n||new Error,{code:"XMLParserError",retryable:!0});return{}},e.exports=n},{"../model/shape":47,"../util":85}],39:[function(t,e,r){var n=t("../core"),i=t("events").EventEmitter;t("../http"),n.XHRClient=n.util.inherit({handleRequest:function(t,e,r,o){var s=this,a=t.endpoint,u=new i,c=a.protocol+"//"+a.hostname;80!==a.port&&443!==a.port&&(c+=":"+a.port),c+=t.path;var l=new XMLHttpRequest,h=!1;t.stream=l,l.addEventListener("readystatechange",function(){try{if(0===l.status)return}catch(t){return}if(this.readyState>=this.HEADERS_RECEIVED&&!h){try{l.responseType="arraybuffer"}catch(t){}u.statusCode=l.status,u.headers=s.parseHeaders(l.getAllResponseHeaders()),u.emit("headers",u.statusCode,u.headers),h=!0}this.readyState===this.DONE&&s.finishRequest(l,u)},!1),l.upload.addEventListener("progress",function(t){u.emit("sendProgress",t)}),l.addEventListener("progress",function(t){u.emit("receiveProgress",t)},!1),l.addEventListener("timeout",function(){o(n.util.error(new Error("Timeout"),{code:"TimeoutError"}))},!1),l.addEventListener("error",function(){o(n.util.error(new Error("Network Failure"),{code:"NetworkingError"}))},!1),r(u),l.open(t.method,c,e.xhrAsync!==!1),n.util.each(t.headers,function(t,e){"Content-Length"!==t&&"User-Agent"!==t&&"Host"!==t&&l.setRequestHeader(t,e)}),e.timeout&&e.xhrAsync!==!1&&(l.timeout=e.timeout),e.xhrWithCredentials&&(l.withCredentials=!0);try{l.send(t.body)}catch(p){if(!t.body||"object"!=typeof t.body.buffer)throw p;l.send(t.body.buffer)}return u},parseHeaders:function(t){var e={};return n.util.arrayEach(t.split(/\r?\n/),function(t){var r=t.split(":",1)[0],n=t.substring(r.length+2);r.length>0&&(e[r.toLowerCase()]=n)}),e},finishRequest:function(t,e){var r;if("arraybuffer"===t.responseType&&t.response){var i=t.response;r=new n.util.Buffer(i.byteLength);for(var o=new Uint8Array(i),s=0;s<r.length;++s)r[s]=o[s]}try{r||"string"!=typeof t.responseText||(r=new n.util.Buffer(t.responseText))}catch(a){}r&&e.emit("data",r),e.emit("end")}}),n.HttpClient.prototype=n.XHRClient.prototype,n.HttpClient.streamsApiVersion=1},{"../core":25,"../http":38,events:11}],11:[function(t,e,r){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function o(t){return"number"==typeof t}function s(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!o(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,r,n,o,u,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[t],a(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(n=arguments.length,o=new Array(n-1),u=1;n>u;u++)o[u-1]=arguments[u];r.apply(this,o)}else if(s(r)){for(n=arguments.length,o=new Array(n-1),u=1;n>u;u++)o[u-1]=arguments[u];for(c=r.slice(),n=c.length,u=0;n>u;u++)c[u].apply(this,o)}return!0},n.prototype.addListener=function(t,e){var r;if(!i(e))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?s(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,s(this._events[t])&&!this._events[t].warned){var r;r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[t].length>r&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function r(){this.removeListener(t,r),n||(n=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var n=!1;return r.listener=e,this.on(t,r),this},n.prototype.removeListener=function(t,e){var r,n,o,a;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],o=r.length,n=-1,r===e||i(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(s(r)){for(a=o;a-->0;)if(r[a]===e||r[a].listener&&r[a].listener===e){n=a;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],i(r))this.removeListener(t,r);else for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.listenerCount=function(t,e){var r;return r=t._events&&t._events[e]?i(t._events[e])?1:t._events[e].length:0}},{}]},{},[22]);AWS.apiLoader.services.kinesis={},AWS.Kinesis=AWS.Service.defineService("kinesis",["2013-12-02"]);AWS.apiLoader.services.kinesis["2013-12-02"]={version:"2.0",metadata:{apiVersion:"2013-12-02",endpointPrefix:"kinesis",jsonVersion:"1.1",protocol:"json",serviceAbbreviation:"Kinesis",serviceFullName:"Amazon Kinesis",signatureVersion:"v4",targetPrefix:"Kinesis_20131202"},operations:{AddTagsToStream:{input:{type:"structure",required:["StreamName","Tags"],members:{StreamName:{},Tags:{type:"map",key:{},value:{}}}},http:{}},CreateStream:{input:{type:"structure",required:["StreamName","ShardCount"],members:{StreamName:{},ShardCount:{type:"integer"}}},http:{}},DecreaseStreamRetentionPeriod:{input:{type:"structure",required:["StreamName","RetentionPeriodHours"],members:{StreamName:{},RetentionPeriodHours:{type:"integer"}}},http:{}},DeleteStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{}}},http:{}},DescribeStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{},Limit:{type:"integer"},ExclusiveStartShardId:{}}},output:{type:"structure",required:["StreamDescription"],members:{StreamDescription:{type:"structure",required:["StreamName","StreamARN","StreamStatus","Shards","HasMoreShards","RetentionPeriodHours","EnhancedMonitoring"],members:{StreamName:{},StreamARN:{},StreamStatus:{},Shards:{type:"list",member:{type:"structure",required:["ShardId","HashKeyRange","SequenceNumberRange"],members:{ShardId:{},ParentShardId:{},AdjacentParentShardId:{},HashKeyRange:{type:"structure",required:["StartingHashKey","EndingHashKey"],members:{StartingHashKey:{},EndingHashKey:{}}},SequenceNumberRange:{type:"structure",required:["StartingSequenceNumber"],members:{StartingSequenceNumber:{},EndingSequenceNumber:{}}}}}},HasMoreShards:{type:"boolean"},RetentionPeriodHours:{type:"integer"},EnhancedMonitoring:{type:"list",member:{type:"structure",members:{ShardLevelMetrics:{shape:"Sr"}}}}}}}},http:{}},DisableEnhancedMonitoring:{input:{type:"structure",required:["StreamName","ShardLevelMetrics"],members:{StreamName:{},ShardLevelMetrics:{shape:"Sr"}}},output:{shape:"Su"},http:{}},EnableEnhancedMonitoring:{input:{type:"structure",required:["StreamName","ShardLevelMetrics"],members:{StreamName:{},ShardLevelMetrics:{shape:"Sr"}}},output:{shape:"Su"},http:{}},GetRecords:{input:{type:"structure",required:["ShardIterator"],members:{ShardIterator:{},Limit:{type:"integer"}}},output:{type:"structure",required:["Records"],members:{Records:{type:"list",member:{type:"structure",required:["SequenceNumber","Data","PartitionKey"],members:{SequenceNumber:{},ApproximateArrivalTimestamp:{type:"timestamp"},Data:{type:"blob"},PartitionKey:{}}}},NextShardIterator:{},MillisBehindLatest:{type:"long"}}},http:{}},GetShardIterator:{input:{type:"structure",required:["StreamName","ShardId","ShardIteratorType"],members:{StreamName:{},ShardId:{},ShardIteratorType:{},StartingSequenceNumber:{},Timestamp:{type:"timestamp"}}},output:{type:"structure",members:{ShardIterator:{}}},http:{}},IncreaseStreamRetentionPeriod:{input:{type:"structure",required:["StreamName","RetentionPeriodHours"],members:{StreamName:{},RetentionPeriodHours:{type:"integer"}}},http:{}},ListStreams:{input:{type:"structure",members:{Limit:{type:"integer"},ExclusiveStartStreamName:{}}},output:{type:"structure",required:["StreamNames","HasMoreStreams"],members:{StreamNames:{type:"list",member:{}},HasMoreStreams:{type:"boolean"}}},http:{}},ListTagsForStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{},ExclusiveStartTagKey:{},Limit:{type:"integer"}}},output:{type:"structure",required:["Tags","HasMoreTags"],members:{Tags:{type:"list",member:{type:"structure",required:["Key"],members:{Key:{},Value:{}}}},HasMoreTags:{type:"boolean"}}},http:{}},MergeShards:{input:{type:"structure",required:["StreamName","ShardToMerge","AdjacentShardToMerge"],members:{StreamName:{},ShardToMerge:{},AdjacentShardToMerge:{}}},http:{}},PutRecord:{input:{type:"structure",required:["StreamName","Data","PartitionKey"],members:{StreamName:{},Data:{type:"blob"},PartitionKey:{},ExplicitHashKey:{},SequenceNumberForOrdering:{}}},output:{type:"structure",required:["ShardId","SequenceNumber"],members:{ShardId:{},SequenceNumber:{}}},http:{}},PutRecords:{input:{type:"structure",required:["Records","StreamName"],members:{Records:{type:"list",member:{type:"structure",required:["Data","PartitionKey"],members:{Data:{type:"blob"},ExplicitHashKey:{},PartitionKey:{}}}},StreamName:{}}},output:{type:"structure",required:["Records"],members:{FailedRecordCount:{type:"integer"},Records:{type:"list",member:{type:"structure",members:{SequenceNumber:{},ShardId:{},ErrorCode:{},ErrorMessage:{}}}}}},http:{}},RemoveTagsFromStream:{input:{type:"structure",required:["StreamName","TagKeys"],members:{StreamName:{},TagKeys:{type:"list",member:{}}}},http:{}},SplitShard:{input:{type:"structure",required:["StreamName","ShardToSplit","NewStartingHashKey"],members:{StreamName:{},ShardToSplit:{},NewStartingHashKey:{}}},http:{}}},shapes:{Sr:{type:"list",member:{}},Su:{type:"structure",members:{StreamName:{},CurrentShardLevelMetrics:{shape:"Sr"},DesiredShardLevelMetrics:{shape:"Sr"}}}},paginators:{DescribeStream:{input_token:"ExclusiveStartShardId",limit_key:"Limit",more_results:"StreamDescription.HasMoreShards",output_token:"StreamDescription.Shards[-1].ShardId",result_key:"StreamDescription.Shards"},ListStreams:{input_token:"ExclusiveStartStreamName",limit_key:"Limit",more_results:"HasMoreStreams",output_token:"StreamNames[-1]",result_key:"StreamNames"}},waiters:{StreamExists:{delay:10,operation:"DescribeStream",maxAttempts:18,acceptors:[{expected:"ACTIVE",matcher:"path",state:"success",argument:"StreamDescription.StreamStatus"}]}}};AWS.apiLoader.services.sts={},AWS.STS=AWS.Service.defineService("sts",["2011-06-15"]),_xamzrequire=function e(r,t,n){function i(o,a){if(!t[o]){if(!r[o]){var u="function"==typeof _xamzrequire&&_xamzrequire;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[o]={exports:{}};r[o][0].call(d.exports,function(e){var t=r[o][1][e];return i(t?t:e)},d,d.exports,e,r,t,n)}return t[o].exports}for(var s="function"==typeof _xamzrequire&&_xamzrequire,o=0;o<n.length;o++)i(n[o]);return i}({75:[function(e,r,t){var n=e("../core");n.util.update(n.STS.prototype,{credentialsFrom:function(e,r){return e?(r||(r=new n.TemporaryCredentials),r.expired=!1,r.accessKeyId=e.Credentials.AccessKeyId,r.secretAccessKey=e.Credentials.SecretAccessKey,r.sessionToken=e.Credentials.SessionToken,r.expireTime=e.Credentials.Expiration,r):null},assumeRoleWithWebIdentity:function(e,r){return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity",e,r)},assumeRoleWithSAML:function(e,r){return this.makeUnauthenticatedRequest("assumeRoleWithSAML",e,r)}})},{"../core":25}]},{},[75]);AWS.apiLoader.services.sts["2011-06-15"]={version:"2.0",metadata:{apiVersion:"2011-06-15",endpointPrefix:"sts",globalEndpoint:"sts.amazonaws.com",protocol:"query",serviceAbbreviation:"AWS STS",serviceFullName:"AWS Security Token Service",signatureVersion:"v4",xmlNamespace:"https://sts.amazonaws.com/doc/2011-06-15/"},operations:{AssumeRole:{input:{type:"structure",required:["RoleArn","RoleSessionName"],members:{RoleArn:{},RoleSessionName:{},Policy:{},DurationSeconds:{type:"integer"},ExternalId:{},SerialNumber:{},TokenCode:{}}},output:{resultWrapper:"AssumeRoleResult",type:"structure",members:{Credentials:{shape:"Sa"},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"}}},http:{}},AssumeRoleWithSAML:{input:{type:"structure",required:["RoleArn","PrincipalArn","SAMLAssertion"],members:{RoleArn:{},PrincipalArn:{},SAMLAssertion:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"AssumeRoleWithSAMLResult",type:"structure",members:{Credentials:{shape:"Sa"},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"},Subject:{},SubjectType:{},Issuer:{},Audience:{},NameQualifier:{}}},http:{}},AssumeRoleWithWebIdentity:{input:{type:"structure",required:["RoleArn","RoleSessionName","WebIdentityToken"],members:{RoleArn:{},RoleSessionName:{},WebIdentityToken:{},ProviderId:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"AssumeRoleWithWebIdentityResult",type:"structure",members:{Credentials:{shape:"Sa"},SubjectFromWebIdentityToken:{},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"},Provider:{},Audience:{}}},http:{}},DecodeAuthorizationMessage:{input:{type:"structure",required:["EncodedMessage"],members:{EncodedMessage:{}}},output:{resultWrapper:"DecodeAuthorizationMessageResult",type:"structure",members:{DecodedMessage:{}}},http:{}},GetCallerIdentity:{input:{type:"structure",members:{}},output:{resultWrapper:"GetCallerIdentityResult",type:"structure",members:{UserId:{},Account:{},Arn:{}}},http:{}},GetFederationToken:{input:{type:"structure",required:["Name"],members:{Name:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"GetFederationTokenResult",type:"structure",members:{Credentials:{shape:"Sa"},FederatedUser:{type:"structure",required:["FederatedUserId","Arn"],members:{FederatedUserId:{},Arn:{}}},PackedPolicySize:{type:"integer"}}},http:{}},GetSessionToken:{input:{type:"structure",members:{DurationSeconds:{type:"integer"},SerialNumber:{},TokenCode:{}}},output:{resultWrapper:"GetSessionTokenResult",type:"structure",members:{Credentials:{shape:"Sa"}}},http:{}}},shapes:{Sa:{type:"structure",required:["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],members:{AccessKeyId:{},SecretAccessKey:{},SessionToken:{},Expiration:{type:"timestamp"}}},Sf:{type:"structure",required:["AssumedRoleId","Arn"],members:{AssumedRoleId:{},Arn:{}}}}};
/*
	JavaScript BigInteger library version 0.9
	http://silentmatt.com/biginteger/

	Copyright (c) 2009 Matthew Crumley <email@matthewcrumley.com>
	Copyright (c) 2010,2011 by John Tobey <John.Tobey@gmail.com>
	Licensed under the MIT license.

	Support for arbitrary internal representation base was added by
	Vitaly Magerya.
*/

/*
	File: biginteger.js

	Exports:

		<BigInteger>
*/
(function(exports) {
"use strict";
/*
	Class: BigInteger
	An arbitrarily-large integer.

	<BigInteger> objects should be considered immutable. None of the "built-in"
	methods modify *this* or their arguments. All properties should be
	considered private.

	All the methods of <BigInteger> instances can be called "statically". The
	static versions are convenient if you don't already have a <BigInteger>
	object.

	As an example, these calls are equivalent.

	> BigInteger(4).multiply(5); // returns BigInteger(20);
	> BigInteger.multiply(4, 5); // returns BigInteger(20);

	> var a = 42;
	> var a = BigInteger.toJSValue("0b101010"); // Not completely useless...
*/

var CONSTRUCT = {}; // Unique token to call "private" version of constructor

/*
	Constructor: BigInteger()
	Convert a value to a <BigInteger>.

	Although <BigInteger()> is the constructor for <BigInteger> objects, it is
	best not to call it as a constructor. If *n* is a <BigInteger> object, it is
	simply returned as-is. Otherwise, <BigInteger()> is equivalent to <parse>
	without a radix argument.

	> var n0 = BigInteger();      // Same as <BigInteger.ZERO>
	> var n1 = BigInteger("123"); // Create a new <BigInteger> with value 123
	> var n2 = BigInteger(123);   // Create a new <BigInteger> with value 123
	> var n3 = BigInteger(n2);    // Return n2, unchanged

	The constructor form only takes an array and a sign. *n* must be an
	array of numbers in little-endian order, where each digit is between 0
	and BigInteger.base.  The second parameter sets the sign: -1 for
	negative, +1 for positive, or 0 for zero. The array is *not copied and
	may be modified*. If the array contains only zeros, the sign parameter
	is ignored and is forced to zero.

	> new BigInteger([5], -1): create a new BigInteger with value -5

	Parameters:

		n - Value to convert to a <BigInteger>.

	Returns:

		A <BigInteger> value.

	See Also:

		<parse>, <BigInteger>
*/
function BigInteger(n, s, token) {
	if (token !== CONSTRUCT) {
		if (n instanceof BigInteger) {
			return n;
		}
		else if (typeof n === "undefined") {
			return ZERO;
		}
		return BigInteger.parse(n);
	}

	n = n || [];  // Provide the nullary constructor for subclasses.
	while (n.length && !n[n.length - 1]) {
		--n.length;
	}
	this._d = n;
	this._s = n.length ? (s || 1) : 0;
}

BigInteger._construct = function(n, s) {
	return new BigInteger(n, s, CONSTRUCT);
};

// Base-10 speedup hacks in parse, toString, exp10 and log functions
// require base to be a power of 10. 10^7 is the largest such power
// that won't cause a precision loss when digits are multiplied.
var BigInteger_base = 10000000;
var BigInteger_base_log10 = 7;

BigInteger.base = BigInteger_base;
BigInteger.base_log10 = BigInteger_base_log10;

var ZERO = new BigInteger([], 0, CONSTRUCT);
// Constant: ZERO
// <BigInteger> 0.
BigInteger.ZERO = ZERO;

var ONE = new BigInteger([1], 1, CONSTRUCT);
// Constant: ONE
// <BigInteger> 1.
BigInteger.ONE = ONE;

var M_ONE = new BigInteger(ONE._d, -1, CONSTRUCT);
// Constant: M_ONE
// <BigInteger> -1.
BigInteger.M_ONE = M_ONE;

// Constant: _0
// Shortcut for <ZERO>.
BigInteger._0 = ZERO;

// Constant: _1
// Shortcut for <ONE>.
BigInteger._1 = ONE;

/*
	Constant: small
	Array of <BigIntegers> from 0 to 36.

	These are used internally for parsing, but useful when you need a "small"
	<BigInteger>.

	See Also:

		<ZERO>, <ONE>, <_0>, <_1>
*/
BigInteger.small = [
	ZERO,
	ONE,
	/* Assuming BigInteger_base > 36 */
	new BigInteger( [2], 1, CONSTRUCT),
	new BigInteger( [3], 1, CONSTRUCT),
	new BigInteger( [4], 1, CONSTRUCT),
	new BigInteger( [5], 1, CONSTRUCT),
	new BigInteger( [6], 1, CONSTRUCT),
	new BigInteger( [7], 1, CONSTRUCT),
	new BigInteger( [8], 1, CONSTRUCT),
	new BigInteger( [9], 1, CONSTRUCT),
	new BigInteger([10], 1, CONSTRUCT),
	new BigInteger([11], 1, CONSTRUCT),
	new BigInteger([12], 1, CONSTRUCT),
	new BigInteger([13], 1, CONSTRUCT),
	new BigInteger([14], 1, CONSTRUCT),
	new BigInteger([15], 1, CONSTRUCT),
	new BigInteger([16], 1, CONSTRUCT),
	new BigInteger([17], 1, CONSTRUCT),
	new BigInteger([18], 1, CONSTRUCT),
	new BigInteger([19], 1, CONSTRUCT),
	new BigInteger([20], 1, CONSTRUCT),
	new BigInteger([21], 1, CONSTRUCT),
	new BigInteger([22], 1, CONSTRUCT),
	new BigInteger([23], 1, CONSTRUCT),
	new BigInteger([24], 1, CONSTRUCT),
	new BigInteger([25], 1, CONSTRUCT),
	new BigInteger([26], 1, CONSTRUCT),
	new BigInteger([27], 1, CONSTRUCT),
	new BigInteger([28], 1, CONSTRUCT),
	new BigInteger([29], 1, CONSTRUCT),
	new BigInteger([30], 1, CONSTRUCT),
	new BigInteger([31], 1, CONSTRUCT),
	new BigInteger([32], 1, CONSTRUCT),
	new BigInteger([33], 1, CONSTRUCT),
	new BigInteger([34], 1, CONSTRUCT),
	new BigInteger([35], 1, CONSTRUCT),
	new BigInteger([36], 1, CONSTRUCT)
];

// Used for parsing/radix conversion
BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/*
	Method: toString
	Convert a <BigInteger> to a string.

	When *base* is greater than 10, letters are upper case.

	Parameters:

		base - Optional base to represent the number in (default is base 10).
		       Must be between 2 and 36 inclusive, or an Error will be thrown.

	Returns:

		The string representation of the <BigInteger>.
*/
BigInteger.prototype.toString = function(base) {
	base = +base || 10;
	if (base < 2 || base > 36) {
		throw new Error("illegal radix " + base + ".");
	}
	if (this._s === 0) {
		return "0";
	}
	if (base === 10) {
		var str = this._s < 0 ? "-" : "";
		str += this._d[this._d.length - 1].toString();
		for (var i = this._d.length - 2; i >= 0; i--) {
			var group = this._d[i].toString();
			while (group.length < BigInteger_base_log10) group = '0' + group;
			str += group;
		}
		return str;
	}
	else {
		var numerals = BigInteger.digits;
		base = BigInteger.small[base];
		var sign = this._s;

		var n = this.abs();
		var digits = [];
		var digit;

		while (n._s !== 0) {
			var divmod = n.divRem(base);
			n = divmod[0];
			digit = divmod[1];
			// TODO: This could be changed to unshift instead of reversing at the end.
			// Benchmark both to compare speeds.
			digits.push(numerals[digit.valueOf()]);
		}
		return (sign < 0 ? "-" : "") + digits.reverse().join("");
	}
};

// Verify strings for parsing
BigInteger.radixRegex = [
	/^$/,
	/^$/,
	/^[01]*$/,
	/^[012]*$/,
	/^[0-3]*$/,
	/^[0-4]*$/,
	/^[0-5]*$/,
	/^[0-6]*$/,
	/^[0-7]*$/,
	/^[0-8]*$/,
	/^[0-9]*$/,
	/^[0-9aA]*$/,
	/^[0-9abAB]*$/,
	/^[0-9abcABC]*$/,
	/^[0-9a-dA-D]*$/,
	/^[0-9a-eA-E]*$/,
	/^[0-9a-fA-F]*$/,
	/^[0-9a-gA-G]*$/,
	/^[0-9a-hA-H]*$/,
	/^[0-9a-iA-I]*$/,
	/^[0-9a-jA-J]*$/,
	/^[0-9a-kA-K]*$/,
	/^[0-9a-lA-L]*$/,
	/^[0-9a-mA-M]*$/,
	/^[0-9a-nA-N]*$/,
	/^[0-9a-oA-O]*$/,
	/^[0-9a-pA-P]*$/,
	/^[0-9a-qA-Q]*$/,
	/^[0-9a-rA-R]*$/,
	/^[0-9a-sA-S]*$/,
	/^[0-9a-tA-T]*$/,
	/^[0-9a-uA-U]*$/,
	/^[0-9a-vA-V]*$/,
	/^[0-9a-wA-W]*$/,
	/^[0-9a-xA-X]*$/,
	/^[0-9a-yA-Y]*$/,
	/^[0-9a-zA-Z]*$/
];

/*
	Function: parse
	Parse a string into a <BigInteger>.

	*base* is optional but, if provided, must be from 2 to 36 inclusive. If
	*base* is not provided, it will be guessed based on the leading characters
	of *s* as follows:

	- "0x" or "0X": *base* = 16
	- "0c" or "0C": *base* = 8
	- "0b" or "0B": *base* = 2
	- else: *base* = 10

	If no base is provided, or *base* is 10, the number can be in exponential
	form. For example, these are all valid:

	> BigInteger.parse("1e9");              // Same as "1000000000"
	> BigInteger.parse("1.234*10^3");       // Same as 1234
	> BigInteger.parse("56789 * 10 ** -2"); // Same as 567

	If any characters fall outside the range defined by the radix, an exception
	will be thrown.

	Parameters:

		s - The string to parse.
		base - Optional radix (default is to guess based on *s*).

	Returns:

		a <BigInteger> instance.
*/
BigInteger.parse = function(s, base) {
	// Expands a number in exponential form to decimal form.
	// expandExponential("-13.441*10^5") === "1344100";
	// expandExponential("1.12300e-1") === "0.112300";
	// expandExponential(1000000000000000000000000000000) === "1000000000000000000000000000000";
	function expandExponential(str) {
		str = str.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");

		return str.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function(x, s, n, f, c) {
			c = +c;
			var l = c < 0;
			var i = n.length + c;
			x = (l ? n : f).length;
			c = ((c = Math.abs(c)) >= x ? c - x + l : 0);
			var z = (new Array(c + 1)).join("0");
			var r = n + f;
			return (s || "") + (l ? r = z + r : r += z).substr(0, i += l ? z.length : 0) + (i < r.length ? "." + r.substr(i) : "");
		});
	}

	s = s.toString();
	if (typeof base === "undefined" || +base === 10) {
		s = expandExponential(s);
	}

	var prefixRE;
	if (typeof base === "undefined") {
		prefixRE = '0[xcb]';
	}
	else if (base == 16) {
		prefixRE = '0x';
	}
	else if (base == 8) {
		prefixRE = '0c';
	}
	else if (base == 2) {
		prefixRE = '0b';
	}
	else {
		prefixRE = '';
	}
	var parts = new RegExp('^([+\\-]?)(' + prefixRE + ')?([0-9a-z]*)(?:\\.\\d*)?$', 'i').exec(s);
	if (parts) {
		var sign = parts[1] || "+";
		var baseSection = parts[2] || "";
		var digits = parts[3] || "";

		if (typeof base === "undefined") {
			// Guess base
			if (baseSection === "0x" || baseSection === "0X") { // Hex
				base = 16;
			}
			else if (baseSection === "0c" || baseSection === "0C") { // Octal
				base = 8;
			}
			else if (baseSection === "0b" || baseSection === "0B") { // Binary
				base = 2;
			}
			else {
				base = 10;
			}
		}
		else if (base < 2 || base > 36) {
			throw new Error("Illegal radix " + base + ".");
		}

		base = +base;

		// Check for digits outside the range
		if (!(BigInteger.radixRegex[base].test(digits))) {
			throw new Error("Bad digit for radix " + base);
		}

		// Strip leading zeros, and convert to array
		digits = digits.replace(/^0+/, "").split("");
		if (digits.length === 0) {
			return ZERO;
		}

		// Get the sign (we know it's not zero)
		sign = (sign === "-") ? -1 : 1;

		// Optimize 10
		if (base == 10) {
			var d = [];
			while (digits.length >= BigInteger_base_log10) {
				d.push(parseInt(digits.splice(digits.length-BigInteger.base_log10, BigInteger.base_log10).join(''), 10));
			}
			d.push(parseInt(digits.join(''), 10));
			return new BigInteger(d, sign, CONSTRUCT);
		}

		// Do the conversion
		var d = ZERO;
		base = BigInteger.small[base];
		var small = BigInteger.small;
		for (var i = 0; i < digits.length; i++) {
			d = d.multiply(base).add(small[parseInt(digits[i], 36)]);
		}
		return new BigInteger(d._d, sign, CONSTRUCT);
	}
	else {
		throw new Error("Invalid BigInteger format: " + s);
	}
};

/*
	Function: add
	Add two <BigIntegers>.

	Parameters:

		n - The number to add to *this*. Will be converted to a <BigInteger>.

	Returns:

		The numbers added together.

	See Also:

		<subtract>, <multiply>, <quotient>, <next>
*/
BigInteger.prototype.add = function(n) {
	if (this._s === 0) {
		return BigInteger(n);
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return this;
	}
	if (this._s !== n._s) {
		n = n.negate();
		return this.subtract(n);
	}

	var a = this._d;
	var b = n._d;
	var al = a.length;
	var bl = b.length;
	var sum = new Array(Math.max(al, bl) + 1);
	var size = Math.min(al, bl);
	var carry = 0;
	var digit;

	for (var i = 0; i < size; i++) {
		digit = a[i] + b[i] + carry;
		sum[i] = digit % BigInteger_base;
		carry = (digit / BigInteger_base) | 0;
	}
	if (bl > al) {
		a = b;
		al = bl;
	}
	for (i = size; carry && i < al; i++) {
		digit = a[i] + carry;
		sum[i] = digit % BigInteger_base;
		carry = (digit / BigInteger_base) | 0;
	}
	if (carry) {
		sum[i] = carry;
	}

	for ( ; i < al; i++) {
		sum[i] = a[i];
	}

	return new BigInteger(sum, this._s, CONSTRUCT);
};

/*
	Function: negate
	Get the additive inverse of a <BigInteger>.

	Returns:

		A <BigInteger> with the same magnatude, but with the opposite sign.

	See Also:

		<abs>
*/
BigInteger.prototype.negate = function() {
	return new BigInteger(this._d, (-this._s) | 0, CONSTRUCT);
};

/*
	Function: abs
	Get the absolute value of a <BigInteger>.

	Returns:

		A <BigInteger> with the same magnatude, but always positive (or zero).

	See Also:

		<negate>
*/
BigInteger.prototype.abs = function() {
	return (this._s < 0) ? this.negate() : this;
};

/*
	Function: subtract
	Subtract two <BigIntegers>.

	Parameters:

		n - The number to subtract from *this*. Will be converted to a <BigInteger>.

	Returns:

		The *n* subtracted from *this*.

	See Also:

		<add>, <multiply>, <quotient>, <prev>
*/
BigInteger.prototype.subtract = function(n) {
	if (this._s === 0) {
		return BigInteger(n).negate();
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return this;
	}
	if (this._s !== n._s) {
		n = n.negate();
		return this.add(n);
	}

	var m = this;
	// negative - negative => -|a| - -|b| => -|a| + |b| => |b| - |a|
	if (this._s < 0) {
		m = new BigInteger(n._d, 1, CONSTRUCT);
		n = new BigInteger(this._d, 1, CONSTRUCT);
	}

	// Both are positive => a - b
	var sign = m.compareAbs(n);
	if (sign === 0) {
		return ZERO;
	}
	else if (sign < 0) {
		// swap m and n
		var t = n;
		n = m;
		m = t;
	}

	// a > b
	var a = m._d;
	var b = n._d;
	var al = a.length;
	var bl = b.length;
	var diff = new Array(al); // al >= bl since a > b
	var borrow = 0;
	var i;
	var digit;

	for (i = 0; i < bl; i++) {
		digit = a[i] - borrow - b[i];
		if (digit < 0) {
			digit += BigInteger_base;
			borrow = 1;
		}
		else {
			borrow = 0;
		}
		diff[i] = digit;
	}
	for (i = bl; i < al; i++) {
		digit = a[i] - borrow;
		if (digit < 0) {
			digit += BigInteger_base;
		}
		else {
			diff[i++] = digit;
			break;
		}
		diff[i] = digit;
	}
	for ( ; i < al; i++) {
		diff[i] = a[i];
	}

	return new BigInteger(diff, sign, CONSTRUCT);
};

(function() {
	function addOne(n, sign) {
		var a = n._d;
		var sum = a.slice();
		var carry = true;
		var i = 0;

		while (true) {
			var digit = (a[i] || 0) + 1;
			sum[i] = digit % BigInteger_base;
			if (digit <= BigInteger_base - 1) {
				break;
			}
			++i;
		}

		return new BigInteger(sum, sign, CONSTRUCT);
	}

	function subtractOne(n, sign) {
		var a = n._d;
		var sum = a.slice();
		var borrow = true;
		var i = 0;

		while (true) {
			var digit = (a[i] || 0) - 1;
			if (digit < 0) {
				sum[i] = digit + BigInteger_base;
			}
			else {
				sum[i] = digit;
				break;
			}
			++i;
		}

		return new BigInteger(sum, sign, CONSTRUCT);
	}

	/*
		Function: next
		Get the next <BigInteger> (add one).

		Returns:

			*this* + 1.

		See Also:

			<add>, <prev>
	*/
	BigInteger.prototype.next = function() {
		switch (this._s) {
		case 0:
			return ONE;
		case -1:
			return subtractOne(this, -1);
		// case 1:
		default:
			return addOne(this, 1);
		}
	};

	/*
		Function: prev
		Get the previous <BigInteger> (subtract one).

		Returns:

			*this* - 1.

		See Also:

			<next>, <subtract>
	*/
	BigInteger.prototype.prev = function() {
		switch (this._s) {
		case 0:
			return M_ONE;
		case -1:
			return addOne(this, -1);
		// case 1:
		default:
			return subtractOne(this, 1);
		}
	};
})();

/*
	Function: compareAbs
	Compare the absolute value of two <BigIntegers>.

	Calling <compareAbs> is faster than calling <abs> twice, then <compare>.

	Parameters:

		n - The number to compare to *this*. Will be converted to a <BigInteger>.

	Returns:

		-1, 0, or +1 if *|this|* is less than, equal to, or greater than *|n|*.

	See Also:

		<compare>, <abs>
*/
BigInteger.prototype.compareAbs = function(n) {
	if (this === n) {
		return 0;
	}

	if (!(n instanceof BigInteger)) {
		if (!isFinite(n)) {
			return(isNaN(n) ? n : -1);
		}
		n = BigInteger(n);
	}

	if (this._s === 0) {
		return (n._s !== 0) ? -1 : 0;
	}
	if (n._s === 0) {
		return 1;
	}

	var l = this._d.length;
	var nl = n._d.length;
	if (l < nl) {
		return -1;
	}
	else if (l > nl) {
		return 1;
	}

	var a = this._d;
	var b = n._d;
	for (var i = l-1; i >= 0; i--) {
		if (a[i] !== b[i]) {
			return a[i] < b[i] ? -1 : 1;
		}
	}

	return 0;
};

/*
	Function: compare
	Compare two <BigIntegers>.

	Parameters:

		n - The number to compare to *this*. Will be converted to a <BigInteger>.

	Returns:

		-1, 0, or +1 if *this* is less than, equal to, or greater than *n*.

	See Also:

		<compareAbs>, <isPositive>, <isNegative>, <isUnit>
*/
BigInteger.prototype.compare = function(n) {
	if (this === n) {
		return 0;
	}

	n = BigInteger(n);

	if (this._s === 0) {
		return -n._s;
	}

	if (this._s === n._s) { // both positive or both negative
		var cmp = this.compareAbs(n);
		return cmp * this._s;
	}
	else {
		return this._s;
	}
};

/*
	Function: isUnit
	Return true iff *this* is either 1 or -1.

	Returns:

		true if *this* compares equal to <BigInteger.ONE> or <BigInteger.M_ONE>.

	See Also:

		<isZero>, <isNegative>, <isPositive>, <compareAbs>, <compare>,
		<BigInteger.ONE>, <BigInteger.M_ONE>
*/
BigInteger.prototype.isUnit = function() {
	return this === ONE ||
		this === M_ONE ||
		(this._d.length === 1 && this._d[0] === 1);
};

/*
	Function: multiply
	Multiply two <BigIntegers>.

	Parameters:

		n - The number to multiply *this* by. Will be converted to a
		<BigInteger>.

	Returns:

		The numbers multiplied together.

	See Also:

		<add>, <subtract>, <quotient>, <square>
*/
BigInteger.prototype.multiply = function(n) {
	// TODO: Consider adding Karatsuba multiplication for large numbers
	if (this._s === 0) {
		return ZERO;
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return ZERO;
	}
	if (this.isUnit()) {
		if (this._s < 0) {
			return n.negate();
		}
		return n;
	}
	if (n.isUnit()) {
		if (n._s < 0) {
			return this.negate();
		}
		return this;
	}
	if (this === n) {
		return this.square();
	}

	var r = (this._d.length >= n._d.length);
	var a = (r ? this : n)._d; // a will be longer than b
	var b = (r ? n : this)._d;
	var al = a.length;
	var bl = b.length;

	var pl = al + bl;
	var partial = new Array(pl);
	var i;
	for (i = 0; i < pl; i++) {
		partial[i] = 0;
	}

	for (i = 0; i < bl; i++) {
		var carry = 0;
		var bi = b[i];
		var jlimit = al + i;
		var digit;
		for (var j = i; j < jlimit; j++) {
			digit = partial[j] + bi * a[j - i] + carry;
			carry = (digit / BigInteger_base) | 0;
			partial[j] = (digit % BigInteger_base) | 0;
		}
		if (carry) {
			digit = partial[j] + carry;
			carry = (digit / BigInteger_base) | 0;
			partial[j] = digit % BigInteger_base;
		}
	}
	return new BigInteger(partial, this._s * n._s, CONSTRUCT);
};

// Multiply a BigInteger by a single-digit native number
// Assumes that this and n are >= 0
// This is not really intended to be used outside the library itself
BigInteger.prototype.multiplySingleDigit = function(n) {
	if (n === 0 || this._s === 0) {
		return ZERO;
	}
	if (n === 1) {
		return this;
	}

	var digit;
	if (this._d.length === 1) {
		digit = this._d[0] * n;
		if (digit >= BigInteger_base) {
			return new BigInteger([(digit % BigInteger_base)|0,
					(digit / BigInteger_base)|0], 1, CONSTRUCT);
		}
		return new BigInteger([digit], 1, CONSTRUCT);
	}

	if (n === 2) {
		return this.add(this);
	}
	if (this.isUnit()) {
		return new BigInteger([n], 1, CONSTRUCT);
	}

	var a = this._d;
	var al = a.length;

	var pl = al + 1;
	var partial = new Array(pl);
	for (var i = 0; i < pl; i++) {
		partial[i] = 0;
	}

	var carry = 0;
	for (var j = 0; j < al; j++) {
		digit = n * a[j] + carry;
		carry = (digit / BigInteger_base) | 0;
		partial[j] = (digit % BigInteger_base) | 0;
	}
	if (carry) {
		partial[j] = carry;
	}

	return new BigInteger(partial, 1, CONSTRUCT);
};

/*
	Function: square
	Multiply a <BigInteger> by itself.

	This is slightly faster than regular multiplication, since it removes the
	duplicated multiplcations.

	Returns:

		> this.multiply(this)

	See Also:
		<multiply>
*/
BigInteger.prototype.square = function() {
	// Normally, squaring a 10-digit number would take 100 multiplications.
	// Of these 10 are unique diagonals, of the remaining 90 (100-10), 45 are repeated.
	// This procedure saves (N*(N-1))/2 multiplications, (e.g., 45 of 100 multiplies).
	// Based on code by Gary Darby, Intellitech Systems Inc., www.DelphiForFun.org

	if (this._s === 0) {
		return ZERO;
	}
	if (this.isUnit()) {
		return ONE;
	}

	var digits = this._d;
	var length = digits.length;
	var imult1 = new Array(length + length + 1);
	var product, carry, k;
	var i;

	// Calculate diagonal
	for (i = 0; i < length; i++) {
		k = i * 2;
		product = digits[i] * digits[i];
		carry = (product / BigInteger_base) | 0;
		imult1[k] = product % BigInteger_base;
		imult1[k + 1] = carry;
	}

	// Calculate repeating part
	for (i = 0; i < length; i++) {
		carry = 0;
		k = i * 2 + 1;
		for (var j = i + 1; j < length; j++, k++) {
			product = digits[j] * digits[i] * 2 + imult1[k] + carry;
			carry = (product / BigInteger_base) | 0;
			imult1[k] = product % BigInteger_base;
		}
		k = length + i;
		var digit = carry + imult1[k];
		carry = (digit / BigInteger_base) | 0;
		imult1[k] = digit % BigInteger_base;
		imult1[k + 1] += carry;
	}

	return new BigInteger(imult1, 1, CONSTRUCT);
};

/*
	Function: quotient
	Divide two <BigIntegers> and truncate towards zero.

	<quotient> throws an exception if *n* is zero.

	Parameters:

		n - The number to divide *this* by. Will be converted to a <BigInteger>.

	Returns:

		The *this* / *n*, truncated to an integer.

	See Also:

		<add>, <subtract>, <multiply>, <divRem>, <remainder>
*/
BigInteger.prototype.quotient = function(n) {
	return this.divRem(n)[0];
};

/*
	Function: divide
	Deprecated synonym for <quotient>.
*/
BigInteger.prototype.divide = BigInteger.prototype.quotient;

/*
	Function: remainder
	Calculate the remainder of two <BigIntegers>.

	<remainder> throws an exception if *n* is zero.

	Parameters:

		n - The remainder after *this* is divided *this* by *n*. Will be
		    converted to a <BigInteger>.

	Returns:

		*this* % *n*.

	See Also:

		<divRem>, <quotient>
*/
BigInteger.prototype.remainder = function(n) {
	return this.divRem(n)[1];
};

/*
	Function: divRem
	Calculate the integer quotient and remainder of two <BigIntegers>.

	<divRem> throws an exception if *n* is zero.

	Parameters:

		n - The number to divide *this* by. Will be converted to a <BigInteger>.

	Returns:

		A two-element array containing the quotient and the remainder.

		> a.divRem(b)

		is exactly equivalent to

		> [a.quotient(b), a.remainder(b)]

		except it is faster, because they are calculated at the same time.

	See Also:

		<quotient>, <remainder>
*/
BigInteger.prototype.divRem = function(n) {
	n = BigInteger(n);
	if (n._s === 0) {
		throw new Error("Divide by zero");
	}
	if (this._s === 0) {
		return [ZERO, ZERO];
	}
	if (n._d.length === 1) {
		return this.divRemSmall(n._s * n._d[0]);
	}

	// Test for easy cases -- |n1| <= |n2|
	switch (this.compareAbs(n)) {
	case 0: // n1 == n2
		return [this._s === n._s ? ONE : M_ONE, ZERO];
	case -1: // |n1| < |n2|
		return [ZERO, this];
	}

	var sign = this._s * n._s;
	var a = n.abs();
	var b_digits = this._d;
	var b_index = b_digits.length;
	var digits = n._d.length;
	var quot = [];
	var guess;

	var part = new BigInteger([], 0, CONSTRUCT);
	part._s = 1;

	while (b_index) {
		part._d.unshift(b_digits[--b_index]);

		if (part.compareAbs(n) < 0) {
			quot.push(0);
			continue;
		}
		if (part._s === 0) {
			guess = 0;
		}
		else {
			var xlen = part._d.length, ylen = a._d.length;
			var highx = part._d[xlen-1]*BigInteger_base + part._d[xlen-2];
			var highy = a._d[ylen-1]*BigInteger_base + a._d[ylen-2];
			if (part._d.length > a._d.length) {
				// The length of part._d can either match a._d length,
				// or exceed it by one.
				highx = (highx+1)*BigInteger_base;
			}
			guess = Math.ceil(highx/highy);
		}
		do {
			var check = a.multiplySingleDigit(guess);
			if (check.compareAbs(part) <= 0) {
				break;
			}
			guess--;
		} while (guess);

		quot.push(guess);
		if (!guess) {
			continue;
		}
		var diff = part.subtract(check);
		part._d = diff._d.slice();
		if (part._d.length === 0) {
			part._s = 0;
		}
	}

	return [new BigInteger(quot.reverse(), sign, CONSTRUCT),
		   new BigInteger(part._d, this._s, CONSTRUCT)];
};

// Throws an exception if n is outside of (-BigInteger.base, -1] or
// [1, BigInteger.base).  It's not necessary to call this, since the
// other division functions will call it if they are able to.
BigInteger.prototype.divRemSmall = function(n) {
	var r;
	n = +n;
	if (n === 0) {
		throw new Error("Divide by zero");
	}

	var n_s = n < 0 ? -1 : 1;
	var sign = this._s * n_s;
	n = Math.abs(n);

	if (n < 1 || n >= BigInteger_base) {
		throw new Error("Argument out of range");
	}

	if (this._s === 0) {
		return [ZERO, ZERO];
	}

	if (n === 1 || n === -1) {
		return [(sign === 1) ? this.abs() : new BigInteger(this._d, sign, CONSTRUCT), ZERO];
	}

	// 2 <= n < BigInteger_base

	// divide a single digit by a single digit
	if (this._d.length === 1) {
		var q = new BigInteger([(this._d[0] / n) | 0], 1, CONSTRUCT);
		r = new BigInteger([(this._d[0] % n) | 0], 1, CONSTRUCT);
		if (sign < 0) {
			q = q.negate();
		}
		if (this._s < 0) {
			r = r.negate();
		}
		return [q, r];
	}

	var digits = this._d.slice();
	var quot = new Array(digits.length);
	var part = 0;
	var diff = 0;
	var i = 0;
	var guess;

	while (digits.length) {
		part = part * BigInteger_base + digits[digits.length - 1];
		if (part < n) {
			quot[i++] = 0;
			digits.pop();
			diff = BigInteger_base * diff + part;
			continue;
		}
		if (part === 0) {
			guess = 0;
		}
		else {
			guess = (part / n) | 0;
		}

		var check = n * guess;
		diff = part - check;
		quot[i++] = guess;
		if (!guess) {
			digits.pop();
			continue;
		}

		digits.pop();
		part = diff;
	}

	r = new BigInteger([diff], 1, CONSTRUCT);
	if (this._s < 0) {
		r = r.negate();
	}
	return [new BigInteger(quot.reverse(), sign, CONSTRUCT), r];
};

/*
	Function: isEven
	Return true iff *this* is divisible by two.

	Note that <BigInteger.ZERO> is even.

	Returns:

		true if *this* is even, false otherwise.

	See Also:

		<isOdd>
*/
BigInteger.prototype.isEven = function() {
	var digits = this._d;
	return this._s === 0 || digits.length === 0 || (digits[0] % 2) === 0;
};

/*
	Function: isOdd
	Return true iff *this* is not divisible by two.

	Returns:

		true if *this* is odd, false otherwise.

	See Also:

		<isEven>
*/
BigInteger.prototype.isOdd = function() {
	return !this.isEven();
};

/*
	Function: sign
	Get the sign of a <BigInteger>.

	Returns:

		* -1 if *this* < 0
		* 0 if *this* == 0
		* +1 if *this* > 0

	See Also:

		<isZero>, <isPositive>, <isNegative>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.sign = function() {
	return this._s;
};

/*
	Function: isPositive
	Return true iff *this* > 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == 1.

	See Also:

		<sign>, <isZero>, <isNegative>, <isUnit>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.isPositive = function() {
	return this._s > 0;
};

/*
	Function: isNegative
	Return true iff *this* < 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == -1.

	See Also:

		<sign>, <isPositive>, <isZero>, <isUnit>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.isNegative = function() {
	return this._s < 0;
};

/*
	Function: isZero
	Return true iff *this* == 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == 0.

	See Also:

		<sign>, <isPositive>, <isNegative>, <isUnit>, <BigInteger.ZERO>
*/
BigInteger.prototype.isZero = function() {
	return this._s === 0;
};

/*
	Function: exp10
	Multiply a <BigInteger> by a power of 10.

	This is equivalent to, but faster than

	> if (n >= 0) {
	>     return this.multiply(BigInteger("1e" + n));
	> }
	> else { // n <= 0
	>     return this.quotient(BigInteger("1e" + -n));
	> }

	Parameters:

		n - The power of 10 to multiply *this* by. *n* is converted to a
		javascipt number and must be no greater than <BigInteger.MAX_EXP>
		(0x7FFFFFFF), or an exception will be thrown.

	Returns:

		*this* * (10 ** *n*), truncated to an integer if necessary.

	See Also:

		<pow>, <multiply>
*/
BigInteger.prototype.exp10 = function(n) {
	n = +n;
	if (n === 0) {
		return this;
	}
	if (Math.abs(n) > Number(MAX_EXP)) {
		throw new Error("exponent too large in BigInteger.exp10");
	}
	if (n > 0) {
		var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);

		for (; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
			k._d.unshift(0);
		}
		if (n == 0)
			return k;
		k._s = 1;
		k = k.multiplySingleDigit(Math.pow(10, n));
		return (this._s < 0 ? k.negate() : k);
	} else if (-n >= this._d.length*BigInteger_base_log10) {
		return ZERO;
	} else {
		var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);

		for (n = -n; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
			k._d.shift();
		}
		return (n == 0) ? k : k.divRemSmall(Math.pow(10, n))[0];
	}
};

/*
	Function: pow
	Raise a <BigInteger> to a power.

	In this implementation, 0**0 is 1.

	Parameters:

		n - The exponent to raise *this* by. *n* must be no greater than
		<BigInteger.MAX_EXP> (0x7FFFFFFF), or an exception will be thrown.

	Returns:

		*this* raised to the *nth* power.

	See Also:

		<modPow>
*/
BigInteger.prototype.pow = function(n) {
	if (this.isUnit()) {
		if (this._s > 0) {
			return this;
		}
		else {
			return BigInteger(n).isOdd() ? this : this.negate();
		}
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return ONE;
	}
	else if (n._s < 0) {
		if (this._s === 0) {
			throw new Error("Divide by zero");
		}
		else {
			return ZERO;
		}
	}
	if (this._s === 0) {
		return ZERO;
	}
	if (n.isUnit()) {
		return this;
	}

	if (n.compareAbs(MAX_EXP) > 0) {
		throw new Error("exponent too large in BigInteger.pow");
	}
	var x = this;
	var aux = ONE;
	var two = BigInteger.small[2];

	while (n.isPositive()) {
		if (n.isOdd()) {
			aux = aux.multiply(x);
			if (n.isUnit()) {
				return aux;
			}
		}
		x = x.square();
		n = n.quotient(two);
	}

	return aux;
};

/*
	Function: modPow
	Raise a <BigInteger> to a power (mod m).

	Because it is reduced by a modulus, <modPow> is not limited by
	<BigInteger.MAX_EXP> like <pow>.

	Parameters:

		exponent - The exponent to raise *this* by. Must be positive.
		modulus - The modulus.

	Returns:

		*this* ^ *exponent* (mod *modulus*).

	See Also:

		<pow>, <mod>
*/
BigInteger.prototype.modPow = function(exponent, modulus) {
	var result = ONE;
	var base = this;

	while (exponent.isPositive()) {
		if (exponent.isOdd()) {
			result = result.multiply(base).remainder(modulus);
		}

		exponent = exponent.quotient(BigInteger.small[2]);
		if (exponent.isPositive()) {
			base = base.square().remainder(modulus);
		}
	}

	return result;
};

/*
	Function: log
	Get the natural logarithm of a <BigInteger> as a native JavaScript number.

	This is equivalent to

	> Math.log(this.toJSValue())

	but handles values outside of the native number range.

	Returns:

		log( *this* )

	See Also:

		<toJSValue>
*/
BigInteger.prototype.log = function() {
	switch (this._s) {
	case 0:	 return -Infinity;
	case -1: return NaN;
	default: // Fall through.
	}

	var l = this._d.length;

	if (l*BigInteger_base_log10 < 30) {
		return Math.log(this.valueOf());
	}

	var N = Math.ceil(30/BigInteger_base_log10);
	var firstNdigits = this._d.slice(l - N);
	return Math.log((new BigInteger(firstNdigits, 1, CONSTRUCT)).valueOf()) + (l - N) * Math.log(BigInteger_base);
};

/*
	Function: valueOf
	Convert a <BigInteger> to a native JavaScript integer.

	This is called automatically by JavaScipt to convert a <BigInteger> to a
	native value.

	Returns:

		> parseInt(this.toString(), 10)

	See Also:

		<toString>, <toJSValue>
*/
BigInteger.prototype.valueOf = function() {
	return parseInt(this.toString(), 10);
};

/*
	Function: toJSValue
	Convert a <BigInteger> to a native JavaScript integer.

	This is the same as valueOf, but more explicitly named.

	Returns:

		> parseInt(this.toString(), 10)

	See Also:

		<toString>, <valueOf>
*/
BigInteger.prototype.toJSValue = function() {
	return parseInt(this.toString(), 10);
};

var MAX_EXP = BigInteger(0x7FFFFFFF);
// Constant: MAX_EXP
// The largest exponent allowed in <pow> and <exp10> (0x7FFFFFFF or 2147483647).
BigInteger.MAX_EXP = MAX_EXP;

(function() {
	function makeUnary(fn) {
		return function(a) {
			return fn.call(BigInteger(a));
		};
	}

	function makeBinary(fn) {
		return function(a, b) {
			return fn.call(BigInteger(a), BigInteger(b));
		};
	}

	function makeTrinary(fn) {
		return function(a, b, c) {
			return fn.call(BigInteger(a), BigInteger(b), BigInteger(c));
		};
	}

	(function() {
		var i, fn;
		var unary = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(",");
		var binary = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(",");
		var trinary = ["modPow"];

		for (i = 0; i < unary.length; i++) {
			fn = unary[i];
			BigInteger[fn] = makeUnary(BigInteger.prototype[fn]);
		}

		for (i = 0; i < binary.length; i++) {
			fn = binary[i];
			BigInteger[fn] = makeBinary(BigInteger.prototype[fn]);
		}

		for (i = 0; i < trinary.length; i++) {
			fn = trinary[i];
			BigInteger[fn] = makeTrinary(BigInteger.prototype[fn]);
		}

		BigInteger.exp10 = function(x, n) {
			return BigInteger(x).exp10(n);
		};
	})();
})();

exports.BigInteger = BigInteger;
})(typeof exports !== 'undefined' ? exports : this);
