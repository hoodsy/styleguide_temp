var defaultTabs = ['Examples', 'Usage'];

var data = {

	state: 'Marketing',
	
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
	      	tabs: defaultTabs
	      },
	      {
	      	title: 'Gray Scale',
	      	tabs: defaultTabs
	      },
	      {
	      	title: 'Signaling',
	      	tabs: defaultTabs
	      }
	    ]
	  },
	  {
	    section: 'Typography',
	    subsections: []
	  }
	]
};

module.exports = data;