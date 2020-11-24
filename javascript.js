
const app = new Vue ({
    el: '#app',
    data: {
        cds: [],
        actualGenre: 'all'
    },
    created(){
      // Get Albums List
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
           .then(result => {
             console.log(result.data);

             this.cds = result.data.response;
           })
           .catch(error => {
             console.log(error);
           });
    },

    methods:{
      filterGenre () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result => {
          let cdsList = result.data.response;
          // LA CONDIZIONE PER IL GENERE

          if(this.ActualGenre !== 'all') {
          cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === this.actualGenre );
          }

          this.cds = cdsList;
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
});
