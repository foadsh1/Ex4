//Students names:Foad shalata  ID:314743097       Rabea bader   ID:207530478
const fs = require("fs");
const path = require("path");

function main() {
  const folderPath = "./groups"; // Directory containing the files
  let groupFiles = fs.readdirSync(folderPath); // Read all files in the directory

  // Sort the filenames numerically by the number part
  groupFiles = groupFiles.sort((a, b) => {
    return parseInt(a) - parseInt(b); // Compare the filenames as numbers
  });

  if (groupFiles.length < 10) {
    console.error(
      "Error: Ensure you have at least 10 files in the 'groups' folder."
    );
    return;
  }

  const newArray = [];

  for (let i = 0; i < 10; i++) {
    const filePath = path.join(folderPath, groupFiles[i]);
    const groupContent = fs.readFileSync(filePath, "utf-8").split("\n"); // Read file and split rows

    const rowsToCopy = i + 1; // Number of rows to copy
    for (let j = 0; j < rowsToCopy; j++) {
      if (j < groupContent.length) {
        newArray.push(groupContent[j]); // Add the row only if it exists
      }
    }
  }

  console.log("\nThe new array:");
  console.log(newArray);

  // Optionally, write the result to a new file
  fs.writeFileSync("./output.txt", newArray.join("\n"));
  console.log("\nResult saved to 'output.txt'.");
}

// Execute the function
main();
