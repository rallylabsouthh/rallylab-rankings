const D = RALLYLAB_DATA;
let players = [...D.players].sort((a,b)=>b.points-a.points);

function winPct(p){const total=p.wins+p.losses;return total?Math.round(p.wins/total*100):0}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function renderStats(){
  document.querySelector("#statPlayers").textContent=players.length;
  document.querySelector("#statMatches").textContent=D.matches.length;
  document.querySelector("#statTournaments").textContent=new Set(D.matches.map(m=>m.tournament)).size;
  const avg=players.length?Math.round(players.reduce((s,p)=>s+winPct(p),0)/players.length):0;
  document.querySelector("#statAvg").textContent=avg+"%";
}
function renderLeader(){
  const p=players[0]; if(!p)return;
  document.querySelector("#leaderName").textContent=p.name;
  document.querySelector("#leaderPoints").innerHTML=`${p.points.toLocaleString()} <small>PTS</small>`;
  document.querySelector("#leaderClass").textContent="CLASS "+p.class;
  document.querySelector("#leaderRecord").textContent=`${p.wins}W – ${p.losses}L`;
}
function renderRankings(){
  const q=document.querySelector("#search").value.toLowerCase().trim();
  const c=document.querySelector("#classFilter").value;
  const filtered=players.filter(p=>(c==="ALL"||p.class===c)&&p.name.toLowerCase().includes(q));
  document.querySelector("#rankingBody").innerHTML=filtered.length?filtered.map((p)=>{
    const rank=players.indexOf(p)+1;
    const mv=p.movement>0?`<span class="up">↑ ${p.movement}</span>`:p.movement<0?`<span class="down">↓ ${Math.abs(p.movement)}</span>`:`<span class="same">—</span>`;
    return `<tr><td class="rank">${rank}</td><td class="player-cell">${esc(p.name)}</td><td><span class="class-pill">${esc(p.class)}</span></td><td class="points">${p.points.toLocaleString()}</td><td>${p.wins}</td><td>${p.losses}</td><td>${winPct(p)}%</td><td class="movement">${mv}</td></tr>`;
  }).join(""):`<tr><td colspan="8" class="empty">No players found.</td></tr>`;
}
function renderCards(){
  document.querySelector("#playerCards").innerHTML=players.slice(0,6).map((p,i)=>`
    <article class="player-card">
      <div class="top"><span class="mini">#${i+1}</span><span class="class-pill">${esc(p.class)}</span></div>
      <h3>${esc(p.name)}</h3><div class="points">${p.points.toLocaleString()} <span class="mini">PTS</span></div>
      <div class="record"><div><b>${p.wins}</b><span>Wins</span></div><div><b>${p.losses}</b><span>Losses</span></div><div><b>${winPct(p)}%</b><span>Win rate</span></div></div>
    </article>`).join("");
}
function renderMatches(){
  document.querySelector("#matchList").innerHTML=D.matches.map(m=>`
    <article class="match">
      <div class="p">${esc(m.p1)}</div><div class="score">${esc(m.score)}</div><div class="p">${esc(m.p2)}</div>
      <div class="meta">${esc(m.tournament)} · ${new Date(m.date+"T00:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"})} · Winner: ${esc(m.winner)}</div>
    </article>`).join("");
}
document.querySelector("#search").addEventListener("input",renderRankings);
document.querySelector("#classFilter").addEventListener("change",renderRankings);
renderStats();renderLeader();renderRankings();renderCards();renderMatches();
