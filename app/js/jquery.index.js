"use strict";
( function() {

    $( function() {

        new Preloader();

    } );

    var Preloader = function () {

        //private properties
        var _self = this,
            _window = $( window ),
            _body = $('body');

        //private methods
        var _addEvents = function () {

                _window.on( {
                    load: function(){

                        _showSite();

                    }
                } );

            },
            _init = function () {

                _body[0].preloader = _self;
                _addEvents();

            },
            _showSite = function() {

                setTimeout(function(){
                    $('.site').addClass( 'site_loaded' );
                },500);
            };

        //public properties

        //public methods


        _init();
    };

} )();
