(()=>{async function e(e){let t;return await fetch(e).then(e=>e.text()).then(e=>{t=JSON.parse(e)}),t}chrome.storage.session.setAccessLevel({accessLevel:"TRUSTED_AND_UNTRUSTED_CONTEXTS"}),chrome.runtime?.id&&chrome.runtime.onMessage.addListener(function(t,s,o){let r=t.text.replaceAll(" ","%20");if(console.log("message",t),t.command,"getRequests"===t.command){let s=`https://trending-searches.wb.ru/api?itemsPerPage=10&offset=0&period=month&query=${r}&sort=desc`;console.log("monthRequestURL",s);let o=`https://trending-searches.wb.ru/api?itemsPerPage=10&offset=0&period=week&query=${r}&sort=desc`;console.log("weekRequestURL",o),e(s).then(e=>{let o;console.log("month data",e),e.data.list.forEach(e=>{if(e.text===t.text){o=e.requestCount;return}}),chrome.tabs.query({active:!0,currentWindow:!0},t=>{chrome.tabs.sendMessage(t[0].id,{count:o,msg:"month",url:`monthURL ${s}`,response:e})})}),e(o).then(e=>{let s;console.log("week data",e),e.data.list.forEach(e=>{if(e.text===t.text){s=e.requestCount;return}}),chrome.tabs.query({active:!0,currentWindow:!0},t=>{chrome.tabs.sendMessage(t[0].id,{count:s,msg:"week",url:`weekURL ${o}`,response:e})})})}if("getTopRequests"===t.command){t.text.replaceAll(" ","%20");let s=`https://trending-searches.wb.ru/api?itemsPerPage=100&offset=0&period=month&query=${t.text}&sort=desc`;console.log("topRequestsURL",s),e(s).then(e=>{console.log("top data",e),o(e.data.list)})}return!0})})();
//# sourceMappingURL=background.js.map