// =====================================================================
// Mafia: City of Shadows - v1.7.0
// Adds: Personalized Role GUI Themes, Living Windows, Crime Scene visuals, Vote Leader Spotlight
// =====================================================================

// ===== GAME CONFIG (fallback - overridden by config.json) =====
let GAME_CONFIG = {
    gameName: "Mafia: City of Shadows",
    version: "1.7.0",
    minPlayers: 4,
    maxPlayers: 12,
    defaultPlayers: 6,
    roleDistribution: {
        4:  { mafia: 1, detective: 1, doctor: 1, citizen: 1 },
        5:  { mafia: 1, detective: 1, doctor: 1, jester: 1, citizen: 1 },
        6:  { mafia: 1, detective: 1, doctor: 1, mayor: 1, jester: 1, citizen: 1 },
        7:  { mafia: 2, detective: 1, doctor: 1, serial_killer: 1, jester: 1, citizen: 1 },
        8:  { mafia: 2, frame_artist: 1, detective: 1, doctor: 1, vigilante: 1, jester: 1, citizen: 1 },
        9:  { mafia: 2, frame_artist: 1, detective: 1, doctor: 1, vigilante: 1, mayor: 1, jester: 1, citizen: 1 },
        10: { mafia: 3, detective: 1, doctor: 1, serial_killer: 1, vigilante: 1, mayor: 1, jester: 1, amnesiac: 1, citizen: 1 },
        11: { mafia: 3, frame_artist: 1, detective: 1, doctor: 1, serial_killer: 1, vigilante: 1, mayor: 1, jester: 1, amnesiac: 1, citizen: 1 },
        12: { mafia: 3, frame_artist: 1, detective: 1, doctor: 1, serial_killer: 1, vigilante: 1, mayor: 1, bodyguard: 1, jester: 1, amnesiac: 1, citizen: 1 }
    },
    updateLog: [
        {
            version: "1.7.0",
            date: "2026-05-03",
            title: "Personalized GUI & The Living City",
            changes: [
                "🎨 Role-Based GUI Theme: Tepi layar bersinar sesuai peranmu — merah darah untuk Mafia, biru CCTV + scanline untuk Detektif, glitch pink/ungu untuk Jester, dll.",
                "🪟 Living Windows: Jendela gedung pemain berkedip cepat saat dia 'berbicara' / nge-bluff di log siang.",
                "🚓 Police Line: Pita kuning 'DO NOT CROSS' otomatis muncul di gedung pemain yang baru mati.",
                "💀 Death Cause Badge: Lencana kecil di gedung mati menunjukkan penyebab — 🔫 Mafia, 🪓 SK, ⚡ Vigilante, ⚖️ Voting, 🛡️ Bodyguard.",
                "🦇 Vote Leader Spotlight: Lampu sorot ala Bat-signal mengarah ke gedung dengan voting tertinggi secara real-time.",
                "🏚️ Crime Scene Skyline: Gedung yang padam di background mendapat pita kuning crime scene.",
                "💓 Heartbeat Indicator: Panel peranmu berdetak halus saat giliranmu beraksi — biar tidak kelewat!",
                "✨ Phase Transition Flash: Banner 'MALAM TURUN' / 'FAJAR TIBA' / 'VOTING DIMULAI' muncul singkat antar fase.",
                "🎭 Hover Reveal: Hover building saat game over untuk preview cepat peran sebelum scroll list."
            ]
        },
        {
            version: "1.6.0",
            date: "2026-05-03",
            title: "Neutral Chaos & The Living City",
            changes: [
                "🃏 Role Baru — The Jester: Menang sendirian jika berhasil dieksekusi voting siang. Bisa membawa 1 pemain ikut mati!",
                "🧠 Role Baru — The Amnesiac: Mulai tanpa peran. Pilih untuk 'mengingat' peran pemain yang sudah mati dan mengambil alih tugasnya.",
                "🌃 Living City: Lampu gedung pemain mati padam selamanya — bahkan di skyline background.",
                "🔦 Noir Spotlight: Saat fase malam, area sekitar gedung yang dipilih menjadi terang sementara kota tenggelam dalam gelap.",
                "🌅 Sky Transitions: Langit beralih halus dari malam → senja oranye (voting) → biru gelap (malam aksi) dengan matahari/bulan dinamis.",
                "💡 Dynamic Neon Signs: Papan iklan neon berkedip di gedung-gedung — berubah merah jika Mafia menang, biru jika Warga, pink jika Jester!",
                "🎉 Game Over Effects: Confetti untuk kemenangan Jester, pulsasi merah untuk Mafia, blackout untuk Serial Killer.",
                "🎯 Voting AI: Bot kini punya peluang untuk men-target Jester yang terlihat 'mencurigakan-on-purpose'."
            ]
        },
        {
            version: "1.5.0",
            date: "2026-05-03",
            title: "AI Overhaul, New Roles & Immersive UI",
            changes: [
                "🆕 2 Karakter Baru: Bodyguard (mati menggantikan target yang dilindungi), Informant (bocorkan info sebelum mati)",
                "🧠 AI Rewrite Total: Trust Score, Memory sistem, suspect tracking, dynamic bluffing per kepribadian",
                "🎭 AI Personality: Aggressive, Paranoid, Calm, Sneaky — tiap bot punya cara main beda",
                "🔧 Bug Fix Besar: Alur game tidak macet lagi – semua phase transition dijamin konsisten",
                "🎨 UI Baru: Font Cinzel + Rajdhani, particle malam, animated skyline, role reveal cinematic",
                "⚡ Phase Engine: Game engine di-refactor total, tidak ada lagi stuck di voting/night",
                "📊 Live Vote Counter: Lihat real-time berapa vote tiap pemain saat voting",
                "🗺️ Expanded: Support hingga 12 pemain",
                "📝 Update Log kini tersinkron dengan config.json"
            ]
        },
        {
            version: "1.4.0",
            date: "2026-05-02",
            title: "Major Expansion: Roles, Events & Visuals",
            changes: [
                "🆕 4 Role Baru: Vigilante, Serial Killer, Mayor (Double Vote), Frame Artist",
                "🌪️ Dynamic City Events: Blackout, Curfew, Foggy Day",
                "🎬 Visual: Gedung runtuh animasi, cuaca dinamis (hujan/salju), transisi siang/malam halus",
                "🤖 Advanced AI: Sistem Trust/Dendam, Bluffing Bot di log",
                "🖥️ UI/UX: Status bar terpusat, panel log collapsible + filter, focus mode",
                "💎 Glassmorphism & Glow Effects berdasarkan role"
            ]
        },
        {
            version: "1.3.0", date: "2024-05-10", title: "Save & Restore System",
            changes: ["Sistem save/recovery dengan SHA-256","Generate kode unik untuk restore data","Local storage untuk menyimpan statistik","Reset data melalui menu settings"]
        },
        {
            version: "1.2.0", date: "2024-03-28", title: "City Building Theme",
            changes: ["UI lengkap dengan tema city building","Setiap pemain direpresentasikan sebagai gedung","Efek lampu jendela di malam hari","Skyline kota interaktif di background"]
        },
        {
            version: "1.1.0", date: "2024-02-20", title: "AI & Gameplay Enhancement",
            changes: ["AI bot lebih cerdas dalam memilih target","Sistem voting yang lebih realistis","Penambahan log aktivitas","Animasi transisi malam-siang"]
        },
        {
            version: "1.0.0", date: "2024-01-15", title: "Rilis Perdana",
            changes: ["Game Mafia pertama dirilis","Single player melawan bot AI","Role: Mafia, Detektif, Dokter, Warga","Fase malam dan siang dengan sistem voting"]
        }
    ]
};

// ===== LOAD CONFIG =====
async function loadConfig() {
    try {
        const r = await fetch('config.json');
        if (r.ok) {
            const c = await r.json();
            GAME_CONFIG = { ...GAME_CONFIG, ...c };
            // Merge updateLog from config if available
            if (c.updateLog) GAME_CONFIG.updateLog = c.updateLog;
            console.log('✅ Config loaded');
        }
    } catch(e) { console.log('ℹ️ Using default config'); }
}

// ===== UTILS =====
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null; }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ===== ROLE DEFINITIONS =====
const ROLE_INFO = {
    mafia:         { icon: '🔫', name: 'Mafia',         color: '#e74c3c', desc: 'Bunuh warga di malam hari. Menang jika Mafia ≥ Non-Mafia.' },
    detective:     { icon: '🔍', name: 'Detektif',       color: '#3498db', desc: 'Selidiki satu pemain setiap malam untuk mengetahui perannya.' },
    doctor:        { icon: '💉', name: 'Dokter',         color: '#1abc9c', desc: 'Lindungi satu pemain dari pembunuhan setiap malam.' },
    citizen:       { icon: '👤', name: 'Warga Sipil',    color: '#95a5a6', desc: 'Tidak ada aksi khusus. Bantu eliminasi Mafia lewat voting!' },
    vigilante:     { icon: '⚡', name: 'Vigilante',      color: '#9b59b6', desc: 'Bisa membunuh satu pemain di malam hari—tapi tanggung sendiri risikonya.' },
    serial_killer: { icon: '🪓', name: 'Serial Killer',  color: '#e74c3c', desc: 'Membunuh di luar Mafia. Menang sendiri jika jadi satu-satunya tersisa.' },
    mayor:         { icon: '🏛️', name: 'Walikota',       color: '#f39c12', desc: 'Vote kamu dihitung dua kali. Identitas rahasia!' },
    frame_artist:  { icon: '🎭', name: 'Frame Artist',   color: '#e67e22', desc: 'Framing seseorang agar Detektif melihatnya sebagai Mafia.' },
    bodyguard:     { icon: '🛡️', name: 'Bodyguard',      color: '#16a085', desc: 'Lindungi satu pemain. Jika target diserang, kamu mati menggantikannya.' },
    informant:     { icon: '📡', name: 'Informant',       color: '#8e44ad', desc: 'Saat kamu mati, bocorkan peran salah satu pemain lain kepada semua.' },
    jester:        { icon: '🃏', name: 'The Jester',      color: '#e91e63', desc: 'Menang sendirian jika kamu dieksekusi voting siang. Kamu bisa memilih 1 pemain ikut mati bersamamu!' },
    amnesiac:      { icon: '🧠', name: 'The Amnesiac',    color: '#95a5a6', desc: 'Mulai tanpa peran. Saat malam, "ingat" peran pemain mati dan ambil alih tugasnya.' }
};

// ===== BOT AI SYSTEM =====
const PERSONALITIES = ['aggressive', 'paranoid', 'calm', 'sneaky'];
const BOT_NAMES = [
    'Aldo','Bintang','Cahya','Dewi','Eko','Farah','Gilang','Hana','Irfan','Julia',
    'Kevin','Luna','Marco','Nadia','Oscar','Pita','Qiran','Rina','Sandi','Tari',
    'Umar','Vela','Wira','Xena','Yoga','Zahra'
];

const BLUFF_TEMPLATES = {
    mafia: [
        '{name} tidak bereaksi saat berita kematian—mencurigakan.',
        '{name} kelihatan tenang banget semalam, terlalu tenang.',
        '{name} terus mengalihkan pembicaraan dari topik penting.',
        '{name} selalu berpihak ke orang yang aman buat Mafia.',
    ],
    citizen: [
        'Menurutku {name} warga biasa, gerak-geriknya tidak mencurigakan.',
        'Aku perhatikan {name} cemas banget—khas warga yang takut.',
        '{name} dari awal sudah angkat suara, itu tanda warga jujur.',
    ],
    detective: [
        'Aku sudah menemukan sesuatu, tapi belum bisa bicara sekarang.',
        'Malam ini aku dapat informasi penting. Tunggu saja.',
        'Ada yang sembunyikan sesuatu. Aku tahu siapa.',
    ]
};

function getBotBluff(botRole, targetName) {
    const isEnemy = botRole === 'mafia';
    const templates = isEnemy ? BLUFF_TEMPLATES.mafia : BLUFF_TEMPLATES.citizen;
    const template = pick(templates);
    return template.replace('{name}', targetName);
}

// ===== GAME STATE =====
let gs = {
    phase: 'menu',         // menu | night | result | day | voting | gameover
    players: [],
    playerIndex: 0,
    dayCount: 1,
    selectedTarget: null,
    nightActions: {},       // { killTarget, protectTarget, investigateTarget, vigilanteTarget, frameTarget, bodyguardTarget }
    nightResult: null,
    detectiveResult: null,
    gameOver: false,
    winner: null,
    liveVotes: {},          // { playerId: count } for display during voting
    currentFilter: 'all',
    logEntries: [],
    _processing: false      // guard to prevent double-processing
};

function resetGS() {
    gs.phase = 'menu';
    gs.players = [];
    gs.playerIndex = 0;
    gs.dayCount = 1;
    gs.selectedTarget = null;
    gs.nightActions = {};
    gs.nightResult = null;
    gs.detectiveResult = null;
    gs.gameOver = false;
    gs.winner = null;
    gs.liveVotes = {};
    gs.logEntries = [];
    gs._processing = false;
    gs.jesterPickPending = false;     // when human jester won, must pick someone to drag down
    gs.deadBuildingIndices = [];      // indices of bg-skyline buildings whose lights are perma-off
    gs.deathCauses = {};              // { playerId: 'mafia'|'sk'|'vigilante'|'vote'|'bodyguard'|'jester' }
}

// ===== PLAYER CREATION =====
function getRoleDist(n) {
    const d = GAME_CONFIG.roleDistribution[n] || GAME_CONFIG.roleDistribution[6];
    return d;
}

function createPlayers(total) {
    const dist = getRoleDist(total);
    const roles = [];
    for (const [role, count] of Object.entries(dist)) {
        for (let i = 0; i < count; i++) roles.push(role);
    }
    const shuffledRoles = shuffle(roles);
    const names = shuffle([...BOT_NAMES]).slice(0, total - 1);

    const players = [];

    // Player 0 = Human
    players.push({
        id: 0,
        name: 'Kamu',
        role: shuffledRoles[0],
        alive: true,
        isHuman: true,
        protected: false,
        framed: false,
        investigatedBy: null,
        // AI fields (unused for human)
        personality: 'calm',
        trustScores: {},
        memory: [],
        suspectList: []
    });

    for (let i = 1; i < total; i++) {
        const bot = {
            id: i,
            name: names[i - 1],
            role: shuffledRoles[i],
            alive: true,
            isHuman: false,
            protected: false,
            framed: false,
            investigatedBy: null,
            personality: pick(PERSONALITIES),
            trustScores: {},
            memory: [],
            suspectList: []
        };
        players.push(bot);
    }

    // Init trust scores
    players.forEach(p => {
        players.forEach(o => {
            if (o.id !== p.id) {
                // Mafia bots trust fellow mafia
                if (p.role === 'mafia' && o.role === 'mafia') {
                    p.trustScores[o.id] = 90;
                } else {
                    p.trustScores[o.id] = 50 + randInt(-10, 10);
                }
            }
        });
    });

    return players;
}

// ===== LOCAL STORAGE =====
function getStats() {
    try { return JSON.parse(localStorage.getItem('mafia_cos_stats_v2')) || { wins: 0, losses: 0, total: 0 }; }
    catch { return { wins: 0, losses: 0, total: 0 }; }
}
function saveStats(s) { localStorage.setItem('mafia_cos_stats_v2', JSON.stringify(s)); }
function resetStats() { localStorage.removeItem('mafia_cos_stats_v2'); }

async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}
async function generateRecoveryCode() {
    const s = getStats();
    const raw = JSON.stringify({ ...s, t: Date.now(), salt: randInt(10000,99999) });
    const h = await sha256(raw);
    return btoa(JSON.stringify({ stats: s, hash: h.slice(0,16) }));
}
async function restoreFromCode(code) {
    try {
        const d = JSON.parse(atob(code));
        if (d.stats && typeof d.stats.wins === 'number') { saveStats(d.stats); return true; }
        return false;
    } catch { return false; }
}

// ===== BACKGROUND SKYLINE =====
function buildBGSkyline() {
    const sky = $('#bgSkyline');
    sky.innerHTML = '';
    const widths =  [50,35,60,45,55,30,70,40,50,35,65,48,32,58,42,68,38,52];
    const heights = [180,240,130,290,200,160,150,220,170,250,140,210,280,160,190,230,175,260];
    for (let i = 0; i < 18; i++) {
        const b = document.createElement('div');
        b.className = 'building';
        b.style.width = widths[i % widths.length] + 'px';
        b.style.height = heights[i % heights.length] + 'px';
        const wins = document.createElement('div');
        wins.className = 'windows';
        const rows = Math.floor(heights[i % heights.length] / 12);
        for (let w = 0; w < rows * 2; w++) {
            const dot = document.createElement('div');
            dot.className = 'window-dot' + (Math.random() < 0.4 ? ' lit' : '');
            wins.appendChild(dot);
        }
        b.appendChild(wins);
        sky.appendChild(b);
    }
    // Animate windows occasionally (skip permanently-dark buildings)
    setInterval(() => {
        $$('.building:not(.permanently-dark) .window-dot').forEach(dot => {
            if (Math.random() < 0.015) dot.classList.toggle('lit');
        });
    }, 2500);
}

// Permanently extinguish a random bg-skyline building (called when a player dies)
function extinguishSkylineBuilding() {
    const buildings = $$('#bgSkyline .building:not(.permanently-dark)');
    if (!buildings.length) return;
    const b = buildings[Math.floor(Math.random() * buildings.length)];
    b.classList.add('permanently-dark');
    gs.deadBuildingIndices.push(Array.from(b.parentNode.children).indexOf(b));
}

// ===== v1.7.0 — Death cause + role theme + speaking + phase flash =====
function recordDeath(pid, cause) {
    if (!gs.deathCauses) gs.deathCauses = {};
    gs.deathCauses[pid] = cause;
    extinguishSkylineBuilding();
}

const ROLE_THEME_MAP = {
    mafia: 'mafia', detective: 'detective', doctor: 'doctor',
    citizen: '', vigilante: 'vigilante', serial_killer: 'serial_killer',
    mayor: 'mayor', frame_artist: 'frame_artist', bodyguard: 'bodyguard',
    informant: 'informant', jester: 'jester', amnesiac: 'amnesiac'
};
function applyRoleTheme(role) {
    const body = document.body;
    // strip any existing role-theme-* classes
    [...body.classList].forEach(c => { if (c.startsWith('role-theme-')) body.classList.remove(c); });
    const t = ROLE_THEME_MAP[role];
    if (t) body.classList.add('role-theme-' + t);
}

function flashPhase(text) {
    const el = $('#phaseFlash');
    if (!el) return;
    el.textContent = text;
    el.classList.remove('show');
    void el.offsetWidth; // restart animation
    el.classList.add('show');
}

function setHeartbeat(active) {
    const panel = $('#yourRolePanel');
    if (!panel) return;
    panel.classList.toggle('your-turn', !!active);
}

function flashSpeaking(pid, durationMs = 1800) {
    const el = document.querySelector(`.player-building[data-pid="${pid}"]`);
    if (!el) return;
    el.classList.add('speaking');
    setTimeout(() => el.classList.remove('speaking'), durationMs);
}

// ===== NEON SIGNS =====
function buildNeonSigns() {
    const c = $('#neonSigns');
    if (!c) return;
    c.innerHTML = '';
    const signs = [
        { text: 'BAR', color: '#ff5577', x: '12%',  y: '20%', big: false },
        { text: 'HOTEL NOIR', color: '#5af0ff', x: '32%', y: '8%',  big: true  },
        { text: 'CASINO', color: '#ffd166', x: '58%', y: '25%', big: true  },
        { text: 'JAZZ', color: '#c870ff', x: '78%', y: '12%', big: false },
        { text: '24/7', color: '#66ff99', x: '88%', y: '32%', big: false }
    ];
    signs.forEach(s => {
        const el = document.createElement('div');
        el.className = 'neon-sign' + (s.big ? ' big' : '');
        el.style.cssText = `left:${s.x};top:${s.y};--neon-color:${s.color};color:${s.color};`;
        el.textContent = s.text;
        c.appendChild(el);
    });
}

function renderStars() {
    const c = $('#starsContainer');
    c.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*2.5+0.5}px;height:${Math.random()*2.5+0.5}px;--twinkle-dur:${Math.random()*3+2}s;--twinkle-delay:${Math.random()*4}s`;
        c.appendChild(s);
    }
}

// ===== SPOTLIGHT (noir) =====
function activateSpotlight(buildingEl) {
    if (!buildingEl) { deactivateSpotlight(); return; }
    const rect = buildingEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    document.documentElement.style.setProperty('--spot-x', cx + 'px');
    document.documentElement.style.setProperty('--spot-y', cy + 'px');
    document.documentElement.style.setProperty('--spot-r', '180px');
    document.body.classList.add('spotlight-active');
}
function deactivateSpotlight() {
    document.body.classList.remove('spotlight-active');
}

// ===== CONFETTI (jester win) =====
function launchConfetti() {
    const colors = ['#e91e63','#ffd166','#5af0ff','#66ff99','#c870ff','#ff5577'];
    for (let i = 0; i < 80; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = colors[Math.floor(Math.random()*colors.length)];
        p.style.animationDuration = (2 + Math.random() * 2.5) + 's';
        p.style.animationDelay = (Math.random() * 0.8) + 's';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 5000);
    }
}

// ===== LOGGING =====
function addLog(msg, type = 'night-log') {
    const entry = { msg, type, day: gs.dayCount };
    gs.logEntries.unshift(entry);
    if (gs.logEntries.length > 80) gs.logEntries.pop();
    renderLog();
}

function renderLog() {
    const container = $('#logEntries');
    if (!container) return;
    const filter = gs.currentFilter;
    container.innerHTML = '';
    gs.logEntries.forEach(e => {
        if (filter === 'all' || e.type.includes(filter)) {
            const div = document.createElement('div');
            div.className = 'log-entry ' + e.type;
            div.textContent = `[D${e.day}] ${e.msg}`;
            container.appendChild(div);
        }
    });
}

// ===== PHASE DISPLAY =====
function updateStatusBar() {
    const alive = gs.players.filter(p => p.alive).length;
    $('#statusDay').textContent = `Hari ke-${gs.dayCount}`;
    const phaseMap = {
        night:   '🌙 Malam',
        result:  '🌙 Malam',
        day:     '☀️ Siang',
        voting:  '🗳️ Voting'
    };
    $('#statusPhase').textContent = phaseMap[gs.phase] || '🏙️ Kota';
    $('#statusAlive').textContent = `Hidup: ${alive}`;

    // BG class transitions: night (default) → voting (orange dusk) → day (blue)
    document.body.classList.remove('day-bg', 'voting-bg');
    if (gs.phase === 'voting') document.body.classList.add('voting-bg');
    else if (gs.phase === 'day') document.body.classList.add('day-bg');
    // Spotlight only during night action phase
    if (gs.phase !== 'night') deactivateSpotlight();
}

// ===== ROLE BADGE =====
function renderRoleBadge(player) {
    const info = ROLE_INFO[player.role] || ROLE_INFO.citizen;
    $('#yourRoleIcon').textContent = info.icon;
    $('#yourRoleName').textContent = info.name;
    $('#yourRoleDesc').textContent = info.desc;
    const panel = $('#yourRolePanel');
    panel.classList.add('role-reveal-anim');
    panel.style.borderColor = info.color + '60';
    panel.style.boxShadow = `0 0 20px ${info.color}30`;
    setTimeout(() => panel.classList.remove('role-reveal-anim'), 800);
}

// ===== BUILDINGS =====
function renderBuildings() {
    const grid = $('#buildingsGrid');
    grid.innerHTML = '';
    gs.players.forEach(p => {
        const el = document.createElement('div');
        el.className = 'player-building' + (!p.alive ? ' dead' : '') + (p.isHuman ? ' you-tag' : '') + (gs.selectedTarget === p.id && p.alive ? ' selected' : '');
        el.dataset.pid = p.id;

        // Determine sprite class
        let roleClass = p.role + '-building';
        let youClass = p.isHuman ? ' you-building' : '';

        const wCount = 12;
        let wHTML = '';
        const isNight = gs.phase === 'night' || gs.phase === 'result';
        for (let w = 0; w < wCount; w++) {
            const lit = p.alive && Math.random() < (isNight ? 0.25 : 0.65);
            wHTML += `<div class="wd${lit ? ' lit' : ''}"></div>`;
        }

        // Show vote badge if in voting phase
        const voteCount = gs.liveVotes[p.id] || 0;
        const voteBadge = (gs.phase === 'voting' && voteCount > 0)
            ? `<div class="vote-badge">${voteCount}</div>` : '';

        // Vote leader spotlight (live, only voting phase)
        const maxVote = Math.max(0, ...Object.values(gs.liveVotes));
        if (gs.phase === 'voting' && voteCount > 0 && voteCount === maxVote) {
            el.classList.add('vote-leader');
        }

        // Death cause badge
        const deathCause = gs.deathCauses?.[p.id];
        const deathIcons = { mafia: '🔫', sk: '🪓', vigilante: '⚡', vote: '⚖️', bodyguard: '🛡️', jester: '🃏' };
        const deathBadge = (!p.alive && deathCause)
            ? `<div class="death-badge" title="${deathCause}">${deathIcons[deathCause] || '💀'}</div>` : '';

        el.innerHTML = `
            ${voteBadge}
            ${deathBadge}
            <div class="building-sprite ${roleClass}${youClass}">
                <div class="windows-grid">${wHTML}</div>
            </div>
            <div class="police-line">DO NOT CROSS · DO NOT CROSS ·</div>
            <span class="building-name">${p.name}</span>
            <span class="building-status">${p.alive ? '🏠' : '💀'}</span>
        `;

        const human = gs.players[gs.playerIndex];
        const isAmnesiacNight = gs.phase === 'night' && human && human.alive && human.role === 'amnesiac';
        if ((p.alive && gs.phase !== 'result') || (!p.alive && isAmnesiacNight)) {
            el.style.pointerEvents = 'auto';
            el.addEventListener('click', () => handleBuildingClick(p.id));
        }

        grid.appendChild(el);
    });
}

function handleBuildingClick(pid) {
    const human = gs.players[gs.playerIndex];
    if (!human.alive) return;

    if (gs.phase === 'night') {
        const role = human.role;
        // Amnesiac targets dead players to copy their role
        if (role === 'amnesiac') {
            const target = gs.players[pid];
            if (target.alive) { showToast('🧠 Pilih pemain yang SUDAH MATI untuk diingat perannya.'); return; }
            if (target.role === 'jester' || target.role === 'amnesiac') { showToast('🧠 Tidak bisa mengingat peran ini.'); return; }
            gs.selectedTarget = pid;
            renderBuildings();
            $('#btnConfirmAction').style.display = 'inline-block';
            $$('.action-btn').forEach(b => b.classList.toggle('selected', parseInt(b.dataset.target) === pid));
            return;
        }
        if (role === 'citizen' || role === 'mayor' || role === 'informant' || role === 'jester') return;

        // Validate mafia doesn't kill mafia
        if (role === 'mafia') {
            const target = gs.players[pid];
            if (target.role === 'mafia') { showToast('⚠️ Tidak bisa membunuh sesama Mafia!'); return; }
        }
        const target = gs.players[pid];
        if (!target.alive) return;
        gs.selectedTarget = pid;
        renderBuildings();
        $('#btnConfirmAction').style.display = 'inline-block';
        // Highlight action buttons + spotlight effect
        $$('.action-btn').forEach(b => {
            b.classList.toggle('selected', parseInt(b.dataset.target) === pid);
        });
        const buildingEl = document.querySelector(`.player-building[data-pid="${pid}"]`);
        $$('.player-building').forEach(b => b.classList.remove('spotlit'));
        if (buildingEl) {
            buildingEl.classList.add('spotlit');
            activateSpotlight(buildingEl);
        }
    } else if (gs.phase === 'voting') {
        if (pid === human.id) return; // can't vote self
        const target = gs.players[pid];
        if (!target.alive) return;

        gs.selectedTarget = pid;
        // Update live votes
        gs.liveVotes = {}; // reset human vote
        gs.liveVotes[pid] = (gs.liveVotes[pid] || 0) + 1;
        renderBuildings();
        renderVoteButtons();
        $('#btnConfirmVote').disabled = false;
        $$('.vote-btn').forEach(b => b.classList.toggle('selected', parseInt(b.dataset.target) === pid));
    }
}

// ===== TOAST =====
function showToast(msg) {
    const existing = document.getElementById('_toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.id = '_toast';
    t.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:rgba(20,24,40,0.95);color:#e8c76a;padding:10px 20px;border-radius:20px;z-index:9999;border:1px solid rgba(201,168,76,0.4);font-family:var(--font-main);font-size:0.9em;pointer-events:none;';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

// ===== NIGHT PHASE =====
function startNightPhase() {
    gs.phase = 'night';
    gs.selectedTarget = null;
    gs._processing = false;
    updateStatusBar();
    renderBuildings();
    hideAllPanels();
    flashPhase('🌙 MALAM TURUN');
    const _h = gs.players[gs.playerIndex];
    const _activeRoles = ['mafia','detective','doctor','vigilante','frame_artist','bodyguard','serial_killer','amnesiac'];
    setHeartbeat(_h && _h.alive && _activeRoles.includes(_h.role));

    const human = gs.players[gs.playerIndex];
    const panel = $('#actionPanel');
    panel.style.display = 'block';

    if (!human.alive) {
        $('#actionTitle').textContent = '💀 Kamu Sudah Gugur';
        $('#actionInstruction').textContent = 'Menunggu fase malam berakhir...';
        $('#actionButtons').innerHTML = '';
        $('#btnConfirmAction').style.display = 'none';
        $('#btnSkipAction').style.display = 'inline-block';
        $('#btnSkipAction').textContent = 'Lanjutkan Otomatis';
        return;
    }

    const role = human.role;
    const info = ROLE_INFO[role];
    let title = `${info.icon} Fase Malam`;
    let instruction = '';
    let targets = [];

    switch(role) {
        case 'mafia':
            title += ' — Pilih Korban';
            instruction = 'Klik gedung atau tombol nama untuk memilih target pembunuhan:';
            targets = gs.players.filter(p => p.alive && p.role !== 'mafia');
            break;
        case 'detective':
            title += ' — Selidiki';
            instruction = 'Pilih pemain untuk diselidiki perannya:';
            targets = gs.players.filter(p => p.alive && p.id !== human.id);
            break;
        case 'doctor':
            title += ' — Lindungi';
            instruction = 'Pilih pemain untuk dilindungi (bisa dirimu sendiri):';
            targets = gs.players.filter(p => p.alive);
            break;
        case 'vigilante':
            title += ' — Eksekusi';
            instruction = 'Kamu bisa membunuh satu pemain. Hati-hati salah sasaran!';
            targets = gs.players.filter(p => p.alive && p.id !== human.id);
            break;
        case 'frame_artist':
            title += ' — Framing';
            instruction = 'Pilih pemain yang akan di-framing sebagai Mafia:';
            targets = gs.players.filter(p => p.alive && p.id !== human.id && p.role !== 'mafia');
            break;
        case 'bodyguard':
            title += ' — Jaga';
            instruction = 'Pilih pemain yang akan kamu lindungi (kamu bisa mati menggantikannya!):';
            targets = gs.players.filter(p => p.alive && p.id !== human.id);
            break;
        case 'serial_killer':
            title += ' — Bunuh';
            instruction = 'Pilih siapa saja yang ingin kamu bunuh malam ini:';
            targets = gs.players.filter(p => p.alive && p.id !== human.id);
            break;
        case 'amnesiac': {
            title += ' — Mengingat';
            const deadOpts = gs.players.filter(p => !p.alive && p.role !== 'jester' && p.role !== 'amnesiac');
            if (deadOpts.length === 0) {
                instruction = '🧠 Belum ada pemain mati yang bisa diingat. Tunggu sampai ada korban...';
                targets = [];
                $('#btnSkipAction').textContent = '😴 Tunggu Hingga Pagi';
            } else {
                instruction = 'Pilih pemain MATI yang ingin kamu ingat perannya & ambil alih:';
                targets = deadOpts;
            }
            break;
        }
        case 'jester':
            title += ' — Berakting';
            instruction = '🃏 Tugasmu: tampak mencurigakan agar warga mengeksekusi kamu di voting siang!';
            targets = [];
            $('#btnSkipAction').textContent = '😴 Tidur & Rencanakan';
            break;
        case 'mayor':
        case 'citizen':
        case 'informant':
        default:
            title += ' — Tidur';
            instruction = `Sebagai ${info.name}, kamu tidak beraksi di malam hari. Tunggu fajar.`;
            targets = [];
            $('#btnSkipAction').textContent = '😴 Tidur & Lanjutkan';
            break;
    }

    $('#actionTitle').textContent = title;
    $('#actionInstruction').textContent = instruction;
    $('#btnConfirmAction').style.display = targets.length ? 'none' : 'none'; // show after selection
    $('#btnSkipAction').style.display = 'inline-block';
    if (role !== 'citizen' && role !== 'mayor' && role !== 'informant' && role !== 'jester') {
        $('#btnSkipAction').textContent = '⏭ Lewati';
    }

    // Render target buttons
    const btnsContainer = $('#actionButtons');
    btnsContainer.innerHTML = '';
    targets.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'action-btn';
        btn.dataset.target = t.id;
        btn.innerHTML = `${ROLE_INFO[t.role] ? '' : ''}${t.name}`;
        btn.addEventListener('click', () => {
            gs.selectedTarget = t.id;
            renderBuildings();
            $$('.action-btn').forEach(b => b.classList.toggle('selected', parseInt(b.dataset.target) === t.id));
            $('#btnConfirmAction').style.display = 'inline-block';
        });
        btnsContainer.appendChild(btn);
    });
}

// ===== NIGHT ACTION PROCESSING =====
function collectBotNightActions() {
    const players = gs.players;
    const alive = players.filter(p => p.alive);
    const actions = {
        killTargets: [],   // mafia kills
        skKillTarget: null,
        vigilanteTarget: null,
        investigateTarget: null,
        protectTarget: null,
        bodyguardTarget: null,
        frameTarget: null
    };

    // --- MAFIA: coordinate to kill one non-mafia ---
    const aliveMafia = alive.filter(p => p.role === 'mafia' && !p.isHuman);
    const nonMafia = alive.filter(p => p.role !== 'mafia' && p.role !== 'serial_killer');
    if (aliveMafia.length > 0 && nonMafia.length > 0) {
        // Choose target: prefer targets with low trust from mafia perspective
        // Smart: target doctor/detective first if suspected
        let mafiaKillTarget = null;
        const highPriority = nonMafia.filter(p => p.role === 'doctor' || p.role === 'detective' || p.role === 'vigilante');
        if (highPriority.length > 0 && Math.random() < 0.4) {
            mafiaKillTarget = pick(highPriority).id;
        } else {
            mafiaKillTarget = pick(nonMafia).id;
        }
        actions.killTargets = [mafiaKillTarget];
    }

    // --- DETECTIVE BOT ---
    const detectiveBot = alive.find(p => p.role === 'detective' && !p.isHuman);
    if (detectiveBot) {
        // Prioritize uninvestigated, suspected players
        const opts = alive.filter(p => p.id !== detectiveBot.id && !p.investigatedBy);
        const suspected = opts.filter(p => detectiveBot.suspectList.includes(p.id));
        investigateTarget = suspected.length ? pick(suspected).id : (opts.length ? pick(opts).id : null);
        if (!investigateTarget) {
            const fallback = alive.filter(p => p.id !== detectiveBot.id);
            investigateTarget = fallback.length ? pick(fallback).id : null;
        }
        actions.investigateTarget = investigateTarget;
    }
    var investigateTarget = actions.investigateTarget;

    // --- DOCTOR BOT ---
    const doctorBot = alive.find(p => p.role === 'doctor' && !p.isHuman);
    if (doctorBot) {
        // Smart: protect detective/vigilante/self
        const priority = alive.filter(p => p.role === 'detective' || p.role === 'vigilante');
        if (priority.length && Math.random() < 0.5) {
            actions.protectTarget = pick(priority).id;
        } else {
            actions.protectTarget = pick(alive).id;
        }
    }

    // --- VIGILANTE BOT ---
    const vigilanteBot = alive.find(p => p.role === 'vigilante' && !p.isHuman);
    if (vigilanteBot && vigilanteBot.suspectList.length > 0 && Math.random() < 0.5) {
        const highSuspect = alive.filter(p => vigilanteBot.suspectList.includes(p.id) && p.id !== vigilanteBot.id);
        if (highSuspect.length) actions.vigilanteTarget = pick(highSuspect).id;
    }

    // --- FRAME ARTIST BOT ---
    const frameBot = alive.find(p => p.role === 'frame_artist' && !p.isHuman);
    if (frameBot) {
        const victims = alive.filter(p => p.id !== frameBot.id && p.role !== 'mafia');
        if (victims.length) actions.frameTarget = pick(victims).id;
    }

    // --- BODYGUARD BOT ---
    const bgBot = alive.find(p => p.role === 'bodyguard' && !p.isHuman);
    if (bgBot) {
        const opts2 = alive.filter(p => p.id !== bgBot.id);
        if (opts2.length) actions.bodyguardTarget = pick(opts2).id;
    }

    // --- SERIAL KILLER BOT ---
    const skBot = alive.find(p => p.role === 'serial_killer' && !p.isHuman);
    if (skBot) {
        const opts3 = alive.filter(p => p.id !== skBot.id);
        actions.skKillTarget = opts3.length ? pick(opts3).id : null;
    }

    return actions;
}

async function processNight() {
    if (gs._processing) return;
    gs._processing = true;

    const human = gs.players[gs.playerIndex];
    const humanRole = human.role;
    const humanTarget = gs.selectedTarget;

    // Collect bot actions
    const botActions = collectBotNightActions();

    // Apply human action to bot actions
    const finalActions = { ...botActions };

    if (human.alive) {
        switch(humanRole) {
            case 'mafia':
                if (humanTarget !== null) finalActions.killTargets = [humanTarget];
                break;
            case 'detective':
                if (humanTarget !== null) finalActions.investigateTarget = humanTarget;
                break;
            case 'doctor':
                if (humanTarget !== null) finalActions.protectTarget = humanTarget;
                break;
            case 'vigilante':
                if (humanTarget !== null) finalActions.vigilanteTarget = humanTarget;
                break;
            case 'frame_artist':
                if (humanTarget !== null) finalActions.frameTarget = humanTarget;
                break;
            case 'bodyguard':
                if (humanTarget !== null) finalActions.bodyguardTarget = humanTarget;
                break;
            case 'serial_killer':
                if (humanTarget !== null) finalActions.skKillTarget = humanTarget;
                break;
            case 'amnesiac':
                if (humanTarget !== null) finalActions.amnesiacTarget = humanTarget;
                break;
        }
    }

    // AMNESIAC BOT: pick a dead player whose role to copy
    const amnesiacBot = gs.players.find(p => p.role === 'amnesiac' && !p.isHuman && p.alive);
    if (amnesiacBot && finalActions.amnesiacTarget === undefined) {
        const deadCopyable = gs.players.filter(p => !p.alive && p.role !== 'jester' && p.role !== 'amnesiac');
        if (deadCopyable.length && Math.random() < 0.6) {
            finalActions.amnesiacTarget = pick(deadCopyable).id;
            finalActions._amnesiacBotId = amnesiacBot.id;
        }
    } else if (finalActions.amnesiacTarget !== undefined && human.role === 'amnesiac') {
        finalActions._amnesiacBotId = human.id;
    }

    // === RESOLVE NIGHT ===
    const players = gs.players;
    const result = {
        killed: [],         // player ids who die
        protected: false,
        bodyguardDied: false,
        bodyguardId: null,
        investigateResult: null,
        frameResult: null,
        specialMsg: []
    };

    // 1) Frame Artist: mark target as framed
    if (finalActions.frameTarget !== null && finalActions.frameTarget !== undefined) {
        const ft = players[finalActions.frameTarget];
        if (ft && ft.alive) {
            ft.framed = true;
            result.frameResult = ft.name;
        }
    }

    // 2) Detective investigation
    if (finalActions.investigateTarget !== null && finalActions.investigateTarget !== undefined) {
        const inv = players[finalActions.investigateTarget];
        if (inv && inv.alive) {
            inv.investigatedBy = gs.dayCount;
            // If framed, detective sees as mafia
            const seemsMafia = inv.role === 'mafia' || inv.framed;
            result.investigateResult = { name: inv.name, isMafia: seemsMafia, realRole: inv.role };
            // Update detective bot's suspect list
            const detBot = players.find(p => p.role === 'detective' && !p.isHuman && p.alive);
            if (detBot && seemsMafia) {
                if (!detBot.suspectList.includes(inv.id)) detBot.suspectList.push(inv.id);
                // Share info with town bots (lower trust on suspect)
                players.filter(p => !p.isHuman && p.alive && p.role !== 'mafia').forEach(b => {
                    if (b.trustScores[inv.id] !== undefined) b.trustScores[inv.id] -= 30;
                    if (!b.suspectList.includes(inv.id)) b.suspectList.push(inv.id);
                });
            }
        }
    }

    // 3) Doctor protection (simple)
    const protId = finalActions.protectTarget;

    // 4) Bodyguard protection
    const bgId = finalActions.bodyguardTarget;
    const bodyguard = players.find(p => p.role === 'bodyguard' && p.alive);

    // 5) Mafia kill
    const mafiaKill = finalActions.killTargets.length ? finalActions.killTargets[0] : null;
    const killCauses = {}; // pid -> cause
    if (mafiaKill !== null && mafiaKill !== undefined) {
        if (mafiaKill === bgId && bodyguard && bodyguard.alive) {
            // Bodyguard intercepts
            bodyguard.alive = false;
            recordDeath(bodyguard.id, 'bodyguard');
            result.bodyguardDied = true;
            result.bodyguardId = bodyguard.id;
            result.specialMsg.push(`${bodyguard.name} (Bodyguard) mati melindungi ${players[mafiaKill].name}!`);
            addLog(`🛡️ ${bodyguard.name} tewas melindungi ${players[mafiaKill].name}!`, 'kill-log');
        } else if (mafiaKill === protId) {
            result.protected = true;
            addLog(`💉 Seseorang diserang tapi diselamatkan Dokter!`, 'special-log');
        } else {
            result.killed.push(mafiaKill);
            killCauses[mafiaKill] = 'mafia';
        }
    }

    // 6) Vigilante kill
    if (finalActions.vigilanteTarget !== null && finalActions.vigilanteTarget !== undefined) {
        const vt = finalActions.vigilanteTarget;
        if (!result.killed.includes(vt) && vt !== mafiaKill) {
            result.killed.push(vt);
            killCauses[vt] = 'vigilante';
            result.specialMsg.push(`⚡ Vigilante mengeksekusi seseorang di kegelapan!`);
        }
    }

    // 7) Serial Killer kill
    if (finalActions.skKillTarget !== null && finalActions.skKillTarget !== undefined) {
        const skt = finalActions.skKillTarget;
        if (!result.killed.includes(skt)) {
            result.killed.push(skt);
            killCauses[skt] = 'sk';
            result.specialMsg.push(`🪓 Ada pembunuhan misterius oleh Serial Killer!`);
        }
    }

    // Apply deaths
    result.killed.forEach(id => {
        if (players[id] && players[id].alive) {
            players[id].alive = false;
            recordDeath(id, killCauses[id] || 'mafia');
            addLog(`💀 ${players[id].name} ditemukan tewas di malam hari!`, 'kill-log');

            // Informant ability: on death, reveal another player's role
            if (players[id].role === 'informant') {
                const revealCandidates = players.filter(p => p.alive && p.id !== id);
                if (revealCandidates.length) {
                    const revealed = pick(revealCandidates);
                    result.specialMsg.push(`📡 Informant sekarat: "${revealed.name} adalah ${ROLE_INFO[revealed.role]?.name || revealed.role}!"`);
                    addLog(`📡 Info dari Informant: ${revealed.name} adalah ${ROLE_INFO[revealed.role]?.name || revealed.role}`, 'special-log');
                }
            }
        }
    });

    // Clear frames
    players.forEach(p => { p.framed = false; });

    // AMNESIAC: copy role from a dead player
    if (finalActions.amnesiacTarget !== undefined && finalActions._amnesiacBotId !== undefined) {
        const amne = players[finalActions._amnesiacBotId];
        const dead = players[finalActions.amnesiacTarget];
        if (amne && amne.alive && dead && !dead.alive && dead.role !== 'jester' && dead.role !== 'amnesiac') {
            amne.role = dead.role;
            const newInfo = ROLE_INFO[dead.role];
            addLog(`🧠 ${amne.name} (Amnesiac) mengingat dirinya — sekarang adalah ${newInfo?.name || dead.role}!`, 'special-log');
            result.specialMsg.push(`🧠 Amnesiac telah mengambil identitas baru di kota...`);
            if (amne.isHuman) {
                renderRoleBadge(amne);
                applyRoleTheme(amne.role);
                result.specialMsg.push(`✨ Kamu sekarang adalah ${newInfo?.icon} ${newInfo?.name}!`);
            }
        }
    }

    gs.nightResult = result;
    gs._processing = false;

    // Bot bluffing in log (after night)
    setTimeout(() => {
        const aliveBots = players.filter(p => !p.isHuman && p.alive);
        const talkers = aliveBots.filter(() => Math.random() < 0.35).slice(0, 2);
        talkers.forEach((bot, i) => {
            const others = players.filter(p => p.alive && p.id !== bot.id);
            if (others.length) {
                const target = pick(others);
                const bluff = getBotBluff(bot.role, target.name);
                setTimeout(() => {
                    addLog(`💬 ${bot.name}: "${bluff}"`, 'bluff-log');
                    flashSpeaking(bot.id, 1600);
                }, i * 700);
            }
        });
    }, 500);

    showNightResult();
}

// ===== SHOW NIGHT RESULT =====
function showNightResult() {
    gs.phase = 'result';
    hideAllPanels();
    updateStatusBar();
    renderBuildings();

    const r = gs.nightResult;
    const human = gs.players[gs.playerIndex];
    let html = '';

    // Deaths
    if (r.killed.length === 0 && !r.bodyguardDied) {
        if (r.protected) {
            html += `<div class="result-card safe"><h3>🌅 Pagi yang Aman</h3><p>Tidak ada korban. Dokter berhasil menyelamatkan seseorang!</p></div>`;
        } else {
            html += `<div class="result-card safe"><h3>🌅 Pagi yang Damai</h3><p>Malam berlalu tanpa korban jiwa.</p></div>`;
        }
    } else {
        if (r.bodyguardDied) {
            html += `<div class="result-card special"><h3>🛡️ Bodyguard Gugur!</h3><p>${gs.players[r.bodyguardId]?.name} mati menggantikan targetnya.</p></div>`;
        }
        r.killed.forEach(id => {
            const p = gs.players[id];
            if (!p) return;
            html += `<div class="result-card kill"><h3>💀 Korban Ditemukan!</h3><p><strong>${p.name}</strong>${p.isHuman ? ' <em>(Kamu!)</em>' : ''} terbunuh semalam.</p></div>`;
        });
    }

    // Special messages
    r.specialMsg.forEach(msg => {
        html += `<div class="result-card special"><p>${msg}</p></div>`;
    });

    // Detective result (for human detective)
    if (human.role === 'detective' && human.alive && r.investigateResult) {
        const ir = r.investigateResult;
        html += `<div class="result-card info"><h3>🔍 Hasil Penyelidikan</h3><p><strong>${ir.name}</strong> adalah <strong>${ir.isMafia ? 'MAFIA! 🔫' : `${ROLE_INFO[ir.realRole]?.name || ir.realRole} ✅`}</strong>${ir.isMafia && !['mafia'].includes(ir.realRole) ? ' <em>(mungkin di-framing)</em>' : ''}</p></div>`;
    }

    $('#resultCard').innerHTML = html;
    $('#nightResult').style.display = 'block';

    // Check win after deaths
    if (checkWin()) {
        setTimeout(() => showGameOver(), 1200);
        $('#btnContinueToDay').style.display = 'none';
    } else {
        $('#btnContinueToDay').style.display = 'inline-block';
    }
}

// ===== DAY PHASE =====
function startDayPhase() {
    gs.phase = 'day';
    gs.selectedTarget = null;
    updateStatusBar();
    renderBuildings();
    hideAllPanels();
    flashPhase('☀️ FAJAR TIBA');
    setHeartbeat(false);

    addLog(`☀️ Hari ke-${gs.dayCount}: Kota terbangun. Warga berdiskusi...`, 'night-log');

    if (checkWin()) { showGameOver(); return; }

    // Brief discussion delay then voting
    setTimeout(() => {
        if (!gs.gameOver) startVotingPhase();
    }, 1200);
}

// ===== VOTING PHASE =====
function startVotingPhase() {
    gs.phase = 'voting';
    gs.selectedTarget = null;
    gs.liveVotes = {};
    updateStatusBar();
    renderBuildings();
    hideAllPanels();
    flashPhase('🗳️ VOTING DIMULAI');

    const human = gs.players[gs.playerIndex];
    setHeartbeat(human && human.alive);
    const panel = $('#votingPanel');
    panel.style.display = 'block';
    $('#btnConfirmVote').disabled = true;
    $('#btnConfirmVote').textContent = '✅ Konfirmasi Vote';

    renderVoteButtons();

    if (!human.alive) {
        $('#votingInstruction').textContent = 'Kamu sudah mati. Vote dilanjutkan oleh warga lain.';
        $('#btnConfirmVote').textContent = '⏭ Lanjutkan';
        $('#btnConfirmVote').disabled = false;
    }
}

function renderVoteButtons() {
    const human = gs.players[gs.playerIndex];
    const container = $('#voteButtons');
    if (!container) return;
    container.innerHTML = '';
    const alive = gs.players.filter(p => p.alive);

    alive.forEach(p => {
        if (p.id === human.id) return;
        const btn = document.createElement('button');
        btn.className = 'vote-btn' + (gs.selectedTarget === p.id ? ' selected' : '');
        btn.dataset.target = p.id;
        const vc = gs.liveVotes[p.id] || 0;
        btn.innerHTML = `${p.name}${vc > 0 ? `<span class="vote-count">(${vc})</span>` : ''}`;
        btn.addEventListener('click', () => {
            if (!human.alive) return;
            gs.selectedTarget = p.id;
            // Update displayed vote
            gs.liveVotes = {};
            gs.liveVotes[p.id] = 1;
            renderBuildings();
            renderVoteButtons();
            $('#btnConfirmVote').disabled = false;
        });
        container.appendChild(btn);
    });
}

// ===== BOT VOTING AI =====
function botVoting() {
    const players = gs.players;
    const alive = players.filter(p => p.alive);
    const votes = {};
    alive.forEach(p => votes[p.id] = 0);

    alive.forEach(p => {
        if (p.isHuman) return; // human vote handled separately
        const others = alive.filter(o => o.id !== p.id);
        if (!others.length) return;

        let voteTarget = null;

        if (p.role === 'mafia' || p.role === 'frame_artist') {
            // Vote non-mafia with lowest trust (try to eliminate good roles)
            const nonMafia = others.filter(o => o.role !== 'mafia');
            // Target detective/vigilante preferably
            const priority = nonMafia.filter(o => o.role === 'detective' || o.role === 'vigilante' || o.role === 'bodyguard');
            if (priority.length && Math.random() < 0.55) {
                voteTarget = pick(priority).id;
            } else {
                voteTarget = pick(nonMafia)?.id;
            }
        } else if (p.role === 'detective') {
            // Vote highest suspect
            const suspected = others.filter(o => p.suspectList.includes(o.id));
            if (suspected.length) {
                voteTarget = suspected[0].id;
            } else {
                // Lowest trust
                const sorted = [...others].sort((a, b) => (p.trustScores[a.id] || 50) - (p.trustScores[b.id] || 50));
                voteTarget = sorted[0]?.id;
            }
        } else {
            // Other roles: personality-based
            switch(p.personality) {
                case 'aggressive': {
                    // Most voted so far (bandwagon)
                    const sorted = Object.entries(votes).filter(([id]) => others.some(o => o.id === parseInt(id)))
                        .sort((a,b) => b[1]-a[1]);
                    voteTarget = sorted[0] ? parseInt(sorted[0][0]) : pick(others)?.id;
                    break;
                }
                case 'paranoid': {
                    // Lowest trust
                    const sorted2 = [...others].sort((a,b) => (p.trustScores[a.id]||50)-(p.trustScores[b.id]||50));
                    voteTarget = sorted2[0]?.id;
                    break;
                }
                case 'sneaky': {
                    // Random from suspect list, else random
                    const susp = others.filter(o => p.suspectList.includes(o.id));
                    voteTarget = susp.length ? pick(susp).id : pick(others)?.id;
                    break;
                }
                default: // calm
                    voteTarget = pick(others)?.id;
            }
        }

        if (voteTarget !== null && voteTarget !== undefined) {
            votes[voteTarget] = (votes[voteTarget] || 0) + 1;

            // Mayor double vote
            if (p.role === 'mayor') {
                votes[voteTarget] = (votes[voteTarget] || 0) + 1;
            }
        }

        // Bluff occasionally
        if (Math.random() < 0.2 && voteTarget !== null) {
            const tname = players[voteTarget]?.name || '?';
            addLog(`💬 ${p.name}: "${getBotBluff(p.role, tname)}"`, 'bluff-log');
            flashSpeaking(p.id, 1500);
        }
    });

    return votes;
}

// ===== JESTER WIN: pick a player to drag down =====
function promptJesterDrag(candidates) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex';
    overlay.style.zIndex = '5000';
    overlay.innerHTML = `
        <div class="modal-card glass-panel" style="max-width:480px;">
            <div class="modal-header">
                <h2>🃏 KAMU MENANG SEBAGAI JESTER!</h2>
                <p>Pilih satu pemain yang akan ikut mati bersamamu...</p>
            </div>
            <div class="modal-body">
                <div class="vote-buttons" id="jesterDragBtns"></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    const btnsC = overlay.querySelector('#jesterDragBtns');
    candidates.forEach(p => {
        const b = document.createElement('button');
        b.className = 'vote-btn';
        b.textContent = p.name;
        b.addEventListener('click', () => {
            p.alive = false;
            recordDeath(p.id, 'jester');
            addLog(`🃏 Jester menyeret ${p.name} ke kuburan!`, 'kill-log');
            overlay.remove();
            gs.jesterPickPending = false;
            renderBuildings();
            showGameOver();
        });
        btnsC.appendChild(b);
    });
}

async function processVoting() {
    if (gs._processing) return;
    gs._processing = true;

    const human = gs.players[gs.playerIndex];
    const botVotes = botVoting();

    // Add human vote
    if (human.alive && gs.selectedTarget !== null) {
        botVotes[gs.selectedTarget] = (botVotes[gs.selectedTarget] || 0) + 1;
        // Mayor double vote
        if (human.role === 'mayor') {
            botVotes[gs.selectedTarget] = (botVotes[gs.selectedTarget] || 0) + 1;
        }
    }

    // Find max
    const alive = gs.players.filter(p => p.alive);
    let maxVotes = 0, eliminated = null, tie = false;
    alive.forEach(p => {
        const c = botVotes[p.id] || 0;
        addLog(`🗳️ ${p.name}: ${c} suara`, 'vote-log');
        if (c > maxVotes) { maxVotes = c; eliminated = p.id; tie = false; }
        else if (c === maxVotes && c > 0) { tie = true; }
    });

    if (tie || maxVotes === 0 || eliminated === null) {
        addLog('⚖️ Hasil voting seri! Tidak ada yang dieliminasi.', 'vote-log');
    } else {
        const elim = gs.players[eliminated];
        elim.alive = false;
        recordDeath(elim.id, 'vote');
        addLog(`⚖️ ${elim.name} tereliminasi oleh voting! (Peran: ${ROLE_INFO[elim.role]?.name || elim.role})`, 'vote-log');

        // JESTER WIN — eliminated by vote = jester wins!
        if (elim.role === 'jester') {
            addLog(`🃏 ${elim.name} tertawa terbahak-bahak... DIA ADALAH JESTER!`, 'win-log');
            gs.gameOver = true;
            gs.winner = 'jester';
            gs._jesterId = elim.id;
            // Jester drags one alive player down
            const dragCandidates = gs.players.filter(p => p.alive);
            if (dragCandidates.length) {
                let dragId;
                if (elim.isHuman) {
                    // Human picks via prompt-style selection (use a quick modal-less choice)
                    gs.jesterPickPending = true;
                    promptJesterDrag(dragCandidates);
                    gs._processing = false;
                    renderBuildings();
                    return; // showGameOver triggered after pick
                } else {
                    // Bot picks: prefer most-suspicious (high suspect, or random)
                    const target = pick(dragCandidates);
                    dragId = target.id;
                    target.alive = false;
                    recordDeath(target.id, 'jester');
                    addLog(`🃏 Jester membawa ${target.name} mati bersamanya!`, 'kill-log');
                }
            }
        }

        // Informant on elimination
        if (elim.role === 'informant') {
            const candidates = gs.players.filter(p => p.alive);
            if (candidates.length) {
                const rev = pick(candidates);
                addLog(`📡 ${elim.name} (Informant) terakhir berbisik: "${rev.name} adalah ${ROLE_INFO[rev.role]?.name || rev.role}"`, 'special-log');
            }
        }
    }

    // Update AI trust: bots adjust trust based on who voted who
    gs.players.filter(p => !p.isHuman && p.alive).forEach(bot => {
        // Slight trust decrease for eliminated player's faction sympathy
        if (eliminated !== null) {
            const elimRole = gs.players[eliminated]?.role;
            if (elimRole === 'mafia' && bot.role !== 'mafia') {
                // Good: increased trust that town is working
                Object.keys(bot.trustScores).forEach(id => {
                    bot.trustScores[id] = Math.min(100, (bot.trustScores[id] || 50) + 3);
                });
            }
        }
    });

    gs._processing = false;
    renderBuildings();

    if (checkWin()) {
        showGameOver();
        return;
    }

    gs.dayCount++;
    gs.selectedTarget = null;
    gs.liveVotes = {};
    addLog(`--- 🌙 Malam ke-${gs.dayCount} turun ---`, 'night-log');
    startNightPhase();
}

// ===== WIN CONDITION =====
function checkWin() {
    // Jester wins are set externally during voting
    if (gs.gameOver && gs.winner === 'jester') return true;

    const alive = gs.players.filter(p => p.alive);
    const aliveMafia = alive.filter(p => p.role === 'mafia').length;
    const aliveSK = alive.filter(p => p.role === 'serial_killer').length;
    const aliveOthers = alive.filter(p => p.role !== 'mafia' && p.role !== 'serial_killer').length;

    if (aliveSK > 0 && alive.length === 1 && alive[0].role === 'serial_killer') {
        gs.gameOver = true; gs.winner = 'serial_killer'; return true;
    }
    if (aliveMafia > 0 && aliveMafia >= aliveOthers + aliveSK) {
        gs.gameOver = true; gs.winner = 'mafia'; return true;
    }
    if (aliveMafia === 0 && aliveSK === 0) {
        gs.gameOver = true; gs.winner = 'citizens'; return true;
    }
    if (aliveMafia === 0 && aliveSK > 0 && alive.length > 1) {
        gs.gameOver = true; gs.winner = 'citizens'; return true;
    }
    return false;
}

// ===== GAME OVER =====
function showGameOver() {
    if (gs.jesterPickPending) return; // wait for human jester to pick drag target
    gs.gameOver = true;
    gs.phase = 'gameover';
    hideAllPanels();
    deactivateSpotlight();
    setHeartbeat(false);

    const human = gs.players[gs.playerIndex];
    const stats = getStats();
    stats.total++;

    // Apply win-themed body class for neon sign colors
    document.body.classList.remove('win-mafia','win-citizens','win-jester','win-sk');

    let title = '', winMsg = '', playerWon = false;
    if (gs.winner === 'citizens') {
        title = '🏆 Warga Menang!';
        winMsg = 'Semua ancaman telah dieliminasi. Kota kembali aman!';
        playerWon = (human.role !== 'mafia' && human.role !== 'serial_killer' && human.role !== 'jester');
        document.body.classList.add('win-citizens');
    } else if (gs.winner === 'mafia') {
        title = '🔫 Mafia Menang!';
        winMsg = 'Mafia berhasil menguasai kota dari bayang-bayang...';
        playerWon = (human.role === 'mafia' && human.alive);
        document.body.classList.add('win-mafia');
    } else if (gs.winner === 'serial_killer') {
        title = '🪓 Serial Killer Menang!';
        winMsg = 'Kota dilanda teror. Pembunuh tunggal tak tertandingi.';
        playerWon = (human.role === 'serial_killer' && human.alive);
        document.body.classList.add('win-sk');
    } else if (gs.winner === 'jester') {
        title = '🃏 The Jester Menang!';
        winMsg = 'Si Badut tertawa di balik tiang gantungan... Dia mendapatkan apa yang diinginkan!';
        playerWon = (human.role === 'jester');
        document.body.classList.add('win-jester');
        if (playerWon) launchConfetti();
    }

    if (playerWon) stats.wins++; else stats.losses++;
    saveStats(stats);

    const roleInfo = ROLE_INFO[human.role] || ROLE_INFO.citizen;
    let body = `
        <p>${winMsg}</p>
        <p class="go-role">${roleInfo.icon} Kamu adalah: ${roleInfo.name}</p>
        <p class="go-result">${playerWon ? '✅ KAMU MENANG!' : '❌ Kamu kalah.'}</p>
        <div class="player-reveal">
    `;
    gs.players.forEach(p => {
        const ri = ROLE_INFO[p.role] || ROLE_INFO.citizen;
        body += `<div class="reveal-entry${p.isHuman?' human':''}"><span>${ri.icon}</span><span><strong>${p.name}</strong> — ${ri.name}</span><span>${p.alive?'🏠':'💀'}</span></div>`;
    });
    body += '</div>';

    $('#gameOverTitle').textContent = title;
    $('#gameOverBody').innerHTML = body;
    $('#gameOverModal').style.display = 'flex';
}

// ===== PANEL HELPERS =====
function hideAllPanels() {
    $('#actionPanel').style.display = 'none';
    $('#nightResult').style.display = 'none';
    $('#votingPanel').style.display = 'none';
}

// ===== RENDER ROLE PREVIEW =====
function updatePlayerCountDisplay() {
    const total = parseInt($('#totalPlayersRange').value);
    $('#countNumber').textContent = total;
    const dist = getRoleDist(total);
    const preview = $('#rolePreview');
    preview.innerHTML = '';
    for (const [role, count] of Object.entries(dist)) {
        const info = ROLE_INFO[role];
        if (!info) continue;
        const badge = document.createElement('span');
        badge.className = `role-badge ${role}-badge`;
        badge.textContent = `${info.icon} ${info.name}: ${count}`;
        preview.appendChild(badge);
    }
}

// ===== UPDATE LOG & SETTINGS RENDER =====
function renderUpdateLog() {
    const c = $('#updateLogContent');
    c.innerHTML = '';
    GAME_CONFIG.updateLog.forEach(u => {
        const el = document.createElement('div');
        el.className = 'update-entry';
        el.innerHTML = `<h3>🚀 v${u.version}</h3><span class="update-date">📅 ${u.date} — ${u.title}</span><ul>${u.changes.map(ch=>`<li>${ch}</li>`).join('')}</ul>`;
        c.appendChild(el);
    });
}

function renderSettings() {
    const s = getStats();
    $('#statWins').textContent = s.wins;
    $('#statLosses').textContent = s.losses;
    $('#statTotal').textContent = s.total;
    $('#codeDisplay').style.display = 'none';
    $('#restoreCodeInput').value = '';
    $('#restoreStatus').textContent = '';
}

// ===== GAME START / RESET =====
function startGame() {
    const total = parseInt($('#totalPlayersRange').value);
    resetGS();
    gs.players = createPlayers(total);
    gs.playerIndex = 0;
    gs.phase = 'night';

    $('#playerCountModal').style.display = 'none';
    $('#mainMenu').style.display = 'none';
    $('#gameContainer').style.display = 'block';
    $('#gameOverModal').style.display = 'none';
    $('#logEntries').innerHTML = '';
    gs.logEntries = [];

    const human = gs.players[0];
    renderRoleBadge(human);
    applyRoleTheme(human.role);
    updateStatusBar();
    renderBuildings();

    const ri = ROLE_INFO[human.role] || ROLE_INFO.citizen;
    addLog(`🎮 Game dimulai! ${total} pemain.`, 'night-log');
    addLog(`Peranmu: ${ri.icon} ${ri.name} — ${ri.desc}`, 'night-log');

    startNightPhase();
}

function resetGame() {
    resetGS();
    $('#gameContainer').style.display = 'none';
    $('#mainMenu').style.display = 'flex';
    $('#gameOverModal').style.display = 'none';
    $('#playerCountModal').style.display = 'none';
    document.body.classList.remove('day-bg','voting-bg','win-mafia','win-citizens','win-jester','win-sk');
    [...document.body.classList].forEach(c => { if (c.startsWith('role-theme-')) document.body.classList.remove(c); });
    setHeartbeat(false);
    deactivateSpotlight();
    // Restore all skyline lights
    $$('#bgSkyline .building').forEach(b => b.classList.remove('permanently-dark'));
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Menu
    $('#btnPlay').addEventListener('click', () => {
        $('#playerCountModal').style.display = 'flex';
        updatePlayerCountDisplay();
    });
    $('#btnUpdateLog').addEventListener('click', () => { renderUpdateLog(); $('#updateLogModal').style.display = 'flex'; });
    $('#btnSettings').addEventListener('click', () => { renderSettings(); $('#settingsModal').style.display = 'flex'; });

    // Player count
    $('#countMinus').addEventListener('click', () => {
        const r = $('#totalPlayersRange');
        r.value = Math.max(GAME_CONFIG.minPlayers || 4, parseInt(r.value) - 1);
        updatePlayerCountDisplay();
    });
    $('#countPlus').addEventListener('click', () => {
        const r = $('#totalPlayersRange');
        r.value = Math.min(GAME_CONFIG.maxPlayers || 12, parseInt(r.value) + 1);
        updatePlayerCountDisplay();
    });
    $('#totalPlayersRange').addEventListener('input', updatePlayerCountDisplay);
    $('#btnCancelPlay').addEventListener('click', () => $('#playerCountModal').style.display = 'none');
    $('#btnStartGame').addEventListener('click', startGame);

    // Modals close
    $('#btnCloseUpdateLog').addEventListener('click', () => $('#updateLogModal').style.display = 'none');
    $('#btnCloseSettings').addEventListener('click', () => $('#settingsModal').style.display = 'none');

    // Click outside modal
    $$('.modal-overlay').forEach(m => {
        m.addEventListener('click', e => { if (e.target === m) m.style.display = 'none'; });
    });

    // Settings actions
    $('#btnGenerateCode').addEventListener('click', async () => {
        const code = await generateRecoveryCode();
        $('#recoveryCode').textContent = code;
        $('#codeDisplay').style.display = 'block';
    });
    $('#btnCopyCode').addEventListener('click', () => {
        navigator.clipboard.writeText($('#recoveryCode').textContent)
            .then(() => showToast('✅ Kode disalin!'))
            .catch(() => showToast('⚠️ Gagal menyalin kode.'));
    });
    $('#btnRestoreData').addEventListener('click', async () => {
        const code = $('#restoreCodeInput').value.trim();
        if (!code) { $('#restoreStatus').textContent = 'Masukkan kode.'; return; }
        const ok = await restoreFromCode(code);
        $('#restoreStatus').textContent = ok ? '✅ Data dipulihkan!' : '❌ Kode tidak valid.';
        $('#restoreStatus').className = 'restore-status ' + (ok ? 'success' : 'error');
        if (ok) renderSettings();
    });
    $('#btnResetData').addEventListener('click', () => {
        if (confirm('⚠️ Reset semua data? Tidak bisa dibatalkan!')) {
            resetStats();
            renderSettings();
            showToast('✅ Data direset.');
        }
    });
    $('#toggleAnimations').addEventListener('change', function() {
        document.documentElement.style.setProperty('--animations-enabled', this.checked ? '1' : '0');
    });

    // Game actions
    $('#btnConfirmAction').addEventListener('click', async () => {
        if (gs._processing) return;
        $('#btnConfirmAction').style.display = 'none';
        $('#btnSkipAction').style.display = 'none';
        await processNight();
    });
    $('#btnSkipAction').addEventListener('click', async () => {
        if (gs._processing) return;
        gs.selectedTarget = null;
        $('#btnConfirmAction').style.display = 'none';
        $('#btnSkipAction').style.display = 'none';
        await processNight();
    });
    $('#btnContinueToDay').addEventListener('click', () => startDayPhase());

    $('#btnConfirmVote').addEventListener('click', async () => {
        if (gs._processing) return;
        const human = gs.players[gs.playerIndex];
        if (human.alive && gs.selectedTarget === null) {
            showToast('⚠️ Pilih pemain untuk di-vote!');
            return;
        }
        $('#btnConfirmVote').disabled = true;
        await processVoting();
    });

    // Log toggle
    $('#toggleLog').addEventListener('click', () => {
        const lp = $('#logPanel');
        if (lp.style.display === 'none') {
            lp.style.display = 'block';
            lp.classList.remove('collapsed');
        } else {
            lp.style.display = 'none';
        }
    });

    // Log filter
    $$('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            gs.currentFilter = btn.dataset.filter;
            $$('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderLog();
        });
    });

    // Quit
    $('#btnQuitGame').addEventListener('click', () => {
        if (confirm('🏠 Yakin ingin keluar?')) resetGame();
    });

    // Game over buttons
    $('#btnPlayAgain').addEventListener('click', () => {
        $('#gameOverModal').style.display = 'none';
        startGame();
    });
    $('#btnBackToMenu').addEventListener('click', () => {
        $('#gameOverModal').style.display = 'none';
        resetGame();
    });

    // Tutorial close
    const tut = $('#tutorialNext');
    if (tut) tut.addEventListener('click', () => { $('#tutorialOverlay').style.display = 'none'; });
}

// ===== INIT =====
async function init() {
    await loadConfig();
    renderStars();
    buildBGSkyline();
    buildNeonSigns();
    initEventListeners();

    // First time tutorial
    if (!localStorage.getItem('mafia_cos_tutorial_v2')) {
        $('#tutorialOverlay').style.display = 'flex';
        localStorage.setItem('mafia_cos_tutorial_v2', '1');
    }

    console.log('🏙️ Mafia: City of Shadows v1.7.0 — Ready!');
}

init();
