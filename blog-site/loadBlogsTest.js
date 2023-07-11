

export function loadIdentities() {
    return {
      isLoading: false,
      allGists: [],
      gistsLength: null,
      allCategories: [], 
      allAuthors: [],
      init() {
        try {
          this.isLoading = true
        fetch(`https://gistora.com/api/gists`)
          .then(res => res.json())
          .then(data => {
            this.allGists = data.data;
            this.gistsLength = this.allGists.length;
            console.log('Gists: ', this.allGists, this.gistsLength);
            
          })
        fetch(`https://gistora.com/api/authors`)
          .then(res => res.json())
          .then(data => {
            this.allAuthors = data.data;
            console.log('authors: ',this.allAuthors);
          })
        fetch(`https://gistora.com/api/categories`)
          .then(res => res.json())
          .then(data => {
            this.allCategories = data.data;
            console.log('categories: ', this.allCategories);
          })
        this.isLoading = false;
        } catch (error) {
          console.error('This is error', error);
          
        }
        
      },
     
    }
  }