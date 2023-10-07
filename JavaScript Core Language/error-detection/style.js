function referenceError() {
  let result;

  try {
    result = x / 10;
  } catch (error) {
    handleError(error);
  }
}

function rangeError() {
  let result = 0;
  try {
    result.toPrecision(200);
  } catch (error) {
    handleError(error);
  }
}

function typeError() {
  let result = 0;
  try {
    result.toUpperCase();
  } catch (error) {
    handleError(error);
  }
}

function uriError() {
  let uri = "http:/www.netinc.com/file name";
  try {
    decodeURI(uri);
  } catch (error) {
    handleError(error);
  }
}

function syntaxError(){
    try{
       let sum = eval("alert('hello)"
    }
       
       catch (error) {
        handleError(error);
    }
}

function handleError(error) {
  switch (error.name) {
    case "ReferenceError":
      console.log("Reference Error: " + error.message);
      break;
    case "RangeError":
      console.log("Range Error: " + error.message);
      break;
    case "TypeError":
      console.log("Type Error: " + error.message);
      break;
    case "URIError":
      console.log("URI Error: " + error.message);
      break;
    case "SyntaxError":
      console.log("Syntax Error: " + error.message);
      break;
    default:
      console.log("Error Type: " + error.name + " - Message: " + error.message);
      break;
  }
}
