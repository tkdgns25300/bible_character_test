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
    summary:
      "Careful, steady, and dependable — you do things properly and see them through.",
    lines: [
      "You like to get things right — careful, accurate, and thorough.",
      "You're hungry for truth and don't get swept up in the latest hype.",
      "People can count on you; you quietly keep your word and your faith.",
      "You value what's proven — order, tradition, and doing it the right way.",
      "Watch the stubborn streak — leave a little room for spontaneity and other views.",
      "Faithfulness in the small, unseen things is its own kind of greatness.",
    ],
    calling:
      "You're made to be steady — to seek the truth carefully, serve faithfully, and be the dependable backbone others lean on. It matters most when your reliability is offered to God, not just to a routine.",
    prayer:
      "Lord, make me faithful in the small things — let me serve carefully, hold to your truth, and stay open to the people and surprises you send.",
    verses: [
      {
        ref: "Luke 1:3",
        text: "It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus.",
        translation: "KJV",
      },
      {
        ref: "Luke 16:10",
        text: "He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.",
        translation: "KJV",
      },
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
    summary:
      "Humble, caring, and faithful — you serve quietly and carry others with a steady heart.",
    lines: [
      "You serve quietly behind the scenes, without needing the credit.",
      "You're humble, yet you hold firmly to what you believe.",
      "Caring for others is your reflex — mercy and gentleness come naturally.",
      "Your steady devotion quietly encourages everyone around you.",
      "You give and give — watch for burnout, and let others care for you too.",
      "You don't have to be perfect; your tenderness already makes you a steady example.",
    ],
    calling:
      "You're made to nurture — to serve faithfully, comfort the weary, and say yes to God with a humble, willing heart. Like Mary, what matters isn't being noticed but trusting God and treasuring his word.",
    prayer:
      "Lord, give me a willing heart like Mary's — let me serve humbly, trust your word, and rest in your care even as I care for others.",
    verses: [
      {
        ref: "Luke 1:46-47",
        text: "And Mary said, My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.",
        translation: "KJV",
      },
      {
        ref: "Luke 2:19",
        text: "But Mary kept all these things, and pondered them in her heart.",
        translation: "KJV",
      },
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
    summary:
      "Decisive and principled — you take charge and protect what matters.",
    lines: [
      "You step up and lead — people look to you to make the call.",
      "You're principled and decisive: you know what's right and you act on it.",
      "You explain truth clearly and teach with real conviction.",
      "You value order, tradition, and getting things done well.",
      "You lead so naturally that you can forget to listen — make room for other voices.",
      "Strength is at its best protecting the weak and pointing people to God.",
    ],
    calling:
      "You're made to lead and protect — to make firm decisions, uphold what's right, and steady people in hard times. It honors God most when your strength serves others and stays humble enough to listen.",
    prayer:
      "Lord, make me a wise leader — strong enough to act, humble enough to listen, and always pointing people to you rather than to me.",
    verses: [
      {
        ref: "Micah 6:8",
        text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
        translation: "KJV",
      },
      {
        ref: "Proverbs 31:25",
        text: "Strength and honour are her clothing; and she shall rejoice in time to come.",
        translation: "KJV",
      },
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
    summary:
      "Sharp, practical, and bold — you size things up fast and act with nerve.",
    lines: [
      "You read a situation quickly and act — you're better in motion than in long talks.",
      "You're practical and logical; you want what actually works.",
      "Once you're convinced, you commit with real courage.",
      "You don't do things just for show — you mean it, or you don't bother.",
      "You feel strongly about right and wrong — let God's word sharpen that instinct.",
      "Bold faith can start anywhere — even an outsider's risky 'yes' can change everything.",
    ],
    calling:
      "You're made to act on conviction — to size up what's true, take brave risks for God, and serve in practical, hands-on ways. It grows deep when you let his word steady your instincts and aim your courage at him.",
    prayer:
      "Lord, take my nerve and my eye for what works — make me brave for you, steady me in your word, and let my 'yes' count.",
    verses: [
      {
        ref: "Joshua 2:11",
        text: "For the LORD your God, he is God in heaven above, and in earth beneath.",
        translation: "KJV",
      },
      {
        ref: "Proverbs 3:5",
        text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
        translation: "KJV",
      },
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
    summary:
      "Gentle, creative, and warm — you notice beauty and serve in quiet ways.",
    lines: [
      "You have a quiet, gentle depth, especially about your faith.",
      "You see and love beauty — in creation, in art, in small things.",
      "You serve where no one's watching, without making a fuss.",
      "You're a warm host who remembers the little kindnesses.",
      "You can carry things quietly for too long — you need close friends and wise guides.",
      "Walking close with God in the everyday is where you come alive.",
    ],
    calling:
      "You're made to tend and treasure — to care for people and creation with a gentle, artistic touch, and to walk closely with God in ordinary days. It deepens when you let trusted friends in instead of carrying everything alone.",
    prayer:
      "Lord, thank you for beauty and for quiet — let me serve gently, walk close with you each day, and lean on others instead of carrying it all alone.",
    verses: [
      {
        ref: "Genesis 2:15",
        text: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
        translation: "KJV",
      },
      {
        ref: "Psalm 19:1",
        text: "The heavens declare the glory of God; and the firmament sheweth his handywork.",
        translation: "KJV",
      },
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
    summary:
      "Bold and quick to act — you spot the moment and just go for it.",
    lines: [
      "You're brave and decisive — when it's time to move, you move.",
      "You've got charisma and confidence; people follow your energy.",
      "You'd rather act than overthink it.",
      "You bring fresh energy and aren't afraid to share your faith.",
      "Acting first can backfire — slow down enough to let God lead the plan.",
      "The more you hand the reins to God, the steadier your bold faith gets.",
    ],
    calling:
      "You're made to move — to act with courage, seize the moment, and pull others into the adventure of faith. It steadies and deepens when you let God set the direction and slow down enough to follow his lead.",
    prayer:
      "Lord, take my boldness and my drive to act — help me move when you say go, wait when you say wait, and trust you to lead the way.",
    verses: [
      {
        ref: "Genesis 24:58",
        text: "And they called Rebekah, and said unto her, Wilt thou go with this man? And she said, I will go.",
        translation: "KJV",
      },
      {
        ref: "Psalm 37:5",
        text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
        translation: "KJV",
      },
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
    summary:
      "Outgoing, warm, and full of life — you light up a room and love people well.",
    lines: [
      "You're warm and outgoing — people feel at home around you.",
      "You spot what others need and love to jump in and help.",
      "You'd rather show your faith by living it than lecture about it.",
      "Generosity, mercy, and a love for worship come naturally.",
      "Big feelings can run the show — a little steady wisdom keeps you grounded.",
      "When you hold on to God like Jacob did, you don't let go until he blesses you.",
    ],
    calling:
      "You're made to bring life and warmth — to love people, meet their needs, and show your faith by how you live. It matures when steady wisdom balances your feelings, and when you hold on to God the way Jacob did — refusing to let go until he blesses you.",
    prayer:
      "Lord, take my warmth and energy — let me love people well, steady my heart with your wisdom, and hold on to you until you bless me.",
    verses: [
      {
        ref: "Genesis 32:26",
        text: "And he said, Let me go, for the day breaketh. And he said, I will not let thee go, except thou bless me.",
        translation: "KJV",
      },
      {
        ref: "Psalm 100:2",
        text: "Serve the LORD with gladness: come before his presence with singing.",
        translation: "KJV",
      },
    ],
    readingRef: "Genesis 27",
    bestMatch: "mary",
    worstMatch: "noah",
    accent: "#7a6aa8",
    icon: "party-popper",
  },
];
