let data = [
    {
      name: 'Med',
      age: '24',
      city:'fez'

    },
    {
      name: 'Sarah',
      age: '21',
      city:'oujda'
    },
    {
      name: 'khalid',
      age: '20',
      city:'agadir'
    },
    {
      name: 'Rim',
      age: '22',
      city:'kech'
    },
    {
      name: 'Salam',
      age: '22',
      city:'casa'
    },
    {
      name: 'youssef',
      age: '24',
      city:'tanger'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old'+
    ' , live in '+' '+item.city + '</div>';
  });
  
  info.innerHTML = details.join('\n');
  