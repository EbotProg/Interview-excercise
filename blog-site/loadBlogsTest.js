

export function loadIdentities() {
    return {
      isLoading: false,
      allGists: [],
      gistsLength: null,
      gistIdsArr: [],
      allCategories: [], 
      allAuthors: [],
      authorIdsArr: [],
      init() {
        try {
          this.isLoading = true
        fetch(`https://gistora.com/api/gists`)
          .then(res => res.json())
          .then(data => {
            this.allGists = data.data;
            this.gistsLength = this.allGists.length;
            this.allGists.forEach((gist, index, arr)=>{
            this.gistIdsArr.push(gist.id);
            })
            console.log('Gists: ', this.allGists, this.gistsLength);
            console.log('gist ids', this.gistIdsArr)

           //
           fetch(`https://gistora.com/api/authors`)
           .then(res => res.json())
           .then(data => {
             this.allAuthors = data.data;
             this.allAuthors.forEach((author, index, arr)=>{
               this.authorIdsArr.push(author.id);
               })
             console.log('authors: ',this.allAuthors);
             console.log('author ids', this.authorIdsArr);



             //
             fetch(`https://gistora.com/api/categories`)
             .then(res => res.json())
             .then(data => {
               this.allCategories = data.data;
               console.log('categories: ', this.allCategories);

               console.log('id test',this.authorIdsArr, this.authorIdsArr.find((authorId, index, arr)=>2===authorId))

             })
              //

           })
           //


          })
       
        
        this.isLoading = false;
        } catch (error) {
          console.error('This is error', error);
          
        }
        
      },
     
    }
  }