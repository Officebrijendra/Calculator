document.addEventListener('DOMContentLoaded', () => {
    let string = "";
    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    const darkModeButton = document.querySelector('.dark-mode-button');
    let isDarkMode = false;

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
    };
    darkModeButton.addEventListener('click', toggleDarkMode);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'AC') {
                string = '';
            } else if (buttonText === 'DEL') {
                string = string.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    string = eval(string).toString();
                } catch (error) {
                    string = 'Error';
                }
            } else {
                string += buttonText;
            }

            inputField.value = string;
        });
    });
});