(function() {
    'use strict';

	angular
		.module('assignment.svc', ['util.svc'])
	    .factory('assignmentSvc', assignmentSvc);

		function assignmentSvc(utilSvc) {
			var criteriaObj = {};
			var reviewSliderObj = {};
			var ratingList = {};
			var sortingList = {};

		    var svc = {
		    	getCriteriaObj: getCriteriaObj,
		    	getReviewSliderObj: getReviewSliderObj,
		    	getRatingList: getRatingList,
		    	getSortingList: getSortingList
		    };
		    initialize();
		    return svc;

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Init
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function initialize() {
		    	criteriaObj = setupCriteriaObj();
		    	reviewSliderObj = setupReviewSliderObj();
		    	sortingList = setupSortingList();
		    };

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Criteria
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function setupCriteriaObj() {
		    	return {
                    filter: null,
                    sort: null
                };
		    };

		    function getCriteriaObj() {
		    	return criteriaObj;
		    };

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Review Slider
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function getReviewSliderObj(_data) {
		    	var minLength = utilSvc.getMinMaxValue(_data, 'trustyou.score.overall', 'min');
		    	var maxLength = utilSvc.getMinMaxValue(_data, 'trustyou.score.overall', 'max');
		    	reviewSliderObj = setupReviewSliderObj(minLength, maxLength);
		    	return reviewSliderObj;
		    };

		    function setupReviewSliderObj(_minLength, _maxLength) {
		    	return {
                    min: _minLength,
                    max: _maxLength,
                    options: {
                        floor: _minLength,
                        ceil: _maxLength
                    }
                };
		    }

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Rating
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function getRatingList(_data) {
		    	var minLength = utilSvc.getMinMaxValue(_data, 'rating', 'min');
		    	var maxLength = utilSvc.getMinMaxValue(_data, 'rating', 'max');
		    	ratingList = setupRatingList(minLength, maxLength);
		    	return ratingList;
		    };

		    function setupRatingList(_minLength, _maxLength) {
		    	var list = [];
		    	for(var i = _maxLength; i >= _minLength; i--) {
		    		list.push({
		    			value: i
		    		});
		    	}
		    	return list;
		    };

		    ////////////////////////////////////////////////////////////////////////////////////////
	    	// Sorting
	    	////////////////////////////////////////////////////////////////////////////////////////
		    function setupSortingList() {
		    	return [{
                    key: 'name',
                    reverse: false,
                    name: 'Name',
                    icon: 'glyphicon glyphicon-sort-by-alphabet'
                }, {
                    key: 'name',
                    reverse: true,
                    name: 'Name',
                    icon: 'glyphicon glyphicon-sort-by-alphabet-alt'
                }, {
                    key: 'rating',
                    reverse: false,
                    name: 'Star Rating',
                    icon: 'glyphicon glyphicon-sort-by-attributes'
                }, {
                    key: 'rating',
                    reverse: true,
                    name: 'Star Rating',
                    icon: 'glyphicon glyphicon-sort-by-attributes-alt'
                }, {
                    key: 'imageCount',
                    reverse: false,
                    name: 'Image Count',
                    icon: 'glyphicon glyphicon-sort-by-attributes'
                }, {
                    key: 'imageCount',
                    reverse: true,
                    name: 'Image Count',
                    icon: 'glyphicon glyphicon-sort-by-attributes-alt'
                }];
		    };

		    function getSortingList() {
		    	return sortingList;
		    };
		};
})();