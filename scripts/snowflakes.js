  function snowflakesF () {
    snowflakes = document.getElementById('snowflakes');
    for (var i = 0; i < 150; i++) {
      x = document.createElement('div');
      x.classList.add('snowflake');
      x.textContent = '❅';
      x.style.fontSize = Math.floor(Math.random() * 40) + 'px';
      x.style.marginTop = Math.floor(Math.random() * 200) + 'vh';
      x.style.opacity = Math.random() * 1;
      snowflakes.appendChild(x);
    }
  }
  snowflakesF();

  let snow = 0;
  snowBTN = document.getElementById('snowButton');
  snowBTN.addEventListener('click', function click () {
    if (snow == 0){
      snowflakes.innerHTML = ' ';
      snow=1;
    }else{
      snowflakesF();
      snow=0;
    }
    console.log(i);
  });