fetch('https://api.lyrics.ovh/v1/Billie Eilish/Getting older')
  .then(response => response.json())
  .then(data => 
  {
    console.log(data);
    document.getElementById("L-letra").innerHTML = data.lyrics;

  })
  .catch(error => console.error('Error:', error));