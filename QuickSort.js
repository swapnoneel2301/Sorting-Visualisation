

function Quick(){

	delay_time=0;
	quickSort(0,ar_len-1);

	enableBut();

}

function partition(start,end){

	var pivot=end;
	var i=start-1;
	update_cur_div(divi[pivot],div_size[pivot],"yellow");

	for(var j=start;j<=end-1;j++){

		if(div_size[j]<=div_size[pivot]){

			update_cur_div(divi[j],div_size[j],"yellow");

            i++;
			update_cur_div(divi[j],div_size[j],"red");
			update_cur_div(divi[i],div_size[i],"red");

			var temp=div_size[i];
			div_size[i]=div_size[j];
			div_size[j]=temp;

			update_cur_div(divi[j],div_size[j],"red");
			update_cur_div(divi[i],div_size[i],"red");

			update_cur_div(divi[j],div_size[j],"blue");
			update_cur_div(divi[i],div_size[i],"blue");

		}

	}

	i++;

	update_cur_div(divi[i],div_size[i],"red");
	update_cur_div(divi[pivot],div_size[pivot],"red");

	var temp=div_size[i];
	div_size[i]=div_size[pivot];
	div_size[pivot]=temp;

	update_cur_div(divi[i],div_size[i],"red");
	update_cur_div(divi[pivot],div_size[pivot],"red");

	update_cur_div(divi[i],div_size[i],"blue");
	update_cur_div(divi[pivot],div_size[pivot],"blue");

	update_cur_div(divi[i],div_size[i],"green");

	return i;

}


function quickSort(start,end){

	if(start<=end){

		var index=partition(start,end);
		quickSort(start,index-1);
		quickSort(index+1,end);

	}

}