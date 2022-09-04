// ==UserScript==
// @name         Sort menu for arist channel
// @namespace    https://github.com/adeleine1412
// @version      0.1
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @resource     IMPORT_CSS https://raw.githubusercontent.com/adeleine1412/youtube-artist-sort-menu/master/css/style.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  waitForKeyElements("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {
    let sort_menu = document.querySelector('#sort-menu');
    let html = document.createElement('div');
    html.innerHTML = '\
    <a class="adeleine-sort-menu">\
      Sort by\
    </a>\
    '

    if (sort_menu.innerHTML = "") sort_menu.appendChild(html);
  }

})();