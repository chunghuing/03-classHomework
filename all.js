//功能一：乘法表
function f1 () {
    var str="";
    for (let i = 3; i <= 15; i++) {
        str += "<div id='d2'>";
        for (let j = 1; j <= 15; j++) {
            str += "<div>";
            str += i+"*"+j+"="+i*j;
            str += "</div>";
        }
        str += "<br/></div><br/>";
    }
    document.getElementById("d1").innerHTML=str;
}

//功能二：BMI 函式

//BMI = 體重(公斤) / (身高(公尺) x 身高(公尺))

//思考流程：
//1.取出 按鈕 input 關於身高和體重的值，然後再利用 公式 算出 BMI在畫面上印出結果。
//2.根據 BMI 數值 判斷 BMI 標準 在畫面上印出結果。
//3.製作一個按鈕可以清空輸入值
//4.當輸入值是空白時，按下計算時會跑出 視窗提醒要輸入身高體重（防呆機制）


//宣告DOM
//1. 找出計算和清空按鈕(事件點擊按鈕)
let btn = document.querySelector('.calcualteBMI'); //計算的按鈕
let reset = document.querySelector('.reset'); //重新整理按鈕
//事件點擊鍵盤
const inputk = document.querySelectorAll('input');

//2. 印出文字的 DOM
let bmiText = document.querySelector('#bmiText');

//3. 印出文字的 DOM 先隱藏 display:none;
bmiText.style.display = "none";

//監聽(使用者點擊了計算，取出身高和體重的值，並把它印出來)
btn.addEventListener('click', calculateBMI);


//把 input 取出值，來做一個 function calculateBMI(){}
function calculateBMI() {
  //體重值
  let bodyWeight = document.querySelector('.bodyWeight').value;
  //身高值
  let bodyHeight = document.querySelector('.bodyHeight').value;
  //計算出BMI值
  let resultText = document.querySelector('#resultText');
  //印出BMI標準
  let bmiText = document.querySelector('#bmiText');

  //防呆機制
  //當使用者沒有輸入數字時會跳出視窗提示，並不會在介面印出畫面把他放入在    calculateBMI()。
  if ((bodyWeight != "") && (bodyHeight != "")) {

    //bmi標準可畫面顯示
    bmiText.style.display = "block";
    //計算結果
    resultText.innerHTML = bmi(bodyWeight, bodyHeight);
    //BMI標準計算結果
    bmiText.innerHTML = checkBMI(bmi(bodyWeight, bodyHeight));

  } else {

    bmiText.style.display = "none";
    alert('請輸入身高體重！');
    return;

  }

}

//計算BMI
//因為抓出來的值都是 value 是文字，我們需要把它變成數字使用 parseInt() 變成整數。//因為公分要轉公尺，記得身高要除以100。
//因為得出來的值，產生很多小數，使用toFixed(2) 讓小數點4捨5入只有2位。
function bmi(weight, height) {
  let w = parseInt(weight);
  let h = parseInt(height) / 100;
  let bmi = (w / (h * h)).toFixed(2);
  return bmi; //回傳結果
}

//判斷BMI標準
//建立一個 叫做 checkBMI 的 funciton ，
//使用 if...else 來做判斷，裡面要放入參數才能判斷。這個參數就是變數的意思，由前面的計算 BMI 公式 bmi(bodyWeight,bodyHeight）取得。

function checkBMI(bmi) {
  if (bmi < 18.5) {
    return '太輕了';
  } else if (bmi >= 18.5 && bmi < 24) {
    return '體重正常';
  } else if (bmi >= 24 && bmi < 27) {
    return '過重';
  } else if (bmi >= 27 && bmi < 30) {
    return '輕度肥胖';
  } else if (bmi >= 30 && bmi < 35) {
    return '中度肥胖';
  } else if (bmi >= 35) {
    return '重度肥胖';
  }
}


//清空值
//製作一個按鈕 reset 可以使輸入值都變歸零，
//並不會影響到畫面把他放入一個叫做 undo 的 function。
function undo(e) {
  document.querySelector('.bodyWeight').value = '';
  document.querySelector('.bodyHeight').value = '';
  bmiText.style.display = 'none';
  resultText.innerHTML = 0;
  return
}

//事件監聽
reset.addEventListener('click', undo);