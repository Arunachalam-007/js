var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
  $scope.registers = [];
  $scope.register = function () {
    $scope.registers.push({
      name: $scope.txtname,
      aadhar: $scope.txtaadhar,
      dob: $scope.txtdob,
      city: $scope.txtcity,
      dot: $scope.txtdot,
      tot: $scope.txttot,
      result: $scope.txtresult,
      labname: $scope.txtlab,
      rno: $scope.txtreport,
      gender: $scope.txtgender,
    });
  };
});
