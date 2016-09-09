$(document).ready(function(){
	$('#btn').dblclick(function(){
		$('.intro').toggle('slow')

	})
	$('#btn2').dblclick(function(){
		$('.intro2').fadeToggle('fast')
		$('.img1').fadeToggle(1000)
	})
	$('#btn3').mouseleave(function(){
		$('.intro3,.intro4').slideToggle()

	})
	$('#btn4').click(function()
	{
		$('#divBox').animate({
			left:'300px',
			width:'500px',
			height:'400px',
			padding:'15px 25px'

		})
		$('divBox2').animate({
			left:"400px",
			height:"300px",
			width:"400px",
			padding:"14px 30px",
			border:"1px solid red"
		})

	})
   $('#btn5').click(function(){

   	$('#newList').append('<li>four</li>')//adding at the bottom.
   	$('#newList').prepend('<li>zero</li>')//adding at the top of the list.
   })
   $('#btn6').click(function(){
   	$('.intro5').toggleClass('intro6')
   })
  $("#divSnow").websnowjq();
})