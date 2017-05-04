var shoes = [{
    Brand: 'Nike',
    Color: 'Red',
    Size: 8,
    Price: 799,
    in_stock: 2
  },
  {
    Brand: 'Nike',
    Color: 'Green',
    Size: 8,
    Price: 795,
    in_stock: 2
  },
  {
    Brand: 'Puma',
    Color: 'Green',
    Size: 8,
    Price: 795,
    in_stock: 7
  },
  {
    Brand: 'Adiddas',
    Color: 'Green',
    Size: 7,
    Price: 795,
    in_stock: 3
  },
  {
    Brand: 'Puma',
    Color: 'Black',
    Size: 9,
    Price: 795,
    in_stock: 4
  },
  {
    Brand: 'Puma',
    Color: 'Green',
    Size: 9,
    Price: 795,
    in_stock: 3
  },
  {
    Brand: 'Adiddas',
    Color: 'Yellow',
    Size: 6,
    Price: 950,
    in_stock: 1
  },
  {
    Brand: 'Adiddas',
    Color: 'Black',
    Size: 6,
    Price: 800,
    in_stock: 5
  },
  {
    Brand: 'Adiddas',
    Color: 'Black',
    Size: 9,
    Price: 800,
    in_stock: 2
  },
  {
    Brand: 'Adiddas',
    Color: 'Yellow',
    Size: 9,
    Price: 800,
    in_stock: 5
  }
];

var display = document.querySelector('.display');
var output = document.querySelector('.output');

var brand = document.querySelector('.brands');
var size = document.querySelector('.sizes');
var color = document.querySelector('.colors');
var output = document.querySelector('.output');

var dropDown = document.querySelector('.DropTamplate').innerHTML;
var drop = Handlebars.compile(dropDown);

function UniqueBrand() {  var UniqueBrand = [];
  var brandMap = {};
  for (var i = 0; i < shoes.length; i++) {
    var shoeBrand = shoes[i];
    if (brandMap[shoeBrand.Brand] === undefined) {
      brandMap[shoeBrand.Brand] = shoeBrand.Brand;
      UniqueBrand.push(shoeBrand.Brand);
    }
  }
  var sorted = UniqueBrand.sort();
  document.querySelector(".brands").innerHTML = drop({
    dataList: UniqueBrand
  });
}
UniqueBrand();

function ColorUnique() {
  var UniqueColor = [];
  var colorMap = {};
  for (var i = 0; i < shoes.length; i++) {
    var shoeColor = shoes[i];
    if (colorMap[shoeColor.Color] === undefined) {
      colorMap[shoeColor.Color] = shoeColor.Color;
      UniqueColor.push(shoeColor.Color);
    }
  }
  var sorted = UniqueColor.sort();
  document.querySelector(".colors").innerHTML = drop({
    dataList: UniqueColor
  });
}
ColorUnique();

function UniqueSize() {
  var UniqueSize = [];
  var sizeMap = {};
  for (var i = 0; i < shoes.length; i++) {
    var shoeSize = shoes[i];
    if (sizeMap[shoeSize.Size] === undefined) {
      sizeMap[shoeSize.Size] = shoeSize.Size;
      UniqueSize.push(shoeSize.Size);
    }
  }
  var sorted = UniqueSize.sort();
  document.querySelector(".sizes").innerHTML = drop({
    dataList: UniqueSize
  });
}
UniqueSize();


function search() {
  var brand = document.querySelector('.brands');
  var size = document.querySelector('.sizes');
  var color = document.querySelector('.colors');

  function brandfilter(input) {
    return brand.value == input.Brand;
  }

  function colorfilter(input) {
    return color.value == input.Color;
  }

  function sizefilter(input) {
    return size.value == input.Size;
  }
  if (brand.value !== "") {
    var shoeList = shoes.filter(brandfilter);
  }
  if (color.value !== "") {
    if (brand.value !== "") {
      var shoeList = shoeList.filter(colorfilter)
    }
    else {
      var shoeList = shoes.filter(colorfilter);
    }
  }
  if (size.value !== "") {
    if (color.value !== "" && brand.value !== "") {
      var shoeList = shoeList.filter(sizefilter);
    } else {
      var shoeList = shoes.filter(sizefilter);
      // console.log(shoeList);
    }
  }
  var tamplate = document.querySelector('#tableTamplate').innerHTML;
  var table = Handlebars.compile(tamplate);

  var restore = table({
    myShoe: shoeList
  })
  if (shoeList.length > 0) {
    output.innerHTML = restore;
  }
  else if (shoeList.length <= 0) {
    output.innerHTML = "Out of stock for " + color.value + " " + brand.value + " " + size.value + "";
  }

  brand.value ="";
  size.value ="";
  color.value ="";
};

function myAddStock() {
  var addMoreBrand = document.getElementById("Brands");
  var addColors = document.querySelector(".Colors");
  var addSizes = document.querySelector('.Sizes');
  var addPrices = document.querySelector(".Prices");
  var addInstock = document.querySelector(".Instock");

  var stockAdded = {};
  createProperty("Brand", addMoreBrand.value.toLowerCase());
  createProperty("Color", addColors.value.toLowerCase());
  createProperty("Size", addSizes.value);
  createProperty("Price", addPrices.value);
  createProperty("in_stock",addInstock.value);

  function createProperty(propertyName, propertyValue) {
    stockAdded[propertyName] = propertyValue;
  }
  shoes.push(stockAdded);

  var createBrand = document.querySelector('.brands');
  var crtBrand = document.createElement('option');
  crtBrand.text = addMoreBrand.value;
  createBrand.add(crtBrand);
  UniqueBrand();

  var createColor = document.querySelector('.colors');
  var crtColor = document.createElement('option');
  crtColor.text = addColors.value;
  createColor.add(crtColor);
  ColorUnique();

  var createSize = document.querySelector('.sizes');
  var crtSize = document.createElement('option');
  crtSize.text = addSizes.value;
  createColor.add(crtSize);
  UniqueSize();

  addMoreBrand.value = "";
  addColors.value = "";
  addSizes.value = "";
  addPrices.value = "";
  addInstock.value ="";
};
