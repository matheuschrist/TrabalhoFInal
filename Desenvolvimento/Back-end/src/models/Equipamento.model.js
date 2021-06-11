module.exports = class Equipamento {
    constructor(equipamentoId, patrimonio, status, dataCadastro, 
                tipoDocumentoId, salaId, documentoRevisaoId)
    {
        this.EquipamentoId = equipamentoId,
        this.Patrimonio = patrimonio,
        this.Status = status,
        this.DataCadastro = dataCriacao,
        this.TipoEquipamentoId = tipoDocumentoId,
        this.SalaId = salaId,
        this.DocumentoRevisaoId = documentoRevisaoId
    }
}