// ============================================================
// 页面清单 —— 以后新增页面 / 修改标题，只改这个文件
//
// site：
//   title     站点名称（显示在浏览器标签和首页大标题）
//   subtitle  一句话副标题（可选）
//   logo      首页大图标里的字（可选，默认取站点名称首字）
//
// pages 每条记录可以填：
//   title        页面名称（必填）
//   description  一句话简介（可选）
//   url          页面链接；留空表示"即将上线"（可选）
//                同仓库子目录写 "xxx/index.html"（本地预览和线上都能打开），
//                站外页面写完整网址 https://…
//   tags         标签数组，首页顶部会自动生成筛选按钮（可选）
//   updated      最近更新日期，如 "2026-10-13"（可选）
//   icon         卡片图标里的字（可选，默认取名称首字）
//
// links（可选）左侧"链接"栏，每条记录：
//   title  链接名称（必填）
//   url    完整网址（必填）
//   desc   小字说明，如域名（可选）
// ============================================================
window.SITE_DATA = {
  site: {
    title: "读书班的数据站",
    subtitle: "汇总谢天宇制作的各种统计页面，持续更新"
  },
  pages: [
    {
      title: "十月宝可梦杯数据",
      description: "10 月 1–4 日 69 个小场全量赛果与多维统计",
      url: "pokemon-cup/index.html",
      tags: ["Dota2", "赛事"],
      updated: "2026-10-07",
      icon: "宝"
    },
    {
      title: "灿团户外决赛的24种可能",
      description: "红/蓝/黑/白四队决赛 24 种名次推演——黑队 34 分夺冠的完整变化记录",
      url: "saiguo-24/index.html",
      tags: ["赛事", "推演"],
      updated: "2026-10-13",
      icon: "赛"
    },
    {
      title: "三团联动 · 赛季档案",
      description: "九队读书班：73 签选秀、9/24 常规赛积分与曲线、季后赛对阵、每项实时预测",
      url: "sanjian-saiji/index.html",
      tags: ["赛事", "数据看板"],
      updated: "2026-10-27",
      icon: "季"
    }
  ],
  links: [
    // 左侧"链接"栏：title 名称、url 完整网址
    {
      title: "谢天宇的直播间",
      url: "https://www.douyu.com/96555"
    },
    {
      title: "三酒OuO的直播间",
      url: "https://www.douyu.com/39939"
    },
    {
      title: "宁波小骚骚0oO的直播间",
      url: "https://www.douyu.com/15000"
    },
    {
      title: "林菜儿的直播间",
      url: "https://www.douyu.com/88995"
    },
    {
      title: "迪士尼o-O的直播间",
      url: "https://www.douyu.com/88891"
    },
    {
      title: "豌豆仙仙儿的直播间",
      url: "https://www.douyu.com/92099"
    },
    {
      title: "少施施的直播间",
      url: "https://www.douyu.com/12860332"
    }
  ]
};
