// <!--В index.html-->
// <!--1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users-->
// <!--2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.-->
// <!--3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули-->
let container = document.createElement('div')
container.id = 'container'
document.body.append(container)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(item => item.json())
    .then(item => {
        item.forEach((param, index) => {
            let user = document.createElement('div')
            user.id = 'containerUser'
            container.append(user)
            let userId = document.createElement('div')
            let userName = document.createElement('div')
            let userContent=document.createElement('div')
            userContent.id='userContent'
            let userButton = document.createElement('button')
            let userDetails = document.createElement('a');
            userDetails.appendChild(document.createTextNode('user_details'));
            userDetails.href = 'user-details.html'
            userButton.append(userDetails)
            userId.innerText = `${param.id}`
            userName.innerText = `${param.name}`
            user.append(userContent, userButton)
            userContent.append(userId,userName)
            userButton.onclick = () => {
                let usersNew = []
                usersNew.push(item[index])
                let string = JSON.stringify(usersNew)
                localStorage.setItem('usersNew', string)
            }
        })
    })