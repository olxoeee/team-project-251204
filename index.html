document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const emotionSelect = document.getElementById('emotion-select');
    const snowflakeChoice = document.getElementById('snowflake-choice');
    const snowPile = document.getElementById('snow-pile');
    const appContainer = document.getElementById('app-container');

    // 감정 선택 시 배경 변경
    emotionSelect.addEventListener('change', (e) => {
        appContainer.className = '';
        if (e.target.value) {
            appContainer.classList.add(e.target.value);
        }
    });

    saveButton.addEventListener('click', () => {
        if (!emotionSelect.value) {
            alert('감정을 선택하세요!');
            return;
        }
        createSnowflake(emotionSelect.value, snowflakeChoice.value);
    });

    function createSnowflake(emotion, imagePath) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake', emotion);

        flake.style.backgroundImage = `url('${imagePath}')`;

        const randomLeft = Math.floor(Math.random() * 80) + 10;
        flake.style.left = `${randomLeft}%`;

        const randomTop = Math.floor(Math.random() * 20) + 70;

        flake.addEventListener('animationend', () => {
            flake.style.top = `${randomTop}%`;
            if (emotion !== 'annoyed') {
                flake.style.transform = `rotate(${Math.random() * 360}deg)`;
            }
        });

        snowPile.appendChild(flake);
    }
});
