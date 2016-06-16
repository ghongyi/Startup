!function(a,b){"use strict";var c="0.7.10",d="",e="?",f="function",g="undefined",h="object",i="string",j="major",k="model",l="name",m="type",n="vendor",o="version",p="architecture",q="console",r="mobile",s="tablet",t="smarttv",u="wearable",v="embedded",w={extend:function(a,b){var c={};for(var d in a)b[d]&&b[d].length%2===0?c[d]=b[d].concat(a[d]):c[d]=a[d];return c},has:function(a,b){return"string"==typeof a?-1!==b.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(a){return typeof a===i?a.split(".")[0]:b}},x={rgx:function(){for(var a,c,d,e,i,j,k,l=0,m=arguments;l<m.length&&!j;){var n=m[l],o=m[l+1];if(typeof a===g){a={};for(e in o)o.hasOwnProperty(e)&&(i=o[e],typeof i===h?a[i[0]]=b:a[i]=b)}for(c=d=0;c<n.length&&!j;)if(j=n[c++].exec(this.getUA()))for(e=0;e<o.length;e++)k=j[++d],i=o[e],typeof i===h&&i.length>0?2==i.length?typeof i[1]==f?a[i[0]]=i[1].call(this,k):a[i[0]]=i[1]:3==i.length?typeof i[1]!==f||i[1].exec&&i[1].test?a[i[0]]=k?k.replace(i[1],i[2]):b:a[i[0]]=k?i[1].call(this,k,i[2]):b:4==i.length&&(a[i[0]]=k?i[3].call(this,k.replace(i[1],i[2])):b):a[i]=k?k:b;l+=2}return a},str:function(a,c){for(var d in c)if(typeof c[d]===h&&c[d].length>0){for(var f=0;f<c[d].length;f++)if(w.has(c[d][f],a))return d===e?b:d}else if(w.has(c[d],a))return d===e?b:d;return a}},y={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},z={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[l,o],[/(OPiOS)[\/\s]+([\w\.]+)/i],[[l,"Opera Mini"],o],[/\s(opr)\/([\w\.]+)/i],[[l,"Opera"],o],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[l,o],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[l,"IE"],o],[/(edge)\/((\d+)?[\w\.]+)/i],[l,o],[/(yabrowser)\/([\w\.]+)/i],[[l,"Yandex"],o],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],o],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[l,o],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[l,"UCBrowser"],o],[/(dolfin)\/([\w\.]+)/i],[[l,"Dolphin"],o],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[l,"Chrome"],o],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[o,[l,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[o,[l,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[o,[l,"Facebook"]],[/fxios\/([\w\.-]+)/i],[o,[l,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[o,[l,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[o,l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[l,[o,x.str,y.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[l,o],[/(navigator|netscape)\/([\w\.-]+)/i],[[l,"Netscape"],o],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[l,o]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[p,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[k,n,[m,s]],[/applecoremedia\/[\w\.]+ \((ipad)/],[k,[n,"Apple"],[m,s]],[/(apple\s{0,1}tv)/i],[[k,"Apple TV"],[n,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,k,[m,s]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[k,[n,"Amazon"],[m,s]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[k,x.str,y.device.amazon.model],[n,"Amazon"],[m,r]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[k,n,[m,r]],[/\((ip[honed|\s\w*]+);/i],[k,[n,"Apple"],[m,r]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,k,[m,r]],[/\(bb10;\s(\w+)/i],[k,[n,"BlackBerry"],[m,r]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[k,[n,"Asus"],[m,s]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[k,"Xperia Tablet"],[m,s]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[n,"Sony"],[k,"Xperia Phone"],[m,r]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,k,[m,q]],[/android.+;\s(shield)\sbuild/i],[k,[n,"Nvidia"],[m,q]],[/(playstation\s[34portablevi]+)/i],[k,[n,"Sony"],[m,q]],[/(sprint\s(\w+))/i],[[n,x.str,y.device.sprint.vendor],[k,x.str,y.device.sprint.model],[m,r]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[n,k,[m,s]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|oppo|vivo|coolpad|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[n,[k,/_/g," "],[m,r]],[/(nexus\s9)/i],[k,[n,"HTC"],[m,s]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[k,[n,"Microsoft"],[m,q]],[/(kin\.[onetw]{3})/i],[[k,/\./g," "],[n,"Microsoft"],[m,r]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[k,[n,"Motorola"],[m,r]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[k,[n,"Motorola"],[m,s]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],k,[m,s]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[n,"Samsung"],k,[m,r]],[/(samsung);smarttv/i],[n,k,[m,t]],[/\(dtv[\);].+(aquos)/i],[k,[n,"Sharp"],[m,t]],[/sie-(\w+)*/i],[k,[n,"Siemens"],[m,r]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[n,"Nokia"],k,[m,r]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[k,[n,"Acer"],[m,s]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],k,[m,s]],[/(lg) netcast\.tv/i],[n,k,[m,t]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[k,[n,"LG"],[m,r]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[k,[n,"Lenovo"],[m,s]],[/linux;.+((jolla));/i],[n,k,[m,r]],[/((pebble))app\/[\d\.]+\s/i],[n,k,[m,u]],[/android.+;\s(glass)\s\d/i],[k,[n,"Google"],[m,u]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi .+)\s+build/i],[[k,/_/g," "],[n,"Xiaomi"],[m,r]],[/android.+(mz-[\w]+)\s+.*build/i],[[k,/_/g," "],[n,"Meizu"],[m,r]],[/android.+(moto .+)\s+build/i],[[k,/_/g," "],[n,"Motorola"],[m,r]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[m,w.lowerize],n,k]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[o,[l,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[l,o],[/rv\:([\w\.]+).*(gecko)/i],[o,l]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[l,o],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[l,[o,x.str,y.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[l,"Windows"],[o,x.str,y.os.windows.version]],[/\((bb)(10);/i],[[l,"BlackBerry"],o],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[l,o],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[l,"Symbian"],o],[/\((series40);/i],[l],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[l,"Firefox OS"],o],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[[l,"Linux"],o],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[l,"Chromium OS"],o],[/(sunos)\s?([\w\.]+\d)*/i],[[l,"Solaris"],o],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[l,o],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[l,"iOS"],[o,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[l,"Mac OS"],[o,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[l,o]]},A=function(b,c){if(!(this instanceof A))return new A(b,c).getResult();var e=b||(a&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:d),f=c?w.extend(z,c):z;return this.getBrowser=function(){var a=x.rgx.apply(this,f.browser);return a.major=w.major(a.version),a},this.getCPU=function(){return x.rgx.apply(this,f.cpu)},this.getDevice=function(){return x.rgx.apply(this,f.device)},this.getEngine=function(){return x.rgx.apply(this,f.engine)},this.getOS=function(){return x.rgx.apply(this,f.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(a){return e=a,this},this};A.VERSION=c,A.BROWSER={NAME:l,MAJOR:j,VERSION:o},A.CPU={ARCHITECTURE:p},A.DEVICE={MODEL:k,VENDOR:n,TYPE:m,CONSOLE:q,MOBILE:r,SMARTTV:t,TABLET:s,WEARABLE:u,EMBEDDED:v},A.ENGINE={NAME:l,VERSION:o},A.OS={NAME:l,VERSION:o},typeof exports!==g?(typeof module!==g&&module.exports&&(exports=module.exports=A),exports.UAParser=A):typeof define===f&&define.amd?define("ua-parser-js",[],function(){return A}):a.UAParser=A;var B=a.jQuery||a.Zepto;if(typeof B!==g){var C=new A;B.ua=C.getResult(),B.ua.get=function(){return C.getUA()},B.ua.set=function(a){C.setUA(a);var b=C.getResult();for(var c in b)B.ua[c]=b[c]}}}("object"==typeof window?window:this);


!function(adhoc,document,window,undefined){"use strict";function _get_major_minor(a){if(!a)return"";var b=a.split("."),c="";return b.length>0&&(c+=b[0]),b.length>1&&(c+="."+b[1]),c}var protocol="https:"===window.location.protocol?"https:":"http:",ADHOC_GETFLAGS_URL=protocol+"//experiment.appadhoc.com/get_flags_async",ADHOC_FORCEEXP_URL=protocol+"//experiment.appadhoc.com/force_clients",ADHOC_TRACKING_URL=protocol+"//tracker.appadhoc.com/tracker",JSON=JSON||{},timeout=0,oFlagDef={},getFlagsCallback=null,getFlagsCallbackError=null,getExpsCallback=null,getExpsCallbackError=null,query_started=!1,expCookieName=null,cachedStats=[],noStorage=!1;Date.now=Date.now||function(){return(new Date).getTime()},JSON.stringify=JSON.stringify||function(a){var b=typeof a;if("object"!=b||null===a)return"string"==b&&(a='"'+a+'"'),String(a);var c,d,e=[],f=a&&a.constructor==Array;for(c in a)d=a[c],b=typeof d,"string"==b?d='"'+d+'"':"object"==b&&null!==d&&(d=JSON.stringify(d)),"function"!=b&&e.push((f?"":'"'+c+'":')+String(d));return(f?"[":"{")+String(e)+(f?"]":"}")},JSON.parse=JSON.parse||function(str){return eval("("+str+")")};var getCookie=function(a){for(var b=a+"=",c=decodeURIComponent(document.cookie).split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0===e.indexOf(a))return e.substring(b.length,e.length)}return null},setCookie=function(a,b,c){var d="";if(c)var e=new Date(Date.now()+24*c*60*60*1e3),d="; expires="+e.toUTCString();var f=encodeURIComponent(a)+"="+encodeURIComponent(b)+d+"; path=/";document.cookie=f},getStorageItem=function(a){var b=window.localStorage;return b?b.getItem(a):getCookie(a)},setStorageItem=function(a,b){var c=window.localStorage;c?c.setItem(a,b):setCookie(a,b)},getCachedFlags=function(){return thisAdhoc.cachedFlags||noStorage||_updateCachedFlags(),thisAdhoc.cachedFlags},_updateCachedFlags=function(a){a?setStorageItem("ADHOC_FLAGS",a):a=getStorageItem("ADHOC_FLAGS");var b=a?JSON.parse(a):{};for(var c in b)"_http"==c.substr(0,5)&&"_"==c.substr(c.length-1)&&"string"==typeof b[c]&&(b[c]=decodeURIComponent(b[c]));thisAdhoc.cachedFlags=b},getCachedExperiments=function(){return thisAdhoc.cachedExps||noStorage||_updateCachedExps(),thisAdhoc.cachedExps},getCachedExperiments4Stat=function(){return thisAdhoc.experiments||noStorage||_updateCachedExps(),thisAdhoc.experiments},_updateCachedExps=function(a){a?setStorageItem("ADHOC_EXPERIMENTS",a):a=getStorageItem("ADHOC_EXPERIMENTS");var b=[],c=[];a&&(c=a.split(",")),c.forEach(function(a){var c=a.indexOf(":"),d=a.substr(0,c),e=a.substr(c+1);d&&e&&b.push({id:d,name:e})}),thisAdhoc.cachedExps=b,thisAdhoc.experiments=[],b.forEach(function(a){thisAdhoc.experiments.push(a.id)})},_getsummary=function(){var a=new UAParser,b=a.getResult(),c=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",d="",e="",f=c.indexOf("-");f>0&&(d=c.substr(f+1).toUpperCase(),c=c.substr(0,f),e=c+"_"+d),"iOS"==b.os.name?b.os.name="iPhone OS":"Android"==b.os.name?b.os.name="google_android":"Windows"==b.os.name&&"mobile"!=b.device.type?b.device.type="PC":"Mac OS"==b.os.name&&"mobile"!=b.device.type&&(b.device.type="Mac"),"Mobile Safari"==b.browser.name?b.browser.name="Safari":"IEMobile"==b.browser.name?b.browser.name="IE":"Opera Mini"==b.browser.name&&(b.browser.name="Opera"),thisAdhoc.summary={sdk_api_version:"2.0",sdk_version:"2.1.0",OS:b.os.name||"",os_version:_get_major_minor(b.os.version),os_version_name:b.os.version||"",device_model:b.device.model||navigator.platform||"",country:d,language:c,locale:e,display_height:window.innerHeight||document.documentElement.clientHeight,display_width:window.innerWidth||document.documentElement.clientWidth,device_type:b.device.type||"",device_vendor:b.device.vendor||"",url:window.location.href,referrer:document.referrer,browser:b.browser.name,browser_version:_get_major_minor(b.browser.version),browser_version_name:b.browser.version,browser_engine:b.engine.name||""}},_getexpflags=function(){if(!query_started){var a={app_key:thisAdhoc.ak,client_id:thisAdhoc.c,summary:thisAdhoc.summary,custom:thisAdhoc.customs};query_started=!0,AJAX(ADHOC_GETFLAGS_URL,a,_getflags_handler,_getflags_error_handler)}},_incrementStatArray=function(a,b,c){var d={app_key:thisAdhoc.ak,client_id:thisAdhoc.c,summary:thisAdhoc.summary,custom:thisAdhoc.customs,stats:b};AJAX(ADHOC_TRACKING_URL,d,null,c)},_incrementStat=function(a,b,c,d){var e={key:b,value:c,timestamp:Math.round(Date.now()/1e3),experiment_ids:a},f=[e];_incrementStatArray(a,f,d)},_getflags_error_handler=function(a){"function"==typeof getFlagsCallback&&(getFlagsCallback(oFlagDef,!0),getFlagsCallback=null),"function"==typeof getFlagsCallbackError&&(getFlagsCallbackError(a),getFlagsCallbackError=null),"function"==typeof getExpsCallbackError&&(getExpsCallbackError(a),getExpsCallbackError=null)},_getflags_handler=function(a){query_started=!1;var b=JSON.parse(a);if(b.flags){var c=JSON.parse(a);for(var d in c.flags)"_http"==d.substr(0,5)&&"_"==d.substr(d.length-1)&&"string"==typeof c.flags[d]&&(c.flags[d]=encodeURIComponent(c.flags[d]));_updateCachedFlags(JSON.stringify(c.flags))}var e=[];if(b.experiments){var f="";b.experiments.forEach(function(a){a.name||(a.name=a.id),e.push(a.id),f.length>0&&(f+=","),f+=a.id+":"+a.name}),_updateCachedExps(f),_incrementStat(e,"Event-GET_EXPERIMENT_FLAGS",1,function(a){console.log(a)}),expCookieName&&setCookie(expCookieName,f)}"function"==typeof getFlagsCallback&&(getFlagsCallback(b.flags),getFlagsCallback=null),"function"==typeof getExpsCallback&&(getExpsCallback(e),getExpsCallback=null)},AJAX=function(a,b,c,d){function e(a){if("function"==typeof d)return void d(a,f.status);throw new Error(a)}a=a||"",b=b||{};var f=new XMLHttpRequest;return f.onload=function(){"function"==typeof c&&c(this.responseText)},f.onerror=function(){e(this.responseText)},"withCredentials"in f?(f.open("POST",a,!0),f.setRequestHeader("Content-Type","application/json;charset=UTF-8")):"undefined"!=typeof XDomainRequest&&(f=new XDomainRequest,f.onload=function(){"function"==typeof c&&c(this.responseText)},f.open("POST",a)),b.app_key?(f.timeout=timeout,f.ontimeout=function(){e("timeout")},void f.send(JSON.stringify(b))):void e("Please pass parameters in the init method")},thisAdhoc=adhoc;thisAdhoc.summary={},thisAdhoc.customs={},thisAdhoc.setCustomTagsWithCookies=function(a){for(var b={},c=0;c<a.length;c++)b[c]=getCookie(a[c]),thisAdhoc.customs[a[c]]=b[c]};var _getUrlAllParams=function(){var a=window.location.search,b={};if(-1!=a.indexOf("?"))for(var c,d=a.replace(/^\?/,"").split("&"),e=d.length,f=0;e>f;f++)d[f]&&(c=d[f].split("="),b[c[0]]=c[1]);return b};thisAdhoc.setCustomTagsWithQueryParams=function(a){for(var b=_getUrlAllParams(),c=0;c<a.length;c++){var d=a[c];for(var e in b)e===d&&(thisAdhoc.customs[d]=b[e])}},thisAdhoc.setCustomTagsWithAllQueryParams=function(){var a=window.location.search;if(-1!=a.indexOf("?"))for(var b,c=a.replace(/^\?/,"").split("&"),d=c.length,e=0;d>e;e++)c[e]&&(b=c[e].split("="),thisAdhoc.customs[b[0]]=b[1])},thisAdhoc.setCustomTags=function(a){for(var b in a)thisAdhoc.customs[b]=a[b]},thisAdhoc.setTimeout=function(a){timeout=a},thisAdhoc.setFlagDef=function(a){for(var b in a)oFlagDef[b]=a[b]},thisAdhoc.setSavingExpsToCookie=function(a){expCookieName=a};var _generateClientId=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};thisAdhoc.getClientId=function(){return thisAdhoc.c},thisAdhoc.initSplit=function(a,b){if(!a)throw new Error("Needs an appKey, get it from web console please!");if(!b)throw new Error("Needs an clientId!");thisAdhoc.ak=a,thisAdhoc.c=b,noStorage=!0,_getsummary()},thisAdhoc.init=function(a,b){if(!a)throw new Error("Needs an appKey, get it from web console please!");thisAdhoc.ak=a;var c=getCookie("ADHOC_MEMBERSHIP_CLIENT_ID");(null==c||b&&b!=c)&&(c=b||_generateClientId(),setCookie("ADHOC_MEMBERSHIP_CLIENT_ID",c,365)),thisAdhoc.c=String(c),_getsummary(),_getexpflags()},thisAdhoc.getCachedExperimentFlags=getCachedFlags,thisAdhoc.getExperimentFlags=function(a,b){var c=getCachedFlags();return c&&Object.keys(c).length>0&&"function"==typeof a?void a(c):("function"==typeof a&&(getFlagsCallback=a),"function"==typeof b&&(getFlagsCallbackError=b),void _getexpflags())},thisAdhoc.getExperimentFlagsRemote=function(a,b){getFlagsCallback=function(b,c){"function"==typeof a&&(c&&(b=getCachedFlags()||b),a(b))},"function"==typeof b&&(getFlagsCallbackError=b),_getexpflags()},thisAdhoc.getExperimentFlagsDirect=function(a){var b={app_key:thisAdhoc.ak,client_id:thisAdhoc.c,summary:thisAdhoc.summary,custom:thisAdhoc.customs};AJAX(ADHOC_GETFLAGS_URL,b,function(b){var c=JSON.parse(b);if(c){thisAdhoc.cachedFlags=c.flags;var d=[];c.experiments&&c.experiments.forEach(function(a){a.name||(a.name=a.id),d.push(a.id)}),thisAdhoc.cachedExps=d,a&&a(thisAdhoc.cachedFlags,thisAdhoc.cachedExps)}})},thisAdhoc.getExperiments=function(a,b){var c=getCachedExperiments();return c&&c.length>0&&"function"==typeof a?void a(c):("function"==typeof a&&(getExpsCallback=a),"function"==typeof b&&(getExpsCallbackError=b),void _getexpflags())},thisAdhoc.incrementStat=function(a,b,c){var d=getCachedExperiments4Stat();d&&d.length>0?(cachedStats.length>0&&(cachedStats.forEach(function(a){a.experiment_ids=d}),_incrementStatArray(d,cachedStats,function(){cachedStats=[]})),_incrementStat(d,a,b,c)):cachedStats.push({stat:a,value:b,timestamp:Math.round(Date.now()/1e3)})},thisAdhoc.forceExperiment=function(a,b){var c={client_id:thisAdhoc.c,qr_code:a};AJAX(ADHOC_FORCEEXP_URL,c,null,b)}}(window.adhoc="undefined"!=typeof Object.create?Object.create(null):{},document,window);