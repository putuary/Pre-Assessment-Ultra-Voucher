function selectionShort(str) {
    for (let i = 0; i < str.length-1; i++) {
        let i_min = i;
        for (let j = i+1; j < str.length; j++) {
            if(str[i_min] > str[j]) {
                i_min=j;
            }
        }
        let temp=str[i_min];
        str[i_min]=str[i];
        str[i]=temp;
    }
    return str;
}



function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const char1=str1.toLowerCase().split('');
    const char2=str2.toLowerCase().split('');

    charStr1=selectionShort(char1);
    charStr2=selectionShort(char2);

    for (let i = 0; i < charStr1.length; i++) {
        if(charStr1[i] != charStr2[i]) {
            return false
        }
    }
    return true;
}

function anagramCategory(arr) {
    const result = [];
    while (arr.length > 0) {
        const temp = [arr[0]];
        arr.splice(0, 1);
        for (let i = 0; i < arr.length; i++) {
            if (isAnagram(temp[0], arr[i])) {
                temp.push(arr[i]);
                arr.splice(i, 1);
                i--;
            }
        }
        result.push(temp);
    }
    return result;
}



array=['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(anagramCategory(array));