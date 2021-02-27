var frame = document.getElementsByTagName("article")[0];
var num=200;
var result = "";
//총 200개 이미지를 frame 안에 동적으로 생성하는 구문
for(var i=0; i<200; i++){
    result += '<img src="img/pic'+i+'.jpg">';
}
frame.innerHTML=result;

var imgs=document.getElementsByTagName("img");
console.log(imgs);

//브라우저에서 마우스 움직일 때 
window.onmousemove = function(e){
    var x = e.pageX;
    var total = window.innerWidth;
    var percent = parseInt((x/total)*num);
    console.log(percent);
    //마우스 움직일 때 순간적으로 모든 이미지값을 비활성화 시켜 초기화
    for(var i=0; i<num; i++){
        imgs[i].style.display="none";
    }

    //퍼센트 순번에 해당하는 이미지만 찾아서 보이게 활성화
    imgs[percent].style.display="block";
}
