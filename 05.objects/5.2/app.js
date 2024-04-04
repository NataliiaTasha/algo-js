(() => {
    /**
     * A function to generate an object with the user's values.
     * @returns {object} - An object representing the tv serie.
     */
        function askTvSerie() {
            let serie = prompt("Enter the name of your favorite TV serie:");
            let year = prompt("Enter the year of production of this TV serie:");
            let actors = [];
            let moreActors = true;

            while (moreActors) {
                let actor = prompt("Enter the name of the cast member:");
                actors.push(actor);
                moreActors = confirm("Do you want to enter another actor?");
            }    
            
        let tvSerie = {
            "Name of serie": serie,
            "Production year": year,
            "Cast members": actors,
        };  
        return tvSerie;
    }
        let tvSerie = askTvSerie();
        
       /**
        * A function randomizing the order of actors.
        * @param {object} tvSerie - An object representing the tv serie.
        * @returns {object} - An object representing the tv serie with the randomized list of actors.
        */
        function randomizeCast(tvSerie) {
        let actors = [...tvSerie["Cast members"]];
        let newList = [];
        while (actors.length > 0) {
            let n = Math.floor(Math.random() * actors.length);
            newList.push(actors[n]);
            actors.splice(n, 1);//removes selected actor from the list, so the actor will be not duplicated in new list    
        }
        let newTvSerie = {
            "Name of serie": tvSerie.serie,
            "Production year": tvSerie.year,
            "Cast members": newList,
        };
        return newTvSerie;
    }

        let newCast = randomizeCast(tvSerie);
        alert (JSON.stringify(newCast));
      
        


         
})()