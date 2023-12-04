$(document).ready(function(){

	$("#botao").click(function(){

		let item = '<li id="item-lista">';
		item+= $("#lembrete").val();
		item+= ' - '
		item+= $("#data").val();
		item+= '</li>';
		item+= '<hr>';

		$("#itens").append(item);

	})

$(document).ready(function(){

	$("#lista").on('click', 'li', function(){

		$(this).toggleClass("feito");

	})
})
