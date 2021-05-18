class ItemSource {
  static fetchItemListing = async () => {
    const mockUrl = './mock/products.json'
    const response = await fetch(mockUrl)
    const itemListing = await response.json()
    console.log(itemListing)
    return itemListing
  }
}

class ItemsDisplay {
  static render = async () => {
    const $rowContainer = document.querySelector('#itemsRow')
    const itemListing = await ItemSource.fetchItemListing()

    itemListing.ps4Games.forEach(videoGame => {
        // this hacky for this demo but there are better ways to do this
        // especially in a SPA. This serves just for the demo :)
      $rowContainer.innerHTML += `
          <div class='col-md-3'>
                  <div class='card'>
                  <h3>${videoGame.name}</h3>
                  <img src="${videoGame.image}"/>
                  <p>${videoGame.Description}</p>
                  <h4>ksh ${videoGame.price}</h4>
                  <Button class='btn btn-primary'>Add to Cart</Button>
                  <Button class='btn btn'>Add to WishList</Button>
              <div>
          </div>`
    })
  }
}

ItemsDisplay.render()
