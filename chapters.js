(() => {
  const keyPrefix = "circleoftrust-chapters-v1-";

  document.querySelectorAll(".journal, .journal-input").forEach(el => {
    const key = keyPrefix + el.dataset.key;
    try { const saved = localStorage.getItem(key); if (saved !== null) el.value = saved; } catch (_) {}
    el.addEventListener("input", () => {
      try { localStorage.setItem(key, el.value); } catch (_) {}
    });
  });

  document.querySelectorAll("[data-integrity]").forEach(input => {
    const output = input.parentElement.querySelector("output");
    output.textContent = input.value;
    input.addEventListener("input", () => output.textContent = input.value);
  });

  const scenario = document.querySelector("[data-scenario]");
  if (scenario) {
    const feedback = scenario.querySelector(".scenario-feedback");
    scenario.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
      const type = btn.dataset.choice;
      const messages = {
        fix: "这是一种典型的“修理”反应：也许有用，但它过早把焦点从对方的辨认转向我们的方案。",
        presence: "这更接近信任圈的姿态：保持在场，同时把速度与方向交还给对方。",
        probe: "这个问题带有诊断与结论，容易让对方进入防御。可以先把判断拿掉，再回到好奇。"
      };
      feedback.textContent = messages[type];
    }));
  }

  const containerChecks = [...document.querySelectorAll("#containerChecks input")];
  const containerScore = document.getElementById("containerScore");
  if (containerScore) {
    const update = () => {
      const n = containerChecks.filter(x => x.checked).length;
      containerScore.textContent = n + " / " + containerChecks.length + (n < 6 ? " · 先补结构，再谈深度" : " · 容器已有基础");
    };
    containerChecks.forEach(x => x.addEventListener("change", update)); update();
  }

  const thirdThingPrompts = [
    "先不要解释它。只问：哪一个细节最先抓住了我？",
    "如果这个第三物是一面镜子，它此刻照见了我什么？",
    "哪一个部分让我靠近？哪一个部分让我想躲开？",
    "把注意力放在一个词 / 一个声音 / 一个画面上，安静两分钟。",
    "不要问“它是什么意思”，问“它今天在哪里与我的生命相遇？”",
    "如果我只允许自己带走一个问题，而不是一个答案，那会是什么？"
  ];
  const draw = document.getElementById("thirdThingDraw");
  const card = document.getElementById("thirdThingCard");
  if (draw && card) draw.addEventListener("click", () => card.textContent = thirdThingPrompts[Math.floor(Math.random()*thirdThingPrompts.length)]);

  document.querySelectorAll(".simple-timer").forEach(timer => {
    const total = Number(timer.dataset.timerSeconds || 60);
    let remaining = total, interval = null;
    const display = timer.querySelector(".timer-display");
    const render = () => {
      const m = String(Math.floor(remaining/60)).padStart(2,"0");
      const s = String(remaining%60).padStart(2,"0");
      display.textContent = m + ":" + s;
    };
    const stop = () => { if (interval) clearInterval(interval); interval = null; };
    timer.querySelector('[data-timer-action="start"]').addEventListener("click", () => {
      if (interval) return;
      interval = setInterval(() => {
        remaining -= 1; render();
        if (remaining <= 0) { stop(); display.textContent = "完成"; }
      }, 1000);
    });
    timer.querySelector('[data-timer-action="pause"]').addEventListener("click", stop);
    timer.querySelector('[data-timer-action="reset"]').addEventListener("click", () => { stop(); remaining = total; render(); });
    render();
  });

  const qFeedback = document.getElementById("questionFeedback");
  document.querySelectorAll("[data-q]").forEach(btn => btn.addEventListener("click", () => {
    const type = btn.dataset.q;
    qFeedback.textContent = type === "open"
      ? "更接近开放而诚实的问题：提问者并不知道答案，而且问题把注意力送回焦点人物的经验。"
      : type === "leading"
      ? "这里把建议藏进了问题里。可以去掉“应该”，再问焦点人物真正正在经历什么。"
      : "这个问题带有诊断和模式判断，容易让提问者变成解释者。先放下判断，再靠近具体经验。";
  }));

  const silenceDisplay = document.getElementById("silenceDisplay");
  let silenceInterval = null;
  document.querySelectorAll("[data-silence]").forEach(btn => btn.addEventListener("click", () => {
    if (silenceInterval) clearInterval(silenceInterval);
    let remaining = Number(btn.dataset.silence);
    const render = () => {
      const m = String(Math.floor(remaining/60)).padStart(2,"0");
      const s = String(remaining%60).padStart(2,"0");
      silenceDisplay.textContent = m + ":" + s;
    };
    render();
    silenceInterval = setInterval(() => {
      remaining -= 1; render();
      if (remaining <= 0) {
        clearInterval(silenceInterval); silenceInterval = null;
        silenceDisplay.textContent = "可以慢慢回来";
      }
    }, 1000);
  }));
})();