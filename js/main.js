'user strict';

function showAd(message = 'Ad') {
  console.log('----------')
  console.log(`----${message}----`)
  console.log('----------')
}

showAd('Header Ad');
console.log('Tom is great!')
console.log('Bob is great!')
// showAd('Ad');
showAd();
console.log('Steve is great!')
console.log('Richard is great!')
showAd('Footer Ad');