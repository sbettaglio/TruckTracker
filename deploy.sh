docker build -t TruckTracker-image .

docker tag TruckTracker-image registry.heroku.com/TruckTracker/web


docker push registry.heroku.com/TruckTracker/web

heroku container:release web -a TruckTracker