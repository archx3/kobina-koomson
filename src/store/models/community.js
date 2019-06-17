export default {
  state      : {
    community : {
      name : 'JS Camp',
      address : {
        location : 'Accra, Gh',
        phone    : '+233 (0) 26 072 1202',
        email    : 'jshackaccra@gmail.com',
        web     : 'js-camp.com'
      },
      galleryData: {
        images  : [
          { name: 'Reception', url: 'reception-team.jpg' },
          { name: 'Participants Assembling', url: 'participants-assembling.jpg' },
          { name: 'Sam Beth Sets the ball rolling', url: 'setting-the-ball-rolling.jpg' },
          { name: 'Snack Break', url: 'snack-break.jpg' },
          { name: 'Snack Break', url: 'snack-break-2.jpg' },
          { name: 'Swag and Sponsor Para', url: 'swag-paraph.jpg' },
          { name: 'Group Photo', url: 'grp-ph-nc.jpg' }],
        selected: null
      }
    }
  },
  getters    : {
    community : (state) => {
      return state.community;
    }
  }
}
