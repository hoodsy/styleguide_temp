var defaultTabs = ['API', 'Code', 'Usage'];

var data = {
  state: 'UIDesign',
  
  sections: [
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
          tabs: ['Code', 'Usage'],
          shareExample: true
        },
        {
          title: 'Grouped',
          tabs: ['Code', 'Usage'],
          shareExample: true
        },
        {
          title: 'Vertical',
          tabs: ['Code', 'Usage'],
          shareExample: true
        },
      ]
    },
    {
      section: 'Inputs',
      subsections: [ 
        {
        	title: 'Dropdown',
        	tabs: defaultTabs,
          shareExample: true,
          component: 'duiDropdownDirective.html'
        },
      ]
    }
  ]
};

module.exports = data;