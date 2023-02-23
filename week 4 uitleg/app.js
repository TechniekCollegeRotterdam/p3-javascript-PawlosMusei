// haal het h1 element op en sla het op in een variabel genaamd 'title'

// ALS de tekst van 'title' gelijk is aan 'ÇhatGPT'
  // dan wordt de tekst groen
// ANDERS tekst wordt rood

let title = document.getElementById('title')
console.log(title);
if (title == ChatGPT){
    title.style.color = "green"
    console.log('Text is gelijk');
}
else{
    title.style.color = "red"
    console.log('Text is niet gelijk');
}
