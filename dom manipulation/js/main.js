// console.log('hello world')
// const nameUser = prompt('please enter your name');

// console.log(`my name is ${nameUser}`)

const form = document.getElementById('form');
const data = [];
const tableBody=document.getElementById('tableBody')


form.onsubmit = (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input');
  const currentData = {}; // Initialize currentData as an empty object

  for (let input of inputs) {
    if (!input.value) {
      return alert(`The ${input.id} is required`);
    }
    currentData[input.id] = input.value;
  }
  currentData.id = data.length + 1;
  data.push(currentData);

  // Clearing the inputs
  for (let input of inputs) {
    input.value = '';
  }
  console.log(data);
  createTableRows(data)
};

function createTableRows(arr){
    arr.forEach((el)=>{
        const lastElement= data[data.length-1];
        const tr=document.createElement('tr');
        tr.innerHTML=`
                        <th>${lastElement.id}</th>
                        <td>${lastElement.name}</td>
                        <td>${lastElement.email}</td>
                        <td>${lastElement.phone}</td>
                        <td>${lastElement.address}</td>
                        <td>${lastElement.date}</td>
                        <td><button class="btn btn-danger">Delete</button></td>
        `;
        tableBody.appendChild(tr)
    })
}
