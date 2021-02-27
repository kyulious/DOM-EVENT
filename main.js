var frame = document.getElementsByTagName("article")[0];
var num=200;
var result = "";
//총 200개 이미지를 frame 안에 동적으로 생성하는 구문
for(var i=0; i<200; i++){
    result += '<img src="img/pic'+i+'.jpg">';
}

// HTML 요소에 접근해 내용을 바꾸는 것.
frame.innerHTML=result;

var imgs=document.getElementsByTagName("img");
console.log(imgs);

//브라우저에서 마우스 움직일 때 
window.onmousemove = function(e){
    var x = e.pageX; //문서 왼쪽 상단을 기준으로 마우스 위치의 X좌표 값
    var total = window.innerWidth; //window.innerWidth: 창틀을 뺀 안 쪽 전체 가로길이
    var percent = parseInt((x/total)*num); //parseInt : 정수로 바꿔줌
    console.log(percent);
    //마우스 움직일 때 순간적으로 모든 이미지값을 비활성화 시켜 초기화
    for(var i=0; i<num; i++){
        imgs[i].style.display="none";
    }

    //퍼센트 순번에 해당하는 이미지만 찾아서 보이게 활성화
    imgs[percent].style.display="block";
}
