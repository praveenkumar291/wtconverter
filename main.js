document.getElementById('output').style.visibility="hidden";

document.getElementById('lbsInput').addEventListener('input', function (e) {
// console.log('1,2,3')
  let lbs = e.target.value;
document.getElementById('output').style.visibility="visible";

  document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
  document.getElementById('KgOutput').innerHTML = lbs / 2.2046;
  document.getElementById('ozOutput').innerHTML = lbs *16;



});
