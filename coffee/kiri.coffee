$ ->
  $("body").find("*").contents().each ->
    if (@.nodeType !=3)
      return true
    ptn = /([fF]ix(\b|ed\b))/
    suffix = '(ｷﾘｯ'
    $(@)[0].nodeValue = $(@)[0].nodeValue.replace(ptn, ->
      return RegExp.$1 + suffix)

