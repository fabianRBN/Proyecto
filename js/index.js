$(document).ready(function(){
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	});
	$('#login').on('shown.bs.modal', function () {
	  $('#loginIn').focus()
	});
	$("#btn_test").click(function(){
		
         $("#div_test").load("./test.html");
    
    });
    var input = document.querySelectorAll("label.check input");
		if(input !== null) {
		  [].forEach.call(input, function(el) {
		    if(el.checked) {
		      el.parentNode.classList.add('c_on');
		    }
		    el.addEventListener("click", function(event) {
		      event.preventDefault();
		      el.parentNode.classList.toggle('c_on');
		    }, false);
		  });
		}

});

