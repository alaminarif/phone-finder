const searchBtn = document.getElementById("search-btn");
const detailseDiv = document.getElementById("phone-detailse");
// searchBtn
searchBtn.addEventListener("click", () => {
  const inputFiled = document.getElementById("input-field");
  // clear detailseDiv
  detailseDiv.textContent = "";
  const inputFiledValue = inputFiled.value;
  inputFiled.value = "";
  const empty = document.querySelector(".empty");
  if (inputFiledValue === "") {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiledValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data));
  }
});
// SearchResult
const displaySearchResult = (phones) => {
  const searchResult = document.getElementById("search-result");
  // clear SearchResult
  searchResult.textContent = "";
  const noResult = document.querySelector(".no-result");
  const phonesData = phones.data;
  // Error handle
  if (phonesData.length === 0) {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
    searchResult.textContent = "";
    const phonesSlice = phonesData.slice(0, 20);
    phonesSlice.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card mt-4 h-100 border-0 mx-auto">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">${phone.brand} ${phone.phone_name}</h5>
             <button onclick='loadPhoneDetails("${phone.slug}")' class='btn btn-success w-75 mt-4 ms-5'> Details</button>
          </div>
        </div>
    `;
      searchResult.appendChild(div);
    });
  }
};
const loadPhoneDetails = (phoneID) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data));
};
// phoneDetails
const displayPhoneDetails = (phoneDetails) => {
  const phone = phoneDetails.data;
  detailseDiv.innerHTML = `
    <div class=''> 
    <img class='phone-img mx-auto' src='${phone.image}'/>
    <h4 class='my-4'>${phone.brand} ${phone.name}</h4>
    <p > <span class='fw-bold me-4'>Release : </span> ${phone.releaseDate ? phone.releaseDate : "No Release Date "} </p>
     <h6 class='mt-3 fw-bold'>Main Features </h6>
    <p> <span class='fw-bold me-4'>Storage :  </span>  ${phone.mainFeatures.storage}. </p>
    <p> <span class='fw-bold me-4'> Display Size : </span> ${phone.mainFeatures.displaySize}. </p>
    <p> <span class='fw-bold me-4'>ChipSet :  </span>  ${phone.mainFeatures.chipSet}</p>
    <p> <span class='fw-bold me-4'>Memory : </span> ${phone.mainFeatures.memory}</p>
    <p id="sensors" > <span class='fw-bold me-4'> Sensors :  </span> ${phone.mainFeatures.sensors.join(", ")}. </p>
    <h6 class='mt-3 fw-bold'> Others Features </h6>
    <p> <span class='fw-bold me-4'> WLAN : </span> ${phone.others ? phone.others.WLAN : "No"}. </p> 
    <p> <span class='fw-bold me-4'> Bluetooth : </span> ${phone.others ? phone.others.Bluetooth : "No"}. </p>
    <p> <span class='fw-bold me-4'> GPS : </span> ${phone.others ? phone.others.GPS : "No"}. </p>
    <p> <span class='fw-bold me-4'> NFC : </span> ${phone.others ? phone.others.NFC : "No"} </p>
    <p> <span class='fw-bold me-4'> Radio : </span> ${phone.others ? phone.others.Radio : "No"} </p>
    <p> <span class='fw-bold me-4'> USB : </span> ${phone.others ? phone.others.USB : "No"}. </p>  
    </div>
  `;
};
