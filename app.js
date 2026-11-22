const $ = (id) => document.getElementById(id);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
$("year").textContent = new Date().getFullYear();
$("menuToggle").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));

function showCode(title,code){$("dialogTitle").textContent=title;$("dialogCode").textContent=code;$("codeDialog").showModal();}
$("closeDialog").onclick=()=>$("codeDialog").close();
$("copyCode").onclick=async()=>{try{await navigator.clipboard.writeText($("dialogCode").textContent);$("copyCode").textContent="Copied!";setTimeout(()=>$("copyCode").textContent="Copy code",1300)}catch(e){$("copyCode").textContent="Select and copy";}};
function renderGit(filter=""){
 const list=window.GIT_EXPERIMENTS.filter(x=>(x.title+" "+x.desc+" "+x.code).toLowerCase().includes(filter.toLowerCase()));
 $("gitCount").textContent=list.length+" experiments";
 $("gitList").innerHTML=list.map(x=>`<details class="code-item"><summary>${escapeHtml(x.title)}</summary><p>${escapeHtml(x.desc)}</p><pre><code>${escapeHtml(x.code)}</code></pre><button class="btn small copy-inline">Copy commands</button></details>`).join("")||'<p class="empty-state">No matching Git experiment.</p>';
 $("gitList").querySelectorAll(".copy-inline").forEach((b,i)=>b.onclick=()=>navigator.clipboard.writeText(list[i].code).then(()=>{b.textContent="Copied!"}));
}
function renderPrograms(id,items){$(id).innerHTML=items.map((x,i)=>`<article class="program-card"><span class="number">${String(i+1).padStart(2,"0")} / ${items.length}</span><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.desc)}</p><button class="btn small ghost">View source ↗</button></article>`).join("")||'<p class="empty-state">No matching programs.</p>';$(id).querySelectorAll("button").forEach((b,i)=>b.onclick=()=>showCode(items[i].title,items[i].code));}
function renderJava(){let q=$("javaSearch").value.toLowerCase();let items=JAVA_PROGRAMS.filter(x=>(x.title+x.desc).toLowerCase().includes(q));$("javaCount").textContent=items.length+" programs";renderPrograms("javaList",items);}
function renderDSA(group="all"){let items=DSA_PROGRAMS.filter(x=>group==="all"||x.group===group);renderPrograms("dsaList",items);document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.group===group));}
$("gitSearch").addEventListener("input",e=>renderGit(e.target.value));$("javaSearch").addEventListener("input",renderJava);
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>renderDSA(b.dataset.group)));
renderGit();renderJava();renderDSA();

// Medicine expiry tracker — browser-local storage, date-only comparison.
let medicines=JSON.parse(localStorage.getItem("cws_medicines")||"[]");
const dateOnly = s => new Date(s+"T00:00:00");
function medStatus(date){const today=dateOnly(new Date().toISOString().slice(0,10));const days=Math.ceil((dateOnly(date)-today)/86400000);return days<0?{label:"Expired",cls:"expired",days}:days<=30?{label:"Expiring soon",cls:"soon",days}:{label:"Valid",cls:"",days};}
function saveMedicines(){localStorage.setItem("cws_medicines",JSON.stringify(medicines));renderMedicines();}
function renderMedicines(){
 const q=$("medSearch").value.toLowerCase();const counts=medicines.map(m=>medStatus(m.expiry));
 $("medTotal").textContent=medicines.length;$("medSoon").textContent=counts.filter(s=>s.days>=0&&s.days<=30).length;$("medExpired").textContent=counts.filter(s=>s.days<0).length;
 const filtered=medicines.filter(m=>(m.name+" "+m.category).toLowerCase().includes(q)).sort((a,b)=>a.expiry.localeCompare(b.expiry));
 $("medicineList").innerHTML=filtered.length?filtered.map(m=>{const s=medStatus(m.expiry);return `<div class="medicine-row"><div><b>${escapeHtml(m.name)}</b><small>${escapeHtml(m.category)} · Qty ${escapeHtml(m.qty)} · Expires ${escapeHtml(m.expiry)}</small><div><span class="status ${s.cls}">${s.label}${s.days>=0?" · "+s.days+" days":""}</span></div><div class="row-actions"><button data-edit="${m.id}">Edit</button><button data-delete="${m.id}">Delete</button></div></div></div>`}).join(""):'<p class="muted">No medicines found. Add one to begin.</p>';
 $("medicineList").querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{let m=medicines.find(x=>x.id===b.dataset.edit);$("medicineId").value=m.id;$("medName").value=m.name;$("medQty").value=m.qty;$("medCategory").value=m.category;$("medExpiry").value=m.expiry;$("medicineFormTitle").textContent="✎ Edit medicine";$("medicineForm").scrollIntoView({behavior:"smooth"});});
 $("medicineList").querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{if(confirm("Delete this medicine record?")){medicines=medicines.filter(x=>x.id!==b.dataset.delete);saveMedicines();}});
}
$("medicineForm").addEventListener("submit",e=>{e.preventDefault();const id=$("medicineId").value||crypto.randomUUID();const m={id,name:$("medName").value.trim(),qty:Number($("medQty").value),category:$("medCategory").value,expiry:$("medExpiry").value};const i=medicines.findIndex(x=>x.id===id);if(i>=0)medicines[i]=m;else medicines.push(m);saveMedicines();e.target.reset();$("medicineId").value="";$("medicineFormTitle").textContent="＋ Add medicine";});
$("medSearch").addEventListener("input",renderMedicines);renderMedicines();

// Number puzzle: 8-puzzle with legal neighbour moves.
let puzzle=[1,2,3,4,5,6,7,8,0],moves=0;
function solved(){return puzzle.every((v,i)=>v===(i+1)%9);}
function drawPuzzle(){$("puzzleBoard").innerHTML=puzzle.map((v,i)=>`<button class="tile ${v===0?"empty":""}" data-i="${i}" ${v===0?"disabled":""}>${v||""}</button>`).join("");$("puzzleMoves").textContent="Moves: "+moves;$("puzzleMessage").textContent=solved()?"🎉 Puzzle solved! Well done!":"Tap a tile next to the empty space."; $("puzzleBoard").querySelectorAll("button:not(:disabled)").forEach(b=>b.onclick=()=>moveTile(Number(b.dataset.i)));}
function moveTile(i){let z=puzzle.indexOf(0);if(Math.abs(Math.floor(i/3)-Math.floor(z/3))+Math.abs(i%3-z%3)!==1)return;[puzzle[i],puzzle[z]]=[puzzle[z],puzzle[i]];moves++;drawPuzzle();}
function shuffle(){do{puzzle=[1,2,3,4,5,6,7,8,0];for(let k=0;k<100;k++){let z=puzzle.indexOf(0),r=Math.floor(z/3),c=z%3,opts=[];if(r)opts.push(z-3);if(r<2)opts.push(z+3);if(c)opts.push(z-1);if(c<2)opts.push(z+1);let i=opts[Math.floor(Math.random()*opts.length)];[puzzle[i],puzzle[z]]=[puzzle[z],puzzle[i]];}}while(solved());moves=0;drawPuzzle();}
$("shufflePuzzle").onclick=shuffle;shuffle();

// Registration UI: Firebase integration is deliberately opt-in; never pretend a form was sent privately without backend setup.
$("registerForm").addEventListener("submit",e=>{e.preventDefault();$("registerStatus").textContent="To securely submit registrations, configure Firebase using the README and firebase-register.js. This demo has not sent or stored your details.";});
