const section = document.querySelector("seciton");
const cardTemplate = document.querySelector(".card");

fetch("data.json")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((e) => {
      const card = cardTemplate.cloneNode(true);
      card.setAttribute("href", e["href"]);
      card.querySelector("img").setAttribute("src", e["img"]);
      card.querySelector("h4").innerText = e["title"];
      card.querySelector("p").innerText = e["content"];
      card.querySelector("span").innerText = e["date"];
      const cardFoot = card.querySelector(".card-foot");
      e["tags"].forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.innerText = tag;
        cardFoot.appendChild(tagSpan);
      });

      section.appendChild(card);
    })
  );

section.removeChild(cardTemplate);
