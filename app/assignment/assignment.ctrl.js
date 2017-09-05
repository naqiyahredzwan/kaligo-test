(function() {
    'use strict';

    angular
        .module('assignment.ctrl', ['app.svc', 'assignment.svc'])
        .controller('assignmentCtrl', assignmentCtrl);

        function assignmentCtrl(appSvc, assignmentSvc){
            var controller = initialize(this);
            return controller;

            function initialize(_this) {
                _this.data = appSvc.getData();
                _this.criteria = assignmentSvc.getCriteriaObj();
                _this.ratingList = assignmentSvc.getRatingList(_this.data);
                _this.sortingList = assignmentSvc.getSortingList();
                _this.reviewSliderObj = assignmentSvc.getReviewSliderObj(_this.data);
            }
        };
})();