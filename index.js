const searchBtn = document.getElementById("search-btn");
// searchBtn
searchBtn.addEventListener("click", () => {
  const inputFiled = document.getElementById("input-field");
  const inputFiledValue = inputFiled.value;
  inputFiled.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputFiledValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data));
});
// SearchResult
const displaySearchResult = (phones) => {
  const searchResult = document.getElementById("search-result");
  const phonesData = phones.data;
  const phonesSlice = phonesData.slice(0, 20);
  phonesSlice.forEach((phone) => {
    // console.log(phone.slug);
    // console.log(phone);
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
  // console.log(phonesData);
};
const loadPhoneDetails = (phoneID) => {
  // console.log(slug);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`;
  //  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data));
};
// phoneDetails
const displayPhoneDetails = (phoneDetails) => {
  const phone = phoneDetails.data;
  // const sensors = phone.mainFeatures.sensors ;
  const detailseDiv = document.getElementById("phone-detailse");
  detailseDiv.innerHTML = `
    <div class=''> 
    <img class='phone-img mb-3 mx-auto' src='${phone.image}'/>
    <h4>${phone.brand} ${phone.name}</h4>
    <p > <span class='fw-bold me-4'>Release : </span> ${phone.releaseDate} </p>
    <p> <span class='fw-bold me-4'>Storage :  </span>  ${phone.mainFeatures.storage}</p>
    <p> <span class='fw-bold me-4'> Display Size : </span> ${phone.mainFeatures.displaySize}</p>
    <p> <span class='fw-bold me-4'>ChipSet :  </span>  ${phone.mainFeatures.chipSet}</p>
    <p> <span class='fw-bold me-4'>Memory : </span> ${phone.mainFeatures.memory}</p>
    <p id='sensors' > <span class='fw-bold me-4'> Sensors :  </span> ${phone.mainFeatures.sensors} </p>
    <p> <span class='fw-bold me-4'> WLAN : </span> ${phone.others.WLAN} </p>
    <p> <span class='fw-bold me-4'> Bluetooth : </span> ${phone.others.Bluetooth} </p>
    <p> <span class='fw-bold me-4'> GPS : </span> ${phone.others.GPS} </p>
    <p> <span class='fw-bold me-4'> NFC : </span> ${phone.others.NFC} </p>
    <p> <span class='fw-bold me-4'> Radio : </span> ${phone.others.Radio} </p>
    <p> <span class='fw-bold me-4'> USB : </span> ${phone.others.USB} </p>
     
   

    
    </div>
  `;
  // console.log(phone.others);
  // <p>${phone.mainFeatures.}</p>
  // console.log(sensors);
  // loop
  // const sensorDisplay = () => {
  //   sensors.forEach((index) => {
  //     const sensorsP = document.getElementById("sensors");
  //     sensorsP.innerHTML = index;
  //   });
  // };
};
