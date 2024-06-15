document.addEventListener('DOMContentLoaded', () => {
    // Inicializar o carrossel usando o Slick
    $(document).ready(function(){
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000
        });
    });

    // Lógica para formulário de agendamento
    document.querySelector('.agendamento-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Agendamento realizado com sucesso!');
    });
});