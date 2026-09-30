(() => {
  const storageKey = "circleoftrust-study-progress-v1";
  let completed = [];
  try {
    completed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(completed)) completed = [];
  } catch (_) {
    completed = [];
  }

  const cards = [...document.querySelectorAll(".session-card")];
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");

  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(completed)); } catch (_) {}
  }

  function renderProgress() {
    cards.forEach(card => {
      const id = Number(card.dataset.session);
      const done = completed.includes(id);
      card.classList.toggle("done", done);
      const button = card.querySelector(".session-check");
      button.textContent = done ? "已完成" : "完成";
      button.setAttribute("aria-pressed", done ? "true" : "false");
    });
    const count = completed.length;
    progressText.textContent = count + " / " + cards.length;
    progressBar.style.width = ((count / cards.length) * 100) + "%";
  }

  cards.forEach(card => {
    const button = card.querySelector(".session-check");
    button.addEventListener("click", () => {
      const id = Number(card.dataset.session);
      if (completed.includes(id)) completed = completed.filter(x => x !== id);
      else completed = [...completed, id].sort((a,b) => a-b);
      save();
      renderProgress();
    });
  });

  document.querySelectorAll(".journey-filter button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".journey-filter button").forEach(x => x.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      cards.forEach(card => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.stage !== filter);
      });
    });
  });

  const readinessBoxes = [...document.querySelectorAll("[data-ready]")];
  const readinessResult = document.getElementById("readinessResult");
  function renderReadiness() {
    const count = readinessBoxes.filter(x => x.checked).length;
    let message = "先从自己最容易失守的一项开始练。";
    if (count >= 3) message = "已经有基础；下一步是把这些能力放进真实二人/三人练习。";
    if (count >= 5) message = "接近可以尝试带领小型入门圈，但仍建议从低风险主题开始。";
    if (count === 6) message = "六项都具备基础。可以尝试完整流程，同时继续保持谦逊、边界感与复盘。";
    readinessResult.textContent = "当前：" + count + " / 6。" + message;
  }
  readinessBoxes.forEach(box => box.addEventListener("change", renderReadiness));
  renderReadiness();
  renderProgress();
})();