var defaultTabs = ['Examples', 'Usage'];

var data = {

	state: 'Marketing',
	
	sections: [
	  {
	    section: 'Introduction',
	    subsections: []
	  },
	  {
	    section: 'Logo',
	    subsections: [
	    	{
	    		title: 'Datto Logo',
	    		tabs: defaultTabs
	    	},
	    	{
	    		title: 'Product Logos',
	    		tabs: defaultTabs
	    	}
	    ]
	  },
	  {
	    section: 'Colors',
	    subsections: [
	      {
	      	title: 'Primary',
	      	tabs: defaultTabs
	      },
	      {
	      	title: 'Charts',
	      	tabs: defaultTabs
	      },
	      {
	      	title: 'Gray Scale',
	      	tabs: defaultTabs
	      },
	      {
	      	title: 'Status',
	      	tabs: defaultTabs
	      }
	    ]
	  },
	  {
	    section: 'Typography',
	    subsections: [
	    	{
	    		title: 'Typeface',
	    		tabs: defaultTabs
	    	},
	    	{
	    		title: 'Paragraph',
	    		tabs: defaultTabs
	    	}
	    ]
	  }
	]
};

module.exports = data;