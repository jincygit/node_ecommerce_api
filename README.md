# node_ecommerce_api
node ecomerce api
# ECONNERCE API

-  Coding Ninjas Skill Test Assignment

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    
  </ol>
</details>

## About The Project

- Design an API for an ecommerce platform admin to manage product inventory
- Tech Stack: Node.js &amp; Mongo DB

### Features :

- Design an API for an ecommerce platform admin to manage product inventory
- Tech Stack: Node.js &amp; Mongo DB

### Built With

Here is the Technology Stack of this Application. which I have used to Built this Application.

-  MongoDB
-  Express
-  NodeJS
-  HTML
-  CSS

<!-- GETTING STARTED -->

## Getting Started

-  Clone this project
-  Start by installing npm and mongoDB if you don't have them already.
-  Run the Mongo Server.


### Installation and Run

1. Clone the repo
   ```sh
   git clone https://github.com/jincygit/node_ecommerce_api.git
   ```

2. Start Redis using ubuntu(here this project is not needed, but i include this project)
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run Node project
   ```sh
   npm start
   ```
### Access the Application:
   ## for frontend of ecommerce project
   http://localhost:8000/ecommerce/home
   

### API Details:
    ## for create product
        -API to add products to the database
            -URL [POST]: /products/create
            ```
            http://localhost:8000/products/create
            ```
                //request
                    product: {
                    name: laptop,
                    quantity: 10
                    }
                //response
                    data: {
                        product: {
                            name: laptop,
                            quantity: 10
                        }
                    }

        -API to list products
            -URL [GET] : /products
            ```
            http://localhost:8000/products
            ```
        - API to delete products
            -URL [DELETE] : /products/:id
             ```
            http://localhost:8000/products/650d8684b6165f5010e7c9ce
            ```
        - API to update quantity of a product (can be incremented or decremented)
            -URL [POST] : /products/:id/update_quantity/?number=10
             ```
            http://localhost:8000/products/650d8684b6165f5010e7c9ce/update_quantity/?number=-10
            ```







