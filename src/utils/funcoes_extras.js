const reaisParaCentavos = (valor_Em_Reais) => {
    const centavos = Math.round(valor_Em_Reais * 100);
    return centavos
};

const centavosParaReais = (valor_Em_Centavos) => {
    const reais = (valor_Em_Centavos / 100).toFixed(2);
    return reais
};

module.exports = {
    reaisParaCentavos,
    centavosParaReais
}