const messages = document.getElementById('messages')
const inputText = document.getElementById('text')
const button = document.getElementById('btn')
button.addEventListener('click', (e)=>{
    const createdDiv =  document.createElement('div')
    createdDiv.classList.add('sended')
    const createdText = document.createElement('div')
    createdText.classList.add('s-text')
    const createdProfile = document.createElement('div')
    createdProfile.classList.add('s-profile')
    const createdP = document.createElement('p')
    createdP.textContent = inputText.value
    createdText.append(createdP)
    createdDiv.append(createdText)
    createdDiv.append(createdProfile)
    messages.append(createdDiv)
    inputText.value = ''
    setTimeout(generateReply, 1000)
    function generateReply(){
        const ReplyDiv = document.createElement('div')
        ReplyDiv.classList.add('received')
        const ReplyProfile = document.createElement('div')
        ReplyProfile.classList.add('r-profile')
        const ReplyText = document.createElement('div')
        ReplyText.classList.add('r-text')
        const Reply = document.createElement('p')
        Reply.classList.add('reply')
        // Replies
        if(createdP.textContent =='Salom' || createdP.textContent=="salom"){
            Reply.textContent = 'Salom. Sizga qanday yordam bera olaman?'
        }
        else if(createdP.textContent =="Siz kimsiz?" || createdP.textContent=="Sen kimsan?" || createdP.textContent=='siz kimsiz?' || createdP.textContent=="sen kimsan?"||createdP.textContent =="Siz kimsiz" || createdP.textContent=="Sen kimsan" || createdP.textContent=='siz kimsiz'||createdP.textContent=="sen kimsan"){
            Reply.textContent = "Men Maxamadinov Elyorbek tomonidan yaratilgan botman sizning yordamchingiz."
        }
        else if(createdP.textContent=="YouTube"|| createdP.textContent=="youtube" || createdP.textContent=="Menga YouTube linkini tashlab ber"){
            Reply.innerHTML = `Mana <a href="https://www.youtube.com" target="_blank" >YouTube</a>. Yordam berganimdan xursandman.`
        }
        else if(createdP.textContent=="Instagram"|| createdP.textContent=="instagram" || createdP.textContent=="Menga Instagram linkini tashlab ber"){
            Reply.innerHTML = `Mana <a href="https://www.instagram.com" target="_blank" >Instagram</a>. Yordam berganimdan xursandman.`
        }
        else if(createdP.textContent=="Twitter"|| createdP.textContent=="twitter" || createdP.textContent=="Menga Twitter linkini tashlab ber"){
            Reply.innerHTML = `Mana <a href="https://www.youtube.com" target="_blank" >Twitter</a>. Yordam berganimdan xursandman.`
        }
        else if(createdP.textContent == ''){
            Reply.textContent = "???"
        }
        else if(createdP.textContent == "Qalesan" || createdP.textContent=="qalesan"){
            Reply.textContent = "Yaxshi, o'zingizchi?"
        }
        else if(createdP.textContent =="yaxshi" || createdP.textContent =="men ham yaxshiman"|| createdP.textContent=="men yaxshiman"){
            Reply.textContent = "Xursandman. Boshqa savolingiz yo'qmi?"
        }
        else if(createdP.textContent =="yomon"|| createdP.textContent=="men yomonman"){
            Reply.textContent = "Battar bo'ling"
        }
        else{
            Reply.textContent = "Uzr, men bunday so'rovga javob bera olmayman."
        }
        
        ReplyText.append(Reply)
        ReplyDiv.append(ReplyProfile)
        ReplyDiv.append(ReplyText)
        messages.append(ReplyDiv)
        scrollTo(0, 1000000)
    }
})