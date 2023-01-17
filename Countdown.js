    function siteTime(){
        window.setTimeout(function(){siteTime();}, 1000);
        var seconds = 1000;
        var minutes = seconds * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth()+1;
        var todayDate = today.getDate();
        var todayHour = today.getHours();
        var todayMinute = today.getMinutes();
        var todaySecond = today.getSeconds();
        /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
        year - 作为date对象的年份，为4位年份值
        month - 0-11之间的整数，做为date对象的月份
        day - 1-31之间的整数，做为date对象的天数
        hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
        minutes - 0-59之间的整数，做为date对象的分钟数
        seconds - 0-59之间的整数，做为date对象的秒数
        microseconds - 0-999之间的整数，做为date对象的毫秒数 */
        var t1 = Date.UTC(2022,12,20,12,0,0);
        var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
        var diff = t2-t1;
        var diffYears = Math.floor(diff/years);
        var diffDays = Math.floor((diff/days)-diffYears*365);
        var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
        var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
        var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
        if (document.getElementById("sitetime"))
            document.getElementById("sitetime").innerHTML=+diffYears+"年"+diffDays+"天"+diffHours+"时"+diffMinutes+"分钟"+diffSeconds+"秒";
    }
    siteTime();
    
var interval = 1000;
function ShowCountDown_newyear(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
var cc = document.getElementById(divname);
cc.innerHTML = "新年还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}
function ShowCountDown_spring_festival(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
var cc = document.getElementById(divname);
cc.innerHTML = "春节还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}


function ShowCountDown_one_year(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
var cc = document.getElementById(divname);
cc.innerHTML = "二社一周年还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}
function ShowCountDown_christmas(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
var cc = document.getElementById(divname);
cc.innerHTML = "圣诞节还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}


function ShowCountDown_test(year,month,day,divname)
{
var now = new Date();
var endDate = new Date(year, month-1, day);
var leftTime=endDate.getTime()-now.getTime();
var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
var day1=Math.floor(leftsecond/(60*60*24));
var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
var cc = document.getElementById(divname);
cc.innerHTML = "2023中考还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
}

window.setInterval(function(){ShowCountDown_newyear(2024,1,01,'divdown3');}, interval);
window.setInterval(function(){ShowCountDown_one_year(2023,12,21,'divdown2');}, interval);
window.setInterval(function(){ShowCountDown_spring_festival(2023,1,21,'divdown1');}, interval);
window.setInterval(function(){ShowCountDown_christmas(2023,12,25,'divdown4');}, interval);
window.setInterval(function(){ShowCountDown_test(2023,6,15,'divdown5');},interval);
/*
document.body.onclick = function() {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typeset(); 
    setTimeout(function(){
        MathJax.startup.document.state(0);
        MathJax.texReset();
        MathJax.typeset(); 
    },1000);
};
document.body.onchange = function() {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typeset(); 
    setTimeout(function(){
        MathJax.startup.document.state(0);
        MathJax.texReset();
        MathJax.typeset(); 
    },1000);
};*/



