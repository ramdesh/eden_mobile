/**
 * Sahana Eden Mobile - Settings Controllers
 *
 * Copyright (c) 2016-2017: Sahana Software Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

// ============================================================================
/**
 * Controller for configuration settings form
 */
EdenMobile.controller("EMSettings", [
    '$scope', 'emConfig', 'emDialogs',
    function($scope, emConfig, emDialogs) {

        emConfig.apply(function(settings) {

            // Copy the current settings into scope
            $scope.settings = settings.copy();

            // Provide an update method
            $scope.update = function() {
                settings.update($scope.settings);
                settings.save();
            };
        });
    }
]);

// ============================================================================
/**
 * Controller to display the "About" section in settings
 */
EdenMobile.controller("EMAbout", [
    '$scope',
    function($scope) {

        var about = {
            version: window.cordova.plugins.version.getAppVersion(),
            vendor: "Sahana Software Foundation"
        };
        $scope.about = about;
    }
]);

// END ========================================================================
