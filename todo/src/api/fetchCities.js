const stateList = [
    { "label": "Rondônia", "value": "RO" },
    { "label": "Acre", "value": "AC" },
    { "label": "Amazonas", "value": "AM" },
    { "label": "Roraima", "value": "RR" },
    { "label": "Pará", "value": "PA" },
    { "label": "Amapá", "value": "AP" },
    { "label": "Tocantins", "value": "TO" },
    { "label": "Maranhão", "value": "MA" },
    { "label": "Piauí", "value": "PI" },
    { "label": "Ceará", "value": "CE" },
    { "label": "Rio Grande do Norte", "value": "RN" },
    { "label": "Paraíba", "value": "PB" },
    { "label": "Pernambuco", "value": "PE" },
    { "label": "Alagoas", "value": "AL" },
    { "label": "Sergipe", "value": "SE" },
    { "label": "Bahia", "value": "BA" },
    { "label": "Minas Gerais", "value": "MG" },
    { "label": "Espírito Santo", "value": "ES" },
    { "label": "Rio de Janeiro", "value": "RJ" },
    { "label": "São Paulo", "value": "SP" },
    { "label": "Paraná", "value": "PR" },
    { "label": "Santa Catarina", "value": "SC" },
    { "label": "Rio Grande do Sul", "value": "RS" },
    { "label": "Mato Grosso do Sul", "value": "MS" },
    { "label": "Mato Grosso", "value": "MT" },
    { "label": "Goiás", "value": "GO" },
    { "label": "Distrito Federal", "value": "DF" }
  ]


const fetchCity = async (state) => {
    if (!state) return [];
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
    const data = await response.json();

    return data.map((city) => ({
        label: city.nome,
        value: city.sigla
    }));
}

export { stateList,fetchCity };