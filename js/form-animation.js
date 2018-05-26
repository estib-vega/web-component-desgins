function handleNextClick(index){
    console.log('pressed next in step ' + index);
    var card = document.getElementById('card_'+ index);
    card.classList.add('card-animate-out');

    // get next 
    const nexti = (index + 1);

    var nextCard = document.getElementById('card_' + nexti);
    if(nextCard){
        nextCard.style.display = "block";
        nextCard.classList.add('card-animate-in')

        // change page status
        document.getElementById('p_' + index).style.backgroundColor = "#bbb";
        document.getElementById('p_' + nexti).style.backgroundColor = "#333";
    }
    else{
        // show end message
        document.getElementById('end_message').style.opacity = "1";
    }
    
    


}