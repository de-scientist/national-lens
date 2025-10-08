//add DOM elements
const input = document.getElementById("form-name-input");
const btn = document.getElementById("search-button");
const result = document.getElementById("result");


//add an event listener
btn.addEventListener("click", async (ev) => {
  ev.preventDefault()
  const providedName  = input.value;

  if (providedName === "") {
    result.textContent = `Please provide a name`;
    return
  }

})


async function fetchNationality() {
  try {
    const feedback = await fetch (`https://api.nationalize.io/?name=${inputValue}`)

    const data = await feedback.json();
    result.innerHTML= (`<strong>${inputValue}</strong> is from <strong>${country}</strong> with <strong> ${percentage * 100} </strong> certainty`);
    
  } catch (error) {
    
  } finally {

  }
}
  
