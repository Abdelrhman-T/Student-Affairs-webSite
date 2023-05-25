'use strict';


async function main(){
    const response = await fetch("http://127.0.0.1:8000/api/student/").catch(err => { throw err; });
    let fullData = await response.json();
    let shownData = fullData.filter(student => {
        return student;
        // if (student.status){
        // }
    });

    console.log(fullData);
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
    const currentPage = document.querySelector('#current-page');
    const totalPages = document.querySelector('#total-pages');

    const search = document.querySelector('#search');



    //////////////////////////////////////////////////////////////////////////
    let temp;
    let rowData;
    let start = 0;
    const amount = 9;


    totalPages.textContent = Math.ceil(shownData.length / amount); 
    currentPage.textContent = Math.ceil(start / amount) + 1;

    function fillTable(){
        tableBody.innerHTML = null;
        for (let i = start; i < shownData.length && (i - start) < amount; i++)
        {
            temp = rowTemplate.content.cloneNode(true).children[0];
            rowData = temp.querySelectorAll('td');
            rowData[0].textContent = shownData[i].name;
            rowData[1].textContent = shownData[i].id;
            rowData[2].textContent = shownData[i].gpa;
            temp.querySelector('.department').classList.toggle('grey', shownData[i].level !== 3);
            tableBody.appendChild(temp);
            temp.querySelector('.department').addEventListener('click', function(){showDepartmentOverlay(i)});
            temp.querySelector('.edit').addEventListener('click', function(){loadEditStudent(i)});
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
        currentPage.textContent = Math.ceil(start / amount) + 1;
        fillTable();
    }    
        

    function filterTable()
    {
        let searchValue = search.value.toLowerCase();
        if (searchValue){
            shownData = fullData.filter(student =>{
                if (student.name.toLowerCase().includes(searchValue) || String(student.id).includes(searchValue)){
                    return student;
                }
            });
        }
        else
        {
            shownData = fullData.filter(student => {
                if (student.status){
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
            window.location.href = `/update/${shownData[index].id}/`;
        }
    }
    function loadEditStudent(index)
    {
        window.location.href = `/update/${shownData[index].id}/`;
    }
    function showDeleteOverlay(index)
    {
        let id = shownData[index].id;
        overlayContent.innerHTML = deleteTemplate.innerHTML;
        document.querySelector('#student-id').textContent = id;
        let confirmDeletebtn = document.querySelector('#confirm-delete-btn');
        confirmDeletebtn.setAttribute('student-id', id);
        confirmDeletebtn.addEventListener('click', deleteStudent);
        showOverlay();
    }


    function deleteStudent(){
        let confirmDeletebtn = document.querySelector('#confirm-delete-btn');
        let id = confirmDeletebtn.getAttribute('student-id');
        fetch(`/api/student/${id}/`,  {
            method: 'DELETE',
          }).then(function(){
            location.reload();
          })
          .catch(error => {
            console.error('Error:', error);
          });
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
}

main();