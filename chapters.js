(() => {
  const keyPrefix = "circleoftrust-chapters-v1-";

  document.querySelectorAll(".chapter-section").forEach((section,index) => {
    const head = section.querySelector(".chapter-head > div:last-child");
    if (head && !head.querySelector(".chapter-guided-link")) {
      const link = document.createElement("a");
      link.className = "chapter-guided-link";
      link.href = "guided.html?chapter=" + index;
      link.textContent = "开始本章引导练习 →";
      head.appendChild(link);
    }
  });

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
        fix: "这是一种典型的“修理”反应：也许出于好意，却太早把注意力从对方的经验转向了我们的解决方案。",
        presence: "这更接近信任圈的陪伴：我愿意留下来听，但不替对方决定该多快、该往哪里走。",
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
      containerScore.textContent = n + " / " + containerChecks.length + (n < 6 ? " · 先补结构，再谈深度" : " · 承载结构已有基础");
    };
    containerChecks.forEach(x => x.addEventListener("change", update)); update();
  }

  const thirdThingPrompts = [
    "先不要解释它。只问：哪一个细节最先让我停了下来？",
    "如果这个第三物是一面镜子，它此刻照见了我什么？",
    "哪一个部分让我靠近？哪一个部分让我想躲开？",
    "把注意力放在一个词 / 一个声音 / 一个画面上，安静两分钟。",
    "先别问“它到底是什么意思”，只问：“它今天在哪一点上碰到了我的生活？”",
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
      ? "这更接近诚实而开放的问题：提问者自己并不知道答案，问题也把注意力重新放回焦点成员自己的经验。"
      : type === "leading"
      ? "这里把建议藏进了问题里。可以去掉“应该”，再问焦点成员真正正在经历什么。"
      : "这个问题已经带着诊断和模式判断，提问者很容易变成替对方解释的人。先把判断放下，再回到对方此刻具体的经验。";
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
