/* It only has the editable code not the whole code including html and css */

// Active learning 1

let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i > 0; i--) {
const para = document.createElement('p');
if (i === 10){
    para.textContent = `Countdown ${i}`;
} else if (i === 1){
para.textContent = 'Blast off!';
} else {
    para.textContent = i;
} output.appendChild(para);
} 

/* 
Countdown 10
9
8
7
6
5
4
3
2
Blast off! 
*/


// Active learning 2

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let i = 0; i < people.length; i++){
    if (people[i] === 'Phil' || people[i] === 'Lola'){
        refused.textContent += `${people[i]}, `;
    } else {
        admitted.textContent += `${people[i]}, `;
    } 
} 

admitted.textContent = admitted.textContent.slice(0, -2);

refused.textContent = refused.textContent.slice(0, -2);

/* This bit is to remove ', ' at the end of the string. The sliced string starts from '0' and to the last third character. The index number of second parameter of .slice() method does not get included */