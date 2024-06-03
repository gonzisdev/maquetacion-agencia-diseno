document.addEventListener('DOMContentLoaded', (e) => {
    // Seleccionar mis dos elementos principales
    const mobile_btn = document.querySelector(".navbar__mobile-btn");
    const mobile_menu = document.querySelector(".menu-mobile");
    const btn_close = document.querySelector(".menu-mobile__close");

    const showHiddenMenu = () => {
        const show = mobile_menu.classList.contains("menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    };

    mobile_btn.addEventListener('click', showHiddenMenu);
    btn_close.addEventListener('click', showHiddenMenu);

    window.addEventListener('resize', () => {
        const window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // Desplegar submenus
    const menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        item.addEventListener("click", (e) => {
            const submenu = item.lastElementChild;
            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            };
        });
    });    
});