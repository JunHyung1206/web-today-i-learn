// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
const tilForm = document.querySelector("#til-form");
// 주의: HTML에서 id가 아닌 class로 선언되어 있으므로 .til-list를 사용해야 합니다.
const tilList = document.querySelector(".til-list");

tilForm.addEventListener("submit", function (event) {
  // 폼 제출 시 새로고침 방지
  event.preventDefault();

  // 1. 입력값 가져오기
  const dateValue = document.querySelector("#til-date").value;
  const titleValue = document.querySelector("#til-title").value;
  const contentValue = document.querySelector("#til-content").value;

  // 2. 새 TIL 항목(article) 생성
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  // 3. 내부 HTML 구조 생성 및 데이터 주입
  newArticle.innerHTML = `
    <h3>${titleValue}</h3>
    <span class="til-date">${dateValue}</span>
    <p>${contentValue}</p>
  `;

  // 4. 목록에 추가 (최신 글이 위로 올라오도록 prepend 사용)
  tilList.prepend(newArticle);

  // 5. 폼 입력창 초기화
  tilForm.reset();
});