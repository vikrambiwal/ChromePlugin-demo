
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.storage.local.get('domains', function (result) {
      var arr = tab.url.split("/");
      arrDomains = result.domains;
      if(isExists(arr[2], arrDomains))
        chrome.tabs.executeScript(tabId, { file: "a.js" });
    });
  }
});

function isExists(value, arr) {
  return arr.some(function(el) {
    return el === value;
  });
}
