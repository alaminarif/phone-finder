const inputFiled = document.getElementById("input-field");
const searchBtn = document.getElementById("search-btn");
// searchBtn
searchBtn.addEventListener("click", () => {
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
  phonesData.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card mt-4 h-100 border-0 mx-auto">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
            
           <button onclick='phoneDetails()' class='btn btn-success w-75 mt-4'> Details</button>
          </div>
        </div>
    `;
    searchResult.appendChild(div);
  });
  // console.log(phonesData);
};
