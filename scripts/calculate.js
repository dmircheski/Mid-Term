let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');
let checkbox = document.getElementById("agreeCheckbox");

calculate = () => {
    if (areBothInputsPopulated()) {
        if (checkbox.checked) {
            let result = Number(num1.value) + Number(num2.value);
            localStorage.setItem("Result", result);
            console.log(result);
        } else {
            alert("You need to check the box");
        }
    } else {
        alert("You must populate both fields");
    }

}

areBothInputsPopulated = () => {
    return num1.value.length && num2.value.length
}