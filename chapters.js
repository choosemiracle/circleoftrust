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
        fix: "这是一种典型的“急着替人解决问题”：也许出于好意，却太早把注意力从对方身上转到了我们的办法上。",
        presence: "这更接近信任圈的陪伴：我愿意留下来听，但不替对方决定什么时候该行动、该往哪里走。",
        probe: "这个问题已经带着判断和结论，容易让对方防御起来。可以先把自己的猜测放下，真正问一问对方正在经历什么。"
      };
      feedback.textContent = messages[type];
    }));
  }

  const containerChecks = [...document.querySelectorAll("#containerChecks input")];
  const containerScore = document.getElementById("containerScore");
  if (containerScore) {
    const update = () => {
      const n = containerChecks.filter(x => x.checked).length;
      containerScore.textContent = n + " / " + containerChecks.length + (n < containerChecks.length ? " · 还有 " + (containerChecks.length - n) + " 项没有确认" : " · 8 项都已确认，开始前再逐项核对一次");
    };
    containerChecks.forEach(x => x.addEventListener("change", update)); update();
  }

  const thirdThingPrompts = [
    "先不要解释它。只问：哪一个细节最先让我停了下来？",
    "看着这个第三物时，我最先想起了自己生活里的什么？",
    "哪一部分我想多看一会儿？哪一部分我有点想避开？",
    "把注意力放在一个词 / 一个声音 / 一个画面上，安静两分钟。",
    "先别问“它到底是什么意思”，只问：“它让我想起了生活里的什么？”",
    "如果今天只带走一个问题，而不是一个答案，我会带走什么？"
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
      ? "这更接近诚实而开放的问题：提问者自己并不知道答案，也给焦点成员留下了继续思考和感受的余地。"
      : type === "leading"
      ? "这里把建议藏进了问题里。可以先去掉“应该”，再问对方此刻真正有什么感受和顾虑。"
      : "这个问题已经带着诊断和归因，提问者很容易变成替对方解释的人。先把自己的判断放下，再问对方此刻真正经历了什么。";
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
        silenceDisplay.textContent = "时间到了，可以继续往下写";
      }
    }, 1000);
  }));
})();
