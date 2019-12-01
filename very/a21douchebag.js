var NumberOfWords = 52
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://discord.gift/xxxıoqw2" 
words[2] = "https://discord.gift/sdfgscxvvv22" 
words[3] = "https://discord.gift/tffk" 
words[4] = "https://discord.gift/zxcczx" 
words[5] = "https://discord.gift/ss3ıvcxlk" 
words[6] = "https://discord.gift/aaxkxaslk43005şix" 
words[7] = "https://discord.gift/cxcxhbhb534" 
words[8] = "https://discord.gift/xx3412FczkXeA" 
words[9] = "https://discord.gift/WE0HAb" 
words[10] = "https://discord.gift/URl5X" 
words[11] = "https://discord.gift/RVTlY14Q" 
words[12] = "https://discord.gift/cv322hZ2h" 
words[13] = "https://discord.gift/wDBa" 
words[14] = "https://discord.gift/hsgWWXY" 
words[15] = "https://discord.gift/Uh49y6" 
words[16] = "https://discord.gift/yjeU2" 
words[17] = "https://discord.gift/3hbflcS2" 
words[18] = "https://discord.gift/lvKvLe" 
words[19] = "https://discord.gift/5Q0ur" 
words[20] = "https://discord.gift/w5q7JqL" 
words[21] = "https://discord.gift/z3412zu4oqd" 
words[22] = "https://discord.gift/oiKK6" 
words[23] = "https://discord.gift/k8D0I" 
words[24] = "https://discord.gift/M7fE1" 
words[25] = "https://discord.gift/knH72HU" 
words[26] = "https://discord.gift/O1MHMKHC" 
words[27] = "https://discord.gift/42ji" 
words[28] = "https://discord.gift/aKTGuVcE" 
words[29] = "https://discord.gift/nI2AA1" 
words[30] = "https://discord.gift/kFQum" 
words[31] = "https://discord.gift/9jjhyH" 
words[32] = "https://discord.gift/MVlQFt" 
words[33] = "https://discord.gift/WzOGYE7" 
words[34] = "https://discord.gift/SewgSP" 
words[35] = "https://discord.gift/wzysw" 
words[36] = "https://discord.gift/YtxPo32" 
words[37] = "https://discord.gift/6Q0D0CFR" 
words[38] = "https://discord.gift/qNgxF" 
words[39] = "https://discord.gift/eLBf6" 
words[40] = "https://discord.gift/KBdDM" 
words[41] = "https://discord.gift/43aahq9jRB" 
words[42] = "https://discord.gift/eIGRhF" 
words[43] = "https://discord.gift/TeRYX" 
words[44] = "https://discord.gift/jNH6MhP" 
words[45] = "https://discord.gift/vzmHjEZy" 
words[46] = "https://discord.gift/34vvcxq0FM" 
words[47] = "https://discord.gift/ZSri2GV7" 
words[48] = "https://discord.gift/uonSc" 
words[49] = "https://discord.gift/nQFf70" 
words[50] = "https://discord.gift/dd2zcUIXG" 
words[51] = "https://discord.gift/WjfSBK" 
words[52] = "https://discord.gift/fldviwsx" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}