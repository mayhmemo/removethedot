// Replace '.' with ' '
function function1(){
    var texto = document.getElementById("texto").value;
    const texto2 = texto.replace(/\./g, ' ');
    document.getElementById("texto2").innerHTML = texto2;
}
// Paste the result in the screen
var input = document.getElementById("texto");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn-inbox").click();
    }
});
// Copy the result for clipboard
function function2() {
    var aux = document.createElement("div");
    aux.setAttribute("contentEditable", true);
    aux.innerHTML = document.getElementById("texto2").innerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
    document.body.appendChild(aux);
    aux.focus();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert('O texto foi copiado!');
}