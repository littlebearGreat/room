
(function(){
    // 加载css
    var css1 = '<link rel="stylesheet" href="js/viewer.css"/>',
        css2 = '<link rel="resource" type="application/l10n" href="js/locale/locale.properties"/>';
    document.write(css1);
    document.write(css2);

    // 加载js
    jsFiles = [
        'js/pd.js',
        'js/sw.js'
    ];

    var scriptTags = new Array(jsFiles.length);
    //var host = _getScriptLocation();
    for (var i = 0, len = jsFiles.length; i < len; i++) {
        scriptTags[i] = "<script src='" + gethost() + jsFiles[i] +
            "'></script>";
    }
    if (scriptTags.length > 0) {
        document.write(scriptTags.join(""));
    }
    function gethost() {
        var r = new RegExp("(^|(.*?\\/))(" + 'init.js' + ")(\\?|$)"),
            s = document.getElementsByTagName('script'),
            src, m, l = "";
        for (var i = 0, len = s.length; i < len; i++) {
            src = s[i].getAttribute('src');
            if (src) {
                m = src.match(r);
                if (m) {
                    l = m[1];
                    break;
                }
            }
        }
        return l;
    }
})();

// 可以把需要的css/js脚本放在此脚本中加载，在html中只加载这一个脚本，很简介
// 也可以改成按需加载

