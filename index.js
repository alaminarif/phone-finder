const inputFiled = document.getElementById("input-field");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const inputFiledValue = inputFiled.value;
  console.log(inputFiledValue);
  inputFiled.value = "";
});
