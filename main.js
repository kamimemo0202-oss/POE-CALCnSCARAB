import { searchItems } from "./modules/search.js";
import { calcDPS } from "./modules/dps.js";

async function loadItems() {
  const res = await fetch("./data/items.json");
  return await res.json();
}

document.getElementById("searchBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const items = await loadItems();
  const results = searchItems(keyword, items);

  const resultBox = document.getElementById("results");
  resultBox.innerHTML = "";

  results.forEach(item => {
    const dps = calcDPS(item);
    resultBox.innerHTML += `
      <div class="item">
        <strong>${item.name}</strong><br>
        種類: ${item.type}<br>
        DPS: ${dps}
      </div>
    `;
  });
});

//ファームセットアップ
async function loadScarabs() {
  const res = await fetch("./data/scarabs.json");
  return await res.json();
}

document.getElementById("contentSelect").addEventListener("change", async (e) => {
  const value = e.taeget.value;
  const scarabData = await loadScarabs();

  const box = document.getElementById("scarabBox");

  if (!value) {
    box.innerHTML = "コンテンツを選択するとスカラベ構成を表示します。";
    return;
  }

  const set = scarabData[value];

  if (!set) {
    box.innerHTML = "データがありません。";
    return;
  }

  box.innerHTML = `
    <ul>
      ${set.map(s => `<li>${s}</li>`).join("")}
    </ul>
  `;
});
