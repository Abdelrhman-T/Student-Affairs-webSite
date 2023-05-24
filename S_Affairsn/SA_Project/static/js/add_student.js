function validateForm() {
    const Name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const Phone = document.getElementById("Phone Number").value;
    const id = document.getElementById("ID").value;
    const gpa = document.getElementById("GPA").value;
    var radio1 = document.getElementById("active");
    var radio2 = document.getElementById("inactive");
    var radio3 = document.getElementById("Male");
    var radio4 = document.getElementById("Female");
    var selectElement = document.getElementById("department");
    var selectedOptionIndex = selectElement.selectedIndex;
    var selectedOptionValue = selectElement.options[selectedOptionIndex].value;
    var selectElement1 = document.getElementById("levels");
    var selectedOptionIndex1 = selectElement1.selectedIndex;
    var selectedOptionValue1 = selectElement1.options[selectedOptionIndex1].value;
    const birthday = document.getElementById("birthday").value;
    let flag = 0;

    if (Name === "") {
        alert("name is required.");
        return false;
    } else if (!isValidName(Name)) {
        alert("Please enter a valid name.")
        return false;
    }

    if (email === "") {
        alert("Email is required.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (Phone === "") {
        alert("Phone is required.");
        return false;
    } else if (!isValidPhone(Phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (id === "") {
        alert("id is required.");
        return false;
    } else if (!isValid_id(id)) {
        alert("Please enter a valid id.")
        return false;
    }

    if (gpa === "") {
        alert("gpa is required.");
        return false;
    } else if (!isValidGpa(gpa)) {
        alert("Please enter a valid gpa.")
        return false;
    }

    if (selectedOptionValue1 === "level 1") {
        flag = 1;
    } else if (selectedOptionValue1 === "level 2") {
        flag = 2;
    } else if (selectedOptionValue1 === "level 3") {
    } else if (selectedOptionValue1 === "level 4") {

    } else {
        alert("No Level selected");
        return false;
    }


    if (radio1.checked) {

    } else if (radio2.checked) {

    } else {
        alert("No Status selected");
        return false;
    }

    if (selectedOptionValue === "CS") {

    } else if (selectedOptionValue === "IS") {
    } else if (selectedOptionValue === "IT") {
    } else if (selectedOptionValue === "AI") {
    } else if (selectedOptionValue === "DS") {
<<<<<<< HEAD
    } else if (flag === 2 || flag === 1) {
=======
    } else if (flag === 1) {
>>>>>>> 69e53420f99c813afa67dab9d7838fb56ad57a28
    } else {
        alert("No Department selected");
        return false;
    }

    if (birthday === "") {
        alert("Date not selected");
        return false;
    }

    if (radio3.checked) {

    } else if (radio4.checked) {

    } else {
        alert("No Gender selected");
        return false;
    }


<<<<<<< HEAD
=======
    alert("Student added successfully.");
>>>>>>> 69e53420f99c813afa67dab9d7838fb56ad57a28
    return true;
}

function toggleDepartment(levelSelect) {
    var departmentContainer = document.getElementById("department-container");
    var departmentSelect = document.getElementById("department");

    if (levelSelect.value === "level 3" || levelSelect.value === "level 4") {
        departmentContainer.style.display = "block";
        departmentSelect.required = true;
    } else {
        departmentContainer.style.display = "none";
        departmentSelect.required = false;
    }
}

function isValidEmail(email) {
    // Basic email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    var phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phone);
}
function isValidName(Name) {
    var NameRegex = /^[a-zA-Z ]+$/;
    return NameRegex.test(Name);
}

function isValid_id(id) {
    var Idregex = /^[0-9]{8}$/;
    return Idregex.test(id);
}

function isValidGpa(gpa) {
    var Gparegex = /^([0-3].\d{1,2}|4.0)$/;
    return Gparegex.test(gpa);
}