(()=>{document.getElementById("modalLinkGroupFrazesCPM").addEventListener("click",()=>(chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){let n=e[0].url;console.log("url",n,n.indexOf("cmp.wildberries.ru")),chrome.tabs.sendMessage(e[0].id,{type:"FROM_POPUP",command:"modalLinkGroupFrazesCPM"})}),console.log("modalLinkGroupFrazesCPM click"),!1)),document.getElementById("link_wordstat").addEventListener("click",()=>(chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){let n=e[0].url;console.log("url",n,n.indexOf("cmp.wildberries.ru")),chrome.tabs.sendMessage(e[0].id,{type:"FROM_POPUP",command:"modalLinkWordstat"})}),!1)),document.getElementById("link_checkwh").addEventListener("click",()=>(chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){console.log("popup click link_checkwh"),chrome.tabs.sendMessage(e[0].id,{type:"FROM_POPUP",command:"modalLinkChechWH"})}),!1)),document.getElementById("modalLinkExtendAdvertfrazes").addEventListener("click",()=>(chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){console.log("popup click modalLinkExtendAdvertfrazes"),chrome.tabs.sendMessage(e[0].id,{type:"FROM_POPUP",command:"modalLinkExtendAdvertfrazes"})}),!1)),document.getElementById("link_apikey").addEventListener("click",()=>(chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){console.log("popup click link_apikey"),chrome.tabs.sendMessage(e[0].id,{type:"FROM_POPUP",command:"modalLinkApiKey"})}),!1));let e=chrome.runtime.getManifest();document.getElementById("manifVID").innerHTML=e.version,chrome.tabs.query({active:!0,lastFocusedWindow:!0},function(e){let n=e[0].url;console.log("url",n,n.indexOf("cmp.wildberries.ru")),n.indexOf("cmp.wildberries.ru")>=0?document.getElementById("erorr_url_group_cpm").style.display="none":document.getElementById("erorr_url_group_cpm").style.display="block"}),console.log("manif",e),document.addEventListener("DOMContentLoaded",()=>{chrome.storage.sync.get({enable_plugin:!0,enable_fix:!0},e=>{console.log("restoreOptions",e),document.getElementById("enable_plugin").checked=e.enable_plugin,document.getElementById("enable_fix_phrase").checked=e.enable_fix})}),document.getElementById("save").addEventListener("click",()=>{let e=document.getElementById("enable_plugin").checked,n=document.getElementById("enable_fix_phrase").checked;chrome.storage.sync.set({enable_plugin:e,enable_fix:n},()=>{let e=document.getElementById("status");e.textContent="Настройки сохранены",setTimeout(()=>{e.textContent=""},750)})}),document.getElementById("link_enable_fix").addEventListener("click",()=>{document.getElementById("fix_enable_block").style.display="block"})})();
//# sourceMappingURL=popup.js.map
