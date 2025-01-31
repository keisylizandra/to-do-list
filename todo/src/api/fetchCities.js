const fetchStates = async () => {

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
    const data = await response.json();

    return data.map((state) => ({
        value: state.id,
        label: state.nome
    }));
}

const fetchCity = async (state) => {
    if (!state) return [];
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
    const data = await response.json();

    return data.map((city) => ({
        value: city.id,
        label: city.nome
    }));
}



export { fetchStates,fetchCity };