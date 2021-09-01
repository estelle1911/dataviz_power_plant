const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");


// Map and projection
const projection = d3.geoMercator()
    .center([0,20])                
    .scale(99)                       
    .translate([ width/2, height/2])

Promise.all([
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
d3.json("./PowerPlantDB.json")
]).then(function (initialize) {

    let dataGeo = initialize[0]
    let data = initialize[1]  
    
      // Create a color scale for each type of fuel
      const color = d3.scaleOrdinal()
        .domain(data.map(d => d.myPrimaryFuel))
        .range(d3.schemePaired);

       
      // Add a scale for bubble size for capacity of energy in mw
      const valueExtent = d3.extent(data, d => d.capacityMw);
      const size = d3.scaleSqrt()
        .domain(valueExtent)  
        .range([ 1, 40]);  

      // Draw the map
      svg.append("g")
          .selectAll("path")
          .data(dataGeo.features)
          .join("path")
            .attr("fill", "#b8b8b8")
            .attr("d", d3.geoPath()
                .projection(projection)
            )
          .style("stroke", "#737373")
          .style("stroke-opacity", .2)
          .style("opacity", .3);

        
      // Add circles
      svg
        .selectAll("myCircles")
        .data(data)
        .join("circle")
          
          //scaling and drawing the circles 
          .attr("cx", function (d) {
            coords = projection([d.longitude, d.latitude]) 
            return coords[0];
          })
          .attr("cy", function (d) {
            coords = projection([d.longitude, d.latitude]) 
            return coords[1];
          })
          
          .attr("r", function (d) {
            capacities = [d.capacityMw/1000]
            return capacities;
          })

          //create function coloring circles for each type of fuel
          .style("fill", function (d) {
            if (d.primaryFuel == "Hydro"){
            couleur = "DarkBlue"
            } else if (d.primaryFuel == "Oil") { 
              couleur = "pink"
            } else if (d.primaryFuel == "Gas") { 
              couleur = "purple"
            } else if (d.primaryFuel == "Coal") { 
              couleur = "black" 
            } else if (d.primaryFuel == "Wind") { 
              couleur = "Cyan"
            } else if (d.primaryFuel == "Biomass") { 
              couleur = "DarkOliveGreen"
            } else if (d.primaryFuel == "Solar") { 
              couleur = "Yellow"
            } else if (d.primaryFuel == "Nuclear") { 
              couleur = "Orange"
            } else if (d.primaryFuel == "Geothermal") { 
              couleur = "green"  
            } else  {return "none"}
            return couleur;
          })
          .attr("fill-opacity", .4);

        
      

        // Handmade legend
        //looks really ugly, isn't practical to use
        //should have used another method like the function above
        svg.append('circle').attr('cx', 180).attr('cy', 317).attr('r', 5).style('fill', 'DarkOliveGreen').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 329).attr('r', 5).style('fill', 'DarkBlue').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 341).attr('r', 5).style('fill', 'Cyan').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 353).attr('r', 5).style('fill', 'green').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 365).attr('r', 5).style('fill', 'yellow').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 378).attr('r', 5).style('fill', 'orange').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 391).attr('r', 5).style('fill', 'pink').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 403).attr('r', 5).style('fill', 'purple').attr("fill-opacity", .4);
        svg.append('circle').attr('cx', 180).attr('cy', 416).attr('r', 5).style('fill', 'black').attr("fill-opacity", .4);

        svg.append('text').attr('x', 190).attr('y',320).text('Biomass').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',333).text('Hydro').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',345).text('Wind').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',357).text('Geothermal').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',370).text('Solar').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',382).text('Nuclear').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',394).text('Oil').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',406).text('Gas').style('font-size','10px');
        svg.append('text').attr('x', 190).attr('y',419).text('Coal').style('font-size','10px');

      
    })
      
    

