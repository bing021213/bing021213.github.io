/* 只修改此文件即可更新主要内容。en = 英文，zh = 中文。
 * 尚未提供的内容明确标为示例；请在公开发布前替换。
 * 留空的链接不会显示为可点击链接。头像、论文图片使用相对路径。
 */
window.PROFILE = {
  defaultLanguage: "en",
  name: { en: "Bing Yuan", zh: "袁冰" },
  alternateName: { en: "袁冰", zh: "Bing Yuan" },
  initials: "BY",
  role: { en: "PhD Student · Tsinghua University", zh: "博士研究生 · 清华大学" },
  // 每段可以是字符串，或由文字与 { text, url } 链接组成的数组。
  bio: {
    "en": [
        [
            "I am currently a PhD student in the Department of Psychological and Cognitive Sciences at Tsinghua University, advised by ",
            {
                "text": "Prof. Yisi Zhang",
                "url": "https://www.pcs.tsinghua.edu.cn/info/1009/1356.htm"
            },
            ". Prior to that, I obtained my B.S. degree from Beijing Normal University."
        ],
        "My research combines AI and experimental methods to study the development of natural behavior and multi-agent social interactions in humans and nonhuman primates, especially marmosets. I also develop tools and platforms to support this work. I am interested in efficient, biologically inspired embodied AI: drawing on how infants learn about the physical world and acquire social intelligence, I aim to design training approaches that enable robots to build world models in a similar way."
    ],
    "zh": [
        [
            "我目前是清华大学心理与认知科学系的博士研究生，师从",
            {
                "text": "张一思教授",
                "url": "https://www.pcs.tsinghua.edu.cn/info/1009/1356.htm"
            },
            "。此前，我在北京师范大学获得学士学位。"
        ],
        "我的研究结合 AI 与实验方法，理解人类和非人灵长类（尤其是绒猴）自然行为的发展与多智能体社会交互，并开发支持相关研究的工具与平台。我也关注高效、受生物启发的具身 AI，希望借鉴婴儿理解物理世界和获得社会智能的过程，设计使机器人以类似方式构建世界模型的训练方法。"
    ]
},
  // 放入 assets/photo.svg 后，将此处改成 assets/photo.svg。
  photo: "assets/photo.svg",
  photoCaption: { en: "YOUR PHOTO HERE", zh: "在这里放入你的照片" },
  email: "yuanb24@mails.tsinghua.edu.cn",
  links: { github: "https://github.com/bing021213", scholar: "https://scholar.google.com/citations?user=dhUfGHYAAAAJ&hl=zh-CN", linkedin: "", cv: "" },
  news: [
    { date: { en: "2024", zh: "2024" }, text: { en: "Began my PhD studies at Tsinghua University.", zh: "开始在清华大学攻读博士学位。" } },
    { date: { en: "2024", zh: "2024" }, text: { en: "Graduated from Beijing Normal University with a Bachelor of Engineering in Artificial Intelligence.", zh: "毕业于北京师范大学人工智能专业，获工学学士学位。" } }
  ],
  // 论文链接与引用信息；可添加 image、summary、abstract 等可选字段。
  publications: [
    {
        "title": "Continuous reconstruction of behavioral development in primate families",
        "authors": [
            "Bing Yuan",
            "Beihong Wang",
            "Yisi Zhang"
        ],
        "venue": "submit",
        "selected": true,
        "example": false,
        "image": "assets/holmes-development-sketch-v2.svg",
        "imageAlt": {
            "en": "HOLMES conceptual illustration with the logo at upper left, a centered title, family recording, multi-animal 3D tracking, and directional information exchange between family members during behavioral development.",
            "zh": "HOLMES 概念示意图：左上角标志、居中标题、家庭录像、多动物三维追踪，以及行为发育中的家庭成员双向信息交互。"
        },
        "abstract": "",
        "bibtex": "",
        "links": {
            "abstract": "",
            "github": "https://github.com/bing021213/HOLMES",
            "project": "",
            "paper": "",
            "bibtex": ""
        },
        "actionOrder": [
            "abstract",
            "github",
            "project",
            "paper",
            "bibtex"
        ],
        "reserveLinks": true
    },
    {
        "title": "HumanSightBench: A Benchmark for Human Visual Perception in MLLMs",
        "authors": [
            "Zixin Su",
            "Yangguang Lin",
            "Zegang Peng",
            "Yuntong Sun",
            "Xuanyi Wang",
            "Jiahao Wang",
            "Qiankai Xu",
            "Bing Yuan",
            "Jingjia Huang",
            "Ruyang Liu",
            "Yanxu Hu",
            "Yufeng Zhou",
            "Yi Lin"
        ],
        "venue": "arXiv:2611.12305, 2026",
        "selected": true,
        "example": false,
        "bibtex": "@misc{su2026humansightbenchbenchmarkhumanvisual,\n  title={HumanSightBench: A Benchmark for Human Visual Perception in MLLMs},\n  author={Zixin Su and Yangguang Lin and Zegang Peng and Yuntong Sun and Xuanyi Wang and Jiahao Wang and Qiankai Xu and Bing Yuan and Jingjia Huang and Ruyang Liu and Yanxu Hu and Yufeng Zhou and Yi Lin},\n  year={2026},\n  eprint={2611.12305},\n  archivePrefix={arXiv},\n  primaryClass={cs.CV},\n  url={https://arxiv.org/abs/2611.12305}\n}",
        "links": {
            "paper": "https://arxiv.org/abs/2611.12305"
        },
        "abstract": {
            "en": "HumanSightBench tests whether multimodal language models can handle visual judgments that are straightforward for people. Its 2,876 short-answer tasks span seven broad categories and 21 finer skills. Examples are screened for clear wording, a single visually supported answer, human solvability, and resistance to text-only shortcuts. Across eight evaluated models, the strongest pass@3 result reaches 65.6%, while every model remains below 27.5% on counting. The benchmark is intended to expose specific perceptual weaknesses that aggregate evaluation scores can obscure.",
            "zh": "HumanSightBench 用人类容易完成的视觉判断任务评估多模态语言模型。它包含 2,876 道简答题，覆盖七个大类与 21 项细分能力，并从题意清晰、答案唯一、视觉依据、人类可解性和排除纯文本捷径等方面筛选题目。在八个模型的评估中，最佳 pass@3 为 65.6%，所有模型在计数任务上均低于 27.5%。这一基准旨在揭示整体评分容易掩盖的具体视觉能力缺口。"
        },
        "abstractIsSummary": true,
        "image": "assets/humansightbench-sketch.svg",
        "imageAlt": {
            "en": "Conceptual line drawing of visual tasks, human validation, and MLLM evaluation.",
            "zh": "概念简笔示意图：视觉任务、人类验证与多模态模型评估。"
        }
    },
    {
        "title": "Quantifying Family-Level Social Development with Longitudinal 3D Tracking in Marmosets",
        "authors": [
            "Bing Yuan",
            "Beihong Wang",
            "Yisi Zhang"
        ],
        "venue": "Proceedings of the Annual Meeting of the Cognitive Science Society, 48, 2026",
        "selected": true,
        "example": false,
        "bibtex": "@inproceedings{yuan2026quantifying,\n  title={Quantifying Family-Level Social Development with Longitudinal 3D Tracking in Marmosets},\n  author={Yuan, Bing and Wang, Beihong and Zhang, Yisi},\n  booktitle={Proceedings of the Annual Meeting of the Cognitive Science Society},\n  volume={48},\n  year={2026},\n  url={https://repositories.cdlib.org/uc/item/9169m3th}\n}",
        "links": {
            "paper": "https://repositories.cdlib.org/uc/item/9169m3th"
        },
        "abstract": {
            "en": "This work studies how social coordination develops within marmoset families using long-term recordings in their home cages. It introduces HOLMES, a tracking pipeline that combines temporal Transformers, segmentation, and pose inference to reconstruct three-dimensional skeletons and maintain individual identities as the animals grow. The system addresses clutter, occlusion, and changing body proportions in naturalistic housing. Its measurements make it possible to examine the timing of caregiver–infant exchanges and changes in family coordination, relating short-lived interactions to broader developmental patterns.",
            "zh": "这项工作通过绒猴家庭笼舍中的长期记录，研究家庭社会协调的发展。HOLMES 结合时间 Transformer、分割与姿态推断，重建三维骨架，并在动物成长过程中保持个体身份追踪，以应对复杂背景、遮挡和身体比例变化。系统提供的测量可用于分析亲代与幼体交互的时序和家庭协调的变化，从而把短时社会互动与长期发育模式联系起来。"
        },
        "abstractIsSummary": true,
        "image": "assets/marmoset-family-sketch.svg",
        "imageAlt": {
            "en": "Conceptual line drawing of marmoset family recordings, three-dimensional pose tracking, and parent–infant social development.",
            "zh": "概念简笔示意图：绒猴家庭录像、三维姿态追踪与亲子社会发展。"
        }
    },
    {
        "title": "Towards Scalable and Ecological Methods for Early Social Development Research: Validating Automated Facial Expression Estimation in Egocentric Video",
        "authors": [
            "Yisi Zhang",
            "Emma Jayne Jackson",
            "Nicoleta Gavrila",
            "Quoc Vuong",
            "Bing Yuan",
            "Elena Geangu"
        ],
        "venue": "Proceedings of the Annual Meeting of the Cognitive Science Society, 48, 2026",
        "selected": true,
        "example": false,
        "image": "assets/egocentric-parent-infant.svg",
        "links": {
            "paper": "https://repositories.cdlib.org/uc/item/1zz809np"
        },
        "bibtex": "@inproceedings{zhang2026towards,\n  title={Towards Scalable and Ecological Methods for Early Social Development Research: Validating Automated Facial Expression Estimation in Egocentric Video},\n  author={Zhang, Yisi and Jackson, Emma Jayne and Gavrila, Nicoleta and Vuong, Quoc and Yuan, Bing and Geangu, Elena},\n  booktitle={Proceedings of the Annual Meeting of the Cognitive Science Society},\n  volume={48},\n  year={2026},\n  url={https://repositories.cdlib.org/uc/item/1zz809np}\n}",
        "abstractIsSummary": true,
        "abstract": {
            "en": "This study assesses an EfficientNet-B0 pipeline for estimating facial affect from everyday recordings captured by infants’ wearable cameras. The system reaches an F1 score of 0.543 under challenging viewing conditions. Its error structure broadly resembles human judgments (r = 0.76), although neutral faces show a different ambiguity pattern (r = −0.26). The results support scalable measurement of infants’ social experiences while identifying expression-specific limitations.",
            "zh": "这项研究评估了基于 EfficientNet-B0 的表情估计流程，用于分析婴儿可穿戴相机记录的日常视频。在复杂拍摄条件下，模型的 F1 为 0.543，错误模式与人类判断总体相关（r = 0.76），但对中性表情的模糊性处理有所不同（r = −0.26）。结果支持将该方法用于规模化研究婴儿社会经验，同时指出不同表情类别上的局限。"
        },
        "imageAlt": {
            "en": "Conceptual line drawing of a parent holding an infant with a head-mounted camera, facial expression estimation, and parent–infant interaction.",
            "zh": "亲子简笔示意图：家长抱着佩戴头部相机的婴儿、表情估计与亲子互动。"
        }
    }
],
  projects: [
    { name: { en: "Your open-source project", zh: "你的开源项目" }, description: { en: "Introduce a tool, dataset, or codebase you built and the problem it solves.", zh: "介绍你开发的工具、数据集或代码库，以及它解决的问题。" }, type: { en: "Code / Tool", zh: "代码 / 工具" }, url: "" },
    { name: { en: "Notes & shared resources", zh: "研究笔记与共享资源" }, description: { en: "A place for tutorials, reading lists, or resources you would like to share.", zh: "展示你希望分享的教程、阅读清单和研究资源。" }, type: { en: "Writing / Resources", zh: "写作 / 资源" }, url: "" }
  ],
  experience: [
    { period: { en: "2024 —", zh: "2024 —" }, title: { en: "PhD Student @ Tsinghua University", zh: "博士研究生 @ 清华大学" }, institution: { en: "Department of Psychological and Cognitive Sciences · Cognitive Science", zh: "心理与认知科学系 · 认知科学" } },
    { period: { en: "2026 Summer", zh: "2026 夏季" }, title: { en: "Intern @ ByteDance", zh: "实习生 @ 字节跳动" }, institution: { en: "Seed Global Data", zh: "Seed Global Data" } },
    { period: { en: "2020 — 2024", zh: "2020 — 2024" }, title: { en: "Bachelor @ Beijing Normal University", zh: "本科生 @ 北京师范大学" }, institution: { en: "School of Artificial Intelligence · Artificial Intelligence", zh: "人工智能学院 · 人工智能" } }
  ],
  contact: { en: "For research conversations or collaborations, reach me at the email address on this page.", zh: "欢迎交流研究想法与合作机会。填写邮箱后，访客可通过本页的邮箱与你联系。" }
};
