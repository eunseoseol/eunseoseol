const books = [
  {
    number: "01",
    title: "The Last Question",
    author: "Issac Asimov",
    tags: ["Space", "AI", "Humanity"],
    link: "https://books.apple.com/us/book/the-last-question/id6443005835",
    cover: "https://www.notion.so/image/attachment%3A4de21bc6-de20-4bd1-8caa-6b6e18c4ca93%3Aimage.png?id=301816dd-7b5a-81b8-8d2d-fdb9dee05590&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "02",
    title: "Foundation Series",
    author: "Issac Asimov",
    tags: ["Space", "AI", "Humanity"],
    link: "https://books.apple.com/us/book-series/the-foundation-series/id738891490",
    cover: "https://www.notion.so/image/attachment%3Ac70c24d7-984c-42f1-b619-945e46b9438d%3Aimage.png?id=301816dd-7b5a-81aa-863a-cbfa88391b06&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "03",
    title: "I, Robot",
    author: "Issac Asimov",
    tags: ["AI", "Humanity"],
    link: "https://books.apple.com/us/book/i-robot/id419950877",
    cover: "https://www.notion.so/image/attachment%3Aa0040d3a-2299-40fe-bd81-336e08c1e7ef%3Aimage.png?id=301816dd-7b5a-812b-96d6-d606d7e87a4a&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "04",
    title: "The Singularity is Near",
    author: "Ray Kurzweil",
    tags: ["AI", "Space"],
    link: "https://books.apple.com/us/book/the-singularity-is-near/id361932532",
    cover: "https://www.notion.so/image/attachment%3A2c975cce-1318-4ebd-a48a-4c2dbcd96239%3Aimage.png?id=301816dd-7b5a-81e9-b837-f698b95b00df&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "05",
    title: "The Singularity is Nearer",
    author: "Ray Kurzweil",
    tags: ["AI", "Space"],
    link: "https://books.apple.com/us/book/the-singularity-is-nearer/id1556969036",
    cover: "https://www.notion.so/image/attachment%3A8608ca10-a7d8-4836-a9fa-640b831fdfe8%3Aimage.png?id=301816dd-7b5a-81f6-8d12-fc682f6c8d45&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "06",
    title: "Last and First Men",
    author: "Olaf Stapledon",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/last-and-first-men/id1099725477",
    cover: "https://www.notion.so/image/attachment%3Afc52c29f-b753-4059-9dac-cff9190efdf6%3Aimage.png?id=301816dd-7b5a-813e-9607-ecad304c2f9f&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "07",
    title: "Star Maker",
    author: "Olaf Stapledon",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/star-maker/id764777887",
    cover: "https://www.notion.so/image/attachment%3A62b0517f-2f81-4299-8d89-3706a57041c1%3Aimage.png?id=301816dd-7b5a-81f2-8f24-dc8746c49651&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "08",
    title: "The Future of Mind",
    author: "Michio Kaku",
    tags: ["AI", "Humanity", "Space"],
    link: "https://books.apple.com/us/book/the-future-of-the-mind/id697998398",
    cover: "https://www.notion.so/image/attachment%3Abbac684f-9d60-4dbf-b53e-2c131b9e5114%3Aimage.png?id=301816dd-7b5a-8104-a971-e39ea0f90025&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "09",
    title: "Hyperspace",
    author: "Michio Kaku",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/hyperspace/id774951717",
    cover: "https://www.notion.so/image/attachment%3A3eced9c9-44eb-4e64-b41b-da9f2d864575%3Aimage.png?id=301816dd-7b5a-81e6-a7b1-e25438b43009&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "10",
    title: "Physics of the Future",
    author: "Michio Kaku",
    tags: ["Space", "Humanity"],
    link: "https://books.apple.com/us/audiobook/physics-of-the-future-how-science-will-shape/id1416927873",
    cover: "https://www.notion.so/image/attachment%3A7069193e-752e-49ac-9cb5-e6d014ce9dc6%3Aimage.png?id=301816dd-7b5a-818e-af1d-deacd464be1b&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "11",
    title: "Physics of the Impossible",
    author: "Michio Kaku",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/physics-of-the-impossible/id419944947",
    cover: "https://www.notion.so/image/attachment%3A1ef4eb0a-f44b-4966-b947-4c189ac038ce%3Aimage.png?id=301816dd-7b5a-8144-8ed3-eca1ffb60730&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "12",
    title: "The God Equation",
    author: "Michio Kaku",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/the-god-equation/id1523220750",
    cover: "https://www.notion.so/image/attachment%3A4fd88f31-7f34-423f-bdf0-8c0fa503e1b8%3Aimage.png?id=301816dd-7b5a-81e2-9f9d-c9002263a9e7&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "13",
    title: "Beyond Einstein",
    author: "Michio Kaku",
    tags: ["Space"],
    link: "https://www.amazon.com/Beyond-Einstein-Cosmic-Theory-Universe/dp/0385477813",
    cover: "https://www.notion.so/image/attachment%3Aa192a7da-bf61-4291-b622-a6038d466185%3Aimage.png?id=301816dd-7b5a-8131-b7ff-f205189905c4&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "14",
    title: "The Case For Space",
    author: "Robert Zubrin",
    tags: ["Space"],
    link: "https://www.amazon.com/Case-Space-Revolution-Spaceflight-Possibility/dp/1633885348",
    cover: "https://www.notion.so/image/attachment%3A8addb3b7-f828-4717-9819-3ba76c4c618b%3Aimage.png?id=301816dd-7b5a-810c-a08b-cf4d05f88a64&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "15",
    title: "The Case for Mars",
    author: "Robert Zubrin",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/case-for-mars/id448231990",
    cover: "https://www.notion.so/image/attachment%3Ad4c79c9c-8c37-4a08-bfee-43ae59e8c6d2%3Aimage.png?id=301816dd-7b5a-8146-bf8c-e6a7f6d8dbe1&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "16",
    title: "The Space Barons",
    author: "Christian Davenport",
    tags: ["Space"],
    link: "https://books.apple.com/us/book/the-space-barons/id1278968259",
    cover: "https://www.notion.so/image/attachment%3Af78acb8a-cf0e-487c-ab11-4ac48eac507b%3Aimage.png?id=301816dd-7b5a-81a4-b1d4-fa3f74914a37&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "17",
    title: "The Moon is a Harsh Mistress",
    author: "Robert A. Heinlein",
    tags: ["Space", "Humanity", "AI"],
    link: "https://books.apple.com/us/book/the-moon-is-a-harsh-mistress/id1380510287",
    cover: "https://www.notion.so/image/attachment%3Aa58d5979-1494-4fb7-ab99-27f71bdbd6e6%3Aimage.png?id=301816dd-7b5a-8185-8283-fde8b559b4af&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "18",
    title: "Super Intelligence",
    author: "NIck bostrom",
    tags: ["AI", "Humanity"],
    link: "https://books.apple.com/us/book/superintelligence/id899568056",
    cover: "https://www.notion.so/image/attachment%3A790b7229-a14b-4a24-80b0-0606f30604ad%3Aimage.png?id=301816dd-7b5a-8116-ac54-df2ead662a9e&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "19",
    title: "Life 3.0",
    author: "Max Tegmark",
    tags: ["AI", "Humanity"],
    link: "https://books.apple.com/us/book/life-3-0/id1205242630",
    cover: "https://www.notion.so/image/attachment%3Ac4fd8f37-ffc2-4276-8e4d-0a757bf1ceb3%3Aimage.png?id=301816dd-7b5a-8181-bef2-db504db04744&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "20",
    title: "The Computer and Brain",
    author: "John von Neumanm",
    tags: ["AI", "Humanity"],
    link: "https://books.apple.com/us/book/the-computer-and-the-brain/id646323802",
    cover: "https://www.notion.so/image/attachment%3A0dee2786-e4de-4242-ad67-e7a73d7d2121%3Aimage.png?id=301816dd-7b5a-8192-a553-cc150a9e8a28&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "21",
    title: "Theory of Games and Economic Behavior",
    author: "John von Neumanm",
    tags: ["VC", "Humanity"],
    link: "https://books.apple.com/us/book/theory-of-games-and-economic-behavior/id731554456",
    cover: "https://www.notion.so/image/attachment%3A87312905-44b9-4994-9f60-3c66c9ae98dc%3Aimage.png?id=301816dd-7b5a-81b4-9e14-c62cac9c7744&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "22",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    tags: ["Humanity", "Space", "AI"],
    link: "https://books.apple.com/us/book/the-hitchhikers-guide-to-the-galaxy/id419921448",
    cover: "https://www.notion.so/image/attachment%3A4e130e77-5a87-402b-9fd6-85bf8cbf16c7%3Aimage.png?id=301816dd-7b5a-816a-b35a-e8c5b410532a&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "23",
    title: "Elon Musk",
    author: "Walter Issacson",
    tags: ["Humanity"],
    link: "https://books.apple.com/us/book/elon-musk/id6445774227",
    cover: "https://www.notion.so/image/attachment%3Ae1a1e9e5-3b2a-47ba-aad9-fd9a92e575b3%3Aimage.png?id=301816dd-7b5a-81a6-bec6-c6ba2cad65f3&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "24",
    title: "Benjamin Franklin",
    author: "Walter Issacson",
    tags: ["Humanity"],
    link: "https://books.apple.com/us/book/benjamin-franklin/id381686894",
    cover: "https://www.notion.so/image/attachment%3A1dfd2398-0923-4768-92d4-7cffadd0eb3d%3Aimage.png?id=301816dd-7b5a-818f-b89f-ff3963d433e1&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "25",
    title: "Steve Jobs",
    author: "Walter Issacson",
    tags: ["Humanity"],
    link: "https://books.apple.com/us/book/steve-jobs/id431617578",
    cover: "https://www.notion.so/image/attachment%3A02dd75ef-ecf9-499b-8ea6-4baed367ef9f%3Aimage.png?id=301816dd-7b5a-81c3-8276-f7a56a5b5672&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "26",
    title: "Tim Cook",
    author: "Leander Kahney",
    tags: ["Startup"],
    link: "https://books.apple.com/us/book/tim-cook/id1412527620",
    cover: "https://www.notion.so/image/attachment%3A44fd4cd3-4a01-49a7-ac66-33b24d2b32d6%3Aimage.png?id=301816dd-7b5a-81f0-bf2b-c83fcf90dc7d&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "27",
    title: "The Innovators",
    author: "Walter Issacson",
    tags: ["Humanity"],
    link: "https://books.apple.com/us/book/the-innovators/id853738890",
    cover: "https://www.notion.so/image/attachment%3A3c219220-6fc2-4bc9-bcb2-8cad8826830b%3Aimage.png?id=301816dd-7b5a-81bd-b287-c02245065f76&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "28",
    title: "1984",
    author: "George Orwell",
    tags: ["Humanity", "AI"],
    link: "https://books.apple.com/gb/book/1984/id1507211532",
    cover: "https://www.notion.so/image/attachment%3Ae7758a9d-2bbe-48e8-9d04-1b9f871858ac%3Aimage.png?id=301816dd-7b5a-8155-a5a4-f6359106cd5a&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "29",
    title: "AI 2041",
    author: "Kai Fu Lee",
    tags: ["AI", "Humanity"],
    link: "https://books.apple.com/nz/book/ai-2041/id1547553238",
    cover: "https://www.notion.so/image/attachment%3A81cd1ed0-1674-407d-8cfd-64686873d936%3Aimage.png?id=301816dd-7b5a-817a-a19a-e8c04c633e65&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "30",
    title: "AI Superpowers",
    author: "Kai Fu Lee",
    tags: ["AI", "Humanity", "Startup"],
    link: "https://books.apple.com/us/book/ai-superpowers/id1602671323",
    cover: "https://www.notion.so/image/attachment%3A7c31431f-6324-410a-9c2c-b2c106d8cf4c%3Aimage.png?id=301816dd-7b5a-81ea-8970-e8ec10f8cd14&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "31",
    title: "The Next 100 Years",
    author: "George Friedman",
    tags: ["Humanity", "Space", "AI"],
    link: "https://books.apple.com/us/book/the-next-100-years/id419278119",
    cover: "https://www.notion.so/image/attachment%3A03113a6b-38f3-4f30-9f28-c7dc24872206%3Aimage.png?id=301816dd-7b5a-8180-a9ef-fb52bd9cb3f1&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "32",
    title: "The Technological Republic",
    author: "Alexander C. Karp",
    tags: ["Humanity", "AI"],
    link: "https://books.apple.com/us/book/the-technological-republic/id6502871523",
    cover: "https://www.notion.so/image/attachment%3Ac776e658-5d93-4bb5-88a7-c2ee67eec6eb%3Aimage.png?id=301816dd-7b5a-81aa-a755-e89c126d19a0&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "33",
    title: "The Founders",
    author: "Jimmy Soni",
    tags: ["VC", "Startup"],
    link: "https://books.apple.com/book/id1521390329",
    cover: "https://www.notion.so/image/attachment%3A0ab0b4e9-2292-41c6-ac99-692c53ec0286%3Aimage.png?id=301816dd-7b5a-818b-8243-d7e887ff2aad&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "34",
    title: "Zero to One",
    author: "Peter Thiel",
    tags: ["VC"],
    link: "https://books.apple.com/us/book/zero-to-one/id795977428",
    cover: "https://www.notion.so/image/attachment%3Adbf4eed9-ad66-45ac-86e3-75fea20d78fa%3Aimage.png?id=301816dd-7b5a-8185-ac14-d0688c71da71&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
  {
    number: "35",
    title: "The Contrarian",
    author: "Max Chafkin",
    tags: ["VC"],
    link: "https://books.apple.com/us/book/the-contrarian/id1548849472",
    cover: "https://www.notion.so/image/attachment%3A48d01f49-0a2c-4660-8415-508b5e5c7728%3Aimage.png?id=301816dd-7b5a-8167-a52e-ce33a1b97967&table=block&spaceId=7c4816dd-7b5a-819f-a744-0003bd6717eb&width=360&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl",
  },
];

const grid = document.querySelector("#book-grid");
const buttons = document.querySelectorAll(".filter-button");
const header = document.querySelector(".site-header");

function renderBooks(activeFilter = "all") {
  if (!grid) return;

  grid.innerHTML = books
    .map((book) => {
      const isVisible = activeFilter === "all" || book.tags.includes(activeFilter);
      const tags = book.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

      return `
        <article class="book-card" data-visible="${isVisible}">
          <a class="book-link" href="${book.link}" target="_blank" rel="noreferrer" aria-label="${book.title}">
            <div class="book-cover-wrap">
              <img class="book-cover" src="${book.cover}" alt="${book.title} cover" loading="lazy" />
            </div>
            <div class="book-content">
              <span class="book-number">${book.number}</span>
              <h3>${book.title}</h3>
              <p class="book-meta">${book.author}</p>
              <div class="tag-row">${tags}</div>
            </div>
          </a>
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

if (header) {
  window.addEventListener("scroll", () => {
    header.dataset.elevated = window.scrollY > 8 ? "true" : "false";
  });
}

renderBooks();
