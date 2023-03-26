# How to convert the medeley database to a bibtex file

# 1. Export the medeley json file

1. Open the mendeley website where all your papers are listed
2. Open the developer console (F12)
3. Go to the network tab
4. Enter in the search field "https://api.mendeley.com/documents?"
5. Reload the browser tab
6. Find the request with the name "documents?" where all elements are listed in the response tab (click on a request and then on the response tab)
7. Copy the json file
8. Save the json file as "input.json"

# 2. Get your bib file

1. Open Overleaf and then the bib file created by the mendeley plugin
2. Copy the bib file
3. Save the bib file as "mybib.bib"

# 3. Convert the json file to a bib file

1. Open the terminal
2. run "node .\convert.js"

# Merged bib file is saved as "output.bib" 🎉
