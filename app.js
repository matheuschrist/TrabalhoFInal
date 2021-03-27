class Reserva {

	constructor(equipamento, patrimonio, descricao, RA) {
		this.equipamento = equipamento
		this.patrimonio = patrimonio
		this.descricao = descricao
		this.RA = RA
	}

	validarDados() {
		for (let i in this) {
			if (this[i] == undefined || this[i] == '' || this [i] == null) {
				return false	
			}

			return true	
		}
	}

}

class BD {

	constructor() {
		let id = localStorage.getItem('id')

		if (id === null) {
			localStorage.setItem('id',0)	
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(des) {
		let id = this.getProximoId()
		localStorage.setItem(id, JSON.stringify(des))
		localStorage.setItem('id', id)
	}

	recuperarRegistro() {
		let reservas = Array()
		let id = localStorage.getItem('id')

		for (var i = 1; i <= id; i++) {	
			let reserva = JSON.parse(localStorage.getItem(i))
		
			if (reserva == null) {continue}
				reserva.id = i
				
			reservas.push(reserva)	
		}

		return reservas
	}

	pesquisar(reserva) {
		let registros = Array()
		registros = this.recuperarRegistro()

 		if (reserva.ano != '') {
			registros = registros.filter(d => d.ano == reserva.ano)
		}
	
		if (reserva.mes != '') {
			registros = registros.filter(d => d.mes == reserva.mes)
		}

		if (reserva.dia != '') {
			registros = registros.filter(d => d.dia == reserva.dia)
		}

		if (reserva.tipo != '') {
			registros = registros.filter(d => d.tipo == reserva.tipo)
		}

		if (reserva.descricao != '') {
			registros = registros.filter(d => d.descricao == reserva.descricao)
		}

		if (reserva.valor != '') {
			registros = registros.filter(d => d.valor == reserva.valor)
		}

		return registros
	}

	remover(id) {	
		localStorage.removeItem(id)	
	}

}

let bd = new BD()

function cadastrarDespesa() {

	/*	
	let ano= document.getElementById('ano')
	let mes=document.getElementById('mes')
	let dia=document.getElementById('dia')
	let tipo=document.getElementById('tipo')
	*/

	let equipamento = document.getElementById('equipamento')
	let patrimonio = document.getElementById('patrimonio')
	let descricao = document.getElementById('descricao')
	let RA = document.getElementById('RA')

	let reserva = new Reserva(
		equipamento.value,
		patrimonio.value,
		descricao.value,
		RA.value	
	)

	if (reserva.validarDados()) {
		bd.gravar(reserva)
		document.getElementById('modalTitulo').innerHTML = 'Registro inserido com sucesso!'
		document.getElementById('modalCor').className = "modal-header text-success"
		document.getElementById('modalConteudo').innerHTML = 'Reserva feita com sucesso!'
		document.getElementById('modalButton').className = "btn btn-success" 
		document.getElementById('modalButton').innerHTML = 'Voltar'
		$('#registarDespesa').modal('show')		
	} else {	
		document.getElementById('modalTitulo').innerHTML = 'Erro na inclusão do registro!'
		document.getElementById('modalCor').className = "modal-header text-danger"
		document.getElementById('modalConteudo').innerHTML = 'Há algum campo obrigatório inválido!'
		document.getElementById('modalButton').className = "btn btn-danger"
		document.getElementById('modalButton').innerHTML = 'Voltar e corrigir'
		$('#registarDespesa').modal('show')	
	}

	equipamento.value = ''
	patrimonio.value = ''
	descricao.value = ''
	RA.value = ''

}


function carregaListaDispesas(reservas = Array(), filtro = false) {

	if (reservas.length == 0 && filtro == false) {
		reservas = bd.recuperarRegistro()
	}

	let listaDespesas = document.getElementById('tabela')
	listaDespesas.innerHTML = ''

	reservas.forEach(function(d) {
		let linha = listaDespesas.insertRow()
		//linha.insertCell(0).innerHTML=d.dia+'/'+d.mes+'/'+d.ano
		
		switch(d.equipamento){
			case '1': 
				d.equipamento = 'Notebook'
				break
			case '2': 
				d.equipamento = 'Tablet'
				break
			case '3': 
				d.equipamento = 'Headset'
				break
			case '4': 
				d.equipamento = 'Microfone'
				break			
		}

		linha.insertCell(0).innerHTML = d.equipamento
		linha.insertCell(1).innerHTML = d.patrimonio
		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.RA

		//Botão de Exclusão

		let btn = document.createElement("button")
		btn.className = 'btn btn-danger'
		btn.id = d.id
		btn.innerHTML = '<i class="fas fa-times"></i>'

		btn.onclick = function() {	
			bd.remover(this.id)
			window.location.reload()
		}

		linha.insertCell(4).append(btn)	
		console.log(d)
	})

}

function pesquisarDespesa() {
 	
 	let equipamento = document.getElementById('equipamento').value
	let patrimonio = document.getElementById('patrimonio').value
 	let descricao= document.getElementById('descricao').value
 	let RA = document.getElementById('RA').value
 	let reserva = new Reserva(equipamento, patrimonio, descricao, RA)
 	
	carregaListaDispesas(bd.pesquisar(reserva), true)	

}