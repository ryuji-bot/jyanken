// ctrl + shift + Lで複数行選択


let progress = 0;

/*
 * saikoro.js サイコロを振るプログラム
 */


// 変数「count」を定義する
let count;  // 変化しているように見せる回数

// 変数「$id」の関数を定義する。
let $id = function (id) {
    return document.getElementById(id);
};

/* * サイコロを振る */
// 「shake」という関数を定義する
// 「sai」という変数を定義し、1から6までの数字を出す
//  画像ファイル名生成
//  innerHTMLでdivタグのデータを画像データに変換

function shake() {
    let sai = Math.floor(Math.random() * 6) + 1;
    sai = sai + ".png";
    console.log(sai);
    $id("saikoro").innerHTML = "<img src='" + sai + "' width='100' height='100'>";
    // while (goal > progress) {
    const result = sai[0];
    if (count >= 20) {
        console.log(result);
        progress += parseInt(result);
        console.log(progress);
        // }
    }

    if (progress == 1) {
        document.getElementById('a').style.backgroundImage = "url(map01.png)";
    } else if
        (progress == 2) {
        document.getElementById('a').style.backgroundImage = "url(map02.png)";
    } else if
        (progress == 3) {
        document.getElementById('a').style.backgroundImage = "url(map03.png)";
    } else if
        (progress == 4) {
        document.getElementById('a').style.backgroundImage = "url(map04.png)";
    } else if
        (progress == 5) {
        document.getElementById('a').style.backgroundImage = "url(map05.png)";
    } else if
        (progress == 6) {
        document.getElementById('a').style.backgroundImage = "url(map06.png)";
    } else if
        (progress == 7) {
        document.getElementById('a').style.backgroundImage = "url(map07.png)";
    } else if
        (progress >= 8) {
        document.location = "saikoro8map.html";

        // document.getElementById('a').style.backgroundImage = "url(map08.png)";

        // } else if
        //     (progress == 9) {
        //     document.getElementById('a').style.backgroundImage = "url(map09.png)";
        // } else if
        //     (progress == 10) {
        //     document.getElementById('a').style.backgroundImage = "url(map10.png)";
        // } else if
        //     (progress == 11) {
        //     document.getElementById('a').style.backgroundImage = "url(map11.png)";
        // } else if
        //     (progress == 12) {
        //     document.getElementById('a').style.backgroundImage = "url(map12.png)";
        // } else if
        //     (progress == 13) {
        //     document.getElementById('a').style.backgroundImage = "url(map13.png)";
        // } else if
        //     (progress == 14) {
        //     document.getElementById('a').style.backgroundImage = "url(map14.png)";
        // } else if
        //     (progress == 15) {
        //     document.getElementById('a').style.backgroundImage = "url(map15.png)";


    }
}


/* * サイコロを振るときのアニメーション*/
function anime() {
    if (count > 20) {  // 20回画像が替わる
        count = 0;
        $id("btn").disabled = false;   // ボタンを使える状態にする
        return 0;
    }
    // 都度shakeを実施
    shake();
    count++;
    setTimeout(anime, 50);  // 50ミリ秒間隔で表示切り替え
}
function saikoro() {
    // ★以下のカウントを消すと無限ループへ
    count = 0;
    $id("btn").disabled = "true";   // ボタンを使用不可にする
    anime();                        // サイコロアニメ開始

    // let test = document.getElementById("saikoro");
    // console.log(test);
    // if (test == '<div id="saikoro" class="saikoro_position"><img src="1.png" width="100" height="100"></div>') {
    //     alert(1);
    // } else {
    //     alert(test);
    // }
}


// 以下は「siakoro」IDから特定の要素を取得する方法(失敗)
// let test1 = document.getElementById("saikoro");
// let test2 = test1.getAttribute("img");
// console.log(test2);



/* * 起動時の処理 */
// onloadで処理を読み込んでから開始することになる。以下をコメントアウトすると最初にサイコロの画像が表示されない。

window.onload = function () {
    shake();        // 一回だけサイコロを振る


}



