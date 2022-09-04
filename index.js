// ==UserScript==
// @name         Sort menu for arist channel
// @namespace    https://github.com/adeleine1412
// @version      1
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/c/*
// @resource     css https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/css/style.min.css
// @resource     html https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/html/sort-menu.html
// @updateURL    https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @downloadURL  https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(GM_getResourceText("css"));

  runWhenReady("#sort-menu", AppendSortMenu);

  function AppendSortMenu() {
    let sort_menu = document.querySelector('#sort-menu');
    let html = document.createElement('div');
    html.innerHTML = GM_getResourceText("html");
    sort_menu.appendChild(html);
    console.log(html);

    document.querySelector('.adeleine-sort-menu').addEventListener('click', function(e) {
      document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.toggle('active');
    });
    
  }

  function runWhenReady(readySelector, callback) {
    var numAttempts = 0;
    var tryNow = function() {
        var elem = document.querySelector(readySelector);
        if (elem) {
            callback(elem);
        } else {
            numAttempts++;
            if (numAttempts >= 34) {
                console.warn('Giving up after 34 attempts. Could not find: ' + readySelector);
            } else {
                setTimeout(tryNow, 250 * Math.pow(1.1, numAttempts));
            }
        }
    };
    tryNow();
  }

})();