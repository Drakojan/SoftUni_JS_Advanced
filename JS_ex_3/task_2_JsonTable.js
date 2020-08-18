function tableConverter(params) {
    
    let register = params.map(x=>JSON.parse(x));
    let createTable = content => `<table>${content}\n</table>`;
    let createRow = content => `\n\t<tr>${content}\n\t</tr>`;
    let createData = content => `       \n\t\t<td>${content}</td>`;

    return createTable(register.reduce((accRows, row)=>{
        
        return accRows + createRow(Object.values(row).reduce((acc, value)=>{
            
            return acc+ createData(value)

        },''))

    }, ''))

}

console.log(tableConverter(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
))