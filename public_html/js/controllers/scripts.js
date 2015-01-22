/* 
 * @PeopleController()
 * the people object 
 */
function PeopleController($scope) {
    
    // set some default data just so we have something to look at :)
    $scope.people = [
        {name:"John Doe", email:"jd@hismail.com"},
        {name:"Jane Doe", email:"jd@hermail.com"}
    ];
    
    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
           $scope.people.push({
                name:$scope.newPerson.name,
                email:$scope.newPerson.email
            });
            
            // hide the form after success
            $scope.formVisibiity = false;
        } else {
            // show, if needs be, the form after error
            $scope.formVisibiity = true;
        }
    };
    
    // Show the form 
    $scope.ShowForm = function() {
        $scope.formVisibility = true;
    };
}