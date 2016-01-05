var add = function(count){
	var box1 = $('.box1'); 
	$('tbody:first').append("<tr><td> <input class='grade' type='text' size='6' value='0'> </td> <td></td> <td> <input class='percent' type='text' size='6' value='0'> </td></tr>"); 
}

var calculate = function(count){

	var grades = $("input.grade").map(function(){
			return this.value; 
	});
	var percents = $("input.percent").map(function(){
			return this.value; 
	});
	var results = [85,80,75,70,65,60,55,50]; 
	var weightedGrades = 0; 
	var totpercent = 0; 
	for (var i = 0; i < grades.length; i++) {
		weightedGrades += grades[i]*percents[i]*0.01; 
		totpercent += percents[i]*1; 	
	};
	for (var i = 0; i < 8; i++) {
	 	results[i]= (results[i] - weightedGrades)/((100-totpercent)*0.01); 
	 }; 
	console.log(results); 
	for (var i = 1; i < 9; i++) {
		var tomodify = $('td[name=result'+i+']');
		if (results[i-1]>100 ){
			tomodify.html("I'm sorry");
		}
		else { 
			if (results[i-1]<0) {
				tomodify.html("0% hehe :D"); 
			}
			else 
				{ tomodify.html(results[i-1] + '%'); 
			};
		}; 
		
	};
}

var main = function(){
	var count = 6; 
	var adder = $('.add'); 
	var calc = $('.calc'); 
	adder.click(function(){
		add(count);
		count++; 
	}); 
	calc.click(function(){
		calculate(count); 
	}); 
}

$(document).ready(main); 