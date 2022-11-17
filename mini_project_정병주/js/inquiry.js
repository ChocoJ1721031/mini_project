// 문의하기 버튼 누르면 팝업

function open_pop() {
    document.getElementById('popup').style.display = "block";
    document.body.style.overflow = "hidden"; //팝업창 뜨면 스크롤 제거
}


// X 버튼 누르면 팝업 닫기
function close_pop() {
    document.getElementById('popup').style.display = "none";
    document.body.style.overflow = "visible"; //팝업 닫으면 다시 스크롤 생성
}