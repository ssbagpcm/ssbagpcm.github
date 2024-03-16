createsearchtopapp("edge", "img/edge.png", "Microsoft Edge");
createsearchtopapp("notepad", "img/notepad.ico", "Notepad")
createsearchtopapp("vscode", "img/vscode.ico", "VS Code")
createsearchtopapp("solitaire", "img/solitaire.ico", "Solitaire")
createsearchtopapp("store", "img/store.ico", "Microsoft Store")

function createsearchtopapp(appname, icon, visualappname) {
    var topapp = document.createElement("div");
    document.getElementsByClassName('searchtopapps')[0].appendChild(topapp);
    topapp.classList.add("searchtopapp");
    topapp.style.backgroundColor = "#333"; // Changer la couleur en fonction de vos besoins

    var topappicon = document.createElement("img");
    topapp.appendChild(topappicon);
    topappicon.src = icon;

    var topappvisualname = document.createElement("p");
    topapp.appendChild(topappvisualname);
    topappvisualname.classList.add("searchtopappslabel");
    topappvisualname.setAttribute("align", "center");
    topappvisualname.innerHTML = visualappname;
    topappvisualname.style.color = "#fff"; // Changer la couleur du texte en blanc ou autre couleur visible sur fond sombre
}

// Appliquer un style sombre à l'ensemble de la page
document.body.style.backgroundColor = "#333";
document.body.style.color = "#fff"; // Changer la couleur du texte pour qu'il soit visible sur fond sombre
