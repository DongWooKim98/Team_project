let targetValue;
let targetValue2;
let targetValue3;

$(document).ready(function(){
    function updateValues() {
        targetValue = $("#inputobj").val();
        let percentage = targetValue / 100;

        if (targetValue >= 5 && targetValue <= 9) {
            targetValue2 = 5000;
        } else if (targetValue >= 10 && targetValue <= 14) {
            targetValue2 = 10000; 
        } else if (targetValue > 14) {
            targetValue2 = 15000; 
        } else {
            targetValue2 = ''; // targetValue가 5 미만인 경우 값을 비움
        }
        
        // targetValue3 계산
        targetValue3 = elecUsage - (elecUsage * (targetValue / 100));

        $("#inputobj2").val(targetValue2);
        $("#elecobj").val(targetValue3); // targetValue3 출력
    }

    $("#cbbtn").click(function(){
        updateValues();
    });

    $("#inputobj").keyup(function(event){
        if (event.key === "Enter") {
            updateValues();
        }
    });
});
