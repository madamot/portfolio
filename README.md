# Portfolio Monorepo

https://adamhorne.co.uk/

## Todos

Recreate both s3 buckets via SAM templates

create page-madamot-live-cache bucket with sns

### page-deploy-site

- ~~Replace the lambda that is triggered on DatoCMS to be a lambda that fetches all the site's data via the GQL query and places that JSON in a s3 Bucket.~~
- ~~There is then a listener on that s3 bucket and when a file is uploaded that tells SNS that that page is ready to be generated via the page-deploy-site lambda.~~
- ~~Create a listing component~~
- ~~Make non published items in the cms previewable at /preview~~
- ~~Image component~~
- ~~Make images in listing component and billboard component fade in like the image component~~
- Create accordian component
- ~~Side bar component~~
- open search for all recipes
- ~~CI/CD. Jenkins?~~
- dynamoDB
- ~~Add autoscaling group to jenkins slave~~
- ~~Create stage env~~
- Put lambdas in API Gateway
