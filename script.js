const url = "https://api.api-ninjas.com/v1/quotes?category=fitness";
const headers = { 'X-Api-Key': 'JPMjzIxrUtgBwkKJ1D9yBQ==4zcXRO2clmB8IFqR' };

fetch(url, { headers })
  .then(response => response.json())
  .then(data => {
    const myquote = data[0].quote;

    const boiler_plate = `\n📍Visit us now at - Pankaj Arcade, Opp Rajdhani Enclave Pitampura | GD 23 second floor, Pitampura | U & V Block DDA market Shalimar Bagh | GP 4, first floor, Gopal Mandir Pitampura \n
📞Call us at +91 9811-699-113
✅ Personal training
✅ Open roof Cross-fit
✅ Functional training
✅ Yoga Zumba Bhangra
✅ Aerobics
✅ Certified and Professional Trainers
✅ Air Conditioned Gym
✅ Best Gym Machines
✅ Diet Plan provided by the Certified Nutritionists
#yoga #fitness #meditation #yogapractice #yogainspiration #fitness #gym #workout #fitnessmotivation #fit #motivation #bodybuilding #training #health #love #lifestyle #instagood #fitfam #healthylifestyle #sport #gymlife #gym #gymrat #gymaddict #gymfreak #gymfood #gymislife #gymstyle #gymoutfit #gymnastique #gymbuddy`;

    const final_caption = myquote + "\n" + boiler_plate;

    const outputDiv = document.getElementById("output");
    outputDiv.innerText = final_caption;

    console.log(final_caption);
  })
  .catch(error => console.error(error));

function copyOutput() {
    const output = document.querySelector('#output');
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}