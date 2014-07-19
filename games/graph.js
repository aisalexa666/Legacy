function Fresize(){
    if (window.CorrectMapCell){
        window.CorrectMapCell=false;
        for (var x = 0; x <= 100; x++)
            for (var y = 0; y <= 70; y++)
                if (document.getElementById('Bmap_'+x+'_'+y)){
                    var posit = document.getElementById('Bmap_'+x+'_'+y); 
                    posit.style.left=((80*x)+'px');
                    posit.style.top =((60*y)+'px');
                }
        $.ajax({type: "POST",url: "/server/coord.php",data: "login="+get_cookie('login')+"&line=x",success: function(msg){
        localStorage.setItem("Castle_X", msg);
        }});
        $.ajax({type: "POST",url: "/server/coord.php",data: "login="+get_cookie('login')+"&line=y",success: function(msg){
        localStorage.setItem("Castle_Y", msg);
        }});
    }
    var CellWidth= (getClientWidth()*0.9);
    var Cellheight= (getClientHeight()*0.8);
    var ClientWidth= getClientWidth();
    var ClientHeight= getClientHeight();
    var C_scale = 12;
    for (var i = 0; i <= 5; i++)//wall-8
        if (document.getElementById('wall-8-'+i)){
            var p = document.getElementById('wall-8-'+i); 
            p.style.left=(((CellWidth/2 + (CellWidth/C_scale)*2) -(CellWidth/C_scale)*i  )+'px');
            p.style.top =((0)+'px');
            p.style.width =((CellWidth/C_scale)+'px');
            p.style.height =((Cellheight/C_scale)+'px');
        }
    var MaxLeftPut = (CellWidth/2+CellWidth/C_scale*3)-5;
    var MinLeftPut = (CellWidth/2 -(CellWidth/C_scale)*3);
    var CRazn = MaxLeftPut-MinLeftPut;
    var CWidth = (ClientWidth/ (C_scale*5));
    var CHeight = (ClientHeight/ (C_scale/1.5));
    for (var i = 0; i <= 11; i++)//wall-6
        if (document.getElementById('wall-6-'+i)){
            var p = document.getElementById('wall-6-'+i); 
            p.style.width  = (CWidth)+'px';
            p.style.height = (CHeight)+'px';
            p.style.left=(MaxLeftPut+(CWidth-5)*i)+'px';
            p.style.top =(CHeight*i*0.43)+'px';
        }
    CRazn=CRazn+((CWidth-4)*24);
    for (var i = 0; i <= 11; i++)//wall-4
        if (document.getElementById('wall-4-'+i)){
            var p = document.getElementById('wall-4-'+i); 
            p.style.width  = (CWidth)+'px';
            p.style.height = (CHeight)+'px';
            p.style.left=(MinLeftPut-(CWidth-5)*(i+1))+'px';
            p.style.top =(CHeight*i*0.43)+'px';
        }
    MinLeftPuts = (MinLeftPut-((CWidth-5)*12));
    var CMaxTop = (CHeight*11*0.43+CWidth);
    var CWidth  = CRazn/8;   //((CellWidth/C_scale)*1.329);
    var CHeight = ((Cellheight/C_scale)*1.329);
    for (var i = 0; i <= 15; i++)//wall-2
        if (document.getElementById('wall-2-'+i)){
            var p = document.getElementById('wall-2-'+i); 
            p.style.left=((MinLeftPuts+((CWidth-2)*i))+'px');
            p.style.top =((CMaxTop*1.03)+'px');
            p.style.width =(CWidth+'px');
            p.style.height =(CHeight+'px');
        }






}









