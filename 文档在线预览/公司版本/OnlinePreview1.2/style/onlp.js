// pf.js中需要用到的路径
var pdfWorkerSrc = '';
// js css dom加载
(function(){
    // 获取js所在的路径
    function getMySrc(){
        var scriptArray = document.getElementsByTagName('script');
        var scriptSrc = scriptArray[scriptArray.length -1].src;
        var jsName = scriptSrc.split('/')[scriptSrc.split('/').length-1];
        return scriptSrc.replace(jsName,'');
    };
    pdfWorkerSrc = getMySrc();

    // 加载css
    var css1 = '<link rel="stylesheet" href="' + getMySrc() + 'pdf/viewer.css"/>',
        css2 = '<link rel="resource" type="application/l10n" href="' + getMySrc() + 'pdf/locale/locale.properties"/>';
    document.write(css1);
    document.write(css2);

    // 加载js
    jsFiles = [
        'pdf/pd.js',
        'flex/flexpaper_handlers.js',
        'flex/flexpaper.js'
    ];

    var scriptTags = new Array(jsFiles.length);
    //var host = _getScriptLocation();
    for (var i = 0, len = jsFiles.length; i < len; i++) {
        scriptTags[i] = "<script src='" + getMySrc() + jsFiles[i] +
            "'></script>";
    }
    // if (scriptTags.length > 0) {
    //     document.write(scriptTags.join(""));
    // };

    // dom  pdf.js   flexpaper
    var pdstr = '<div id="pdfH" style="height: 100%;" tabindex="1" class="loadingInProgress"><div id="outerContainer" >'
        + '<div id="sidebarContainer"><div id="toolbarSidebar"><div class="splitToolbarButton toggled"><button id="viewThumbnail" class="toolbarButton group toggled" title="Show Thumbnails" tabindex="2" data-l10n-id="thumbs"><span data-l10n-id="thumbs_label">Thumbnails</span></button><button id="viewOutline" class="toolbarButton group" title="Show Document Outline" tabindex="3" data-l10n-id="outline"><span data-l10n-id="outline_label">Document Outline</span></button><button id="viewAttachments" class="toolbarButton group" title="Show Attachments" tabindex="4" data-l10n-id="attachments"><span data-l10n-id="attachments_label">Attachments</span></button></div></div>'
        + '<div id="sidebarContent"><div id="thumbnailView"></div><div id="outlineView" class="hidden"></div><div id="attachmentsView" class="hidden"></div></div></div>  <!-- sidebarContainer -->'
        + '<div id="mainContainer"><div class="findbar hidden doorHanger hiddenSmallView" id="findbar"><label for="findInput" class="toolbarLabel" data-l10n-id="find_label">Find:</label><input id="findInput" class="toolbarField" tabindex="91"><div class="splitToolbarButton"><button class="toolbarButton findPrevious" title="" id="findPrevious" tabindex="92" data-l10n-id="find_previous"><span data-l10n-id="find_previous_label">Previous</span></button>'
        + '<div class="splitToolbarButtonSeparator"></div><button class="toolbarButton findNext" title="" id="findNext" tabindex="93" data-l10n-id="find_next"><span data-l10n-id="find_next_label">Next</span></button></div><input type="checkbox" id="findHighlightAll" class="toolbarField"><label for="findHighlightAll" class="toolbarLabel" tabindex="94" data-l10n-id="find_highlight">Highlight all</label><input type="checkbox" id="findMatchCase" class="toolbarField"><label for="findMatchCase" class="toolbarLabel" tabindex="95" data-l10n-id="find_match_case_label">Match case</label><span id="findMsg" class="toolbarLabel"></span></div>  <!-- findbar -->'
        + '<div id="secondaryToolbar" class="secondaryToolbar hidden doorHangerRight"><div id="secondaryToolbarButtonContainer"><button id="secondaryPresentationMode" class="secondaryToolbarButton presentationMode visibleLargeView" title="Switch to Presentation Mode" tabindex="51" data-l10n-id="presentation_mode"><span data-l10n-id="presentation_mode_label">Presentation Mode</span></button>'
        + '<button id="secondaryOpenFile" class="secondaryToolbarButton openFile visibleLargeView" title="Open File" tabindex="52" data-l10n-id="open_file"><span data-l10n-id="open_file_label">Open</span></button><button id="secondaryPrint" class="secondaryToolbarButton print visibleMediumView" title="Print" tabindex="53" data-l10n-id="print"><span data-l10n-id="print_label">Print</span></button><button id="secondaryDownload" class="secondaryToolbarButton download visibleMediumView" title="Download" tabindex="54" data-l10n-id="download"><span data-l10n-id="download_label">Download</span></button>'
        + '<a href="#" id="secondaryViewBookmark" class="secondaryToolbarButton bookmark visibleSmallView" title="Current view (copy or open in new window)" tabindex="55" data-l10n-id="bookmark"><span data-l10n-id="bookmark_label">Current View</span></a><div class="horizontalToolbarSeparator visibleLargeView"></div>'
        + '<button id="firstPage" class="secondaryToolbarButton firstPage" title="Go to First Page" tabindex="56" data-l10n-id="first_page"><span data-l10n-id="first_page_label">Go to First Page</span></button><button id="lastPage" class="secondaryToolbarButton lastPage" title="Go to Last Page" tabindex="57" data-l10n-id="last_page"><span data-l10n-id="last_page_label">Go to Last Page</span></button>'
        + '<div class="horizontalToolbarSeparator"></div><button id="pageRotateCw" class="secondaryToolbarButton rotateCw" title="Rotate Clockwise" tabindex="58" data-l10n-id="page_rotate_cw"><span data-l10n-id="page_rotate_cw_label">Rotate Clockwise</span></button><button id="pageRotateCcw" class="secondaryToolbarButton rotateCcw" title="Rotate Counterclockwise" tabindex="59" data-l10n-id="page_rotate_ccw"><span data-l10n-id="page_rotate_ccw_label">Rotate Counterclockwise</span></button>'
        + '<div class="horizontalToolbarSeparator"></div><button id="toggleHandTool" class="secondaryToolbarButton handTool" title="Enable hand tool" tabindex="60" data-l10n-id="hand_tool_enable"><span data-l10n-id="hand_tool_enable_label">Enable hand tool</span></button><div class="horizontalToolbarSeparator"></div>'
        + '<button id="documentProperties" class="secondaryToolbarButton documentProperties" title="Document Properties¡­" tabindex="61" data-l10n-id="document_properties"><span data-l10n-id="document_properties_label">Document Properties¡­</span></button></div></div>  <!-- secondaryToolbar -->'
        + '<div class="toolbar"><div id="toolbarContainer"><div id="toolbarViewer"><div id="toolbarViewerLeft"><button id="sidebarToggle" class="toolbarButton" title="Toggle Sidebar" tabindex="11" data-l10n-id="toggle_sidebar"><span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span></button>'
        + '<div class="toolbarButtonSpacer"></div><button id="viewFind" class="toolbarButton group hiddenSmallView" title="Find in Document" tabindex="12" data-l10n-id="findbar"><span data-l10n-id="findbar_label">Find</span></button><div class="splitToolbarButton"><button class="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="13" data-l10n-id="previous"><span data-l10n-id="previous_label">Previous</span></button><div class="splitToolbarButtonSeparator"></div><button class="toolbarButton pageDown" title="Next Page" id="next" tabindex="14" data-l10n-id="next"><span data-l10n-id="next_label">Next</span></button></div>'
        + '<label id="pageNumberLabel" class="toolbarLabel" for="pageNumber" data-l10n-id="page_label">Page: </label><input type="number" id="pageNumber" class="toolbarField pageNumber" value="1" size="4" min="1" tabindex="15"><span id="numPages" class="toolbarLabel"></span></div>'
        + '<div id="toolbarViewerRight"><button id="presentationMode" class="toolbarButton presentationMode hiddenLargeView" title="Switch to Presentation Mode" tabindex="31" data-l10n-id="presentation_mode"><span data-l10n-id="presentation_mode_label">Presentation Mode</span></button>'
        + '<button id="openFile" class="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="32" data-l10n-id="open_file"><span data-l10n-id="open_file_label">Open</span></button><button id="print" class="toolbarButton print hiddenMediumView" title="Print" tabindex="33" data-l10n-id="print"><span data-l10n-id="print_label">Print</span></button><button id="download" class="toolbarButton download hiddenMediumView" title="Download" tabindex="34" data-l10n-id="download"><span data-l10n-id="download_label">Download</span></button>'
        + '<!-- <div class="toolbarButtonSpacer"></div> --><a href="#" id="viewBookmark" class="toolbarButton bookmark hiddenSmallView" title="Current view (copy or open in new window)" tabindex="35" data-l10n-id="bookmark"><span data-l10n-id="bookmark_label">Current View</span></a><div class="verticalToolbarSeparator hiddenSmallView"></div><button id="secondaryToolbarToggle" class="toolbarButton" title="Tools" tabindex="36" data-l10n-id="tools"><span data-l10n-id="tools_label">Tools</span></button> </div>'
        + '<div class="outerCenter"><div class="innerCenter" id="toolbarViewerMiddle"><div class="splitToolbarButton"><button id="zoomOut" class="toolbarButton zoomOut" title="Zoom Out" tabindex="21" data-l10n-id="zoom_out"><span data-l10n-id="zoom_out_label">Zoom Out</span></button><div class="splitToolbarButtonSeparator"></div><button id="zoomIn" class="toolbarButton zoomIn" title="Zoom In" tabindex="22" data-l10n-id="zoom_in"><span data-l10n-id="zoom_in_label">Zoom In</span></button></div>'
        + '<span id="scaleSelectContainer" class="dropdownToolbarButton"><select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom"><option id="pageAutoOption" title="" value="auto" selected="selected" data-l10n-id="page_scale_auto">Automatic Zoom</option><option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option><option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Fit Page</option><option id="pageWidthOption" title="" value="page-width" data-l10n-id="page_scale_width">Full Width</option><option id="customScaleOption" title="" value="custom"></option><option title="" value="0.5">50%</option><option title="" value="0.75">75%</option><option title="" value="1">100%</option><option title="" value="1.25">125%</option><option title="" value="1.5">150%</option><option title="" value="2">200%</option><option title="" value="3">300%</option><option title="" value="4">400%</option></select></span>'
        + '</div></div></div><div id="loadingBar"><div class="progress"><div class="glimmer"></div></div></div></div></div>'
        + '<menu type="context" id="viewerContextMenu"><menuitem id="contextFirstPage" label="First Page"data-l10n-id="first_page"></menuitem><menuitem id="contextLastPage" label="Last Page"data-l10n-id="last_page"></menuitem><menuitem id="contextPageRotateCw" label="Rotate Clockwise"data-l10n-id="page_rotate_cw"></menuitem><menuitem id="contextPageRotateCcw" label="Rotate Counter-Clockwise"data-l10n-id="page_rotate_ccw"></menuitem></menu>'
        + '<div id="viewerContainer" tabindex="0"><div id="viewer"></div></div><div id="errorWrapper" hidden="true"><div id="errorMessageLeft"><span id="errorMessage"></span><button id="errorShowMore" data-l10n-id="error_more_info">More Information</button><button id="errorShowLess" data-l10n-id="error_less_info" hidden="true">Less Information</button></div>'
        + '<div id="errorMessageRight"><button id="errorClose" data-l10n-id="error_close">Close</button></div><div class="clearBoth"></div><textarea id="errorMoreInfo" hidden="true" readonly="readonly"></textarea></div></div> <!-- mainContainer -->'
        + '<div id="overlayContainer" class="hidden"><div id="passwordOverlay" class="container hidden"><div class="dialog"><div class="row"><p id="passwordText" data-l10n-id="password_label">Enter the password to open this PDF file:</p></div><div class="row"><input type="password" id="password" class="toolbarField" /></div><div class="buttonRow"><button id="passwordCancel" class="overlayButton"><span data-l10n-id="password_cancel">Cancel</span></button><button id="passwordSubmit" class="overlayButton"><span data-l10n-id="password_ok">OK</span></button></div></div></div>'
        + '<div id="documentPropertiesOverlay" class="container hidden"><div class="dialog"><div class="row"><span data-l10n-id="document_properties_file_name">File name:</span> <p id="fileNameField">-</p></div><div class="row"><span data-l10n-id="document_properties_file_size">File size:</span> <p id="fileSizeField">-</p></div><div class="separator"></div><div class="row"><span data-l10n-id="document_properties_title">Title:</span> <p id="titleField">-</p></div>'
        + '<div class="row"><span data-l10n-id="document_properties_author">Author:</span> <p id="authorField">-</p></div><div class="row"><span data-l10n-id="document_properties_subject">Subject:</span> <p id="subjectField">-</p></div><div class="row"><span data-l10n-id="document_properties_keywords">Keywords:</span> <p id="keywordsField">-</p></div><div class="row"><span data-l10n-id="document_properties_creation_date">Creation Date:</span> <p id="creationDateField">-</p></div><div class="row"><span data-l10n-id="document_properties_modification_date">Modification Date:</span> <p id="modificationDateField">-</p></div>'
        + '<div class="row"><span data-l10n-id="document_properties_creator">Creator:</span> <p id="creatorField">-</p></div><div class="separator"></div><div class="row"><span data-l10n-id="document_properties_producer">PDF Producer:</span> <p id="producerField">-</p></div><div class="row"><span data-l10n-id="document_properties_version">PDF Version:</span> <p id="versionField">-</p></div><div class="row"><span data-l10n-id="document_properties_page_count">Page Count:</span> <p id="pageCountField">-</p></div><div class="buttonRow"><button id="documentPropertiesClose" class="overlayButton"><span data-l10n-id="document_properties_close">Close</span></button></div></div></div></div>  <!-- overlayContainer -->'
        + '</div> <!-- outerContainer --><div id="printContainer"></div><div id="mozPrintCallback-shim" hidden><style scoped>'
        + '#mozPrintCallback-shim {position: fixed;top: 0;left: 0;height: 100%;width: 100%;z-index: 9999999;display: block;text-align: center;background-color: rgba(0, 0, 0, 0.5);}'
        + '#mozPrintCallback-shim[hidden] {display: none;}'
        + '@media print {#mozPrintCallback-shim {display: none;}}'
        + '#mozPrintCallback-shim .mozPrintCallback-dialog-box {display: inline-block;margin: -50px auto 0;position: relative;top: 45%;left: 0;min-width: 220px;max-width: 400px;padding: 9px;border: 1px solid hsla(0, 0%, 0%, .5);border-radius: 2px;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);background-color: #474747;color: hsl(0, 0%, 85%);font-size: 16px;line-height: 20px;}'
        + '#mozPrintCallback-shim .progress-row {clear: both;padding: 1em 0;}'
        + '#mozPrintCallback-shim progress {width: 100%;}'
        + '#mozPrintCallback-shim .relative-progress {clear: both;float: right;}'
        + '#mozPrintCallback-shim .progress-actions {clear: both;}</style>'
        + '<div class="mozPrintCallback-dialog-box"><!-- TODO: Localise the following strings -->Preparing document for printing...<div class="progress-row"><progress value="0" max="100"></progress><span class="relative-progress">0%</span></div><div class="progress-actions"><input type="button" value="Cancel" class="mozPrintCallback-cancel"></div></div></div></div>';

    var swstr = '<p class="flashSign1" style="position:absolute;left:0;top:0;width:100%;font-size:16px;line-height:100px;text-align:center;display:none;">flash版本需要大于10.x，请<a style="font-size:20px;color:blue;" href="https://get2.adobe.com/cn/flashplayer/">点击此处</a>升级您的flash</p>'
                +'<p class="flashSign2" style="position:absolute;left:0;top:0;width:100%;font-size:16px;line-height:100px;text-align:center;display:none;">您的电脑没有安装flash，请<a style="font-size:20px;color:blue;" href="https://get2.adobe.com/cn/flashplayer/">点击此处</a>安装flash</p>'
                +'<div id="index-play" style="height:100%;"></div>';

    // 检测flash方法
    function checkflashversion(){
        win = window;
        doc = document;
        nav = navigator;
        UNDEF = "undefined";
        OBJECT = "object";
        SHOCKWAVE_FLASH = "Shockwave Flash";
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash";
        FLASH_MIME_TYPE = "application/x-shockwave-flash";
        EXPRESS_INSTALL_ID = "SWFObjectExprInst";
        ON_READY_STATE_CHANGE = "onreadystatechange";
        var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
            u = nav.userAgent.toLowerCase(),
            p = nav.platform.toLowerCase(),
            windows = p ? /win/.test(p) : /win/.test(u),
            mac = p ? /mac/.test(p) : /mac/.test(u),
            webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
            ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
            playerVersion = [0,0,0],
            d = null;
        if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
                plugin = true;
                ie = false; // cascaded feature detection for Internet Explorer
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
                playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
            }
        }
        else if (typeof win.ActiveXObject != UNDEF) {
            try {
                var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                if (a) { // a will return null when ActiveX is disabled
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true; // cascaded feature detection for Internet Explorer
                        d = d.split(" ")[1].split(",");
                        playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                    }
                }
            }
            catch(e) {}
        }
        return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
    }
    if (window.applicationCache) {
        // 支持H5
        $('.previewBox').html(pdstr);
        document.write(scriptTags[0]);
    }else{
        // 不支持H5
        $('.previewBox').html(swstr);

        // 检测flash
        var fls1=checkflashversion();
        var s="";
        if(fls1.pv[0]!=0){
            if (fls1.pv[0] > 10) {
                // 加载flexPaper需要的js
                document.write(scriptTags[1]);
                document.write(scriptTags[2]);
            }else{
                $('#previewBox').css('position','relative');
                $('#index-play').siblings('.flashSign1').show();
            }
        }else{
            $('#previewBox').css('position','relative');
            $('#index-play').siblings('.flashSign2').show();
        }
    }

})();

(function(window){
    var onlp = new Object();

    // 文档路径
    onlp.documentPath = function(pdfSrc,swfSrc){
        if (window.applicationCache) {
            // 支持H5
            DEFAULT_URL = pdfSrc;
        } else {
            // 不支持H5
            // flashvars.SwfFile = escape(swfSrc);
            function setURL(ur){
                $('#index-play').FlexPaperViewer({
                    config :{
                        SWFFile : ur
                    }
                });
            };
            setURL(swfSrc);
        }
    };

    window.onlp = onlp;
})(window)


// 仅仅加了个判断flash的方法，回家测试
