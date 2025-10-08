//add DOM elements
const input = document.getElementById("form-name-input");
const btn = document.getElementById("search-button");
const result = document.getElementById("result");

//add an event listener
btn.addEventListener("click", async (ev) => {
  ev.preventDefault();
  const inputValue = input.value;

  if (inputValue === "") {
    result.textContent = `Please provide a name`;
    return;
  }

  btn.disabled = true; // Disable button while fetching
  await fetchNationality(inputValue);
});

// Fetch nationality and display results
async function fetchNationality(inputValue) {
  try {
    const feedback = await fetch(`https://api.nationalize.io/?name=${inputValue}`);
    const data = await feedback.json();

    
    if (data.country && data.country.length > 0) {
      // Get the top country prediction
      const topCountry = data.country[0];
      const country = topCountry.country_id;
      const percentage = (topCountry.probability * 100).toFixed(2);

      result.innerHTML = `<strong>${inputValue}</strong> is most likely from <strong>${country}</strong> with <strong>${percentage}%</strong> certainty.`;
    } else {
      result.textContent = `No nationality prediction found for "${inputValue}".`;
    }
  } catch (error) {
    result.textContent = "Error fetching data. Please try again.";
    console.log("Error fetching data. Please try again", error);
  } finally {
    btn.disabled = false;
  }
}