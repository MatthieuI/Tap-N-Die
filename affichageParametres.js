function param() {
    if (parametres.classList.contains("parametresFermes")) {
        parametres.classList.remove("parametresFermes");
        parametres.classList.add("parametresOuverts");
    }
    else {
        parametres.classList.remove("parametresOuverts");
        parametres.classList.add("parametresFermes");
    }
}