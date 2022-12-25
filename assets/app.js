let url = './assets/data.json';

let jsonData;
$.getJSON(url, function(json){
  jsonData = json;
});


$(".monthly").on("click", function(){
  console.log("monthly was clicked");
  $(".selected")[0].classList.remove("selected");
  $(".monthly")[0].classList.add("selected");
  loadData("monthly");
});

$(".daily").on("click", function(){
  $(".selected")[0].classList.remove("selected");
  $(".daily")[0].classList.add("selected");
  console.log("daily was clicked");
  loadData("daily");
});

$(".weekly").on("click", function(){
  $(".selected")[0].classList.remove("selected");
  $(".weekly")[0].classList.add("selected");
  console.log("weekly was clicked");
  loadData("weekly");
});

function loadData(timeframe)
{
  const cards = document.getElementsByClassName("card");
  let title, data, format;
  for(let i = 0;i<cards.length; i++)
  {
    title = cards[i].getElementsByClassName("activity")[0].innerText;
    data = queryData(title, timeframe);

    console.log(data);

    cards[i].getElementsByClassName("curr")[0].innerText = data.current + "hrs";

    if(timeframe == "daily")
    format = "Day";
    else format = timeframe.substring(0, timeframe.length - 2);

    cards[i].getElementsByClassName("prev")[0].innerText = "Last " + format + " - " + data.previous;
  }
}


function queryData(title, timeframe)
{
  let payload;
  console.log("queryData called");
  jsonData.forEach((element, index)=>{
    if(title == element.title){
      if(timeframe=="monthly")
      payload = element.timeframes.monthly;
      else if(timeframe == "weekly")
      payload = element.timeframes.weekly;
      else
      payload = element.timeframes.daily;
    }
  });
  return payload;
}
