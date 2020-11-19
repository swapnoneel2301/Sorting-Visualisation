
function Bubble(){
	delay_time=0;

	for(var i=0;i<ar_len-1;i++){

		for(var j=0;j<ar_len-i-1;j++){

			update_cur_div(divi[j],div_size[j],"yellow");

			if(div_size[j]>div_size[j+1]){

				update_cur_div(divi[j],div_size[j],"red");
				update_cur_div(divi[j+1],div_size[j+1],"red");

				var temp=div_size[j];
				div_size[j]=div_size[j+1];
				div_size[j+1]=temp;

				update_cur_div(divi[j],div_size[j],"red");
				update_cur_div(divi[j+1],div_size[j+1],"red");
			}

			update_cur_div(divi[j],div_size[j],"blue");
		}
		update_cur_div(divi[j],div_size[j],"green");
	}
	update_cur_div(divi[0],div_size[0],"green");

	enableBut();
}