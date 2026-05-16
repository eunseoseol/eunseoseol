const books = [
  {
    number: "01",
    title: "Zero to One",
    author: "Peter Thiel",
    note: "창업과 독점, 작은 시장에서 시작하는 사고",
    tags: ["Startup"],
  },
  {
    number: "02",
    title: "The Founders",
    author: "Jimmy Soni",
    note: "PayPal 마피아와 초기 스타트업 운영의 밀도",
    tags: ["Startup", "History"],
  },
  {
    number: "03",
    title: "The Power Law",
    author: "Sebastian Mallaby",
    note: "벤처캐피털과 비대칭적 기회의 구조",
    tags: ["Startup", "History"],
  },
  {
    number: "04",
    title: "The Innovators",
    author: "Walter Isaacson",
    note: "컴퓨팅 역사를 만든 팀과 협업 방식",
    tags: ["History", "AI"],
  },
  {
    number: "05",
    title: "The Singularity is Nearer",
    author: "Ray Kurzweil",
    note: "AI와 장기 기술 변화에 대한 관점",
    tags: ["AI"],
  },
  {
    number: "06",
    title: "In the Plex",
    author: "Steven Levy",
    note: "검색, 광고, 플랫폼이 미디어를 바꾼 방식",
    tags: ["Digital Media", "History"],
  },
  {
    number: "07",
    title: "The ONE Thing",
    author: "Gary Keller",
    note: "큰 목표를 작은 실행 단위로 좁히는 법",
    tags: ["Creator Economy"],
  },
  {
    number: "08",
    title: "Big Tech Notes",
    author: "Eunseo's workspace",
    note: "플랫폼, 크리에이터, 미디어 비즈니스 관찰",
    tags: ["Digital Media", "Creator Economy"],
  },
  {
    number: "09",
    title: "History Notes",
    author: "Eunseo's workspace",
    note: "회사와 시장을 더 길게 보기 위한 기록",
    tags: ["History"],
  },
];

const grid = document.querySelector("#book-grid");
const buttons = document.querySelectorAll(".filter-button");
const header = document.querySelector(".site-header");

function renderBooks(activeFilter = "all") {
  grid.innerHTML = books
    .map((book) => {
      const isVisible = activeFilter === "all" || book.tags.includes(activeFilter);
      const tags = book.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

      return `
        <article class="book-card" data-visible="${isVisible}">
          <span class="book-number">${book.number}</span>
          <h3>${book.title}</h3>
          <div>
            <p class="book-meta">${book.author}</p>
            <p class="book-meta">${book.note}</p>
            <div class="tag-row">${tags}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBooks(button.dataset.filter);
  });
});

window.addEventListener("scroll", () => {
  header.dataset.elevated = window.scrollY > 8 ? "true" : "false";
});

renderBooks();