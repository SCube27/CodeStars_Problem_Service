# CodeStars Problem Microservice


## How is the routing working:

- /api/v1/problems/ping
    * Since the route starts with /api
        * /api      -> /v1      -> /problems     -> /ping
        * apiRouter -> v1Router -> problemRouter -> problemController -> Service Layer