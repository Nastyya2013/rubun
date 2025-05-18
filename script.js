document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.button');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Нажаль, ми не можемо відправити вам прикрасу. Тому що ми не справжній магазин(');
        });
    });
});