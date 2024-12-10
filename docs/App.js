
const generateBtn = document.querySelector('form button');
const QRcodebox = document.querySelector('.img-qrcode');
const QRcodeinput = document.querySelector('form input');
const QRcodeimage = document.querySelector('.img-qrcode img'); 

generateBtn.addEventListener('click', ()=>{
let qrvalue = QRcodeinput.value;
if(!qrvalue){
    return alert ('Enter a text or an internet address and I  give you  QR code')
}

generateBtn.innerHTML = 'Receiving QR code...';
QRcodeimage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue} `;
QRcodeimage.addEventListener('load' , ()=>{
    QRcodebox.classList.remove('hidden');
    generateBtn.innerHTML = 'QR code producer';
})

QRcodeinput.addEventListener('keyup' , ()=>{
    if(!QRcodeinput.value){

        QRcodebox.classList.add('hidden');
    }
})
 
})