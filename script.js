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
