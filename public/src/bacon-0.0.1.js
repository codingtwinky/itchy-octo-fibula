
(function() {
  var metaKeyword = '';
  var baconServerUrl = "http://127.0.0.1";
  var src = window.location.href;
  var metas = document.getElementsByTagName('meta');
  for (i in metas) {
    if (metas[i].name && metas[i].name.indexOf('keyword') > -1) {
      metaKeyword += metas[i].content;
    }
  }
  
  var divs = document.getElementsByClassName('baconLink');
  
  var defaultUrlArgs = "?metaKeyword=" + encodeURIComponent(metaKeyword);
  defaultUrlArgs += "&src=" + encodeURIComponent(src);
  
  for (i in divs) {
    var div = divs[i];
    var args = defaultUrlArgs;
    var width = div.getAttribute('width');gw
    if (width) {
      args += "&width=" + width;
    }
    var height = div.getAttribute('width');
    if (height) {
      args += "&height=" + height;
    }
    var keywords = div.getAttribute('keywords');
    if (keywords) {
      args += "&keywords=" + encodeURIComponent(keywords);
    }
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baconServerUrl + "/getDonationLink" + args, true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        div.innerHTML = xmlhttp.responseText;
      }
    }
  }
})();
