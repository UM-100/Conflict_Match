

var keyboard_conflict = "stimu/StroopColorsKeyboard3.png";


var Check_permission = [
     '<p>您好，欢迎参加本次实验。<br/>\
     为充分保障您的权利，请确保你已经知晓并同意《参与实验同意书》以及《数据公开知情同意书》。<br/>\
     如果你未见过上述内容，请咨询实验员。<br/>\
     如果您选择继续实验，则表示您已经清楚两份知情同意书的内容并同意。<br/>\
     点击继续进入下页。</p>'];

var ColorWordInstrText = [
      '<p>接下来，屏幕中间会出现一个单词。您需要判断该单词是用什么颜色呈现的（而不是这个单词的含义）。<br/>\
	  请根据下方图片所示，按下颜色对应的按键</p><img src="' + keyboard_conflict + '"></img>',
      '<p>在进入正式实验之前，你将进行练习。在此部分，我们将会向您告知判断是否准确。</p>',
	  '<p>如果你明白了规则，请点击继续，开始练习。</p>',];

var ColorWordInstrPoorPerformanceText = ['<p>您没有通过练习</p> <p>请又快又准地进行按键反应。</p>'];

var ColorWordTestInstrText = ['<p>现在您将进入正式实验，并且没有任何反馈。请又快又准地进行按键反应。</p>'];


var ColorWordThankYouText = '感谢您的参与，本次实验结束。'

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['c','v','b','n','m',27] //escape = 27 in javascript-keycode-list-keypress-event-key-codes

var FeedbackLength = 400; // This is in milliseconds

//var FixationLength = 500; // This is in milliseconds


var ColorWordPracticeRepeats = 1


// Since there are 25 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 1


function PutIntoTable(top='top', middle='mid', width=600, height=250, img_path=keyboard_conflict) {
   return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'">'+
          '<td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'">'+
          '<td valign="bottom"><img src="'+ keyboard_conflict +'"></td></tr></table>';
 }



/* ========================================================= 
	This is the stimuli list for stroop color/word - Conflict
*/
var StroopColorWordList_C = [
 {
   "Word": "红色",
   "Congruency": "Con",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "红色",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Incon",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Con",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "绿色",
   "Congruency": "Incon",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "绿色",
   "Congruency": "Con",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "棕色",
   "Congruency": "Incon",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "棕色",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Con",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Incon",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "紫色",
   "Congruency": "Incon",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Incon",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "紫色",
   "Congruency": "Incon",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Incon",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Con",
   "letter": "m",
   "Color": "(128,0,255)"
 }
];


/* ========================================================= 
	This is the stimuli list for stroop color/word - Match/Mismatch
*/
var StroopColorWordList_M = [
 {
   "Word": "红色",
   "Congruency": "Match",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Mismatch",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "红色",
   "Congruency": "Mismatch",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Mismatch",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "红色",
   "Congruency": "Mismatch",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Mismatch",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Match",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Mismatch",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Mismatch",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "蓝色",
   "Congruency": "Mismatch",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "绿色",
   "Congruency": "Mismatch",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Mismatch",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "绿色",
   "Congruency": "Match",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Mismatch",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "绿色",
   "Congruency": "Mismatch",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "棕色",
   "Congruency": "Mismatch",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Mismatch",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "棕色",
   "Congruency": "Mismatch",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Match",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "棕色",
   "Congruency": "Mismatch",
   "letter": "m",
   "Color": "(128,0,255)"
 },
 {
   "Word": "紫色",
   "Congruency": "Mismatch",
   "letter": "c",
   "Color": "(255,0,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Mismatch",
   "letter": "v",
   "Color": "(0,0,255)"
 },
 {
   "Word": "紫色",
   "Congruency": "Mismatch",
   "letter": "b",
   "Color": "(0,128,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Mismatch",
   "letter": "n",
   "Color": "(150,75,0)"
 },
 {
   "Word": "紫色",
   "Congruency": "Match",
   "letter": "m",
   "Color": "(128,0,255)"
 }
];