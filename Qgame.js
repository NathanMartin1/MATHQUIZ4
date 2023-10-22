function submit() {
number1 = document.getElementById("first_number").value;
number2 = document.getElementById("second_number").value;
actual_answer = parseInt(number1) * parseInt(number2); 
question_number = "<h4>" + number1 + "*" + number2 + "</h4>";
input_box = "<br>Given Answer:<input type='number' id='input_check_box'>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("first_number").innerHTML = "";
document.getElementById("second_number").innerHTML = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
 get_answer = document.getElementById("input_check_box").value;
 if(get_answer == actual_answer) {
    if(answer_turn == "player1") {
        update_player1_score = player1_score + 1;
        document.getElememntById("player1_score").innerHTML = update_player1_score;
    }
    else {
        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
 }
 if(question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "It is " + player2_name + "'s name to pose a question";
 }
else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "It is " + player1_name + "'s name to pose a question";

    }
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "It is " + player2_name + "'s name to answer the question that " + player1_name + "posed.";
     }
    else {
        answer_turn = "player1"
        document.getElementById("player_question").innerHTML = "It is " + player1_name + "'s name to answer the question that " + player2_name + "posed.";
    }
    
        }

 

