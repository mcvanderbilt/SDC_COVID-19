function initializeViz() {
  // JS object that points at empty div in the html
  var placeholderDiv = document.getElementById("tableauViz");
  // URL of the viz to be embedded
  var url = "https://public.tableau.com/profile/matthew.vanderbilt#!/vizhome/covid19_sandiegohhs/SanDiegoCountyHHSA";
  // An object that contains options specifying how to embed the viz
  var options = {
    width: '600px',
    height: '600px',
    hideTabs: false,
    hideToolbar: true,
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}
