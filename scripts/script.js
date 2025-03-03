document.getElementById('q.page-login-btn')
.addEventListener('click', function(){
    window.location.href = './question.html'
})

// Complete button working process

    const valuesOfBtn = document.querySelectorAll('.complete-btn')

    const numberUpadte = document.getElementById('number-update')

let buttonLength = valuesOfBtn.length
numberUpadte.innerText = buttonLength

const navNumBtn = document.getElementById('nav-num-btn')
let completedTasks = 0

const cardContainer = document.getElementById('card-container')
const cardHeading = cardContainer.querySelectorAll('h1')
console.log(cardHeading[0].innerText)

const activityLogList = document.getElementById('activity-loglist')

document.getElementById('activity-clear')
.addEventListener('click', function(){
    activityLogList.innerHTML = ''
})

let array = ['bg-green-200', 'bg-brown-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-grey-200', 'bg-amber-200', 'bg-emerald-200']
document.getElementById('theme-btn')
.addEventListener('click', function(){
    const numOfColor = Math. floor(Math. random()*8) + 1
    const bodyTheme = document.getElementById('theme-color-btn')
    bodyTheme.classList= `${array[numOfColor]} poppins-thin`
})

for(let i=0; i< valuesOfBtn.length; i++)
{
    valuesOfBtn[i].addEventListener('click', function(e){
        e.target.setAttribute('disabled', true)
        alert('Board updated Successfully')
        numberUpadte.innerText = --buttonLength
        navNumBtn.innerText = ++completedTasks
        
        const dateMonth = new Date()
        const p = document.createElement('p')
        p.classList = 'bg-[#F4F7FF] rounded-2xl'
        const text = `You have completed the task ${cardHeading[i].innerText} at ${dateMonth.getHours()}: ${dateMonth.getMinutes()}: ${dateMonth.getSeconds()}`
        p.innerText = text
        activityLogList.appendChild(p)

        if(buttonLength ==0)
        {
            alert('All the tasks completed Successfully!')
        }
    })
}