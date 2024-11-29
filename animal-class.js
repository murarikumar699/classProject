const animalData = {
  "bigCats": [
    {  "name": "Lion",  "species": "big cats", "size": "10 ft", "location": "America", "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfE019GGBrb6OIPcqHAu4o_rsJxcxd5n5uIkaYEhtgfDYHwPr3k11jV4NKJ8zBamcE8GyVPtE1eFtzk6T5WLQlWM0XFvg5SPPUoSvwQpiEBvMyC2BFHSUINqReCdpMyw-w9fwp5Pw?key=diMK_80ckKTiDYYhCkLD1Q"  },
    {  "name": "Tiger","species": "big cats", "location": "Canada", "size": "Large",  "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdt2gzqT-l1sJjbAo-i_HGczbpchIU9J8tKv_jcUagfQS9Qj_B5sakVMsFvJZFFOMrlycp-B7kvbazzWvDLa1zJXmOIsAmjDVtwr4f2gB5Ne6r4mZ9bFO4R56cz6pVX8XPedZfrsw?key=diMK_80ckKTiDYYhCkLD1Q" }
  ],
  "dogs": [
      {  "name": "Rotwailer",  "species": "Dogs", "size": "10 ft", "location": "India",  "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcpUZL_lVaoYlN4RHn-g4VVVK7n4Zi53wNe8n73BVSrnsExqko0Api2sYCOaIrOKtt41mhn180NGkjSe30N4s_CRIp44R1WyiVE5DVKJ0fl-EsBtk0Kxm2gDqg_4g9BlLTsValg?key=diMK_80ckKTiDYYhCkLD1Q" },
      {  "name": "German Shepherd","species": "Dogs", "location": "China", "size": "Large", "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwItZMqajFpFFv0rhT453SATyQ_iu37tYN2p5Ka379Zlc8aoE0bgWUDonnG2iIkCeA4vEHaW3jOkm-YbcKsjk1XVYyuj5rV2R2gM7GtDV1fte8OqCy1G668mGbH-ujBxV03kRRTg?key=diMK_80ckKTiDYYhCkLD1Q" }
  ],
  "bigFish": [
      {  "name": "Humpback Whale",  "species": "Big Fish", "size": "10 ft", "location": "USA",  "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHSwj-_SimDoeryiN-c6aH4QLmIJGVTuR4QmgOB2i6N4ahajwEjgy1E1qr3Terf9yyReyfnAwByvKaxD6F_fBCkzGRyYL_UhKwI8ifWRd0aE3s7wh8ExSyk0hlL-yi-ZbSqt4TJw?key=diMK_80ckKTiDYYhCkLD1Q" },
      {  "name": "Killer Whale","species": "Big Fish", "size": "20 ft","location": "Asia", "Japan": "Large", "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcl2XL2NPrp0rPHEcc1Mm_0ey5lpZQ6EOug0R4wIKbfxIDe5F8cLoysziE_yaCOtRRt2Z1xO5jdc4iJtVzJLXDN8yxl8EESCdIirA4s4pVHduP-sHn6CCmbdqeYwjgqcO-rgzOt?key=diMK_80ckKTiDYYhCkLD1Q" }
  ]
}




class Animal{
  constructor(data,animalDivId,species,style,sorting){
    this.data = data,
    this.animalDivId = animalDivId,
    this.species = species,
    this.style = style,
    this.sorting = sorting,
    this.sortDirection = {field: null, direction: 'desc'}
    this.apendHtml()
  }
  
  apendHtml(){
    let container = document.getElementById(this.animalDivId);
    let table = `<table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col" style="cursor: pointer;"  onclick="tableRender['${this.animalDivId}'].sort('species')">Species</th>
        <th scope="col" style="cursor: pointer;" onclick="tableRender['${this.animalDivId}'].sort('name')">Name</th>
        <th scope="col" style="cursor: pointer;" onclick="tableRender['${this.animalDivId}'].sort('size')">Size</th>
        <th scope="col" style="cursor: pointer;" onclick="tableRender['${this.animalDivId}'].sort('location')">Location</th>
        <th scope="col">Image</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>    
    ${this.getTableRow(this.data)}
    </tbody>
    </table>
    <button class="btn btn-sm btn-success" onclick="tableRender['${this.animalDivId}'].addRow()">Add Animal</button>
    `
    container.innerHTML = table
  }

  getTableRow(data){
    return  (data.map((val,index) => {
      return (`<tr>
        <td>${val.species}</td>
        <td style='${this.style.style}'>${val.name}</td>
        <td>${val.size}</td>
        <td>${val.location}</td>
        <td>
        <img class="image" src="${val.image}" style="border: 2px solid black;cursor: pointer;width: 34%;" alt="${val.name}" title="${val.name}">
        
        </td>
        <td>
          <button class="btn btn-primary" onclick="tableRender['${this.animalDivId}'].editRow(${index})">Edit</button>
          <button class="btn btn-danger" onclick="tableRender['${this.animalDivId}'].deleteRow(${index})">Delete</button>
        </td>
      </tr>`)
    }).join(''))
  }

  addRow(){
    let modelId = document.getElementById("myModal");
    let model = `<div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${this.species}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <p id="error"></p>
                    <div class="mb-3">
                     <input type="text" class="form-control" placeholder="name" id="name" required>
                     </div>
                     <div class="mb-3">
                     <input type="number" class="form-control" placeholder="size" id="size" required>
                     </div>
                     <div class="mb-3">
                     <input type="text" class="form-control" placeholder="location" id="location"  required>
                     </div>
                     <div class="mb-3">
                     <input type="url"  class="form-control" placeholder="https://image.png" id="image" required>
                     </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" onclick="tableRender['${this.animalDivId}'].saveAddRow()">Save changes</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              `
              modelId.innerHTML = model
              $("#myModal").modal();
  }

  saveAddRow(){
    if(this.validate(document.getElementById("name").value,false)){
      document.getElementById("error").innerHTML = "This name already exists. Please use another name."
      document.getElementById("error").style.color = "red";
      return false
    }

    let name = document.getElementById("name").value;
    let size = document.getElementById("size").value;
    let location = document.getElementById("location").value;
    let image = document.getElementById("image").value;

    let isfieldempty = name && size && location && image
    if(!isfieldempty) {
      document.getElementById("error").innerHTML = "Please fill all the field"
      document.getElementById("error").style.color = "red";
      return false
    }else{
      document.getElementById("error").innerHTML = ""
    }

    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );

    if(!pattern.test(image)){
      document.getElementById("error").innerHTML = "Please enter the correct image url"
      document.getElementById("error").style.color = "red";
      return false
    }
    

    this.data.push({  "name": name,  "species": this.species, "size": size, "location": location,  "image":image})
    $("#myModal").modal("hide")
    this.apendHtml();
  }

  validate(name,edit,index){
      name = name.trim()
      let existingName = this.data.map(e => e.name.toLowerCase())
      if(edit){
        if(existingName[index] != name.toLowerCase()){
          if(existingName.includes(name.toLowerCase())){ // if name exists the return true else return false
            return true
          }
          return false
        }else{
          return false
        }
      }
      
      if(existingName.includes(name.toLowerCase())){ // if name exists the return true else return false
        return true
      }
      return false
  }
  
 
  editRow(index){
    let data = this.data[index]
    console.log(data)
    let modelId = document.getElementById("myModal");
    let model = `<div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${data.species}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <p id="error"></p>
                    <div class="mb-3">
                     <input type="text" class="form-control" placeholder="name" id="name" value='${data.name}'>
                     </div>
                     <div class="mb-3">
                     <input type="number" class="form-control" placeholder="size" id="size" value=${data.size}>
                     </div>
                     <div class="mb-3">
                     <input type="text" class="form-control" placeholder="location" id="location" value=${data.location}>
                     </div>
                     <div class="mb-3">
                     <input type="url" class="form-control" placeholder="https://image.png" id="image" value=${data.image}>
                     </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" onclick="tableRender['${this.animalDivId}'].saveEditForm(${index})">Save changes</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              `
              modelId.innerHTML = model
              $("#myModal").modal();
  }


  saveEditForm(index){  
   let name = document.getElementById("name").value;
   let size = document.getElementById("size").value;
   let location = document.getElementById("location").value;
   let image = document.getElementById("image").value;

   let isfieldempty = name && size && location && image
    if(!isfieldempty) {
      document.getElementById("error").innerHTML = "Please fill all the field"
      document.getElementById("error").style.color = "red";
      return false
    }else{
      document.getElementById("error").innerHTML = ""
    }

    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );

    if(!pattern.test(image)){
      document.getElementById("error").innerHTML = "Please enter the correct image url"
      document.getElementById("error").style.color = "red";
      return false
    }

    if(this.validate(document.getElementById("name").value,true,index)){
      document.getElementById("error").innerHTML = "This name already exists. Please use another name."
      document.getElementById("error").style.color = "red";
      return false
    }

   this.data[index].name = name
   this.data[index].size = size
   this.data[index].location = location
   this.data[index].image = image
   $("#myModal").modal("hide")
   this.apendHtml();
  }

  deleteRow(index){
    this.data.splice(index,1)
    this.apendHtml()
  }

  sort(sortCol){
    if(!this.sorting.includes(sortCol)) return false
    
    let direction =  this.sortDirection.direction == "asc" ? "desc" : "asc"

    this.data.sort((a, b) => {
      if(direction == "asc"){
        return a[sortCol] > b[sortCol] ? -1 : 1
      }else{
        return  a[sortCol] > b[sortCol] ? 1 : -1
      }
    });

    
    this.sortDirection.direction = direction
    this.sortDirection.field = sortCol
    this.apendHtml()
  }

}


let tableRender = {
  bigCats : new Animal(animalData.bigCats,"bigCats","Big Cats",{},["name", "species", "size", "location"]),
  dogs : new Animal(animalData.dogs,"dogs","Dogs",{ style: 'font-weight: bold;' },["name", "location"]),
  bigFish : new Animal(animalData.bigFish,"bigFish","Big Fish",{ style: 'font-weight: bold; font-style: italic; color: blue;' },["size"]),
}



