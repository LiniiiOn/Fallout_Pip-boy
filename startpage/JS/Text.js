let text = `jkewhdjkwehgfdskdjfkwyeihlkkhlk
            sdlkfhsdjkfhsjkdhfksdhfhksd
            sdflksdkfhsdkfn`
let p = document.querySelector('#text');
let cursor = document.createElement('span');
cursor.textContent='';
let text1='';   
let input=(i)=>{
    setTimeout(()=>{
        text1+=text[i];
        p.textContent=text1;
        p.append(cursor)
    },20*i)
}    
for (let i = 0; i < text.length-1; i++) {
    input(i)
}     