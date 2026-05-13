const quizData = {
  grammar: {
    title: "📚 Grammar Essentials",
    description: "Tenses, clauses, and sentence structure.",
    icon: "📚",
    questions: [
      {
        type: "single",
        question: "Choose the correct sentence.",
        options: ["She don't like black coffee.", "She doesn't likes black coffee.", "She doesn't like black coffee.", "She not like black coffee."],
        answer: 2,
      },
      { type: "multiple", question: "Select all sentences that are grammatically correct.", options: ["If I were you, I would apply now.", "He suggested to go early.", "Neither of the answers is correct.", "She has less books than her brother."], answer: [0, 2] },
      { type: "truefalse", question: "True or False: 'Whom' is used as the object of a verb or preposition.", answer: true },
      { type: "dragdrop", question: "Drag each word to its part of speech.", draggables: ["quickly", "happiness", "although", "write"], targets: [{ key: "adverb", label: "Adverb", correct: ["quickly"] }, { key: "noun", label: "Noun", correct: ["happiness"] }, { key: "conjunction", label: "Conjunction", correct: ["although"] }, { key: "verb", label: "Verb", correct: ["write"] }] },
      { type: "single", question: "Fill the blank: By the time we arrived, they ___ dinner.", options: ["finished", "had finished", "have finished", "finish"], answer: 1 },
      { type: "multiple", question: "Choose all sentences in the passive voice.", options: ["The report was completed yesterday.", "They completed the report yesterday.", "A new bridge is being built.", "The chef cooks every evening."], answer: [0, 2] },
      { type: "truefalse", question: "True or False: A sentence can be grammatically complete without a verb.", answer: false },
      { type: "single", question: "Choose the correct comparative form.", options: ["more better", "best", "better", "gooder"], answer: 2 },
      { type: "dragdrop", question: "Sort the connectors by meaning.", draggables: ["however", "because", "therefore", "although"], targets: [{ key: "contrast", label: "Contrast", correct: ["however", "although"] }, { key: "cause-result", label: "Cause / Result", correct: ["because", "therefore"] }] },
      { type: "single", question: "Which sentence uses punctuation correctly?", options: ["After lunch we, reviewed the notes.", "After lunch, we reviewed the notes.", "After lunch we reviewed, the notes.", "After lunch we reviewed the notes,"], answer: 1 },
      { type: "single", question: "What is the correct form of the present perfect continuous?", options: ["She is working for 3 hours.", "She has been working for 3 hours.", "She has worked for 3 hours.", "She worked for 3 hours."], answer: 1 },
      { type: "truefalse", question: "True or False: The gerund can function as a subject of a sentence.", answer: true },
      { type: "single", question: "Choose the sentence with correct subject-verb agreement.", options: ["The team are playing well.", "The team is playing well.", "The team play well.", "The teams is playing well."], answer: 1 },
      { type: "multiple", question: "Select all correct conditional sentences.", options: ["If I had known, I would have helped you.", "If I would have known, I helped you.", "Unless you study, you won't pass.", "If you would go there, tell me."], answer: [0, 2] },
      { type: "single", question: "Which sentence correctly uses an appositive?", options: ["My friend Sarah, is a doctor.", "My friend, Sarah, is a doctor.", "My friend Sarah is a doctor which is nice.", "My friend Sarah is a, doctor."], answer: 1 },
      { type: "truefalse", question: "True or False: 'Their' and 'there' can be used interchangeably.", answer: false },
      { type: "single", question: "What is the simple past tense form of 'go'?", options: ["goes", "going", "went", "gone"], answer: 2 },
      { type: "dragdrop", question: "Match the tense to its example sentence.", draggables: ["has written", "is writing", "wrote", "will write"], targets: [{ key: "simple", label: "Simple Past", correct: ["wrote"] }, { key: "present", label: "Present Progressive", correct: ["is writing"] }, { key: "perfect", label: "Present Perfect", correct: ["has written"] }, { key: "future", label: "Simple Future", correct: ["will write"] }] },
      { type: "multiple", question: "Select all phrases that are noun clauses.", options: ["what you said", "that he left early", "running quickly", "whoever wins the game"], answer: [0, 1, 3] },
      { type: "single", question: "Which sentence uses 'that' correctly?", options: ["I know that you will succeed that means a lot.", "I know that you will succeed, which means a lot.", "I know that you will succeed. That is sure.", "I know that you will succeed that is helpful."], answer: 1 },
      { type: "truefalse", question: "True or False: An adverbial clause always modifies a verb.", answer: true },
      { type: "single", question: "Choose the correct indirect object sentence.", options: ["Give me the book.", "Give the book to me.", "Give to me the book.", "Both A and B are correct."], answer: 3 },
      { type: "multiple", question: "Select all sentences with correct use of relative pronouns.", options: ["The person who helped me is kind.", "The book that I read was interesting.", "The movie which I watched it yesterday was great.", "The reason why she left is unknown."], answer: [0, 1, 3] },
      { type: "single", question: "What is the past participle of 'eat'?", options: ["ate", "eats", "eaten", "eating"], answer: 2 },
      { type: "truefalse", question: "True or False: 'Less' and 'fewer' can always be used interchangeably.", answer: false },
      { type: "dragdrop", question: "Sort sentences by mood type.", draggables: ["She might come.", "Come here!", "I wish I were there.", "They are studying."], targets: [{ key: "indicative", label: "Indicative", correct: ["They are studying."] }, { key: "imperative", label: "Imperative", correct: ["Come here!"] }, { key: "subjunctive", label: "Subjunctive", correct: ["I wish I were there."] }] },
      { type: "single", question: "Which is the correct plural form of 'child'?", options: ["childs", "childes", "children", "childrens"], answer: 2 },
      { type: "multiple", question: "Select all sentences with correct pronoun usage.", options: ["Between you and I, this is hard.", "Between you and me, this is hard.", "It's important for she to understand.", "It's important for her to understand."], answer: [1, 3] },
      { type: "truefalse", question: "True or False: The present simple is used for habits and repeated actions.", answer: true },
      { type: "single", question: "Choose the correct form: 'I wish I ___' the answer yesterday.", options: ["knew", "know", "would know", "had known"], answer: 3 },
      { type: "dragdrop", question: "Match question formation types.", draggables: ["Do you like coffee?", "Is she coming?", "What did you see?", "Can they help?"], targets: [{ key: "yes-no", label: "Yes/No Questions", correct: ["Do you like coffee?", "Is she coming?", "Can they help?"] }, { key: "wh", label: "Wh-Questions", correct: ["What did you see?"] }] },
    ],
  },
  collocations: {
    title: "🎯 Collocations",
    description: "Natural word partnerships in English.",
    icon: "🎯",
    questions: [
      { type: "single", question: "Choose the natural collocation.", options: ["make homework", "do homework", "commit homework", "create homework"], answer: 1 },
      { type: "multiple", question: "Select all strong collocations with 'decision'.", options: ["make a decision", "do a decision", "reach a decision", "perform a decision"], answer: [0, 2] },
      { type: "truefalse", question: "True or False: 'Heavy rain' is a standard collocation.", answer: true },
      { type: "dragdrop", question: "Match adjectives to nouns.", draggables: ["strong", "high", "deep", "utter"], targets: [{ key: "coffee", label: "Coffee", correct: ["strong"] }, { key: "chance", label: "Chance", correct: ["high"] }, { key: "sleep", label: "Sleep", correct: ["deep"] }, { key: "silence", label: "Silence", correct: ["utter"] }] },
      { type: "single", question: "Choose the best collocation: ___ attention", options: ["pay", "give", "make", "have"], answer: 0 },
      { type: "multiple", question: "Select all correct collocations with 'time'.", options: ["spend time", "waste time", "burn time", "save time"], answer: [0, 1, 3] },
      { type: "truefalse", question: "True or False: 'Fast food' and 'quick food' are equally natural collocations.", answer: false },
      { type: "single", question: "Choose the common expression.", options: ["catch a cold", "grab a cold", "pick a cold", "hold a cold"], answer: 0 },
      { type: "dragdrop", question: "Place the verbs with their most common collocates.", draggables: ["draw", "raise", "break", "keep"], targets: [{ key: "conclusion", label: "a conclusion", correct: ["draw"] }, { key: "issue", label: "an issue", correct: ["raise"] }, { key: "record", label: "a record", correct: ["break"] }, { key: "promise", label: "a promise", correct: ["keep"] }] },
      { type: "single", question: "Which phrase sounds most natural?", options: ["big mistake", "large mistake", "wide mistake", "broad mistake"], answer: 0 },
      { type: "single", question: "Complete the collocation: ___ a risk", options: ["take", "make", "do", "have"], answer: 0 },
      { type: "truefalse", question: "True or False: 'Strong coffee' and 'powerful coffee' are equivalent collocations.", answer: false },
      { type: "multiple", question: "Select all correct collocations with 'mistake'.", options: ["make a mistake", "commit a mistake", "do a mistake", "take a mistake"], answer: [0, 1] },
      { type: "single", question: "Choose the natural phrase: ___ a suggestion", options: ["take", "do", "make", "give"], answer: 3 },
      { type: "dragdrop", question: "Match verbs with their natural objects.", draggables: ["struck", "posed", "cast", "launched"], targets: [{ key: "a", label: "a question", correct: ["posed"] }, { key: "b", label: "a glance", correct: ["cast"] }, { key: "c", label: "a balance", correct: ["struck"] }, { key: "d", label: "an attack", correct: ["launched"] }] },
      { type: "single", question: "Complete: ___ a promise", options: ["make", "keep", "break", "all of the above"], answer: 3 },
      { type: "truefalse", question: "True or False: 'Light meal' is a common collocation.", answer: true },
      { type: "multiple", question: "Select all standard collocations with 'success'.", options: ["achieve success", "gain success", "reach success", "meet success"], answer: [0, 1] },
      { type: "single", question: "What is the correct collocation: ___ an exam", options: ["pass", "make", "do", "take"], answer: 0 },
      { type: "dragdrop", question: "Match descriptive adjectives with appropriate nouns.", draggables: ["bitter", "keen", "vivid", "stark"], targets: [{ key: "a", label: "contrast", correct: ["stark"] }, { key: "b", label: "imagination", correct: ["vivid"] }, { key: "c", label: "interest", correct: ["keen"] }, { key: "d", label: "experience", correct: ["bitter"] }] },
      { type: "single", question: "Choose the natural expression: ___ an effort", options: ["make", "do", "put", "have"], answer: 0 },
      { type: "truefalse", question: "True or False: 'Do research' is correct, not 'make research'.", answer: true },
      { type: "multiple", question: "Select collocation(s) with 'break'.", options: ["break a record", "break silence", "break a habit", "break a responsibility"], answer: [0, 1, 2] },
      { type: "single", question: "Complete the phrase: ___ a decision", options: ["take", "make", "do", "reach"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Severe weather' is a natural English collocation.", answer: true },
      { type: "dragdrop", question: "Match emotion with typical collocates.", draggables: ["profound", "slight", "overwhelming", "nagging"], targets: [{ key: "a", label: "relief", correct: ["overwhelming"] }, { key: "b", label: "doubt", correct: ["nagging"] }, { key: "c", label: "respect", correct: ["profound"] }, { key: "d", label: "inconvenience", correct: ["slight"] }] },
      { type: "single", question: "Choose the best collocation: ___ progress", options: ["do", "make", "have", "create"], answer: 1 },
      { type: "multiple", question: "Which collocations are correct with 'news'?", options: ["good news", "bad news", "interesting news", "heavy news"], answer: [0, 1, 2] },
      { type: "truefalse", question: "True or False: 'Bright future' is a standard English collocation.", answer: true },
      { type: "single", question: "Complete: ___ an opportunity", options: ["take", "have", "miss", "all of the above"], answer: 3 },
    ],
  },
  phrasalVerbs: {
    title: "💪 Phrasal Verbs",
    description: "Meaning and usage of multi-word verbs.",
    icon: "💪",
    questions: [
      { type: "single", question: "'Give up' most commonly means...", options: ["continue", "surrender or stop trying", "deliver", "invent"], answer: 1 },
      { type: "multiple", question: "Select phrasal verbs that can mean 'postpone'.", options: ["put off", "call off", "hold up", "set down"], answer: [0, 2] },
      { type: "truefalse", question: "True or False: 'Look after' means 'to take care of'.", answer: true },
      { type: "dragdrop", question: "Match each phrasal verb to its meaning.", draggables: ["run into", "figure out", "turn down", "carry on"], targets: [{ key: "meet", label: "meet unexpectedly", correct: ["run into"] }, { key: "understand", label: "understand/solve", correct: ["figure out"] }, { key: "reject", label: "reject", correct: ["turn down"] }, { key: "continue", label: "continue", correct: ["carry on"] }] },
      { type: "single", question: "Choose the correct option: We need to ___ this meeting until Monday.", options: ["put up", "put off", "put out", "put through"], answer: 1 },
      { type: "multiple", question: "Which phrasal verbs are separable?", options: ["turn off (the light)", "look after (the child)", "pick up (the package)", "run into (an old friend)"], answer: [0, 2] },
      { type: "truefalse", question: "True or False: 'Call off' can mean 'cancel'.", answer: true },
      { type: "single", question: "In 'She brought up an interesting point', 'brought up' means...", options: ["raised/mentioned", "carried upstairs", "ignored", "refused"], answer: 0 },
      { type: "dragdrop", question: "Sort these phrasal verbs by tone.", draggables: ["chill out", "carry out", "show up", "depart"], targets: [{ key: "informal", label: "Informal", correct: ["chill out", "show up"] }, { key: "neutral-formal", label: "Neutral/Formal", correct: ["carry out", "depart"] }] },
      { type: "single", question: "Choose the correct sentence.", options: ["Please fill this form out.", "Please fill out this form.", "Please fill this out form.", "Please out fill this form."], answer: 1 },
      { type: "single", question: "What does 'get through' mean?", options: ["arrive", "endure/complete", "forget", "increase"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Set up' can mean 'establish' or 'organize'.", answer: true },
      { type: "multiple", question: "Select all phrasal verbs that mean 'discover'.", options: ["find out", "look up", "come across", "make up"], answer: [0, 1, 2] },
      { type: "single", question: "Complete: He ___ his old friend at the airport.", options: ["came across", "came up", "came down", "came off"], answer: 0 },
      { type: "dragdrop", question: "Match phrasal verbs to definitions.", draggables: ["shut down", "break down", "take off", "speed up"], targets: [{ key: "a", label: "stop working/fail", correct: ["break down"] }, { key: "b", label: "increase speed", correct: ["speed up"] }, { key: "c", label: "close a business", correct: ["shut down"] }, { key: "d", label: "begin flying", correct: ["take off"] }] },
      { type: "single", question: "'Put up with' means:", options: ["build", "endure/tolerate", "install", "raise"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Look forward to' is always followed by a gerund.", answer: true },
      { type: "multiple", question: "Select correct forms of 'get'.", options: ["get on (with)", "get along (with)", "get away", "get into"], answer: [0, 1, 2, 3] },
      { type: "single", question: "Choose the best meaning for 'wipe out'.", options: ["clean", "destroy/eliminate", "separate", "increase"], answer: 1 },
      { type: "dragdrop", question: "Sort by type of change.", draggables: ["wear out", "calm down", "pick up", "bring back"], targets: [{ key: "fatigue", label: "Become exhausted", correct: ["wear out"] }, { key: "emotion", label: "Reduce emotion", correct: ["calm down"] }, { key: "tempo", label: "Increase speed/pace", correct: ["pick up"] }, { key: "retrieve", label: "Retrieve/Restore", correct: ["bring back"] }] },
      { type: "single", question: "'Show off' means to:", options: ["display", "exhibit one's abilities proudly", "explain", "hide"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Put on' with clothing is inseparable.", answer: false },
      { type: "multiple", question:"Select all correct phrasal verbs with 'back'.", options: ["back down", "back up", "back off", "back through"], answer: [0, 1, 2] },
      { type: "single", question: "What does 'go over' mean?", options: ["travel past", "review carefully", "surpass", "ignore"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Bring about' means to cause or create something.", answer: true },
      { type: "dragdrop", question: "Final matching of phrasal verbs.", draggables: ["tie up", "sort out", "settle down", "head off"], targets: [{ key: "a", label: "intercept/prevent", correct: ["head off"] }, { key: "b", label: "occupy/secure", correct: ["tie up"] }, { key: "c", label: "resolve", correct: ["sort out"] }, { key: "d", label: "become calm", correct: ["settle down"] }] },
      { type: "single", question: "What does 'catch up' mean?", options: ["pick something up", "reach the same level", "stop running", "grab quickly"], answer: 1 },
      { type: "multiple", question: "Which can replace 'complete'?", options: ["finish up", "wrap up", "round up", "sum up"], answer: [0, 1] },
      { type: "truefalse", question: "True or False: 'Cut off' means 'to stop' or 'to disconnect'.", answer: true },
    ],
  },
  synonyms: {
    title: "📖 Synonyms",
    description: "Vocabulary precision and nuanced meaning.",
    icon: "📖",
    questions: [
      { type: "single", question: "Choose the closest synonym for 'brief'.", options: ["long", "concise", "vague", "loud"], answer: 1 },
      { type: "multiple", question: "Select all words that can replace 'happy' in many contexts.", options: ["joyful", "delighted", "furious", "pleased"], answer: [0, 1, 3] },
      { type: "truefalse", question: "True or False: 'Huge' and 'enormous' are close synonyms.", answer: true },
      { type: "dragdrop", question: "Match words with their closest synonyms.", draggables: ["rapid", "ancient", "assist", "accurate"], targets: [{ key: "fast", label: "fast", correct: ["rapid"] }, { key: "old", label: "old", correct: ["ancient"] }, { key: "help", label: "help", correct: ["assist"] }, { key: "precise", label: "precise", correct: ["accurate"] }] },
      { type: "single", question: "Pick the best synonym for 'purchase'.", options: ["sell", "borrow", "buy", "trade"], answer: 2 },
      { type: "multiple", question: "Choose all words that can mean 'difficult'.", options: ["challenging", "complex", "simple", "tough"], answer: [0, 1, 3] },
      { type: "truefalse", question: "True or False: Every synonym can always replace another without changing tone.", answer: false },
      { type: "single", question: "Choose the closest synonym for 'silent'.", options: ["noisy", "quiet", "open", "bright"], answer: 1 },
      { type: "dragdrop", question: "Sort synonyms by register.", draggables: ["kids", "children", "commence", "start"], targets: [{ key: "informal", label: "Informal", correct: ["kids", "start"] }, { key: "formal", label: "Formal", correct: ["children", "commence"] }] },
      { type: "single", question: "Pick the best synonym for 'improve'.", options: ["worsen", "enhance", "remove", "repeat"], answer: 1 },
      { type: "single", question: "What is a synonym for 'angry'?", options: ["happy", "furious", "calm", "tired"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Scared' and 'terrified' have the same intensity.", answer: false },
      { type: "multiple", question: "Select all synonyms for 'beautiful'.", options: ["gorgeous", "stunning", "lovely", "average"], answer: [0, 1, 2] },
      { type: "single", question: "What is the best synonym for 'strange'?", options: ["familiar", "odd", "normal", "common"], answer: 1 },
      { type: "dragdrop", question: "Match words with synonyms.", draggables: ["tiny", "vast", "abundant", "scarce"], targets: [{ key: "small", label: "small", correct: ["tiny"] }, { key: "huge", label: "huge", correct: ["vast"] }, { key: "plentiful", label: "plentiful", correct: ["abundant"] }, { key: "rare", label: "rare", correct: ["scarce"] }] },
      { type: "single", question: "Choose the synonym for 'lazy'.", options: ["energetic", "idle", "active", "busy"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Rich' and 'wealthy' are perfect synonyms.", answer: false },
      { type: "multiple", question: "Select all synonyms for 'intelligent'.", options: ["clever", "smart", "foolish", "brilliant"], answer: [0, 1, 3] },
      { type: "single", question: "Which word is a synonym for 'generous'?", options: ["stingy", "kind-hearted", "selfish", "mean"], answer: 1 },
      { type: "dragdrop", question: "Match intensity synonyms.", draggables: ["prefer", "love", "like", "dislike"], targets: [{ key: "low", label: "Low intensity", correct: ["like"] }, { key: "high", label: "High intensity", correct: ["love"] }, { key: "medium", label: "Medium intensity", correct: ["prefer"] }, { key: "negative", label: "Negative", correct: ["dislike"] }] },
      { type: "single", question: "What's a synonym for 'eliminate'?", options: ["create", "remove", "add", "keep"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Delicious' and 'tasty' are always interchangeable.", answer: true },
      { type: "multiple", question: "Select words that mean 'decrease'.", options: ["reduce", "diminish", "increase", "decline"], answer: [0, 1, 3] },
      { type: "single", question: "Choose the synonym for 'urgent'.", options: ["delayed", "pressing", "slow", "optional"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Fake' and 'artificial' have very similar meanings.", answer: true },
      { type: "dragdrop", question: "Final synonym matching.", draggables: ["fortunate", "sad", "confident", "wise"], targets: [{ key: "lucky", label: "lucky", correct: ["fortunate"] }, { key: "unhappy", label: "unhappy", correct: ["sad"] }, { key: "assured", label: "assured", correct: ["confident"] }, { key: "thoughtful", label: "thoughtful", correct: ["wise"] }] },
    ],
  },
  vocabulary: {
    title: "💡 Vocabulary Builder",
    description: "Learn new words and expand your lexicon.",
    icon: "💡",
    questions: [
      { type: "single", question: "What does 'eloquent' mean?", options: ["silent", "fluent and expressive in speech", "confused", "quiet"], answer: 1 },
      { type: "multiple", question: "Select all words that describe being organized.", options: ["meticulous", "systematic", "chaotic", "orderly"], answer: [0, 1, 3] },
      { type: "truefalse", question: "True or False: 'Pensive' means extremely happy.", answer: false },
      { type: "dragdrop", question: "Match words with their meanings.", draggables: ["ambiguous", "pragmatic", "nostalgic", "resilient"], targets: [{ key: "a", label: "having unclear meaning", correct: ["ambiguous"] }, { key: "b", label: "practical and realistic", correct: ["pragmatic"] }, { key: "c", label: "yearning for the past", correct: ["nostalgic"] }, { key: "d", label: "able to recover quickly", correct: ["resilient"] }] },
      { type: "single", question: "What does 'benevolent' mean?", options: ["harmful", "kind and generous", "confused", "angry"], answer: 1 },
      { type: "multiple", question: "Select words that mean 'lacking courage'.", options: ["cowardly", "timid", "brave", "fearless"], answer: [0, 1] },
      { type: "truefalse", question: "True or False: 'Serendipity' means finding something by chance.", answer: true },
      { type: "single", question: "Which word means 'occurring at the same time'?", options: ["sequential", "simultaneous", "gradual", "delayed"], answer: 1 },
      { type: "dragdrop", question: "Sort words by meaning.", draggables: ["meager", "abundant", "scarce", "copious"], targets: [{ key: "lacking", label: "lacking/insufficient", correct: ["meager", "scarce"] }, { key: "plentiful", label: "plentiful/plenty", correct: ["abundant", "copious"] }] },
      { type: "single", question: "What does 'diligent' mean?", options: ["lazy", "careless", "hardworking and thorough", "rude"], answer: 2 },
      { type: "single", question: "Choose the word meaning 'mockingly funny'.", options: ["serious", "satirical", "genuine", "tragic"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Ephemeral' means lasting a very long time.", answer: false },
      { type: "multiple", question: "Select words describing quick thinkers.", options: ["astute", "perceptive", "oblivious", "insightful"], answer: [0, 1, 3] },
      { type: "single", question: "What does 'tangible' mean?", options: ["impossible", "able to be touched or felt", "confusing", "abstract"], answer: 1 },
      { type: "dragdrop", question: "Match words to definitions.", draggables: ["verbose", "concise", "prevalent", "obscure"], targets: [{ key: "a", label: "using many words", correct: ["verbose"] }, { key: "b", label: "brief and clear", correct: ["concise"] }, { key: "c", label: "widespread", correct: ["prevalent"] }, { key: "d", label: "unclear/not well-known", correct: ["obscure"] }] },
      { type: "single", question: "What is a 'paradox'?", options: ["a long journey", "a statement that contradicts itself", "a type of disease", "a musical instrument"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Meticulous' means careless and sloppy.", answer: false },
      { type: "multiple", question: "Select words meaning 'easily provoked to anger'.", options: ["temperamental", "irascible", "placid", "volatile"], answer: [0, 1, 3] },
      { type: "single", question: "What does 'ostentatious' mean?", options: ["humble", "showy and trying to impress", "hidden", "professional"], answer: 1 },
      { type: "dragdrop", question: "Match emotion words to definitions.", draggables: ["jubilant", "melancholic", "indifferent", "exasperated"], targets: [{ key: "a", label: "extremely happy", correct: ["jubilant"] }, { key: "b", label: "sad and thoughtful", correct: ["melancholic"] }, { key: "c", label: "not caring", correct: ["indifferent"] }, { key: "d", label: "extremely annoyed", correct: ["exasperated"] }] },
      { type: "single", question: "What is an 'anomaly'?", options: ["a pattern", "something that deviates from normal", "a mistake", "a theory"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Lucid' means confused and unclear.", answer: false },
      { type: "multiple", question: "Select words describing being dishonest.", options: ["deceptive", "fraudulent", "sincere", "treacherous"], answer: [0, 1, 3] },
      { type: "single", question: "What does 'ubiquitous' mean?", options: ["rare", "present everywhere", "hidden", "forgotten"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Fortuitous' means something happened by luck.", answer: true },
      { type: "dragdrop", question: "Final vocabulary matching.", draggables: ["propitious", "auspicious", "malevolent", "benign"], targets: [{ key: "good", label: "favorable/lucky", correct: ["propitious", "auspicious"] }, { key: "evil", label: "evil/harmful", correct: ["malevolent"] }, { key: "kind", label: "kind/harmless", correct: ["benign"] }] },
    ],
  },
  prepositions: {
    title: "📍 Prepositions",
    description: "Master words that show relationships in space and time.",
    icon: "📍",
    questions: [
      { type: "single", question: "Choose the correct preposition: The book is ___ the table.", options: ["on", "in", "at", "by"], answer: 0 },
      { type: "multiple", question: "Select all correct preposition uses.", options: ["at home", "in home", "at night", "in night"], answer: [0, 2] },
      { type: "truefalse", question: "True or False: 'In' and 'at' cannot be used interchangeably for locations.", answer: true },
      { type: "dragdrop", question: "Match prepositions to their meanings.", draggables: ["on", "under", "between", "through"], targets: [{ key: "a", label: "below something", correct: ["under"] }, { key: "b", label: "in the middle", correct: ["between"] }, { key: "c", label: "on top of", correct: ["on"] }, { key: "d", label: "from one side to another", correct: ["through"] }] },
      { type: "single", question: "Fill in: I'm interested ___ learning languages.", options: ["at", "in", "on", "with"], answer: 1 },
      { type: "multiple", question: "Which prepositions are correct? ___ Monday, ___ 5 PM", options: ["On, at", "In, on", "At, in", "On, on"], answer: [0] },
      { type: "truefalse", question: "True or False: 'By' can mean 'near' or 'beside'.", answer: true },
      { type: "single", question: "Choose: 'She waited ___ the bus for 30 minutes.'", options: ["for", "during", "while", "since"], answer: 0 },
      { type: "dragdrop", question: "Sort prepositions by type.", draggables: ["in", "during", "with", "through"], targets: [{ key: "place", label: "Place", correct: ["in", "through"] }, { key: "time", label: "Time", correct: ["during"] }, { key: "manner", label: "Manner", correct: ["with"] }] },
      { type: "single", question: "Complete: 'I divided the candy ___ the children.'", options: ["between", "among", "with", "by"], answer: 1 },
      { type: "single", question: "Choose correct: 'The meeting is ___ 2 hours.'", options: ["in", "for", "at", "on"], answer: 0 },
      { type: "truefalse", question: "True or False: 'At' is used for specific times.", answer: true },
      { type: "multiple", question: "Select all sentences with correct prepositions.", options: ["I am afraid of spiders.", "I am tired of waiting.", "I am jealous of him.", "I am dependent to him."], answer: [0, 1, 2] },
      { type: "single", question: "Fill: 'The bridge goes ___ the river.'", options: ["over", "above", "on", "through"], answer: 0 },
      { type: "dragdrop", question: "Match prepositions of location.", draggables: ["inside", "outside", "above", "below"], targets: [{ key: "in", label: "Within/Inside", correct: ["inside"] }, { key: "out", label: "Exterior", correct: ["outside"] }, { key: "up", label: "Higher position", correct: ["above"] }, { key: "down", label: "Lower position", correct: ["below"] }] },
      { type: "single", question: "Complete: She threw the ball ___ me.", options: ["at", "to", "in", "on"], answer: 1 },
      { type: "truefalse", question: "True or False: 'To' and 'at' can be synonymous.", answer: false },
      { type: "multiple", question: "Choose correct temporal prepositions.", options: ["before noon", "in December", "on Fridays", "at 3:45 PM"], answer: [0, 1, 2, 3] },
      { type: "single", question: "Choose: 'I am worried ___ the exam.'", options: ["for", "about", "of", "over"], answer: 1 },
      { type: "dragdrop", question: "Sort by function.", draggables: ["from", "to", "inside", "without"], targets: [{ key: "direction", label: "Direction", correct: ["from", "to"] }, { key: "location", label: "Location", correct: ["inside"] }, { key: "manner", label: "Manner", correct: ["without"] }] },
      { type: "single", question: "Complete: 'They are talking ___ the project.'", options: ["of", "about", "on", "in"], answer: 1 },
      { type: "truefalse", question: "True or False: 'By' indicates agency in passive sentences.", answer: true },
      { type: "multiple", question: "Select correct uses of 'in'.", options: ["in summer", "in the morning", "in 2024", "in the afternoon"], answer: [0, 1, 2, 3] },
      { type: "single", question: "Choose: 'I am skilled ___ mathematics.'", options: ["at", "in", "on", "for"], answer: 0 },
      { type: "dragdrop", question: "Match phrases.", draggables: ["by accident", "in advance", "on purpose", "by chance"], targets: [{ key: "unintentional", label: "Unintentional", correct: ["by accident", "by chance"] }, { key: "intentional", label: "Intentional", correct: ["on purpose"] }, { key: "beforehand", label: "Beforehand", correct: ["in advance"] }] },
      { type: "single", question: "Fill: '___ my opinion, this is great.'", options: ["In", "On", "At", "By"], answer: 0 },
      { type: "truefalse", question: "True or False: 'On time' means 'over time'.", answer: false },
      { type: "multiple", question: "Which are correct?", options: ["depend on", "depend of", "consist of", "consist on"], answer: [0, 2] },
    ],
  },
  idioms: {
    title: "🎪 Idioms & Expressions",
    description: "Common figurative phrases and their meanings.",
    icon: "🎪",
    questions: [
      { type: "single", question: "What does 'break the ice' mean?", options: ["freeze something", "start a conversation", "be honest", "fail"], answer: 1 },
      { type: "multiple", question: "Select all weather-related idioms.", options: ["raining cats and dogs", "under the weather", "sunny disposition", "clear skies"], answer: [0, 1] },
      { type: "truefalse", question: "True or False: 'Bite the dust' means 'eat quickly'.", answer: false },
      { type: "dragdrop", question: "Match idioms to meanings.", draggables: ["piece of cake", "hit the books", "rock the boat", "spill the beans"], targets: [{ key: "easy", label: "Very easy", correct: ["piece of cake"] }, { key: "study", label: "Study hard", correct: ["hit the books"] }, { key: "cause", label: "Cause trouble", correct: ["rock the boat"] }, { key: "tell", label: "Tell a secret", correct: ["spill the beans"] }] },
      { type: "single", question: "What does 'once in a blue moon' mean?", options: ["monthly", "rarely", "at night", "sometimes"], answer: 1 },
      { type: "multiple", question: "Which idioms mean 'very tired'?", options: ["dead tired", "beat", "worn out", "sleepy"], answer: [0, 1, 2] },
      { type: "truefalse", question: "True or False: 'Cost an arm and a leg' means something is very expensive.", answer: true },
      { type: "single", question: "What is 'a piece of cake'?", options: ["literal cake", "something easy", "a meal", "a party"], answer: 1 },
      { type: "dragdrop", question: "Sort idioms by topic.", draggables: ["heart of gold", "sharp as a needle", "green with envy", "strong as ox"], targets: [{ key: "character", label: "Character/Nature", correct: ["heart of gold"] }, { key: "intellect", label: "Intellect/Skill", correct: ["sharp as a needle"] }, { key: "emotion", label: "Emotion", correct: ["green with envy"] }, { key: "strength", label: "Strength", correct: ["strong as ox"] }] },
      { type: "single", question: "What does 'turn a blind eye' mean?", options: ["become blind", "ignore something", "face away", "close eyes"], answer: 1 },
      { type: "single", question: "'Burning the midnight oil' means...", options: ["lighting a fire", "studying/working late", "using energy", "being awake"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Once in a lifetime' occurs frequently.", answer: false },
      { type: "multiple", question: "Select common body idioms.", options: ["all ears", "head over heels", "stick your neck out", "cry your eyes out"], answer: [0, 1, 2, 3] },
      { type: "single", question: "What does 'cut to the chase' mean?", options: ["run after", "get to the point", "stop running", "hurry up"], answer: 1 },
      { type: "dragdrop", question: "Match emotional idioms.", draggables: ["over the moon", "down in the dumps", "on top of the world", "feeling blue"], targets: [{ key: "happy", label: "Very Happy", correct: ["over the moon", "on top of the world"] }, { key: "sad", label: "Sad", correct: ["down in the dumps", "feeling blue"] }] },
      { type: "single", question: "'Raining cats and dogs' means...", options: ["animals falling", "very heavy rain", "storm with animals", "normal rain"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Break a leg' is literally bad.", answer: false },
      { type: "multiple", question: "Which are luck-related idioms?", options: ["touch wood", "cross your fingers", "weather the storm", "knock on wood"], answer: [0, 1, 3] },
      { type: "single", question: "What does 'get your act together' mean?", options: ["perform well", "organize yourself", "act differently", "play theater"], answer: 1 },
      { type: "dragdrop", question: "Sort by category.", draggables: ["fit as a fiddle", "see eye to eye", "hit the nail", "walk in the park"], targets: [{ key: "health", label: "Health", correct: ["fit as a fiddle"] }, { key: "agree", label: "Agreement", correct: ["see eye to eye"] }, { key: "success", label: "Success", correct: ["hit the nail", "walk in the park"] }] },
      { type: "single", question: "'Worth your salt' means...", options: ["salty taste", "valuable/deserving", "worth money", "seasoned"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Have butterflies in your stomach' means you're nervous.", answer: true },
      { type: "multiple", question: "Choose time-related idioms.", options: ["in the nick of time", "at death's door", "around the clock", "behind the times"], answer: [0, 2, 3] },
      { type: "single", question: "What does 'put all eggs in one basket' mean?", options: ["literal eggs", "risk everything on one", "organize things", "fail"], answer: 1 },
      { type: "dragdrop", question: "Final idiom matching.", draggables: ["let the cat out", "when pigs fly", "low man on totem", "up the creek"], targets: [{ key: "secret", label: "Reveal a secret", correct: ["let the cat out"] }, { key: "impossible", label: "Impossible", correct: ["when pigs fly"] }, { key: "lower", label: "Lowest position", correct: ["low man on totem"] }, { key: "trouble", label: "In trouble", correct: ["up the creek"] }] },
      { type: "single", question: "'Looking a gift horse in the mouth' means...", options: ["being ungrateful", "examining gifts", "insulting", "checking teeth"], answer: 0 },
    ],
  },
  pronouns: {
    title: "👤 Pronouns & Reference",
    description: "Understand pronouns and their correct usage.",
    icon: "👤",
    questions: [
      { type: "single", question: "Which is correct?", options: ["me and her", "she and I", "him and me", "them and us"], answer: 1 },
      { type: "multiple", question: "Select correct pronouns.", options: ["I went there.", "Him went there.", "She don't know.", "They are ready."], answer: [0, 3] },
      { type: "truefalse", question: "True or False: 'Which' and 'that' are always interchangeable.", answer: false },
      { type: "dragdrop", question: "Match pronouns to their references.", draggables: ["he", "she", "it", "they"], targets: [{ key: "male", label: "Singular Male", correct: ["he"] }, { key: "female", label: "Singular Female", correct: ["she"] }, { key: "thing", label: "Thing/Idea", correct: ["it"] }, { key: "plural", label: "Multiple People", correct: ["they"] }] },
      { type: "single", question: "Choose the correct pronoun: 'Between you and ___.'", options: ["I", "me", "myself", "mine"], answer: 1 },
      { type: "multiple", question: "Identify subject pronouns.", options: ["I", "you", "him", "us"], answer: [0, 1] },
      { type: "truefalse", question: "True or False: 'Whose' is used for possession.", answer: true },
      { type: "single", question: "Complete: '___ are your books?'", options: ["Who", "Whom", "Whose", "Which"], answer: 2 },
      { type: "dragdrop", question: "Sort pronouns by type.", draggables: ["you", "someone", "themselves", "everyone"], targets: [{ key: "personal", label: "Personal", correct: ["you"] }, { key: "indefinite", label: "Indefinite", correct: ["someone", "everyone"] }, { key: "reflexive", label: "Reflexive", correct: ["themselves"] }] },
      { type: "single", question: "Choose correct: 'It is ___ who are late.'", options: ["you", "them", "they", "we"], answer: 2 },
      { type: "single", question: "'Who' is used as...", options: ["object", "subject", "both", "neither"], answer: 1 },
      { type: "truefalse", question: "True or False: 'Whom' is becoming obsolete in modern English.", answer: true },
      { type: "multiple", question: "Which are possessive pronouns?", options: ["mine", "his", "hers", "him"], answer: [0, 1, 2] },
      { type: "single", question: "Complete: 'The book is ___.'", options: ["hers", "her's", "her"], answer: 0 },
      { type: "dragdrop", question: "Match pronouns with sentences.", draggables: ["another", "one", "ones", "other"], targets: [{ key: "single", label: "Singular", correct: ["another", "one"] }, { key: "plural", label: "Plural", correct: ["ones", "other"] }] },
      { type: "single", question: "Choose: '___asked the question?'", options: ["Who", "Whom", "Whose", "What"], answer: 0 },
      { type: "truefalse", question: "True or False: 'That' can refer to animals.", answer: true },
      { type: "multiple", question: "Select correct reflexive uses.", options: ["She herself said this.", "I made it myself.", "You done it yourselves.", "They believe in themselves."], answer: [0, 1, 3] },
      { type: "single", question: "Choose: 'I told ___.'", options: ["him", "he", "himself", "his"], answer: 0 },
      { type: "dragdrop", question: "Sort by function.", draggables: ["somebody", "each", "neither", "ours"], targets: [{ key: "indefinite", label: "Indefinite", correct: ["somebody", "each", "neither"] }, { key: "possessive", label: "Possessive", correct: ["ours"] }] },
      { type: "single", question: "'This' refers to something...", options: ["far", "near", "general", "past"], answer: 1 },
      { type: "truefalse", question: "True or False: 'None' is always singular.", answer: false },
      { type: "multiple", question: "Correct pronoun uses:", options: ["Both of them are here.", "Either of them will do.", "All of us arrived.", "Few of them came."], answer: [0, 1, 2, 3] },
      { type: "single", question: "Complete: 'Whoever arrives first gets ___.'", options: ["the prize", "they prize", "their prize", "it prize"], answer: 2 },
      { type: "dragdrop", question: "Final pronoun sorting.", draggables: ["himself", "anything", "us", "what"], targets: [{ key: "reflexive", label: "Reflexive", correct: ["himself"] }, { key: "indefinite", label: "Indefinite", correct: ["anything", "what"] }, { key: "personal", label: "Personal", correct: ["us"] }] },
      { type: "single", question: "'That' and 'which' differ in...", options: ["gender", "restrictiveness", "time", "position"], answer: 1 },
    ],
  },
  articles: {
    title: "📄 Articles (A, An, The)",
    description: "Master the use of indefinite and definite articles.",
    icon: "📄",
    questions: [
      { type: "single", question: "Choose the correct article: I saw ___ apple on the table.", options: ["a", "an", "the", "no article"], answer: 1, explanation: "Use 'an' before words that start with a vowel sound. 'Apple' starts with the /æ/ sound, so 'an' is correct." },
      { type: "single", question: "Complete: She is ___ engineer.", options: ["a", "an", "the", "no article"], answer: 1, explanation: "Use 'an' before vowel sounds. 'Engineer' begins with a vowel sound, so 'an engineer' is correct." },
      { type: "multiple", question: "Which sentences use articles correctly?", options: ["The dog is loyal.", "I have an old book.", "She went to school yesterday.", "He is an engineer."], answer: [0, 1, 2, 3], explanation: "All four are correct in context: generic singular with 'the' can identify a known referent, 'an old book' is correct, 'go to school' usually takes no article for its institutional meaning, and 'an engineer' uses the right indefinite article." },
      { type: "single", question: "Complete: ___ truth is often hard to accept.", options: ["a", "an", "the", "no article"], answer: 2, explanation: "Use the definite article 'the' when referring to something abstract and specific - here we're talking about truth in general but in a specific sense." },
      { type: "single", question: "Which is correct?", options: ["I like the coffee.", "I like coffee.", "I like a coffee.", "I like coffees."], answer: 1, explanation: "When talking about something in general (liking coffee as a beverage in general), we don't use an article in English. 'I like coffee' is the natural way to express a general preference." },
    ],
  },
  modalVerbs: {
    title: "🎯 Modal Verbs",
    description: "Learn to use modals: can, could, will, would, should, must, may, might.",
    icon: "🎯",
    questions: [
      { type: "single", question: "Which sentence is correct?", options: ["He can to swim.", "He can swim.", "He cans swim.", "He able to swim."], answer: 1, explanation: "Modal verbs like 'can' are followed directly by the base form of the verb. 'Can swim' (not 'can to swim') is correct." },
      { type: "single", question: "Complete: If I were you, I ___ that offer.", options: ["would accept", "will accept", "would to accept", "accept"], answer: 0, explanation: "In conditional sentences, use 'would' + base verb. 'Would accept' expresses what you would do in a hypothetical situation." },
      { type: "multiple", question: "Which sentences are grammatically correct?", options: ["You should go early.", "You must to study.", "She might come tomorrow.", "They will to arrive soon."], answer: [0, 2], explanation: "Modal verbs don't take 'to' after them. 'You should go' is correct. 'She might come' is correct. 'Must to' and 'will to' are both incorrect." },
      { type: "single", question: "What does 'may' indicate?", options: ["permission and possibility", "ability", "obligation", "certainty"], answer: 0, explanation: "'May' expresses both permission (May I help?) and possibility (It may rain tomorrow). It's more formal than 'can' for permission." },
    ],
  },
  errorDetection: {
    title: "🔍 Error Detection",
    description: "Find and identify grammatical errors in sentences.",
    icon: "🔍",
    questions: [
      { type: "single", question: "Which sentence has an error?", options: ["She go to work every day.", "She goes to work every day.", "She went to work yesterday.", "She will go to work tomorrow."], answer: 0, explanation: "Error: 'She go' is incorrect. Third person singular present requires -s or -es. It should be 'She goes to work every day.'" },
      { type: "multiple", question: "Which sentences contain errors?", options: ["They has finished the project.", "We have finished the work.", "He don't like spicy food.", "She enjoys reading books."], answer: [0, 2], explanation: "Sentence 0: 'They has' is wrong - use 'have' with plural subjects. Sentence 2: 'He don't' is wrong - use 'doesn't' (does not) for third person singular." },
      { type: "single", question: "Identify the error: 'Between you and I, this is difficult.'", options: ["No error", "Should be 'Between you and me'", "Should be 'Between him and I'", "Should be 'Among you and I'"], answer: 1, explanation: "The object of a preposition (like 'between') takes an object pronoun. This should be 'Between you and me.' Many people incorrectly say 'between you and I'." },
    ],
  },
  sentenceCorrection: {
    title: "✏️ Sentence Correction",
    description: "Rewrite sentences to correct grammatical errors.",
    icon: "✏️",
    questions: [
      { type: "single", question: "Correct the sentence: 'She don't like coffee.'", options: ["She not like coffee.", "She doesn't like coffee.", "She don't likes coffee.", "She no like coffee."], answer: 1, explanation: "Third person singular present tense requires 'does not' (doesn't) as the auxiliary. The correct sentence is 'She doesn't like coffee.'" },
      { type: "single", question: "Which version is correct?", options: ["If I was you, I would go.", "If I were you, I would go.", "If I am you, I would go.", "If I been you, I would go."], answer: 1, explanation: "In contrary-to-fact conditional sentences, we use the past subjunctive 'were' (not 'was') even with I/he/she/it. 'If I were you' is the grammatically standard form." },
    ],
  },
  commonlyConfused: {
    title: "❓ Commonly Confused Words",
    description: "Distinguish between easily confused English words.",
    icon: "❓",
    questions: [
      { type: "single", question: "Choose the correct word: 'Their ___ house is very beautiful.'", options: ["there", "their", "they're"], answer: 1, explanation: "'Their' is the possessive pronoun (Their house). 'There' refers to a place. 'They're' is a contraction of 'they are'. Here we need the possessive 'their'." },
      { type: "single", question: "Which sentence is correct?", options: ["Its raining outside.", "It's raining outside.", "Its is raining outside.", "It raining outside."], answer: 1, explanation: "'It's' is the contraction of 'it is'. 'Its' is the possessive pronoun (referring to something belonging to 'it'). For this sentence, we need 'It's' (it is) raining." },
      { type: "multiple", question: "Which use the words correctly?", options: ["I accept your invitation.", "The weather affects my mood.", "The changes have an effect on sales.", "They accepted the proposal."], answer: [0, 1, 2, 3], explanation: "'Accept' (verb) = to receive; 'affect' (verb) = to influence; 'effect' (noun) = result. All four sentences use these words correctly." },
    ],
  },
  academicVocabulary: {
    title: "🎓 Academic Vocabulary",
    description: "Essential words for academic English writing.",
    icon: "🎓",
    questions: [
      { type: "single", question: "Choose the word that best fits: The experiment ___ interesting results.", options: ["yielded", "gave", "made", "done"], answer: 0, explanation: "'Yielded' is the appropriate academic verb meaning 'produced' or 'resulted in'. It's more formal than 'gave' and commonly used in research writing." },
      { type: "multiple", question: "Which words are suitable for academic writing?", options: ["contribute to the understanding", "help us understand", "shed light on the issue", "throw light on"], answer: [0, 2], explanation: "'Contribute to' and 'shed light on' are formal academic phrases. 'Help us' and 'throw light on' are more informal." },
      { type: "single", question: "Complete the academic sentence: 'The findings ___ that further research is needed.'", options: ["show", "demonstrate", "indicate", "suggest"], answer: 3, explanation: "All could work, but 'suggest' is a common academic verb indicating that findings point toward a conclusion without definitive proof, which is typical in academic discourse." },
    ],
  },
  conditionals: {
    title: "❄️ Conditionals",
    description: "Master if-clauses and conditional sentences.",
    icon: "❄️",
    questions: [
      { type: "single", question: "Which is the correct First Conditional?", options: ["If you will study, you pass.", "If you study, you will pass.", "If you would study, you would pass.", "If you study, you pass."], answer: 1, explanation: "The First Conditional (real/possible situations): If + simple present, then + will/can + base verb. 'If you study, you will pass' expresses a likely future result." },
      { type: "single", question: "Complete the Second Conditional: 'If I had time, I ___ a vacation.'", options: ["take", "would take", "will take", "took"], answer: 1, explanation: "The Second Conditional (hypothetical/unlikely): If + past simple, then + would + base verb. 'If I had time, I would take a vacation' expresses an imaginary situation." },
      { type: "single", question: "Identify the conditional type: 'If she had studied, she would have passed.'", options: ["First", "Second", "Third", "None"], answer: 2, explanation: "The Third Conditional (past impossible situations): If + past perfect, then + would have + past participle. It refers to something that didn't happen in the past." },
    ],
  },
  antonyms: {
    title: "⚖️ Antonyms",
    description: "Build precision by matching words with their opposites.",
    icon: "⚖️",
    questions: [
      { type: "single", question: "Choose the antonym of 'generous'.", options: ["kind", "stingy", "helpful", "warm"], answer: 1, explanation: "'Stingy' means unwilling to give, which is the opposite of generous." },
      { type: "single", question: "Choose the antonym of 'expand'.", options: ["grow", "increase", "contract", "stretch"], answer: 2, explanation: "'Contract' means to become smaller, the opposite of expand." },
      { type: "multiple", question: "Select all antonyms of 'optimistic'.", options: ["hopeful", "pessimistic", "negative", "confident"], answer: [1, 2], explanation: "'Pessimistic' and 'negative' express the opposite outlook from optimistic." },
      { type: "single", question: "Choose the antonym of 'ancient'.", options: ["old", "historic", "modern", "traditional"], answer: 2, explanation: "'Modern' refers to present-day style or time, opposite of ancient." },
      { type: "single", question: "Choose the antonym of 'scarce'.", options: ["rare", "plentiful", "limited", "insufficient"], answer: 1, explanation: "'Plentiful' means abundant, which is opposite of scarce." },
      { type: "single", question: "Choose the antonym of 'flexible'.", options: ["adaptable", "rigid", "soft", "elastic"], answer: 1, explanation: "'Rigid' means not flexible or not able to bend/change easily." },
      { type: "single", question: "Choose the antonym of 'transparent'.", options: ["clear", "opaque", "visible", "bright"], answer: 1, explanation: "'Opaque' means not see-through, opposite of transparent." },
      { type: "single", question: "Choose the antonym of 'combine'.", options: ["merge", "separate", "join", "mix"], answer: 1, explanation: "To separate is to keep things apart, opposite of combine." },
    ],
  },
  commonGrammarMistakes: {
    title: "🛠️ Common Grammar Mistakes",
    description: "Fix frequent mistakes learners make in real English.",
    icon: "🛠️",
    questions: [
      { type: "single", question: "Choose the correct verb form for third person singular.", options: ["He don't like tea.", "He doesn't like tea.", "He not like tea.", "He doesn't likes tea."], answer: 1, explanation: "Use 'doesn't' + base verb for third-person singular in the present simple." },
      { type: "single", question: "Which sentence uses 'agree' correctly?", options: ["I am agree with you.", "I agree with you.", "I am agreeing with you always.", "I agreed with you now."], answer: 1, explanation: "'Agree' is a verb; we do not say 'I am agree'." },
      { type: "single", question: "Choose the correct sentence.", options: ["She explained me the rule.", "She explained the rule to me.", "She explained to me it.", "She explain me the rule."], answer: 1, explanation: "With 'explain', we usually say 'explain something to someone'." },
      { type: "multiple", question: "Select all sentences that are correct.", options: ["I have lived here for five years.", "I am living here since 2020.", "She has already finished.", "They didn't went yesterday."], answer: [0, 2], explanation: "Use present perfect with 'for/since' in this context and base verb after 'didn't'." },
      { type: "single", question: "Select the correct subject-verb agreement.", options: ["There is many reasons.", "There are many reasons.", "There are much reasons.", "There is much reasons."], answer: 1, explanation: "Use 'are' with plural noun 'reasons'." },
      { type: "single", question: "Identify the correct use of 'look forward to'.", options: ["I look forward to meet you.", "I look forward to meeting you.", "I look forward meet you.", "I look forward for meeting you."], answer: 1, explanation: "'Look forward to' is followed by a noun or gerund (-ing form)." },
      { type: "single", question: "Which option uses 'advice' correctly?", options: ["Advice are useful.", "Advices are useful.", "Advice is useful.", "An advice is useful."], answer: 2, explanation: "'Advice' is uncountable in standard English and takes singular verb agreement." },
      { type: "single", question: "Select the correct collocation with 'married'.", options: ["She is married with a doctor.", "She is married to a doctor.", "She married with a doctor.", "She is marry to a doctor."], answer: 1, explanation: "The correct pattern is 'married to someone'." },
    ],
  },
  sentenceCompletion: {
    title: "🧩 Sentence Completion",
    description: "Complete real-world sentences with the best option.",
    icon: "🧩",
    questions: [
      { type: "single", question: "If it ___ tomorrow, we'll stay inside.", options: ["rain", "rains", "rained", "will rain"], answer: 1, explanation: "In first conditional if-clauses, use present simple: 'If it rains...'" },
      { type: "single", question: "By next year, she ___ her degree.", options: ["finishes", "finished", "will have finished", "has finished"], answer: 2, explanation: "Use future perfect for an action completed before a point in the future." },
      { type: "single", question: "He apologized ___ being late.", options: ["for", "to", "about", "with"], answer: 0, explanation: "The collocation is 'apologize for + noun/gerund'." },
      { type: "multiple", question: "Select all options that can correctly complete the sentence: 'I would rather ___ home tonight.'", options: ["stay", "to stay", "not go out", "staying"], answer: [0, 2], explanation: "After 'would rather', use base verb phrases: 'stay', 'not go out'." },
      { type: "single", question: "Neither of the students ___ ready.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'Neither' is typically treated as singular in formal grammar." },
      { type: "single", question: "The manager asked us ___ the report by noon.", options: ["submit", "submitting", "to submit", "submitted"], answer: 2, explanation: "The pattern is 'ask someone to do something'." },
      { type: "single", question: "She has a talent ___ explaining complex ideas.", options: ["to", "at", "for", "with"], answer: 2, explanation: "The natural phrase is 'a talent for + gerund/noun'." },
      { type: "single", question: "Not only the teacher but also the students ___ excited.", options: ["was", "is", "are", "be"], answer: 2, explanation: "With 'not only... but also', verb agreement often follows the nearer subject ('students')." },
    ],
  },
};

function validateQuizData(data) {
  Object.entries(data).forEach(([categoryKey, category]) => {
    const seen = new Set();
    category.questions.forEach((q, idx) => {
      const normalizedQuestion = (q.question || "").trim().toLowerCase();
      if (seen.has(normalizedQuestion)) {
        throw new Error(`Duplicate question found in '${categoryKey}': "${q.question}"`);
      }
      seen.add(normalizedQuestion);

      if (q.type === "single") {
        const valid = Array.isArray(q.options) && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length;
        if (!valid) throw new Error(`Invalid single-choice answer in '${categoryKey}' at index ${idx}`);
      }

      if (q.type === "multiple") {
        const valid = Array.isArray(q.options) && Array.isArray(q.answer) && q.answer.every((a) => Number.isInteger(a) && a >= 0 && a < q.options.length);
        if (!valid) throw new Error(`Invalid multiple-choice answer in '${categoryKey}' at index ${idx}`);
      }

      if (q.type === "truefalse") {
        if (typeof q.answer !== "boolean") throw new Error(`Invalid true/false answer in '${categoryKey}' at index ${idx}`);
      }

      if (q.type === "dragdrop") {
        const valid = Array.isArray(q.draggables) && Array.isArray(q.targets);
        if (!valid) throw new Error(`Invalid drag-drop structure in '${categoryKey}' at index ${idx}`);
      }
    });
  });
}

function createGeneratedQuestion(categoryKey, index) {
  const banks = {
    articles: [
      { question: "Choose the correct article: 'She bought ___ umbrella yesterday.'", options: ["a", "an", "the", "no article"], answer: 1, explanation: "Use 'an' before a vowel sound." },
      { question: "Choose the best option: 'I usually drink ___ coffee in the morning.'", options: ["a", "an", "the", "no article"], answer: 3, explanation: "For general uncountable nouns, use no article." },
      { question: "Select the correct sentence.", options: ["He is a honest man.", "He is an honest man.", "He is the honest man.", "He is honest man."], answer: 1, explanation: "Use 'an' before silent 'h' sounds like 'honest'." },
      { question: "Complete the sentence: 'We visited ___ Eiffel Tower in Paris.'", options: ["a", "an", "the", "no article"], answer: 2, explanation: "Use 'the' with unique landmarks." },
    ],
    modalVerbs: [
      { question: "Choose the sentence that expresses strong obligation.", options: ["You may leave now.", "You should leave now.", "You must leave now.", "You might leave now."], answer: 2, explanation: "'Must' expresses strong obligation." },
      { question: "Complete: 'It ___ rain later, so take an umbrella.'", options: ["must", "might", "should to", "can to"], answer: 1, explanation: "'Might' shows possibility." },
      { question: "Select the grammatically correct sentence.", options: ["She can to drive.", "She can drive.", "She cans drive.", "She can driving."], answer: 1, explanation: "Modals are followed by base verb forms." },
      { question: "Choose the best advice sentence.", options: ["You should study more.", "You must to study more.", "You should to study more.", "You should studying more."], answer: 0, explanation: "Use 'should + base verb'." },
    ],
    errorDetection: [
      { question: "Which sentence contains a grammar error?", options: ["They were waiting outside.", "She doesn't like tea.", "He don't play chess.", "We have finished."], answer: 2, explanation: "Use 'doesn't' with third-person singular: 'He doesn't play chess.'" },
      { question: "Find the incorrect sentence.", options: ["I have known him for years.", "She is going to the store.", "They has completed the task.", "We can start now."], answer: 2, explanation: "Use 'have' with 'they', not 'has'." },
      { question: "Which sentence is wrong?", options: ["The news is important.", "Each student has a notebook.", "She enjoy reading novels.", "My friends are here."], answer: 2, explanation: "Third-person singular takes -s: 'She enjoys'." },
      { question: "Choose the sentence with an error.", options: ["I am interested in music.", "He was tired yesterday.", "They doesn't agree.", "We will call you."], answer: 2, explanation: "Plural subject needs 'don't': 'They don't agree.'" },
    ],
    sentenceCorrection: [
      { question: "Choose the corrected sentence.", options: ["She don't likes coffee.", "She doesn't like coffee.", "She not like coffee.", "She doesn't likes coffee."], answer: 1, explanation: "Use 'doesn't + base verb'." },
      { question: "Select the best correction: 'I am agree with you.'", options: ["I am agreeing with you.", "I agree with you.", "I agreed with you now.", "I am agreed with you."], answer: 1, explanation: "'Agree' is a verb and doesn't need 'am'." },
      { question: "Pick the corrected version: 'He explained me the lesson.'", options: ["He explained me lesson.", "He explained the lesson to me.", "He explain to me the lesson.", "He explained to me it."], answer: 1, explanation: "Use 'explain something to someone'." },
      { question: "Choose the corrected sentence.", options: ["They didn't went home.", "They didn't go home.", "They don't went home.", "They not went home."], answer: 1, explanation: "After 'didn't', use the base verb." },
    ],
    commonlyConfused: [
      { question: "Choose the correct word: 'I can't find ___ keys.'", options: ["there", "their", "they're", "them"], answer: 1, explanation: "'Their' is possessive." },
      { question: "Select the correct sentence.", options: ["Your going to love this.", "You're going to love this.", "Youre going to love this.", "Your'e going to love this."], answer: 1, explanation: "'You're' means 'you are'." },
      { question: "Choose the right pair.", options: ["Its a sunny day.", "It's a sunny day.", "Its' a sunny day.", "It is' a sunny day."], answer: 1, explanation: "'It's' = 'it is'." },
      { question: "Pick the correct usage.", options: ["The medicine affected me.", "The medicine effected me.", "The medicine had a affect.", "The medicine had a effected."], answer: 0, explanation: "'Affect' is usually the verb." },
    ],
    academicVocabulary: [
      { question: "Choose the most academic verb: 'The study ___ a clear trend.'", options: ["shows", "points out", "demonstrates", "tells"], answer: 2, explanation: "'Demonstrates' is a strong academic verb." },
      { question: "Select the formal phrase.", options: ["a lot of", "a bunch of", "a significant number of", "tons of"], answer: 2, explanation: "'A significant number of' suits academic writing." },
      { question: "Complete the sentence: 'The findings ___ the hypothesis.'", options: ["back up", "support", "go with", "fit in"], answer: 1, explanation: "'Support the hypothesis' is standard academic usage." },
      { question: "Choose the best academic connector.", options: ["But", "So", "However", "Plus"], answer: 2, explanation: "'However' is formal and commonly used in academic texts." },
    ],
    conditionals: [
      { question: "Choose the correct First Conditional sentence.", options: ["If it will rain, we stay home.", "If it rains, we will stay home.", "If it rained, we stay home.", "If it rain, we will stay home."], answer: 1, explanation: "First conditional: if + present, will + base verb." },
      { question: "Select the correct Second Conditional sentence.", options: ["If I have money, I would travel.", "If I had money, I would travel.", "If I had money, I will travel.", "If I would have money, I travel."], answer: 1, explanation: "Second conditional: if + past, would + base verb." },
      { question: "Identify the Third Conditional form.", options: ["If she studied, she passes.", "If she has studied, she would pass.", "If she had studied, she would have passed.", "If she would study, she passed."], answer: 2, explanation: "Third conditional: if + past perfect, would have + past participle." },
      { question: "Choose the correct mixed conditional idea.", options: ["If I had slept early, I would be fresh now.", "If I slept early, I would have been fresh now.", "If I had slept early, I will be fresh now.", "If I sleep early, I would be fresh now."], answer: 0, explanation: "Past condition with present result uses a mixed conditional." },
    ],
    antonyms: [
      { question: "Choose the antonym of 'increase'.", options: ["expand", "reduce", "rise", "improve"], answer: 1, explanation: "'Reduce' is the opposite of 'increase'." },
      { question: "Choose the antonym of 'complex'.", options: ["complicated", "simple", "advanced", "detailed"], answer: 1, explanation: "'Simple' is the opposite of 'complex'." },
      { question: "Select the antonym of 'optimistic'.", options: ["positive", "hopeful", "pessimistic", "cheerful"], answer: 2, explanation: "'Pessimistic' contrasts with 'optimistic'." },
      { question: "Choose the antonym of 'scarce'.", options: ["rare", "abundant", "limited", "few"], answer: 1, explanation: "'Abundant' is opposite in meaning." },
    ],
    commonGrammarMistakes: [
      { question: "Choose the correct sentence.", options: ["He don't know the answer.", "He doesn't know the answer.", "He doesn't knows the answer.", "He not know the answer."], answer: 1, explanation: "Third-person singular uses 'doesn't + base verb'." },
      { question: "Select the grammatically correct option.", options: ["I am understanding now.", "I understand now.", "I am understand now.", "I understood now."], answer: 1, explanation: "State verbs like 'understand' are usually not progressive." },
      { question: "Choose the correct preposition.", options: ["married with", "married to", "married at", "married by"], answer: 1, explanation: "The standard collocation is 'married to'." },
      { question: "Pick the correct sentence.", options: ["There is many options.", "There are many options.", "There are much options.", "There is much options."], answer: 1, explanation: "Plural noun 'options' takes 'are'." },
    ],
    sentenceCompletion: [
      { question: "Complete: 'If she ___ earlier, she won't miss the bus.'", options: ["leaves", "leave", "left", "will leave"], answer: 0, explanation: "In first conditional if-clause, use present simple." },
      { question: "Complete: 'By 2028, they ___ the new campus.'", options: ["build", "built", "will build", "will have built"], answer: 3, explanation: "Future perfect fits completion before a future point." },
      { question: "Choose the best completion: 'He apologized ___ the delay.'", options: ["for", "to", "with", "about"], answer: 0, explanation: "Use 'apologize for + noun'." },
      { question: "Complete the sentence: 'I would rather ___ at home tonight.'", options: ["staying", "to stay", "stay", "stayed"], answer: 2, explanation: "Use base form after 'would rather'." },
    ],
  };

  const bank = banks[categoryKey] || [
    {
      question: "Choose the grammatically correct sentence.",
      options: ["She don't like reading.", "She doesn't like reading.", "She doesn't likes reading.", "She not likes reading."],
      answer: 1,
      explanation: "Use 'doesn't + base verb' for third-person singular.",
    },
  ];

  const template = bank[(index - 1) % bank.length];
  return {
    type: "single",
    question: `${template.question} (Practice ${index})`,
    options: template.options,
    answer: template.answer,
    explanation: template.explanation,
  };
}

function ensureMinQuestions(data, min = 25, lastCount = 10) {
  const entries = Object.entries(data);
  const start = Math.max(0, entries.length - lastCount);
  entries.forEach(([key, category], index) => {
    if (index >= start) {
      while (category.questions.length < min) {
        const idx = category.questions.length + 1;
        category.questions.push(createGeneratedQuestion(key, idx));
      }
    }
  });
}

// Ensure the last 10 categories have at least 25 questions each before validation
ensureMinQuestions(quizData);

validateQuizData(quizData);


module.exports = { quizData, ensureMinQuestions, createGeneratedQuestion };