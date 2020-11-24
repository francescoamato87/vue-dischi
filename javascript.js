
const app = new Vue ({
    el: '#app',
    data: {
        cds: []
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
    }

});
