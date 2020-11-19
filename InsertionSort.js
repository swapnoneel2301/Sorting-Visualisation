

function Insertion(){

	delay_time=0;
	for(var i=1;i<ar_len;i++){

		var cur_el=div_size[i];

		update_cur_div(divi[i],div_size[i],"yellow");

		var j=i-1;
		while(j>=0 && div_size[j]>cur_el){

			update_cur_div(divi[j],div_size[j],"red");
			update_cur_div(divi[j+1],div_size[j+1],"red");

			div_size[j+1]=div_size[j];

			update_cur_div(divi[j],div_size[j],"red");
			update_cur_div(divi[j+1],div_size[j+1],"red");

			update_cur_div(divi[j],div_size[j],"blue");
			if(j==i-1){

				update_cur_div(divi[j+1],div_size[j+1],"yellow");
			}

			else{

				update_cur_div(divi[j+1],div_size[j+1],"blue");
			}
			j--;
		}

		div_size[j+1]=cur_el;

		var l=0;
		while(l<i){
			update_cur_div(divi[l],div_size[l],"green");
			l++;
		}
		update_cur_div(divi[i],div_size[i],"blue");
	}

	update_cur_div(divi[ar_len-1],div_size[ar_len-1],"green");
	enableBut();
}