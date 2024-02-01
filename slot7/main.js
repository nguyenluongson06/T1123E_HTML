//generate 6 non-duplicated numbers in [a, b] range
//return the resulting array
function generate(){
    var arr = [];
    for (var i = 0; i <= 45; i++){
        arr[i] = i;
    }

    var result = [];
    for (var i = 0; i < 6; i++){
        var index = Math.floor(Math.random() * 46);
        result.push(arr[index]);
        arr.pop(arr[index]);
    }
    return(result);
}

//compare 2 provided array & return the result based on how many duplicates exist b/w 2 arrays
function compare(input, result){
    var duplicate = 0;
    input.forEach(element => {
        if (result.includes(element)) {
            duplicate++;
        }
    });

    return display_result(duplicate);
}

//display result correspondent to the number of duplicates
function display_result(duplicate){
    if (duplicate >= 5){
        return "Bạn đã trúng Jackpot 100.000.000.000VND!"
    } else if (duplicate == 4){
        return "Bạn đã trúng 10.000.000VND!"
    } else if (duplicate == 3){
        return "Bạn đã trúng 100.000VND!"
    } else {
        return "Bạn không trúng thưởng, chúc may mắn lần sau."
    }
}

//get the submit button and attach event listener to it
var button = document.getElementById("btn");
console.log(button);
button.addEventListener("click", function() {

    //get all input items to a HTMLCollection
    var input_list = document.getElementsByClassName("input");
    var input_value = [];

    //get value of each input then push into a list IF the value meets the requirement
    for (let element of input_list) {
        var number = parseInt(element.value);
        if (0 <= number && number <= 45 && !input_value.includes(number)){
            input_value.push(number);
        }
    }

    //if all values does not meet the requirement
    if (input_value.length != 6) {
        //then alert and return
        alert("Số bạn nhập không hợp lệ, vui lòng nhập lại");
        return;
    }

    //generate the result array
    var output_value = generate();
    //get all input.output items to a HTMLCollection
    var output_list = document.getElementsByClassName("output");
    var count = 0;
    //change value of each output item
    for (let element of output_list) {
        element.value = output_value[count];
        count++;
    }
    
    var result_element = document.createElement("p");
    result_element.innerHTML = compare(input_value, output_value);
    var result_container = document.getElementById("result-container");
    result_container.appendChild(result_element);
})