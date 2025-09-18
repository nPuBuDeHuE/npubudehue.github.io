console.log('hello');
// let runLine = document.querySelector('.run_line');
// //console
// for (let i = 0; i < 50; i++){
//     runLine.style.transform = 'translateX(-' + i + 'px)';
// }

let membersCollection = document.getElementsByClassName('member_card');
let membersElem = document.querySelector('.members_cards');
let turnButton = document.querySelector('.member_turn');
const membersCount = membersCollection.length ;
let memberCount = 3; // Сколько карточек одновременно показываем на десктопной версии
let currentMemberCount = memberCount;

turnButton.addEventListener('click', (elem) => {
    let member; 
    let target = elem.target;

    if (target.classList.contains('turn_right') || target.classList.contains('sign_right')){
        if (currentMemberCount < membersCount){
            currentMemberCount++;
            member = membersCollection[0];
            membersElem.append(member);
            document.querySelector('.member_count__num').textContent = currentMemberCount;
        }
    }
    if (target.classList.contains('turn_left') || target.classList.contains('sign_left')){
        if (currentMemberCount > (membersCount - memberCount)){
            currentMemberCount--;
            member = membersCollection[membersCollection.length-1];
            membersElem.prepend(member);
            document.querySelector('.member_count__num').textContent = currentMemberCount;
        }
    }
    
});