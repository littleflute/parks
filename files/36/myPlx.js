var _g_ver_blAppPlx = "v0.1.155";

function _plxJobClass()
{ 
	this.blr_englishIssue17 = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v","v",blGrey[5]);
			d.v.innerHTML = d.id; 
			function _loadIssue(o) {				
					eval(o.body);
			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/english/issues/17", _loadIssue);		
		}
		_on_off_div(b,d);
		
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
	this.blrAboutPlx= function(b,d){		
		var s = "blrAboutPlx<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/parks/edit/master/files/36/myPlx.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " myPlx.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/parks/files/36/myPlx.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " myPlx.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
}
function CBlAppPlxClass()
{ 
	var _plxUI = null;
	var app = bl$("id_div_4_english_blPlx");
	if(app!=null){
		_plxUI = blo0.blDiv(app, app.id + "_plx" , "blAppPlx: " + _g_ver_blAppPlx, blColor[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	} 
	else{
		
		_plxUI = blo0.blDiv(document.body, "_plx" , "blAppPlx: " + _g_ver_blAppPlx, blColor[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	}
}
 
var _blAppPlx = new CBlAppPlxClass;    
	bl$("blrIssue3C").click();	bl$("blrIssue3C").click();
	bl$("blrAboutPlx").click();	bl$("blrAboutPlx").click();
document.writeln("<script src=\"http:\/\/open.iciba.com\/huaci\/huaci.js\" ></script>");
