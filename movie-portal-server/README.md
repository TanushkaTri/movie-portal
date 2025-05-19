
```sh
db_user=MoviePortal
UserPassword=lfT332UREnHY9VDB
MONGO_URI=mongodb+srv://MoviePortal:lfT332UREnHY9VDB@your-cluster.mongodb.net/moviesDB?retryWrites=true&w=majority
PORT=5000
```


The backend will run on `http://localhost:5000`.  

Method   Endpoint     Description                 

 GET    `/movies`       Get all movies             
 POST   `/movies`       Add a new movie            
 DELETE `/movies/:id`   Remove a movie             

