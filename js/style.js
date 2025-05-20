
const Students =[
    { id: 1, name: "Alice", marks: 85},
    { id: 2, name: "Bob", marks: 35},
    { id: 3, name: "Charlie", marks: 35},
    { id: 4, name: "David", marks: 25},
    { id: 5, name: "Eva", marks: 90},
]

function searchStudent(params) {
    const nameValue = document.getElementById("searchName").value.toLowerCase();
    const foundedData = Students.find((student) => student.name.toLocaleLowerCase() === nameValue);
    const resultDiv = document.getElementById("searchResult");

    if (foundedData) {
        resultDiv.innerHTML = `
        <div class="student"> Found: ${foundedData.name} (Marks: ${foundedData.marks}) </div>
        `
    } else {
        resultDiv.innerHTML = `
        <div class="student"> No student found with Name ${nameValue}</div>
        `
    }
    

    console.log(foundedData);
}