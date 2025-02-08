const stateList = [
    { "label": "Acre", "value": "AC" },
    { "label": "Alagoas", "value": "AL" },
    { "label": "Amapá", "value": "AP" },
    { "label": "Amazonas", "value": "AM" },
    { "label": "Bahia", "value": "BA" },
    { "label": "Ceará", "value": "CE" },
    { "label": "Distrito Federal", "value": "DF" },
    { "label": "Espírito Santo", "value": "ES" },
    { "label": "Goiás", "value": "GO" },
    { "label": "Maranhão", "value": "MA" },
    { "label": "Mato Grosso", "value": "MT" },
    { "label": "Mato Grosso do Sul", "value": "MS" },
    { "label": "Minas Gerais", "value": "MG" },
    { "label": "Pará", "value": "PA" },
    { "label": "Paraíba", "value": "PB" },
    { "label": "Paraná", "value": "PR" },
    { "label": "Pernambuco", "value": "PE" },
    { "label": "Piauí", "value": "PI" },
    { "label": "Rio de Janeiro", "value": "RJ" },
    { "label": "Rio Grande do Norte", "value": "RN" },
    { "label": "Rio Grande do Sul", "value": "RS" },
    { "label": "Rondônia", "value": "RO" },
    { "label": "Roraima", "value": "RR" },
    { "label": "Santa Catarina", "value": "SC" },
    { "label": "São Paulo", "value": "SP" },
    { "label": "Sergipe", "value": "SE" },
    { "label": "Tocantins", "value": "TO" }
  ];

  const autoPhrases = [
    "Add the country you've always wanted to visit.",
    "Add the dream city whose culture you're looking forward to experiencing.",
    "Add more as needed"
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

export { stateList,fetchCity,autoPhrases };