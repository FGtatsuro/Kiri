// ==UserScript==
// @name        (ｷﾘｯ
// @namespace   http://FGtatsuro.com
// @description (ｷﾘｯ
// @version     1
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==
(function() {

  $(function() {
    return $("body").find("*").contents().each(function() {
      var ptn, suffix;
      if (this.nodeType !== 3) return true;
      ptn = /([fF]ix(\b|ed\b))/;
      suffix = '(ｷﾘｯ';
      return $(this)[0].nodeValue = $(this)[0].nodeValue.replace(ptn, function() {
        return RegExp.$1 + suffix;
      });
    });
  });

}).call(this);

