
const num = 1

let app = [{}]


for (let i = 0; i < num; i++) {
  app[i] = {
    name: "myapp",
    script: "index.js",
    env: {
      site: "https://bot0.ru/",
      headlessMode: true
    }
  }

}



module.exports = {
  apps: app
}

