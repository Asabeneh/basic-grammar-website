const quizData = {
  grammar: {
    title: "Grammar Essentials",
    description: "Tenses, clauses, and sentence structure.",
    questions: [
      {
        type: "single",
        question: "Choose the correct sentence.",
        options: [
          "She don't like black coffee.",
          "She doesn't likes black coffee.",
          "She doesn't like black coffee.",
          "She not like black coffee.",
        ],
        answer: 2,
      },
      {
        type: "multiple",
        question: "Select all sentences that are grammatically correct.",
        options: [
          "If I were you, I would apply now.",
          "He suggested to go early.",
          "Neither of the answers is correct.",
          "She has less books than her brother.",
        ],
        answer: [0, 2],
      },
      {
        type: "truefalse",
        question: "True or False: 'Whom' is used as the object of a verb or preposition.",
        answer: true,
      },
      {
        type: "dragdrop",
        question: "Drag each word to its part of speech.",
        draggables: ["quickly", "happiness", "although", "write"],
        targets: [
          { key: "adverb", label: "Adverb", correct: ["quickly"] },
          { key: "noun", label: "Noun", correct: ["happiness"] },
          { key: "conjunction", label: "Conjunction", correct: ["although"] },
          { key: "verb", label: "Verb", correct: ["write"] },
        ],
      },
      {
        type: "single",
        question: "Fill the blank: By the time we arrived, they ___ dinner.",
        options: ["finished", "had finished", "have finished", "finish"],
        answer: 1,
      },
      {
        type: "multiple",
        question: "Choose all sentences in the passive voice.",
        options: [
          "The report was completed yesterday.",
          "They completed the report yesterday.",
          "A new bridge is being built.",
          "The chef cooks every evening.",
        ],
        answer: [0, 2],
      },
      {
        type: "truefalse",
        question: "True or False: A sentence can be grammatically complete without a verb.",
        answer: false,
      },
      {
        type: "single",
        question: "Choose the correct comparative form.",
        options: ["more better", "best", "better", "gooder"],
        answer: 2,
      },
      {
        type: "dragdrop",
        question: "Sort the connectors by meaning.",
        draggables: ["however", "because", "therefore", "although"],
        targets: [
          { key: "contrast", label: "Contrast", correct: ["however", "although"] },
          { key: "cause-result", label: "Cause / Result", correct: ["because", "therefore"] },
        ],
      },
      {
        type: "single",
        question: "Which sentence uses punctuation correctly?",
        options: [
          "After lunch we, reviewed the notes.",
          "After lunch, we reviewed the notes.",
          "After lunch we reviewed, the notes.",
          "After lunch we reviewed the notes,",
        ],
        answer: 1,
      },
    ],
  },
  collocations: {
    title: "Collocations",
    description: "Natural word partnerships in English.",
    questions: [
      {
        type: "single",
        question: "Choose the natural collocation.",
        options: ["make homework", "do homework", "commit homework", "create homework"],
        answer: 1,
      },
      {
        type: "multiple",
        question: "Select all strong collocations with 'decision'.",
        options: ["make a decision", "do a decision", "reach a decision", "perform a decision"],
        answer: [0, 2],
      },
      {
        type: "truefalse",
        question: "True or False: 'Heavy rain' is a standard collocation.",
        answer: true,
      },
      {
        type: "dragdrop",
        question: "Match adjectives to nouns.",
        draggables: ["strong", "high", "deep", "utter"],
        targets: [
          { key: "coffee", label: "Coffee", correct: ["strong"] },
          { key: "chance", label: "Chance", correct: ["high"] },
          { key: "sleep", label: "Sleep", correct: ["deep"] },
          { key: "silence", label: "Silence", correct: ["utter"] },
        ],
      },
      {
        type: "single",
        question: "Choose the best collocation: ___ attention",
        options: ["pay", "give", "make", "have"],
        answer: 0,
      },
      {
        type: "multiple",
        question: "Select all correct collocations with 'time'.",
        options: ["spend time", "waste time", "burn time", "save time"],
        answer: [0, 1, 3],
      },
      {
        type: "truefalse",
        question: "True or False: 'Fast food' and 'quick food' are equally natural collocations.",
        answer: false,
      },
      {
        type: "single",
        question: "Choose the common expression.",
        options: ["catch a cold", "grab a cold", "pick a cold", "hold a cold"],
        answer: 0,
      },
      {
        type: "dragdrop",
        question: "Place the verbs with their most common collocates.",
        draggables: ["draw", "raise", "break", "keep"],
        targets: [
          { key: "conclusion", label: "a conclusion", correct: ["draw"] },
          { key: "issue", label: "an issue", correct: ["raise"] },
          { key: "record", label: "a record", correct: ["break"] },
          { key: "promise", label: "a promise", correct: ["keep"] },
        ],
      },
      {
        type: "single",
        question: "Which phrase sounds most natural?",
        options: ["big mistake", "large mistake", "wide mistake", "broad mistake"],
        answer: 0,
      },
    ],
  },
  phrasalVerbs: {
    title: "Phrasal Verbs",
    description: "Meaning and usage of multi-word verbs.",
    questions: [
      {
        type: "single",
        question: "'Give up' most commonly means...",
        options: ["continue", "surrender or stop trying", "deliver", "invent"],
        answer: 1,
      },
      {
        type: "multiple",
        question: "Select phrasal verbs that can mean 'postpone'.",
        options: ["put off", "call off", "hold up", "set down"],
        answer: [0, 2],
      },
      {
        type: "truefalse",
        question: "True or False: 'Look after' means 'to take care of'.",
        answer: true,
      },
      {
        type: "dragdrop",
        question: "Match each phrasal verb to its meaning.",
        draggables: ["run into", "figure out", "turn down", "carry on"],
        targets: [
          { key: "meet", label: "meet unexpectedly", correct: ["run into"] },
          { key: "understand", label: "understand/solve", correct: ["figure out"] },
          { key: "reject", label: "reject", correct: ["turn down"] },
          { key: "continue", label: "continue", correct: ["carry on"] },
        ],
      },
      {
        type: "single",
        question: "Choose the correct option: We need to ___ this meeting until Monday.",
        options: ["put up", "put off", "put out", "put through"],
        answer: 1,
      },
      {
        type: "multiple",
        question: "Which phrasal verbs are separable?",
        options: ["turn off (the light)", "look after (the child)", "pick up (the package)", "run into (an old friend)"],
        answer: [0, 2],
      },
      {
        type: "truefalse",
        question: "True or False: 'Call off' can mean 'cancel'.",
        answer: true,
      },
      {
        type: "single",
        question: "In 'She brought up an interesting point', 'brought up' means...",
        options: ["raised/mentioned", "carried upstairs", "ignored", "refused"],
        answer: 0,
      },
      {
        type: "dragdrop",
        question: "Sort these phrasal verbs by tone.",
        draggables: ["chill out", "carry out", "show up", "depart"],
        targets: [
          { key: "informal", label: "Informal", correct: ["chill out", "show up"] },
          { key: "neutral-formal", label: "Neutral/Formal", correct: ["carry out", "depart"] },
        ],
      },
      {
        type: "single",
        question: "Choose the correct sentence.",
        options: [
          "Please fill this form out.",
          "Please fill out this form.",
          "Please fill this out form.",
          "Please out fill this form.",
        ],
        answer: 1,
      },
    ],
  },
  synonyms: {
    title: "Synonyms",
    description: "Vocabulary precision and nuanced meaning.",
    questions: [
      {
        type: "single",
        question: "Choose the closest synonym for 'brief'.",
        options: ["long", "concise", "vague", "loud"],
        answer: 1,
      },
      {
        type: "multiple",
        question: "Select all words that can replace 'happy' in many contexts.",
        options: ["joyful", "delighted", "furious", "pleased"],
        answer: [0, 1, 3],
      },
      {
        type: "truefalse",
        question: "True or False: 'Huge' and 'enormous' are close synonyms.",
        answer: true,
      },
      {
        type: "dragdrop",
        question: "Match words with their closest synonyms.",
        draggables: ["rapid", "ancient", "assist", "accurate"],
        targets: [
          { key: "fast", label: "fast", correct: ["rapid"] },
          { key: "old", label: "old", correct: ["ancient"] },
          { key: "help", label: "help", correct: ["assist"] },
          { key: "precise", label: "precise", correct: ["accurate"] },
        ],
      },
      {
        type: "single",
        question: "Pick the best synonym for 'purchase'.",
        options: ["sell", "borrow", "buy", "trade"],
        answer: 2,
      },
      {
        type: "multiple",
        question: "Choose all words that can mean 'difficult'.",
        options: ["challenging", "complex", "simple", "tough"],
        answer: [0, 1, 3],
      },
      {
        type: "truefalse",
        question: "True or False: Every synonym can always replace another without changing tone.",
        answer: false,
      },
      {
        type: "single",
        question: "Choose the closest synonym for 'silent'.",
        options: ["noisy", "quiet", "open", "bright"],
        answer: 1,
      },
      {
        type: "dragdrop",
        question: "Sort synonyms by register.",
        draggables: ["kids", "children", "commence", "start"],
        targets: [
          { key: "informal", label: "Informal", correct: ["kids", "start"] },
          { key: "formal", label: "Formal", correct: ["children", "commence"] },
        ],
      },
      {
        type: "single",
        question: "Pick the best synonym for 'improve'.",
        options: ["worsen", "enhance", "remove", "repeat"],
        answer: 1,
      },
    ],
  },
};

const categoryGrid = document.getElementById("category-grid");
const categoryPanel = document.getElementById("category-panel");
const quizPanel = document.getElementById("quiz-panel");
const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const questionType = document.getElementById("question-type");
const answerArea = document.getElementById("answer-area");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const progressBar = document.querySelector(".progress-track");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const changeCategoryBtn = document.getElementById("change-category");
const resultModal = document.getElementById("result-modal");
const modalCard = document.getElementById("modal-card");
const scoreLine = document.getElementById("score-line");
const scoreFeedback = document.getElementById("score-feedback");
const retryBtn = document.getElementById("retry-btn");
const newCategoryBtn = document.getElementById("new-category-btn");

let selectedCategoryKey = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let answers = [];
let confettiAnimationId = null;

const questionTypeLabels = {
  single: "Single Choice",
  multiple: "Multiple Choice",
  truefalse: "True or False",
  dragdrop: "Drag and Drop",
};

renderCategories();

function renderCategories() {
  const entries = Object.entries(quizData);
  categoryGrid.innerHTML = "";

  entries.forEach(([key, category], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-btn";
    button.innerHTML = `
      <h3>${category.title}</h3>
      <p>${category.description}</p>
    `;

    button.style.animation = `rise-in 0.4s ease ${index * 0.08}s both`;
    button.addEventListener("click", () => startQuiz(key));
    categoryGrid.appendChild(button);
  });
}

function startQuiz(categoryKey) {
  selectedCategoryKey = categoryKey;
  currentQuestions = quizData[categoryKey].questions;
  currentQuestionIndex = 0;
  answers = Array(currentQuestions.length).fill(null);

  categoryPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  quizTitle.textContent = quizData[categoryKey].title;

  renderQuestion();
}

function renderQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  const total = currentQuestions.length;
  const progressPct = ((currentQuestionIndex + 1) / total) * 100;

  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  progressFill.style.width = `${progressPct}%`;
  progressBar.setAttribute("aria-valuenow", String(Math.round(progressPct)));

  questionText.textContent = question.question;
  questionType.textContent = questionTypeLabels[question.type] || "Question";

  answerArea.innerHTML = "";

  if (question.type === "single") {
    renderSingleChoice(question);
  }

  if (question.type === "multiple") {
    renderMultipleChoice(question);
  }

  if (question.type === "truefalse") {
    renderTrueFalse(question);
  }

  if (question.type === "dragdrop") {
    renderDragDrop(question);
  }

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.classList.toggle("hidden", currentQuestionIndex === total - 1);
  submitBtn.classList.toggle("hidden", currentQuestionIndex !== total - 1);
}

function renderSingleChoice(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "answer-list";

  question.options.forEach((option, idx) => {
    const label = document.createElement("label");
    label.className = "answer-item";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q-${currentQuestionIndex}`;
    input.checked = answers[currentQuestionIndex] === idx;
    input.addEventListener("change", () => {
      answers[currentQuestionIndex] = idx;
    });

    const text = document.createElement("span");
    text.textContent = option;

    label.append(input, text);
    wrapper.appendChild(label);
  });

  answerArea.appendChild(wrapper);
}

function renderMultipleChoice(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "answer-list";
  const selected = Array.isArray(answers[currentQuestionIndex]) ? [...answers[currentQuestionIndex]] : [];

  question.options.forEach((option, idx) => {
    const label = document.createElement("label");
    label.className = "answer-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selected.includes(idx);
    input.addEventListener("change", () => {
      let updated = Array.isArray(answers[currentQuestionIndex]) ? [...answers[currentQuestionIndex]] : [];

      if (input.checked) {
        updated.push(idx);
      } else {
        updated = updated.filter((value) => value !== idx);
      }

      answers[currentQuestionIndex] = [...new Set(updated)].sort((a, b) => a - b);
    });

    const text = document.createElement("span");
    text.textContent = option;

    label.append(input, text);
    wrapper.appendChild(label);
  });

  answerArea.appendChild(wrapper);
}

function renderTrueFalse() {
  const wrapper = document.createElement("div");
  wrapper.className = "answer-list";
  const choices = [
    { label: "True", value: true },
    { label: "False", value: false },
  ];

  choices.forEach((choice) => {
    const label = document.createElement("label");
    label.className = "answer-item";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q-${currentQuestionIndex}`;
    input.checked = answers[currentQuestionIndex] === choice.value;
    input.addEventListener("change", () => {
      answers[currentQuestionIndex] = choice.value;
    });

    const text = document.createElement("span");
    text.textContent = choice.label;

    label.append(input, text);
    wrapper.appendChild(label);
  });

  answerArea.appendChild(wrapper);
}

function renderDragDrop(question) {
  const currentAnswer = answers[currentQuestionIndex] || {};
  const layout = document.createElement("div");
  layout.className = "drag-layout";

  const helper = document.createElement("p");
  helper.className = "drag-helper";
  helper.textContent = "Drag each chip to a matching zone, or tap a chip then tap a zone on touch devices.";

  const bank = document.createElement("div");
  bank.className = "drag-bank";
  bank.id = "drag-bank";

  const dropGrid = document.createElement("div");
  dropGrid.className = "drop-grid";

  let selectedChip = null;

  question.targets.forEach((target) => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.dataset.zoneKey = target.key;

    const title = document.createElement("p");
    title.className = "zone-title";
    title.textContent = target.label;
    zone.appendChild(title);

    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("over");
    });

    zone.addEventListener("dragleave", () => zone.classList.remove("over"));

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("over");
      const item = event.dataTransfer.getData("text/plain");
      assignDragItem(item, target.key, question);
      renderQuestion();
    });

    zone.addEventListener("click", () => {
      if (!selectedChip) {
        return;
      }

      assignDragItem(selectedChip, target.key, question);
      selectedChip = null;
      renderQuestion();
    });

    const assignedItems = question.draggables.filter((item) => currentAnswer[item] === target.key);

    assignedItems.forEach((item) => {
      const chip = createChipElement(item, true);
      chip.addEventListener("click", () => {
        unassignDragItem(item);
        renderQuestion();
      });
      zone.appendChild(chip);
    });

    dropGrid.appendChild(zone);
  });

  const unassigned = question.draggables.filter((item) => !currentAnswer[item]);

  unassigned.forEach((item) => {
    const chip = createChipElement(item, false);

    chip.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item);
    });

    chip.addEventListener("click", () => {
      bank.querySelectorAll(".draggable-chip").forEach((node) => node.classList.remove("selected"));
      chip.classList.add("selected");
      selectedChip = item;
    });

    bank.appendChild(chip);
  });

  layout.append(helper, bank, dropGrid);
  answerArea.appendChild(layout);
}

function createChipElement(item, lockedInZone) {
  const chip = document.createElement("div");
  chip.className = "draggable-chip";
  chip.textContent = item;
  chip.draggable = !lockedInZone;
  chip.title = lockedInZone ? "Click to remove" : "Drag to a target";
  return chip;
}

function assignDragItem(item, zoneKey, question) {
  const currentAnswer = answers[currentQuestionIndex] || {};

  if (!question.draggables.includes(item)) {
    return;
  }

  currentAnswer[item] = zoneKey;
  answers[currentQuestionIndex] = currentAnswer;
}

function unassignDragItem(item) {
  const currentAnswer = answers[currentQuestionIndex] || {};
  delete currentAnswer[item];
  answers[currentQuestionIndex] = currentAnswer;
}

function isCorrect(question, answer) {
  if (question.type === "single") {
    return answer === question.answer;
  }

  if (question.type === "multiple") {
    if (!Array.isArray(answer)) {
      return false;
    }

    const normalizedUser = [...answer].sort((a, b) => a - b);
    const normalizedAnswer = [...question.answer].sort((a, b) => a - b);

    return (
      normalizedUser.length === normalizedAnswer.length &&
      normalizedUser.every((value, idx) => value === normalizedAnswer[idx])
    );
  }

  if (question.type === "truefalse") {
    return answer === question.answer;
  }

  if (question.type === "dragdrop") {
    if (!answer || typeof answer !== "object") {
      return false;
    }

    return question.draggables.every((item) => {
      const zone = answer[item];
      if (!zone) {
        return false;
      }

      const target = question.targets.find((entry) => entry.key === zone);
      return target ? target.correct.includes(item) : false;
    });
  }

  return false;
}

function getScore() {
  let correct = 0;

  currentQuestions.forEach((question, index) => {
    if (isCorrect(question, answers[index])) {
      correct += 1;
    }
  });

  return {
    correct,
    total: currentQuestions.length,
    percentage: Math.round((correct / currentQuestions.length) * 100),
  };
}

function showResults() {
  const score = getScore();
  scoreLine.textContent = `You scored ${score.correct} / ${score.total} (${score.percentage}%)`;

  modalCard.classList.add("winner");
  if (score.percentage >= 80) {
    scoreFeedback.textContent = "Big congratulations! Excellent work. Your language instincts are getting stronger.";
  } else if (score.percentage >= 50) {
    scoreFeedback.textContent = "Big congratulations! Solid progress. Keep practicing to reach mastery.";
  } else {
    scoreFeedback.textContent = "Big congratulations on completing the quiz! Review and try again to boost your score.";
  }
  launchConfetti();

  resultModal.classList.remove("hidden");
}

function closeResults() {
  resultModal.classList.add("hidden");
  stopConfetti();
}

function resetQuizState() {
  currentQuestionIndex = 0;
  answers = Array(currentQuestions.length).fill(null);
  renderQuestion();
}

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  }
});

submitBtn.addEventListener("click", showResults);

changeCategoryBtn.addEventListener("click", () => {
  stopConfetti();
  closeResults();
  quizPanel.classList.add("hidden");
  categoryPanel.classList.remove("hidden");
});

retryBtn.addEventListener("click", () => {
  closeResults();
  resetQuizState();
});

newCategoryBtn.addEventListener("click", () => {
  closeResults();
  quizPanel.classList.add("hidden");
  categoryPanel.classList.remove("hidden");
});

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeResults();
  }
});

function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const context = canvas.getContext("2d");

  resizeCanvas(canvas);
  const pieces = Array.from({ length: 210 }, () => createConfettiPiece(canvas));
  const endAt = Date.now() + 4200;

  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
  }

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((piece) => {
      piece.y += piece.speedY;
      piece.x += Math.sin(piece.wobble) * piece.speedX;
      piece.wobble += 0.07;
      piece.rotation += piece.spin;

      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.6);
      context.restore();

      if (piece.y > canvas.height + 20) {
        piece.y = -20;
        piece.x = Math.random() * canvas.width;
      }
    });

    if (Date.now() < endAt && !resultModal.classList.contains("hidden")) {
      confettiAnimationId = requestAnimationFrame(render);
    } else {
      stopConfetti();
    }
  };

  confettiAnimationId = requestAnimationFrame(render);

  window.addEventListener("resize", () => resizeCanvas(canvas), { once: true });
}

function stopConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const context = canvas.getContext("2d");

  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createConfettiPiece(canvas) {
  const colors = ["#0a6c5a", "#cc5a2e", "#f8b84e", "#1f8cc9", "#ffffff"];
  return {
    x: Math.random() * canvas.width,
    y: -Math.random() * canvas.height,
    size: Math.random() * 8 + 6,
    speedY: Math.random() * 2.4 + 1.4,
    speedX: Math.random() * 2 + 0.5,
    wobble: Math.random() * Math.PI * 2,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.16,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}
