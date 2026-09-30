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
    if (!card.querySelector(".guided-link")) {
      const link = document.createElement("a");
      link.className = "guided-link";
      link.href = "guided.html?chapter=" + card.dataset.session;
      link.textContent = "跟着页面练一遍 →";
      card.querySelector(".session-content").appendChild(link);
    }
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
    let message = "先看看哪几项还不熟，挑一项继续练就好。";
    if (count >= 3) message = "有几项已经比较熟，可以放进真实的二人或三人练习里再试试。";
    if (count >= 5) message = "大部分准备项已经勾选；带领前仍要根据具体参与者和场地，再检查一次边界与安排。";
    if (count === 6) message = "六项都已勾选。开始前仍请重新确认保密、参与自由、退出方式和带领边界。";
    readinessResult.textContent = "当前：" + count + " / 6。" + message;
  }
  readinessBoxes.forEach(box => box.addEventListener("change", renderReadiness));
  renderReadiness();
  renderProgress();
})();
