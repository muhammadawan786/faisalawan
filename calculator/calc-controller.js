function Calculator($scope) {    
    $scope.operators = ['+', '-', '*', '/','^','√'];
    $scope.selectedOperator = $scope.operators[0];
    $scope.result="0";
	$scope.firstNumber="0";
	$scope.secondNumber="0";
	$scope.newNumber=true;
	$scope.pendingOperation=false;
	$scope.pendingExpression="0";
	
    $scope.calculate = function() {
        var A = parseFloat($scope.firstNumber);
        var B = parseFloat($scope.secondNumber);
        var C = 0;
    
        switch ($scope.selectedOperator) {
            case '+':
                C = A + B;
                break;
            case '-':
                C = A - B;
                break;
            case '*':
                C = A * B;
                break;
            case '/':
                C = A / B;
                break;
             case '^':
                C=A*A;
                 break;
				case '√':
                 C=Math.sqrt(A);
                 break;				 
        }
        $scope.result = C;
		
    };
	$scope.updateOperator= function(btn) {
	$scope.selectedOperator=btn;
	};
	
	$scope.updateOutput = function (btn) {
        
		 if(btn!=="+" && btn!=="-" && btn!=="*" && btn!=="/" && btn!=="^" &&btn!=="√" && $scope.pendingOperation!=true )
		 {
		if ($scope.firstNumber == "0" || $scope.newNumber) { 
			$scope.firstNumber= btn;
            $scope.newNumber = false;
        } else {
            $scope.firstNumber += String(btn);
        }
		 }
		 else 
	     {if($scope.pendingOperation!=true){   
	 $scope.updateOperator(btn);
			  $scope.pendingOperation=true;
		 
		  if(btn==="^" || btn==="√")
			 {
		 $scope.secondNumber=$scope.firstNumber;
			 return;
		 }}
			 else if ($scope.secondNumber == "0" || $scope.newNumber) { 
			$scope.secondNumber= btn;
            $scope.newNumber = false;
        } else {
            $scope.secondNumber += String(btn);
			 }
			 
		 }
        
    };
	$scope.clear = function () {
    $scope.selectedOperator = $scope.operators[0];
    $scope.output="0";
	$scope.firstNumber="0";
	$scope.secondNumber="0";
	$scope.newNumber=true;
	$scope.pendingOperation=false;
	$scope.result ="0";
	$scope.pendingExpression="0";
	
	
    };
}