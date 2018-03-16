let dad = new Vue({
    // the element on the main page to be replaced with our vue app
    el: '#chf',

    // The data that will bind to our template
    data: {
        appName: 'Chuck Norris Facts',
        currentFact: '',
        previousFacts: [],
        searchedFacts:[],
        categories:[],
        selectedCategory:'all',
        query: '',
        queries:[],
        isFetchingAFact: false,
        showCategory:true,
        showSearched:false
    },

    // Methods that may be called on our vue object
    methods:{

        // Fetch a fact about ChuckNorris
        getCategoryFact: function(){
            
            this.isFetchingAFact = true
            this.showCategory=true
            this.showSearched=false
            let viewModel = this
            let url=''

            if(viewModel.selectedCategory=='all'){
                url='https://api.chucknorris.io/jokes/random'
            }
            else{
                url='https://api.chucknorris.io/jokes/random?category='+viewModel.selectedCategory
            }
            axios.get(url,{
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

        searchFact: function(){
            this.showCategory=false
            this.showSearched=true
            let viewModel=this
            axios.get('https://api.chucknorris.io/jokes/search?query='+viewModel.query,{
                headers:{
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                
                viewModel.queries.push(viewModel.query)
                viewModel.searchedFacts=[]
                response.data.result.forEach(fact=>{
                    viewModel.searchedFacts.push(fact.value)
                })
                console.log(viewModel.queries)
            })
        }
    },
    beforeMount(){
        this.getCategory()
    }
})