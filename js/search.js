'use strict';


let fullData = JSON.parse(window.localStorage.getItem('data'));
let shownData = fullData.filter(student => {
    if (student.active){
        return student;
    }
});

// html elements
const overlayCont = document.querySelector('.overlay-container');
const overlayContent = overlayCont.querySelector('.content');
const errorTemplate = document.querySelector('#error-overlay');
const deleteTemplate = document.querySelector('#delete-overlay');
const rowTemplate = document.querySelector('#student-row');
const tableBody = document.querySelector('tbody');

const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.cross');

const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const search = document.querySelector('#search');



//////////////////////////////////////////////////////////////////////////
let temp;
let rowData;
let start = 0;
const amount = 10;

function fillTable(){
    tableBody.innerHTML = null;
    for (let i = start; i < shownData.length && (i - start) < amount; i++)
    {
        temp = rowTemplate.content.cloneNode(true).children[0];
        temp.setAttribute('data-value', shownData[i].id);
        rowData = temp.querySelectorAll('td');
        rowData[0].textContent = shownData[i].name;
        rowData[1].textContent = shownData[i].id;
        rowData[2].textContent = shownData[i].gpa;
        tableBody.appendChild(temp);
        temp.querySelector('.department').addEventListener('click', function(){showDepartmentOverlay(i)});
        temp.querySelector('.delete').addEventListener('click', function(){showDeleteOverlay(i)});
    }
    leftBtn.classList.toggle("disabled", start === 0);
    rightBtn.classList.toggle("disabled", (start + amount) >= shownData.length);
        
}

function updateTable(backward=false){
    let neg = ((backward) ? -1 : 1);
    let next = start + amount * neg;
    if (next >= shownData.length || next < 0)
    {
        return;
    }
    start = next;
    fillTable();
}    
    

function filterTable()
{
    let searchValue = search.value.toLowerCase();
    if (searchValue){
        shownData = fullData.filter(student =>{
            if (student.name.toLowerCase().includes(searchValue) || student.id.includes(searchValue)){
                return student;
            }
        });
    }
    else
    {
        shownData = fullData.filter(student => {
            if (student.active){
                return student;
            }
        });
    }
    start = 0;
    fillTable();
}

//////////////////////////////////////////////////////////////////////////
    
    
    
/////////////////////////////////////////////////////////////////////////////////
function showOverlay(){
    overlayCont.classList.remove('hidden');    
};
function hideOverlay(){
    overlayContent.innerHTML = null;
    overlayCont.classList.add('hidden');
};

function showDepartmentOverlay(index)
{
    if (shownData[index].level !== 3){
        overlayContent.innerHTML = errorTemplate.innerHTML;
        overlayContent.querySelector('#student-level').textContent = shownData[index].level;
        showOverlay();
    }
    else{
        window.location.href = "update_student.html";
    }
}
function showDeleteOverlay(index)
{
    let id = shownData[index].id;
    overlayContent.innerHTML = deleteTemplate.innerHTML;
    document.querySelector('#student-id').textContent = id;
    let confirmDeletebtn = document.querySelector('#confirm-delete-btn');
    confirmDeletebtn.setAttribute('student-id', id);
    confirmDeletebtn.addEventListener('click', function(){deleteStudent(id)});
    showOverlay();
}


function deleteStudent(id){
    fullData = fullData.filter(element => element.id !== id);
    window.localStorage.setItem("data", JSON.stringify(fullData));
    filterTable();
    hideOverlay();
}
//////////////////////////////////////////////////////////////////////////
    
    
fillTable();

leftBtn.addEventListener('click', function(){updateTable(true)});
rightBtn.addEventListener('click', function(){updateTable()});


overlay.addEventListener('click', hideOverlay);
cross.addEventListener('click', hideOverlay);
document.addEventListener('keydown', function(e){
    if (e.key === "Escape")
    hideOverlay();
});

search.addEventListener('input', filterTable);
