



const header2 = document.createElement("h1");
header2.innerText = "This is created using js"

root.append(header2)



const React = {
    createElement: function(tag, value) {
        const element = document.createElement(tag)
        element.innerText = value
        return element;
    },
}


const ReactDOM = {
    render: function(element) {
        const root = document.getElementById('root');
        root.append(element);
    },
}

const header3 = React.createElement("h1", "This is created using React")

ReactDOM.render(header3)