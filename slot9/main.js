const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function checkInput(element){
    var inputNumber = parseInt(element.value);
    if (!((0 <= inputNumber) && (inputNumber <= 99))){
        alert("Số bạn đã nhập không hợp lệ, vui lòng nhập lại");
        return false;
    };
    return true;
}

async function spin(){
    var img = document.getElementById("spin-img");
    var spin_time = 2 + Math.random() * 2;
    var time_elapsed = 0;
    var current_deg = 0;

    while(time_elapsed < spin_time){
        current_deg += 6 + parseInt(Math.random() * 4);
        img.style.transform = `rotate(${current_deg}deg)`;
        await sleep(spin_time/100);
        time_elapsed += spin_time/100;
    }
}

async function start(){
    var check = checkInput(document.getElementById("input"));
    if (!check){
        return;
    }
    await spin();
    var result = parseInt(Math.random() * 99);
    document.getElementById("output").innerText = result;
    if (result == parseInt(document.getElementById("input").value)){
        document.getElementById("result").innerText = "Bạn đã chiến thắng";
    } else {
        document.getElementById("result").innerText = "Chúc may mắn lần sau"
    }
}