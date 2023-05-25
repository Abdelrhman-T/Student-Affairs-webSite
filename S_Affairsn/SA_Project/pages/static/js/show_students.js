function addData(){

    let sysData = JSON.parse(localStorage.getItem("data")) || [];
    let table = document.querySelector("tbody");
    
    for(x = 0; x < sysData.length; x++)
    {

        let newRow = table.insertRow(x);
        newRow.insertCell(0).innerHTML = sysData[x].id;
        newRow.insertCell(1).innerHTML = sysData[x].name;
        newRow.insertCell(2).innerHTML = sysData[x].gpa;
        newRow.insertCell(3).innerHTML = sysData[x].department;
        newRow.insertCell(4).innerHTML = sysData[x].level;
        newRow.insertCell(5).innerHTML = sysData[x].status;
        if(sysData[x].status == "active"){

            newRow.insertCell(5).classList.add("Sactive")
        }
        else if(sysData[x].status == "inactive"){

            newRow.insertCell(5).classList.add("Sinactive")
        }
        newRow.insertCell(6).innerHTML = sysData[x].gender;
        newRow.insertCell(7).innerHTML = sysData[x].email;
        newRow.insertCell(8).innerHTML = sysData[x].birth_date;
        newRow.insertCell(9).innerHTML = sysData[x].phoneNumber;

    }

}

addData();
//setTimeout(addData, 3000);



document.querySelector(".searchBar").oninput = function(){
    
        let search = this.value;
        let table = document.querySelector("tbody");
        let tr = table.getElementsByTagName("tr");
    
        for(x = 0; x < tr.length; x++){
    
            let td = tr[x].getElementsByTagName("td")[0];
            if(td){
    
                let textValue = td.textContent || td.innerHTML;
                if(textValue.indexOf(search) > -1){
    
                    tr[x].style.display = "";
                }
                else{
    
                    tr[x].style.display = "none";
                }
            }
        }
};


document.querySelector("#Status").addEventListener("change", function(){filter()});
document.querySelector("#DEP").addEventListener("change", function(){filter()});
document.querySelector("#year").addEventListener("change", function(){filter()});

function filter()
{
    let year = document.querySelector("#year").value;
    let dep = document.querySelector("#DEP").value;
    let status = document.querySelector("#Status").value;

    let select = this.value;
    let table = document.querySelector("tbody");
    let tr = table.getElementsByTagName("tr");
    
        for(x = 0; x < tr.length; x++){

            let tellYear = tr[x].getElementsByTagName("td")[4].innerHTML;
            let tellDep = tr[x].getElementsByTagName("td")[3].innerHTML;
            let tellStatus = tr[x].getElementsByTagName("td")[5].innerHTML;

                
                if((tellYear.indexOf(year) > -1 || year == "All") && (tellDep.indexOf(dep) > -1 || dep == "All") && (tellStatus.indexOf(status) > -1 || status == "All")){
    
                    tr[x].style.display = "";
                }
                else{
    
                    tr[x].style.display = "none";
                }
            }
    

}