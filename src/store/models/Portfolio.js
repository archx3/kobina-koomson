/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used */
export default {
  namespaced : true, // this ensures that we deal with naming conflicts
  modules    : {}, // nested modules
  state      : {
    portfolioData : [
      {
        thumbnail : 'aickono-thumb-s.png',
        bannerImage : 'aik-1.png',
        image       : 'aickono-p.jpg',
        name        : 'UI/UX for Aickono',
        category    : 'User Experience',
        description : 'Aickono is a people first company, and as such places much emphasis on the customer journey. Set out to help people discover and grow talent their always exude thoughtfulness',
        perspective : '',
        task : 'To redesign the UI and UX of the Aickono platform to enable users have a seamless on-boarding experience and ensure continuous user engagement',
        processAndConcept : 'Engaged with the team to figure out the problem space and Analysed the existing solution to build a critical knowledge base. Armed with the fore-work, I set out to outline features, create layouts, add a pop to the color scheme while maintaining the overall low-profile the original work created',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : 'The previous Work',
            body : '',
            image : ''
          },
          {
            type : '',
            head : 'Low-Fi wireframes',
            body : 'I created wireframes to test assumptions and also use a guide to the layout and presentation final mockups',
            image : 'aik-5.png'
          },
          {
            type : '',
            head : 'A touch of modernity',
            body : '',
            image : 'aik-2.png'
          },
          {
            type : '',
            head : 'Uniformity and Consistency',
            body : 'To ensure a consistent look, feel and behaviour across UI components and also platforms, I developed a style guide to inform decisions',
            image : ['aik-3.png', 'aik-4.png']
          }
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
      {
        thumbnail : 'codbit-rmaas-thumb-s.png',
        image     : 'codbit-p.jpg',
        bannerImage     : 'cb-1.png',
        name      : 'Codbit RMaaS',
        category  : ['Development', 'User Experience'],
        description : 'Ever ordered food online? With the myriad of restaurants available and new ones springing up everyday, customers are forced to download several apps eating up disk space and offering in inconsistent look and feel. Codbit to the rescue! Their goal was to build a unified Restaurant Management as a service (RMaaS), a SaaS platform to enable restaurants easily connect with their customers and manage orders.',
        perspective : '',
        task : 'I was consulted to design the UI and UX and build the web front-end of the RMaaS',
        processAndConcept : 'The Codbit team is made of highly skilled and diligent people with an eye for quality. I engaged with the development team to properly understand the problem and what had been conceptualised, took lots of notes. We had several brainstorming sessions and figured out the features we wanted to build, figured out the customer journey and outlined what would be going into our minimum viable product (MVP) and what not. I reported to top management, got approval and got straight to work.',
        externalLink : '',
        blog : [// blog section info
          {
            type : 'list',
            head : 'Create an easy to use system',
            body : "At this stage, I couldn't tell exactly what the end product would look like but I knew what the system had to be.",
            list : [
              { head : 'Functional', body : "The system has to be able to deliver on it's promise of what it does" },
              { head : 'Performant', body : "As with all apps i build, I tried to make sure things happened in under 100ms. Stability and reliability are essential ingredients here." },
              { head : 'Accessible', body : "This means primarily that disabled people should be able to do what the app is capable of with it. It also borders on usability." },
              { head : 'Secure', body : "The system had to deal with all known front-end application flaws and vulnerabilities to make attacks difficult. Thus preventing XSS, CSRF, session hijacking etc." },
              { head : 'Minimal', body : "The UI has to be clutter-free yet having all features without putting too much in the users' face" },
              { head : 'Scalable', body : "The team made their intentions clear from the onset that they were going to build on my work after I am done, however I must admit that certain decision we took, later impeded some scaling efforts." },
            ],
            image : ''
          },
          {
            type : '',
            head : 'Sketches and Low-Fi wireframes',
            body : "Starting off with sketches and wireframes sets the right tone for creativity and enables trying out different layouts and styles with less cost. It also helps me concentrate on the essentials rather than focusing on flimsy design detail. In the process, i take a lot notes to guide me",
            image : 'cb-2.png'
          },
          {
            type : '',
            head : 'The UI',
            body : "Good inspiration to me is as important as the final output, as such, I scavenged the web for inspiration from similar systems. Having laid down the path to thread, I created the app's user interface using Figma primarily so that progress could be tracked by management, showcasing multiple screens and app states.",
            image : 'cb-3.png'
          },
          {
            type : '',
            head : 'A bouncing baby app',
            body : 'After having gone through the above, It was time to get my hands dirty. I built the front-end, connecting it to the back-end via the API specification provided by the Lead back-end engineer. I run several tests and joined the team pitch to some partners.',
            image : 'cb-1.png'
          },
          {
            type : '',
            head : 'Wrapping up',
            body : 'Overall, it was a good project. I was happy to receive positive feedback from stakeholders. I even happier to have been able to surpass the unique challenges the project presented. Feels priceless',
          }
        ],
        testimony : {
          giverName : 'Nii Tackie',
          giverTitle: 'Software Engineer, Codbit Gh ltd.',
          pic       : 'mitch.jpg',
          message   : 'sample feed back'
        }
      },
      {
        thumbnail : 'bosch-thumb-s.png',
        image     : 'bosch-p.jpg',
        bannerImage : 'bosch-1.png',
        name      : 'Bosch Ghana (SSR)',
        category  : ['Branding', 'Print'],
        description : '',
        perspective : [
          { text : 'International', bold : true },
          { text : 'Appeal' }
        ],
        task : 'To design and print Bosch branded Items',
        processAndConcept : '',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : '',
            body : '',
            image : ['bosch-1.png', 'bosch-2.png', 'bosch-3.png', 'bosch.png']
          },
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
      {
        thumbnail : 'sh-thumb-s.png',
        image     : 'sharehouse-p.jpg',
        bannerImage : 'sh-1.png',
        name      : 'Sharehouse',
        category  : ['Development', 'User Experience'],
        description : "Sharehouse prides itself in making storage (warehouse) space of all sizes available to all for rental with no regard for duration. -A company I co-founded",
        perspective : 'Love at first sight',
        task : 'As C.T.O (previously C.P.O), my role was to design and build the front-end of the flagship sharehouse web app.',
        processAndConcept : 'We conducted a lot of research and got rich data from which we drew inferences and also on which most design decisions were based. The overarching goal was to build something very simple, yet elegant and user-friendly.',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : 'Wireframing',
            body : 'Given the low tech savvy nature of our target personas, we planned to build a clutter-free app with minimal UI elements to avoid distracting our users from the main customer goals. As usual, I started from creating the wireframes tp guide the high fidelity designs. This proved very beneficial as I was able to quickly test out various sketches to see which best fits.',
            image : ''
          },
          {
            type : '',
            head : '',
            body : '',
            image : [ 'sh-3.png', 'sh-4.png', 'sh-5.png', 'sh-6.png', ]
          },
          {
            type : '',
            head : 'An MVP is birthed',
            body : 'After an intensive three weeks of mostly back and forths trying to explain the entire concept to a newer team member, We built an Investor-pitch ready MVP. This was later torn down after a successful pitch to make way for a more stable and resilient product.',
            image : 'sh-2.png'
          },
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
      /* {
       thumbnail : 'mango-thumb-s.jpg',
       image     : 'portfolio1.jpg',
       name      : 'Branding for Mango',
       category  : ['Print']
       }, */
      {
        thumbnail : 'front-desk-thumb-s.png',
        image     : 'front-desk-p.jpg',
        bannerImage : 'fd-1.png',
        name      : 'Front Dəsk',
        category  : 'User Experience, Development',
        description : 'Front Dəsk is an app I built with my colleague, Terrence, to enable companies easily collect visitor logs and enable prior appointment scheduling. Eliminating the age-old paper system currently in use in many organisations',
        perspective : '',
        task : 'To design the UI and UX of the platform to enable visitors and organisation staff have it easy when it comes to visitor management',
        processAndConcept : 'We did a quick analysis of existing solutions to find out where they fall short so we could design a better solution by adding the features they are missing to the features we outlines',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : '',
            body : '',
            image : ''
          },
          {
            type : '',
            head : 'The UI',
            body : 'I designed the UI for the app with knowledge from data gathered from our research, having discovered that a solution for tablets would be the best choice.',
            image : [ 'fd-1.png',  'fd-3.png', 'fd-4.png', 'fd-5.png', 'fd-2.png', ]
          },
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
      /* {
        thumbnail : 'chekkit-app-thumb-s.png',
        image     : 'chekkit-p.jpg',
        bannerImage : 'aik-1.png',
        name      : 'Chekkit App',
        category  : 'Development',
        description : 'Aickono is a people first company, and as such places much emphasis on the customer journey. Set out to help people discover and grow talent their always exude thoughtfulness',
        perspective : '',
        task : 'To redesign the UI and UX of the Aickono platform to enable users have a seamless on-boarding experience and ensure continuous user engagement',
        processAndConcept : 'Engaged with the team to figure out the problem space and Analysed the existing solution to build a critical knowledge base. Armed with the fore-work, I set out to outline features, create layouts, add a pop to the color scheme while maintaining the overall low-profile the original work created',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : 'The previous Work',
            body : '',
            image : ''
          },
          {
            type : '',
            head : 'Low-Fi wireframes',
            body : 'I created wireframes to test assumptions and also use a guide to the layout and presentation final mockups',
            image : 'aik-5.png'
          },
          {
            type : '',
            head : 'A touch of modernity',
            body : '',
            image : 'aik-2.png'
          },
          {
            type : '',
            head : 'Uniformity and Consistency',
            body : 'To ensure a consistent look, feel and behaviour across UI components and also platforms, I developed a style guide to inform decisions',
            image : ['aik-3.png', 'aik-4.png']
          }
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      }, */
      {
        thumbnail : 'moov-thumb-s.png',
        image     : 'moov-p.png',
        bannerImage : 'moov-1.png',
        name      : 'Moov',
        category  : 'Branding',
        description : "Daily commute to and from the workplace is a big hassle for people who don't own cars. Moov sought to put an end to this.",
        perspective : [{ text : 'A new' }, { text : 'Face of Employee Transportation' }],
        task : 'As lead front-end engineer and Graphic artist, my role was to design graphic elements and build the customer facing app for the MOOV platform.',
        processAndConcept : "The team engaged with relevant transport industry big-wigs to source for information that would in turn be a guide to our steps. To appear professional, I set out to create Moov branded items that carry a sense of who we are and what we represent",
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : 'An Iconic Logo (No Pun Intended)',
            body : "Two weeks after the first logo concept was conceived, I made the shiny logo above for use both as the company logo and the flagship app's icon. We sort of knew what we wanted the logo to represent (speed) but couldn't quite nail it on many tries by the team lead. After few hours of taking over the work, I figured \"fluid-speed\" would be a nice theme for our logo. I chose colors that meant authority and capability while being easy with the eyes.",
            image : 'moov-1.png'
          },
          {
            type : '',
            head : 'Brading Items',
            body : "I then went on to create branding items to create a feeling of brand credibility",
            image : [ 'moov-2.png', 'moov-3.png', 'moov-4.png', 'moov-5.png', 'moov-6.png', ]
          },
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
      {
        thumbnail : 'acacia-thumb-s.png',
        image     : 'acacia-p.jpg',
        bannerImage : 'amc-1.png',
        name      : 'Acacia Branding',
        category  : ['Branding', 'Print'],
        description : 'Acacia is an upscale hospital local hospital located in the urban suburbs of Accra, With years of experience in serving customers who have high tastes and expectations.',
        perspective : '',
        task : 'To design and print branding identity items.',
        processAndConcept : 'The company already had a style guide and so it was easy to build on that to create the designs requested. After receiving approval, I went ahead to provide them with mock ups of how things would look in the final output.',
        externalLink : '',
        blog : [// blog section info
          {
            type : '',
            head : 'The previous Work',
            body : '',
            image : [ 'amc-2.png', 'amc-3.png', 'amc-4.png', 'amc-5.png',  'amc-6.png', ]
          },
        ],
        testimony : {
          giverName : 'Edem Titiati',
          giverTitle: 'C.E.O, Aickono llc',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the best decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      },
    ],
    categories    : ['Development', 'User Experience', 'Branding', 'Print'],
  },
  getters    : {
    portfolioData : (state, getters) =>
    {
      return state.portfolioData;
    },
    portfolioLength : (state) =>
    {
      return state.portfolioData.length;
    },
    portfolioItem : (state) =>
    {
      return function (id)
      {
        return  state.portfolioData[id]
      };
    },
    categories    : (state) =>
    {
      return state.categories;
    }
  },
  // Used to alter state NOT for fetching data or complex computations
  mutations  : {
    alterExample : (state, payload) =>
    {
      state.example = payload
    }
  },
  // Do not use for direct update. Call the corresponding mutation
  actions    : {
    alterExample : ({ commit, getters, state }, payload) =>
    {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      commit('alterExample', payload)
    }
  },
}
