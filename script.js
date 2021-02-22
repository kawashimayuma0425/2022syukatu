const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll", function(){
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistans = targetElement[i].getBoundingClientRect().top +targetElement[i].clientHeight * .6// 画面の上からの距離がわかる
        if(window.innerHeight > getElementDistans){// innerHeightで現在のブラウザの高さがわかる
            targetElement[i].classList.add("show"); // ブラウザの高さよりも画面の上から2つ目の<li>までの距離が小さくなった（画面上に<li>が見えた）時、その<li>にクラスを追加する
        　　　　　　}
    }
})
