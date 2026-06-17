import type { BibleType } from "@/types/domain";

// 16 personality-code -> Bible character mapping + profiles.
// Source: IVF 한국기독학생회 mapping & descriptions (Korean), adapted to English.
// bestMatch/worstMatch follow the standard MBTI compatibility chart pattern:
//   best  = duality pair (flip E/I and J/P, keep middle two)  — mutual
//   worst = conflict pair (per the chart's NF·NT ↔ SP·SJ red blocks) — mutual
//   (a few worst pairs were swapped so close relatives aren't paired, e.g. David–Solomon)
// verses/calling are intentionally LEFT EMPTY — Scripture content is filled at
// pastor review, not improvised here (docs/DATA.md). readingRef is IVF's pointer.
// TODO: split into types/{id}.ts once verses/calling land (DATA.md file rule).
export const TYPES: BibleType[] = [
  {
    id: "noah",
    code: "INTJ",
    character: "Noah",
    title: "The Long-view Strategist",
    traits: ["Analytical", "Independent", "Disciplined", "Visionary"],
    summary:
      "Steady and far-sighted — you quietly work toward what others can't picture yet.",
    lines: [
      "You think long-term — while others react to today, you're already planning years ahead.",
      "When God gives you a clear task, you stick with it — even when it's slow or lonely.",
      "You think for yourself, so trends and hype don't pull you around.",
      "You do your best work with a clear plan and quiet space to focus.",
      "Your ideas run so far ahead that people lose the thread — slow down and bring them along.",
      "The hard part isn't the vision — it's trusting God's timing while you wait.",
    ],
    calling:
      "You're made to keep the long view — to hear God clearly, commit early, and keep going toward what he's promised. It works best when you let people in and trust God's timing, not just your own plan.",
    prayer:
      "Lord, give me patience for the long road — help me build what you've asked, trust your timing over mine, and walk with you even when no one else understands.",
    verses: [
      {
        ref: "Genesis 6:22",
        text: "Thus did Noah; according to all that God commanded him, so did he.",
        translation: "KJV",
      },
    ],
    readingRef: "Genesis 6",
    bestMatch: "esther",
    worstMatch: "jacob",
    accent: "#6f8a76",
    icon: "ship",
  },
  {
    id: "solomon",
    code: "INTP",
    character: "Solomon",
    title: "The Wise Thinker",
    traits: ["Logical", "Scholarly", "Curious", "Truth-seeking"],
    summary:
      "Thoughtful and truth-hungry — you're happiest following an idea all the way down to its root.",
    lines: [
      "You think for a living — hand you a hard question and you won't rest until it makes sense.",
      "You trust what's true over what's merely popular, and you can explain it until others finally see it.",
      "Teaching, writing, untangling a difficult passage — this is where you come alive.",
      "Justice matters to you; you want things to be not just clever but right.",
      "Living mostly in your head can get lonely — truth was made to be shared, not only solved.",
      "Bowing to an authority you could out-argue is hard; you grow when you let God be wiser than you.",
    ],
    calling:
      "You're made to seek wisdom and pass it on — to dig past easy answers, discern what's true, and teach it in a way that sets people free. That gift turns hollow when it only feeds your pride; it turns holy when your knowledge bows to God and is spent in love.",
    prayer:
      "Lord, you give wisdom to all who ask — let mine bow to you, and teach me to love people more than being right.",
    verses: [
      {
        ref: "Proverbs 9:10",
        text: "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.",
        translation: "KJV",
      },
      {
        ref: "Ecclesiastes 12:13",
        text: "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.",
        translation: "KJV",
      },
    ],
    readingRef: "1 Kings 3",
    bestMatch: "paul",
    worstMatch: "mary",
    accent: "#3a8f8f",
    icon: "gem",
  },
  {
    id: "paul",
    code: "ENTJ",
    character: "Paul",
    title: "The Driven Visionary",
    traits: ["Driven", "Commanding", "Strategic", "Bold"],
    summary:
      "Bold and focused — you spot a goal worth chasing and bring people with you.",
    lines: [
      "You're a natural leader — you see where to go and get people moving.",
      "You set big goals and have the drive to actually reach them.",
      "You make hard truth clear — teaching and persuading come easily.",
      "You'd rather hear it straight than be flattered.",
      "That drive can run people over — real strength stays gentle, not just loud.",
      "Once you start, you finish — you mean to run the whole race.",
    ],
    calling:
      "You're made to lead and build — to set a vision, gather people, and push God's work forward with everything you've got. It becomes a blessing when your drive bows to Christ, your strength stays gentle, and you let yourself be led too.",
    prayer:
      "Lord, take my drive and point it at you — make me bold for the gospel, gentle with people, and ready to follow even while I lead.",
    verses: [
      {
        ref: "Philippians 3:14",
        text: "I press toward the mark for the prize of the high calling of God in Christ Jesus.",
        translation: "KJV",
      },
      {
        ref: "Philippians 4:13",
        text: "I can do all things through Christ which strengtheneth me.",
        translation: "KJV",
      },
    ],
    readingRef: "Acts 20",
    bestMatch: "solomon",
    worstMatch: "adam",
    accent: "#b15a3c",
    icon: "megaphone",
  },
  {
    id: "esther",
    code: "ENTP",
    character: "Esther",
    title: "The Daring Advocate",
    traits: ["Inventive", "Witty", "Versatile", "Persuasive"],
    summary:
      "Quick, persuasive, and brave when it counts — you find the right words at the right moment.",
    lines: [
      "You think on your feet and win people over with words.",
      "You read the moment and act when it matters — even when it's risky.",
      "You're adaptable and inventive — you find a way through where others see a wall.",
      "Your wit and warmth draw people in and open doors.",
      "Cleverness can outrun conviction — let truth anchor you, not just a good argument.",
      "Your bravest moments come when standing up for someone costs you something.",
    ],
    calling:
      "You're made to speak up and step in — to use your wit, courage, and way with words to stand up for others at just the right moment. It turns holy when it's about helping people rather than winning, and stays rooted in God's truth instead of your own cleverness.",
    prayer:
      "Lord, give me courage for the moment you've placed me in — let me use my words for others, not just to win, and keep my boldness rooted in your truth.",
    verses: [
      {
        ref: "Esther 4:14",
        text: "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?",
        translation: "KJV",
      },
    ],
    readingRef: "Esther 4",
    bestMatch: "noah",
    worstMatch: "david",
    accent: "#4faf86",
    icon: "crown",
  },
  {
    id: "jeremiah",
    code: "INFJ",
    character: "Jeremiah",
    title: "The Insightful Guardian",
    traits: ["Insightful", "Spiritual", "Empathetic", "Convicted"],
    summary:
      "Quiet, deep, and tuned in — you sense what others miss and feel things fully.",
    lines: [
      "You pick up on what people are really feeling, often before they say it.",
      "Your faith runs deep — prayer and time with God matter more to you than noise.",
      "You can sit with someone in their pain without rushing to fix it.",
      "You're drawn to quiet, meaning, and the inner life.",
      "Criticism and conflict can cut deep — not every hard word is about you.",
      "Trust your gut, but check it against God's word — feelings make a poor compass on their own.",
    ],
    calling:
      "You're made to see beneath the surface — to notice the hurting, carry their burdens to God, and point people toward him with quiet conviction. It stays healthy when you anchor your inner sense in God's word, not just how you feel.",
    prayer:
      "Lord, let me carry people's pain to you — and weigh my heart against your truth instead of trusting it on its own.",
    verses: [
      {
        ref: "Jeremiah 1:5",
        text: "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.",
        translation: "KJV",
      },
      {
        ref: "Lamentations 3:23",
        text: "They are new every morning: great is thy faithfulness.",
        translation: "KJV",
      },
    ],
    readingRef: "Jeremiah 1",
    bestMatch: "peter",
    worstMatch: "rebekah",
    accent: "#7d8f6e",
    icon: "eye",
  },
  {
    id: "barnabas",
    code: "INFP",
    character: "Barnabas",
    title: "The Loyal Idealist",
    traits: ["Idealistic", "Loyal", "Compassionate", "Just"],
    summary:
      "Warm-hearted and loyal — you believe in people and quietly help them become their best.",
    lines: [
      "You see the good in people, even when others have given up on them.",
      "You're generous with your time, your encouragement, and what you have.",
      "You care deeply about doing what's right and kind.",
      "You stick with people through the long haul.",
      "You feel things deeply — guard your heart so caring for others doesn't drain you dry.",
      "Your quiet encouragement can change someone's whole story.",
    ],
    calling:
      "You're made to encourage — to believe in people, draw out their gifts, and stand by them when no one else will. That gift goes furthest when your idealism rests on God's grace and you let him refill you as you pour out.",
    prayer:
      "Lord, help me see people the way you do — to believe in them and give freely, while letting you renew me as I give.",
    verses: [
      {
        ref: "Acts 11:24",
        text: "For he was a good man, and full of the Holy Ghost and of faith: and much people was added unto the Lord.",
        translation: "KJV",
      },
      {
        ref: "1 Thessalonians 5:11",
        text: "Wherefore comfort yourselves together, and edify one another, even as also ye do.",
        translation: "KJV",
      },
    ],
    readingRef: "Acts 9; Acts 15",
    bestMatch: "jonathan",
    worstMatch: "deborah",
    accent: "#6b86b8",
    icon: "heart-handshake",
  },
  {
    id: "jonathan",
    code: "ENFJ",
    character: "Jonathan",
    title: "The Affectionate Supporter",
    traits: ["Encouraging", "Warm", "Inspiring", "Devoted"],
    summary:
      "Warm and devoted — you draw the best out of people and show up for them.",
    lines: [
      "You have a gift for making people feel seen and valued.",
      "You pour yourself into the people you love — time, care, loyalty.",
      "Encouraging and mentoring others comes naturally to you.",
      "You build close, lasting friendships.",
      "You run on warmth, so criticism stings more than it should — your worth isn't up for a vote.",
      "Real love sometimes means cheering someone else's rise, even when it costs you.",
    ],
    calling:
      "You're made to build people up — to love loyally, draw out their gifts, and champion them toward God. It shines brightest when you can celebrate others freely, the way Jonathan did, instead of needing the spotlight yourself.",
    prayer:
      "Lord, make me a faithful friend — let me love people well, cheer them on, and find my worth in you rather than their approval.",
    verses: [
      {
        ref: "1 Samuel 18:3",
        text: "Then Jonathan and David made a covenant, because he loved him as his own soul.",
        translation: "KJV",
      },
      {
        ref: "John 15:13",
        text: "Greater love hath no man than this, that a man lay down his life for his friends.",
        translation: "KJV",
      },
    ],
    readingRef: "1 Samuel 18; 20",
    bestMatch: "barnabas",
    worstMatch: "rahab",
    accent: "#9c7a86",
    icon: "users",
  },
  {
    id: "peter",
    code: "ENFP",
    character: "Peter",
    title: "The Spirited Inspirer",
    traits: ["Energetic", "Passionate", "Relational", "Expressive"],
    summary:
      "Warm, eager, and full of energy — you bring people in and light up the room.",
    lines: [
      "You're full of energy, and people are drawn to you.",
      "You love expressing your faith out loud — in words, action, and worship.",
      "You jump in with both feet, ready to go.",
      "Your enthusiasm lifts everyone around you.",
      "You move fast — let your zeal grow into steady faith, not just big feelings.",
      "Even when you stumble, grace picks you back up — your best days come after God restores you.",
    ],
    calling:
      "You're made to inspire — to love out loud, draw people in, and spark faith with your energy. It matures when your zeal learns to wait on God, and when you let his grace lift you after every stumble, the way it did for Peter.",
    prayer:
      "Lord, take my energy and steady it — let me follow you boldly, wait on you patiently, and trust your grace to raise me up when I fall.",
    verses: [
      {
        ref: "1 Peter 1:8",
        text: "Whom having not seen, ye love; in whom, though now ye see him not, yet believing, ye rejoice with joy unspeakable and full of glory.",
        translation: "KJV",
      },
      {
        ref: "1 Peter 5:7",
        text: "Casting all your care upon him; for he careth for you.",
        translation: "KJV",
      },
    ],
    readingRef: "Luke 5",
    bestMatch: "jeremiah",
    worstMatch: "luke",
    accent: "#d6a13a",
    icon: "sparkles",
  },
  {
    id: "luke",
    code: "ISTJ",
    character: "Luke",
    title: "The Thorough Observer",
    traits: ["Thorough", "Reliable", "Steady", "Practical"],
    lines: [
      "You have a deep hunger for truth and won't be swept up by fads.",
      "You lean conservative and traditional — a dependable backbone of your church.",
      "You don't make noise about it, but you guard your faith and follow what's practical.",
      "Service, discernment, and counsel come naturally.",
      "Watch the stubbornness; leave room for spontaneity.",
      "Worshiping with others and early-morning prayer keep you balanced.",
    ],
    readingRef: "Luke 1; Acts 1",
    bestMatch: "rebekah",
    worstMatch: "peter",
    accent: "#2f3a52",
    icon: "clipboard-list",
  },
  {
    id: "mary",
    code: "ISFJ",
    character: "Mary",
    title: "The Responsible Nurturer",
    traits: ["Nurturing", "Humble", "Faithful", "Devoted"],
    lines: [
      "You can hold firmly to truth and stay genuinely humble.",
      "You serve and sacrifice quietly, behind the scenes.",
      "You have strong convictions that move others; mercy and giving come naturally.",
      "Watch out for burnout.",
      "Quiet worship and prayer help you tend your feelings.",
      "Forgive yourself for not being perfect — your tenderness already makes you a good teacher.",
    ],
    readingRef: "Luke 1–2",
    bestMatch: "jacob",
    worstMatch: "solomon",
    accent: "#8a7d86",
    icon: "hand-heart",
  },
  {
    id: "deborah",
    code: "ESTJ",
    character: "Deborah",
    title: "The Confident Protector",
    traits: ["Decisive", "Principled", "Orderly", "Strong"],
    lines: [
      "You're a pillar of the church, active in your service.",
      "You believe faith rests on truth and obedience.",
      "You're skilled at explaining the word and teach with strong conviction.",
      "You're faithful to tradition and value logic, realism, and history.",
      "Management, discipline, and leadership are your strengths.",
      "Make room to listen to others' opinions.",
    ],
    readingRef: "Judges 4",
    bestMatch: "rahab",
    worstMatch: "barnabas",
    accent: "#5878a8",
    icon: "scale",
  },
  {
    id: "david",
    code: "ESFJ",
    character: "David",
    title: "The Caring Shepherd",
    traits: ["Caring", "Faithful", "Relational", "Devoted"],
    summary: "Warm, loyal, and built to care for the people around you.",
    lines: [
      "You lead by caring — people feel safe, seen, and steadied around you.",
      "Loyalty runs deep; you keep showing up for the people entrusted to you.",
      "You read a room well and offer the right word at the right moment.",
      "Worship is honest for you — you bring your whole heart, highs and lows alike, before God.",
      "Your warmth can slide into needing everyone's approval; not every burden is yours to carry.",
      "You're at your strongest with a clear circle of people to protect and serve.",
    ],
    calling:
      "You're made to shepherd — to notice the overlooked, calm the anxious, and carry people toward God with steady warmth. That care goes furthest when it rests on God's approval rather than the crowd's.",
    prayer:
      "Lord, make me faithful with the few you've trusted to my care — and let my worth rest in you, not in their applause.",
    verses: [
      {
        ref: "Psalm 23:1",
        text: "The LORD is my shepherd; I shall not want.",
        translation: "KJV",
      },
    ],
    readingRef: "1 Samuel 16–17",
    bestMatch: "adam",
    worstMatch: "esther",
    accent: "#b8895a",
    icon: "music",
  },
  {
    id: "rahab",
    code: "ISTP",
    character: "Rahab",
    title: "The Quick-witted Analyst",
    traits: ["Sharp", "Practical", "Bold", "Independent"],
    lines: [
      "You're freer in action than in words; practical and logical.",
      "Truth about the Creator pulls at you, and you guard your independence.",
      "You keep your convictions with passion; you often serve in community or youth ministry.",
      "You rarely just go through the motions at church.",
      "You're a thinker, fiercely sensitive to right and wrong.",
      "Reading the word trains and steadies you.",
    ],
    readingRef: "Joshua 2",
    bestMatch: "deborah",
    worstMatch: "jonathan",
    accent: "#45617f",
    icon: "compass",
  },
  {
    id: "adam",
    code: "ISFP",
    character: "Adam",
    title: "The Poetic Gardener",
    traits: ["Gentle", "Artistic", "Warm", "Humble"],
    lines: [
      "You're quiet and deep about spiritual things, serving where no one's watching.",
      "You can teach friends and family in the things you love.",
      "You carry a quiet dignity and love the beauty of God's creation.",
      "You come to God for closeness and comfort; you need shepherds and wise guides.",
      "Daily prayer and worship come naturally through practice.",
      "You love hosting and sending notes of encouragement.",
    ],
    readingRef: "Genesis 1–2",
    bestMatch: "david",
    worstMatch: "paul",
    accent: "#7a9a52",
    icon: "flower-2",
  },
  {
    id: "rebekah",
    code: "ESTP",
    character: "Rebekah",
    title: "The Decisive Doer",
    traits: ["Bold", "Charismatic", "Spontaneous", "Decisive"],
    lines: [
      "You're brave and charismatic — and you don't always stop to deliberate.",
      "You can be impulsive and action-oriented, yet logical.",
      "You're bold and full of confidence.",
      "The more you yield to God, the steadier your faith grows.",
      "You can spark fresh thinking in a group and share your faith well.",
      "Reading and meditating on the word takes discipline for you.",
    ],
    readingRef: "Genesis 24; 27",
    bestMatch: "luke",
    worstMatch: "jeremiah",
    accent: "#8f6f80",
    icon: "zap",
  },
  {
    id: "jacob",
    code: "ESFP",
    character: "Jacob",
    title: "The Natural Performer",
    traits: ["Outgoing", "Warm", "Lively", "Generous"],
    lines: [
      "You're action-oriented, drawn to the outward side of the spiritual life.",
      "You spot others' needs and love to help; you'd rather give a testimony than a lecture.",
      "You show your faith by how you live more than what you say.",
      "Evangelism, generosity, mercy, and empathy come naturally.",
      "Add a little logic to your feelings to stay steady.",
      "You have a warm, friend-like love for God — and you love to sing in worship.",
    ],
    readingRef: "Genesis 27",
    bestMatch: "mary",
    worstMatch: "noah",
    accent: "#7a6aa8",
    icon: "party-popper",
  },
];
