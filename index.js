console.log("hola");

//console.log(posts[1].querySelector("titulo").textContent);

// Usamos la funcion feth para acceder a los archivos xml
fetch("podcast.xml")
.then(response => response.text())
.then(data =>{

     // Aqui ponemnos el codigo que debe ejecutarse cuando tenemos el xml

     const parser = new DOMParser()
     const xml = parser.parseFromString(data, "application/xml")
     console.log(xml)

     const posts = xml.querySelectorAll("post")
     console.log(posts[0].querySelector("nombre").textContent);

     let podcasts = ''
     //Recorremos el array con los podcasts
     for(let i=0;i<posts.length;i++){
        let titulo = posts[i].getAttribute("titulo")  
        let descripcion = posts[i].querySelector("descripcion").textContent
        console.log(" Titulo: ", titulo, " Descripcion: ", descripcion); 
        const tarjeta = `
          <div class"tarjeta">
               <p>Titulo: ${titulo}</p>
               <p>Descripcion: ${descripcion}</p>
          </div>
          `
          
     }


    



})