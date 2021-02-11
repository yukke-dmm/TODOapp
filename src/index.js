import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcomp(inputText);
  // console.log(div);
  // console.log(li);
  // console.log(comp_button);
  // console.log(delete_button);
  // alert(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcomp = (target) => {
  document.getElementById("ul-im").removeChild(target);
};

// 未完了リストに追加する関数。
const createImcomp = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "flex";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button（完了）生成
  const comp_button = document.createElement("button");
  comp_button.innerText = "完了";
  comp_button.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了から削除
    deleteFromImcomp(delete_button.parentNode);

    // 完了リストに追加する要素
    const addTarget = comp_button.parentNode;

    //todo内容リストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const backbtn = document.createElement("button");
    backbtn.innerText = "戻す";
    backbtn.addEventListener("click", () => {
      //押された戻るボタンの親タグを削除する。
      const deleteTarget = backbtn.parentNode;
      document.getElementById("ul-comp").removeChild(deleteTarget);

      //テキストを取得
      const text = backbtn.parentNode.firstElementChild.innerText;
      createImcomp(text);
      console.log(text);
    });

    // divの子要素に追加
    addTarget.appendChild(li);
    addTarget.appendChild(backbtn);
    //完了リストに追加
    document.getElementById("ul-comp").appendChild(div);
  });

  //button（完了）生成
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    deleteFromImcomp(delete_button.parentNode);
  });

  // div子要素にli等の各要素
  div.appendChild(li);
  div.appendChild(comp_button);
  div.appendChild(delete_button);

  // 未完了のリストに追加していく
  document.getElementById("ul-im").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
