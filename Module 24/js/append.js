//parent node
const mainContainer = document.getElementById('main-conatiner');
// console.log(mainContainer)


//Append palyerSection to the mainCharacter
mainContainer.appendChild(placeSection)

//Create child
const placeSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1')
h1.innerText = "Places I wan to visit"
placeSection.appendChild(h1)

//create Ul

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Vandarvan"
ul.appendChild(li1);
const li2 = document.createElement('li');
li1.innerText = "Vandarvan"
ul.appendChild(li2);
const li3 = document.createElement('li');
li1.innerText = "Vandarvan"
ul.appendChild(li3);

placeSection.appendChild(ul);


//easier to create html
const vooksSection = document.createElement('section')
vooksSection.innerHTML = " <h1> i need to read vook </h1>
<ul>
    <li>sundarvan</li>
    <li>sundarvan</li>
    </ul>
";
mainContainer.appendChild(vooksSection);



