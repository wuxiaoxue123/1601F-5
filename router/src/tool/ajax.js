function $ajax(option){
	let {
		url,
		type,
		data
	} = option;
	return new Promise((resolve,reject)=>{
		let ajax;
		if(window.XMLHttpRequest){
			ajax=new XMLHttpRequest();
		}else{
			ajax= new ActiveXObject("Microsoft.XMLHTTP");
		}
		if(type=="post"){
			ajax.open(type,url);
			ajax.setRequestHeader("conten-type","application/x-www-from-urlencoded")
			ajax.send(data);
		}else{
			if(data){
				Object.entries().forEach((i,index)=>{
					if(index==0){
						url+=`?${i[0]}=${i[1]}`
					}else{
						url+=`&${i[0]}=${i[1]}`
					}
				})
			}
			ajax.open(type,url);
			ajax.send();
		}

		ajax.onreadystatechange=function(){
			if(ajax.status==200 &&　ajax.readyState==4){
				let data = JSON.parse(ajax.responseText);
				resolve(data)
			}
		}
	})
}
export default $ajax;