const snowField = document.getElementById('snow-field');
const emotionSelect = document.getElementById('emotion-select');
const writeBtn = document.getElementById('write-btn');
const countSpan = document.getElementById('count');

let diaryCount = 0;

const emotionConfig = {
  happy:   { speed: 3,   size: 8 },
  excited:{ speed: 2.5, size: 10 },
  calm:    { speed: 4,   size: 9 },
  normal:  { speed: 3,   size: 9 },
  complex: { speed: 1.5, size: 7 },
  tired:   { speed: 5,   size: 12 },
  sad:     { speed: 3,   size: 6 },
  angry:   { speed: 1,   size: 6 },
  cold:    { speed: 2,   size: 7 },
  lonely:  { speed: 4,   size: 5 }
};

writeBtn.addEventListener('click', () => {
  const emotion = emotionSelect.value;
  if (!emotion) {
    alert('오늘의 감정을 선택하세요!');
    return;
  }

  snowField.className = '';
  snowField.classList.add(emotion);

  createSnowflake(emotion);

  diaryCount++;
  countSpan.textContent = diaryCount;
});

function createSnowflake(emotion) {
  const flake = document.createElement('div');
  flake.classList.add('snowflake');

  const { speed, size } = emotionConfig[emotion];

  flake.style.width = size + 'px';
  flake.style.height = size + 'px';
  flake.style.left = Math.random() * 90 + '%';
  flake.style.animationDuration = speed + 's';

  snowField.appendChild(flake);

  flake.addEventListener('animationend', () => {
    flake.remove();
  });
}
