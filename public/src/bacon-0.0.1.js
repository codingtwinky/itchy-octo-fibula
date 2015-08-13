
(function() {
  var metaKeyword = '';
  var src = window.location.href;
  var metas = document.getElementsByTagName('meta');
  for (i in metas) {
    console.log(metas[i]);
    if (metas[i].name && metas[i].name.indexOf('keyword') > -1) {
      metaKeyword += metas[i].content;
    }
  }
  
  console.log(metaKeyword, src);
})();
