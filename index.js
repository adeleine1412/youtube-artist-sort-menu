// ==UserScript==
// @name         Sort menu for arist channel
// @namespace    https://github.com/adeleine1412
// @version      0.1
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @resource     IMPORT_CSS https://raw.githubusercontent.com/adeleine1412/youtube-artist-sort-menu/master/css/style.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  waitForKeyElements("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {
    $('#sort-menu').append($.parseHTML('<a class="adeleine-sort-menu"><img src="https://raw.githubusercontent.com/adeleine1412/youtube-artist-sort-menu/master/assets/filter.svg" width="24" height="24"></yt-icon>Sort by</a>'));
  }

})();