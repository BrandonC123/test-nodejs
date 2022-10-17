const fs = require("fs");

const content = "Some content!";

fs.writeFile(
    "C:/Users/bchu3/Desktop/programming stuff/Web Development/test-nodejs/test.txt",
    content,
    { flag: "r+" },
    (err) => {
        if (err) {
            console.log(err);
        }
    }
);

// or promise-based

async function example() {
    try {
        const content = "Some content!";
        await fs.writeFile(
            "C:/Users/bchu3/Desktop/programming stuff/Web Development/test-nodejs/test.txt",
            content,
            (error) => {}
        );
    } catch (err) {
        console.log(err);
    }
}
example();

fs.appendFile("file.txt", content, (error) => {
    if (error) {
        console.log(error);
    }
});
