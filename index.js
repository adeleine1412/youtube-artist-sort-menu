// ==UserScript==
// @name         Sort menu for arist channels on YouTube
// @namespace    https://github.com/adeleine1412
// @version      1.6
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @license      MIT
// @resource     css https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/css/style.min.css
// @resource     html https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/html/sort-menu.html
// @updateURL    https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @downloadURL  https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://greasyfork.org/scripts/383527-wait-for-key-elements/code/Wait_for_key_elements.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // load latest styles from the github repo
  GM_addStyle(GM_getResourceText("css"));

  // use waitForKeyElements to wait for element to be loaded, works (mostly) with ajax too
  waitForKeyElements("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {

    // skip if it has the default sort-menu (non-artist channels)
    if (document.querySelector('#sort-menu').innerHTML == "") {

      // create new element and append html code from the github rebo
      let sort_menu = document.querySelector('#sort-menu');
      let html = document.createElement('div');
      html.innerHTML = GM_getResourceText("html");
      sort_menu.appendChild(html);

      // click event to hide dropdown when clicking outside of it
      window.addEventListener('click', function(e) {
        document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.remove('active');
      });

      // show the dropdown and stop propagation to the event above
      document.querySelector('.adeleine-sort-menu').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.toggle('active');
      });
    }

  }

  // fallback update for very specific ajax behaviour
  setInterval(function() {
    if (document.querySelector('#sort-menu') != null) AppendSortMenu();
  }, 1000);
 

})();