 JavaScript source code
const CovidData = https://api.covidtracking.com 
var States = new Set(['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']);

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


var request = new XMLHttpRequest()

request.open('GET', 'https://covidtracking.com/api/states', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {

    this.state = data.state

    this.positiveIncrease = data.positiveIncrease




  } else {

   // app.appendChild(errorMessage)
  }
}
request.send()

  function COVIDInfo(phrase) {
    this.isState = this.checkState(phrase); 
    if (this.isState) {
      this.abbrState = abbrState(this.State, 'abbr');
    }
   
}

COVIDInfo.checkState = function(phrase){
  var words = phrase.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (States.has(words[i])) {
      this.State = words[i];
      return true;
    }
  }
  return false;
}

function abbrState(input, to) {

  var states = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
  ];

  if (to == 'abbr') {
    input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    for (i = 0; i < states.length; i++) {
      if (states[i][0] == input) {
        return (states[i][1]);
      }
    }
  } else if (to == 'name') {
    input = input.toUpperCase();
    for (i = 0; i < states.length; i++) {
      if (states[i][1] == input) {
        return (states[i][0]);
      }
    }
  }
}

//const app = document.getElementById('root')

//const logo = document.createElement('img')
//logo.src = 'logo.png'

//const container = document.createElement('div')
//container.setAttribute('class', 'container')

//app.appendChild(logo)
//app.appendChild(container)

//var request = new XMLHttpRequest()
//request.open('GET', 'https://api.covidtracking.com/v1/states/ca/current.json', true)
//request.onload = function () {
//  // Begin accessing JSON data here
//  var data = JSON.parse(this.response)
//  if (request.status >= 200 && request.status < 400) {

//      const card = document.createElement('div')
//      card.setAttribute('class', 'card')

//      const h1 = document.createElement('h1')
//      //h1.textContent = movie.title
//      h1.textContent = data.state
//      const p = document.createElement('p')
//     // movie.description = movie.description.substring(0, 300)
//      //p.textContent = `${movie.description}...`
//     // state.deathConfirmed
//    p.textContent = data.positiveIncrease


//      container.appendChild(card)
//      card.appendChild(h1)
//      card.appendChild(p)
   
//  } else {
  
//    app.appendChild(errorMessage)
//  }
//}

//request.send()
