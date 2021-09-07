
function checkMagazine(magazine, note) {
    // Write your code here
    for(let i =0;i<note.length;i++){
        let index = magazine.indexOf(note[i]);
        if(index === -1)
            return 'No'

        magazine[index] = '';
    }
    return 'Yes';

}

let m= ['ive','got','a','lovely','bunch','of','coconuts'],
    n=['ive','got','got','coconuts'];
console.log(checkMagazine(m,n));