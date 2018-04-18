document.addEventListener('postpush', function (event) {
    var page = event.enterPage;
    if (page.id === 'mainPage')
        document.getElementById('menu').load('../mobilelogin/menu.do');
});

function menuOpen() {
    var menu = document.getElementById('menu');
    menu.open();
};

function menuLoad(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.replacePage(page).then(menu.close.bind(menu));
};