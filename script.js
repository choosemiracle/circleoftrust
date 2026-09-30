const lessons = [
  {
    label:"第一步",
    title:"先认识一个核心原则：不要“修理”别人",
    body:"当一个人分享困惑时，我们很容易马上给建议。信任圈练习的是另一种回应：暂时相信，对方内在也许已经拥有某种尚未说清楚的智慧。",
    prompt:"最近一次有人向你倾诉时，你最先做的是倾听，还是给建议？"
  },
  {
    label:"第二步",
    title:"体验一分钟静默",
    body:"静默不是空白，而是让内在较微弱的声音有机会被听见。不要追求放空，只要注意此刻身体、呼吸和情绪正在发生什么。",
    prompt:"当外界安静下来时，你最先注意到的是身体、情绪，还是脑中的念头？"
  },
  {
    label:"第三步",
    title:"练习提出开放而诚实的问题",
    body:"好的问题不是为了把对方带到你想要的答案，而是帮助他更深入地听见自己。少问“为什么不”，多问“当你想到这件事时，内在发生了什么？”",
    prompt:"把“你为什么不辞职？”改写成一个没有预设答案的开放问题。"
  },
  {
    label:"第四步",
    title:"让另一个人完整地说五分钟",
    body:"真正的聆听需要克制自己插话、共鸣、讲自己的故事。五分钟里，只做一件事：陪对方待在他自己的经验中。",
    prompt:"当你不能插话时，你会不会感到焦虑？你最想做什么？"
  },
  {
    label:"第五步",
    title:"把技巧变成一种关系品质",
    body:"信任圈真正改变人的地方，不在某一次练习，而在于你开始把不评判、允许沉默、相信内在导师的态度带进日常关系。",
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
  {title:"给予欢迎，也接受欢迎",body:"让彼此知道：你可以带着真实的自己来到这里，不需要先变得“更好”才值得被接纳。",practice:"今天，我怎样让一个人感觉自己被真正欢迎？"},
  {title:"尽可能完整地在场",body:"不只带来确定、自信和成功，也允许怀疑、害怕、失败和不知道一起出现。",practice:"此刻，我有哪一部分还没有真正来到这里？"},
  {title:"邀请，而不是要求",body:"参与、分享、沉默都可以是一种选择。安全感来自“不必证明自己愿意参与”。",practice:"把“你来说说”改成“如果你愿意，可以……”"},
  {title:"说出自己的真实，也尊重他人的真实",body:"用“我”的经验说话，不替别人解释，也不把差异变成辩论。",practice:"把一个“你就是……”改写成“当我经历……时，我感到……”"},
  {title:"不修理、不拯救、不建议、不纠正",body:"暂时相信别人并不需要我们立即给答案。先守住空间，让对方自己的理解有机会出现。",practice:"下一次想给建议时，先多听 30 秒。"},
  {title:"用诚实而开放的问题回应",body:"问题不是为了验证我们的判断，而是帮助对方进入更深的自我聆听。",practice:"问一个你自己也不知道答案的问题。"},
  {title:"困难时，转向好奇",body:"当判断和防御升起，不急着反击；先问：这里发生了什么？我能否保持好奇？",practice:"把“怎么会这样？”变成“我好奇这里发生了什么？”"},
  {title:"留意自己的内在导师",body:"别人、诗歌、故事和静默都可能唤起什么，但真正需要辨认的是你内在正在回应什么。",practice:"此刻哪句话在我心里停留得最久？"},
  {title:"信任静默，也向静默学习",body:"沉默不是需要马上填补的空缺。它本身也是一种认识方式。",practice:"有人说完后，先共同安静三次呼吸。"},
  {title:"守护深度保密",body:"他人的故事属于他本人。离开圆圈后，可以带走自己的领悟，但不带走别人的私人内容。",practice:"分享前先清楚说明保密边界。"},
  {title:"相信可能性仍会继续生长",body:"一次对话不必当场产生结论。很多重要的种子会在离开之后继续发芽。",practice:"结束时不问“解决了吗”，而问“你想带走什么？”"}
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
    options:["你是不是其实害怕冲突？","当你想到“拒绝”这件事时，内在最先出现什么？","你有没有试过先冷静几天？"],
    correct:1,
    note:"这个问法没有替对方解释原因，而是把注意力带回他的真实经验。"
  },
  {
    source:"“你是不是该换工作了？”",
    options:["如果离开和留下都不急着决定，两种画面分别带给你什么感觉？","你觉得下一份工作会不会更适合你？","你为什么还要继续忍？"],
    correct:0,
    note:"开放问题让两种可能都能被探索，而不是暗示“离开”才是正确方向。"
  },
  {
    source:"“你有没有想过为自己活一次？”",
    options:["你是不是一直太在意别人？","如果暂时不用回应任何人的期待，你会听见什么？","你最想摆脱谁的影响？"],
    correct:1,
    note:"它没有把“为自己活”的定义塞给对方，而是邀请对方自己辨认。"
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
  {symbol:"✦",type:"诗歌",prompt:"找一句让你停顿的诗。不要解释作者，只说：它在我身上唤起了什么？"},
  {symbol:"◫",type:"图像",prompt:"看一幅画或一张照片一分钟。哪一个细节最先把你留下来？"},
  {symbol:"⌁",type:"自然物",prompt:"选一片叶子、石头或一杯水。它此刻像你生命中的什么？"},
  {symbol:"▶",type:"电影片段",prompt:"看一个不超过三分钟的片段。哪一个人物动作或沉默让你有回应？"},
  {symbol:"♪",type:"音乐",prompt:"听一段音乐，不解释。只留意身体哪里最先有变化。"},
  {symbol:"◇",type:"故事",prompt:"读一个很短的故事。你更靠近哪个人物？又更想远离哪个人物？"}
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
  {label:"共同静默",seconds:30,instruction:"谁都不需要填补这 30 秒。只让刚才听见的东西沉淀。"},
  {label:"B 分享 · A 聆听",seconds:240,instruction:"交换角色。B 分享，A 只听。继续相信对方有自己的内在导师。"},
  {label:"结束",seconds:60,instruction:"每个人只说一句：此刻，我想带走什么？然后以安静结束。"}
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
        document.getElementById("dyadStageLabel").textContent = "圆满结束";
        document.getElementById("dyadInstruction").textContent = "不急着总结。让这次聆听在之后继续工作。";
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
