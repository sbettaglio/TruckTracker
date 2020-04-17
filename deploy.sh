docker build -t sdg-truck-tracker-image .

docker tag sdg-truck-tracker-image registry.heroku.com/sdg-truck-tracker/web


docker push registry.heroku.com/sdg-truck-tracker/web

heroku container:release web -a sdg-truck-tracker