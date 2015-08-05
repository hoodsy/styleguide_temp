'use strict';

var UIDesignModule = require('../_index');

/**
 * @name
 * @desc
 * 
 * @ngInject
 */
function UIDesignCtrl (UIDesignRoutes) {
	var vm = this;

	vm.sidebar = UIDesignRoutes;

}

UIDesignModule.controller('UIDesignCtrl', UIDesignCtrl);