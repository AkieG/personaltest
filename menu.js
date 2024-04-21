document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            var text = this.getAttribute('data-text');
            switch(text) {
                case 'Slam Dunk':
                    window.location.href = 'slamdunk.html';
                    break;
                case 'Kuroko no Basket':
                    window.location.href = 'kuroko_no_basket_page.html';
                    break;
                case 'Ahiru no Sora Dunk':
                    window.location.href = 'ahiru_no_sora_page.html';
                    break;
                case 'Buzzer Beater':
                    window.location.href = 'buzzer_beater_page.html';
                    break;
                default:
                    // Default action
            }
        });
    });
});
