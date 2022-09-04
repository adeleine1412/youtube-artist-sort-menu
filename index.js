// ==UserScript==
// @name         Sort menu for arist channel
// @namespace    https://github.com/adeleine1412
// @version      0.1
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @resource     IMPORT_CSS https://github.com/adeleine1412/
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  waitForKeyElements("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {
    $('#sort-menu').append($.parseHTML('<a class="adeleine-sort-menu"><yt-icon id="label-icon" class="style-scope yt-dropdown-menu"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z" class="style-scope yt-icon"></path></g></svg></yt-icon>Sort by</a>'));
  }

})();