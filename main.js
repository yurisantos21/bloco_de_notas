$(function(){

	$("#botao").click(function(){

		let item = '<li id="item-lista">';
		item+= $("#lembrete").val();
		item+= ' - '
		item+= $("#data").val();
		item+= '</li>';
		item+= '<hr>';

		$("#itens").append(item);

	})

	$("#item-lista").click(function(){

		$(this).toggleClass("feito");

	})

})
