(() => {
  const commonTouchstones = [
    "一切出于邀请，而非要求",
    "不修复，不拯救，不建议，也不纠正他人",
    "说出自己的真实，同时尊重他人的真实",
    "信任静默，并学习从静默中领受"
  ];

  const chapters = [
    {
      id:0, code:"序章", title:"世界的暴风雪：在迷失中寻找回家的绳索", duration:"25–30 分钟",
      lens:"当外面的世界很乱、自己心里也看不清方向时，那份真实的自己并没有消失，只是暂时听不清。这个练习要找的，是那些能帮助我重新安定下来的线索。",
      journal:"此刻我的“暴风雪”是什么？什么让我离自己越来越远？",
      solo:"写下三个可能成为“绳索”的人、地方或习惯，再选一个今天就能联系、去到或开始做的。",
      partner:"每人 4 分钟说“我的暴风雪 / 我的绳索”，听者不比较、不安慰、不建议；只在最后说“我听见了”。",
      closing:"今天，我愿意抓住哪一根绳索？"
    },
    {
      id:1, code:"第 1 章", title:"完整生命的样子：不再把自己活成两半", duration:"30–35 分钟",
      lens:"完整不是完美，而是让自己的行动越来越符合心里真正相信的东西；也包括承认脆弱和失误，而不是继续把它们藏起来。",
      journal:"我在哪里最有“像自己”的感觉？又在哪里最容易背离自己已经知道的真相？",
      solo:"从一个影响不大的小地方开始，只写下一个今天就能做到的小改变，不做戏剧化决定。",
      partner:"每人 6 分钟讲一个“我知道，但还没有活出来”的小地方。听者只听，不帮忙找原因。",
      closing:"这周，我愿意在哪一件小事上，做得更符合自己真正相信的东西？"
    },
    {
      id:2, code:"第 2 章", title:"跨越内外的鸿沟：我是什么时候开始越来越会“扮演”的？", duration:"35 分钟",
      lens:"童年那些只属于自己的兴趣和小世界，常常保留着很多真实线索；成年后的角色当然有用，但有时也会慢慢变成一层盔甲。",
      journal:"8–12 岁时，我不用别人要求也会主动做什么？在哪里、怎样玩、和谁在一起时，我最自在？",
      solo:"分两栏写“别人眼中的我”与“我心里的我”，圈出一处最让你疲惫的落差。",
      partner:"每人 7 分钟讲台前与台后。听者最后只问：哪一部分的你最希望继续被听见？",
      closing:"今天，我重新看见了自己身上的哪一个老早就有的特点？"
    },
    {
      id:3, code:"第 3 章", title:"探寻真实自我：怎样听见内在导师", duration:"35–40 分钟",
      lens:"“内在导师”不是脑子里冒出的每一个冲动。它指的是：经过时间、关系和现实的检验，我们慢慢听清什么对自己真正重要、什么值得忠于。",
      journal:"做什么时，我最有精神、最像自己？哪些事情做完后，我常常变得麻木、疲惫，或需要继续扮演？",
      solo:"写下三种别人从小到大反复在你身上看见的品质，再写：在什么情况下它们更容易出现？又在什么情况下会被你收起来？",
      partner:"互相只分享“我长期看见你身上的一个品质”，接收者不解释、不自谦，只记录。",
      closing:"今天，我愿意更认真留意自己身上哪一个反复出现的特点？"
    },
    {
      id:4, code:"第 4 章", title:"相伴而不相扰：既不侵入，也不离开", duration:"30–35 分钟",
      lens:"成熟的陪伴，既不是替别人决定，也不是因为“不知道怎么办”就退开；而是我愿意陪在这里，同时让你自己去想、去感受、去决定。",
      journal:"回忆一次有人没有急着替你解决问题，却真正陪到你的经历。对方具体做了什么？",
      solo:"写下三种你最容易“急着帮忙”的情境，并问：真正让我焦虑的是什么？",
      partner:"A 说 6 分钟，B 只听；静默 30 秒；交换。结束时只说“谢谢你让我听见这些”。",
      closing:"下一次想给建议时，我愿意先做什么？"
    },
    {
      id:5, code:"第 5 章", title:"一个让人安心的小组，是怎样慢慢建立起来的？", duration:"35–40 分钟",
      lens:"一个信任圈的安全，不只是因为“大家人很好”，而是由清楚的边界、成熟的带领、参与的自由、共同中心和整体氛围一点点建立起来。",
      journal:"回忆一个真正让你感到安心的小组。是哪些具体做法让你安心，而不只是因为“大家人都很好”？",
      solo:"为一个 90 分钟小组写出：人数、开始结束、保密、退出、第三物、沉默与收束分享。",
      partner:"两人互相看看彼此的小组设计，只问：还有哪里会让参与者不知道规则、感到被迫，或不清楚自己的选择？",
      closing:"如果我要带一个圈，我最需要先补上的一项带领能力是什么？"
    },
    {
      id:6, code:"第 6 章", title:"不直接追问自己：第三物为什么有用？", duration:"35–40 分钟",
      lens:"第三物把注意力从“我来分析你”转向“我们一起面对同一个东西”。我们知道自己在探索什么，却不预设每个人应该得到什么答案。",
      journal:"选一首诗、一张照片、一段音乐或一个自然物。哪个词、画面、声音或细节最先让你停了下来？",
      solo:"不要急着解释第三物。只写：它让我想起了生活里的什么？我想多看一会儿什么，又下意识想躲开什么？",
      partner:"面对同一个第三物，各说 5 分钟“它让我想起了什么、感受到了什么”，不讨论谁理解得更对。",
      closing:"我想从这个第三物带走哪一个意象或问题？"
    },
    {
      id:7, code:"第 7 章", title:"少一点有用的话，多一点真实的话", duration:"35–40 分钟",
      lens:"有些话是为了推动结果、说服或解决问题；有些话则只是如实说出自己此刻真正的感受和经验。深度聆听，就是给这种更真实的话留出机会。",
      journal:"回忆一次别人急着替你解决问题，或你急着替别人解决问题的经历。真正发生了什么？",
      solo:"把一句“人应该……”改写成一段具体经历：什么时候、什么地方发生了什么？我当时有什么感受？还有什么其实并不确定？",
      partner:"一人完整说 6 分钟，一人完整听。说完后先共同呼吸三次，再交换。",
      closing:"我今天说出的哪句话，最贴近自己的真实经历和感受？"
    },
    {
      id:8, code:"第 8 章", title:"活在问题里：问问题，但不替对方回答", duration:"40–45 分钟",
      lens:"诚实而开放的问题，核心是放下“我知道什么对你最好”的假设。做完整的澄明小组之前，先练习怎样问一个自己也不知道答案的问题。",
      journal:"写下一个你最近很想问别人的问题。里面有没有已经预设的答案、诊断或建议？",
      solo:"把三个“你为什么不……”改写成你自己也不知道答案的问题。",
      partner:"用一个真实、但不太私密、压力较小的话题练习 12 分钟：焦点成员说 3 分钟，另一人只提开放问题；焦点成员可以不回答。",
      closing:"今天，我最需要放下哪一种“替别人下结论”的冲动？"
    },
    {
      id:9, code:"第 9 章", title:"笑声与静默：深度不等于一直沉重", duration:"30–35 分钟",
      lens:"安静不一定表示彼此靠近，笑声也不一定表示轻松。我们要分辨：什么时候它们让人更自在、更真实，什么时候又成了逃避、掩饰或伤害。",
      journal:"一安静下来，我的身体和情绪会有什么反应？我通常会不会马上说话、开玩笑或转移话题？",
      solo:"写十分钟“我：…… / 沉默：……”的对话。不需要把沉默写成一个会给你答案的“智者”。",
      partner:"每人最多分享 8 分钟；听者不要一有空白就急着接话。至少一起留出一次 20 秒的安静。",
      closing:"我今天愿意为哪一件事多留一点空白？"
    },
    {
      id:10, code:"第 10 章", title:"走第三条路：在现实与可能之间站稳", duration:"40–45 分钟",
      lens:"第三条路不是和稀泥，而是在“现实就是这样”和“我仍希望它可以更好”之间保持清醒：既不因为失望而变得犬儒，也不靠强迫让别人立刻接受我们的理想。",
      journal:"我现在面对的哪件事，正卡在“现实就是这样”和“我仍希望它可以更好”之间？",
      solo:"写下一个很小、但真实可做的行动：它既不假装现实不存在，也不放弃你仍然看重的东西。",
      partner:"每人 8 分钟讲一件“现实不理想，但我仍不愿放弃希望”的事；听者不急着鼓励，也不把问题说得更糟，只问开放问题。",
      closing:"面对这件事，我愿意先看清哪一步，而不是马上逃开或下结论？"
    }
  ];

  const phaseNames = ["先安静下来","基石提醒","本章重点","静默与书写","练习","回看","结束前"];
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
        : "适合两人一起练习；到需要交换角色时，页面会提示轮次和聆听方式。";
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
      type.textContent="先安静下来";
      title.textContent="先让自己安静下来";
      instruction.textContent="坐稳，脚落地。暂时不用理解本章，也不用刻意放空。只留意脚底、身体和呼吸此刻是什么感觉。";
      body.innerHTML='<div class="prompt-card">把这一段时间当成“邀请”，不是任务。你可以随时停下，也可以跳过任何不适合自己的练习。</div>';
      timerPanel.classList.remove("hidden"); setTimer(60);
    } else if(phase===1){
      type.textContent="基石提醒";
      title.textContent="先把规则说清楚，再开始练习";
      instruction.textContent="今天不需要记住全部 11 条基石。只读下面四条，并选择一条作为这次练习的提醒。";
      body.innerHTML='<div class="touchstone-mini">'+commonTouchstones.map(x=>`<div><b>•</b>${x}</div>`).join("")+'</div>';
    } else if(phase===2){
      type.textContent="本章重点";
      title.textContent="这一章最想提醒我们什么？";
      instruction.textContent=chapter.lens;
      body.innerHTML=`<div class="prompt-card">阅读建议：回到纸质书或电子书中的对应章节，只读 5–10 分钟。不要划太多重点，只留意哪一句让你不由得停下来。</div>`;
    } else if(phase===3){
      type.textContent="静默与书写";
      title.textContent="先安静，再写";
      instruction.textContent="先留两分钟安静，不急着回答。然后围绕下面的问题自由书写。";
      body.innerHTML=`<div class="prompt-card">${chapter.journal}</div>`;
      timerPanel.classList.remove("hidden"); setTimer(120);
      journalWrap.classList.remove("hidden"); journalLabel.textContent=chapter.journal;
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else if(phase===4){
      type.textContent=mode==="solo"?"个人练习":"同伴练习";
      title.textContent=mode==="solo"?"今天先试一件小事":"和同伴一起练";
      instruction.textContent=mode==="solo"?chapter.solo:chapter.partner;
      body.innerHTML=mode==="solo"
        ? '<div class="partner-box"><b>提醒</b>不用想着一次就做对或做完。选一件足够小、今天就能试一试的事。</div>'
        : '<div class="partner-box"><b>同伴练习原则</b>轮到谁，就让谁把话说完；另一位不抢话、不替对方总结，也不急着证明自己“帮到了他”。</div>';
      if(mode==="partner"){ timerPanel.classList.remove("hidden"); setTimer(chapter.id===8?720:480); }
      journalWrap.classList.remove("hidden"); journalLabel.textContent="练习之后，我注意到……";
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else if(phase===5){
      type.textContent="回看";
      title.textContent="先别急着总结“我学到了什么”";
      instruction.textContent="回看刚才的书写或对话，只留意：有什么词、一句话、一个身体感觉，或一个还没想清楚的问题，仍然留在心里？";
      body.innerHTML='<ul><li>什么让我意外？</li><li>什么让我还想继续看一看？</li><li>什么让我下意识想躲开或赶快解释？</li><li>这周，我愿意继续留意什么？</li></ul>';
      journalWrap.classList.remove("hidden"); journalLabel.textContent="我想继续记着的一个问题 / 意象 / 感觉";
      try{ journal.value=localStorage.getItem(noteKey())||""; }catch(_){}
    } else {
      type.textContent="结束前";
      title.textContent="结束，不等于得出结论";
      instruction.textContent=chapter.closing;
      body.innerHTML='<div class="prompt-card">留一分钟安静。然后只说或写一句话。还没想明白的，也可以先不想明白。</div>';
      timerPanel.classList.remove("hidden"); setTimer(60);
    }

    document.getElementById("prevPhase").disabled = phase===0;
    document.getElementById("nextPhase").textContent = phase===phaseNames.length-1 ? "到收尾" : "继续";
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
