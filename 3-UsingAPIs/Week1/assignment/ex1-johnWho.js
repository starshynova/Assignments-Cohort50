export const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      } else {
        const fullName = `${firstName} Doe`;
        resolve(fullName);
      }
    }, 1000);
  });
};

function main() {
  getAnonName('John', console.log);
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
