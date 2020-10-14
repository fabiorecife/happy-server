<h1 align="center">
  <img  alt="happy logo" src=".github/happy-logo2.png">
</h1>



<p align="center">
 <a href="#about">About</a> •
 <a href="#Technologies">Technologies</a> • 
 <a href="#Install">Install</a> • 
 <a href="#Usage">Usage</a> • 
 <a href="#License">License</a>
 </p>

##  About
---
An application developed at Next Level Week # 3 to promote visitation to orphanages.


##  Technologies
---
Happy-server uses a number of open source projects to work properly:

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Typeorm](https://typeorm.io/)
- [Yup](https://github.com/jquense/yup)
- [Multer](https://github.com/expressjs/multer)

## Install

    git clone git@github.com:fabiorecife/happy-server.git
    cd happy-server
    yarn install
    yarn dev


## Usage

Create a Orphanage

    curl --request POST \
    --url 'http://localhost:3333/orphanages?search=fabio' \
    --header 'content-type: multipart/form-data; boundary=---011000010111000001101001' \
    --form 'name=Lar das meninas' \
    --form latitude=-8.0513805 \
    --form longitude=-34.937919 \
    --form 'about=sobre o orfanato' \
    --form 'instructions=venha visitar' \
    --form 'opening_hours=Das 8h até 18h' \
    --form open_on_weekends=true \
    --form images=@/path/to/file1 \
    --form images=@/path/to/file2    

List Orphanages

    curl --request GET \
    --url http://localhost:3333/orphanages



## License

MIT