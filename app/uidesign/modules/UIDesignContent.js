var defaultTabs = ['API', 'Code', 'Usage'];

var data = {
  state: 'UIDesign',
  
  sections: [
    { 
      section: 'Introduction',
      subsections: []
    },
    {
      section: 'Buttons',
      subsections: []
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