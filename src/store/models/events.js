export default {
  state  : {
    years: {
      '2018': {
        address         : {
          venue   : 'Meltwater Entrepreneurial School of Technology (Mest)',
          location: '19 Banana Street, East Legon',
          web     : 'js-camp.com/2018',
        },
        date            : '26-May-2018',
        startTime       : '2:00pm',
        endTime         : '05:30pm',
        seats           : 70,
        sponsors        : [
          { name: 'Mozilla', logo: 'mozilla.png', level: 'gold' },
        ],
        partners        : [
          { name: 'Meltwater Entrepreneurial School of Technology (Mest)', logo: 'mest.png' },
        ],
        speakers        : [
          { name: 'Yannick Aka Brou Noel', picture: 'yann.png', jobTitle: 'Mozilla Tech Speaker' },
          { name: 'Terrence O. Koranchie', picture: 'terr.png', jobTitle: 'CTO, Vesicash' },
          { name: 'Oliver Mensah', picture: 'terr.png', jobTitle: 'Developer Intern, Agro Innova' },
          { name: 'Shadrack Boadu', picture: 'terr.png', jobTitle: 'Developer, Kudobuzz' },
          { name: 'Kobina Koomson', picture: 'terr.png', jobTitle: 'CTO, Sharehouse' },
          { name: 'Adeyemi Babalola', picture: 'terr.png', jobTitle: 'CTO, Iris' }
        ],
        mcs             : [
          { name: 'Sam Beth', picture: 'yann.png', jobTitle: 'Developer, Mazzuma' },
        ],
        presentations   : [
          { title: 'Message from Mozilla', description: '', speakerName: 'Yannick Aka Brou Noel', startTime: '', endTime: '' },
          {
            title      : 'High Performance JavaScript (JavaScript on Steroids)',
            description: '',
            speakerName: 'Kobina Koomson',
            startTime  : '',
            endTime    : ''
          },
          {
            title      : 'Thinking in Modules in JavaScript',
            description: '',
            speakerName: 'Oliver Mensah',
            startTime  : '',
            endTime    : ''
          },
          {
            title      : 'Deep Learning in the browser',
            description: '',
            speakerName: 'Terrence O. Koranchie',
            startTime  : '',
            endTime    : ''
          },
          {
            title      : 'Understanding JavaScript for React Js',
            description: '',
            speakerName: 'Adeyemi Babalola',
            startTime  : '',
            endTime    : ''
          },
          {
            title      : 'Building Micro Services in Node Js',
            description: '',
            speakerName: 'Shadrack Boadu',
            startTime  : '',
            endTime    : ''
          },
        ],
        panelDiscussions: [],
        lighteningTalks : [
          { title: 'Intro to Code/n', description: '', speakerName: 'Elohor Thomas', startTime: '', endTime: '' }
        ],
        // sessions :
      },
      '2019': {
        address         : {
          venue   : 'Ghana Tech Lab',
          location: ' Accra Digital Center',
          web     : 'js-camp.com/2019',
        },
        date            : '2019-08-31',
        startTime       : '2:00pm',
        endTime         : ':6:00pm',
        seats           : 100,
        sponsors        : [
          { name: 'Mozilla', logo: 'mozilla.png' },
          { name: 'Mazzuma', logo: 'mazzuma.png' },
          { name: 'Ghana Tech Lab', logo: 'gh-tech-lab.png' },
        ],
        speakers        : [
          { name: 'Yannick Aka Brou Noel', picture: 'yann.png', jobTitle: '' },
          { name: 'Terrence O. Koranchie', picture: 'terr.png', jobTitle: '' }
        ],
        mcs             : [
          { name: 'Sam Beth', picture: 'yann.png', jobTitle: 'Developer, Runtastic' },
        ],
        presentations   : [
          { title: '', description: '', speakerName: '', startTime: '', endTime: '' }
        ],
        panelDiscussions: [
          { title: '', panelists: [], startTime: '', endTime: '' }
        ],
        lighteningTalks : [
          { title: '', description: '', speakerName: '', startTime: '', endTime: '' }
        ],
        // sessions :
      }
    }
  },
  getters: {
    events: (state) => {
      return {
        years: state.years
      }
    }
  }
}
