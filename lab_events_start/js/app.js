document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const title = document.querySelector('#title')

  // title.addEventListener('input', () => {
  //   // const formTitleText = document.querySelector('#reading-list')
  //   // formResultText.textContent = `${event.target.value}`
  // })

  const formInput = document.querySelector('#new-item-form')

  formInput.addEventListener('submit', (event) => {
    event.preventDefault()
    const formResultText = document.querySelector('#reading-list')
    const listNode = document.createElement("LI");   
    const title = document.createTextNode(event.target.title.value)
    const author = document.createTextNode(event.target.author.value)
    const category = document.createTextNode(event.target.category.value)
    formResultText.appendChild(listNode)
    const h2Node = document.createElement("h2");
    const h3Node = document.createElement("h3");
    const pNode = document.createElement("p")
    h2Node.appendChild(title)
    h3Node.appendChild(author)
    pNode.appendChild(category)
    listNode.appendChild(h2Node)
    listNode.appendChild(h3Node)
    listNode.appendChild(pNode)    
  })

})
