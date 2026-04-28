const STORAGE_KEY = "poise.click.state.v1";

const knowledgeCards = [
  {
    id: "knowledge-1",
    category: "posture",
    titleCN: "别用抬下巴假装挺拔",
    titleEN: "Do not fake posture by lifting your chin",
    bodyCN:
      "真正显得直，不是把下巴抬高，而是轻收下巴，让耳朵回到肩膀上方。这样脖子会更长，照片里也更稳。",
    bodyEN:
      "Real posture is not a high chin. Gently draw the chin back so the ears sit above the shoulders. This makes the neck look longer and the photo look calmer.",
    actionLine: "现在就做 1 次：下巴回 1 厘米，肩放松。"
  },
  {
    id: "knowledge-2",
    category: "gait",
    titleCN: "气场来自步伐的安静感",
    titleEN: "Presence comes from quiet steps",
    bodyCN:
      "想显得稳，不需要走很大步。看前方、脚步安静、脚跟到脚尖顺着走，反而会更得体。",
    bodyEN:
      "You do not need huge steps to look strong. Look ahead, keep the steps quiet, and roll from heel to toe. This feels more grounded and refined.",
    actionLine: "今天走路时，只盯一个重点：脚步轻，眼神平。"
  },
  {
    id: "knowledge-3",
    category: "mindset",
    titleCN: "自信不是盯着自己检查",
    titleEN: "Confidence is not constant self-checking",
    bodyCN:
      "人一紧张就会一直检查自己正不正、怪不怪。更有效的做法是把注意力扔向外界，先看路、看人、看环境。",
    bodyEN:
      "When people get tense, they start checking themselves again and again. A better move is to send attention outward: see the room, the path, and the people first.",
    actionLine: "进门前默念：先看外面，不看自己。"
  },
  {
    id: "knowledge-4",
    category: "posture",
    titleCN: "证件照头偏，先纠正重心",
    titleEN: "Fix your weight before you fix a tilted head",
    bodyCN:
      "很多头偏不是头的问题，而是重心压一边、肩膀不平。拍照前先把双脚站匀，再把鼻尖对到胸口正中。",
    bodyEN:
      "A tilted head is often a balance problem, not only a neck problem. Stand evenly first, level the shoulders, then line the nose up with the center of the chest.",
    actionLine: "拍照前 5 秒：脚匀、肩平、下巴微收。"
  },
  {
    id: "knowledge-5",
    category: "gait",
    titleCN: "摆臂自然，你会立刻更有精神",
    titleEN: "Natural arm swing makes you look awake",
    bodyCN:
      "很多人一紧张就把手臂夹住走路，整个人会显得缩。手肘轻弯、手臂自然摆，观感会马上打开。",
    bodyEN:
      "Tense people often lock the arms when they walk, which makes the whole body look smaller. A soft bend at the elbows and natural swing opens the look right away.",
    actionLine: "下一次走路，先把手摆起来。"
  },
  {
    id: "knowledge-6",
    category: "mindset",
    titleCN: "长呼气比硬撑更像自信",
    titleEN: "A long exhale looks calmer than forcing confidence",
    bodyCN:
      "你越想硬撑出气场，身体越容易僵。先慢慢呼一口长气，再走进去，状态通常会更稳。",
    bodyEN:
      "The more you force yourself to look strong, the more rigid you may become. A slow long exhale before you step in often creates a steadier presence.",
    actionLine: "人多前，先吐气 4 到 6 秒。"
  },
  {
    id: "knowledge-7",
    category: "posture",
    titleCN: "胸口轻开，不是炸胸",
    titleEN: "Open the chest softly, do not flare the ribs",
    bodyCN:
      "好体态不是拼命挺胸。只要胸口轻轻打开，肋骨回收，骨盆和胸廓叠起来，就已经很好看。",
    bodyEN:
      "Good posture is not an exaggerated chest. A soft open chest with the ribs stacked over the pelvis already looks clean and elegant.",
    actionLine: "站立时想象：头顶向上，肋骨回家。"
  }
];

const sourceLibrary = {
  njhAxialExtension: {
    title: "Axial Extension",
    organization: "National Jewish Health",
    url: "https://www.nationaljewish.org/education/health-information/exercise-and-weight/exercise-at-home/axial-extension",
    support: "官方动作页，讲的是轻收下巴，让耳朵回到肩膀正上方，并配有示范图。"
  },
  njhShoulderBladeSqueeze: {
    title: "Shoulder Blade Squeeze",
    organization: "National Jewish Health",
    url: "https://www.nationaljewish.org/education/health-information/exercise-and-weight/exercise-at-home/shoulder-blade-squeeze",
    support: "官方动作页，讲的是肩胛向后、略向下带，帮助打开胸前。"
  },
  medlinePosture: {
    title: "Guide to Good Posture",
    organization: "MedlinePlus",
    url: "https://medlineplus.gov/guidetogoodposture.html",
    support: "姿势总原则页，包含站立姿势图和“头在肩上方、肩在髋上方”的基本逻辑。"
  },
  mayoWalking: {
    title: "Walking: Trim your waistline, improve your health",
    organization: "Mayo Clinic",
    url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/walking/art-20046261",
    support: "步态总原则页，强调抬头看前方、肩颈放松、自然摆臂、脚跟到脚尖。"
  },
  mayoWalkingImage: {
    title: "Proper walking technique",
    organization: "Mayo Clinic",
    url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/proper-walking-technique/img-20007670",
    support: "官方步行示意图页，适合对照整体走路观感。"
  },
  nhsBreathing: {
    title: "Breathing exercises for stress",
    organization: "NHS",
    url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/",
    support: "官方放松呼吸页，强调站稳、自然吸气、缓慢呼气、持续几分钟。"
  },
  nhsCbt: {
    title: "Self-help CBT techniques",
    organization: "NHS Every Mind Matters",
    url: "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/",
    support: "CBT 基础页，说明想法、感受和行为彼此影响，适合做外部注意力训练。"
  },
  nhsFacingFears: {
    title: "Facing your fears",
    organization: "NHS Every Mind Matters",
    url: "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/",
    support: "官方渐进暴露页，讲的是不要只靠回避，而是从最容易的情境开始练。"
  },
  nhsSocialAnxiety: {
    title: "Social anxiety (social phobia)",
    organization: "NHS",
    url: "https://www.nhs.uk/mental-health/conditions/social-anxiety/",
    support: "官方社交焦虑页，提到可先做呼吸、拆小步骤、把注意力更多放在别人说什么。"
  }
};

const supportLibrary = {
  headStack: {
    sourceIds: ["njhAxialExtension", "medlinePosture"],
    evidenceNote: "这项是把官方的收下巴动作，和“头在肩上方”的姿势原则合并成一个更好执行的日常纠正动作。",
    selfCheck: [
      "眼睛平视，不要低头去做成假动作。",
      "下巴是水平向后滑，不是往下压脖子。",
      "做完后耳朵更接近肩膀正上方。"
    ]
  },
  shoulderOpen: {
    sourceIds: ["njhShoulderBladeSqueeze", "medlinePosture"],
    evidenceNote: "这项直接参考官方肩胛后下收动作，再用 MedlinePlus 的站姿原则防止你做成耸肩或炸胸。",
    selfCheck: [
      "先把肩放松，再往后和略下带。",
      "胸口轻开就够了，不要把肋骨顶出来。",
      "脖子不往前探，肩膀不会越来越紧。"
    ]
  },
  wallAlign: {
    sourceIds: ["medlinePosture", "njhAxialExtension"],
    evidenceNote: "靠墙对齐是我根据官方姿势原则做的实战版自查，不是单独一篇原文动作，但方向来自同一套头肩髋对齐逻辑。",
    selfCheck: [
      "后脑勺是轻找墙，不是抬下巴硬顶墙。",
      "上背和臀部轻轻靠住，腰不要死压。",
      "站住后还能自然呼吸，不会憋住。"
    ]
  },
  photoCenter: {
    sourceIds: ["medlinePosture", "njhAxialExtension"],
    evidenceNote: "证件照中线重置是按“头在肩上方、肩在髋上方”的官方原则做的拍照转译版，重点是先站匀，再把头回到中线。",
    selfCheck: [
      "两只脚受力差不多，不把重心压一边。",
      "肩线尽量放平，脖子不向一侧缩。",
      "鼻尖、人中、下巴更接近胸骨中线。"
    ]
  },
  heelToe: {
    sourceIds: ["mayoWalking", "mayoWalkingImage"],
    evidenceNote: "这项直接来自 Mayo 的走路技术建议，重点就是看前方、身体放松、脚跟到脚尖平顺滚动。",
    selfCheck: [
      "视线在前方，不盯地面。",
      "脚落地后能顺着滚到脚尖，不拖步。",
      "上身不抢着往前冲，步子听起来更安静。"
    ]
  },
  armSwing: {
    sourceIds: ["mayoWalking", "mayoWalkingImage"],
    evidenceNote: "这项沿用 Mayo 对摆臂的描述，再把它压缩成一个适合你日常走路纠正的小练习。",
    selfCheck: [
      "手肘轻弯，手臂前后自然摆。",
      "摆臂来自肩带，而不是只甩手掌。",
      "肩颈保持放松，不夹住腋下走。"
    ]
  },
  strideCalm: {
    sourceIds: ["mayoWalking", "medlinePosture"],
    evidenceNote: "这是把 Mayo 的走路技术和 MedlinePlus 的动态姿势原则合并后的“观感版步态”练法。",
    selfCheck: [
      "头抬起，肩松，腹部只是轻轻收住。",
      "步幅正常，不抢大步，也不拖沓。",
      "整个人像一条线稳稳往前，而不是左右散。"
    ]
  },
  breathReset: {
    sourceIds: ["nhsBreathing", "nhsSocialAnxiety"],
    evidenceNote: "呼吸部分以 NHS 的放松呼吸为主，再结合社交焦虑页里“先做放松”的建议，做成你进场前的复位动作。",
    selfCheck: [
      "吸气时肩不会一起耸起来。",
      "呼气更慢更长，身体会有一点往下放松的感觉。",
      "做完以后下颌、脖子和肩会更松。"
    ]
  },
  focusScan: {
    sourceIds: ["nhsCbt", "nhsSocialAnxiety"],
    evidenceNote: "外放扫描不是单独的官方动作名，而是根据 CBT 的注意力和行为思路，做成适合你人多场景的口令式练法。",
    selfCheck: [
      "先找 3 个外部目标，而不是先检查自己。",
      "更多去听别人说什么，不脑补别人怎么看你。",
      "练完后你会更像在观察环境，而不是审判自己。"
    ]
  },
  confidenceEntry: {
    sourceIds: ["nhsFacingFears", "nhsSocialAnxiety"],
    evidenceNote: "进门稳定感本质上是一个很小的暴露练习：先站稳、吐气、走进去，不用回避也不需要过度补救。",
    selfCheck: [
      "进门前先停 1 秒，不急着扑进去。",
      "迈步前先吐一口长气，肩和脸不绷住。",
      "进入后不补动作、不补表情，继续看前方目标。"
    ]
  }
};

function weekIndex(day) {
  return Math.floor((day - 1) / 7) + 1;
}

function phaseMeta(day) {
  if (day <= 7) {
    return {
      phaseTitle: "7 天显化期",
      phaseSubtitle: "Visible Reset",
      theme: "先把第一眼观感改掉。每天只追求更直、更稳、更不缩。"
    };
  }
  if (day <= 14) {
    return {
      phaseTitle: "7 天稳定期",
      phaseSubtitle: "Stable Movement",
      theme: "把站姿带进走路和拍照，让好体态不只出现在练习时。"
    };
  }
  if (day <= 21) {
    return {
      phaseTitle: "7 天外场期",
      phaseSubtitle: "Public Presence",
      theme: "开始在人多、出门、拍照这些真实场景里用出来。"
    };
  }
  return {
    phaseTitle: "7 天固化期",
    phaseSubtitle: "Integrated Confidence",
    theme: "把体态、步态、心态连成一条线，让状态更自然。"
  };
}

function photoCue(day) {
  const list = [
    "下巴微收，头顶向上，鼻尖对胸口正中。",
    "双脚站匀，肩平，吐半口气再拍。",
    "不要抬下巴，用头顶向上代替硬挺。",
    "拍前先让耳朵回到肩膀正上方。"
  ];
  return list[(day - 1) % list.length];
}

function crowdCue(day) {
  const list = [
    "先看路，再看人，不检查自己。",
    "肩放松，腹轻收，脚步安静。",
    "走进去，不补动作，不补表情。",
    "如果紧张，先吐长气，再抬眼神。"
  ];
  return list[(day - 1) % list.length];
}

function postureExercises(day) {
  const week = weekIndex(day);
  return [
    {
        id: `posture-head-stack-${day}`,
        day,
        category: "posture",
        title: "头颈回中",
        subtitle: "Head Stack Reset",
        summary: "纠正头前伸和照片里头不在正中的习惯。",
        cue: "下巴回 1 厘米，耳朵回到肩膀正上方。",
        instructions: [
          "双脚踩稳，别锁死膝盖。",
          "目光平视，轻轻把下巴往后滑，不要低头。",
          "感受头顶像被向上提住。"
        ],
        targetMetric: { kind: "reps", target: 6 + week * 2, unitLabel: "次", actionLabel: "记 1 次" },
        illustration: "headStack",
        ...supportLibrary.headStack
    },
    {
        id: `posture-shoulder-open-${day}`,
        day,
        category: "posture",
        title: "肩胛后下收",
        subtitle: "Shoulder Open Set",
        summary: "减少圆肩的塌感，让上半身更清爽。",
        cue: "肩往后下方滑，不耸肩，不夹死。",
        instructions: [
          "先轻轻耸肩一次，再自然放下。",
          "把肩胛往后、略往下带。",
          "胸口轻开，但别把肋骨顶出来。"
        ],
        targetMetric: { kind: "reps", target: 8 + week * 2, unitLabel: "次", actionLabel: "记 1 次" },
        illustration: "shoulderOpen",
        ...supportLibrary.shoulderOpen
    },
    {
        id: `posture-wall-align-${day}`,
        day,
        category: "posture",
        title: "靠墙对齐",
        subtitle: "Wall Alignment",
        summary: "建立身体中线，帮助你快速找回不佝偻的站姿。",
        cue: "后脑勺、上背、臀部轻轻去找墙。",
        instructions: [
          "背对墙站，脚跟离墙一小步。",
          "后脑勺轻碰墙，不要抬下巴。",
          "保持呼吸，感受肋骨叠在骨盆上。"
        ],
        targetMetric: { kind: "seconds", target: 35 + week * 10, unitLabel: "秒", actionLabel: "开始计时" },
        illustration: "wallAlign",
        ...supportLibrary.wallAlign
    },
    {
        id: `posture-photo-center-${day}`,
        day,
        category: "posture",
        title: "证件照中线重置",
        subtitle: "Photo Center Line",
        summary: "专门处理你拍证件照时头偏一侧的问题。",
        cue: "脚匀、肩平、鼻尖对胸口正中。",
        instructions: [
          "双脚平行，重心均匀放在两边。",
          "肩膀放平，脖子别往一侧缩。",
          "想象鼻尖、人中、下巴穿过一条竖线。"
        ],
        targetMetric: { kind: "reps", target: 4 + week, unitLabel: "轮", actionLabel: "记 1 轮" },
        illustration: "photoCenter",
        ...supportLibrary.photoCenter
    }
  ];
}

function gaitExercise(day) {
  const week = weekIndex(day);
  switch (day % 3) {
    case 1:
      return {
        id: `gait-heel-toe-${day}`,
        day,
        category: "gait",
        title: "脚跟到脚尖",
        subtitle: "Heel-to-Toe Roll",
        summary: "把拖步和软塌感去掉，让步伐更利落。",
        cue: "脚跟先落，脚掌过渡，再平顺推离地面。",
        instructions: [
          "走路时别抢快，先把每一步走顺。",
          "眼神平视前方，不低头找地。",
          "只盯脚步是否安静、平顺。"
        ],
        targetMetric: { kind: "minutes", target: 2 + week, unitLabel: "分钟", actionLabel: "开始计时" },
        illustration: "heelToe",
        ...supportLibrary.heelToe
      };
    case 2:
      return {
        id: `gait-arm-swing-${day}`,
        day,
        category: "gait",
        title: "自然摆臂走",
        subtitle: "Natural Arm Swing",
        summary: "改善紧张时手臂夹住不动的问题。",
        cue: "手肘微弯，手臂自然前后摆，不夹腋下。",
        instructions: [
          "先把肩放松，再开始走。",
          "手臂从肩带动，不要只甩手。",
          "步幅正常，不用刻意跨大。"
        ],
        targetMetric: { kind: "minutes", target: 2 + week, unitLabel: "分钟", actionLabel: "开始计时" },
        illustration: "armSwing",
        ...supportLibrary.armSwing
      };
    default:
      return {
        id: `gait-calm-stride-${day}`,
        day,
        category: "gait",
        title: "静音步伐",
        subtitle: "Calm Stride",
        summary: "训练一种稳、轻、不乱晃的走路观感。",
        cue: "看前方，腹轻收，脚步安静。",
        instructions: [
          "从门口到下一个目标点，安静走完。",
          "上身别左右晃，脖子别往前探。",
          "想象你正在穿过一个很干净的空间。"
        ],
        targetMetric: { kind: "minutes", target: 2 + week, unitLabel: "分钟", actionLabel: "开始计时" },
        illustration: "strideCalm",
        ...supportLibrary.strideCalm
      };
  }
}

function mindsetExercise(day) {
  const week = weekIndex(day);
  switch (day % 3) {
    case 1:
      return {
        id: `mindset-breath-${day}`,
        day,
        category: "mindset",
        title: "长呼气复位",
        subtitle: "Long Exhale Reset",
        summary: "进入人多场合或拍照前，先把身体从僵硬模式切出来。",
        cue: "慢慢吐气，别急着证明自己。",
        instructions: [
          "鼻吸 3 秒，嘴慢慢吐 5 到 6 秒。",
          "吐气时肩膀继续放松。",
          "每轮结束后只想一句口令：我先稳住。"
        ],
        targetMetric: { kind: "breaths", target: 3 + week, unitLabel: "轮", actionLabel: "记 1 轮" },
        illustration: "breathReset",
        ...supportLibrary.breathReset
      };
    case 2:
      return {
        id: `mindset-focus-${day}`,
        day,
        category: "mindset",
        title: "视线外放扫描",
        subtitle: "External Focus Scan",
        summary: "打断一直盯着自己是不是奇怪的内耗。",
        cue: "先看外面，不看自己。",
        instructions: [
          "进入一个空间前，先找到 3 个外部目标。",
          "第一个看路线，第二个看人群节奏，第三个看落脚点。",
          "只做观察，不做自我评价。"
        ],
        targetMetric: { kind: "reps", target: 2 + week, unitLabel: "次", actionLabel: "记 1 次" },
        illustration: "focusScan",
        ...supportLibrary.focusScan
      };
    default:
      return {
        id: `mindset-entry-${day}`,
        day,
        category: "mindset",
        title: "进门稳定感",
        subtitle: "Confidence Entry",
        summary: "把不缩、不怯、不慌张的进场感练出来。",
        cue: "看前面，走进去，不解释自己。",
        instructions: [
          "进门前先站稳 1 秒。",
          "胸口轻开，肩放松，眼神落到前方目标。",
          "迈进去时不要急着整理自己。"
        ],
        targetMetric: { kind: "check", target: 1, unitLabel: "次", actionLabel: "记完成" },
        illustration: "confidenceEntry",
        ...supportLibrary.confidenceEntry
      };
  }
}

const program = Array.from({ length: 28 }, (_, index) => {
  const day = index + 1;
  const phase = phaseMeta(day);
  return {
    day,
    phaseTitle: phase.phaseTitle,
    phaseSubtitle: phase.phaseSubtitle,
    theme: phase.theme,
    photoCue: photoCue(day),
    crowdCue: crowdCue(day),
    exercises: [...postureExercises(day), gaitExercise(day), mindsetExercise(day)]
  };
});

const state = {
  view: "today",
  filter: "all",
  modalExerciseId: null,
  timer: null,
  routine: null,
  homeTipOpen: false,
  appData: loadAppData()
};

state.homeTipOpen = !state.appData.preferences.homeTipDismissed;

function loadAppData() {
  try {
    return normalizeAppData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return normalizeAppData(null);
  }
}

function normalizeAppData(input) {
  return {
    startDate: input?.startDate || new Date().toISOString(),
    progressByDay: input?.progressByDay || {},
    reflectionsByDay: input?.reflectionsByDay || {},
    preferences: {
      homeTipDismissed: Boolean(input?.preferences?.homeTipDismissed)
    }
  };
}

function saveAppData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.appData));
}

function dayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, delta) {
  const next = new Date(date);
  next.setDate(next.getDate() + delta);
  return next;
}

function currentDay() {
  const start = startOfDay(new Date(state.appData.startDate));
  const today = startOfDay(new Date());
  const diffDays = Math.floor((today - start) / 86400000);
  return Math.min(Math.max(diffDays + 1, 1), program.length);
}

function todayPlan() {
  return program[currentDay() - 1];
}

function exercisesForCategory(plan, category) {
  return plan.exercises.filter((exercise) => exercise.category === category);
}

function todayPostureExercises() {
  return exercisesForCategory(todayPlan(), "posture");
}

function nextIncompleteIndex(exercises) {
  const index = exercises.findIndex((exercise) => !isComplete(exercise));
  return index === -1 ? 0 : index;
}

function routineMinutesEstimate() {
  const week = weekIndex(currentDay());
  return week <= 2 ? "约 8 分钟" : "约 10 分钟";
}

function morningRoutineStatus() {
  const exercises = todayPostureExercises();
  const completed = exercises.filter((exercise) => isComplete(exercise)).length;
  return {
    exercises,
    completed,
    total: exercises.length,
    ratio: exercises.length === 0 ? 0 : completed / exercises.length
  };
}

function morningRoutineButtonLabel(status) {
  if (state.routine?.kind === "morning-posture") return "继续晨间全套";
  if (status.completed === status.total) return "复盘体态四件套";
  if (status.completed > 0) return "继续晨间全套";
  return "开始晨间全套";
}

function currentRoutineStatus() {
  if (!state.routine?.exerciseIds?.length) return null;
  const exercises = state.routine.exerciseIds
    .map((id) =>
      program.flatMap((plan) => plan.exercises).find((exercise) => exercise.id === id)
    )
    .filter(Boolean);
  if (!exercises.length) return null;

  const indexFromModal = exercises.findIndex((exercise) => exercise.id === state.modalExerciseId);
  const index = indexFromModal >= 0 ? indexFromModal : Math.min(state.routine.index || 0, exercises.length - 1);
  state.routine.index = index;

  return {
    kind: state.routine.kind,
    exercises,
    index,
    position: index + 1,
    total: exercises.length,
    completed: exercises.filter((exercise) => isComplete(exercise)).length,
    current: exercises[index],
    allComplete: exercises.every((exercise) => isComplete(exercise))
  };
}

function openExercise(exerciseId, options = {}) {
  const { preserveRoutine = false } = options;
  if (state.timer && state.timer.exerciseId !== exerciseId) stopTimer();
  if (!preserveRoutine) state.routine = null;
  state.modalExerciseId = exerciseId;
  renderModal();
}

function startMorningRoutine() {
  const exercises = todayPostureExercises();
  if (!exercises.length) return;
  const startIndex = nextIncompleteIndex(exercises);
  state.routine = {
    kind: "morning-posture",
    exerciseIds: exercises.map((exercise) => exercise.id),
    index: startIndex
  };
  openExercise(state.routine.exerciseIds[startIndex], { preserveRoutine: true });
}

function continueMorningRoutine() {
  const routine = currentRoutineStatus();
  if (routine) {
    openExercise(routine.exercises[routine.index].id, { preserveRoutine: true });
    return;
  }
  startMorningRoutine();
}

function moveRoutineTo(index) {
  const routine = currentRoutineStatus();
  if (!routine) return;

  if (index >= routine.total) {
    finishRoutine();
    return;
  }

  state.routine.index = Math.max(0, index);
  openExercise(routine.exercises[state.routine.index].id, { preserveRoutine: true });
}

function finishRoutine() {
  stopTimer();
  state.routine = null;
  state.modalExerciseId = null;
  render();
}

function reminderCalendarUrls() {
  const pathname = window.location.pathname;
  const basePath = pathname.endsWith("/")
    ? pathname
    : pathname.endsWith(".html")
      ? pathname.slice(0, pathname.lastIndexOf("/") + 1)
      : `${pathname}/`;
  const httpsUrl = `${window.location.origin}${basePath}poise-reminders.ics`;
  return { httpsUrl };
}

function openReminderCalendar() {
  const { httpsUrl } = reminderCalendarUrls();
  const navigate = () => {
    window.location.href = httpsUrl;
  };

  if (!("serviceWorker" in navigator)) {
    navigate();
    return;
  }

  navigator.serviceWorker.ready.then(navigate).catch(navigate);
}

function todayKnowledge() {
  return knowledgeCards[(currentDay() - 1) % knowledgeCards.length];
}

function targetUnits(exercise) {
  return exercise.targetMetric.kind === "minutes"
    ? exercise.targetMetric.target * 60
    : exercise.targetMetric.target;
}

function progressFor(exercise, key = dayKey()) {
  return state.appData.progressByDay[key]?.[exercise.id] || 0;
}

function setProgress(exercise, units, key = dayKey()) {
  const capped = Math.min(Math.max(units, 0), targetUnits(exercise));
  const dayMap = state.appData.progressByDay[key] || {};
  state.appData.progressByDay[key] = { ...dayMap, [exercise.id]: capped };
  saveAppData();
}

function incrementProgress(exercise, amount = 1) {
  setProgress(exercise, progressFor(exercise) + amount);
}

function isComplete(exercise, key = dayKey()) {
  return progressFor(exercise, key) >= targetUnits(exercise);
}

function progressRatio(exercise, key = dayKey()) {
  return progressFor(exercise, key) / targetUnits(exercise);
}

function formatMetric(exercise, units) {
  const target = targetUnits(exercise);
  switch (exercise.targetMetric.kind) {
    case "seconds":
      return `${units} / ${target} 秒`;
    case "reps":
      return `${units} / ${target} 次`;
    case "minutes":
      return `${Math.floor(units / 60)}m ${units % 60}s / ${exercise.targetMetric.target}m`;
    case "breaths":
      return `${units} / ${target} 轮`;
    case "check":
      return units > 0 ? "已完成" : "待完成";
    default:
      return `${units} / ${target}`;
  }
}

function streak() {
  let count = 0;
  let cursor = startOfDay(new Date());
  while (true) {
    const key = dayKey(cursor);
    const dayMap = state.appData.progressByDay[key];
    if (!dayMap || Object.values(dayMap).every((value) => value <= 0)) break;
    count += 1;
    cursor = addDays(cursor, -1);
  }
  return count;
}

function totalCompletedSessions() {
  return Object.values(state.appData.progressByDay).reduce((sum, dayMap) => {
    return sum + Object.values(dayMap).filter((value) => value > 0).length;
  }, 0);
}

function planForDate(date) {
  const start = startOfDay(new Date(state.appData.startDate));
  const safeDate = startOfDay(date);
  const diffDays = Math.floor((safeDate - start) / 86400000);
  const day = Math.min(Math.max(diffDays + 1, 1), program.length);
  return program[day - 1];
}

function weeklyBars() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = addDays(startOfDay(new Date()), index - 6);
    const key = dayKey(date);
    const plan = planForDate(date);
    const completed = plan.exercises.filter((exercise) => isComplete(exercise, key)).length;
    return {
      label: new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(date),
      completed,
      total: plan.exercises.length
    };
  });
}

function categoryStats(category, days) {
  let completed = 0;
  let total = 0;
  for (let index = 0; index < days; index += 1) {
    const date = addDays(startOfDay(new Date()), -index);
    const key = dayKey(date);
    const plan = planForDate(date);
    const exercises = plan.exercises.filter((exercise) => exercise.category === category);
    total += exercises.length;
    exercises.forEach((exercise) => {
      if (isComplete(exercise, key)) completed += 1;
    });
  }
  return {
    completed,
    total,
    ratio: total === 0 ? 0 : completed / total
  };
}

function reflectionFor(key = dayKey()) {
  return (
    state.appData.reflectionsByDay[key] || {
      postureScore: 3,
      gaitScore: 3,
      mindsetScore: 3,
      note: ""
    }
  );
}

function saveReflection(next, key = dayKey()) {
  state.appData.reflectionsByDay[key] = next;
  saveAppData();
}

function iconFor(category) {
  if (category === "posture") return "🧍";
  if (category === "gait") return "🚶";
  return "✨";
}

function categoryLabel(category) {
  if (category === "posture") return ["体态", "Posture"];
  if (category === "gait") return ["步态", "Gait"];
  return ["心态", "Mindset"];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function viewButton(view, icon, label) {
  return `
    <button class="nav-btn ${state.view === view ? "active" : ""}" data-nav="${view}">
      <span class="icon">${icon}</span>
      <span class="nav-label">${label}</span>
    </button>
  `;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="screen">${renderView()}</section>
    <nav class="floating-nav">
      ${viewButton("today", "☀️", "今天")}
      ${viewButton("train", "🚶", "训练")}
      ${viewButton("knowledge", "📚", "科普")}
      ${viewButton("progress", "📊", "进度")}
      ${viewButton("settings", "⚙️", "设置")}
    </nav>
  `;
  bindBaseEvents();
  renderModal();
}

function renderView() {
  if (state.view === "train") return renderTrain();
  if (state.view === "knowledge") return renderKnowledge();
  if (state.view === "progress") return renderProgress();
  if (state.view === "settings") return renderSettings();
  return renderToday();
}

function renderToday() {
  const plan = todayPlan();
  const knowledge = todayKnowledge();
  const completed = plan.exercises.filter((exercise) => isComplete(exercise)).length;
  const ratio = completed / plan.exercises.length;
  const [catCn, catEn] = categoryLabel(knowledge.category);
  const morning = morningRoutineStatus();

  return `
    <article class="card">
      <div class="hero">
        <div>
          <p class="eyebrow">体态・步态・心态</p>
          <h1 class="day">第 ${currentDay()} 天</h1>
          <p class="phase">${escapeHtml(plan.phaseTitle)} · ${escapeHtml(plan.phaseSubtitle)}</p>
          <p class="theme">${escapeHtml(plan.theme)}</p>
        </div>
        <div class="circle">
          <div>
            <strong>${Math.round(ratio * 100)}%</strong>
            <span>今日完成</span>
          </div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.max(ratio * 100, 4)}%"></div></div>
      <div class="stats">
        <div class="stat"><strong>${streak()}</strong><span>连续打卡</span></div>
        <div class="stat"><strong>${totalCompletedSessions()}</strong><span>累计完成</span></div>
        <div class="stat"><strong>${plan.exercises.length}</strong><span>今日训练</span></div>
      </div>
    </article>

    <article class="card routine-card">
      <div class="routine-head">
        <div>
          <p class="eyebrow">晨间全套</p>
          <h2 class="section-title">圆肩驼背每日体态四件套</h2>
          <p class="section-subtitle">每天固定做完 4 项，再去练步态和心态</p>
        </div>
        <div class="routine-badge">
          <strong>${morning.completed}/${morning.total}</strong>
          <span>${routineMinutesEstimate()}</span>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.max(morning.ratio * 100, 4)}%"></div></div>
      <div class="routine-list">
        ${morning.exercises
          .map(
            (exercise, index) => `
              <div class="routine-item ${isComplete(exercise) ? "done" : ""}">
                <span class="routine-index">${index + 1}</span>
                <div class="routine-copy">
                  <strong>${escapeHtml(exercise.title)}</strong>
                  <span>${isComplete(exercise) ? "已完成" : escapeHtml(exercise.cue)}</span>
                </div>
                <span class="routine-state">${isComplete(exercise) ? "✓" : "•"}</span>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="btn-row" style="margin-top:14px;">
        <button class="primary-btn" data-start-morning-routine>${morningRoutineButtonLabel(morning)}</button>
        <button class="soft-btn" data-show-posture-only>只看体态训练</button>
      </div>
    </article>

    <article class="card">
      <h2 class="section-title">今天练什么</h2>
      <p class="section-subtitle">体态 4 项每天固定 + 步态 1 项 + 心态 1 项</p>
      <div class="stack">${plan.exercises.map(renderExerciseCard).join("")}</div>
    </article>

    <section class="duo">
      <article class="card">
        <h3 class="cue-title">拍照前 5 秒</h3>
        <p class="cue-sub">Photo Cue</p>
        <p class="cue-body">${escapeHtml(plan.photoCue)}</p>
      </article>
      <article class="card">
        <h3 class="cue-title">人多场合</h3>
        <p class="cue-sub">Crowd Cue</p>
        <p class="cue-body">${escapeHtml(plan.crowdCue)}</p>
      </article>
    </section>

    <article class="card">
      <h2 class="section-title">今日科普</h2>
      <p class="section-subtitle">Bilingual micro lesson</p>
      <div class="pill-row"><span class="chip">${iconFor(knowledge.category)} ${catCn}<small>${catEn}</small></span></div>
      <h3 class="knowledge-title">${escapeHtml(knowledge.titleCN)}</h3>
      <p class="knowledge-sub">${escapeHtml(knowledge.titleEN)}</p>
      <p class="knowledge-body">${escapeHtml(knowledge.bodyCN)}</p>
      <p class="knowledge-soft">${escapeHtml(knowledge.bodyEN)}</p>
      <p class="knowledge-action">${escapeHtml(knowledge.actionLine)}</p>
    </article>
  `;
}

function renderExerciseCard(exercise) {
  return `
    <button class="list-row" data-open-exercise="${exercise.id}" style="background:none;padding:0;text-align:left;">
      <span class="exercise-icon">${iconFor(exercise.category)}</span>
      <span class="exercise-body">
        <span class="exercise-name">${escapeHtml(exercise.title)}</span>
        <span class="exercise-sub">${escapeHtml(exercise.subtitle)}</span>
        <span class="exercise-summary">${escapeHtml(exercise.summary)}</span>
        <span class="metric-line">${escapeHtml(formatMetric(exercise, progressFor(exercise)))}</span>
      </span>
      <span class="${isComplete(exercise) ? "status done" : "arrow"}">${isComplete(exercise) ? "✓" : "›"}</span>
    </button>
  `;
}

function renderTrain() {
  const all = todayPlan().exercises;
  const visible = state.filter === "all" ? all : all.filter((exercise) => exercise.category === state.filter);
  return `
    <article class="card">
      <h2 class="section-title">今日训练</h2>
      <p class="section-subtitle">体态每天做全套，步态和心态每天各 1 项</p>
      <div class="filters">
        ${renderFilter("all", "全部")}
        ${renderFilter("posture", "体态")}
        ${renderFilter("gait", "步态")}
        ${renderFilter("mindset", "心态")}
      </div>
    </article>
    ${visible.map((exercise) => `<article class="card">${renderExerciseCard(exercise)}</article>`).join("")}
  `;
}

function renderFilter(key, label) {
  return `<button class="filter-pill ${state.filter === key ? "active" : ""}" data-filter="${key}">${label}</button>`;
}

function renderKnowledge() {
  return `
    <article class="card">
      <h2 class="section-title">每日科普</h2>
      <p class="section-subtitle">Simple Chinese + simple English</p>
      <p class="theme">每天一条轻量知识，帮助你知道自己在改什么，也知道为什么这样改。</p>
    </article>
    ${knowledgeCards
      .map((card) => {
        const [catCn, catEn] = categoryLabel(card.category);
        return `
          <article class="card">
            <div class="pill-row"><span class="chip">${iconFor(card.category)} ${catCn}<small>${catEn}</small></span></div>
            <h3 class="knowledge-title">${escapeHtml(card.titleCN)}</h3>
            <p class="knowledge-sub">${escapeHtml(card.titleEN)}</p>
            <p class="knowledge-body">${escapeHtml(card.bodyCN)}</p>
            <p class="knowledge-soft">${escapeHtml(card.bodyEN)}</p>
            <p class="knowledge-action">${escapeHtml(card.actionLine)}</p>
          </article>
        `;
      })
      .join("")}
  `;
}

function renderProgress() {
  const bars = weeklyBars();
  const posture = categoryStats("posture", 7);
  const gait = categoryStats("gait", 7);
  const mindset = categoryStats("mindset", 7);
  const weeklyCompleted = posture.completed + gait.completed + mindset.completed;
  const weeklyTarget = posture.total + gait.total + mindset.total;
  const weeklyRatio = weeklyTarget === 0 ? 0 : weeklyCompleted / weeklyTarget;
  const weakest = [
    ["posture", posture.ratio],
    ["gait", gait.ratio],
    ["mindset", mindset.ratio]
  ].sort((a, b) => a[1] - b[1])[0][0];
  const strongest = [
    ["posture", posture.ratio],
    ["gait", gait.ratio],
    ["mindset", mindset.ratio]
  ].sort((a, b) => b[1] - a[1])[0][0];
  const reflect = reflectionFor();

  return `
    <article class="card">
      <h2 class="section-title">本周趋势</h2>
      <p class="section-subtitle">Weekly correction summary</p>
      <div class="stats">
        <div class="stat"><strong>${weeklyCompleted}/${weeklyTarget}</strong><span>本周完成</span></div>
        <div class="stat"><strong>${categoryLabel(strongest)[0]}</strong><span>最稳定</span></div>
        <div class="stat"><strong>${categoryLabel(weakest)[0]}</strong><span>最该补</span></div>
      </div>
      <div class="bars">
        ${bars
          .map((bar) => {
            const ratio = bar.total === 0 ? 0 : bar.completed / bar.total;
            return `
              <div class="bar-col">
                <div class="bar-track"><div class="bar-fill" style="height:${Math.max(ratio * 96, 8)}px"></div></div>
                <div class="bar-label">${escapeHtml(bar.label)}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>

    <article class="card">
      <h2 class="section-title">每周纠正总结</h2>
      <p class="section-subtitle">Where to locate the next fix</p>
      <h3 class="summary-title">${escapeHtml(summaryTitle(weeklyRatio))}</h3>
      <p class="summary-body">${escapeHtml(summaryBody(weeklyRatio, weakest))}</p>
      <p class="summary-action">${escapeHtml(summaryAction(weakest))}</p>
      <div class="count-grid">
        ${renderCountBox("体态", posture)}
        ${renderCountBox("步态", gait)}
        ${renderCountBox("心态", mindset)}
      </div>
    </article>

    <article class="card">
      <h2 class="section-title">今日自评</h2>
      <p class="section-subtitle">Save how today really felt</p>
      ${renderScoreRow("体态", "postureScore", reflect.postureScore)}
      ${renderScoreRow("步态", "gaitScore", reflect.gaitScore)}
      ${renderScoreRow("心态", "mindsetScore", reflect.mindsetScore)}
      <div class="field-stack">
        <textarea id="reflection-note" placeholder="写一句今天最容易塌掉的场景">${escapeHtml(reflect.note)}</textarea>
        <button class="primary-btn" data-save-reflection>保存今日复盘</button>
      </div>
    </article>
  `;
}

function renderSettings() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  const homeDismissed = state.appData.preferences.homeTipDismissed;
  return `
    <article class="card">
      <h2 class="section-title">定时提醒</h2>
      <p class="section-subtitle">Calendar text reminders for iPhone & iPad</p>
      <p class="theme">我已经给你配好默认节奏：早上 1 次全套、白天 3 次小纠正、晚上 1 次全套复盘。订阅一次后，iPhone 和 iPad 都可以每天循环提醒你。</p>
      <div class="routine-list">
        <div class="routine-item">
          <span class="routine-index">1</span>
          <div class="routine-copy">
            <strong>09:30 早晨全套</strong>
            <span>头颈回中、肩胛后下收、靠墙对齐、证件照中线重置</span>
          </div>
        </div>
        <div class="routine-item">
          <span class="routine-index">2</span>
          <div class="routine-copy">
            <strong>12:40 午间小纠正</strong>
            <span>下巴回 1 厘米，肩放松，眼平</span>
          </div>
        </div>
        <div class="routine-item">
          <span class="routine-index">3</span>
          <div class="routine-copy">
            <strong>15:40 下午小纠正</strong>
            <span>看前方，手摆起来，脚跟到脚尖</span>
          </div>
        </div>
        <div class="routine-item">
          <span class="routine-index">4</span>
          <div class="routine-copy">
            <strong>18:30 傍晚小纠正</strong>
            <span>脚匀、肩平、鼻尖对中线、先看外面</span>
          </div>
        </div>
        <div class="routine-item">
          <span class="routine-index">5</span>
          <div class="routine-copy">
            <strong>21:30 晚间全套</strong>
            <span>体态四件套 + 一句复盘</span>
          </div>
        </div>
      </div>
      <div class="btn-row" style="margin-top:14px;">
        <button class="primary-btn" data-open-reminder-calendar>订阅到 iPhone 日历</button>
        <button class="soft-btn" data-open-reminder-preview>打开提醒文件</button>
      </div>
      <p class="hint" style="margin-top:10px;">如果首次点击没有马上弹出订阅，刷新一次页面再点即可。想要只有文字提醒、不要声音，可在 iPhone 的“设置 > 通知 > 日历”里把声音关掉。</p>
      <div class="reminder-explain">
        <p class="section-subtitle" style="margin-top:14px;">先看这里</p>
        <div class="routine-list">
          <div class="routine-item">
            <span class="routine-index">1</span>
            <div class="routine-copy">
              <strong>只需要订阅一次</strong>
              <span>这不是每天都要重新加一次。订阅完成后，它会按当前节奏每天自动循环提醒你。</span>
            </div>
          </div>
          <div class="routine-item">
            <span class="routine-index">2</span>
            <div class="routine-copy">
              <strong>只要文字，不要声音</strong>
              <span>去 iPhone 的“设置 > 通知 > 日历”，保留横幅或锁屏提醒，把“声音”关掉，就会变成纯文字提醒。</span>
            </div>
          </div>
          <div class="routine-item">
            <span class="routine-index">3</span>
            <div class="routine-copy">
              <strong>一次取消整套提醒</strong>
              <span>打开“日历”App > 点底部“Calendars/日历” > 找到“Poise 姿态提醒” > 点信息按钮 > 点“Unsubscribe/取消订阅”。不是删一条条事件，而是整套一起关掉。</span>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:10px;">iPhone 不开放网页直接替你一键取消系统订阅，所以这里我给你的是最短取消路径。</p>
      </div>
    </article>

    <article class="card">
      <h2 class="section-title">添加到桌面</h2>
      <p class="section-subtitle">Add to Home Screen</p>
      <div class="toggle-row">
        <div class="toggle-copy">
          <h4>${standalone ? "已经像 App 一样打开" : "需要加到主屏幕吗？"}</h4>
          <p>${standalone
            ? "你现在已经处于主屏幕启动模式，界面会更像一个独立 App。"
            : "在 iPhone Safari 里点底部分享按钮，再点“添加到主屏幕”，以后就能像点 App 一样打开。"}
          </p>
        </div>
        <button class="toggle ${standalone || state.homeTipOpen ? "on" : ""}" data-toggle-home-tip></button>
      </div>
      ${
        standalone || (!homeDismissed && state.homeTipOpen)
          ? `
            <div class="card" style="padding:16px;margin-top:6px;background:rgba(255,255,255,0.72);">
              <p class="hint" style="margin:0 0 8px;">iPhone 操作顺序：</p>
              <p class="hint" style="margin:0;">1. 用 Safari 打开链接</p>
              <p class="hint" style="margin:0;">2. 点底部“分享”</p>
              <p class="hint" style="margin:0;">3. 选择“添加到主屏幕”</p>
              <p class="hint" style="margin:0;">4. 主屏幕上就会出现 Poise 入口</p>
              <div class="btn-row" style="margin-top:10px;"><button class="soft-btn" data-dismiss-home-tip>知道了</button></div>
            </div>
          `
          : ""
      }
    </article>

    <article class="card">
      <h2 class="section-title">关于提醒</h2>
      <p class="section-subtitle">Low-friction web mode</p>
      <p class="theme">这版是点击即用网页，不依赖原生安装，所以提醒采用的是 iPhone / iPad 自带的订阅日历机制。这样你不用开发者账号，也不用额外装 App，就能拿到每天循环的文字提醒。</p>
      <p class="hint">如果你以后想改提醒时间，我可以继续帮你重生成一套新的提醒节奏。</p>
    </article>

    <article class="card">
      <h2 class="section-title">本地保存</h2>
      <p class="section-subtitle">Saved on this device</p>
      <p class="theme">你在这里的训练进度、周总结和今日复盘都会保存在当前设备浏览器里。只要别清浏览器站点数据，它就会一直在。手机只要之前打开并缓存过，就算你电脑关机或临时断网，也更容易继续打开已缓存版本。</p>
    </article>

    <article class="card">
      <h2 class="section-title">计划维护</h2>
      <p class="section-subtitle">Adjust without losing direction</p>
      <div class="btn-row"><button class="soft-btn" data-reset-program>重新开始 28 天计划</button></div>
    </article>
  `;
}

function renderCountBox(label, stats) {
  return `
    <div class="count-box">
      <span>${label}</span>
      <strong>${stats.completed}/${stats.total}</strong>
      <small>${Math.round(stats.ratio * 100)}% 达成</small>
    </div>
  `;
}

function renderScoreRow(label, field, value) {
  return `
    <div class="score-row" data-score-row="${field}">
      <div class="score-head">
        <span class="score-label">${label}</span>
        <div class="score-controls">
          <button class="mini-btn" data-score-change="${field}" data-score-delta="-1">-</button>
          <span class="score-value">${value} / 5</span>
          <button class="mini-btn" data-score-change="${field}" data-score-delta="1">+</button>
        </div>
      </div>
    </div>
  `;
}

function summaryTitle(weeklyRatio) {
  if (weeklyRatio === 0) return "这周还没形成有效样本";
  if (weeklyRatio >= 0.72) return "这周整体节奏已经开始稳下来";
  if (weeklyRatio >= 0.45) return "这周已经能看出你最容易掉的环节";
  return "这周你已经开始练了，但节奏还没完全站稳";
}

function summaryBody(weeklyRatio, weakest) {
  if (weeklyRatio === 0) {
    return "你还没有留下足够的纠正记录。先别追求完美，下周优先把每天的 6 项训练打开，并至少做完其中 3 项，系统就能更准确定位。";
  }
  if (weakest === "posture") {
    return "体态这条线最容易掉，说明你的问题更像是静态中线、圆肩塌感和拍照偏头还没稳定下来。下一周优先把体态四件套每天做齐，再去追求更好看的外场表现。";
  }
  if (weakest === "gait") {
    return "步态执行最弱，说明你可能站着会注意，但一走起来就又回到低头、拖步或摆臂消失的老习惯。下一周优先把纠正带进真实走路场景。";
  }
  return "心态练习最容易被跳过，通常意味着你在真实场景里还是会忙着检查自己。下一周重点不是更用力，而是更快把注意力丢向外界。";
}

function summaryAction(weakest) {
  if (weakest === "posture") return "下周定位：先把体态四件套做稳，再谈气场。";
  if (weakest === "gait") return "下周定位：把稳感从站立搬到移动中。";
  return "下周定位：减少内审，提升外部定向。";
}

function bindBaseEvents() {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.nav;
      render();
    });
  });

  document.querySelectorAll("[data-open-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      openExercise(button.dataset.openExercise);
    });
  });

  document.querySelectorAll("[data-start-morning-routine]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.routine?.kind === "morning-posture") {
        continueMorningRoutine();
        return;
      }
      startMorningRoutine();
    });
  });

  document.querySelectorAll("[data-show-posture-only]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = "train";
      state.filter = "posture";
      render();
    });
  });

  document.querySelectorAll("[data-open-reminder-calendar]").forEach((button) => {
    button.addEventListener("click", () => {
      openReminderCalendar();
    });
  });

  document.querySelectorAll("[data-open-reminder-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      const { httpsUrl } = reminderCalendarUrls();
      window.open(httpsUrl, "_blank", "noopener");
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      render();
    });
  });

  document.querySelectorAll("[data-score-change]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.scoreChange;
      const delta = Number(button.dataset.scoreDelta || 0);
      const reflect = { ...reflectionFor() };
      reflect[field] = Math.min(5, Math.max(1, (reflect[field] || 3) + delta));
      saveReflection(reflect);
      render();
    });
  });

  document.querySelectorAll("[data-save-reflection]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById("reflection-note");
      const reflect = { ...reflectionFor(), note: input?.value?.trim?.() || "" };
      saveReflection(reflect);
      render();
    });
  });

  document.querySelectorAll("[data-toggle-home-tip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.homeTipOpen = !state.homeTipOpen;
      render();
    });
  });

  document.querySelectorAll("[data-dismiss-home-tip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.homeTipOpen = false;
      state.appData.preferences.homeTipDismissed = true;
      saveAppData();
      render();
    });
  });

  document.querySelectorAll("[data-reset-program]").forEach((button) => {
    button.addEventListener("click", () => {
      const confirmed = window.confirm("确定重新开始 28 天计划吗？当前打卡和复盘会被清空。");
      if (!confirmed) return;
      stopTimer();
      state.modalExerciseId = null;
      state.filter = "all";
      state.appData = normalizeAppData({
        startDate: new Date().toISOString(),
        preferences: state.appData.preferences
      });
      state.homeTipOpen = !state.appData.preferences.homeTipDismissed;
      saveAppData();
      render();
    });
  });
}

function currentExercise() {
  return program
    .flatMap((plan) => plan.exercises)
    .find((exercise) => exercise.id === state.modalExerciseId);
}

function illustrationMeta(exercise) {
  const [catCn, catEn] = categoryLabel(exercise.category);
  const iconMap = {
    headStack: "🪞",
    shoulderOpen: "🪽",
    wallAlign: "🧱",
    photoCenter: "📸",
    heelToe: "👣",
    armSwing: "🫱",
    strideCalm: "🚶",
    breathReset: "🌬️",
    focusScan: "👀",
    confidenceEntry: "🚪"
  };

  return {
    icon: iconMap[exercise.illustration] || iconFor(exercise.category),
    tag: `${catCn} · ${catEn}`,
    copy: exercise.cue
  };
}

function resolveSources(exercise) {
  return (exercise.sourceIds || [])
    .map((id) => sourceLibrary[id])
    .filter(Boolean);
}

function renderExerciseIllustration(exercise) {
  const shell = (inner) => `
    <svg class="ill-svg" viewBox="0 0 220 180" role="img" aria-label="${escapeHtml(exercise.title)} 示意图" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="poise-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#e5ebf6" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="208" height="168" rx="28" fill="url(#poise-card)" />
      ${inner}
    </svg>
  `;

  switch (exercise.illustration) {
    case "headStack":
      return shell(`
        <line x1="150" y1="34" x2="150" y2="150" stroke="#95b1e7" stroke-width="4" stroke-dasharray="6 6" />
        <circle cx="118" cy="62" r="22" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M101 84 C90 94, 88 118, 92 140" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M95 97 C122 103, 136 100, 150 96" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M103 62 C112 60, 118 60, 124 63" fill="none" stroke="#2f3748" stroke-width="4" stroke-linecap="round" />
        <path d="M76 63 C86 56, 92 55, 98 57" fill="none" stroke="#97c1b1" stroke-width="6" stroke-linecap="round" />
        <path d="M82 49 L63 49 L63 69" fill="none" stroke="#97c1b1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M118 24 L118 40" stroke="#ead8bd" stroke-width="6" stroke-linecap="round" />
        <path d="M110 30 L118 20 L126 30" fill="none" stroke="#ead8bd" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      `);
    case "shoulderOpen":
      return shell(`
        <circle cx="110" cy="44" r="20" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M110 64 L110 128" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M72 90 C84 82, 94 80, 110 86 C126 80, 136 82, 148 90" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M88 116 C100 124, 120 124, 132 116" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M72 88 L52 74 L59 66" fill="none" stroke="#95b1e7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M148 88 L168 74 L161 66" fill="none" stroke="#95b1e7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M86 92 L79 108" stroke="#97c1b1" stroke-width="5" stroke-linecap="round" />
        <path d="M134 92 L141 108" stroke="#97c1b1" stroke-width="5" stroke-linecap="round" />
      `);
    case "wallAlign":
      return shell(`
        <rect x="158" y="24" width="14" height="124" rx="7" fill="#dbe3f2" />
        <circle cx="104" cy="48" r="20" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M104 68 C92 82, 94 110, 98 138" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M99 96 C120 100, 140 100, 156 96" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M116 74 C132 72, 146 70, 158 70" fill="none" stroke="#95b1e7" stroke-width="5" stroke-dasharray="4 5" stroke-linecap="round" />
        <path d="M122 48 L158 48" stroke="#97c1b1" stroke-width="5" stroke-dasharray="4 5" stroke-linecap="round" />
        <circle cx="158" cy="48" r="4" fill="#97c1b1" />
        <circle cx="158" cy="70" r="4" fill="#95b1e7" />
      `);
    case "photoCenter":
      return shell(`
        <line x1="110" y1="24" x2="110" y2="152" stroke="#95b1e7" stroke-width="4" stroke-dasharray="6 6" />
        <circle cx="110" cy="50" r="22" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M70 90 C84 80, 98 78, 110 82 C122 78, 136 80, 150 90" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M92 92 L92 138" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M128 92 L128 138" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M78 140 L94 140" stroke="#97c1b1" stroke-width="6" stroke-linecap="round" />
        <path d="M126 140 L142 140" stroke="#97c1b1" stroke-width="6" stroke-linecap="round" />
        <circle cx="110" cy="52" r="4" fill="#ead8bd" />
        <circle cx="110" cy="62" r="4" fill="#ead8bd" />
        <circle cx="110" cy="72" r="4" fill="#ead8bd" />
      `);
    case "heelToe":
      return shell(`
        <path d="M40 116 C58 108, 74 110, 92 122 C104 130, 118 134, 140 132" fill="none" stroke="#2f3748" stroke-width="8" stroke-linecap="round" />
        <path d="M40 116 L34 98" stroke="#97c1b1" stroke-width="6" stroke-linecap="round" />
        <path d="M145 132 L160 124 L170 132" fill="none" stroke="#95b1e7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M70 88 C96 72, 122 72, 150 84" fill="none" stroke="#ead8bd" stroke-width="6" stroke-linecap="round" />
        <path d="M142 76 L156 84 L142 92" fill="none" stroke="#ead8bd" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="34" cy="98" r="5" fill="#97c1b1" />
      `);
    case "armSwing":
      return shell(`
        <circle cx="110" cy="42" r="20" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M110 62 L110 126" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 80 L82 104" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 80 L138 58" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 126 L90 152" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 126 L132 146" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M72 108 C64 96, 64 86, 72 76" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" />
        <path d="M148 72 C156 84, 156 94, 148 104" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" />
      `);
    case "strideCalm":
      return shell(`
        <circle cx="96" cy="42" r="20" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M96 62 L104 116" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M104 78 L72 96" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M104 80 L134 70" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M104 116 L86 146" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M104 116 L132 132" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M60 152 H156" stroke="#d5ddea" stroke-width="6" stroke-linecap="round" />
        <path d="M132 48 H164" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" />
        <path d="M156 40 L166 48 L156 56" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      `);
    case "breathReset":
      return shell(`
        <circle cx="110" cy="42" r="20" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M110 62 L110 122" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M80 84 C88 80, 96 80, 110 84 C124 80, 132 80, 140 84" fill="none" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <ellipse cx="110" cy="112" rx="24" ry="18" fill="none" stroke="#97c1b1" stroke-width="5" />
        <path d="M150 74 C166 74, 168 92, 154 96 C142 100, 142 116, 158 116" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" />
        <path d="M88 112 C76 106, 76 92, 88 86" fill="none" stroke="#ead8bd" stroke-width="5" stroke-linecap="round" />
      `);
    case "focusScan":
      return shell(`
        <circle cx="110" cy="72" r="30" fill="none" stroke="#2f3748" stroke-width="6" />
        <circle cx="98" cy="68" r="4" fill="#2f3748" />
        <circle cx="122" cy="68" r="4" fill="#2f3748" />
        <path d="M100 86 C106 92, 114 92, 120 86" fill="none" stroke="#2f3748" stroke-width="4" stroke-linecap="round" />
        <circle cx="58" cy="56" r="10" fill="#95b1e7" />
        <circle cx="164" cy="54" r="10" fill="#97c1b1" />
        <circle cx="164" cy="120" r="10" fill="#ead8bd" />
        <path d="M82 64 L67 59" stroke="#95b1e7" stroke-width="4" stroke-linecap="round" />
        <path d="M138 64 L153 58" stroke="#97c1b1" stroke-width="4" stroke-linecap="round" />
        <path d="M132 94 L154 114" stroke="#ead8bd" stroke-width="4" stroke-linecap="round" />
      `);
    case "confidenceEntry":
      return shell(`
        <rect x="56" y="38" width="20" height="96" rx="8" fill="#dce5f5" />
        <rect x="144" y="38" width="20" height="96" rx="8" fill="#dce5f5" />
        <path d="M76 38 H144" stroke="#dce5f5" stroke-width="10" stroke-linecap="round" />
        <circle cx="110" cy="58" r="18" fill="none" stroke="#2f3748" stroke-width="6" />
        <path d="M110 76 L110 122" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 88 L88 102" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 88 L130 82" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 122 L96 146" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M110 122 L130 136" stroke="#2f3748" stroke-width="6" stroke-linecap="round" />
        <path d="M134 88 H168" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" />
        <path d="M160 80 L170 88 L160 96" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      `);
    default:
      return shell(`
        <circle cx="110" cy="88" r="36" fill="none" stroke="#2f3748" stroke-width="8" />
        <path d="M110 40 V22" stroke="#95b1e7" stroke-width="6" stroke-linecap="round" />
        <path d="M102 30 L110 20 L118 30" fill="none" stroke="#95b1e7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      `);
  }
}

function renderSelfCheck(exercise) {
  return `
    <div class="check-list">
      ${(exercise.selfCheck || [])
        .map(
          (item) => `
            <div class="check-item">
              <span class="check-dot">✓</span>
              <p>${escapeHtml(item)}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSourceList(exercise) {
  const sources = resolveSources(exercise);
  return `
    <div class="source-stack">
      ${
        exercise.evidenceNote
          ? `<p class="source-intro">${escapeHtml(exercise.evidenceNote)}</p>`
          : ""
      }
      ${sources
        .map(
          (source) => `
            <article class="source-card">
              <div class="source-top">
                <div>
                  <h4>${escapeHtml(source.title)}</h4>
                  <p class="source-meta">${escapeHtml(source.organization)}</p>
                </div>
                <a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">打开来源</a>
              </div>
              <p class="source-note">${escapeHtml(source.support)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderModal() {
  const modal = document.getElementById("modal-sheet");
  const backdrop = document.getElementById("modal-backdrop");
  const exercise = currentExercise();

  if (!exercise) {
    modal.innerHTML = "";
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("show");
    document.body.style.overflow = "";
    return;
  }

  const progress = progressFor(exercise);
  const ratio = Math.max(progressRatio(exercise) * 100, 4);
  const timed = exercise.targetMetric.kind === "seconds" || exercise.targetMetric.kind === "minutes";
  const running = state.timer?.exerciseId === exercise.id;
  const illustration = illustrationMeta(exercise);
  const routine = currentRoutineStatus();
  const nextRoutineLabel = routine
    ? routine.position === routine.total
      ? routine.allComplete
        ? "完成晨间全套"
        : "结束晨间全套"
      : isComplete(exercise)
        ? "继续下一个动作"
        : "先完成也可跳下一个"
    : "";

  modal.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="chip">${iconFor(exercise.category)} ${escapeHtml(categoryLabel(exercise.category)[0])}<small>${escapeHtml(exercise.subtitle)}</small></span>
      <button class="close-btn" data-close-modal aria-label="关闭">×</button>
    </div>

    ${
      routine
        ? `
          <article class="card routine-flow-card" style="margin-bottom:14px;">
            <div class="routine-flow-head">
              <div>
                <p class="eyebrow">晨间全套进行中</p>
                <h3 class="section-title" style="font-size:20px;">第 ${routine.position} / ${routine.total} 个体态动作</h3>
              </div>
              <div class="routine-badge">
                <strong>${routine.completed}/${routine.total}</strong>
                <span>已完成</span>
              </div>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width:${Math.max((routine.completed / routine.total) * 100, 4)}%"></div></div>
          </article>
        `
        : ""
    }

    <article class="illustration">
      <div>
        <p class="ill-tag">${escapeHtml(illustration.tag)}</p>
        <h2 class="ill-title">${escapeHtml(exercise.title)}</h2>
        <p class="ill-copy">${escapeHtml(exercise.summary)}</p>
        <p class="ill-copy">${escapeHtml(illustration.copy)}</p>
      </div>
      <div class="ill-diagram" aria-hidden="true">${renderExerciseIllustration(exercise)}</div>
    </article>

    <article class="card" style="margin-top:14px;">
      <h3 class="section-title" style="font-size:20px;">完成进度</h3>
      <p class="metric-big">${escapeHtml(formatMetric(exercise, progress))}</p>
      <div class="progress-track" style="margin-top:10px;"><div class="progress-fill" style="width:${ratio}%"></div></div>
      <div class="btn-row" style="margin-top:14px;">
        ${
          timed
            ? `<button class="${running ? "sage-btn" : "primary-btn"}" data-timer-toggle>${running ? "暂停计时" : exercise.targetMetric.actionLabel}</button>`
            : `<button class="primary-btn" data-progress-increment>${escapeHtml(exercise.targetMetric.actionLabel)}</button>`
        }
        <button class="soft-btn" data-progress-reset>归零重来</button>
        ${
          routine
            ? `<button class="${isComplete(exercise) ? "sage-btn" : "soft-btn"}" data-routine-next>${nextRoutineLabel}</button>`
            : ""
        }
      </div>
    </article>

    <article class="card" style="margin-top:14px;">
      <h3 class="section-title" style="font-size:20px;">动作步骤</h3>
      <div class="steps" style="margin-top:14px;">
        ${exercise.instructions
          .map(
            (step, index) => `
              <div class="step">
                <span class="step-badge">${index + 1}</span>
                <p>${escapeHtml(step)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </article>

    <article class="card" style="margin-top:14px;">
      <h3 class="section-title" style="font-size:20px;">自查要点</h3>
      <p class="section-subtitle">Check your form before you chase volume</p>
      ${renderSelfCheck(exercise)}
    </article>

    <article class="card" style="margin-top:14px;">
      <h3 class="section-title" style="font-size:20px;">知识来源</h3>
      <p class="section-subtitle">Official references behind this drill</p>
      ${renderSourceList(exercise)}
    </article>
  `;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  backdrop.classList.add("show");
  document.body.style.overflow = "hidden";

  backdrop.onclick = closeModal;

  const closeButton = modal.querySelector("[data-close-modal]");
  closeButton?.addEventListener("click", closeModal);

  const timerButton = modal.querySelector("[data-timer-toggle]");
  timerButton?.addEventListener("click", () => {
    if (state.timer?.exerciseId === exercise.id) {
      stopTimer();
      renderModal();
      return;
    }

    stopTimer();
    state.timer = {
      exerciseId: exercise.id,
      intervalId: window.setInterval(() => {
        incrementProgress(exercise, 1);
        if (isComplete(exercise)) stopTimer();
        render();
      }, 1000)
    };
    renderModal();
  });

  const incrementButton = modal.querySelector("[data-progress-increment]");
  incrementButton?.addEventListener("click", () => {
    incrementProgress(exercise, 1);
    render();
  });

  const resetButton = modal.querySelector("[data-progress-reset]");
  resetButton?.addEventListener("click", () => {
    stopTimer();
    setProgress(exercise, 0);
    render();
  });

  const routineNextButton = modal.querySelector("[data-routine-next]");
  routineNextButton?.addEventListener("click", () => {
    stopTimer();
    const status = currentRoutineStatus();
    if (!status) return;
    if (status.position === status.total) {
      finishRoutine();
      return;
    }
    moveRoutineTo(status.index + 1);
  });
}

function stopTimer() {
  if (!state.timer) return;
  window.clearInterval(state.timer.intervalId);
  state.timer = null;
}

function closeModal() {
  stopTimer();
  state.modalExerciseId = null;
  renderModal();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

render();
