(() => {
    /**
     * A function to generate an object with the user's values.
     * @param {string} serie 
     */
        function askTvSerie() {
            
        let tvSerie = {
            "Name of serie": prompt("What is the name of your favorite TV serie?"),
            "Production year": prompt("What is the year of production of this TV serie?"),
            "Cast members": prompt("What are the names of the cast members?"),
        };  
        return tvSerie;

    }
        let favoriteSerie = askTvSerie();
    alert(JSON.stringify(favoriteSerie));    
})()