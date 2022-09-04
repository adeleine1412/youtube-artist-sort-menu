// ==UserScript==
// @name         Sort menu for arist channel
// @namespace    https://github.com/adeleine1412
// @version      1
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @resource     css https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/css/style.min.css
// @resource     html https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/html/sort-menu.html
// @updateURL    https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @downloadURL  https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(GM_getResourceText("css"));
  waitForKeyElements("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {
    if (document.querySelector('#sort-menu').innerHTML == "") {
      let sort_menu = document.querySelector('#sort-menu');
      let html = document.createElement('div');
      html.innerHTML = GM_getResourceText("html");
      sort_menu.appendChild(html);
      console.log(html);

      document.querySelector('.adeleine-sort-menu').addEventListener('click', function(e) {
        document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.toggle('active');
      });
    }
  }

})();