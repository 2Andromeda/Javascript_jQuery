// //데이터 보내기
// var myObj = {
//     "name": "John",
//     "age" : 31,
//     "city" : "New York"
// };
// var myJSON = JSON.stringify(myObj);
// //stringify -> 객체를 텍스트로 변환하는 메서드
// window.location = "demo_json.php?x=" + myJSON;
// //데이터 보내기


//데이터 받기
var myJSON2 = '{"name": "John","age" : 31,"city" : "New York"}';
var myObj2 = JSON.parse(myJSON2); // -> 텍스트를 JavaScript 객체로 변환
//데이터 받기

var text, obj;
localStorage.setItem("testJSON", myJSON2); // 크롬 개발자도구의 Application - Storage - LocalStorage에 보면 나타나 있음
//JSON 데이터 저장하기

text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
//local에 있는 JSON 불러오기

//delete myObj.cars.cars2
//JSON의 cars의 cars2 속성값 지움

var arr = ["John", "피터", "샐리", "지니"];
var myJSON3 = JSON.stringify(arr);