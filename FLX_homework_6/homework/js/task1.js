(function equation() {
    var a = prompt("Enter a:");
    var b = prompt("Enter b:");
    var c = prompt("Enter c:");
  
    if(isNaN(Number(a)) || a === 0 || a === ""){
        alert("Invalid input data!");
        return;
    }
    if(isNaN(Number(b)) || b === 0 || b === ""){
        alert("Invalid input data!");
        return;
    }
    if(isNaN(Number(c)) || c === ""){
        alert("Invalid input data!");
        return;
    }
    
    var discr = (b * b) - 4 * (a * c);
    var sqrDiscr = Math.sqrt(discr);
    
    if (discr < 0){
        alert("No solution!");
    } else if (discr === 0){
        var root = (-b) / (2 * a);
        alert("x = " + root);
    } else if (discr > 0) {
        var root1 = (-b + sqrDiscr) / (2 * a);
        var root2 = (-b - sqrDiscr) / (2 * a);
        alert("x" + "\u2081" + " = " + root1 + ", x" + "\u2082" + " = " + root2);
    }
}());