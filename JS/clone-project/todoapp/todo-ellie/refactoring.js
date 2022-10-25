const items = document.querySelector(".items");
const form = document.querySelector(".new-form");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});
function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);

  items.appendChild(item);

  item.scrollIntoView({ block: "center" });

  input.value = "";
  input.focus();
}

let id = 0; // UUID 라이브러리나 객체를 이용한 해시 라이브러리를 사용하는 것이 좋다. 여기서는 편의상 임의의 id를 설정한다.
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete" >
        <i class="fa-solid fa-trash" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;
  return itemRow;
}

addBtn.addEventListener("click", onAdd);

// 디버그 방법론에 관한 강의
// keypress는 더 이상 사용되지 않는다. keydown과 keyup으로 대체
// keydown은 키보드를 누를 때 작동, keyup은 누르다가 땔 때 작동
input.addEventListener("keypress", (event) => {
  // 'keydown'을 쓸 때 필요한 메소드 isComposing
  // 한국말처럼 여러 단어를 조합해서 하나의 단어를 만들어내는 경우 단어 조합을 다 끝낼 때까지 기다린다. 그 전의 이벤트에는 반응하지 않는다.
  // 그냥 keyup을 써도 된다.
  // if (event.isComposing) {
  //   return
  // }
  if (event.key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
