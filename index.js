let notesContainer = document.getElementById("notes");
let addTitle = document.getElementById("title-name");
let addText = document.getElementById("addnotes");
let toaddbtn = document.getElementById("addbtn");
let emptyContainer=document.getElementById("empty");
toaddbtn.addEventListener("click", function () {
    if (addTitle.value == "" && addText.value == "") {
        alert("Please Write a Note !");
    }
    else if (addText.value == "") {
        alert("Please Enter the Note!");
    }
    else if (addTitle.value == "") {
        alert("Please Enter a Title to your Note");
    }
    else {
            let notetitle = document.createElement('h2');
            let notetext = document.createElement('p');
            let newdiv = document.createElement('div');
            let delbtn = document.createElement('button');
            let delcontainer = document.createElement('div');
            let h2container = document.createElement('div');
            delbtn.classList.add("btn");
            delbtn.classList.add("btn-danger");
            newdiv.classList.add("newnote-style");
            newdiv.classList.add("col-lg-5");
            newdiv.classList.add("notecard");
            notetitle.innerText = addTitle.value;
            notetext.innerText = addText.value;
            h2container.classList.add("del");
            delbtn.innerText = "Delete Note";
            delcontainer.classList.add("del");
            h2container.appendChild(notetitle);
            delcontainer.appendChild(delbtn);
            newdiv.appendChild(h2container);
            newdiv.appendChild(notetext);
            newdiv.appendChild(delcontainer);
            addText.value = "";
            addTitle.value = "";
            notesContainer.appendChild(newdiv);
            if(notesContainer.childElementCount!=0){
                emptyContainer.classList.add("emptyness");
            }
            else{
                emptyContainer.classList.remove("emptyness");
            }
            delbtn.addEventListener("click", function () {
                let parent = delbtn.parentElement;
                notesContainer.removeChild(parent.parentElement);
                if(notesContainer.childElementCount!=0){
                    emptyContainer.classList.add("emptyness");
                }
                else{
                    emptyContainer.classList.remove("emptyness");
                }
            });
    }
});
let search = document.getElementById('searchText');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
});
