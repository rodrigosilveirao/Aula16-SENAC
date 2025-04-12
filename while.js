let i = 0;

while (i <= 5){
   console.log(`${i}`);
   i++
}




let senha = Number.parseInt(prompt("Digite sua senha: "));

while (senha != 1234){
    alert(`Senha incorreta!`);
    senha = Number.parseInt(prompt("Digite sua senha: "));
}
    alert(`Acesso autorizado. `);