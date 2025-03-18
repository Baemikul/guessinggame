document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.grid-button');
    
    if (button) {
      button.addEventListener('click', function() {
        console.log('Button clicked!');  // Logs when the button is clicked
    
        const gridItems = document.querySelectorAll('.grid-item');
    
        // Colors for grid items
        const colors = [
          '#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#DA70D6', '#FF1493', '#FFD700', '#008080', '#8A2BE2', '#A52A2A',
          '#5F9EA0', '#D2691E', '#FF4500', '#2E8B57', '#6A5ACD', '#FF6347', '#FF1493', '#20B2AA', '#9370DB', '#FFD700', 
          '#D3D3D3', '#00BFFF', '#98FB98', '#8B0000', '#A52A2A', '#FFFF00', '#DDA0DD', '#ADFF2F', '#FF8C00', '#FF4500',
          '#B22222', '#8A2BE2', '#FF69B4', '#F08080', '#90EE90', '#DAA520', '#F4A460', '#C71585', '#C0C0C0', '#FF00FF',
          '#800080', '#7FFF00', '#DC143C', '#00008B', '#228B22', '#808000', '#D2691E', '#FF6347', '#8B4513', '#8B0000'
        ];
    
        // Reset borders of all grid items before applying new ones
        gridItems.forEach(item => {
          item.style.border = '1px solid #ccc';  // Reset the border
        });
  
        // Shuffle the colors many times
        let shuffleInterval = setInterval(() => {
          gridItems.forEach(item => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            item.style.backgroundColor = randomColor;
          });
        }, 100);  // Shuffle every 100ms
    
        // Stop the shuffle after 2.5 seconds
        setTimeout(() => {
          clearInterval(shuffleInterval);
    
          // Select a random grid item and apply a final color and border
          const randomIndex = Math.floor(Math.random() * gridItems.length);
          gridItems[randomIndex].style.backgroundColor = '#FF6347';  // Chosen color (tomato red)
    
          // Highlight the chosen grid item with a border
          // gridItems[randomIndex].style.border = '2px solid #000';

          let InputBox = document.querySelector('#input-box') 
          console.log("input: ", InputBox.value)
          if(InputBox.value == gridItems[randomIndex].textContent) {
            Swal.fire({
              icon: "success",
              title: "Congratulations!",
              text: `You got: ${gridItems[randomIndex].textContent}`,
            });
            
          }else{
            Swal.fire({
              icon: "error",
              title: "Better Luck Next Time!",
              text: `You lose! The winning number is: ${gridItems[randomIndex].textContent}`,
            });
          }

          // alert(`Congratulations! You got: ${gridItems[randomIndex].textContent}`);
        }, 2500);  // Shuffle for 2.5 seconds
        
      });
    } else {
      console.log('Button not found!');
    }
  });
  

  document.getElementById('num1').addEventListener('click', function(){
    document.getElementById('input-box').value=1
  })
  document.getElementById('num2').addEventListener('click', function(){
    document.getElementById('input-box').value=2
  })
  document.getElementById('num3').addEventListener('click', function(){
    document.getElementById('input-box').value=3
  })
  document.getElementById('num4').addEventListener('click', function(){
    document.getElementById('input-box').value=4
  })
  document.getElementById('num5').addEventListener('click', function(){
    document.getElementById('input-box').value=5
  })
  document.getElementById('num6').addEventListener('click', function(){
    document.getElementById('input-box').value=6
  })
  document.getElementById('num7').addEventListener('click', function(){
    document.getElementById('input-box').value=7
  })
  document.getElementById('num8').addEventListener('click', function(){
    document.getElementById('input-box').value=8
  })
  document.getElementById('num9').addEventListener('click', function(){
    document.getElementById('input-box').value=9
  })
  document.getElementById('num10').addEventListener('click', function(){
    document.getElementById('input-box').value=10
  })
  document.getElementById('num11').addEventListener('click', function(){
    document.getElementById('input-box').value=11
  })
  document.getElementById('num12').addEventListener('click', function(){
    document.getElementById('input-box').value=12
  })
  document.getElementById('num13').addEventListener('click', function(){
    document.getElementById('input-box').value=13
  })
  document.getElementById('num14').addEventListener('click', function(){
    document.getElementById('input-box').value=14
  })
  document.getElementById('num15').addEventListener('click', function(){
    document.getElementById('input-box').value=15
  })