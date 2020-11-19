

function Selection(){

	delay_time=0;
	var min_ind;

	for(var i=0;i<ar_len;i++){

		update_cur_div(divi[i],div_size[i],"red");
		min_ind=i;

		for(var j=i+1;j<ar_len;j++){

			update_cur_div(divi[j],div_size[j],"yellow");

			if(div_size[j]<div_size[min_ind]){
				if(min_ind!=i){

					update_cur_div(divi[min_ind],div_size[min_ind],"blue");
				}
				min_ind=j;
				update_cur_div(divi[j],div_size[j],"red");
			}
			else{
				update_cur_div(divi[j],div_size[j],"blue");
			}
		}
		
		if(min_ind!=i){

			var temp=div_size[i];
		    div_size[i]=div_size[min_ind];
		    div_size[min_ind]=temp;

		    update_cur_div(divi[i],div_size[i],"red");
		    update_cur_div(divi[min_ind],div_size[min_ind],"red");

		    update_cur_div(divi[min_ind],div_size[min_ind],"blue");

		}
		update_cur_div(divi[i],div_size[i],"green");
	}
	enableBut();
}