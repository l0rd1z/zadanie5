document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы формы
    var quantityInput = document.getElementById('quantity');
    var productSelect = document.getElementById('product');
    var calculateButton = document.getElementById('calculate');
    var resultDiv = document.getElementById('result');

    // Добавляем обработчик события на кнопку
    calculateButton.addEventListener('click', function() {
        var quantity = quantityInput.value.trim();
        var price = productSelect.value;

        // Проверка корректности ввода количества
        var quantityPattern = /^\d+$/;
        if (!quantityPattern.test(quantity)) {
            resultDiv.textContent = 'Ошибка: введите корректное количество (целое положительное число).';
            resultDiv.style.color = 'red';
            return;
        }

        if (price === "") {
            resultDiv.textContent = 'Ошибка: выберите товар.';
            resultDiv.style.color = 'red';
            return;
        }

        // Подсчет стоимости
        var total = parseFloat(quantity) * parseFloat(price);

        // Округление до двух десятичных знаков
        var roundedTotal = total.toFixed(2);

        resultDiv.textContent = 'Общая стоимость заказа: ' + roundedTotal + ' руб.';
        resultDiv.style.color = 'green';
    });
});
