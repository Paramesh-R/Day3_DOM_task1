const form = document.getElementById("myForm");
const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(el => el.value).join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const addressCell = document.createElement("td");
    const pincodeCell = document.createElement("td");
    const genderCell = document.createElement("td");
    const foodCell = document.createElement("td");
    const stateCell = document.createElement("td");
    const countryCell = document.createElement("td");

    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    addressCell.textContent = address;
    pincodeCell.textContent = pincode;
    genderCell.textContent = gender;
    foodCell.textContent = food;
    stateCell.textContent = state;
    countryCell.textContent = country;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(addressCell);
    row.appendChild(pincodeCell);
    row.appendChild(genderCell);
    row.appendChild(foodCell);
    row.appendChild(stateCell);
    row.appendChild(countryCell);

    table.appendChild(row);

    form.reset();
});


function validateAtleastTwoChecked() {

    var checkbox_food = document.getElementsByClassName("form-check-input")
    console.log(checkbox_food.length)
    var checked_count = 0;
    var count;
    for (count = 0; count < checkbox_food.length; count++) {
        if (checkbox_food[count].checked === true) {
            checked_count = checked_count + 1
        }
    }


    if (checked_count >= 2) {
        for (count = 0; count < checkbox_food.length; count++) {
            checkbox_food[count].removeAttribute('required')
        }
    } else {
        for (count = 0; count < checkbox_food.length; count++) {
            checkbox_food[count].setAttribute('required',true)
        }
    }
}