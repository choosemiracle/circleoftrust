(() => {
  const commonTouchstones = [
    "一切出于邀请，而非要求",
    "不修复，不拯救，不建议，也不纠正他人",
    "说出自己的真实，同时尊重他人的真实",
    "信任静默，并学习从静默中领受"
  ];

  const chapters = [
    {
      id:0, code:"PRELUDE", title:"暴风雪：找回家的绳索", duration:"25–30 分钟",
      lens:"当外在与内在都变得白茫茫时，完整性并没有消失；练习是在失去方向之前，重新辨认什么能把我带回自己。",
      journal:"此刻我的“暴风雪”是什么？什么让我离自己越来越远？",
      solo:"写下三个可能成为“绳索”的人、地方或实践，并选一个今天就能触及的。",
      partner:"每人 4 分钟说“我的暴风雪 / 我的绳索”，听者不比较、不安慰、不建议；只在最后说“我听见了”。",
      closing:"今天，我愿意抓住哪一根绳索？"
    },
    {
      id:1, code:"CHAPTER I", title:"完整性：不再把自己切成两半", duration:"30–35 分钟",
      lens:"完整不是完美，而是让外在行动越来越靠近内在已经知道的东西；也包括承认自己的破碎，而不是继续把它藏起来。",
      journal:"我在哪里最有“像自己”的感觉？又在哪里最容易背离自己已经知道的真相？",
      solo:"选一个风险最小的裂缝，只写一个“靠近 1%”的行动，不做戏剧化决定。",
      partner:"每人 6 分钟讲一个“我知道，但还没有活出来”的小地方。听者只听，不帮忙找原因。",
      closing:"这周，我愿意让哪一个行动更靠近真实一点？"
    },
    {
      id:2, code:"CHAPTER II", title:"Soul 与 Role：我是什么时候开始扮演的？", duration:"35 分钟",
      lens:"童年的秘密生活常保留着真实自我的线索；成年后的角色可以帮助我们活在世界上，也可能慢慢成为盔甲。",
      journal:"8–12 岁时，我不用别人要求也会主动做什么？在哪里、怎样玩、和谁在一起时，我最自在？",
      solo:"分两栏写“别人眼中的我”与“我里面的我”，圈出一处最消耗你的落差。",
      partner:"每人 7 分钟讲台前与台后。听者最后只问：哪一部分的你最希望继续被听见？",
      closing:"今天，我重新认出了自己身上的哪一条旧线索？"
    },
    {
      id:3, code:"CHAPTER III", title:"True Self：辨认 Inner Teacher", duration:"35–40 分钟",
      lens:"Inner Teacher 不是每一个冲动，而是那个持续把我们带回真实、关系与生命力的辨认中心。",
      journal:"什么事情做完后让我更有生命力？什么事情反复让我缩小、麻木或扮演？",
      solo:"列出三条别人从小到大反复看见你身上的品质，再写：什么条件滋养它们，什么条件让它们缩回去？",
      partner:"互相只分享“我长期看见你身上的一个品质”，接收者不解释、不自谦，只记录。",
      closing:"今天，我愿意更认真听见自己的哪一种生命线索？"
    },
    {
      id:4, code:"CHAPTER IV", title:"Being Alone Together：不侵入，也不离开", duration:"30–35 分钟",
      lens:"成熟陪伴既不是替别人决定，也不是因为不知道怎么办就退开；它是在边界处持续在场。",
      journal:"回忆一次有人没有修理你，却真正陪到你的经历。对方具体做了什么？",
      solo:"写下三种你最容易“急着帮忙”的情境，并问：真正让我焦虑的是什么？",
      partner:"A 说 6 分钟，B 只听；静默 30 秒；交换。结束时只说“谢谢你让我听见这些”。",
      closing:"下一次想给建议时，我愿意先做什么？"
    },
    {
      id:5, code:"CHAPTER V", title:"创造容器：安全感来自结构", duration:"35–40 分钟",
      lens:"一个信任圈的安全，不是靠“大家人很好”，而是靠清晰边界、熟练带领、开放邀请、共同中心与有分寸的氛围。",
      journal:"回忆一个真正让你感到安全的小组。安全来自哪些具体结构，而不是哪些人格印象？",
      solo:"为一个 90 分钟小组写出：人数、开始结束、保密、退出、第三物、沉默与 Closing Circle。",
      partner:"两人互相审阅彼此的“容器设计”，只问：哪里还会让参与者猜测、被迫或失去边界？",
      closing:"如果我要带一个圈，我最需要先补哪一个结构能力？"
    },
    {
      id:6, code:"CHAPTER VI", title:"Third Things：让真相从侧面靠近", duration:"35–40 分钟",
      lens:"第三物把注意力从“我分析你”转向“我们一起面对某个共同中心”；主题明确，但答案不预设。",
      journal:"选一首诗、一张照片、一段音乐或自然物。哪一个词、画面、声音或细节最先把你留下来？",
      solo:"不要解释第三物。只写：它今天在哪里与我的生命相遇？我想靠近什么，又想躲开什么？",
      partner:"面对同一个第三物，各说 5 分钟“它在我这里发生了什么”，不讨论谁理解得对。",
      closing:"我想从这个第三物带走哪一个意象或问题？"
    },
    {
      id:7, code:"CHAPTER VII", title:"Deep Speaks to Deep：从影响别人到表达真实", duration:"35–40 分钟",
      lens:"Instrumental speech 想推动结果；expressive speech 首先让自己的内在导师被自己听见。深度聆听则把空间留给对方。",
      journal:"回忆一次别人试图“修理你”，或你急着修理别人。真正发生了什么？",
      solo:"把一句“人应该……”改写成一段具体经验：我在什么时候、什么地方、身体怎样、我其实不知道什么。",
      partner:"一人完整说 6 分钟，一人完整听。说完后先共同呼吸三次，再交换。",
      closing:"我今天说出的哪句话，比一个观点更接近真实经验？"
    },
    {
      id:8, code:"CHAPTER VIII", title:"Living the Questions：把答案还给焦点人物", duration:"40–45 分钟",
      lens:"Honest & Open Questions 的核心是放下“我知道什么对你最好”的假设。清明委员会之前，先反复练习问题质量。",
      journal:"写下一个你最近很想问别人的问题。里面有没有已经预设的答案、诊断或建议？",
      solo:"把三个“你为什么不……”改写成你自己也不知道答案的问题。",
      partner:"用一个真实但低风险的议题练习 12 分钟：焦点人物说 3 分钟，另一人只提开放问题；焦点人物可以不回答。",
      closing:"今天，我学会放下哪一种“替别人知道”的冲动？"
    },
    {
      id:9, code:"CHAPTER IX", title:"沉默与笑：让空间重新有呼吸", duration:"30–35 分钟",
      lens:"沉默不一定是连接，笑也不一定是温暖；练习是辨认什么时候它们让空间更真实，什么时候它们成为逃避或伤害。",
      journal:"我的身体怎样面对沉默？我通常会用说话、幽默、转移话题来做什么？",
      solo:"写十分钟“我：…… / 沉默：……”的对话，不要求沉默给你智慧答案。",
      partner:"每人最多 8 分钟分享；听者不抢救空白。至少共同留下一个 20 秒的沉默。",
      closing:"我今天愿意为哪一件事多留一点空白？"
    },
    {
      id:10, code:"CHAPTER X", title:"The Third Way：站在悲剧性裂隙里", duration:"40–45 分钟",
      lens:"第三条路不是折中，而是在现实与可能性之间承受张力；既不犬儒退开，也不靠强迫让世界立刻符合我们的理想。",
      journal:"我现在正站在哪一道“现实如此 / 我仍相信可能更好”的裂隙里？两端分别是什么？",
      solo:"写下一个最小但真实的行动：它既不否认现实，也不背叛你仍愿守住的价值。",
      partner:"每人 8 分钟讲一个 tragic gap；听者不鼓励乐观、不强化悲观，只问开放问题。",
      closing:"我愿意怎样在这道裂隙里多站一会，而不是立刻逃走？"
    }
  ];

  const phaseNames = ["抵达","Touchstone","章节镜头","静默与书写","实践","整合","Closing Circle"];
  let mode = "solo";
  let chapter = null;
  let phase = 0;
  let timerInterval = null;
  let timerDefault = 60;
  let timerRemaining = 60;

  const intro = document.getElementById("guidedIntro");
  const session = document.getElementById("guidedSession");
  const complete = document.getElementById("guidedComplete");
  const picker = document.getElementById("chapterPicker");

  function completedSet(){
    try { return new Set(JSON.parse(localStorage.getItem("circleoftrust-guided-complete") || "[]")); }
    catch(_){ return new Set(); }
  }

  chapters.forEach(ch => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chapter-choice";
    if (completedSet().has(ch.id)) btn.classList.add("done");
    btn.innerHTML = `<span>${String(ch.id).padStart(2,"0")} · ${ch.code}</span><b>${ch.title}</b><small>${ch.duration}</small>`;
    btn.addEventListener("click",()=>startChapter(ch.id));
    picker.appendChild(btn);
  });

  document.querySelectorAll("[data-mode]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll("[data-mode]").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      mode = btn.dataset.mode;
      document.getElementById("modeNote").textContent = mode === "solo"
        ? "适合独处、日常练习或为小组做准备。"
        : "适合两人一起练习；系统会在需要时给出轮次与聆听方式。";
    });
  });

  function startChapter(id){
    chapter = chapters.find(x=>x.id===id);
    phase = 0;
    intro.classList.add("hidden");
    complete.classList.add("hidden");
    session.classList.remove("hidden");
    document.getElementById("sessionKicker").textContent = `${String(chapter.id).padStart(2,"0")} · ${chapter.code} · ${mode === "solo" ? "个人模式" : "同伴模式"}`;
    document.getElementById("sessionTitle").textContent = chapter.title;
    buildRail();
    renderPhase();
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function buildRail(){
    const rail = document.getElementById("practiceRail");
    rail.innerHTML = "";
    phaseNames.forEach((name,i)=>{
      const div = document.createElement("div");
      div.className = "rail-step";
      div.textContent = `${i+1}. ${name}`;
      rail.appendChild(div);
    });
  }

  function stopTimer(){
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = null;
  }
  function setTimer(seconds){
    stopTimer();
    timerDefault = seconds;
    timerRemaining = seconds;
    renderTimer();
  }
  function renderTimer(){
    const m = String(Math.floor(Math.max(0,timerRemaining)/60)).padStart(2,"0");
    const s = String(Math.max(0,timerRemaining)%60).padStart(2,"0");
    document.getElementById("timerTime").textContent = m+":"+s;
  }

  function noteKey(){ return `circleoftrust-guided-note-${chapter.id}-${phase}`; }

  function renderPhase(){
    stopTimer();
    const progress = ((phase+1)/phaseNames.length)*100;
    document.getElementById("phaseCount").textContent = `${phase+1} / ${phaseNames.length}`;
    document.getElementById("phaseName").textContent = phaseNames[phase];
    document.getElementById("phaseProgress").style.width = progress+"%";
    document.querySelectorAll(".rail-step").forEach((el,i)=>{
      el.classList.toggle("active",i===phase);
      el.classList.toggle("done",i<phase);
    });

    const type = document.getElementById("practiceType");
    const title = document.getElementById("practiceTitle");
    const instruction = document.getElementById("practiceInstruction");
    const body = document.getElementById("practiceBody");
    const timerPanel = document.getElementById("timerPanel");
    const journalWrap = document.getElementById("journalWrap");
    const journal = document.getElementById("journalArea");
    const journalLabel = document.getElementById("journalLabel");

    timerPanel.classList.add("hidden");
    journalWrap.classList.add("hidden");
    body.innerHTML = "";
    journal.value = "";

    if(phase===0){
      type.textContent="ARRIVE";
      title.textContent="先从外面的世界回来";
      instruction.textContent="坐稳，脚落地。暂时不用理解本章，也不用让自己进入某种特殊状态。只注意：此刻身体在哪里？呼吸怎样？";
      body.innerHTML='<div class="prompt-card">把这一段时间当成“邀请”，不是任务。你可以随时停下，也可以跳过任何不适合自己的练习。</div>';
      timerPanel.classList.remove("hidden"); setTimer(60);
    } else if(phase===1){
      type.textContent="TOUCHSTONE";
      title.textContent="先守住边界，再进入深度";
      instruction.textContent="今天不需要记住全部 Touchstones。只读下面四条，并选择一条作为这次练习的提醒。";
      body.innerHTML='<div class="touchstone-mini">'+commonTouchstones.map(x=>`<div><b>•</b>${x}</div>`).join("")+'</div>';
    } else if(phase===2){
      type.textContent="CHAPTER LENS";
      title.textContent="这一章，真正邀请你看见什么？";
      instruction.textContent=chapter.lens;
      body.innerHTML=`<div class="prompt-card">阅读建议：回到纸质书或电子书中对应章节，只读 5–10 分钟。不要划太多重点，只留意哪一句让你停顿。</div>`;
    } else if(phase===3){
      type.textContent="SILENCE + JOURNAL";
      title.textContent="先安静，再写";
      instruction.textContent="先留两分钟安静，不急着回答。然后围绕下面的问题自由书写。";
      body.innerHTML=`<div class="prompt-card">${chapter.journal}</div>`;
      timerPanel.classList.remove("hidden"); setTimer(120);
      journalWrap.classList.remove("hidden"); journalLabel.textContent=chapter.journal;
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else if(phase===4){
      type.textContent=mode==="solo"?"PRACTICE · SOLO":"PRACTICE · PARTNER";
      title.textContent=mode==="solo"?"把这一章变成一个动作":"让关系成为练习的一部分";
      instruction.textContent=mode==="solo"?chapter.solo:chapter.partner;
      body.innerHTML=mode==="solo"
        ? '<div class="partner-box"><b>提醒</b>不要追求一次完成。选择足够小、今天就能做的实验。</div>'
        : '<div class="partner-box"><b>同伴模式原则</b>轮到谁，谁拥有完整时间；另一位不抢话、不替对方总结、不追求“帮助到他”。</div>';
      if(mode==="partner"){ timerPanel.classList.remove("hidden"); setTimer(chapter.id===8?720:480); }
      journalWrap.classList.remove("hidden"); journalLabel.textContent="练习之后，我注意到……";
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else if(phase===5){
      type.textContent="INTEGRATION";
      title.textContent="不要问“我学到了什么”，先问“什么还在我里面工作？”";
      instruction.textContent="回看刚才的书写或对话，不必总结。只找一个仍有生命力的词、一句话、一个身体感觉或一个未解决的问题。";
      body.innerHTML='<ul><li>什么让我意外？</li><li>什么让我想靠近？</li><li>什么让我想逃开或赶快解释？</li><li>这周，我愿意继续观察什么？</li></ul>';
      journalWrap.classList.remove("hidden"); journalLabel.textContent="我想继续带着的一个问题 / 意象 / 感觉";
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else {
      type.textContent="CLOSING CIRCLE";
      title.textContent="结束，不等于得出结论";
      instruction.textContent=chapter.closing;
      body.innerHTML='<div class="prompt-card">留一分钟安静。然后只说或写一句话。让尚未完成的东西保持未完成。</div>';
      timerPanel.classList.remove("hidden"); setTimer(60);
    }

    document.getElementById("prevPhase").disabled = phase===0;
    document.getElementById("nextPhase").textContent = phase===phaseNames.length-1 ? "进入 Closing Circle" : "继续";
  }

  document.getElementById("journalArea").addEventListener("input",()=>{
    if(!chapter) return;
    try{ localStorage.setItem(noteKey(),document.getElementById("journalArea").value); }catch(_){}
  });

  document.getElementById("timerStart").addEventListener("click",()=>{
    if(timerInterval) return;
    timerInterval=setInterval(()=>{
      timerRemaining--; renderTimer();
      if(timerRemaining<=0){ stopTimer(); document.getElementById("timerTime").textContent="完成"; }
    },1000);
  });
  document.getElementById("timerPause").addEventListener("click",stopTimer);
  document.getElementById("timerReset").addEventListener("click",()=>{stopTimer();timerRemaining=timerDefault;renderTimer();});

  document.getElementById("prevPhase").addEventListener("click",()=>{
    if(phase>0){ phase--; renderPhase(); window.scrollTo({top:120,behavior:"smooth"}); }
  });
  document.getElementById("nextPhase").addEventListener("click",()=>{
    if(phase<phaseNames.length-1){ phase++; renderPhase(); window.scrollTo({top:120,behavior:"smooth"}); }
    else{
      stopTimer();
      session.classList.add("hidden");
      complete.classList.remove("hidden");
      document.getElementById("completePrompt").textContent=chapter.closing;
      try{document.getElementById("closingNote").value=localStorage.getItem(`circleoftrust-guided-closing-${chapter.id}`)||"";}catch(_){}
      window.scrollTo({top:0,behavior:"smooth"});
    }
  });

  document.getElementById("closingNote").addEventListener("input",()=>{
    if(!chapter) return;
    try{localStorage.setItem(`circleoftrust-guided-closing-${chapter.id}`,document.getElementById("closingNote").value);}catch(_){}
  });

  document.getElementById("saveComplete").addEventListener("click",()=>{
    const set=completedSet(); set.add(chapter.id);
    try{localStorage.setItem("circleoftrust-guided-complete",JSON.stringify([...set]));}catch(_){}
    document.getElementById("saveComplete").textContent="已完成";
  });

  document.getElementById("exitSession").addEventListener("click",()=>{
    stopTimer(); session.classList.add("hidden"); complete.classList.add("hidden"); intro.classList.remove("hidden"); window.scrollTo({top:0,behavior:"smooth"});
  });

  const params=new URLSearchParams(location.search);
  const requested=Number(params.get("chapter"));
  if(Number.isInteger(requested) && requested>=0 && requested<=10) startChapter(requested);
})();