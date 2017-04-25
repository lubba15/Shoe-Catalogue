var shoes = [
     {Brand : 'Nike', Color : 'Red', Size : 8, Price : 799, in_stock : 2},
     {Brand : 'Nike', Color : 'Green', Size : 7, Price : 795, in_stock : 1},
     {Brand : 'Puma', Color : 'Black', Size : 7, Price : 795, in_stock : 4},
     {Brand : 'Puma', Color : 'Green', Size : 7, Price : 795, in_stock : 3},
     {Brand : 'Adiddas', Color : 'Yellow', Size : 6, Price : 950, in_stock : 1},
     {Brand : 'Adiddas', Color : 'Yellow', Size : 9,Price : 800, in_stock : 5}
];

var display = document.querySelector('.display');
var output = document.querySelector('.output');

var brandDrop = document.querySelector('.brands');
var size = document.querySelector('.sizes');
var color = document.querySelector('.colors');

var dropDown = document.querySelector('.DropTamplate').innerHTML;
var drop = Handlebars.compile(dropDown);

var tableTamplate = document.querySelector('.tableTamplate').innerHTML;
var table = Handlebars.compile(tableTamplate);

function UniqueBrand(){
  var UniqueBrand = [];
  var brandMap = {};
  for(var i = 0; i < shoes.length; i++){
    var shoeBrand = shoes[i];
    if (brandMap[shoeBrand.Brand] === undefined){
      brandMap[shoeBrand.Brand] = shoeBrand.Brand;
      UniqueBrand.push(shoeBrand.Brand);
    }
  }
  document. querySelector(".brands").innerHTML = drop({Brand:UniqueBrand});
}
UniqueBrand();

function ColorUnique(){
  var UniqueColor = [];
  var colorMap = {};
   for(var i = 0; i < shoes.length; i++){
     var shoeColor = shoes[i];
     if (colorMap[shoeColor.Color] === undefined){
       colorMap[shoeColor.Color] = shoeColor.Color;
       UniqueColor.push(shoeColor.Color);
  }
}
document.querySelector(".colors").innerHTML = drop({Color:UniqueColor});
}
ColorUnique();

function UniqueSize() {
  var UniqueSize = [];
  var sizeMap = {};
  for(var i = 0; i < shoes.length; i++){
    var shoeSize = shoes[i];
    if(sizeMap[shoeSize.Size]=== undefined){
      sizeMap[shoeSize.Size] = shoeSize.Size;
      UniqueSize.push(shoeSize.Size);
    }
  }
  document.querySelector(".sizes").innerHTML = drop({Size:UniqueSize});
}
UniqueSize();

function search() {
  var searched = [];
  for(var i = 0; i < shoes.length; i++){
    var shoe = shoes[i];
    console.log(brandDrop.value);

    if(brandDrop.value === shoe.Brand && size.value == shoe.Size && color.value == shoe.Color){
      searched.push(shoe);
    }
    else if(brandDrop.value === "All" && size.value == shoe.Size && color.value === "All"){
      searched.push(shoe);
    }
    else if (brandDrop.value === shoe.brand && size.value == "All" && color.value ==="All" ){
      searched.push(shoe);
    }
  }
  var restore = table({myShoe : searched})

  output.innerHTML = restore;
};


function AddStock() {

}
