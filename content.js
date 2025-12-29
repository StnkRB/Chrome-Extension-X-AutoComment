(function () {
  const starters = [
  "Okay, this caught my eye",
  "Not bad at all",
  "This is dangerously smooth",
  "That confidence shows",
  "You know what you’re doing",
  "This has a certain pull",
  "Can’t ignore this",
  "Well, that’s appealing",
  "This vibe works",
  "Subtle, but effective"
  ];

  const endings = [
  "and I like it.",
  "not gonna lie.",
  "in the best way.",
  "🔥",
  "😉",
  "and it shows.",
  "and it works.",
  "no complaints.",
  "worth the pause.",
  "definitely noticed."
  ];

  function generateReplies(count = 1000) {
    const replies = [];
    for (let i = 0; i < count; i++) {
      const start = starters[i % starters.length];
      const end = endings[(i * 3) % endings.length];
      replies.push(`${start}, ${end}`);
    }
    return replies;
  }

  const replies = generateReplies(1000);


  function getRandomReply() {
    return replies[Math.floor(Math.random() * replies.length)];
  }

  function findReplyBox() {
    return document.querySelector('div[role="textbox"]');
  }

  function insertText(textbox, text) {
    textbox.focus();
    document.execCommand("insertText", false, text);
  }

  function createButton() {
    if (document.getElementById("x-draft-btn")) return;

    const btn = document.createElement("button");
    btn.id = "x-draft-btn";
    btn.innerText = "Insert draft reply";

    btn.onclick = () => {
      const box = findReplyBox();
      if (!box) {
        alert("Reply box not found. Click Reply first.");
        return;
      }
      insertText(box, getRandomReply());
    };

    document.body.appendChild(btn);
  }

  // Observe page changes (X is SPA)
  const observer = new MutationObserver(() => {
    if (location.pathname.includes("/status/")) {
      createButton();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

