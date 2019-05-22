<script>

    fso = new ActiveXObject("Scripting.FileSystemObject");
    var n = 0;
function lit_fic(rep){ 
var f, ff=""
    f = fso.GetFolder(rep)
    ff = new Enumerator(f.files);
    for(; !ff.atEnd(); ff.moveNext())
    n++;
    return n
    }
    
    Pour utiliser cette fonction
        alert(lit_fic("le nom du dossier"))
    vous pouvez aussi l'utiliser avec un document.write ou n'importe quelle autre methode
    
    
</script>