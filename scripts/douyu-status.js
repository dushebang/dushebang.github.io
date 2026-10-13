// 抓取斗鱼各链接直播间是否在播，生成 status.json（供首页"紫灯"使用）
// 运行环境：GitHub Actions（Node 20+，自带 fetch）
const fs = require("fs");

const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)";

// 从 pages.js 读取左侧链接里的房间号，保持单一数据源
const window = {};
eval(fs.readFileSync("pages.js", "utf8"));
const rids = (window.SITE_DATA.links || [])
  .map(function (l) { return String(l.url || "").split("/").pop(); })
  .filter(function (r) { return /^\d+$/.test(r); });

async function fetchStatus(rid) {
  try {
    const res = await fetch("https://m.douyu.com/api/room/info?rid=" + rid, {
      headers: { "User-Agent": UA }
    });
    const j = await res.json();
    const ri = (j.data && j.data.roomInfo) || {};
    return { live: ri.isLive === 1, name: ri.nickname || "" };
  } catch (e) {
    return { live: null };
  }
}

(async function () {
  const out = { updated: new Date().toISOString(), rooms: {} };
  for (const rid of rids) {
    out.rooms[rid] = await fetchStatus(rid);
  }
  fs.writeFileSync("status.json", JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out));
})();
