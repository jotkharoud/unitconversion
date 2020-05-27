  // Git Clone

  You can directly clone by file by clicking on the Green Arrow on top right handside and by using terminal you can type "git clone 'filename/copiedurl' "
  and then try using cd command 'cd filename' , you will go inside the file, then use command 'npm install' to add all the node-modules and dependencies later do 'npm start' to start the server to see client side.
  

  //Git downloads

  If you want to download the file then you can use the same tab where it says git clone and download on top right handside, you can doanload the file from the web . It will be in form of Zipped version and before opening by clicking on the folder , it will be option saying decompress the file , you can decompress or unzip it and then you can Open in VS(Visual studio code) and with the opening in the terminal , you can select the folder and go inside the folder using command 'cd' then use command 'npm install' to add all the node-modules and dependencies later do 'npm start' to start the server to see client side.

  //developer side

  When you open the folder in VS(Visual Studio), you will see one folder named src , when you expand the folder there are 3 files named App.js, Conversion.js and index.js ,plus the complimentory file style.css to do a little styling.
  In App.js it will be containing the extension file of Conversion.js (which contains the main code), as we move to Conversion.js file i am using array's to store the values of the items which needs to be converted and then by putting functionality on all buttons it will be checking the conversion , teacher or user can type it in the ehat kind of conversion they want , by using switch statements i try to synchornized the data by putting if statements if the user wants temperature conversion in particular then it checks the formula , if it matches the user input and according to evaluate if the temperatures are correct then it will give the output "Correct" otherwise it will give output "Incorrect". I am using (Math.Round()) to round up the values before evaluation.
  Formulas are playing important role here because of that i am able to calculate the desired value coming from the user and giving output as expected.
  I am aslo using setState to update the state for the output when it is required.
  