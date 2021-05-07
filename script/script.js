$(function(){

    $("button").click(function(){

        var fileName = $("#fileName").val();
        var idx = fileName.lastIndexOf(".");
        var res = fileName.substring(idx+1);
        // 확장자만 추출한 결과

        /*alert("확장자이름 : " + res);*/

        if (res == "js") {
            alert("전송할 수 없는 파일입니다.");
        } else {
            alert("파일을 전송합니다.");
            location.href="https://www.naver.com?fileName="+fileName;
        }

    });

});
