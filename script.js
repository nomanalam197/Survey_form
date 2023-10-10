let resetBtn = document.querySelector("#reset_btn");
let checkboxes = document.querySelectorAll(".checkboxes");
let mobileNumber = document.querySelector("#mobile_number");
let formBox = document.querySelector("#form_box");
let detailsBox = document.querySelector(".details_box");
let crossBtn = document.querySelector('#cross');
let checkBtn = document.querySelector('#check_btn');

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('click', ()=>{
        checkboxes.forEach(onebyone =>{
            onebyone.checked = false;
        })
        checkbox.checked = true;
    })
})

resetBtn.addEventListener("click", ()=>{
    checkboxes.forEach(checkbox =>{
        checkbox.checked = false;
    })
    document.querySelectorAll('input').forEach( i =>{
        if(i.type != "submit"){
            i.value = "";
        }
        // console.log(i.type)
    })
    document.querySelector("#country_list").value = "";
    document.querySelector("#profession_list").value = "";
})

formSubmit= ()=>{
    formBox.addEventListener('submit', ()=>{
        checkboxes.forEach(checkbox =>{
            checkbox.checked = false;
        })
        document.querySelectorAll('input').forEach( i =>{
            if(i.type != "submit"){
                i.value = "";
            }
            // console.log(i.type)
        })
        document.querySelector("#country_list").value = "";
        document.querySelector("#profession_list").value = "";
        alert("submitted!")
    })
}


checkBtn.addEventListener('click', ()=>{
    if(document.querySelector('#first_name').value != "" && document.querySelector('#last_name').value != "" && document.querySelector('#dob').value != "" && document.querySelector('#country_list').value != "" && document.querySelector('#profession_list').value != "" && document.querySelector('#email').value != "" && document.querySelector('#mobile_number').value != "" && checkboxes[0].checked == true || checkboxes[1].checked == true || checkboxes[2].checked == true){
        // alert()
        detailsBox.style.opacity = '1'
        detailsBox.style.pointerEvents = 'initial'
        document.querySelector('#fname').innerHTML = document.querySelector('#first_name').value;
        document.querySelector('#lname').innerHTML = document.querySelector('#last_name').value;
        document.querySelector('#Bdate').innerHTML = document.querySelector('#dob').value;
        document.querySelector('#country').innerHTML = document.querySelector('#country_list').value;
        document.querySelector('#profession').innerHTML = document.querySelector('#profession_list').value;
        document.querySelector('#em').innerHTML = document.querySelector('#email').value;
        document.querySelector('#Mnum').innerHTML = document.querySelector('#mobile_number').value;
        if(checkboxes[0].checked === false){
            if(checkboxes[1].checked === false){
                document.querySelector('#gen').innerHTML = checkboxes[2].value;
            }
            else{
                document.querySelector('#gen').innerHTML = checkboxes[1].value;
            }
        }
        else{
            document.querySelector('#gen').innerHTML = checkboxes[0].value;
        }
    }
    else{
        alert("Please fill full details")
    }
})

crossBtn.addEventListener('click', ()=>{
    detailsBox.style.opacity = '0'
    detailsBox.style.pointerEvents = 'none'
})
