var defaultTabs = ['API', 'Code', 'Usage'];

var data = {
  state: 'UIDesign',
  
  sections: [
    { 
      section: 'Introduction',
      subsections: []
    },
    {
      section: 'Colors',
      subsections: [
        {
          title: 'Primary',
          tabs: ['Usage']
        },
        {
          title: 'Gray Scale',
          tabs: ['Usage']
        },
        {
          title: 'Status',
          tabs: ['Usage']
        }
      ]
    },
    {
      section: 'Buttons',
      subsections: [
        {
          title: 'Primary',
          tabs: ['Code', 'Usage']
        },
        {
          title: 'Grouped',
          tabs: ['Code', 'Usage']
        },
        {
          title: 'Vertical',
          tabs: ['Code', 'Usage']
        },
      ]
    },
    {
      section: 'Inputs',
      subsections: [ 
        {
        	title: 'Dropdown',
        	tabs: defaultTabs,
        	component: 'duiDropdownDirective.html'
        },
      ]
    }
  ]
};

module.exports = data;