alert('Boas vindas ao jogo do número secreto');

//let numeroSecreto = 4;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativas =1;
let chute 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
//console.log('Isso ai! Você descobriu o número secreto (4)');
    if (chute == numeroSecreto)
    {
    //alert("você acertou")
       // if (tentativas > 1) {
        //    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
        //    } else {
        //        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
        //    }
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    }
    else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
                
        }
    tentativas++;
    }
}