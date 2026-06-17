/* ===== Hành Trình Tiếng Nhật — app.js (vanilla, no build step) ===== */
(function(){
"use strict";
var D = window.DATA;
var app = document.getElementById('app');

/* ---------- text-to-speech (Japanese) ---------- */
var jaVoice = null;
function pickVoice(){
  var vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  jaVoice = vs.find(function(v){return /ja[-_]JP/i.test(v.lang);}) ||
            vs.find(function(v){return /^ja/i.test(v.lang);}) || null;
}
if(window.speechSynthesis){
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function jpOnly(s){ // strip romaji/vietnamese, keep japanese for cleaner speech
  var m = s.match(/[\u3040-\u30ff\u3400-\u9fff々ー]+/g);
  return m ? m.join('') : s;
}
function speak(text){
  if(!window.speechSynthesis){ toast('Trình duyệt không hỗ trợ phát âm'); return; }
  var t = jpOnly(text);
  if(!t) return;
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(t);
  u.lang = 'ja-JP'; u.rate = 0.9; u.pitch = 1.0;
  if(jaVoice) u.voice = jaVoice;
  speechSynthesis.speak(u);
}

/* ---------- progress (localStorage) ---------- */
var LESSONS = ['hiragana','katakana','greetings','grammar','vocab','kanji'];
function loadP(){
  try{ return JSON.parse(localStorage.getItem('htn_progress')||'{}'); }
  catch(e){ return {}; }
}
function saveP(p){ try{ localStorage.setItem('htn_progress', JSON.stringify(p)); }catch(e){} }
function isDone(id){ var p=loadP(); return !!(p.done && p.done[id]); }
function setDone(id){ var p=loadP(); p.done=p.done||{}; p.done[id]=true; saveP(p); }
function quizBest(v){ var p=loadP(); if(v!=null){ if(!p.quizBest||v>p.quizBest){p.quizBest=v; saveP(p);} } return p.quizBest||0; }
function progressPct(){
  var p=loadP(), n=0; LESSONS.forEach(function(l){ if(p.done&&p.done[l]) n++; });
  return Math.round(n/LESSONS.length*100);
}

/* ---------- small helpers ---------- */
function el(html){ var d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function esc(s){ return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function toast(msg){
  var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(function(){t.classList.remove('show');},1800);
}
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;} return a; }
function markDoneBtn(id){
  var done = isDone(id);
  return '<div class="mark-done"><button class="btn '+(done?'ghost':'')+'" data-done="'+id+'">'+
         (done?'✓ Đã hoàn thành':'Đánh dấu đã học xong ✓')+'</button></div>';
}

/* ---------- HOME ---------- */
function viewHome(){
  var pct = progressPct();
  var R=52, C=2*Math.PI*R, off=C*(1-pct/100);
  var cards = [
    {h:'#hiragana',ic:'🌸',t:'Hiragana',jp:'ひらがな',p:'46 chữ cơ bản + biến âm. Bấm để nghe phát âm.'},
    {h:'#katakana',ic:'🗾',t:'Katakana',jp:'カタカナ',p:'Chữ cho từ mượn nước ngoài.'},
    {h:'#greetings',ic:'👋',t:'Chào hỏi',jp:'あいさつ',p:'Câu giao tiếp cơ bản hằng ngày.'},
    {h:'#grammar',ic:'📘',t:'Ngữ pháp N5',jp:'ぶんぽう',p:'15 mẫu câu cốt lõi, có ví dụ.'},
    {h:'#vocab',ic:'🍙',t:'Từ vựng',jp:'たんご',p:'190 từ N5 theo chủ đề, có tìm kiếm.'},
    {h:'#kanji',ic:'🎎',t:'Kanji N5',jp:'かんじ',p:'98 chữ Hán cốt lõi, kèm âm Hán-Việt.'},
    {h:'#flashcards',ic:'🃏',t:'Flashcard',jp:'フラッシュ',p:'Luyện nhớ từ vựng bằng thẻ lật.'},
    {h:'#quiz',ic:'✏️',t:'Trắc nghiệm',jp:'クイズ',p:'Kiểm tra ngữ pháp N5. Điểm cao nhất: '+quizBest()+'%'}
  ];
  var html = ''+
  '<div class="view">'+
    '<div class="hero">'+
      '<div class="htext">'+
        '<h1>Học tiếng Nhật từ A đến N5 🌸</h1>'+
        '<div class="jp-big">にほんご の たび</div>'+
        '<p>Bộ tự học dành cho người Việt: bảng chữ cái, phát âm, ngữ pháp, từ vựng và kanji — tất cả trong một trang, có phát âm và luyện tập.</p>'+
        '<a href="#hiragana" class="btn">Bắt đầu học ngay →</a>'+
      '</div>'+
      '<div class="progress-ring">'+
        '<svg width="118" height="118"><circle cx="59" cy="59" r="'+R+'" fill="none" stroke="#FFD9E3" stroke-width="10"/>'+
        '<circle cx="59" cy="59" r="'+R+'" fill="none" stroke="#FF7CA3" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+off+'"/></svg>'+
        '<div class="pv"><b>'+pct+'%</b><span>tiến độ</span></div>'+
      '</div>'+
    '</div>'+
    '<div class="cards">'+ cards.map(function(c){
        var done = c.h.replace('#','');
        var badge = (LESSONS.indexOf(done)>=0 && isDone(done)) ? '<span class="badge">✓ xong</span>' : '';
        return '<a class="lcard" href="'+c.h+'">'+badge+'<span class="ic">'+c.ic+'</span>'+
               '<h3>'+c.t+'</h3><div class="jp-s">'+c.jp+'</div><p>'+c.p+'</p></a>';
      }).join('')+'</div>'+
  '</div>';
  return el(html);
}

/* ---------- KANA (hiragana / katakana) ---------- */
var kanaState = {hiragana:'basic', katakana:'basic'};
function viewKana(which){
  var meta = which==='hiragana'
    ? {chip:'CHƯƠNG 1',title:'Hiragana',jp:'ひらがな',accent:'pink',lead:'Bảng chữ mềm mại, nền tảng đầu tiên. Bấm vào ô bất kỳ để nghe phát âm.'}
    : {chip:'CHƯƠNG 2',title:'Katakana',jp:'カタカナ',accent:'sky',lead:'Chữ góc cạnh, dùng cho từ mượn nước ngoài. Bấm để nghe.'};
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML =
    '<div class="page-head"><span class="chip '+meta.accent+'">'+meta.chip+'</span>'+
    '<h1 class="title">'+meta.title+'</h1><div class="subtitle">'+meta.jp+'</div>'+
    '<p class="lead">'+meta.lead+'</p></div>'+
    '<div class="kana-tabs">'+
      '<button data-kt="basic">Cơ bản (46)</button>'+
      '<button data-kt="dakuten">Biến âm (゛゜)</button>'+
      '<button data-kt="yoon">Âm ghép (ようおん)</button>'+
      '<a class="pill" href="#kana-quiz/'+which+'">🎯 Luyện kana</a>'+
    '</div>'+
    '<div class="toggle-row"><label class="switch"><input type="checkbox" id="romTgl"> Ẩn romaji (tự kiểm tra)</label></div>'+
    '<div id="kanaArea"></div>'+
    markDoneBtn(which);

  function renderArea(){
    var set = kanaState[which];
    var data = D.kana[which][set];
    var area = wrap.querySelector('#kanaArea');
    var cls = set==='basic' ? 'kgrid' : 'kgrid small';
    var html = '<div class="'+cls+'">';
    if(set==='basic'){
      // arrange 46 into rows of 5 with gaps for や/わ rows handled simply by sequence
      data.forEach(function(k){
        html += cell(k, true);
      });
    } else {
      data.forEach(function(k){ html += cell(k, false); });
    }
    html += '</div>';
    area.innerHTML = html;
    if(wrap.querySelector('#romTgl').checked) area.firstChild.classList.add('hide-rom');
  }
  function cell(k, withEx){
    return '<div class="kcell" data-say="'+esc(k.jp)+'"><span class="spk">🔊</span>'+
      '<div class="big jp">'+esc(k.jp)+'</div>'+
      '<div class="rom">'+esc(k.romaji)+'</div>'+
      (withEx?'<div class="exw">'+esc(k.ex||'')+'</div>':'')+'</div>';
  }
  // tab active state
  function syncTabs(){
    wrap.querySelectorAll('.kana-tabs button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-kt')===kanaState[which]);
    });
  }
  wrap.addEventListener('click', function(e){
    var tab = e.target.closest('[data-kt]');
    if(tab){ kanaState[which]=tab.getAttribute('data-kt'); syncTabs(); renderArea(); return; }
    var c = e.target.closest('.kcell');
    if(c){ speak(c.getAttribute('data-say')); }
  });
  wrap.addEventListener('change', function(e){
    if(e.target.id==='romTgl'){
      var g = wrap.querySelector('#kanaArea').firstChild;
      if(g) g.classList.toggle('hide-rom', e.target.checked);
    }
  });
  syncTabs(); renderArea();
  return wrap;
}

/* ---------- GREETINGS ---------- */
function viewGreet(){
  var wrap = el('<div class="view"></div>');
  var html = '<div class="page-head"><span class="chip mint">CHƯƠNG 4</span>'+
    '<h1 class="title">Chào hỏi & Giao tiếp</h1><div class="subtitle">あいさつ</div>'+
    '<p class="lead">Những câu giao tiếp thiết yếu nhất. Bấm vào câu để nghe cách đọc.</p></div>';
  D.greet.forEach(function(g){
    html += '<h2 class="sec">'+esc(g.title)+'</h2><div class="vgrid">';
    g.items.forEach(function(it){
      html += vrow(it);
    });
    html += '</div>';
  });
  html += markDoneBtn('greetings');
  wrap.innerHTML = html;
  bindRows(wrap);
  return wrap;
}
function vrow(it){
  return '<div class="vrow" data-say="'+esc(it.jp)+'">'+
    '<div><div class="w jp">'+esc(it.jp)+'</div><div class="r">'+esc(it.romaji)+'</div></div>'+
    '<div class="m">'+esc(it.vi)+'</div><span class="spk">🔊</span></div>';
}
function bindRows(wrap){
  wrap.addEventListener('click', function(e){
    var r=e.target.closest('.vrow'); if(r) speak(r.getAttribute('data-say'));
    var d=e.target.closest('[data-done]'); // handled globally too
  });
}

/* ---------- GRAMMAR ---------- */
function viewGrammar(){
  var wrap = el('<div class="view"></div>');
  var html = '<div class="page-head"><span class="chip purple">CHƯƠNG 5</span>'+
    '<h1 class="title">Ngữ pháp N5</h1><div class="subtitle">ぶんぽう</div>'+
    '<p class="lead">15 mẫu câu cốt lõi của trình độ N5. Bấm vào ví dụ để nghe phát âm.</p></div>';
  D.grammar.forEach(function(g){
    html += '<div class="gcard" style="border-left-color:var(--'+g.accent+')">'+
      '<h3><span class="chip '+g.accent+'">'+esc(g.chip)+'</span>'+esc(g.title)+'</h3>'+
      '<div class="formula jp">'+esc(g.formula)+'</div>'+
      '<ul>'+g.points.map(function(p){return '<li>'+p+'</li>';}).join('')+'</ul>'+
      g.examples.map(function(e){
        return '<div class="exline" data-say="'+esc(e.jp)+'">'+
          '<div><div class="ej jp">'+esc(e.jp)+'</div>'+
          '<div class="er">'+esc(e.romaji)+'</div>'+
          '<div class="ev">'+esc(e.vi)+'</div></div><span class="spk">🔊</span></div>';
      }).join('')+
    '</div>';
  });
  html += markDoneBtn('grammar');
  wrap.innerHTML = html;
  wrap.addEventListener('click', function(e){
    var x=e.target.closest('.exline'); if(x) speak(x.getAttribute('data-say'));
  });
  return wrap;
}

/* ---------- VOCAB ---------- */
function viewVocab(){
  var wrap = el('<div class="view"></div>');
  var head = '<div class="page-head"><span class="chip pink">CHƯƠNG 6</span>'+
    '<h1 class="title">Từ vựng theo chủ đề</h1><div class="subtitle">たんご</div>'+
    '<p class="lead">190 từ N5 thiết yếu. Gõ để tìm theo nghĩa, romaji hoặc chữ Nhật. Bấm để nghe.</p></div>'+
    '<input class="search" id="vsearch" placeholder="🔍 Tìm từ (vd: ăn, taberu, たべる)…">';
  var body = '<div id="vbody"></div>';
  wrap.innerHTML = head + body + markDoneBtn('vocab');

  function render(q){
    q=(q||'').toLowerCase().trim();
    var out='';
    D.vocab.forEach(function(sec){
      var items = sec.items.filter(function(it){
        if(!q) return true;
        return (it.jp.toLowerCase().indexOf(q)>=0)||(it.romaji.toLowerCase().indexOf(q)>=0)||(it.vi.toLowerCase().indexOf(q)>=0);
      });
      if(!items.length) return;
      out += '<h2 class="sec">'+esc(sec.title)+'</h2><div class="vgrid">'+
             items.map(vrow).join('')+'</div>';
    });
    if(!out) out='<p class="lead" style="margin-top:20px">Không tìm thấy từ nào khớp 🍵</p>';
    wrap.querySelector('#vbody').innerHTML = out;
  }
  render('');
  wrap.addEventListener('input', function(e){ if(e.target.id==='vsearch') render(e.target.value); });
  wrap.addEventListener('click', function(e){
    var r=e.target.closest('.vrow'); if(r) speak(r.getAttribute('data-say'));
  });
  return wrap;
}

/* ---------- KANJI ---------- */
function viewKanji(){
  var wrap = el('<div class="view"></div>');
  var html = '<div class="page-head"><span class="chip yellow">CHƯƠNG 7</span>'+
    '<h1 class="title">Kanji N5</h1><div class="subtitle">かんじ</div>'+
    '<p class="lead">98 chữ Hán cốt lõi. Người Việt có lợi thế Hán-Việt! Bấm vào chữ để nghe đọc.</p></div>';
  D.kanji.forEach(function(g){
    html += '<h2 class="sec">'+esc(g.title)+'</h2><div class="kjgrid">';
    g.items.forEach(function(k){
      html += '<div class="kjcard" data-say="'+esc(k.ch)+'">'+
        '<div class="ch jp">'+esc(k.ch)+'</div>'+
        '<div class="info"><div class="mean">'+esc(k.mean)+'</div>'+
        '<div class="yomi"><b class="on">On:</b> <span class="jp">'+esc(k.on)+'</span></div>'+
        '<div class="yomi"><b class="kun">Kun:</b> <span class="jp">'+esc(k.kun)+'</span></div>'+
        '<div class="smp jp">'+k.samples.map(esc).join('<br>')+'</div></div></div>';
    });
    html += '</div>';
  });
  html += markDoneBtn('kanji');
  wrap.innerHTML = html;
  wrap.addEventListener('click', function(e){
    var c=e.target.closest('.kjcard'); if(c) speak(c.getAttribute('data-say'));
  });
  return wrap;
}

/* ---------- FLASHCARDS (vocab) ---------- */
function viewFlash(){
  var pool = [];
  D.vocab.forEach(function(s){ s.items.forEach(function(it){ pool.push(it); }); });
  pool = shuffle(pool);
  var i=0, flipped=false;
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML = '<div class="page-head"><span class="chip pink">LUYỆN TẬP</span>'+
    '<h1 class="title">Flashcard từ vựng</h1><div class="subtitle">フラッシュカード</div>'+
    '<p class="lead">Nhìn chữ Nhật, đoán nghĩa, rồi bấm thẻ để lật. 🔊 nghe phát âm.</p></div>'+
    '<div class="center-wrap">'+
      '<div class="flash" id="flash"></div>'+
      '<div class="flash-hint" id="fcount"></div>'+
      '<div class="row-btns">'+
        '<button class="btn ghost" id="fSpeak">🔊 Nghe</button>'+
        '<button class="btn" id="fNext">Thẻ tiếp →</button>'+
        '<button class="btn ghost" id="fShuffle">🔀 Xáo trộn</button>'+
      '</div>'+
    '</div>';
  function draw(){
    var c=pool[i];
    var f=wrap.querySelector('#flash');
    f.innerHTML = flipped
      ? '<div class="from">'+esc(c.romaji)+'</div><div class="fvi">'+esc(c.vi)+'</div>'
      : '<div class="fbig jp">'+esc(c.jp)+'</div>';
    wrap.querySelector('#fcount').textContent = 'Thẻ '+(i+1)+' / '+pool.length+' · bấm thẻ để lật';
  }
  wrap.addEventListener('click', function(e){
    if(e.target.closest('#flash')){ flipped=!flipped; draw(); }
    else if(e.target.closest('#fNext')){ i=(i+1)%pool.length; flipped=false; draw(); }
    else if(e.target.closest('#fShuffle')){ pool=shuffle(pool); i=0; flipped=false; draw(); toast('Đã xáo trộn'); }
    else if(e.target.closest('#fSpeak')){ speak(pool[i].jp); }
  });
  draw();
  return wrap;
}

/* ---------- KANA QUIZ ---------- */
function viewKanaQuiz(which){
  which = which||'hiragana';
  var all = D.kana[which].basic.concat(D.kana[which].dakuten);
  var pool = shuffle(all).slice(0, 12);
  var i=0, score=0, answered=false;
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML = '<div class="page-head"><span class="chip mint">LUYỆN KANA</span>'+
    '<h1 class="title">Đố '+(which==='hiragana'?'Hiragana':'Katakana')+'</h1>'+
    '<p class="lead">Nhìn chữ, chọn cách đọc đúng.</p></div>'+
    '<div class="quizbox" id="qbox"></div>';
  function q(){
    if(i>=pool.length) return done();
    answered=false;
    var cur=pool[i];
    var wrong = shuffle(all.filter(function(x){return x.romaji!==cur.romaji;})).slice(0,3);
    var opts = shuffle([cur].concat(wrong));
    var box=wrap.querySelector('#qbox');
    box.innerHTML = '<div class="qbar"><i style="width:'+(i/pool.length*100)+'%"></i></div>'+
      '<div class="qnum">Câu '+(i+1)+'/'+pool.length+' · Điểm: '+score+'</div>'+
      '<div class="qtext jp" style="font-size:60px;text-align:center">'+esc(cur.jp)+'</div>'+
      '<div class="opts">'+opts.map(function(o){
        return '<button class="opt" data-r="'+esc(o.romaji)+'">'+esc(o.romaji)+'</button>';
      }).join('')+'</div>';
  }
  function done(){
    var pct=Math.round(score/pool.length*100);
    wrap.querySelector('#qbox').innerHTML='<div class="result"><div class="big">'+pct+'%</div>'+
      '<p class="lead" style="text-align:center">Đúng '+score+'/'+pool.length+' câu! '+(pct>=80?'Tuyệt vời 🌸':'Cố thêm chút nữa nhé 🍵')+'</p>'+
      '<div class="row-btns"><button class="btn" id="again">Làm lại</button>'+
      '<a class="btn ghost" href="#'+which+'">← Về bảng chữ</a></div></div>';
    wrap.querySelector('#again').onclick=function(){ pool=shuffle(all).slice(0,12); i=0; score=0; q(); };
  }
  wrap.addEventListener('click', function(e){
    var b=e.target.closest('.opt'); if(!b||answered) return;
    answered=true;
    var cur=pool[i];
    wrap.querySelectorAll('.opt').forEach(function(o){
      o.disabled=true;
      if(o.getAttribute('data-r')===cur.romaji) o.classList.add('correct');
      else if(o===b) o.classList.add('wrong');
    });
    if(b.getAttribute('data-r')===cur.romaji) score++;
    speak(cur.jp);
    setTimeout(function(){ i++; q(); }, 900);
  });
  q();
  return wrap;
}

/* ---------- QUIZ (grammar N5) ---------- */
function viewQuiz(){
  var pool = shuffle(D.quiz);
  var i=0, score=0, answered=false;
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML = '<div class="page-head"><span class="chip sky">CHƯƠNG 8</span>'+
    '<h1 class="title">Trắc nghiệm N5</h1><div class="subtitle">クイズ</div>'+
    '<p class="lead">Chọn đáp án đúng để điền vào chỗ trống. Điểm cao nhất: '+quizBest()+'%</p></div>'+
    '<div class="quizbox" id="qbox"></div>';
  function q(){
    if(i>=pool.length) return done();
    answered=false;
    var cur=pool[i];
    var box=wrap.querySelector('#qbox');
    box.innerHTML='<div class="qbar"><i style="width:'+(i/pool.length*100)+'%"></i></div>'+
      '<div class="qnum">Câu '+(i+1)+'/'+pool.length+' · Điểm: '+score+'</div>'+
      '<div class="qtext jp">'+esc(cur.q)+'</div>'+
      '<div class="opts">'+cur.opts.map(function(o,idx){
        return '<button class="opt" data-i="'+idx+'">'+esc(o)+'</button>';
      }).join('')+'</div>'+
      '<div class="explain" id="exp"></div>';
  }
  function done(){
    var pct=Math.round(score/pool.length*100);
    quizBest(pct);
    wrap.querySelector('#qbox').innerHTML='<div class="result"><div class="big">'+pct+'%</div>'+
      '<p class="lead" style="text-align:center">Đúng '+score+'/'+pool.length+' câu! '+
      (pct>=80?'Sẵn sàng thi N5 rồi 🎉':'Ôn lại ngữ pháp rồi thử lại nhé 📘')+'</p>'+
      '<div class="row-btns"><button class="btn" id="again">Làm lại</button>'+
      '<a class="btn ghost" href="#grammar">← Ôn ngữ pháp</a></div></div>';
    wrap.querySelector('#again').onclick=function(){ pool=shuffle(D.quiz); i=0; score=0; q(); };
  }
  wrap.addEventListener('click', function(e){
    var b=e.target.closest('.opt'); if(!b||answered) return;
    answered=true;
    var cur=pool[i], chosen=+b.getAttribute('data-i');
    wrap.querySelectorAll('.opt').forEach(function(o){
      o.disabled=true; var oi=+o.getAttribute('data-i');
      if(oi===cur.a) o.classList.add('correct');
      else if(oi===chosen) o.classList.add('wrong');
    });
    if(chosen===cur.a) score++;
    var exp=wrap.querySelector('#exp'); exp.textContent='💡 '+cur.vi; exp.classList.add('show');
    var nb=el('<div class="row-btns"><button class="btn" id="qNext">'+(i+1>=pool.length?'Xem kết quả':'Câu tiếp →')+'</button></div>');
    wrap.querySelector('#qbox').appendChild(nb);
    wrap.querySelector('#qNext').onclick=function(){ i++; q(); };
  });
  q();
  return wrap;
}

/* ---------- router ---------- */
function route(){
  var h = (location.hash||'#home').slice(1);
  var parts = h.split('/');
  var name = parts[0]||'home';
  var arg = parts[1];
  var view;
  switch(name){
    case 'home': view=viewHome(); break;
    case 'hiragana': view=viewKana('hiragana'); break;
    case 'katakana': view=viewKana('katakana'); break;
    case 'greetings': view=viewGreet(); break;
    case 'grammar': view=viewGrammar(); break;
    case 'vocab': view=viewVocab(); break;
    case 'kanji': view=viewKanji(); break;
    case 'flashcards': view=viewFlash(); break;
    case 'kana-quiz': view=viewKanaQuiz(arg); break;
    case 'quiz': view=viewQuiz(); break;
    default: view=viewHome();
  }
  app.innerHTML=''; app.appendChild(view);
  // active tab
  document.querySelectorAll('nav.tabs a').forEach(function(a){
    a.classList.toggle('active', a.getAttribute('href')==='#'+name);
  });
  document.getElementById('tabs').classList.remove('open');
  window.scrollTo(0,0);
}

/* global click: mark-done buttons */
document.addEventListener('click', function(e){
  var d=e.target.closest('[data-done]');
  if(d){ var id=d.getAttribute('data-done'); setDone(id);
    d.textContent='✓ Đã hoàn thành'; d.classList.add('ghost'); toast('Đã lưu tiến độ 🌸'); }
});
document.getElementById('menuBtn').addEventListener('click', function(){
  document.getElementById('tabs').classList.toggle('open');
});

window.addEventListener('hashchange', route);
route();
})();
