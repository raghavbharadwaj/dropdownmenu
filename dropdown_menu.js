var MENU = [
  {
    'title': 'Item 1',
    'submenu': null,
  },
  {
    'title': 'Item 2',
    'submenu': null,
  },
  {
    'title': 'Item 3',
    'submenu': [
      {
        'title': 'Sub 1',
        'submenu': null,
      },
      {
        'title': 'Sub 2',
        'submenu': null,
      },
      {
        'title': 'Sub 3',
        'submenu': [
          {
            'title': 'SubSub 1',
            'submenu': null,
          },
          {
            'title': 'SubSub 2',
            'submenu': null,
          },
          {
            'title': 'SubSub 3',
            'submenu': null,
          }
        ]
      }
    ]
  }
];

var construct_html = function(data,subflag){

  var html = (subflag)?'<ul>':'';
  var lopen = '<li><a href = "#">';
  var lclose = '</li>';
  
    for(obj in data)
    {
      html+=lopen+data[obj].title+'</a>';
      if(data[obj].submenu!=null)
      {
        html+=construct_html(data[obj].submenu,true);
      }
    }
  html+=lclose;  
  html+=(subflag)?'</ul>':'';
  return html;
  
}

var buildMenu = function(element){
  var html = construct_html(MENU,false);
  element.append(html);  
}

$(document).ready(function(){
  buildMenu($("#menu"));
  $("a").click(function(){
    alert($(this).text());
  });
});
