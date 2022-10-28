

// const randQuote;
// const quoteAuthor;

document.addEventListener("DOMContentLoaded", () => {
    // const button = document.querySelector("#new-quote")
    // button.addEventListener("click", getQuote());
    getQuote();
    
})

async function getQuote() {
    const resp = await fetch('https://type.fit/api/quotes');
    const parsed = await resp.json();
    // console.log(parsed.length); 
    const singleObj = parsed[Math.floor(Math.random() * (parsed.length - 1))];
    const randQuote = singleObj.text;
    const quoteAuthor = singleObj.author
    // console.log(parsed[0].author);

    // console.log

    document.getElementById('quote').innerText = randQuote;
    document.getElementById('author').innerText = quoteAuthor;

}

// function typingAnimation() {
//   let part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 15,
//   speed = 70;
//   let wordflick = function () {
//     setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     }
//     else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       }
//       else {
//         offset--;
//       }
//     }
//       $('.word').text(part);
//       },speed);
//   }
// }

