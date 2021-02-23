// import as_ from 'lodash';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Typescript'], '');
    return element;
}

document.body.appendChild(component());