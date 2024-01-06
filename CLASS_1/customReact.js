function customRender(reactContainer, container){
    const domElement = document.createElement
    (reactContainer.type)
    domElement.innerHTML = reactContainer.children
    domElement.setAttribute('href', reactContainer.props.href)
    domElement.setAttribute('target', reactContainer.props.target)

    container.appendChild(domElement)

}
// 02:08:34
const reactContainer = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'},
    children: 'Click me to visit site'

}

const container = document.getElementById('root')

customRender(reactContainer, container)