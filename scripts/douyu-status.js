// 抓取斗鱼各链接直播间状态（含"轮播"识别），生成 status.json（供首页"紫灯"使用）
// 运行环境：GitHub Actions（Node 20+，自带 fetch）
const fs = require("fs");

const UA_API = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)";
const UA_WEB = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

// 从 pages.js 读取左侧链接里的房间号，保持单一数据源
const window = {};
eval(fs.readFileSync("pages.js", "utf8"));
const rids = (window.SITE_DATA.links || [])
  .map(function (l) { return String(l.url || "").split("/").pop(); })
  .filter(function (r) { return /^\d+$/.test(r); });

async function fetchStatus(rid) {
  const out = { live: null, loop: null, name: "" };

  // 1) 开播状态 + 昵称（移动端接口）
  try {
    const res = await fetch("https://m.douyu.com/api/room/info?rid=" + rid, {
      headers: { "User-Agent": UA_API }
    });
    const j = await res.json();
    const ri = (j.data && j.data.roomInfo) || {};
    out.live = ri.isLive === 1;
    out.name = ri.nickname || "";
  } catch (e) {}

  // 2) 轮播标识（直播间页面源码里的 videoLoop：1=轮播，0=正常）
  try {
    const page = await fetch("https://www.douyu.com/" + rid, {
      headers: { "User-Agent": UA_WEB }
    });
    const html = await page.text();
    const m = html.match(/videoLoop\\?["']?\s*:\s*(\d)/);
    if (m) { out.loop = m[1] === "1"; }
  } catch (e) {}

  return out;
}

(async function () {
  const out = { updated: new Date().toISOString(), rooms: {} };
  for (const rid of rids) {
    out.rooms[rid] = await fetchStatus(rid);
  }
  fs.writeFileSync("status.json", JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out));
})();
