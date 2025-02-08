document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send").addEventListener("click", function() {
        var doctor = document.querySelector("#doctors .btn.active").getAttribute("data-doctor");
        var type = document.querySelector("#types .btn.active").getAttribute("data-type");
        var cid = document.getElementById("cid").value;
        var codTuss = document.getElementById("codTuss").value;
        var date = document.getElementById("date").value;
        var value = document.getElementById("value").value;
        
        var infoDoctor = ""
        var outputText = "";

        switch(doctor){
            case "Danielle":
                infoDoctor = "Danielle Ioshimoto Shitara\nCRM 100540"
                break;
            case "Mauricio":
                infoDoctor = "Mauricio Mendonça do Nascimento\nCRM 78687"
                break;
            case "Renato":
                infoDoctor = "Renato Shintani Hikawa\nCRM 133879"
                break;   
            
        }

        if (type === "Consulta") {
            outputText = "Consulta médica prestada a(o) mesma(o) em " + date + ":\n\n";
            outputText += "Cid: " + cid + " - Valor: " + value + ",00\n\n";
            outputText += `Abaixo as alíquotas de tributos incidentes a esta prestação de serviços conforme a Lei 12.741/2012.\nPis 0,65%..................... (${(Math.ceil(value * 0.0065 * 100) / 100).toFixed(2)})\nCofins 3%..................... (${(Math.ceil(value * 0.03 * 100) / 100).toFixed(2)})\n`
            if (doctor === "Renato") {
                outputText += `ISS 2%..................... (${(Math.ceil(value * 0.02 * 100) / 100).toFixed(2)})\n`
            } else {
                outputText += `Sociedade Uniprofissional, incidência ISS trimestral, conforme Decreto nº 53.151, de 17 de maio de 2012.\n`
            }
        } else if (type === "Procedimento") {
            outputText = "Serviços médicos prestados a(o) mesma(o) em " + date + ":\n\n";
            outputText += "Cid: " + cid + " e Código Tuss " + codTuss + " - Valor: R$ " + value + ",00\n\n";
            outputText += `Abaixo as alíquotas de tributos incidentes a esta prestação de serviços conforme a Lei 12.741/2012.\nPis 0,65%..................... (${(Math.ceil(value * 0.0065 * 100) / 100).toFixed(2)})\nCofins 3%..................... (${(Math.ceil(value * 0.03 * 100) / 100).toFixed(2)})\n`
            if (doctor === "Renato") {
                outputText += `ISS 2%..................... (${(Math.ceil(value * 0.02 * 100) / 100).toFixed(2)})\n`
            } else {
                outputText += `Sociedade Uniprofissional, incidência ISS trimestral, conforme Decreto nº 53.151, de 17 de maio de 2012.\n`
            }
        } else if (type === "IR") {
            outputText = "Serviços médicos prestados a(o) mesma(o) em " + date + ":\n\n";
            outputText += "Valor total: R$ " + value + ",00\n\n";
            outputText += `Abaixo as alíquotas de tributos incidentes a esta prestação de serviços conforme a Lei 12.741/2012.\nPis 0,65%..................... (${(Math.ceil(value * 0.0065 * 100) / 100).toFixed(2)})\nCofins 3%..................... (${(Math.ceil(value * 0.03 * 100) / 100).toFixed(2)})\n`
            if (doctor === "Renato") {
                outputText += `ISS 2%..................... (${(Math.ceil(value * 0.02 * 100) / 100).toFixed(2)})\n`
            } else {
                outputText += `Sociedade Uniprofissional, incidência ISS trimestral, conforme Decreto nº 53.151, de 17 de maio de 2012.\n`
            }
        } else if (type === "TesteDeContato") {
            outputText = "Teste de contato prestado ao mesmo em " + date + ":\n\n";
            outputText += "Cid: " + cid + " e Código Tuss " + codTuss + " - Valor: " + value + "\n";
        }
        

        outputText += "\n" + infoDoctor; // Adiciona o nome do médico com CRM e RQE aqui

        document.getElementById("outputText").value = outputText;
    });

    document.querySelectorAll(".btn.doctor").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelectorAll(".btn.doctor").forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    document.querySelectorAll(".btn.type").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelectorAll(".btn.type").forEach(function(btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            if (this.getAttribute("data-type") === "IR") {
                document.getElementById("cidSection").style.display = "none";
                document.getElementById("codTussSection").style.display = "none";
            } else {
                document.getElementById("cidSection").style.display = "flex";
                document.getElementById("codTussSection").style.display = "flex";
            }
        });
    });

    document.getElementById("clear").addEventListener("click", function() {
        // Limpa o conteúdo da área de texto
        document.getElementById("outputText").value = "";

        // Limpa os campos de entrada e seleção
        document.querySelectorAll("input").forEach(function(input) {
            input.value = ""; // Limpa o valor do campo de entrada
        });

        document.querySelectorAll(".btn").forEach(function(button) {
            button.classList.remove("active"); // Remove a classe 'active' de todos os botões
        });

        // Define o tipo de consulta como ativo e exibe os campos de CID e Código TUSS
        document.querySelector("#types .btn[data-type='Consulta']").classList.add("disable");
        document.getElementById("cidSection").style.display = "flex";
        document.getElementById("codTussSection").style.display = "flex";
    });
    
});
