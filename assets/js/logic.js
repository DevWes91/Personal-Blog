const modeBtn = document.querySelector('#lightdarkmode');

const modeSelection = function (mode) {

  if (mode === 'lightmode') {
    modeBtn.textContent = '*'; 
  } else {
    modeBtn.textContent = '"'; 
  }
};

const getCurrentMode = function () {
  const mode = localStorage.getItem('mode') || 'dark';
  return mode;
};

const keepMode = function (mode) {
  localStorage.setItem('mode', mode);
};

const switchMode = function (mode) { 
  
  document.body.classList = mode; 
};


switchMode(getCurrentMode());

modeBtn.addEventListener('click', function () {
  const mode = getCurrentMode();
  let nextMode;

  if (mode === 'lightmode') {
    nextMode = 'darkmode';
  } else {
    nextMode = 'lightmode';
  }

  switchMode(nextMode);
  keepMode(nextMode);
});

