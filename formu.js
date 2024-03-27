document.addEventListener("DOMContentLoaded", function() {
    function openTab(tabName) {
        var tabcontents = document.querySelectorAll('.tabcontent');
        tabcontents.forEach(function(tabcontent) {
            tabcontent.style.display = 'none';
        });
 
        var selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
    }

    openTab('login');  
    var tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(function(tablink) {
        tablink.addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');
            openTab(tabName);
        });
    });
});

