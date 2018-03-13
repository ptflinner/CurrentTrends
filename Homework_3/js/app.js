let dad = new Vue({
    // the element on the main page to be replaced with our vue app
    el: '#chf',

    // The data that will bind to our template
    data: {
        appName: 'Chuck Norris Facts',
        currentFact: '',
        previousFacts: [],
        categories:[],
        selectedCategory:'',
        isFetchingAFact: false
    },

    // Methods that may be called on our vue object
    methods:{

        // Fetch a fact about ChuckNorris
        getCategoryFact: function(){
            
            this.isFetchingAFact = true

            let viewModel = this

            axios.get('https://api.chucknorris.io/jokes/random?category='+viewModel.selectedCategory,{
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){

                viewModel.isFetchingAFact = false
                console.log(response)

                
                if (viewModel.currentFact)
                    viewModel.previousFacts.push(viewModel.currentFact)

            
                viewModel.currentFact = response.data.value
            })
            .catch(function(err){
                alert(err)
            })
        },

        getCategory: function(){

            let viewModel=this
            viewModel.categories.push('all')
            axios.get('https://api.chucknorris.io/jokes/categories',{
                headers:{
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                cat=response.data;
                cat.forEach(element=>{
                    viewModel.categories.push(element)
                })
            })
        },

        searchCategory: function(category){
            let viewModel=this
            axios.get('https://api.chucknorris.io/jokes/random?category='+selectedCategory,{
                headers:{
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                
                if (viewModel.currentFact)
                viewModel.previousFacts.push(viewModel.currentFact)

        
                viewModel.currentFact = response.data.value
            })
        }
    },
    beforeMount(){
        this.getCategory()
    }
})