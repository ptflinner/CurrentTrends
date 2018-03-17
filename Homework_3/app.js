//Patrick Flinner
//Homework 3
//304607711

let fact = new Vue({
    el: '#chf',

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

        //Retrieves the available catagories
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

        //Searches for facts using the query parameter
        //Highlights the searched word
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
                    search=new RegExp('('+viewModel.query+')','gi')
                    let phrase=fact.value.replace(search,'<mark>$1</mark>')
                    viewModel.searchedFacts.push(phrase)
                })
                console.log(viewModel.queries)
            })
            .catch(function(err){
                alert("Need more than 2 letters for the query")
            })
        }
    },
    beforeMount(){
        this.getCategory()
    }
})