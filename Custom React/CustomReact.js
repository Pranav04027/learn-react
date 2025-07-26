//Creating a method to insert or render

/*function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute ('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}*/

//Better Function, this is also how react actually works

function customRender(reactElement, Container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}


// React sees things like this, an object.
const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

/*
How react's Object structure Looks:

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com, target: "_blank"},
    'click to visit google'
)
*/

//Get the Place you want to insert things
const mainContainer = document.getElementById('root')


customRender(reactElement, mainContainer)