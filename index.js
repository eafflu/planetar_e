(function(window, _) {
    
  window.planetar_e = window.planetar_e || {
    
    numz:{
      
          
          
      
    },
    phyz:{
      getDistance(pointA, pointB){
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      }
    },
      
  };
  
}(window, window._));