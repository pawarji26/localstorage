function saveData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name && age) {
        let userData = { name: name, age: age };
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Data saved successfully!");
    } else {
        alert("Please enter both name and age.");
    }
}

function retrieveData() {
    let storedData = localStorage.getItem("userData");

    if (storedData) {
        let userData = JSON.parse(storedData);

        let displayArea = document.getElementById("displayArea");
        displayArea.innerHTML = "<h2>Stored User Data</h2>";

        let table = document.createElement("table");
        let row = table.insertRow();

        let th1 = document.createElement("th");
        th1.textContent = "Name";
        row.appendChild(th1);

        let th2 = document.createElement("th");
        th2.textContent = "Age";
        row.appendChild(th2);

        let row2 = table.insertRow();

        let td1 = row2.insertCell();
        td1.textContent = userData.name;

        let td2 = row2.insertCell();
        td2.textContent = userData.age;

        displayArea.appendChild(table);
    } else {
        alert("No data found in Local Storage.");
    }
}

   