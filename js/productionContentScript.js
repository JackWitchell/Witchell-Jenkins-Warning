var h = document.createElement("H1"); // Create the H1 element 
var t = document.createTextNode("WARNING YOU ARE ON PRODUCTION"); // Create a text element 
h.setAttribute("id", "prodWarning")
h.appendChild(t); // Append the text node to the H1 element
document.getElementById("breadcrumbBar").appendChild(h); // Append the H1 element to the document body 