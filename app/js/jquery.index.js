var preloader = null;
(function () {
    'use strict';

    var Preloader = function () {

        //private properties
        var _self = this,
            _window = window,
            _body = document.body;

        //private methods
        var _addEvents = function () {

                _window.onload = function() {

                    _showSite();

                };

            },
            _init = function () {

                _addEvents();

            },
            _addClass = function (elements, className) {

                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    if (element.classList) {
                        element.classList.add(className);
                    } else {
                        element.className += ' ' + className;
                    }
                }

            },
            _showSite = function() {

                setTimeout(function(){

                    _addClass(  document.getElementsByClassName('site'), 'site_loaded' );

                },500);

            };

        //public properties

        //public methods


        _init();
    };



    preloader = new Preloader();


})();