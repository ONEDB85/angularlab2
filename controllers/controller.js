(function() {
    function FormController() {
        
        var vm = this;
        vm.taskList = [];
        vm.addTask = function(task) {
        
            if(task && vm===vm){
            vm.taskList.push(task);
            document.getElementById("addInput").value="";

            // vm.task = "";
        }
            
        };


vm.removeTask = function($index) {
     vm.taskList.splice($index, 1);


    };

}

    angular
        .module("app")
        .controller("FormController", FormController);




})();