!function(e){"use strict";e.module("tt_angularPage",[]).constant("ngPaginationConfig",{visiblePageCount:10,firstText:"First",lastText:"Last",prevText:"Prev",nextText:"Next",showIfOnePage:!1,showFirstLastText:!0,gotoText:"Goto Page",showGoto:!1}).directive("pager",["ngPaginationConfig",function(t){return{link:function(n,a,g){function i(){var e,t,a;if(n.pagenums=[],0!==n.pageCount)for(n.currentPage>n.pageCount&&(n.currentPage=1),n.pageCount<=o?(e=1,t=n.pageCount):(a=Math.ceil(o/2),e=Math.max(n.currentPage-a,1),t=Math.min(e+o-1,n.pageCount),n.pageCount-t<a&&(e=t-o+1));e<=t;e++)n.pagenums.push(e)}var o=e.isDefined(g.visiblePageCount)?~~g.visiblePageCount||t.visiblePageCount:t.visiblePageCount;n.firstText=e.isDefined(g.firstText)?g.firstText:t.firstText,n.lastText=e.isDefined(g.lastText)?g.lastText:t.lastText,n.prevText=e.isDefined(g.prevText)?g.prevText:t.prevText,n.nextText=e.isDefined(g.nextText)?g.nextText:t.nextText,n.showFirstLastText=e.isDefined(g.showFirstLastText)?g.showFirstLastText:t.showFirstLastText,n.showIfOnePage=e.isDefined(g.showIfOnePage)?g.showIfOnePage:t.showIfOnePage,n.gotoText=e.isDefined(g.gotoText)?g.gotoText:t.gotoText,n.showGoto=e.isDefined(g.showGoto)?g.showGoto:t.showGoto,n.currentPage=1,n.pageChange=function(e){e>=1&&e<=n.pageCount?n.currentPage=e:n.currentPage=1},n.keyupHanlder=function(e){var t=e.target.value,a=parseInt(t,10);if(Number.isNaN(a)){if(!e.preventDefault)return!1;e.preventDefault()}else a>=1&&a<=n.pageCount||(a<1?e.target.value=1:e.target.value=n.pageCount),13===e.keyCode&&(n.currentPage=a)},n.$watch("currentPage",function(e,t){e!==t&&(i(),n.onPageChange())}),n.$watch("pageCount",function(e,t){e&&i()})},replace:!0,restrict:"E",scope:{pageCount:"=",currentPage:"=",onPageChange:"&"},template:'<div class="ng-pagination"><ul ng-if="pageCount>1 || showIfOnePage"><li ng-click="pageChange(1)" ng-if="showFirstLastText">{{firstText}}</li><li ng-click="pageChange(currentPage-1>0?currentPage-1:1)">{{prevText}}</li><li ng-repeat="pagenum in pagenums track by pagenum" ng-click="pageChange(pagenum)" ng-class="{active:currentPage===pagenum}">{{pagenum}}</li><li ng-click="pageChange(currentPage+1<=pageCount?currentPage+1:pageCount)">{{nextText}}</li><li ng-click="pageChange(pageCount)" ng-if="showFirstLastText">{{lastText}}</li></ul><lable ng-if="showGoto">{{gotoText}}<input type="text" ng-keyup="keyupHanlder($event)"></label></div>'}}])}(angular);