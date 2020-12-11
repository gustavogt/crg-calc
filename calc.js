/* exported Calc */
const Calc = {
    qualificadores: {
        natureza: ['Culpa Leve', 'Culpa Grave', 'Dolo'],
        gravidade: ['Baixa', 'Média', 'Alta'],
        dano: ['Leve', 'Médio', 'Grave']
    },

    enquadramentos: [{descricao: 'Lei 8.112, Art. 117. I - ausentar-se do serviço durante o expediente, sem prévia autorização do chefe imediato;', pena: 'Advertência'},
                     {descricao: 'Lei 8.112, Art. 117. II - retirar, sem prévia anuência da autoridade competente, qualquer documento ou objeto da repartição;', pena: 'Advertência'},
                     {descricao: 'Lei 8.112, Art. 117. III - recusar fé a documentos públicos;', pena: 'Advertência'},
                     {descricao: 'Lei 8.112, Art. 117. IX - valer-se do cargo para lograr proveito pessoal ou de outrem, em detrimento da dignidade da função pública;', pena: 'Suspensão1'},
                     {descricao: 'Lei 8.112, Art. 130. § 1o  Será punido com suspensão de até 15 (quinze) dias o servidor que, injustificadamente, recusar-se a ser submetido a inspeção médica determinada pela autoridade competente, cessando os efeitos da penalidade uma vez cumprida a determinação.', pena: 'Suspensão2'},
                     {descricao: 'Lei 8.112, Art. 132. I - crime contra a administração pública;', pena: 'Demissão'},
                     {descricao: 'Lei 8.112, Art. 132. II - abandono de cargo;', pena: 'Demissão'}],
    

    construirCheckboxSelecaoEnquadramento: function (value) {
        return `<input type="checkbox" class="form-check-input" value="${value}" onchange="Calc.atualizarCalculos()"></input>`;
    },

    construirCheckboxSelecaoReincidencia: function (pena) {
        if (pena == "Advertência") {
            return `<input type="checkbox" class="form-check-input" onchange="Calc.atualizarCalculos()"></input>`;
        } else {
            return ``;
        }
    },

    construirEnquadramentos: function () {
        let tableBody = $('#tableEnquadramento tbody');
        Calc.enquadramentos.forEach((e, i) => {
            tableBody.append($(`<tr>
                    <td>${Calc.construirCheckboxSelecaoEnquadramento(i)}</td>
                    <td>${e.descricao}</td>
                    <td>${Calc.construirCheckboxSelecaoReincidencia(e.pena)}</input></td>
                </tr>`));
        });
    },

    atualizarCalculos: function () {
        let inputs = $('#tableEnquadramento tbody tr td:nth-child(1) input:checked');

        if (inputs.length > 0) {
            Calc.calcular(inputs);
        } else {
            $('#areaParametros').hide();  
            $('#areaResultado').html(`<h3>Selecione os enquadramentos para início dos cálculos</h3>`);
        }
    },

    calcular: function(inputs) {
        let existeDemissao = false;
        let existeSuspensao1 = false;
        let existeSuspensao2 = false;
        let existeReincidencia = false;
        let existeAdvertencia = false;
          
        inputs.each((index, input) => {
            let enquadramento = Calc.enquadramentos[$(input).val()];
            existeDemissao = existeDemissao || enquadramento.pena == "Demissão";
            existeSuspensao1 = existeSuspensao1 || enquadramento.pena == "Suspensão1";
            existeSuspensao2 = existeSuspensao2 || enquadramento.pena == "Suspensão2";
            existeReincidencia = existeReincidencia || (enquadramento.pena == "Advertência" && $(input).parent().parent().find('td:nth-child(3) input').prop('checked'));
            existeAdvertencia = existeAdvertencia || (enquadramento.pena == "Advertência" && !$(input).parent().parent().find('td:nth-child(3) input').prop('checked'));
         });

        let config = {demissao: existeDemissao, suspensao1: existeSuspensao1, suspensao2: existeSuspensao2, reincidencia: existeReincidencia, advertencia: existeAdvertencia};

        Calc.controlarExibicaoParametros(config.demissao);
        Calc.calcularPena(config);
    },

    controlarExibicaoParametros: function (demissao) {
        if (!demissao) {
            $('#areaParametros').show();
        } else {
            $('#areaParametros').hide();
        }    
    },

    calcularPena: function (config) {
        if (!config.demissao) {
            $('#areaResultado').html(Calc.calcularAdvertenciaOuSuspensao(config));
        } else {
            $('#areaResultado').html("<h3>Demissão, Cassação de Aposentadoria ou Disponibilidade</h3>");
        }      
    },

    calcularAdvertenciaOuSuspensao: function (config) {
        let ptsNatureza = parseInt($('#naturezaPontos').val());
        let ptsGravidade = parseInt($('#gravidadePontos').val());
        let ptsDano = parseInt($('#danoPontos').val());
        let ptsAtenuantes = parseInt($('#atenuantesPontos').val());
        let ptsAgravantes = parseInt($('#agravantesPontos').val());
        let ptsBonsAntecedentes = parseInt($('#bonsAntecedentesPontos').val());
        let ptsMausAntecedentes = parseInt($('#mausAntecedentesPontos').val());

        let pontos = ptsNatureza + ptsGravidade + ptsDano - ptsAtenuantes + ptsAgravantes - ptsBonsAntecedentes + ptsMausAntecedentes;

        $('#totalGeral').html(pontos);

        if (config.suspensao1) {
            return Calc.calcularCasoSuspensao1(pontos);
        } else {
            return Calc.calcularCasoGeral(config, pontos);
        }      
    },

    calcularCasoSuspensao1: function (pontos) {
        let dias = 6 * pontos / 7;
        dias = (dias > 1) ? dias : 1;
        dias = Math.floor(dias);

        return `<h3 title="Pontuação: ${pontos}">Suspensão de ${dias} dia(s)</h3>`;
    },

    calcularCasoGeral: function (config, pontos) {
        let diasSuspensao2 = pontos / 7;
        diasSuspensao2 = (diasSuspensao2 > 1) ? diasSuspensao2 : 1;
        diasSuspensao2 = Math.floor(diasSuspensao2);
        
        let diasCasoGeral = pontos - 15;

        if (config.suspensao2) {
            if (config.advertencia || config.reincidencia) {
                return `<h3 title="Pontuação: ${pontos}">Suspensão de ${diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral} dia(s)</h3>`;
            } else {
                return `<h3 title="Pontuação: ${pontos}">Suspensão de ${diasSuspensao2} dia(s)</h3>`;
            }
        }
        
        if (pontos <= 15) {
            if (config.suspensao2) {
                return `<h3 title="Pontuação: ${pontos}">Suspensão de ${pontos - 15} dia(s)</h3>`;   
            }
            if (config.reincidencia) {
                return `<h3 title="Pontuação: ${pontos}. Penalidade convertida de Advertência para Suspensão devido a reincidência.">Suspensão de 1 dia</h3>`;
            } else {
                return `<h3 title="Pontuação: ${pontos}">Advertência</h3>`;
            }
        } else {
            return `<h3 title="Pontuação: ${pontos}">Suspensão de ${pontos - 15} dia(s)</h3>`;
        }
    },

    onInputRange: function (prefixo, valor) {
        $(`#${prefixo}Pontos`).val(valor);

        Calc.atualizarQualificador(prefixo, parseInt(valor));
        Calc.atualizarCalculos();
    },

    atualizarQualificador: function(prefixo, valor) {
        if (prefixo == "natureza" || prefixo == "gravidade" || prefixo == "dano") {
            if (1 <= valor && valor <= 7) {
                $(`#${prefixo}Circulo`).css("background-color", "green");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][0]);
            } else if (8 <= valor && valor <= 14) {
                $(`#${prefixo}Circulo`).css("background-color", "goldenrod");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][1]);
            } else {
                $(`#${prefixo}Circulo`).css("background-color", "red"); 
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][2]);
            }
        }
    },

    onChangeTotal: function (name, input) {
        if (parseInt(input.value) < parseInt(input.min)) {
            input.value = input.min;
        } else if (parseInt(input.value) > parseInt(input.max)) {
            input.value = input.max
        }

        $(`input[name="${name}"]`).val(input.value);

        Calc.atualizarQualificador(name, parseInt(input.value));
        Calc.atualizarCalculos();
    }
};