function showKeyInfo() {
    const keyButton = document.getElementById('keyButton');
    const refreshButton = document.getElementById('refreshButton');
    const keyBox = document.getElementById('keyBox');
    const codeBox = document.getElementById('codeBox');

    document.addEventListener('keydown', function(event) {
      const key = event.key;
      const keyCode = event.keyCode;


      playKeySound();

      // Display the pressed key in the key box
      keyBox.innerHTML = `You Pressed: <span style="color: blue;">${key}</span>`;
      keyBox.style.display = 'block';

      // Display the key code in the code box
      codeBox.innerHTML = ` <span style="color: green; font-weight:bold">${keyCode}</span>`;
      codeBox.style.display = 'block';

      // Hide the key button and show the refresh button
      keyButton.style.display = 'none';
      refreshButton.style.display = 'inline-block';
    });
  }

  function refresh() {
    const keyButton = document.getElementById('keyButton');
    const refreshButton = document.getElementById('refreshButton');
    const keyBox = document.getElementById('keyBox');
    const codeBox = document.getElementById('codeBox');

    // Show the key button and hide the refresh button
    keyButton.style.display = 'inline-block';
    refreshButton.style.display = 'none';

    // Clear the key information and hide the boxes
    keyBox.innerHTML = '';
    keyBox.style.display = 'none';
    codeBox.innerHTML = '';
    codeBox.style.display = 'none';
  }

  function playKeySound() {
    // You can customize this part to play a sound of your choice.
    const audio = new Audio('key-sound.mp3');
    audio.play();
  }