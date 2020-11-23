$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    // const dailyInfo = document.querySelector(".text")



    // let textInfo = localStorage.getItem();
    // dailyInfo.textContent = textInfo;

    // let text = dailyInfo.nodeValue;
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        let time = $(this).parent().siblings(".text").attr("id");
        let text = $(this).parent().siblings(".text").val();
        console.log(time, text)


        localStorage.setItem(time, text);

    })
    $("#8").text(localStorage.getItem("8"));
    $("#9").text(localStorage.getItem("9"));
    $("#10").text(localStorage.getItem("10"));
    $("#11").text(localStorage.getItem("11"));
    $("#12").text(localStorage.getItem("12"));
    $("#1").text(localStorage.getItem("1"));
    $("#2").text(localStorage.getItem("2"));
    $("#3").text(localStorage.getItem("3"));
    $("#4").text(localStorage.getItem("4"));
    $("#5").text(localStorage.getItem("5"));



    $(".text").each(function () {
        let currentTime = moment().hour();
        let id = $(this).attr("id")
        console.log(currentTime, id);
    })

});