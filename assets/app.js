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
  var m = s.match(/[぀-ヿ㐀-鿿々ー]+/g);
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
var LESSONS = ['hiragana','katakana','greetings','level-N5','level-N4','level-N3','level-N2','level-N1','kaiwa','industry'];
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
function emptyMsg(){ return '<p class="lead" style="margin-top:20px">Nội dung đang được bổ sung 🍵</p>'; }
function countItems(sections){ var n=0; (sections||[]).forEach(function(s){ n+=(s.items?s.items.length:0); }); return n; }

/* ---------- reusable renderers ---------- */
function vrow(it){
  return '<div class="vrow" data-say="'+esc(it.jp)+'">'+
    '<div><div class="w jp">'+esc(it.jp)+'</div><div class="r">'+esc(it.romaji)+'</div></div>'+
    '<div class="m">'+esc(it.vi)+'</div><span class="spk">🔊</span></div>';
}
// dòng câu dài (kaiwa) - xếp dọc jp/romaji/nghĩa cho dễ đọc
function phraseLine(it){
  return '<div class="exline" data-say="'+esc(it.jp)+'">'+
    '<div><div class="ej jp">'+esc(it.jp)+'</div>'+
    '<div class="er">'+esc(it.romaji)+'</div>'+
    '<div class="ev">'+esc(it.vi)+'</div></div><span class="spk">🔊</span></div>';
}
function grammarHTML(arr){
  return (arr||[]).map(function(g){
    return '<div class="gcard" style="border-left-color:var(--'+g.accent+')">'+
      '<h3><span class="chip '+g.accent+'">'+esc(g.chip)+'</span>'+esc(g.title)+'</h3>'+
      '<div class="formula jp">'+esc(g.formula)+'</div>'+
      '<ul>'+g.points.map(function(p){return '<li>'+esc(p)+'</li>';}).join('')+'</ul>'+
      g.examples.map(function(e){
        return '<div class="exline" data-say="'+esc(e.jp)+'">'+
          '<div><div class="ej jp">'+esc(e.jp)+'</div>'+
          '<div class="er">'+esc(e.romaji)+'</div>'+
          '<div class="ev">'+esc(e.vi)+'</div></div><span class="spk">🔊</span></div>';
      }).join('')+
    '</div>';
  }).join('');
}
function kanjiSectionsHTML(sections){
  return (sections||[]).map(function(g){
    return '<h2 class="sec">'+esc(g.title)+'</h2><div class="kjgrid">'+
      g.items.map(function(k){
        return '<div class="kjcard" data-say="'+esc(k.ch)+'">'+
          '<div class="ch jp">'+esc(k.ch)+'</div>'+
          '<div class="info"><div class="mean">'+esc(k.mean)+'</div>'+
          '<div class="yomi"><b class="on">On:</b> <span class="jp">'+esc(k.on)+'</span></div>'+
          '<div class="yomi"><b class="kun">Kun:</b> <span class="jp">'+esc(k.kun)+'</span></div>'+
          '<div class="smp jp">'+k.samples.map(esc).join('<br>')+'</div></div></div>';
      }).join('')+'</div>';
  }).join('');
}
// vocab block with its own search; returns a DOM element
function vocabBlock(sections){
  var box = el('<div class="vblock"></div>');
  box.innerHTML = '<input class="search" placeholder="🔍 Tìm từ (vd: ăn, taberu, たべる)…"><div class="vb"></div>';
  function render(q){
    q=(q||'').toLowerCase().trim();
    var out='';
    (sections||[]).forEach(function(sec){
      var items = sec.items.filter(function(it){
        if(!q) return true;
        return (it.jp.toLowerCase().indexOf(q)>=0)||(it.romaji.toLowerCase().indexOf(q)>=0)||(it.vi.toLowerCase().indexOf(q)>=0);
      });
      if(!items.length) return;
      out += '<h2 class="sec">'+esc(sec.title)+'</h2><div class="vgrid">'+items.map(vrow).join('')+'</div>';
    });
    if(!out) out='<p class="lead" style="margin-top:20px">Không tìm thấy từ nào khớp 🍵</p>';
    box.querySelector('.vb').innerHTML = out;
  }
  render('');
  box.addEventListener('input', function(e){ if(e.target.classList.contains('search')) render(e.target.value); });
  box.addEventListener('click', function(e){ var r=e.target.closest('.vrow'); if(r) speak(r.getAttribute('data-say')); });
  return box;
}

/* ---------- HOME ---------- */
function viewHome(){
  var pct = progressPct();
  var R=52, C=2*Math.PI*R, off=C*(1-pct/100);
  var groups = [
    {sec:'Nền tảng', cards:[
      {h:'#hiragana',ic:'🌸',t:'Hiragana',jp:'ひらがな',p:'46 chữ cơ bản + biến âm. Bấm để nghe phát âm.'},
      {h:'#katakana',ic:'🗾',t:'Katakana',jp:'カタカナ',p:'Chữ cho từ mượn nước ngoài.'}
    ]},
    {sec:'Học theo trình độ', cards:[
      {h:'#levels',ic:'🎓',t:'Trình độ N5 → N1',jp:'JLPT',p:'Ngữ pháp, từ vựng & kanji theo 5 cấp độ JLPT.'},
      {h:'#kaiwa',ic:'💬',t:'Giao tiếp · Kaiwa',jp:'かいわ',p:'Hội thoại theo tình huống thực tế, có phát âm.'},
      {h:'#industry',ic:'🏢',t:'Chuyên ngành',jp:'専門用語',p:'Từ vựng theo ngành: IT, điều dưỡng, nhà hàng…'}
    ]},
    {sec:'Luyện tập', cards:[
      {h:'#flashcards',ic:'🃏',t:'Flashcard',jp:'フラッシュ',p:'Luyện nhớ từ vựng mọi cấp độ bằng thẻ lật.'},
      {h:'#quiz',ic:'✏️',t:'Trắc nghiệm',jp:'クイズ',p:'Kiểm tra ngữ pháp N5. Điểm cao nhất: '+quizBest()+'%'}
    ]}
  ];
  var html = ''+
  '<div class="view">'+
    '<div class="hero">'+
      '<div class="htext">'+
        '<h1>Học tiếng Nhật từ A đến N1 🌸</h1>'+
        '<div class="jp-big">にほんご の たび</div>'+
        '<p>Bộ tự học dành cho người Việt: bảng chữ cái, ngữ pháp & từ vựng theo trình độ N5→N1, hội thoại giao tiếp và từ vựng chuyên ngành — tất cả trong một trang, có phát âm và luyện tập.</p>'+
        '<a href="#levels" class="btn">Chọn trình độ học →</a>'+
      '</div>'+
      '<div class="progress-ring">'+
        '<svg width="118" height="118"><circle cx="59" cy="59" r="'+R+'" fill="none" stroke="#FFD9E3" stroke-width="10"/>'+
        '<circle cx="59" cy="59" r="'+R+'" fill="none" stroke="#FF7CA3" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+off+'"/></svg>'+
        '<div class="pv"><b>'+pct+'%</b><span>tiến độ</span></div>'+
      '</div>'+
    '</div>';
  groups.forEach(function(grp){
    html += '<h2 class="sec">'+grp.sec+'</h2><div class="cards">'+ grp.cards.map(function(c){
        var id = c.h.replace('#','');
        var badge = (LESSONS.indexOf(id)>=0 && isDone(id)) ? '<span class="badge">✓ xong</span>' : '';
        return '<a class="lcard" href="'+c.h+'">'+badge+'<span class="ic">'+c.ic+'</span>'+
               '<h3>'+c.t+'</h3><div class="jp-s">'+c.jp+'</div><p>'+c.p+'</p></a>';
      }).join('')+'</div>';
  });
  html += '</div>';
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
    data.forEach(function(k){ html += cell(k, set==='basic'); });
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

/* ---------- GREETINGS (vẫn giữ, dùng lại trong giao tiếp) ---------- */
function viewGreet(){
  var wrap = el('<div class="view"></div>');
  var html = '<div class="page-head"><span class="chip mint">CHÀO HỎI</span>'+
    '<h1 class="title">Chào hỏi & Giao tiếp</h1><div class="subtitle">あいさつ</div>'+
    '<p class="lead">Những câu giao tiếp thiết yếu nhất. Bấm vào câu để nghe cách đọc.</p></div>';
  D.greet.forEach(function(g){
    html += '<h2 class="sec">'+esc(g.title)+'</h2><div class="vgrid">'+ g.items.map(vrow).join('') +'</div>';
  });
  html += markDoneBtn('greetings');
  wrap.innerHTML = html;
  wrap.addEventListener('click', function(e){
    var r=e.target.closest('.vrow'); if(r) speak(r.getAttribute('data-say'));
  });
  return wrap;
}

/* ---------- LEVELS hub ---------- */
var LEVELS_ORDER = ['N5','N4','N3','N2','N1'];
var LEVEL_META = {
  N5:{ic:'🌱',title:'Tiếng Nhật N5',jp:'JLPT N5',accent:'mint',tagline:'Sơ cấp — nền tảng đầu tiên.',desc:'Trình độ sơ cấp: ngữ pháp, từ vựng và kanji cơ bản nhất để bắt đầu.'},
  N4:{ic:'🌿',title:'Tiếng Nhật N4',jp:'JLPT N4',accent:'sky',tagline:'Sơ trung cấp — mở rộng giao tiếp.',desc:'Mẫu câu và từ vựng giúp diễn đạt ý định, kinh nghiệm, điều kiện.'},
  N3:{ic:'🍀',title:'Tiếng Nhật N3',jp:'JLPT N3',accent:'purple',tagline:'Trung cấp — cầu nối quan trọng.',desc:'Cấp độ bản lề: diễn đạt sắc thái, truyền đạt, suy đoán có căn cứ.'},
  N2:{ic:'🌳',title:'Tiếng Nhật N2',jp:'JLPT N2',accent:'yellow',tagline:'Trung cao cấp — dùng trong công việc.',desc:'Ngữ pháp & từ vựng học thuật, kinh tế xã hội, dùng nơi làm việc.'},
  N1:{ic:'🎍',title:'Tiếng Nhật N1',jp:'JLPT N1',accent:'pink',tagline:'Cao cấp — trình độ thành thạo.',desc:'Mẫu câu trang trọng, từ Hán ngữ nâng cao, sắc thái tinh tế.'}
};
function levelData(code){
  if(code==='N5') return {grammar:D.grammar, vocab:D.vocab, kanji:D.kanji};
  return (D.levels && D.levels[code]) || {grammar:[],vocab:[],kanji:[]};
}
function viewLevels(){
  var wrap = el('<div class="view"></div>');
  var cards = LEVELS_ORDER.map(function(c){
    var m=LEVEL_META[c], ld=levelData(c);
    var badge = isDone('level-'+c) ? '<span class="badge">✓ xong</span>' : '';
    var counts = 'Ngữ pháp '+(ld.grammar?ld.grammar.length:0)+' · Kanji '+countItems(ld.kanji)+' · Từ '+countItems(ld.vocab);
    return '<a class="lcard" href="#level/'+c+'">'+badge+'<span class="ic">'+m.ic+'</span>'+
      '<h3>'+m.title+'</h3><div class="jp-s">'+m.jp+'</div>'+
      '<p>'+m.tagline+'<br><b style="color:var(--ink-soft);font-weight:700;font-size:12px">'+counts+'</b></p></a>';
  }).join('');
  wrap.innerHTML = '<div class="page-head"><span class="chip purple">TRÌNH ĐỘ</span>'+
    '<h1 class="title">Học theo trình độ</h1><div class="subtitle">レベル別学習</div>'+
    '<p class="lead">Chọn cấp độ JLPT từ N5 (sơ cấp) đến N1 (cao cấp). Mỗi cấp gồm ngữ pháp, từ vựng và kanji riêng.</p></div>'+
    '<div class="cards">'+cards+'</div>';
  return wrap;
}

/* ---------- LEVEL detail (sub-tabs: grammar / vocab / kanji) ---------- */
var levelSub = {};
function viewLevel(code){
  if(LEVELS_ORDER.indexOf(code)<0) code='N5';
  var ld = levelData(code), m = LEVEL_META[code];
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML =
    '<div class="page-head"><span class="chip '+m.accent+'">TRÌNH ĐỘ</span>'+
    '<h1 class="title">'+m.title+'</h1><div class="subtitle">'+m.jp+'</div>'+
    '<p class="lead">'+m.desc+'</p></div>'+
    '<div class="kana-tabs">'+ LEVELS_ORDER.map(function(c){
        return '<a class="pill'+(c===code?' active':'')+'" href="#level/'+c+'">'+c+'</a>';
      }).join('') +'</div>'+
    '<div class="kana-tabs" id="subTabs">'+
      '<button data-sub="grammar">📘 Ngữ pháp</button>'+
      '<button data-sub="vocab">🍙 Từ vựng</button>'+
      '<button data-sub="kanji">🎎 Kanji</button>'+
    '</div>'+
    '<div id="lvlArea"></div>'+
    markDoneBtn('level-'+code);
  var area = wrap.querySelector('#lvlArea');
  function setSub(sub){
    levelSub[code]=sub;
    wrap.querySelectorAll('#subTabs button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-sub')===sub);
    });
    area.innerHTML='';
    if(sub==='grammar'){
      area.innerHTML = (ld.grammar&&ld.grammar.length) ? grammarHTML(ld.grammar) : emptyMsg();
    } else if(sub==='kanji'){
      area.innerHTML = (ld.kanji&&ld.kanji.length) ? kanjiSectionsHTML(ld.kanji) : emptyMsg();
    } else {
      if(ld.vocab&&ld.vocab.length) area.appendChild(vocabBlock(ld.vocab));
      else area.innerHTML = emptyMsg();
    }
  }
  wrap.addEventListener('click', function(e){
    var b=e.target.closest('#subTabs button'); if(b){ setSub(b.getAttribute('data-sub')); return; }
    var x=e.target.closest('.exline'); if(x){ speak(x.getAttribute('data-say')); return; }
    var c=e.target.closest('.kjcard'); if(c){ speak(c.getAttribute('data-say')); return; }
  });
  setSub(levelSub[code]||'grammar');
  return wrap;
}

/* ---------- KAIWA (giao tiếp theo chủ đề) ---------- */
function viewKaiwa(key){
  var topics = D.kaiwa||[];
  if(!topics.length){ var w=el('<div class="view"></div>'); w.innerHTML=emptyMsg(); return w; }
  if(!key || !topics.some(function(t){return t.key===key;})) key=topics[0].key;
  var t = topics.filter(function(x){return x.key===key;})[0];
  var wrap = el('<div class="view"></div>');
  var tabs = topics.map(function(x){
    return '<a class="pill'+(x.key===key?' active':'')+'" href="#kaiwa/'+x.key+'">'+esc(x.title)+'</a>';
  }).join('');
  var html = '<div class="page-head"><span class="chip mint">GIAO TIẾP</span>'+
    '<h1 class="title">Hội thoại · Kaiwa</h1><div class="subtitle">会話</div>'+
    '<p class="lead">Học giao tiếp theo tình huống thực tế. Bấm vào câu để nghe phát âm.</p></div>'+
    '<div class="kana-tabs">'+tabs+'</div>'+
    '<div class="page-head" style="margin:8px 0 14px"><h2 class="title title-sm">'+esc(t.title)+'</h2><div class="subtitle">'+esc(t.jp)+'</div></div>';
  (t.dialogs||[]).forEach(function(d){
    html += '<div class="gcard" style="border-left-color:var(--mint)"><h3>💬 '+esc(d.title)+'</h3>';
    d.lines.forEach(function(l){
      html += '<div class="exline" data-say="'+esc(l.jp)+'">'+
        '<div><div class="ej jp"><b style="color:var(--mint)">'+esc(l.sp)+':</b> '+esc(l.jp)+'</div>'+
        '<div class="er">'+esc(l.romaji)+'</div><div class="ev">'+esc(l.vi)+'</div></div>'+
        '<span class="spk">🔊</span></div>';
    });
    html += '</div>';
  });
  if(t.phrases && t.phrases.length){
    html += '<h2 class="sec">Mẫu câu hữu ích</h2>'+ t.phrases.map(phraseLine).join('');
  }
  html += markDoneBtn('kaiwa');
  wrap.innerHTML = html;
  wrap.addEventListener('click', function(e){
    var x=e.target.closest('.exline'); if(x){ speak(x.getAttribute('data-say')); return; }
    var r=e.target.closest('.vrow'); if(r){ speak(r.getAttribute('data-say')); return; }
  });
  return wrap;
}

/* ---------- INDUSTRY (từ vựng chuyên ngành) ---------- */
function viewIndustry(key){
  var inds = D.industry||[];
  if(!inds.length){ var w=el('<div class="view"></div>'); w.innerHTML=emptyMsg(); return w; }
  if(!key || !inds.some(function(x){return x.key===key;})) key=inds[0].key;
  var it = inds.filter(function(x){return x.key===key;})[0];
  var wrap = el('<div class="view"></div>');
  var tabs = inds.map(function(x){
    return '<a class="pill'+(x.key===key?' active':'')+'" href="#industry/'+x.key+'">'+x.icon+' '+esc(x.title)+'</a>';
  }).join('');
  var html = '<div class="page-head"><span class="chip sky">CHUYÊN NGÀNH</span>'+
    '<h1 class="title">Từ vựng theo ngành</h1><div class="subtitle">専門用語</div>'+
    '<p class="lead">Từ vựng chuyên môn cho công việc thực tế tại Nhật. Bấm để nghe phát âm.</p></div>'+
    '<div class="kana-tabs">'+tabs+'</div>'+
    '<div class="page-head" style="margin:8px 0 10px"><h2 class="title title-sm">'+it.icon+' '+esc(it.title)+'</h2><div class="subtitle">'+esc(it.jp)+'</div></div>';
  (it.groups||[]).forEach(function(g){
    html += '<h2 class="sec">'+esc(g.title)+'</h2><div class="vgrid">'+ g.items.map(vrow).join('') +'</div>';
  });
  html += markDoneBtn('industry');
  wrap.innerHTML = html;
  wrap.addEventListener('click', function(e){
    var r=e.target.closest('.vrow'); if(r) speak(r.getAttribute('data-say'));
  });
  return wrap;
}

/* ---------- FLASHCARDS (chọn bộ thẻ) ---------- */
function allDecks(){
  var decks = [{key:'N5',label:'🌱 Từ vựng N5',sections:D.vocab}];
  ['N4','N3','N2','N1'].forEach(function(c){
    var ld = D.levels && D.levels[c];
    if(ld && ld.vocab && ld.vocab.length) decks.push({key:c,label:'📘 Từ vựng '+c,sections:ld.vocab});
  });
  (D.industry||[]).forEach(function(it){
    decks.push({key:'ind-'+it.key,label:it.icon+' '+it.title,sections:it.groups});
  });
  return decks;
}
function flattenDeck(sections){
  var pool=[]; (sections||[]).forEach(function(s){ (s.items||[]).forEach(function(it){ pool.push(it); }); });
  return pool;
}
function viewFlash(){
  var decks = allDecks();
  var deckKey = decks[0].key;
  var pool = shuffle(flattenDeck(decks[0].sections));
  var i=0, flipped=false;
  var wrap = el('<div class="view"></div>');
  wrap.innerHTML = '<div class="page-head"><span class="chip pink">LUYỆN TẬP</span>'+
    '<h1 class="title">Flashcard từ vựng</h1><div class="subtitle">フラッシュカード</div>'+
    '<p class="lead">Chọn bộ thẻ, nhìn chữ Nhật đoán nghĩa rồi bấm thẻ để lật. 🔊 nghe phát âm.</p></div>'+
    '<div class="toggle-row"><label class="switch">Bộ thẻ: '+
      '<select class="deck-sel" id="deckSel">'+ decks.map(function(d){return '<option value="'+d.key+'">'+esc(d.label)+'</option>';}).join('') +'</select>'+
    '</label></div>'+
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
    if(!c){ f.innerHTML='<div class="fvi">Bộ thẻ trống</div>'; wrap.querySelector('#fcount').textContent=''; return; }
    f.innerHTML = flipped
      ? '<div class="from">'+esc(c.romaji)+'</div><div class="fvi">'+esc(c.vi)+'</div>'
      : '<div class="fbig jp">'+esc(c.jp)+'</div>';
    wrap.querySelector('#fcount').textContent = 'Thẻ '+(i+1)+' / '+pool.length+' · bấm thẻ để lật';
  }
  function loadDeck(k){
    var d = decks.filter(function(x){return x.key===k;})[0]||decks[0];
    deckKey=d.key; pool=shuffle(flattenDeck(d.sections)); i=0; flipped=false; draw();
  }
  wrap.addEventListener('change', function(e){
    if(e.target.id==='deckSel'){ loadDeck(e.target.value); }
  });
  wrap.addEventListener('click', function(e){
    if(e.target.closest('#flash')){ flipped=!flipped; draw(); }
    else if(e.target.closest('#fNext')){ if(!pool.length)return; i=(i+1)%pool.length; flipped=false; draw(); }
    else if(e.target.closest('#fShuffle')){ pool=shuffle(pool); i=0; flipped=false; draw(); toast('Đã xáo trộn'); }
    else if(e.target.closest('#fSpeak')){ if(pool[i]) speak(pool[i].jp); }
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
      '<div class="qtext jp kana-big">'+esc(cur.jp)+'</div>'+
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
  wrap.innerHTML = '<div class="page-head"><span class="chip sky">TRẮC NGHIỆM</span>'+
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
      '<a class="btn ghost" href="#levels">← Ôn ngữ pháp</a></div></div>';
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
    case 'levels': view=viewLevels(); break;
    case 'level': view=viewLevel(arg); break;
    case 'kaiwa': view=viewKaiwa(arg); break;
    case 'industry': view=viewIndustry(arg); break;
    case 'grammar': view=viewLevel('N5'); break;   // tương thích link cũ
    case 'vocab': view=viewLevel('N5'); break;
    case 'kanji': view=viewLevel('N5'); break;
    case 'flashcards': view=viewFlash(); break;
    case 'kana-quiz': view=viewKanaQuiz(arg); break;
    case 'quiz': view=viewQuiz(); break;
    default: view=viewHome();
  }
  app.innerHTML=''; app.appendChild(view);
  // active tab
  var navKey = name;
  if(name==='level') navKey='levels';
  if(name==='grammar'||name==='vocab'||name==='kanji') navKey='levels';
  document.querySelectorAll('nav.tabs a').forEach(function(a){
    a.classList.toggle('active', a.getAttribute('href')==='#'+navKey);
  });
  document.getElementById('tabs').classList.remove('open');
  window.scrollTo(0,0);
  // trên mobile các dải tab cuộn ngang -> đưa tab đang chọn vào tầm nhìn
  var activeTab = app.querySelector('.kana-tabs .active');
  if(activeTab && activeTab.scrollIntoView){
    try{ activeTab.scrollIntoView({inline:'center',block:'nearest'}); }catch(e){}
  }
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
