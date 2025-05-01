const rewards = [
    { text: '10 xd', chance: 0.25 },
    { text: '2 xd', chance: 0.25 },
    { text: '25 xd', chance: 0.25 },
    { text: '7 xd', chance: 0.20 },
    { text: '50 xd', chance: 0.05 },
    { text: '1000 Robux', chance: 0.00 }
  ];
  
  function spin() {
    let rand = Math.random();
    let total = 0;
    for (const reward of rewards) {
      total += reward.chance;
      if (rand <= total) {
        document.getElementById("result").innerText = reward.text;
        return;
      }
    }
    document.getElementById("result").innerText = "Try again!";
  }
  