function login(bool1 = false, bool2 = false){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginDiv = document.getElementById("login");

    if(username == "username"){
        bool1 = true;
    }
    if(password == "password"){
        bool2 = true;
    }
    if(bool1 && bool2 == true){
        localStorage.setItem("login", "true");
    }
    else{
        error = document.createElement("div");
        error.classList.add("error");
        loginDiv.appendChild(error);
        error.innerText = "gebruikersnaam of wachtwoord niet juist.";
    }
}

function checkLocalStorage(Newbutton){
    var MainNavUl = document.getElementById("MainNavUl");

    if(localStorage.getItem("login") == "true")
    {
        li = document.createElement("li");
        MainNavUl.appendChild(li);
        var Newbutton = document.createElement("button");
        li.appendChild(Newbutton);
        Newbutton.classList.add("navButton");
        Newbutton.innerText = "pas deze pagina aan";
        Newbutton.addEventListener("click", SomeFunction);
    }
}



function SomeFunction(){    
    const NewButton = document.getElementsByClassName("navButton");
    
}   