const el = document.querySelector('#carouselAbout');
el.addEventListener('mouseover', makeBlue);
el.addEventListener('mouseout', makeYellow);
function makeBlue() {
    el.textContent = 'Find out about our Mission';
}
function makeYellow() {
    el.textContent = 'About';
}
const local = document.querySelector('#carouselLocal');
local.addEventListener('mouseover', localChange);
local.addEventListener('mouseout', localOriginal);
function localChange() {
    local.textContent = 'Learn about our Local Farmers';
}
function localOriginal() {
    local.textContent = 'Local';
}
const events = document.querySelector('#carouselEvents');
events.addEventListener('mouseover', eventChange);
events.addEventListener('mouseout', eventOriginal);
function eventChange() {
    events.textContent = 'See what we have going on!';
}
function eventOriginal() {
    events.textContent = 'Events';
}
const club = document.querySelector('#carouselClub');
club.addEventListener('mouseover', clubChange);
club.addEventListener('mouseout', clubOriginal);
function clubChange() {
    club.textContent = 'Become a member today!';
}
function clubOriginal() {
    club.textContent = 'Wine Club';
}
const menu = document.querySelector('#carouselMenu');
menu.addEventListener('mouseover', menuChange);
menu.addEventListener('mouseout', menuOriginal);
function menuChange() {
    menu.textContent = 'Take a look at our sample memu';
}
function menuOriginal() {
    menu.textContent = 'Menu';
}

//Used data target instead
// $(function() {
//     $("#existingClubButton").on('click', function () {
//       $("#existingClub").modal('toggle')
//     });
//   })
//  {
//     $("#newClubButton").on('click', function () {
//       $("#newClub").modal('toggle')
//     });
//   })