# JumboTail Assignment - Shipping Charge Estimator

## Overview
A Node.js API for calculating shipping charges in a B2B marketplace. It includes:
- Nearest warehouse retrieval.
- Shipping charge calculation based on distance, weight, and delivery speed.

---

## Prerequisites
- Node.js installed (v14+ recommended).
- MongoDB installed and running locally.

---

## Setup Instructions

### 1. Clone the Repository

git clone <repository-url>


### Install Dependencies
--npm start
API Endpoints
1. Get Nearest Warehouse
URL: GET /api/v1/nearest-warehouse
Query Params:
lat: Latitude of seller location.
lng: Longitude of seller location.
Sample Request:
GET /api/v1/nearest-warehouse?lat=11.232&lng=23.445495

sample response:-
{
    "name": "BLR_Warehouse",
    "location": { "lat": 12.99999, "lng": 37.923273 }
}


## Calculate Shipping Charge
# URL: POST /api/v1/calculate-shipping
Request Body:

{
    "productId": "123",
    "customerLat": 12.232,
    "customerLng": 25.445495,
    "deliverySpeed": "express"
}
# Sample Response:

{
    "shippingCharge": 150.00
}

### Combined API
URL: POST /api/v1/calculate-shipping
# Request Body:

{
    "sellerId": "123",
    "customerLat": 12.232,
    "customerLng": 25.445495,
    "deliverySpeed": "express"
}
## Sample Response:

{
    "nearestWarehouse": {
        "name": "BLR_Warehouse",
        "location": { "lat": 12.99999, "lng": 37.923273 }
    },
    "shippingCharge": 180.00
}
