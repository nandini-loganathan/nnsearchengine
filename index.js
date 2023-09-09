const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("pdt-list")
    const product = document.querySelectorAll(".product")
    const pdtname = storeitems.getElementsByTagName("h2")

    for(var i=0; i<pdtname.length; i++)
    {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textval = match.textContent || match.innerHTML

            if(textval.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}   