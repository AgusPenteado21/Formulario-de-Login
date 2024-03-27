function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    anime({
        targets: '#' + tabName,
        opacity: 1,
        duration: 500,
        easing: 'easeInOutQuad',
        complete: function () {
            document.getElementById(tabName).style.display = "block";
        }
    });
    evt.currentTarget.classList.add("active");
}
