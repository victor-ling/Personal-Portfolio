function calculate()
{
	var weight=document.getElementById("weight").value;
	var height=document.getElementById("height").value;
	
	var result=parseFloat(weight)/parseFloat(Math.pow(height,2));
	
	if(!isNaN(result))
	{
		document.getElementById("answer").innerHTML = "Your BMI is "+result;
	}
}