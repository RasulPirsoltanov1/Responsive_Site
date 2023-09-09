
let menuChecker = true;
let searchBarChecker = true;


const openMenu = () => {

    let menu = document.querySelector(".navbar");
    if (menuChecker && searchBarChecker) {
        menuChecker = !menuChecker;
        menu.classList.add("active");
    }
    else if (searchBarChecker) {
        menuChecker = !menuChecker;
        menu.classList.remove("active");
    }
    else {
        return null;
    }
}


const openSearch = () => {
    let menu1 = document.querySelector(".navbar");
    console.log(window.screen.width)
    if(window.screen.width>1100){
        menuChecker=true;
        menu1.classList.remove("active");
    }
    let menu = document.querySelector(".searchbar");
    if (menuChecker && searchBarChecker) {
        searchBarChecker = !searchBarChecker;
        menu.classList.add("active");
    }
    else if (menuChecker) {
        searchBarChecker = !searchBarChecker;
        menu.classList.remove("active");
    }
    else {
        return null;
    }
}