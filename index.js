var madLib = $('.message');
var sportsSubmitBtn = $('.submitBtn');
var entertainmentSubmitBtn = $('.entertainmentSubmitBtn');
var environmentSubmitBtn = $('.environmentSubmitBtn');

sportsSubmitBtn.on('click', generateSportsMadLib);
entertainmentSubmitBtn.on('click', generateEntertainmentMadLib);
environmentSubmitBtn.on('click', generateEnvironmentMadLib);

function generateSportsMadLib(event) {
  event.preventDefault();
  var prompt1 = $('.prompt1').val();
  var prompt2 = $('.prompt2').val();
  var prompt3 = $('.prompt3').val();
  var prompt4 = $('.prompt4').val();
  var prompt5 = $('.prompt5').val();
  var prompt6 = $('.prompt6').val();
  var prompt7 = $('.prompt7').val();
  var prompt8 = $('.prompt8').val();
  var prompt9 = $('.prompt9').val();
  var prompt10 = $('.prompt10').val();
  var prompt11 = $('.prompt11').val();
  var prompt12 = $('.prompt12').val();
  var prompt13 = $('.prompt13').val();
  var prompt14 = $('.prompt14').val();
  var prompt15 = $('.prompt15').val();
  var prompt16 = $('.prompt16').val();
  var prompt17 = $('.prompt17').val();
  var prompt18 = $('.prompt18').val();
  var prompt19 = $('.prompt19').val();
  var prompt20 = $('.prompt20').val();

  madLib.text(`Nothing beats a game of ${prompt1} on a ${prompt2} ${prompt3} day. Fans dress in their teams ${prompt4} and wave ${prompt5} to show their support. Before the game, players will ${prompt6} with fans and autograph ${prompt7} for them. It is a tradition to eat a ${prompt8} or ${prompt9} at ${prompt10} games. When a team scores a ${prompt11}, fans will ${prompt12} and ${prompt13} ${prompt14}. If you are ${prompt15}, you can catch a flying ${prompt16}. Gift shops sell souvenirs, like ${prompt17} ${prompt18} and ${prompt19} to remember a ${prompt20} day at the game.`);
}

function generateEntertainmentMadLib(event) {
  event.preventDefault();
  var prompt1 = $('.prompt1').val();
  var prompt2 = $('.prompt2').val();
  var prompt3 = $('.prompt3').val();
  var prompt4 = $('.prompt4').val();
  var prompt5 = $('.prompt5').val();
  var prompt6 = $('.prompt6').val();
  var prompt7 = $('.prompt7').val();
  var prompt8 = $('.prompt8').val();
  var prompt9 = $('.prompt9').val();
  var prompt10 = $('.prompt10').val();
  var prompt11 = $('.prompt11').val();
  var prompt12 = $('.prompt12').val();
  var prompt13 = $('.prompt13').val();
  var prompt14 = $('.prompt14').val();
  var prompt15 = $('.prompt15').val();
  var prompt16 = $('.prompt16').val();

  madLib.text(`Chewbacca is a Wookie from the planet ${prompt1}. He is more than ${prompt2} feet tall and ${prompt3} years old, with ${prompt4} fur covering his ${prompt5}. Wookies do not ${prompt6} like humans; they make ${prompt7} noises instead. They are ${prompt8} ${prompt9} and know how to ${prompt10} and ${prompt11}. Chewie is Han Solo's ${prompt12} friend and co-pilot of his ${prompt13} ship, the ${prompt14} Falcon. Together, they helped The ${prompt15} Alliance ${prompt16} the Empire.`);
}

function generateEnvironmentMadLib(event) {
  event.preventDefault();
  var prompt1 = $('.prompt1').val();
  var prompt2 = $('.prompt2').val();
  var prompt3 = $('.prompt3').val();
  var prompt4 = $('.prompt4').val();
  var prompt5 = $('.prompt5').val();
  var prompt6 = $('.prompt6').val();
  var prompt7 = $('.prompt7').val();
  var prompt8 = $('.prompt8').val();
  var prompt9 = $('.prompt9').val();
  var prompt10 = $('.prompt10').val();
  var prompt11 = $('.prompt11').val();
  var prompt12 = $('.prompt12').val();
  var prompt13 = $('.prompt13').val();
  var prompt14 = $('.prompt14').val();
  var prompt15 = $('.prompt15').val();

  madLib.text(`Recycling is a ${prompt1} habit, because it helps ${prompt2} our planet ${prompt3}. Recycling is important to keep landfills -- places where ${prompt4} is stored after we ${prompt5} it away -- from becoming too ${prompt6}. Not all items can be recycled, but ${prompt7}, ${prompt8}, and ${prompt9} are the most common. Many ${prompt10} allow people to ${prompt11} these items in special ${prompt12} to be recycled. If everyone ${prompt13}s in and recycles, this will mean less ${prompt14} and a better ${prompt15} for everyone.`);
}
