//............Books...................//
function Book(booktitle, author){
  this.booktitle=booktitle;
  this.author=author;
  this.titleAuthor= function(){
    return(this.booktitle + " by " + this.author)
  };
  this.shelfIt= function(shelf){
    shelf.contents.push(this);
  };
  this.removeIt= function(shelf){
    var indexNumber=(shelf.contents).indexOf(this);
    (shelf.contents).splice(indexNumber, 1);
  };
};
