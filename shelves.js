//........... Shelves..................//
function Shelf(genre){
  this.genre=genre;
  this.contents=[];
  this.addShelf= function(libraryName){
    libraryName.libraryShelves.push(this);
  };
  this.removeShelf= function(libraryName){
    var indexNumber=(libraryName.libraryShelves).indexOf(this);
    (libraryName.libraryShelves).splice(indexNumber, 1);
  };
};
