const CACHE_NAME = "poise-click-v4";
const REMINDER_PATH = "/poise-reminders.ics";
const REMINDER_ICS = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Poise//Reminder Calendar//CN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Poise 姿态提醒
X-WR-CALDESC:每天 2 次全套 + 3 次小纠正
BEGIN:VTIMEZONE
TZID:Asia/Shanghai
BEGIN:STANDARD
DTSTART:19700101T000000
TZOFFSETFROM:+0800
TZOFFSETTO:+0800
TZNAME:CST
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:poise-morning-fullset@poise.app
DTSTAMP:20260427T150000Z
DTSTART;TZID=Asia/Shanghai:20260428T093000
DTEND;TZID=Asia/Shanghai:20260428T094000
RRULE:FREQ=DAILY
SUMMARY:早晨全套 8-10 分钟：头颈回中＋肩胛后下收＋靠墙对齐＋证件照中线
DESCRIPTION:今天先把体态底座练出来。顺序：1）头颈回中 5-10 次，每次保持 10 秒；2）肩胛后下收 10 次；3）靠墙对齐 35-55 秒；4）证件照中线重置 4-5 轮。目标：出门前先把“直、开、正”找回来。
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Poise 早晨全套：头颈回中＋肩胛后下收＋靠墙对齐＋证件照中线
TRIGGER:-PT0M
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:poise-noon-reset@poise.app
DTSTAMP:20260427T150000Z
DTSTART;TZID=Asia/Shanghai:20260428T124000
DTEND;TZID=Asia/Shanghai:20260428T124500
RRULE:FREQ=DAILY
SUMMARY:午间小纠正 20 秒：下巴回 1 厘米，肩放松，眼平
DESCRIPTION:场景：电脑前起身、洗手后、等电梯。只做 1 轮：下巴轻轻往后滑，耳朵回到肩膀正上方；肩往后下方轻放；眼睛平视，不低头检查自己。
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Poise 午间小纠正：下巴回 1 厘米，肩放松，眼平
TRIGGER:-PT0M
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:poise-afternoon-gait@poise.app
DTSTAMP:20260427T150000Z
DTSTART;TZID=Asia/Shanghai:20260428T154000
DTEND;TZID=Asia/Shanghai:20260428T154500
RRULE:FREQ=DAILY
SUMMARY:下午小纠正 20 秒：看前方，手摆起来，脚跟到脚尖
DESCRIPTION:场景：去倒水、去洗手间、去会议室、取快递。只在下一段路上做：看前方，肩放松，手自然摆，脚跟到脚尖平顺滚过去，不拖步。
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Poise 下午小纠正：看前方，手摆起来，脚跟到脚尖
TRIGGER:-PT0M
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:poise-evening-entry@poise.app
DTSTAMP:20260427T150000Z
DTSTART;TZID=Asia/Shanghai:20260428T183000
DTEND;TZID=Asia/Shanghai:20260428T183500
RRULE:FREQ=DAILY
SUMMARY:傍晚小纠正 15 秒：脚匀、肩平、鼻尖对中线、先看外面
DESCRIPTION:场景：准备拍照、进门前、进人多场合前。顺序：脚站匀，肩放平，下巴微收，鼻尖对胸口正中，先吐一口长气，再把注意力丢向外界，不检查自己。
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Poise 傍晚小纠正：脚匀、肩平、鼻尖对中线、先看外面
TRIGGER:-PT0M
END:VALARM
END:VEVENT
BEGIN:VEVENT
UID:poise-night-fullset@poise.app
DTSTAMP:20260427T150000Z
DTSTART;TZID=Asia/Shanghai:20260428T213000
DTEND;TZID=Asia/Shanghai:20260428T214000
RRULE:FREQ=DAILY
SUMMARY:晚间全套 6-8 分钟：体态四件套＋一句复盘
DESCRIPTION:晚上再练一遍体态四件套：头颈回中、肩胛后下收、靠墙对齐、证件照中线。做完写一句：今天最容易塌掉的场景是什么？明天先改哪一步？
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Poise 晚间全套：体态四件套＋一句复盘
TRIGGER:-PT0M
END:VALARM
END:VEVENT
END:VCALENDAR`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=20260428r2",
  "./app.js?v=20260428r2",
  "./manifest.webmanifest?v=20260428r2",
  "./icon.svg?v=20260428r2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith(REMINDER_PATH)) {
    event.respondWith(
      Promise.resolve(
        new Response(REMINDER_ICS, {
          status: 200,
          headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": 'inline; filename="poise-reminders.ics"',
            "Cache-Control": "no-store"
          }
        })
      )
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response.ok) throw new Error(`Navigation failed: ${response.status}`);
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          if (!response.ok) throw new Error(`Asset failed: ${response.status}`);
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((fallback) => fallback || caches.match("./index.html")));
    })
  );
});
