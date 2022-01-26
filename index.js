 function Login(name,password){
 var xhr = new XmlHttpRequest();
 var body= "username="+encodeURIComponent(name)+"&password="+encodeURIComponent(password);
 xhr.open("POST","https://jsonbase.tk/tzone/account/reg",true);
xhr.onreadystatechange = function() {
  alert (this.responseText);
}
 }