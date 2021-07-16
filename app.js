function toggleNotebooks(notebook){
    document.querySelector(".to-do-notebook").style.display = 'none';
    document.querySelector(".to-buy-notebook").style.display = 'none';
    document.querySelector(".work-notebook").style.display = 'none';
    switch (notebook){
        case 'menu-to-buy':
            document.querySelector(".to-buy-notebook").style.display = 'block';
            break;
        case 'menu-to-do':
            document.querySelector(".to-do-notebook").style.display = 'block';
            break;
        case 'menu-work':
            document.querySelector(".work-notebook").style.display = 'block';
    }
};

function changeTheme(){
    document.body.id = document.body.id == 'dark' ? '' : 'dark';
    document.querySelector(".menu-to-do").id = document.querySelector(".menu-to-do").id == 'dark' ? '' : 'dark';
    document.querySelector(".menu-work").id = document.querySelector(".menu-work").id == 'dark' ? '' : 'dark';
    document.querySelector(".menu-to-buy").id = document.querySelector(".menu-to-buy").id == 'dark' ? '' : 'dark';
    document.querySelector(".to-do-title").id = document.querySelector(".to-do-title").id == 'dark' ? '' : 'dark';
    document.querySelector(".to-buy-title").id = document.querySelector(".to-buy-title").id == 'dark' ? '' : 'dark';
    document.querySelector(".work-title").id = document.querySelector(".work-title").id == 'dark' ? '' : 'dark';
    document.querySelector(".fa-caret-down").id = document.querySelector(".fa-caret-down").id == 'dark' ? '' : 'dark';
    document.querySelector(".menu").id = document.querySelector(".menu").id == 'dark' ? '' : 'dark';
};