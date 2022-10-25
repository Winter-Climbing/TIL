// to-do-app
// 1. 사용자의 타이핑을 저장한다.
// 2. 버튼을 클릭하거나, enter를 누를 경우 submit된다.
// 3. submit된 사용자의 타이핑을 items에 옮긴다.
// 4. items의 항목에 있는 쓰레기통을 클릭할 경우 해당 항목이 지워진다.
const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

// 일반적으로 클릭 이벤트를 처리하는 버튼의 경우 on을 붙인다.
// 실제 업무에서 코드를 설명하는 주석은 That's NO no
// 코드의 의도를 설명하자
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  // 5. 인풋을 초기화 한다.
  input.value = "";
  input.focus();
}

function createItem(text) {
  `
    <li>
      <div>
        <span>${text}</span>
        <button></button>
      </div>
      <div></div>
    </li>

  `;
  const itemRow = document.createElement("li");
  // setAttribute는 class도 넣을 수 있고 id도 넣을 수 있다.
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerHTML = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", onAdd);

// 디버그 방법론에 관한 강의
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
