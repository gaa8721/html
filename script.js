(function($) {

  let collection = $.getElementsByTagName('body');
  for (let property in collection) {
    console.log(property);
  }

  if (collection.length > 0) {
    console.log(collection.item(0));
    console.log(bodyElement[0].innerHtml);
  }

})(document);
