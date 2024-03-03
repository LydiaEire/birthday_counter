function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const errorMessage = document.getElementById('error-message');
    const resultOutput = document.getElementById('result');

    const birthday = new Date(birthdayInput.value);
    const today = new Date();

    if (isNaN(birthday.getTime())) {
        errorMessage.textContent = 'Введите корректную дату рождения.';
        resultOutput.textContent = '';
        return;
    }

        errorMessage.textContent = ''; // Очищаем сообщение об ошибке, если дата введена корректно

        birthday.setFullYear(today.getFullYear()); // Устанавливаем год дня рождения текущим

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1); // Если день рождения уже прошел в текущем году, устанавливаем следующий год
}

    const daysDifference = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

    // Определение правильного склонения для слова "день"
let daysWord = 'дней';

const lastDigit = daysDifference % 10;
const lastTwoDigits = daysDifference % 100;

if (lastDigit === 1 && lastTwoDigits !== 11) {
    daysWord = 'день';
} else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    daysWord = 'дня';
}

resultOutput.textContent = `До дня рождения осталось ${daysDifference} ${daysWord}.`;
}