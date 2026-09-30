const lessons = [
  {
    label:"第一步",
    title:"先认识一个核心原则：不修复，不拯救，不建议，也不纠正他人",
    body:"当一个人分享困惑时，我们很容易马上给建议。信任圈练习的是另一种回应：不急于替别人解决问题，而是先陪他把经历说完整，把判断和选择继续留在他自己手里。",
    prompt:"最近一次有人向你倾诉时，你最先做的是倾听，还是给建议？"
  },
  {
    label:"第二步",
    title:"体验一分钟静默",
    body:"安静一分钟，不是要把脑子清空。只是先别处理别的事，看看身体、情绪和念头里最先出现什么。",
    prompt:"当外界安静下来时，你最先注意到的是身体、情绪，还是脑中的念头？"
  },
  {
    label:"第三步",
    title:"练习提出诚实而开放的问题",
    body:"好的问题不是为了把对方带到你想要的答案，而是帮助他自己想得更清楚。少问“为什么不”，多问“当你想到这件事时，你最先有什么感受或念头？”",
    prompt:"把“你为什么不辞职？”改写成一个没有预设答案的开放问题。"
  },
  {
    label:"第四步",
    title:"给另一个人完整的五分钟",
    body:"真正的聆听，需要忍住插话、接话和马上讲自己故事的冲动。五分钟里，只做一件事：让对方把自己的话说完，你只负责听完。",
    prompt:"当你不能插话时，你会不会感到焦虑？你最想做什么？"
  },
  {
    label:"第五步",
    title:"把这种听法用到日常关系里",
    body:"信任圈真正的变化，不只发生在一次练习里，而是进入日常关系之后：少一点判断和替人决定，多一点耐心，也更相信对方有能力为自己的生活作选择。",
    prompt:"你的生活里，有哪一段关系最值得先尝试这种新的聆听方式？"
  }
];

document.querySelectorAll(".step").forEach((button)=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".step").forEach(x=>x.classList.remove("active"));
    button.classList.add("active");
    const item = lessons[Number(button.dataset.step)];
    document.getElementById("lesson").innerHTML = `
      <div class="lesson-label">${item.label}</div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <div class="prompt"><span>想一想</span>${item.prompt}</div>
    `;
  });
});

let timerInterval;
const timerEl = document.getElementById("timer");
document.getElementById("timerBtn").addEventListener("click",()=>{
  clearInterval(timerInterval);
  let seconds = 180;
  timerEl.textContent = "03:00";
  timerInterval = setInterval(()=>{
    seconds--;
    const m = String(Math.floor(seconds/60)).padStart(2,"0");
    const s = String(seconds%60).padStart(2,"0");
    timerEl.textContent = `${m}:${s}`;
    if(seconds<=0){
      clearInterval(timerInterval);
      timerEl.textContent = "完成";
      document.getElementById("note").focus();
    }
  },1000);
});

const overlay = document.getElementById("pauseOverlay");
const pauseTime = document.getElementById("pauseTime");
let pauseInterval;
function stopPause(){
  clearInterval(pauseInterval);
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden","true");
}
document.getElementById("startPause").addEventListener("click",()=>{
  let seconds = 60;
  pauseTime.textContent = seconds;
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden","false");
  clearInterval(pauseInterval);
  pauseInterval=setInterval(()=>{
    seconds--;
    pauseTime.textContent=seconds;
    if(seconds<=0) stopPause();
  },1000);
});
document.getElementById("closePause").addEventListener("click",stopPause);

// 11 Touchstones interactive orbit
const touchstones = [
  {title:"给予欢迎，也接受欢迎",body:"人们在一个感到被接纳、被尊重的空间里，往往能够更好地学习与成长。在这个圆圈中，我们通过给予彼此善意、接纳与支持，同时也愿意接受他人的善意与支持，共同营造一个适合学习与成长的场域。",practice:"今天，我可以怎样主动给予欢迎？又能否允许自己接受别人的善意与支持？"},
  {title:"尽可能完整地临在于当下",body:"带着完整的自己来到这里——带着你的疑惑、恐惧与脆弱，也带着你的信念、喜悦与成就；带着你的言说，也带着你的倾听。无需隐藏任何一部分自己，只需尽可能真实、完整地在场。",practice:"此刻，我有没有哪一部分自己还留在门外？"},
  {title:"一切出于邀请，而非要求",body:"这里不是一个“非分享不可”的活动。整个过程中，你都可以按照内心真正的需要来选择参与的方式，并知道，无论你选择说话、沉默、参与或暂时退后，都会得到这个圆圈的支持。相信你的灵魂比任何人都更清楚，你此刻真正需要什么。",practice:"我能否把“你来说说”改成“如果你愿意，可以……”？"},
  {title:"说出自己的真实，同时尊重他人的真实",body:"我们对现实的理解可能彼此不同，但在信任圈中，说出自己的真实，并不意味着解释、纠正、评判或辩论他人的表达。从自己的中心出发，向圆圈的中心说话，多使用“我”的陈述，只说自己的经验、感受与理解，并相信每个人都有能力对所听到的内容作出自己的辨别、筛选与选择。",practice:"把一个“你就是……”改写成“当我经历……时，我感到……”"},
  {title:"不修复，不拯救，不建议，也不纠正他人",body:"对于那些习惯于帮助、教育、咨询或照顾他人的人来说，这也许是最困难的准则之一。然而，如果我们希望创造一个真正能够容纳灵魂、让内在导师出现的空间，这也是最重要的原则之一。我们不急于替别人解决问题，而是陪伴他们更深地听见自己。",practice:"下一次想给建议时，先多听三十秒。"},
  {title:"以诚实而开放的问题回应，而不是给予建议或纠正",body:"当我们回应他人时，尽量提出真诚、开放、没有预设答案的问题，而不是提供建议、分析或纠正。这样的提问，不是为了把对方带向我们的答案，而是帮助彼此“被倾听进入更深的表达”，让那些尚未被说出的东西，有机会慢慢浮现。",practice:"问一个你自己也不知道答案的问题。"},
  {title:"当事情变得困难时，转向好奇",body:"当你开始感到评判、防御、抗拒或不舒服时，不妨暂时放下判断，转向好奇。问问自己：“是什么经历，可能让她形成这样的信念？”“他此刻可能正在感受什么？”“我的这个反应，让我看见了自己什么？”让好奇取代评判，从而更深地倾听别人，也更深地倾听自己。",practice:"当评判升起时，先问自己：“我的这个反应，让我看见了自己什么？”"},
  {title:"关注你的内在导师",body:"我们当然会从他人身上学习，但在信任圈里，当我们与诗歌、故事、问题、静默以及彼此的生命经验相遇时，也获得了一个从内在学习的珍贵机会。因此，请留意自己内心的反应、感受、触动与抗拒，因为你最重要的老师，始终也在你的内心。",practice:"此刻，哪一句话、哪个感觉或哪一种抗拒最值得我继续倾听？"},
  {title:"信任静默，并学习从静默中领受",body:"在这个喧闹的世界里，静默是一份珍贵的礼物，也是一种独特的认识方式。把静默视为圆圈中的一位成员。当一个人说完之后，不必急着回应，让话语在空间里停留片刻，给自己和他人一些时间去感受、反思与聆听，不要立刻用更多语言填满这个空间。",practice:"有人说完后，先共同安静三次呼吸。"},
  {title:"守护深度的保密",body:"信任来自于这样一种确信：我们知道，在这里分享的内容会得到认真而谨慎的守护。每位成员都尊重彼此的隐私、边界与托付，不把他人的故事带出圆圈，也不把听到的内容变成谈资、判断或议论。保密不是一项形式上的规定，而是对彼此信任的伦理承诺。",practice:"进入分享之前，先清楚说明并共同确认保密边界。"},
  {title:"相信你可以带走自己真正需要的东西，也相信种子会继续生长",body:"请相信，当你离开这个圆圈时，你可能已经获得了此刻真正需要的东西——也许是一种理解，也许是一份安定，也许只是一个仍未完成的问题。同时也请相信，在这里种下的种子，不一定当下就会发芽，它们可能会在之后的日子里继续生长，并在你意想不到的时候显现出意义。",practice:"结束时不问“解决了吗”，而问“此刻，我真正想带走什么？”"}
];

const orbitNodes = document.getElementById("orbitNodes");
let activeTouchstone = 0;

function renderTouchstone(index){
  activeTouchstone = (index + touchstones.length) % touchstones.length;
  const item = touchstones[activeTouchstone];
  document.getElementById("orbitNumber").textContent = String(activeTouchstone + 1).padStart(2,"0") + " / 11";
  document.getElementById("orbitTitleText").textContent = item.title;
  document.getElementById("orbitBody").textContent = item.body;
  document.getElementById("orbitPractice").textContent = item.practice;
  orbitNodes.querySelectorAll(".orbit-node").forEach((node,i)=>node.classList.toggle("active",i===activeTouchstone));
}

if(orbitNodes){
  const cx = 310, cy = 310, radius = 244;
  touchstones.forEach((item,index)=>{
    const angle = -Math.PI / 2 + index * (Math.PI * 2 / touchstones.length);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const ns = "http://www.w3.org/2000/svg";
    const group = document.createElementNS(ns,"g");
    group.setAttribute("class","orbit-node" + (index === 0 ? " active" : ""));
    group.setAttribute("transform",`translate(${x} ${y})`);
    group.setAttribute("tabindex","0");
    group.setAttribute("role","button");
    group.setAttribute("aria-label",`第 ${index+1} 条：${item.title}`);
    const circle = document.createElementNS(ns,"circle");
    circle.setAttribute("r","25");
    const label = document.createElementNS(ns,"text");
    label.setAttribute("text-anchor","middle");
    label.setAttribute("dominant-baseline","central");
    label.textContent = String(index+1).padStart(2,"0");
    group.append(circle,label);
    group.addEventListener("click",()=>renderTouchstone(index));
    group.addEventListener("keydown",(event)=>{
      if(event.key==="Enter" || event.key===" "){
        event.preventDefault();
        renderTouchstone(index);
      }
    });
    orbitNodes.appendChild(group);
  });
  document.getElementById("orbitPrev").addEventListener("click",()=>renderTouchstone(activeTouchstone-1));
  document.getElementById("orbitNext").addEventListener("click",()=>renderTouchstone(activeTouchstone+1));
  document.getElementById("orbitRandom").addEventListener("click",()=>{
    let next = activeTouchstone;
    while(next === activeTouchstone) next = Math.floor(Math.random()*touchstones.length);
    renderTouchstone(next);
  });
}

// Honest & Open Questions mini-quiz
const quizItems = [
  {
    source:"“你为什么不直接拒绝他？”",
    options:["你是不是其实害怕冲突？","当你想到“拒绝”这件事时，你最先有什么感受或念头？","你有没有试过先冷静几天？"],
    correct:1,
    note:"这个问法没有替对方解释原因，而是直接问他当时有什么感受和念头。"
  },
  {
    source:"“你是不是该换工作了？”",
    options:["如果离开和留下都不急着决定，两种画面分别带给你什么感觉？","你觉得下一份工作会不会更适合你？","你为什么还要继续忍？"],
    correct:0,
    note:"开放问题让两种可能都能被探索，而不是暗示“离开”才是正确方向。"
  },
  {
    source:"“你有没有想过为自己活一次？”",
    options:["你是不是一直太在意别人？","如果暂时不用回应任何人的期待，你心里最先会冒出什么？","你最想摆脱谁的影响？"],
    correct:1,
    note:"它没有替对方规定“为自己活”应该是什么，而是让对方自己去感受和分辨。"
  }
];
let quizIndex = 0;

function renderQuiz(){
  const item = quizItems[quizIndex];
  const source = document.getElementById("quizSource");
  const box = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  if(!source || !box || !feedback) return;
  source.textContent = item.source;
  feedback.textContent = "选一个你觉得更开放的问法。";
  box.innerHTML = "";
  item.options.forEach((option,index)=>{
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click",()=>{
      box.querySelectorAll("button").forEach((b,i)=>{
        b.disabled = true;
        if(i === item.correct) b.classList.add("correct");
      });
      if(index === item.correct){
        feedback.textContent = "是的。 " + item.note;
      } else {
        button.classList.add("wrong");
        feedback.textContent = "这个问法里仍然藏着一些判断或方向。 " + item.note;
      }
    });
    box.appendChild(button);
  });
}
if(document.getElementById("nextQuiz")){
  document.getElementById("nextQuiz").addEventListener("click",()=>{
    quizIndex = (quizIndex + 1) % quizItems.length;
    renderQuiz();
  });
  renderQuiz();
}

// Third Thing draw
const thirdThings = [
  {symbol:"✦",type:"诗歌",prompt:"找一句让你停下来的诗。先别解释作者，只说：这句话让我想起了什么？"},
  {symbol:"◫",type:"图像",prompt:"看一幅画或一张照片一分钟。哪一个细节最先让你停了下来？"},
  {symbol:"⌁",type:"自然物",prompt:"选一片叶子、一块石头或一杯水。看着它时，你会想到自己最近生活里的什么？"},
  {symbol:"▶",type:"电影片段",prompt:"看一个不超过三分钟的片段。哪个动作，或哪一段沉默，让你心里有了反应？"},
  {symbol:"♪",type:"音乐",prompt:"听一段音乐，先别解释。只留意身体有没有变紧、变松，或情绪有没有变化。"},
  {symbol:"◇",type:"故事",prompt:"读一个很短的故事。你最能理解哪个人物？又对哪个人物最有距离感？"}
];
let lastThirdThing = 0;
const thirdThingStage = document.getElementById("thirdThingStage");
if(document.getElementById("drawThirdThing") && thirdThingStage){
  document.getElementById("drawThirdThing").addEventListener("click",()=>{
    let next = lastThirdThing;
    while(next === lastThirdThing) next = Math.floor(Math.random()*thirdThings.length);
    lastThirdThing = next;
    thirdThingStage.classList.add("flip");
    setTimeout(()=>{
      const item = thirdThings[next];
      document.getElementById("thirdThingSymbol").textContent = item.symbol;
      document.getElementById("thirdThingType").textContent = item.type;
      document.getElementById("thirdThingPrompt").textContent = item.prompt;
      thirdThingStage.classList.remove("flip");
    },220);
  });
}

// Guided dyad timer
const dyadStages = [
  {label:"A 分享 · B 聆听",seconds:240,instruction:"A 分享，B 只听。不追问、不建议、不讲自己的故事。"},
  {label:"共同静默",seconds:30,instruction:"谁都不需要填补这 30 秒。就安静地待一会儿，消化刚才的话。"},
  {label:"B 分享 · A 聆听",seconds:240,instruction:"交换角色。B 分享，A 只听。不帮对方总结，也不替对方下结论。"},
  {label:"结束",seconds:60,instruction:"每个人只说一句：此刻，我想带走什么？然后一起安静片刻。"}
];
let dyadStageIndex = 0;
let dyadRemaining = dyadStages[0].seconds;
let dyadInterval = null;
let dyadRunning = false;

function formatClock(seconds){
  const safe = Math.max(0,seconds);
  return String(Math.floor(safe/60)).padStart(2,"0") + ":" + String(safe%60).padStart(2,"0");
}
function renderDyad(){
  const item = dyadStages[dyadStageIndex];
  const label = document.getElementById("dyadStageLabel");
  if(!label) return;
  label.textContent = item.label;
  document.getElementById("dyadClock").textContent = formatClock(dyadRemaining);
  document.getElementById("dyadInstruction").textContent = item.instruction;
  document.querySelectorAll("#dyadProgress span").forEach((span,index)=>{
    span.classList.toggle("active",index<=dyadStageIndex);
  });
}
function stopDyad(){
  clearInterval(dyadInterval);
  dyadInterval = null;
  dyadRunning = false;
  const start = document.getElementById("dyadStart");
  if(start) start.textContent = "继续";
}
function runDyad(){
  if(dyadRunning) return;
  dyadRunning = true;
  document.getElementById("dyadStart").textContent = "进行中";
  dyadInterval = setInterval(()=>{
    dyadRemaining--;
    if(dyadRemaining <= 0){
      if(dyadStageIndex < dyadStages.length - 1){
        dyadStageIndex++;
        dyadRemaining = dyadStages[dyadStageIndex].seconds;
      } else {
        clearInterval(dyadInterval);
        dyadInterval = null;
        dyadRunning = false;
        document.getElementById("dyadClock").textContent = "完成";
        document.getElementById("dyadStageLabel").textContent = "练习结束";
        document.getElementById("dyadInstruction").textContent = "不急着总结。让刚才的话先在心里放一放。";
        document.getElementById("dyadStart").textContent = "重新开始";
        return;
      }
    }
    renderDyad();
  },1000);
}
if(document.getElementById("dyadStart")){
  renderDyad();
  document.getElementById("dyadStart").addEventListener("click",()=>{
    if(!dyadRunning && dyadStageIndex === dyadStages.length - 1 && dyadRemaining <= 0){
      dyadStageIndex = 0;
      dyadRemaining = dyadStages[0].seconds;
      renderDyad();
    }
    runDyad();
  });
  document.getElementById("dyadPause").addEventListener("click",stopDyad);
  document.getElementById("dyadReset").addEventListener("click",()=>{
    stopDyad();
    dyadStageIndex = 0;
    dyadRemaining = dyadStages[0].seconds;
    document.getElementById("dyadStart").textContent = "开始";
    renderDyad();
  });
}
