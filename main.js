'use strict';

function getDogImage() {
    const numOfImages = {userInput: $('.numOfPictures')};
    fetch('https://dog.ceo/api/breeds/image/random/', numOfImages)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});