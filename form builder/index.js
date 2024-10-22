const fieldType=document.querySelector('#field-type');
const addBtn=document.querySelector('.btn');
const previewArea=document.querySelector('.preview-area');

function addField(){
    let fieldTypeValue=fieldType.value;
  
    let newField;
    switch(fieldTypeValue){
        case 'text':
            newField=document.createElement('input');
            newField.type='text'; 
            newField.placeholder='enter the text';
            newField.classList.add('btn');
            break;
        case 'submit':
            newField=document.createElement('button');
            newField.type='button'; 
            newField.textContent='Button';
            newField.classList.add('btn');
            break;
        case 'checkbox':
            newField=document.createElement('input');
            newField.type='checkbox'; 
            newField.name='fav_chackbox';
            label=document.createElement('label');
            label.textContent='checkbox Element';
            newField.classList.add('btn');
            previewArea.appendChild(newField);
            previewArea.appendChild(label);
            previewArea.appendChild(document.createElement('br'));
            return;
        case 'radio':
            newField=document.createElement('input');
            newField.type='radio';
            newField.name='fav_radiobox'; 
            label=document.createElement('label');
            label.textContent='Radio button Element';
            newField.classList.add('btn');
            previewArea.appendChild(newField);
            previewArea.appendChild(label);
            previewArea.appendChild(document.createElement('br'));
            return;
        case 'button': 
            newField=document.createElement('input');
            newField.type='button'; 
            label=document.createElement('label');
            label.textContent=' button Element';
            previewArea.appendChild(newField);
            previewArea.appendChild(label);
            newField.classList.add('btn');
            previewArea.appendChild(document.createElement('br'));
        return;

    }
    previewArea.appendChild(newField);
    previewArea.appendChild(document.createElement('br'));
    
}
addBtn.addEventListener('click',addField);
