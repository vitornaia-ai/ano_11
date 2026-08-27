// assets/js/script.js
$(document).ready(function () {
    $('#quizForm').on('submit', function (e) {
        e.preventDefault();
        const selected = $('input[name="quiz"]:checked').val();
        const correct = '<?= $aula['quiz']['resposta'] ?>';
        const resultDiv = $('#result');

        if (!selected) {
            resultDiv.html('<div class="alert alert-warning">Selecione uma opção!</div>');
            return;
        }

        if (selected === correct) {
            resultDiv.html('<div class="alert alert-success"><i class="fas fa-trophy"></i> Correto! Você mandou bem!</div>');
        } else {
            resultDiv.html('<div class="alert alert-danger"><i class="fas fa-skull"></i> Errado! Tente novamente.</div>');
        }
    });

});
