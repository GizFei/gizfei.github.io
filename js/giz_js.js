window.onload = function () {
    // 加载highlight.js
    hljs.initHighlightingOnLoad();

    /* 回到顶部按钮配置 */
    let footer = $("footer")[0];
    let backToTop = $("#back-to-top")[0];
    window.onscroll = function () {
        if(window.scrollY > 960){
            $(backToTop).css("opacity", 1);
        }else{
            $(backToTop).css("opacity", 0);
        }
        if (window.scrollY + window.innerHeight > footer.offsetTop + backToTop.offsetHeight / 2 + 24) {
            let bottom = footer.offsetHeight - ($("body").height() - (window.scrollY + window.innerHeight)) - backToTop.offsetHeight / 2;
            $(backToTop).css("bottom", bottom + "px").css("width", "36px").css("border-radius", "18px");
        }else{
            $(backToTop).css("bottom", "24px").css("width", "48px").css("border-radius", "4px");
        }
    }
    // 回到顶部
    $(backToTop).on("click", function(){
        $("html").animate({scrollTop: 0}, 600);
    });

    // 提示框
    $("[data-toggle='tooltip']").tooltip();
}
