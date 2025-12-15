document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const emotionSelect = document.getElementById('emotion-select');
    const snowflakeChoice = document.getElementById('snowflake-choice'); // 디자인 선택
    const snowPile = document.getElementById('snow-pile');
    const appContainer = document.getElementById('app-container');

    // 배경색 실시간 변경 (감정 선택 시)
    emotionSelect.addEventListener('change', (e) => {
        appContainer.className = ''; // 기존 클래스 초기화
        appContainer.classList.add(e.target.value); // 선택된 감정 클래스 추가
    });

    saveButton.addEventListener('click', () => {
        const emotion = emotionSelect.value;
        const selectedDesign = snowflakeChoice.value; // 사용자가 고른 이미지 경로

        createSnowflake(emotion, selectedDesign);
    });

    function createSnowflake(emotion, imagePath) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.classList.add(emotion); // 감정별 애니메이션 클래스 추가

        // ★ 사용자가 고른 이미지를 배경으로 넣기
        flake.style.backgroundImage = `url('${imagePath}')`;
        
        // 랜덤한 위치에서 떨어지기 (병 입구 근처)
        const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% ~ 90% 사이
        flake.style.left = `${randomLeft}%`;
        
        // 바닥에 쌓이는 위치를 랜덤하게 (겹치지 않게 보이려고)
        // 실제로는 물리 엔진이 없어서 CSS top으로 고정되지만, 
        // 느낌을 내기 위해 조금씩 엇갈리게 설정
        const randomTop = Math.floor(Math.random() * 20) + 70; // 70% ~ 90% 높이
        
        // 애니메이션이 끝난 후 실행될 스타일 (쌓인 모습)
        flake.addEventListener('animationend', () => {
            flake.style.top = `${randomTop}%`;
            // 짜증남(직선)일 때는 회전 없음, 나머지는 자연스럽게
            if(emotion !== 'annoyed') {
                flake.style.transform = `rotate(${Math.random() * 360}deg)`;
            }
        });

        snowPile.appendChild(flake);
    }
});
