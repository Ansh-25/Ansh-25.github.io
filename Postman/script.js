console.log("Welcome to Postman");
let elemCounter = 1;

function convertStringToNode(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}

document.getElementById("customParams").style.display = "none";
document.getElementById("responseBox").style.display = "none";

let jsonRadio = document.getElementById("jsonRadio");
let paramsRadio = document.getElementById("paramsRadio");
let addParams = document.getElementById("addParams");

paramsRadio.addEventListener("click", () => {
    document.getElementById("jsonBox").style.display = "none";
    document.getElementById("customParams").style.display = "flex";
});

jsonRadio.addEventListener("click", () => {
    document.getElementById("customParams").style.display = "none";
    document.getElementById("jsonBox").style.display = "flex";
});

addParams.addEventListener("click", () => {
    let newParams = document.getElementById("newParams");
    let txt = "";
    txt += `           
        <div class="mb-3 row" id="np${elemCounter + 1}" >
        <label for="inputParams" class="col-sm-2 col-form-label">Parameter ${elemCounter + 1}</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" id="inputKey${elemCounter + 1}" placeholder="Enter Key ">
        </div>
        <div class="col-sm-5">
            <input type="text" class="form-control" id="inputValue${elemCounter + 1}" placeholder="Enter Value">
        </div>
        <div class="col-auto">
            <button onclick="delParam(${elemCounter + 1})" type="submit" class="btn btn-primary mb-3" id = "minus_${elemCounter + 1}" >-</button>
        </div>
        </div>`;
    let paramElem = convertStringToNode(txt);
    newParams.appendChild(paramElem);
    elemCounter++;
});

function delParam(id) {
    var elem = document.getElementById(`np${id}`);
    elem.remove();
};

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {

    let url = document.getElementById("url").value;
    let requestText = document.querySelector("input[name = 'requestTypeRadio']:checked").value;
    let contentType = document.querySelector("input[name = 'contentTypeRadio']:checked").value;

    if (contentType == "Custom Parameters") {
        data = {};
        for (i = 0; i < elemCounter; i++) {
            if (document.getElementById(`inputKey${i + 1}`) != undefined) {
                let key = document.getElementById(`inputKey${i + 1}`).value;
                let value = document.getElementById(`inputValue${i + 1}`).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById("jsonTxt").value;
    }

    if (requestText=='GET'){
        fetch(url, {
            method: 'GET',   
        })
        .then(response=> response.text())
        .then((text) =>{
            document.getElementById("responseBox").style.display = "flex";
            document.getElementById('Response').value = text;
        });
    }

    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            document.getElementById("responseBox").style.display = "flex";
            document.getElementById('Response').value = text;
        });
    }
})