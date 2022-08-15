/* exported Calc */
const Calc = {
    tipos: ["tac", "pad"], 

    qualificadores: {
        natureza: ['Culpa Leve', 'Culpa Grave', 'Dolo'],
        gravidade: ['Baixa', 'Média', 'Alta'],
        dano: ['Leve', 'Médio', 'Grave']
    },

    enquadramentos: [
        { descricao: "Lei 8.112, Art. 116, I - exercer com zelo e dedicação as atribuições do cargo;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, II - ser leal às instituições a que servir;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, III - observar as normas legais e regulamentares;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, IV - cumprir as ordens superiores, exceto quando manifestamente ilegais;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, V - atender com presteza: a) ao público em geral, prestando as informações requeridas, ressalvadas as protegidas por sigilo; b) à expedição de certidões requeridas para defesa de direito ou esclarecimento de situações de interesse pessoal; c) às requisições para a defesa da Fazenda Pública.", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, VI - levar as irregularidades de que tiver ciência em razão do cargo ao conhecimento da autoridade superior ou, quando houver suspeita de envolvimento desta, ao conhecimento de outra autoridade competente para apuração;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, VII - zelar pela economia do material e a conservação do patrimônio público;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, VIII - guardar sigilo sobre assunto da repartição;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, IX - manter conduta compatível com a moralidade administrativa;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, X - ser assíduo e pontual ao serviço;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, XI - tratar com urbanidade as pessoas;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 116, XII - representar contra ilegalidade, omissão ou abuso de poder.", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, I - ausentar-se do serviço durante o expediente, sem prévia autorização do chefe imediato;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, II - retirar, sem prévia anuência da autoridade competente, qualquer documento ou objeto da repartição;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, III - recusar fé a documentos públicos;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, IV - opor resistência injustificada ao andamento de documento e processo ou execução de serviço;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, V - promover manifestação de apreço ou desapreço no recinto da repartição;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, VI - cometer a pessoa estranha à repartição, fora dos casos previstos em lei, o desempenho de atribuição que seja de sua responsabilidade ou de seu subordinado;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, VII - coagir ou aliciar subordinados no sentido de filiarem-se a associação profissional ou sindical, ou a partido político;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, VIII - manter sob sua chefia imediata, em cargo ou função de confiança, cônjuge, companheiro ou parente até o segundo grau civil;", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 117, IX - valer-se do cargo para lograr proveito pessoal ou de outrem, em detrimento da dignidade da função pública;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, X - participar de gerência ou administração de sociedade privada, personificada ou não personificada, exercer o comércio, exceto na qualidade de acionista, cotista ou comanditário;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XI - atuar, como procurador ou intermediário, junto a repartições públicas, salvo quando se tratar de benefícios previdenciários ou assistenciais de parentes até o segundo grau, e de cônjuge ou companheiro;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XII - receber propina, comissão, presente ou vantagem de qualquer espécie, em razão de suas atribuições;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XIII - aceitar comissão, emprego ou pensão de estado estrangeiro;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XIV - praticar usura sob qualquer de suas formas;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XV - proceder de forma desidiosa;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XVI - utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 117, XVII - cometer a outro servidor atribuições estranhas ao cargo que ocupa, exceto em situações de emergência e transitórias;", pena: "Suspensão1" },
        { descricao: "Lei 8.112, Art. 117, XVIII - exercer quaisquer atividades que sejam incompatíveis com o exercício do cargo ou função e com o horário de trabalho;", pena: "Suspensão1" },
        { descricao: "Lei 8.112, Art. 117, XIX - recusar-se a atualizar seus dados cadastrais quando solicitado.", pena: "Advertência" },
        { descricao: "Lei 8.112, Art. 130, § 1o Será punido com suspensão de até 15 (quinze) dias o servidor que, injustificadamente, recusar-se a ser submetido a inspeção médica determinada pela autoridade competente, cessando os efeitos da penalidade uma vez cumprida a determinação.", pena: "Suspensão2" },
        { descricao: "Lei 8.112, Art. 132, I - crime contra a administração pública;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, II - abandono de cargo;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, III - inassiduidade habitual;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, IV - improbidade administrativa;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, V - incontinência pública e conduta escandalosa, na repartição;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, VI - insubordinação grave em serviço;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, VII - ofensa física, em serviço, a servidor ou a particular, salvo em legítima defesa própria ou de outrem;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, VIII - aplicação irregular de dinheiros públicos;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, IX - revelação de segredo do qual se apropriou em razão do cargo;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, X - lesão aos cofres públicos e dilapidação do patrimônio nacional;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, XI - corrupção;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, XII - acumulação ilegal de cargos, empregos ou funções públicas;", pena: "Demissão" },
        { descricao: "Lei 8.112, Art. 132, XIII - transgressão dos incisos IX a XVI do art. 117", pena: "Demissão" },
        { descricao: "Lei 12.527, Art. 32, I - recusar-se a fornecer informação requerida nos termos desta Lei, retardar deliberadamente o seu fornecimento ou fornecê-la intencionalmente de forma incorreta, incompleta ou imprecisa;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, II - utilizar indevidamente, bem como subtrair, destruir, inutilizar, desfigurar, alterar ou ocultar, total ou parcialmente, informação que se encontre sob sua guarda ou a que tenha acesso ou conhecimento em razão do exercício das atribuições de cargo, emprego ou função pública;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, III - agir com dolo ou má-fé na análise das solicitações de acesso à informação;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, IV - divulgar ou permitir a divulgação ou acessar ou permitir acesso indevido à informação sigilosa ou informação pessoal;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, V - impor sigilo à informação para obter proveito pessoal ou de terceiro, ou para fins de ocultação de ato ilegal cometido por si ou por outrem;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, VI - ocultar da revisão de autoridade superior competente informação sigilosa para beneficiar a si ou a outrem, ou em prejuízo de terceiros;", pena: "Suspensão1" },
        { descricao: "Lei 12.527, Art. 32, VII - destruir ou subtrair, por qualquer meio, documentos concernentes a possíveis violações de direitos humanos por parte de agentes do Estado.", pena: "Suspensão1" }
    ],

    getUrlParameter: function (nome) {
        let pageURL = window.location.search.substring(1),
            parametros = pageURL.split('&'),
            nomeParametro,
            i;

        for (i = 0; i < parametros.length; i++) {
            nomeParametro = parametros[i].split('=');

            if (nomeParametro[0] === nome) {
                return nomeParametro[1] === undefined ? true : decodeURIComponent(nomeParametro[1]);
            }
        }
    },

    init: function () {
        let tipo = Calc.getUrlParameter("tipo");

        if (Calc.tipos.includes(tipo)) {
            if (tipo == "tac") {
                Calc.gerarElementosTAC();
            } else if (tipo == "pad") {
                Calc.gerarElementosPAD();
            }
            Calc.construirEnquadramentos();
        } else {
            Calc.informarProblemaTipoCalculadora();
        }

        Calc.inicializarTooltips();
    },

    inicializarTooltips: function () {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    },

    informarProblemaTipoCalculadora: function () {
        $('body').html('<h1>Problema com a escolha do tipo da calculadora.</h1>');
    },

    gerarElementosTAC: function () {
        $('#titulo').html(`Calculadora de Viabilidade de TAC `);
    },

    gerarElementosPAD: function () {
        $('#titulo').html(`Calculadora de Penalidade Administrativa `);
    },

    construirCheckboxSelecaoEnquadramento: function (value) {
        return `<input type="checkbox" class="form-check-input" value="${value}" onchange="Calc.onClickEnquadramento()"></input>`;
    },

    onClickEnquadramento: function () {
        let infoEnquadramentos = $("#infoEnquadramentos");
        let inputsChecked = $('#tableEnquadramento tbody input:checked');

        if (inputsChecked.length == 1) {
            infoEnquadramentos.html("Enquadramentos (1 selecionado)");
        } else {
            infoEnquadramentos.html(`Enquadramentos (${inputsChecked.length} selecionados)`);
        }

        Calc.atualizarCalculos();
    },

    apagarSelecaoEnquadramentos: function () {
        $("#tableEnquadramento tbody input").prop("checked", false);

        Calc.onClickEnquadramento();
    },

    resetarCriteriosQueAumentamGrau: function () {
        $("#tableCriteriosQueAumentam tbody input").val(0);

        $("#naturezaPontos").val(1);
        $("#gravidadePontos").val(1);

        $("input[name='natureza']").val(1);
        $("input[name='gravidade']").val(1);

        Calc.atualizarQualificador("natureza", 1);
        Calc.atualizarQualificador("gravidade", 1);
        Calc.atualizarQualificador("dano", 0);

        Calc.atualizarCalculos();
    },

    resetarCriteriosQueDiminuem: function () {
        $("#tableCriteriosQueDiminuem tbody input").val(0);

        Calc.atualizarCalculos();
    },

    construirEnquadramentos: function () {
        let tableBody = $('#tableEnquadramento tbody');
        Calc.enquadramentos.forEach((e, i) => {
            tableBody.append($(`<tr>
                    <td>${Calc.construirCheckboxSelecaoEnquadramento(i)}</td>
                    <td>${e.descricao}</td>
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

    calcular: function (inputs) {
        let existeDemissao = false;
        let existeSuspensao1 = false;
        let existeSuspensao2 = false;
        let existeReincidencia = false;
        let existeAdvertencia = false;

        let reincidencia = $('#reincidencia').prop('checked');

        inputs.each((index, input) => {
            let enquadramento = Calc.enquadramentos[$(input).val()];
            existeDemissao = existeDemissao || enquadramento.pena == "Demissão";
            existeSuspensao1 = existeSuspensao1 || enquadramento.pena == "Suspensão1";
            existeSuspensao2 = existeSuspensao2 || enquadramento.pena == "Suspensão2";
            existeReincidencia = existeReincidencia || (enquadramento.pena == "Advertência" && reincidencia);
            existeAdvertencia = existeAdvertencia || (enquadramento.pena == "Advertência" && !reincidencia);
        });

        let config = { demissao: existeDemissao, suspensao1: existeSuspensao1, suspensao2: existeSuspensao2, reincidencia: existeReincidencia, advertencia: existeAdvertencia };
        config.tipo = Calc.getUrlParameter("tipo");

        Calc.controlarExibicaoParametros(config.demissao);
        Calc.calcularPena(config);
        Calc.inicializarTooltips();
    },

    controlarExibicaoParametros: function (demissao) {
        if (!demissao) {
            $('#areaParametros').show();
        } else {
            $('#areaParametros').hide();
        }
    },

    calcularPena: function (config) {
        let resultado = "";

        if (!config.demissao) {
            resultado = Calc.calcularAdvertenciaOuSuspensao(config);
        } else {
            if (config.tipo == "pad") {
                resultado = "<h3>Demissão, Destituição, Cassação de Aposentadoria ou Disponibilidade</h3>";
            } else if (config.tipo == "tac") {
                resultado = "<h3>Demissão, Destituição, Cassação de Aposentadoria ou Disponibilidade</h3>";
                resultado += Calc.calcularMensagemTAC(true, 1000);
            }
        }

        $('#areaResultado').html(resultado);
    },

    calcularAdvertenciaOuSuspensao: function (config) {
        let ptsNatureza = parseInt($('#naturezaPontos').val());
        let ptsGravidade = parseInt($('#gravidadePontos').val());
        let ptsDano = parseInt($('#danoPontos').val());
        let ptsAtenuantes = parseInt($('#atenuantesPontos').val());
        let ptsAgravantes = parseInt($('#agravantesPontos').val());
        let ptsBonsAntecedentes = parseInt($('#bonsAntecedentesPontos').val());
        let ptsMausAntecedentes = parseInt($('#mausAntecedentesPontos').val());

        let graus = ptsNatureza + ptsGravidade + ptsDano - ptsAtenuantes + ptsAgravantes - ptsBonsAntecedentes + ptsMausAntecedentes;

        $('#totalGeral').html(graus);

        if (config.suspensao1) {
            return Calc.calcularCasoSuspensao1(config, graus);
        } else {
            return Calc.calcularCasoGeral(config, graus);
        }
    },

    tacPodeSerCelebrado: function (diasSuspensao) {
        return diasSuspensao > 30;
    },

    calcularMensagemTAC: function (reincidencia, diasSuspensao) {
        let retorno = "";

        if (reincidencia || Calc.tacPodeSerCelebrado(diasSuspensao)) {
            retorno = `<h3>Celebração de TAC impossível</h3>`;
        } else {
            retorno = `<h3>Celebração de TAC possível</h3>`;
            retorno += `<p style="text-align: right;">A celebração de TAC deve observar as condições estabelecidas na IN CGU/CRG 04 de 2020. 
                        Clique <a href='https://www.in.gov.br/web/dou/-/instrucao-normativa-n-4-de-21-de-fevereiro-de-2020-244805929' target='blank'>aqui</a> para acessar.<p>`;
        }

        return retorno;
    },

    calcularCasoSuspensao1: function (config, graus) {
        let dias = 6 * graus / 7;
        dias = (dias > 1) ? dias : 1;
        dias = Math.floor(dias);

        let retorno = "";

        if (config.tipo == "pad") {
            retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${dias} dia(s) ou Destituição de Cargo em Comissão</h3>`;
        } else if (config.tipo == "tac") {
            retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${dias} dia(s)</h3>`;
            retorno += Calc.calcularMensagemTAC(config.reincidencia, dias);
        }

        return retorno;
    },

    calcularCasoGeral: function (config, graus) {
        let diasSuspensao2 = graus / 7;
        diasSuspensao2 = (diasSuspensao2 > 1) ? diasSuspensao2 : 1;
        diasSuspensao2 = Math.floor(diasSuspensao2);

        let diasCasoGeral = graus - 15;

        if (config.tipo == "pad") {
            return Calc.calcularCasosGeralPAD(config, graus, diasSuspensao2, diasCasoGeral);
        } else if (config.tipo == "tac") {
            return Calc.calcularCasosGeralTAC(config, graus, diasSuspensao2, diasCasoGeral);
        }
    },

    calcularCasosGeralPAD: function (config, graus, diasSuspensao2, diasCasoGeral) {
        let retorno = "";

        if (config.suspensao2) {
            if (config.advertencia || config.reincidencia) {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral} dia(s) ou Destituição de Cargo em Comissão</h3>`;
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${diasSuspensao2} dia(s) ou Destituição de Cargo em Comissão</h3>`;
            }

            return retorno;
        }

        if (graus <= 15) {
            if (config.reincidencia) {
                retorno = `<h3 title="Grau: ${graus}. Penalidade convertida de Advertência para Suspensão devido a reincidência." data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de 1 dia ou Destituição de Cargo em Comissão</h3>`;
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Advertência</h3>`;
            }
        } else {
            retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${graus - 15} dia(s) ou Destituição de Cargo em Comissão</h3>`;
        }

        return retorno;
    },

    calcularCasosGeralTAC: function (config, graus, diasSuspensao2, diasCasoGeral) {
        let retorno = "";

        if (config.suspensao2) {
            if (config.advertencia || config.reincidencia) {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral} dia(s)</h3>`;
                retorno += Calc.calcularMensagemTAC(config.reincidencia, diasSuspensao2 > diasCasoGeral ? diasSuspensao2 : diasCasoGeral);
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${diasSuspensao2} dia(s)</h3>`;
                retorno += Calc.calcularMensagemTAC(config.reincidencia, diasSuspensao2);
            }

            return retorno;
        }

        if (graus <= 15) {
            if (config.reincidencia) {
                retorno = `<h3 title="Grau: ${graus}. Penalidade convertida de Advertência para Suspensão devido a reincidência." data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de 1 dia</h3>`;
                retorno += Calc.calcularMensagemTAC(config.reincidencia, 1);
            } else {
                retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Advertência</h3>`;
                retorno += Calc.calcularMensagemTAC(config.reincidencia, 0);
            }
        } else {
            retorno = `<h3 title="Grau: ${graus}" data-bs-toggle="tooltip" data-bs-placement="right">Suspensão de ${graus - 15} dia(s)</h3>`;
            retorno += Calc.calcularMensagemTAC(config.reincidencia, graus - 15);
        }

        return retorno;
    },

    onInputRange: function (prefixo, valor) {
        $(`#${prefixo}Pontos`).val(valor);

        Calc.atualizarQualificador(prefixo, parseInt(valor));
        Calc.atualizarCalculos();
    },

    atualizarQualificador: function (prefixo, valor) {
        if (prefixo == "natureza" || prefixo == "gravidade" || prefixo == "dano") {
            if (15 <= valor && valor <= 21) {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-grave");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][2]);
            } else if (8 <= valor && valor <= 14) {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-medio");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][1]);
            } else {
                $(`#${prefixo}Circulo`).removeClass("circulo-qualificador-leve circulo-qualificador-medio circulo-qualificador-grave").addClass("circulo-qualificador-leve");
                $(`#${prefixo}Qualificador`).html(Calc.qualificadores[prefixo][0]);
            }
        }
    },

    onChangeTotal: function (name, input) {
        input.value = Math.floor(input.value);

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