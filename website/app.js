let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const fav =  document.getElementById('fav').value;
getAnimal('./fakeAnimalData')
.then(function(data){
  console.log(data)
  postData('./addAnimal',
  {
    animal: data.animal,
    fact: data.fact,
    fav: fav
  }
  )
  updateUI()
})

}
const getAnimal = async (url)=>{
    const res = await fetch(url)
  //const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
  //  console.log("error", error);
  }
};


const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("animalName").innerHTML = allData.animal;
    document.getElementById("animalFact").innerHTML = allData.facts;
    document.getElementById("animalFav").innerHTML = allData.fav;
  } catch (error) {
    console.log("error", error);
  }
};

